# Templates

Template definitions, metadata and assets for Deplo.

## Adding a template

Each template owns only its name. Every deployable variant owns its metadata and assets:

```text
templates/<template>/
├── meta.json
├── logo.png                  # optional template logo/fallback
└── <variant>/
    ├── meta.json
    ├── description.md
    ├── logo.png              # optional
    ├── images/               # optional screenshots
    ├── docker-compose.yml
    └── template.toml
```

Template and variant slugs are derived from their names and must be unique in
their respective scope. `category` must be one of the identifiers allowed by
`schemas/variant.schema.json`. Every template must include a variant
named `Default` (slug `default`), which is the store's canonical variant.
`links.docs` is an array of HTTPS URLs.

### Metadata examples

`templates/actual-budget/meta.json`

```json
{
  "name": "Actual Budget"
}
```

`templates/actual-budget/default/meta.json`

```json
{
  "name": "Default",
  "shortDescription": "Private budgeting server with a persistent data directory and HTTPS access.",
  "category": "finance",
  "developedBy": {
    "label": "Actual Budget",
    "url": "https://actualbudget.org/"
  },
  "links": {
    "website": "https://actualbudget.org/"
  }
}
```

See the [family schema](schemas/template.schema.json) and
[variant schema](schemas/variant.schema.json) for the allowed fields.
Open a pull request with the template files and assets you changed.

### Descriptions

Keep `description.md` concise and omit titles and documentation-style sections.
Explain what the variant deploys, what data persists, and any manual setup
required before or after deployment.

### Routed services

`template.toml` declares one `[[config.domains]]` per publicly routed service:

```toml
[[config.domains]]
serviceName = "client"
port = 3002
host = "${main_domain}"   # optional: one is generated when absent
primary = true            # optional: this entry takes the app's main domain

[[config.domains]]
serviceName = "backend"
port = 3001
host = "${main_domain}"
path = "/api"             # optional: same host, different path
```

`serviceName` and `port` are required; an entry missing either is ignored. A
`path` with no `host` of its own means the app's own address at that path -
which is how a stack that only takes one base URL routes its UI and its API.

## Validate templates locally

Run the bundled validator from the repository root:

```sh
./validate
```

On Windows, run:

```powershell
.\validate.cmd
```

The launcher selects the binary for your platform and checks the templates in
this checkout. macOS, Linux and Windows are supported on x64 and ARM64.
Pass a directory as the first argument to validate a different set of templates.
The [third-party notices](bin/THIRD_PARTY_NOTICES.txt) are bundled with the executables.

## License

**[MIT](LICENSE)** © 2026 DeploCloud.

Deliberately more permissive than [deplo itself](https://github.com/DeploCloud/deplo),
which is AGPL: these are recipes. Copy one, adapt it, ship it somewhere else, no strings.
Contributing a template back is welcome and never required.

Each template deploys **third-party software under its own license**. MIT covers the
catalog and the metadata around it, not what a template installs.
