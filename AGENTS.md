# AGENTS.md

The **template catalog** deplo deploys from. A Bun HTTP service; deplo reads it over HTTP at
`templates.deplo.build`, so a new template goes live without a deplo release. `README.md` has the
per-template file contract and the endpoint list; `../deplo/docs/adr/0023-the-template-catalog-is-a-remote-service.md`
has why it lives outside the control plane.

- `src/templates/<dir>/` - `meta.ts`, `description.md`, `docker-compose.yml`, `template.toml`, plus
  optional `logo.png` and `images/*`. The slug is derived from `name`, not the directory.
- `bun run generate` validates everything and writes `src/generated/`, **which is committed** - the
  deployed service only runs `bun run start`. Regenerate and commit in the same change.
- `category.name` must match a category in `src/categories.ts`.

## Descriptions

`description.md` is user-facing Markdown: keep it as a concise description without a title or
documentation-style sections, explain what the template deploys and what persists, and document any
manual setup required before or after deployment.

## Comments

Few and short. **Hard cap about 3 lines per block.** No file-header essays, no design narratives.
Where a feature has a docs page, one link replaces the explanation:
`// https://deplo.build/docs/guides/deploy-from-a-template`. Pragmas, `@ts-expect-error`,
`eslint-disable` and `ponytail:` markers are code and stay untouched.

**Never name a competitor** in a comment, a string or UI copy.

## Commits

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):
`type(scope): imperative lowercase summary`. **Title 50 characters or fewer, no trailing period.**
Body only when the why does not fit the title, 2-3 lines at most. Commit straight to `main`; never
create a branch. A new template is `feat(templates): add <name>`.
