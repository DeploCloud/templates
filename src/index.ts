import { consola } from "consola";
import { z } from "zod";
import { categories, templates, version } from "./generated/data";
import { withRateLimit } from "./middleware";
import {
  categoryListQuerySchema,
  slugSchema,
  templateListQuerySchema,
} from "./schemas";
import { listCategories, listTemplates, paginate } from "./listing";

const generatedDirectory = `${import.meta.dir}/generated`;

function json(value: unknown, status = 200) {
  return Response.json(value, {
    status,
    headers: {
      "Cache-Control": status === 200 ? "public, max-age=60" : "no-store",
    },
  });
}

const notFound = () => json({ error: "Not found" }, 404);

function validatedQuery<T>(
  request: Request,
  schema: z.ZodType<T>,
  handler: (query: T) => Response,
) {
  const result = schema.safeParse(
    Object.fromEntries(new URL(request.url).searchParams),
  );
  return result.success
    ? handler(result.data)
    : json({ error: z.flattenError(result.error) }, 400);
}

async function serveAsset(path: string) {
  const asset = Bun.file(path);
  return (await asset.exists())
    ? new Response(asset, {
        headers: {
          "Content-Type": asset.type,
          "Cache-Control": "public, max-age=86400",
        },
      })
    : notFound();
}

const server = Bun.serve({
  development: process.env.NODE_ENV === "development",
  routes: {
    "/status": withRateLimit(() => json({ status: "ok" })),
    "/templates": withRateLimit((request) =>
      validatedQuery(request, templateListQuerySchema, (query) =>
        json(paginate(listTemplates(query), query)),
      ),
    ),
    "/templates/:slug": withRateLimit((request) => {
      const template = templates.find(
        ({ slug }) => slug === request.params.slug,
      );
      return template ? json(template) : notFound();
    }),
    "/categories": withRateLimit((request) =>
      validatedQuery(request, categoryListQuerySchema, (query) =>
        json(paginate(listCategories(query), query)),
      ),
    ),
    "/categories/:slug": withRateLimit((request) => {
      const category = categories.find(
        ({ slug }) => slug === request.params.slug,
      );
      return category ? json(category) : notFound();
    }),
    "/images/:slug/:file": withRateLimit((request) => {
      const { slug, file } = request.params;
      return slugSchema.safeParse(slug).success
        ? serveAsset(`${generatedDirectory}/images/${slug}/${file}`)
        : notFound();
    }, "asset"),
    "/files/:slug/:file": withRateLimit((request) => {
      const { slug, file } = request.params;
      return slugSchema.safeParse(slug).success
        ? serveAsset(`${generatedDirectory}/files/${slug}/${file}`)
        : notFound();
    }, "asset"),
    "/version": withRateLimit(() => json({ version })),
  },
  fetch: withRateLimit(async () => notFound()),
});

consola.success(`Server running at ${server.url}`);
