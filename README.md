# templates

The one-click template catalog Deplo deploys from. Deplo reads it over HTTP, so
a new template goes live without a Deplo release.

## Adding a template

Each template owns only its name. Every deployable variant owns its metadata and assets:

```text
src/templates/<template>/
├── meta.ts
├── logo.png                  # optional template logo/fallback
└── <variant>/
    ├── meta.ts
    ├── description.md
    ├── logo.png              # optional
    ├── images/               # optional screenshots
    ├── docker-compose.yml
    └── template.toml
```

The template `meta.ts` exports a `TemplateRaw`; each variant `meta.ts` exports a
`TemplateVariantRaw`. Template and variant slugs are derived from their names
and must be unique in their respective scope. `category.name` has to match one
of the categories in `src/categories.ts`. Every template must include a variant
named `Default` (slug `default`), which is the store's canonical variant.
`links.docs` is an array of HTTPS URLs.

Then:

```sh
bun run generate   # validates everything and writes src/generated/
bun run dev        # serves it on :3000
```

`src/generated/` is committed: the deployed service only runs `bun run start`.

## Endpoints

```
GET /status                 GET /templates?page=&limit=&search=&category=&sort=&order=
GET /version                GET /templates/:templateSlug
                            GET /categories        GET /categories/:slug
                            GET /images/:templateSlug/:file
                            GET /images/:templateSlug/:variantSlug/:file
                            GET /files/:templateSlug/:variantSlug/:file
```

Read-only. Rate limited per client: 120 JSON requests and 600 asset requests a
minute. Behind a reverse proxy, set `TRUSTED_PROXY_HEADER` to the header it sets
(`cf-connecting-ip` behind Cloudflare) or every client shares one bucket.

## License

**[MIT](LICENSE)** © 2026 DeploCloud.

Deliberately more permissive than [deplo itself](https://github.com/DeploCloud/deplo),
which is AGPL: these are recipes. Copy one, adapt it, ship it somewhere else, no strings.
Contributing a template back is welcome and never required.

Each template deploys **third-party software under its own license**. MIT covers the
catalog and the metadata around it, not what a template installs.
