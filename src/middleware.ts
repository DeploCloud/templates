import { hitlimit, memoryStore } from "@joint-ops/hitlimit-bun";

type RouteHandler<Path extends string> = (
  request: Bun.BunRequest<Path>,
  server: Bun.Server<undefined>,
) => Response | Promise<Response>;

const store = memoryStore();

export function withRateLimit<Path extends string>(
  handler: RouteHandler<Path>,
): RouteHandler<Path> {
  const limited = hitlimit(
    {
      limit: 60,
      window: "1m",
      store,
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
