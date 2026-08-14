import { hitlimit, memoryStore } from "@joint-ops/hitlimit-bun";

type RouteHandler<Path extends string> = (
  request: Bun.BunRequest<Path>,
  server: Bun.Server<undefined>,
) => Response | Promise<Response>;

const store = memoryStore();

/** The one server this process runs; `hitlimit` only hands the key generator a
 *  Request, and resolving a socket address needs the server. Written once. */
let bunServer: Bun.Server<undefined> | undefined;

/**
 * Who a request is counted against. This service sits behind a reverse proxy in
 * every deployment that matters, and the socket address there is the proxy's —
 * so keying on it puts the whole internet in a single bucket. `TRUSTED_PROXY_HEADER`
 * names the header the proxy in front sets (Cloudflare: `cf-connecting-ip`), and
 * only that one is read, so a client cannot pick its own bucket by inventing one.
 */
const trustedHeader = process.env.TRUSTED_PROXY_HEADER?.toLowerCase();

function clientKey(request: Request) {
  if (trustedHeader) {
    // A forwarded chain reads "client, proxy1, proxy2" — the client is first.
    const forwarded = request.headers.get(trustedHeader)?.split(",")[0]?.trim();
    if (forwarded) return forwarded;
  }
  return bunServer?.requestIP(request)?.address ?? "unknown";
}

/**
 * Assets are dozens of requests per page view (one per logo) and the browser
 * caches them for a day; the JSON endpoints are a handful. A single shared
 * budget would let one catalog page lock out its own reader.
 */
const LIMITS = { json: 120, asset: 600 } as const;

export function withRateLimit<Path extends string>(
  handler: RouteHandler<Path>,
  kind: keyof typeof LIMITS = "json",
): RouteHandler<Path> {
  const limited = hitlimit(
    {
      limit: LIMITS[kind],
      window: "1m",
      store,
      key: (request: Request) => `${kind}:${clientKey(request)}`,
      response: { error: "Too many requests" },
    },
    async (request, server) =>
      request.method === "GET" || request.method === "HEAD"
        ? handler(
            request as Bun.BunRequest<Path>,
            server as Bun.Server<undefined>,
          )
        : Response.json(
            { error: "Method not allowed" },
            { status: 405, headers: { "Cache-Control": "no-store" } },
          ),
  );

  return async (request, server) => {
    bunServer ??= server;
    const response = await limited(request, server);
    const headers = new Headers(response.headers);
    headers.set("Access-Control-Allow-Origin", "*");
    if (response.status === 429) headers.set("Cache-Control", "no-store");
    if (response.status === 405) headers.set("Allow", "GET, HEAD");
    return new Response(request.method === "HEAD" ? null : response.body, {
      status: response.status,
      headers,
    });
  };
}
