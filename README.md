# templates

The one-click template catalog Deplo deploys from. Deplo reads it over HTTP, so
a new template goes live without a Deplo release.

## Adding a template

Create `src/templates/<anything>/` with:

| File                 | Required | What it is                                                      |
| -------------------- | -------- | --------------------------------------------------------------- |
| `meta.ts`            | yes      | Default-exports a `TemplateRaw` (name, category, links, dates).   |
| `description.md`     | yes      | The long description. Markdown, at least 20 characters.           |
| `docker-compose.yml` | yes      | The stack Deplo deploys. Must be valid YAML.                      |
| `template.toml`      | yes      | Variables, env, exposed services and mounted config files.        |
| `logo.png`           | no       | Any raster format Bun reads (PNG, JPEG, WebP, GIF, AVIF, HEIC).   |
| `images/*`           | no       | Screenshots, converted and numbered in filename order.            |

The **slug is derived from `name`** (`AdGuard Home` → `adguard-home`) and must be
unique, so the directory name is only for humans. `category.name` has to match
one of the categories in `src/categories.ts`.

Then:

```sh
bun run generate   # validates everything and writes src/generated/
bun run dev        # serves it on :3000
```

`src/generated/` is committed: the deployed service only runs `bun run start`.

## Endpoints

```
GET /status                 GET /templates?page=&limit=&search=&category=&sort=&order=
GET /version                GET /templates/:slug
                            GET /categories        GET /categories/:slug
                            GET /images/:slug/:file  GET /files/:slug/:file
```

Read-only. Rate limited per client: 120 JSON requests and 600 asset requests a
minute. Behind a reverse proxy, set `TRUSTED_PROXY_HEADER` to the header it sets
(`cf-connecting-ip` behind Cloudflare) or every client shares one bucket.
