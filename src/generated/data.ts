import type { Category, Template } from "../schemas";

const data = {
  "categories": [
    {
      "name": "Database",
      "icon": "database",
      "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
      "slug": "database"
    },
    {
      "name": "AI",
      "icon": "sparkles",
      "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
      "slug": "ai"
    },
    {
      "name": "Monitoring",
      "icon": "activity",
      "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
      "slug": "monitoring"
    },
    {
      "name": "Analytics",
      "icon": "chart-line",
      "description": "Product, web and business analytics, from privacy-first page counters to full dashboards.",
      "slug": "analytics"
    },
    {
      "name": "Media",
      "icon": "clapperboard",
      "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
      "slug": "media"
    },
    {
      "name": "Communication",
      "icon": "message-circle",
      "description": "Chat, calls, forums and the bots and bridges that connect a team or a community.",
      "slug": "communication"
    },
    {
      "name": "Email",
      "icon": "mail",
      "description": "Mail servers, transactional senders, newsletters and the inboxes to read them in.",
      "slug": "email"
    },
    {
      "name": "CMS",
      "icon": "layout-template",
      "description": "Blogs, sites, headless content APIs and the storefronts built on top of them.",
      "slug": "cms"
    },
    {
      "name": "Productivity",
      "icon": "list-todo",
      "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
      "slug": "productivity"
    },
    {
      "name": "Automation",
      "icon": "workflow",
      "description": "Workflow builders, schedulers and low-code tools that wire your services together.",
      "slug": "automation"
    },
    {
      "name": "Development",
      "icon": "code",
      "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
      "slug": "development"
    },
    {
      "name": "Security",
      "icon": "shield",
      "description": "Identity providers, single sign-on, password vaults and secret management.",
      "slug": "security"
    },
    {
      "name": "Storage",
      "icon": "hard-drive",
      "description": "Object storage, file sync, backups and the shares and drives behind them.",
      "slug": "storage"
    },
    {
      "name": "Networking",
      "icon": "network",
      "description": "Proxies, VPNs, DNS, tunnels and the gateways that put your services on the internet.",
      "slug": "networking"
    },
    {
      "name": "Finance",
      "icon": "wallet",
      "description": "Accounting, invoicing, budgeting, payments and the ledgers a business runs on.",
      "slug": "finance"
    },
    {
      "name": "Other",
      "icon": "package",
      "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
      "slug": "other"
    }
  ],
  "templates": [
    {
      "name": "Diun",
      "logo": "/images/diun/logo.webp",
      "variants": [
        {
          "name": "Default",
          "shortDescription": "Docker image update notifier that watches registries and reports new image versions.",
          "category": {
            "name": "Monitoring",
            "icon": "activity",
            "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
            "slug": "monitoring"
          },
          "developedBy": {
            "label": "Diun",
            "url": "https://github.com/crazy-max"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/crazy-max/diun",
            "website": "https://crazymax.dev/diun/",
            "docs": [
              "https://crazymax.dev/diun/"
            ]
          },
          "lastUpdate": new Date("2026-08-26T00:00:00.000Z"),
          "createdAt": new Date("2026-08-26T00:00:00.000Z"),
          "description": "# Diun\n\nDiun watches Docker images and reports when newer versions are available in\ntheir registries.\n\nThis template monitors the local Docker host and keeps its notification state in\na persistent volume. Add a notification provider to receive alerts.",
          "logo": "/images/diun/default/logo.webp",
          "images": [],
          "slug": "default",
          "files": {
            "config": "/files/diun/default/template.toml",
            "compose": "/files/diun/default/docker-compose.yml"
          }
        }
      ],
      "slug": "diun"
    },
    {
      "name": "Forgejo",
      "logo": "/images/forgejo/logo.webp",
      "variants": [
        {
          "name": "Default",
          "shortDescription": "Community-driven self-hosted Git forge with repositories, issues, pull requests and SQLite storage.",
          "category": {
            "name": "Development",
            "icon": "code",
            "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
            "slug": "development"
          },
          "developedBy": {
            "label": "Forgejo",
            "url": "https://codeberg.org/forgejo"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://codeberg.org/forgejo/forgejo",
            "website": "https://forgejo.org/",
            "docs": [
              "https://forgejo.org/docs/latest/admin/installation/docker/"
            ]
          },
          "lastUpdate": new Date("2026-08-29T00:00:00.000Z"),
          "createdAt": new Date("2026-08-29T00:00:00.000Z"),
          "description": "Forgejo is a community-driven Git forge for repositories, issues, pull requests and code review. This variant uses the built-in SQLite database and stores the complete server state in one persistent volume.\n\nThe catalog exposes the web interface over HTTPS. SSH is disabled so multiple Git services can share a server without reserving host ports.",
          "logo": "/images/forgejo/default/logo.webp",
          "images": [],
          "slug": "default",
          "files": {
            "config": "/files/forgejo/default/template.toml",
            "compose": "/files/forgejo/default/docker-compose.yml"
          }
        },
        {
          "name": "PostgreSQL",
          "shortDescription": "Community-driven self-hosted Git forge with repositories, issues, pull requests and PostgreSQL storage.",
          "category": {
            "name": "Development",
            "icon": "code",
            "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
            "slug": "development"
          },
          "developedBy": {
            "label": "Forgejo",
            "url": "https://codeberg.org/forgejo"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://codeberg.org/forgejo/forgejo",
            "website": "https://forgejo.org/",
            "docs": [
              "https://forgejo.org/docs/latest/admin/installation/database-preparation/"
            ]
          },
          "lastUpdate": new Date("2026-08-29T00:00:00.000Z"),
          "createdAt": new Date("2026-08-29T00:00:00.000Z"),
          "description": "Forgejo is a community-driven Git forge for repositories, issues, pull requests and code review. This variant includes PostgreSQL for installations that need a separate relational database and a more scalable application store.\n\nThe catalog exposes the web interface over HTTPS. SSH is disabled so multiple Git services can share a server without reserving host ports.",
          "logo": "/images/forgejo/postgresql/logo.webp",
          "images": [],
          "slug": "postgresql",
          "files": {
            "config": "/files/forgejo/postgresql/template.toml",
            "compose": "/files/forgejo/postgresql/docker-compose.yml"
          }
        }
      ],
      "slug": "forgejo"
    },
    {
      "name": "Garage S3",
      "logo": "/images/garage-s3/logo.webp",
      "variants": [
        {
          "name": "Default",
          "shortDescription": "Distributed S3-compatible object storage built for self-hosting across multiple machines without a single point of failure.",
          "category": {
            "name": "Storage",
            "icon": "hard-drive",
            "description": "Object storage, file sync, backups and the shares and drives behind them.",
            "slug": "storage"
          },
          "developedBy": {
            "label": "Deuxfleurs",
            "url": "https://github.com/Deuxfleurs"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://git.deuxfleurs.fr/Deuxfleurs/garage",
            "website": "https://garagehq.deuxfleurs.fr",
            "docs": [
              "https://garagehq.deuxfleurs.fr/documentation/quick-start/"
            ]
          },
          "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
          "createdAt": new Date("2026-08-14T00:00:00.000Z"),
          "description": "# Garage S3\n\n**Garage** è uno storage a oggetti compatibile con **Amazon S3**, progettato per essere eseguito in autonomia su una o più macchine.\n\nLa versione **Base** include il servizio essenziale per:\n\n- creare bucket S3;\n- gestire chiavi e permessi di accesso;\n- distribuire i dati tra più nodi;\n- mantenere lo storage operativo senza dipendere da un singolo server.\n\nPer maggiori informazioni, visita la [documentazione ufficiale di Garage](https://garagehq.deuxfleurs.fr).",
          "logo": "/images/garage-s3/default/logo.webp",
          "images": [],
          "slug": "default",
          "files": {
            "config": "/files/garage-s3/default/template.toml",
            "compose": "/files/garage-s3/default/docker-compose.yml"
          }
        },
        {
          "name": "Web UI",
          "shortDescription": "Distributed S3-compatible object storage for self-hosting, bundled with a web UI for managing buckets and access keys.",
          "category": {
            "name": "Storage",
            "icon": "hard-drive",
            "description": "Object storage, file sync, backups and the shares and drives behind them.",
            "slug": "storage"
          },
          "developedBy": {
            "label": "Deuxfleurs",
            "url": "https://github.com/Deuxfleurs"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://git.deuxfleurs.fr/Deuxfleurs/garage",
            "website": "https://garagehq.deuxfleurs.fr",
            "docs": [
              "https://garagehq.deuxfleurs.fr/documentation/quick-start/"
            ]
          },
          "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
          "createdAt": new Date("2026-08-14T00:00:00.000Z"),
          "description": "# Garage S3 con Web UI\n\n**Garage** è uno storage a oggetti compatibile con **Amazon S3**, pensato per il self-hosting e la distribuzione tra più macchine.\n\nQuesta versione aggiunge una **Web UI** per gestire più facilmente:\n\n- bucket e contenuti;\n- chiavi di accesso;\n- configurazione dello storage;\n- operazioni quotidiane di amministrazione.\n\nScopri di più sul [sito ufficiale di Garage](https://garagehq.deuxfleurs.fr).",
          "logo": "/images/garage-s3/web-ui/logo.webp",
          "images": [],
          "slug": "web-ui",
          "files": {
            "config": "/files/garage-s3/web-ui/template.toml",
            "compose": "/files/garage-s3/web-ui/docker-compose.yml"
          }
        }
      ],
      "slug": "garage-s3"
    },
    {
      "name": "Gitea",
      "logo": "/images/gitea/logo.webp",
      "variants": [
        {
          "name": "Default",
          "shortDescription": "Lightweight self-hosted Git service with repositories, issues, pull requests and SQLite storage.",
          "category": {
            "name": "Development",
            "icon": "code",
            "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
            "slug": "development"
          },
          "developedBy": {
            "label": "Gitea",
            "url": "https://github.com/go-gitea"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/go-gitea/gitea",
            "website": "https://about.gitea.com/",
            "docs": [
              "https://docs.gitea.com/installation/install-with-docker/"
            ]
          },
          "lastUpdate": new Date("2026-08-29T00:00:00.000Z"),
          "createdAt": new Date("2026-08-29T00:00:00.000Z"),
          "description": "Gitea is a lightweight Git service for repositories, issues, pull requests and actions. This variant stores all application data, including its SQLite database, in one persistent volume for a small installation.\n\nThe catalog exposes the web interface over HTTPS. SSH is disabled so multiple Git services can share a server without reserving host ports.",
          "logo": "/images/gitea/default/logo.webp",
          "images": [],
          "slug": "default",
          "files": {
            "config": "/files/gitea/default/template.toml",
            "compose": "/files/gitea/default/docker-compose.yml"
          }
        },
        {
          "name": "PostgreSQL",
          "shortDescription": "Lightweight self-hosted Git service with repositories, issues, pull requests and PostgreSQL storage.",
          "category": {
            "name": "Development",
            "icon": "code",
            "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
            "slug": "development"
          },
          "developedBy": {
            "label": "Gitea",
            "url": "https://github.com/go-gitea"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/go-gitea/gitea",
            "website": "https://about.gitea.com/",
            "docs": [
              "https://docs.gitea.com/installation/install-with-docker/"
            ]
          },
          "lastUpdate": new Date("2026-08-29T00:00:00.000Z"),
          "createdAt": new Date("2026-08-29T00:00:00.000Z"),
          "description": "Gitea is a lightweight Git service for repositories, issues, pull requests and actions. This variant includes PostgreSQL for installations that need a separate relational database and a more scalable application store.\n\nThe catalog exposes the web interface over HTTPS. SSH is disabled so multiple Git services can share a server without reserving host ports.",
          "logo": "/images/gitea/postgresql/logo.webp",
          "images": [],
          "slug": "postgresql",
          "files": {
            "config": "/files/gitea/postgresql/template.toml",
            "compose": "/files/gitea/postgresql/docker-compose.yml"
          }
        }
      ],
      "slug": "gitea"
    },
    {
      "name": "Grafana",
      "logo": "/images/grafana/logo.webp",
      "variants": [
        {
          "name": "Default",
          "shortDescription": "Open-source dashboards for querying, visualizing and alerting on metrics and logs.",
          "category": {
            "name": "Monitoring",
            "icon": "activity",
            "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
            "slug": "monitoring"
          },
          "developedBy": {
            "label": "Grafana Labs",
            "url": "https://github.com/grafana"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/grafana/grafana",
            "website": "https://grafana.com/",
            "docs": [
              "https://grafana.com/docs/grafana/latest/"
            ]
          },
          "lastUpdate": new Date("2026-08-25T00:00:00.000Z"),
          "createdAt": new Date("2026-08-25T00:00:00.000Z"),
          "description": "# Grafana\n\nGrafana provides dashboards, visualizations and alerting for metrics, logs and\nother observability data sources.\n\nThe template persists dashboards, users and Grafana configuration.",
          "logo": "/images/grafana/default/logo.webp",
          "images": [],
          "slug": "default",
          "files": {
            "config": "/files/grafana/default/template.toml",
            "compose": "/files/grafana/default/docker-compose.yml"
          }
        },
        {
          "name": "PostgreSQL",
          "shortDescription": "Grafana dashboards backed by a dedicated PostgreSQL database for persistent production deployments.",
          "category": {
            "name": "Monitoring",
            "icon": "activity",
            "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
            "slug": "monitoring"
          },
          "developedBy": {
            "label": "Grafana Labs",
            "url": "https://github.com/grafana"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/grafana/grafana",
            "website": "https://grafana.com/",
            "docs": [
              "https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/"
            ]
          },
          "lastUpdate": new Date("2026-08-29T00:00:00.000Z"),
          "createdAt": new Date("2026-08-29T00:00:00.000Z"),
          "description": "# Grafana with PostgreSQL\n\nGrafana provides dashboards, visualizations and alerting for metrics, logs and\nother observability data sources.\n\nThis variant stores Grafana users, dashboards and settings in the included\nPostgreSQL database instead of the default SQLite store.",
          "logo": "/images/grafana/postgresql/logo.webp",
          "images": [],
          "slug": "postgresql",
          "files": {
            "config": "/files/grafana/postgresql/template.toml",
            "compose": "/files/grafana/postgresql/docker-compose.yml"
          }
        }
      ],
      "slug": "grafana"
    },
    {
      "name": "Homarr",
      "logo": "/images/homarr/logo.webp",
      "variants": [
        {
          "name": "Default",
          "shortDescription": "Self-hosted home dashboard for organizing services, links and widgets with a zero-setup SQLite database.",
          "category": {
            "name": "Other",
            "icon": "package",
            "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
            "slug": "other"
          },
          "developedBy": {
            "label": "Homarr",
            "url": "https://github.com/homarr-labs"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/homarr-labs/homarr",
            "website": "https://homarr.dev/",
            "docs": [
              "https://homarr.dev/docs/getting-started/installation/docker/"
            ]
          },
          "lastUpdate": new Date("2026-08-29T00:00:00.000Z"),
          "createdAt": new Date("2026-08-29T00:00:00.000Z"),
          "description": "Homarr is a self-hosted home dashboard for organizing services, links and widgets. The default variant uses the built-in SQLite database, which is simple to back up and needs no companion service.",
          "logo": "/images/homarr/default/logo.webp",
          "images": [],
          "slug": "default",
          "files": {
            "config": "/files/homarr/default/template.toml",
            "compose": "/files/homarr/default/docker-compose.yml"
          }
        },
        {
          "name": "PostgreSQL",
          "shortDescription": "Self-hosted Homarr dashboard backed by a dedicated PostgreSQL database for larger installations.",
          "category": {
            "name": "Other",
            "icon": "package",
            "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
            "slug": "other"
          },
          "developedBy": {
            "label": "Homarr",
            "url": "https://github.com/homarr-labs"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/homarr-labs/homarr",
            "website": "https://homarr.dev/",
            "docs": [
              "https://homarr.dev/docs/advanced/environment-variables/"
            ]
          },
          "lastUpdate": new Date("2026-08-29T00:00:00.000Z"),
          "createdAt": new Date("2026-08-29T00:00:00.000Z"),
          "description": "Homarr is a self-hosted home dashboard for organizing services, links and widgets. This variant stores its application data in the included PostgreSQL service for installations that need an external relational database.",
          "logo": "/images/homarr/postgresql/logo.webp",
          "images": [],
          "slug": "postgresql",
          "files": {
            "config": "/files/homarr/postgresql/template.toml",
            "compose": "/files/homarr/postgresql/docker-compose.yml"
          }
        }
      ],
      "slug": "homarr"
    },
    {
      "name": "Homepage",
      "logo": "/images/homepage/logo.webp",
      "variants": [
        {
          "name": "Default",
          "shortDescription": "Customizable self-hosted dashboard for links, bookmarks, service status and widgets without host access.",
          "category": {
            "name": "Other",
            "icon": "package",
            "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
            "slug": "other"
          },
          "developedBy": {
            "label": "Homepage",
            "url": "https://github.com/gethomepage"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/gethomepage/homepage",
            "website": "https://gethomepage.dev/",
            "docs": [
              "https://gethomepage.dev/installation/"
            ]
          },
          "lastUpdate": new Date("2026-08-29T00:00:00.000Z"),
          "createdAt": new Date("2026-08-29T00:00:00.000Z"),
          "description": "Homepage is a configurable dashboard for bookmarks, service links, status checks and API widgets. This default variant keeps its configuration in a persistent volume and does not require access to the server Docker socket.\n\nEdit the files in the app storage area to add services, bookmarks, settings and widgets.",
          "logo": "/images/homepage/default/logo.webp",
          "images": [],
          "slug": "default",
          "files": {
            "config": "/files/homepage/default/template.toml",
            "compose": "/files/homepage/default/docker-compose.yml"
          }
        },
        {
          "name": "Docker Discovery",
          "shortDescription": "Homepage dashboard with read-only Docker container discovery through a restricted socket proxy.",
          "category": {
            "name": "Other",
            "icon": "package",
            "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
            "slug": "other"
          },
          "developedBy": {
            "label": "Homepage",
            "url": "https://github.com/gethomepage"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/gethomepage/homepage",
            "website": "https://gethomepage.dev/",
            "docs": [
              "https://gethomepage.dev/configs/docker/"
            ]
          },
          "lastUpdate": new Date("2026-08-29T00:00:00.000Z"),
          "createdAt": new Date("2026-08-29T00:00:00.000Z"),
          "description": "Homepage is a configurable dashboard for bookmarks, service links, status checks and API widgets. This variant adds a restricted Docker socket proxy so containers carrying Homepage labels can be discovered automatically.\n\nThe proxy allows read-only container, service and task inspection. The Homepage configuration remains in a persistent volume.",
          "logo": "/images/homepage/docker-discovery/logo.webp",
          "images": [],
          "slug": "docker-discovery",
          "files": {
            "config": "/files/homepage/docker-discovery/template.toml",
            "compose": "/files/homepage/docker-discovery/docker-compose.yml"
          }
        }
      ],
      "slug": "homepage"
    },
    {
      "name": "Immich",
      "logo": "/images/immich/logo.webp",
      "variants": [
        {
          "name": "Default",
          "shortDescription": "High-performance self-hosted photo and video backup for phones and personal libraries.",
          "category": {
            "name": "Media",
            "icon": "clapperboard",
            "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
            "slug": "media"
          },
          "developedBy": {
            "label": "Immich",
            "url": "https://github.com/immich-app"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/immich-app/immich",
            "website": "https://immich.app/",
            "docs": [
              "https://immich.app/docs/overview/introduction"
            ]
          },
          "lastUpdate": new Date("2026-08-25T00:00:00.000Z"),
          "createdAt": new Date("2026-08-25T00:00:00.000Z"),
          "description": "# Immich\n\nImmich is a self-hosted photo and video backup platform with mobile upload,\nsearch and library management.\n\nThis template includes the server, machine-learning worker, Redis-compatible\ncache and vector-enabled PostgreSQL database.",
          "logo": "/images/immich/default/logo.webp",
          "images": [],
          "slug": "default",
          "files": {
            "config": "/files/immich/default/template.toml",
            "compose": "/files/immich/default/docker-compose.yml"
          }
        },
        {
          "name": "No Machine Learning",
          "shortDescription": "Immich photo backup without the machine-learning service for smaller hosts and lower resource use.",
          "category": {
            "name": "Media",
            "icon": "clapperboard",
            "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
            "slug": "media"
          },
          "developedBy": {
            "label": "Immich",
            "url": "https://github.com/immich-app"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/immich-app/immich",
            "website": "https://immich.app/",
            "docs": [
              "https://docs.immich.app/FAQ/"
            ]
          },
          "lastUpdate": new Date("2026-08-29T00:00:00.000Z"),
          "createdAt": new Date("2026-08-29T00:00:00.000Z"),
          "description": "# Immich without Machine Learning\n\nImmich is a self-hosted photo and video backup platform with mobile upload,\nsearch and library management.\n\nThis variant keeps the server, Redis-compatible cache and vector-enabled\nPostgreSQL database, but omits the machine-learning service to reduce resource use.",
          "logo": "/images/immich/no-machine-learning/logo.webp",
          "images": [],
          "slug": "no-machine-learning",
          "files": {
            "config": "/files/immich/no-machine-learning/template.toml",
            "compose": "/files/immich/no-machine-learning/docker-compose.yml"
          }
        }
      ],
      "slug": "immich"
    },
    {
      "name": "Jellyfin",
      "logo": "/images/jellyfin/logo.webp",
      "variants": [
        {
          "name": "Default",
          "shortDescription": "Self-hosted media server for streaming personal movies, shows, music and photos.",
          "category": {
            "name": "Media",
            "icon": "clapperboard",
            "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
            "slug": "media"
          },
          "developedBy": {
            "label": "Jellyfin",
            "url": "https://github.com/jellyfin"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/jellyfin/jellyfin",
            "website": "https://jellyfin.org/",
            "docs": [
              "https://jellyfin.org/docs/"
            ]
          },
          "lastUpdate": new Date("2026-08-25T00:00:00.000Z"),
          "createdAt": new Date("2026-08-25T00:00:00.000Z"),
          "description": "# Jellyfin\n\nJellyfin is a self-hosted media server for organizing and streaming personal\nmovies, shows, music and photos.\n\nThe template persists the server configuration, cache and media library.",
          "logo": "/images/jellyfin/default/logo.webp",
          "images": [],
          "slug": "default",
          "files": {
            "config": "/files/jellyfin/default/template.toml",
            "compose": "/files/jellyfin/default/docker-compose.yml"
          }
        },
        {
          "name": "Hardware Acceleration",
          "shortDescription": "Jellyfin media server with Linux DRI device access for hardware-accelerated transcoding.",
          "category": {
            "name": "Media",
            "icon": "clapperboard",
            "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
            "slug": "media"
          },
          "developedBy": {
            "label": "Jellyfin",
            "url": "https://github.com/jellyfin"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/jellyfin/jellyfin",
            "website": "https://jellyfin.org/",
            "docs": [
              "https://jellyfin.org/docs/general/installation/container/",
              "https://jellyfin.org/docs/general/post-install/transcoding/hardware-acceleration/"
            ]
          },
          "lastUpdate": new Date("2026-08-29T00:00:00.000Z"),
          "createdAt": new Date("2026-08-29T00:00:00.000Z"),
          "description": "# Jellyfin Hardware Acceleration\n\nJellyfin is a self-hosted media server for organizing and streaming personal\nmovies, shows, music and photos.\n\nThis variant exposes the host Linux DRI device to enable hardware-accelerated\ntranscoding. The host must provide a compatible GPU and device permissions.",
          "logo": "/images/jellyfin/hardware-acceleration/logo.webp",
          "images": [],
          "slug": "hardware-acceleration",
          "files": {
            "config": "/files/jellyfin/hardware-acceleration/template.toml",
            "compose": "/files/jellyfin/hardware-acceleration/docker-compose.yml"
          }
        }
      ],
      "slug": "jellyfin"
    },
    {
      "name": "Meilisearch",
      "logo": "/images/meilisearch/logo.webp",
      "variants": [
        {
          "name": "Default",
          "shortDescription": "Fast typo-tolerant search engine with a protected HTTP API and persistent index storage.",
          "category": {
            "name": "Database",
            "icon": "database",
            "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
            "slug": "database"
          },
          "developedBy": {
            "label": "Meilisearch",
            "url": "https://github.com/meilisearch"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/meilisearch/meilisearch",
            "website": "https://www.meilisearch.com/",
            "docs": [
              "https://www.meilisearch.com/docs/"
            ]
          },
          "lastUpdate": new Date("2026-08-29T00:00:00.000Z"),
          "createdAt": new Date("2026-08-29T00:00:00.000Z"),
          "description": "Meilisearch is a fast, typo-tolerant search engine for application search experiences. The template enables production mode, persists indexes and protects the API with a generated master key.",
          "logo": "/images/meilisearch/default/logo.webp",
          "images": [],
          "slug": "default",
          "files": {
            "config": "/files/meilisearch/default/template.toml",
            "compose": "/files/meilisearch/default/docker-compose.yml"
          }
        }
      ],
      "slug": "meilisearch"
    },
    {
      "name": "Metabase",
      "logo": "/images/metabase/logo.webp",
      "variants": [
        {
          "name": "Default",
          "shortDescription": "Open-source business intelligence dashboard backed by PostgreSQL for durable application data.",
          "category": {
            "name": "Analytics",
            "icon": "chart-line",
            "description": "Product, web and business analytics, from privacy-first page counters to full dashboards.",
            "slug": "analytics"
          },
          "developedBy": {
            "label": "Metabase",
            "url": "https://github.com/metabase"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/metabase/metabase",
            "website": "https://www.metabase.com/",
            "docs": [
              "https://www.metabase.com/docs/latest/"
            ]
          },
          "lastUpdate": new Date("2026-08-29T00:00:00.000Z"),
          "createdAt": new Date("2026-08-29T00:00:00.000Z"),
          "description": "Metabase is an open-source business intelligence dashboard for querying data and building charts. The template uses PostgreSQL for durable application metadata instead of the embedded H2 database intended for local demos.",
          "logo": "/images/metabase/default/logo.webp",
          "images": [],
          "slug": "default",
          "files": {
            "config": "/files/metabase/default/template.toml",
            "compose": "/files/metabase/default/docker-compose.yml"
          }
        }
      ],
      "slug": "metabase"
    },
    {
      "name": "MinIO",
      "logo": "/images/minio/logo.webp",
      "variants": [
        {
          "name": "Default",
          "shortDescription": "Single-node S3-compatible object storage with a built-in Console and persistent local data volume.",
          "category": {
            "name": "Storage",
            "icon": "hard-drive",
            "description": "Object storage, file sync, backups and the shares and drives behind them.",
            "slug": "storage"
          },
          "developedBy": {
            "label": "MinIO",
            "url": "https://github.com/minio"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/minio/minio",
            "website": "https://min.io/",
            "docs": [
              "https://min.io/docs/minio/container/index.html"
            ]
          },
          "lastUpdate": new Date("2026-08-29T00:00:00.000Z"),
          "createdAt": new Date("2026-08-29T00:00:00.000Z"),
          "description": "MinIO provides an S3-compatible API and an embedded web Console. This template is a single-node, single-drive deployment for small workloads and evaluation; it does not provide the redundancy of a multi-node cluster.",
          "logo": "/images/minio/default/logo.webp",
          "images": [],
          "slug": "default",
          "files": {
            "config": "/files/minio/default/template.toml",
            "compose": "/files/minio/default/docker-compose.yml"
          }
        }
      ],
      "slug": "minio"
    },
    {
      "name": "n8n",
      "logo": "/images/n8n/logo.webp",
      "variants": [
        {
          "name": "Default",
          "shortDescription": "Open-source low-code workflow automation for connecting apps, APIs and business processes.",
          "category": {
            "name": "Automation",
            "icon": "workflow",
            "description": "Workflow builders, schedulers and low-code tools that wire your services together.",
            "slug": "automation"
          },
          "developedBy": {
            "label": "n8n",
            "url": "https://github.com/n8n-io"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/n8n-io/n8n",
            "website": "https://n8n.io/",
            "docs": [
              "https://docs.n8n.io/"
            ]
          },
          "lastUpdate": new Date("2026-08-25T00:00:00.000Z"),
          "createdAt": new Date("2026-08-25T00:00:00.000Z"),
          "description": "# n8n\n\nn8n is a visual workflow automation platform for connecting applications and APIs.\n\nThis template includes the n8n service and persistent storage for its workflows,\ncredentials and execution data.",
          "logo": "/images/n8n/default/logo.webp",
          "images": [],
          "slug": "default",
          "files": {
            "config": "/files/n8n/default/template.toml",
            "compose": "/files/n8n/default/docker-compose.yml"
          }
        },
        {
          "name": "PostgreSQL",
          "shortDescription": "n8n workflow automation backed by PostgreSQL for a durable production database.",
          "category": {
            "name": "Automation",
            "icon": "workflow",
            "description": "Workflow builders, schedulers and low-code tools that wire your services together.",
            "slug": "automation"
          },
          "developedBy": {
            "label": "n8n",
            "url": "https://github.com/n8n-io"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/n8n-io/n8n",
            "website": "https://n8n.io/",
            "docs": [
              "https://docs.n8n.io/hosting/configuration/supported-databases/"
            ]
          },
          "lastUpdate": new Date("2026-08-29T00:00:00.000Z"),
          "createdAt": new Date("2026-08-29T00:00:00.000Z"),
          "description": "# n8n with PostgreSQL\n\nn8n is a visual workflow automation platform for connecting applications and APIs.\n\nThis variant stores workflows, credentials and execution data in the included\nPostgreSQL service instead of the default SQLite database.",
          "logo": "/images/n8n/postgresql/logo.webp",
          "images": [],
          "slug": "postgresql",
          "files": {
            "config": "/files/n8n/postgresql/template.toml",
            "compose": "/files/n8n/postgresql/docker-compose.yml"
          }
        },
        {
          "name": "Queue mode",
          "shortDescription": "n8n queue-mode deployment with PostgreSQL, Redis and a dedicated execution worker.",
          "category": {
            "name": "Automation",
            "icon": "workflow",
            "description": "Workflow builders, schedulers and low-code tools that wire your services together.",
            "slug": "automation"
          },
          "developedBy": {
            "label": "n8n",
            "url": "https://github.com/n8n-io"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/n8n-io/n8n",
            "website": "https://n8n.io/",
            "docs": [
              "https://docs.n8n.io/hosting/scaling/queue-mode/"
            ]
          },
          "lastUpdate": new Date("2026-08-29T00:00:00.000Z"),
          "createdAt": new Date("2026-08-29T00:00:00.000Z"),
          "description": "# n8n Queue mode\n\nn8n is a visual workflow automation platform for connecting applications and APIs.\n\nThis variant runs n8n in queue mode with PostgreSQL for state, Redis for the\nexecution queue and a dedicated worker for background executions.",
          "logo": "/images/n8n/queue-mode/logo.webp",
          "images": [],
          "slug": "queue-mode",
          "files": {
            "config": "/files/n8n/queue-mode/template.toml",
            "compose": "/files/n8n/queue-mode/docker-compose.yml"
          }
        }
      ],
      "slug": "n8n"
    },
    {
      "name": "Nextcloud",
      "logo": "/images/nextcloud/logo.webp",
      "variants": [
        {
          "name": "Default",
          "shortDescription": "Self-hosted file storage, synchronization and collaboration for teams and personal data.",
          "category": {
            "name": "Storage",
            "icon": "hard-drive",
            "description": "Object storage, file sync, backups and the shares and drives behind them.",
            "slug": "storage"
          },
          "developedBy": {
            "label": "Nextcloud",
            "url": "https://github.com/nextcloud"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/nextcloud/docker",
            "website": "https://nextcloud.com/",
            "docs": [
              "https://docs.nextcloud.com/"
            ]
          },
          "lastUpdate": new Date("2026-08-25T00:00:00.000Z"),
          "createdAt": new Date("2026-08-25T00:00:00.000Z"),
          "description": "# Nextcloud\n\nNextcloud provides private file storage, synchronization and collaboration tools\nfor teams and personal data.\n\nThis template includes the web app, a MariaDB database, Redis and a cron worker.",
          "logo": "/images/nextcloud/default/logo.webp",
          "images": [],
          "slug": "default",
          "files": {
            "config": "/files/nextcloud/default/template.toml",
            "compose": "/files/nextcloud/default/docker-compose.yml"
          }
        },
        {
          "name": "PostgreSQL",
          "shortDescription": "Nextcloud file storage and collaboration backed by PostgreSQL instead of MariaDB.",
          "category": {
            "name": "Storage",
            "icon": "hard-drive",
            "description": "Object storage, file sync, backups and the shares and drives behind them.",
            "slug": "storage"
          },
          "developedBy": {
            "label": "Nextcloud",
            "url": "https://github.com/nextcloud"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/nextcloud/docker",
            "website": "https://nextcloud.com/",
            "docs": [
              "https://docs.nextcloud.com/server/latest/admin_manual/installation/installation_wizard.html"
            ]
          },
          "lastUpdate": new Date("2026-08-29T00:00:00.000Z"),
          "createdAt": new Date("2026-08-29T00:00:00.000Z"),
          "description": "# Nextcloud with PostgreSQL\n\nNextcloud provides private file storage, synchronization and collaboration tools\nfor teams and personal data.\n\nThis template includes the web app, a PostgreSQL database, Redis and a cron\nworker, with the database password generated during deployment.",
          "logo": "/images/nextcloud/postgresql/logo.webp",
          "images": [],
          "slug": "postgresql",
          "files": {
            "config": "/files/nextcloud/postgresql/template.toml",
            "compose": "/files/nextcloud/postgresql/docker-compose.yml"
          }
        }
      ],
      "slug": "nextcloud"
    },
    {
      "name": "Open WebUI",
      "logo": "/images/open-webui/logo.webp",
      "variants": [
        {
          "name": "Default",
          "shortDescription": "Self-hosted chat interface for local language models and OpenAI-compatible APIs.",
          "category": {
            "name": "AI",
            "icon": "sparkles",
            "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
            "slug": "ai"
          },
          "developedBy": {
            "label": "Open WebUI",
            "url": "https://github.com/open-webui"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/open-webui/open-webui",
            "website": "https://openwebui.com/",
            "docs": [
              "https://docs.openwebui.com/"
            ]
          },
          "lastUpdate": new Date("2026-08-25T00:00:00.000Z"),
          "createdAt": new Date("2026-08-25T00:00:00.000Z"),
          "description": "# Open WebUI\n\nOpen WebUI is a self-hosted chat interface for local language models and\nOpenAI-compatible APIs.\n\nThe template persists users, conversations and application settings. Connect it\nto an external model provider or add a model runner separately.",
          "logo": "/images/open-webui/default/logo.webp",
          "images": [],
          "slug": "default",
          "files": {
            "config": "/files/open-webui/default/template.toml",
            "compose": "/files/open-webui/default/docker-compose.yml"
          }
        },
        {
          "name": "PostgreSQL",
          "shortDescription": "Open WebUI backed by PostgreSQL for multi-user and higher-concurrency deployments.",
          "category": {
            "name": "AI",
            "icon": "sparkles",
            "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
            "slug": "ai"
          },
          "developedBy": {
            "label": "Open WebUI",
            "url": "https://github.com/open-webui"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/open-webui/open-webui",
            "website": "https://openwebui.com/",
            "docs": [
              "https://docs.openwebui.com/getting-started/advanced-topics/scaling/"
            ]
          },
          "lastUpdate": new Date("2026-08-29T00:00:00.000Z"),
          "createdAt": new Date("2026-08-29T00:00:00.000Z"),
          "description": "# Open WebUI with PostgreSQL\n\nOpen WebUI is a self-hosted chat interface for local language models and\nOpenAI-compatible APIs.\n\nThis variant keeps application data in the persistent volume and stores the\ndatabase-backed state in the included PostgreSQL service.",
          "logo": "/images/open-webui/postgresql/logo.webp",
          "images": [],
          "slug": "postgresql",
          "files": {
            "config": "/files/open-webui/postgresql/template.toml",
            "compose": "/files/open-webui/postgresql/docker-compose.yml"
          }
        }
      ],
      "slug": "open-webui"
    },
    {
      "name": "Plausible",
      "logo": "/images/plausible/logo.webp",
      "variants": [
        {
          "name": "Default",
          "shortDescription": "Privacy-friendly self-hosted web analytics with a lightweight dashboard.",
          "category": {
            "name": "Analytics",
            "icon": "chart-line",
            "description": "Product, web and business analytics, from privacy-first page counters to full dashboards.",
            "slug": "analytics"
          },
          "developedBy": {
            "label": "Plausible",
            "url": "https://github.com/plausible"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/plausible/plausible",
            "website": "https://plausible.io/",
            "docs": [
              "https://plausible.io/docs"
            ]
          },
          "lastUpdate": new Date("2026-08-25T00:00:00.000Z"),
          "createdAt": new Date("2026-08-25T00:00:00.000Z"),
          "description": "# Plausible\n\nPlausible is a privacy-friendly web analytics platform with a simple dashboard\nfor understanding website traffic.\n\nThe template includes the application, PostgreSQL and ClickHouse storage.",
          "logo": "/images/plausible/default/logo.webp",
          "images": [],
          "slug": "default",
          "files": {
            "config": "/files/plausible/default/template.toml",
            "compose": "/files/plausible/default/docker-compose.yml"
          }
        }
      ],
      "slug": "plausible"
    },
    {
      "name": "PostHog",
      "logo": "/images/posthog/logo.webp",
      "variants": [
        {
          "name": "Default",
          "shortDescription": "Complete self-hosted product analytics and feature flags stack for teams running PostHog on their own server.",
          "category": {
            "name": "Analytics",
            "icon": "chart-line",
            "description": "Product, web and business analytics, from privacy-first page counters to full dashboards.",
            "slug": "analytics"
          },
          "developedBy": {
            "label": "PostHog",
            "url": "https://github.com/PostHog"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/PostHog/posthog",
            "website": "https://posthog.com/",
            "docs": [
              "https://posthog.com/docs/self-host/deploy/hobby"
            ]
          },
          "lastUpdate": new Date("2026-08-29T00:00:00.000Z"),
          "createdAt": new Date("2026-08-29T00:00:00.000Z"),
          "description": "PostHog is a product analytics platform with event capture, feature flags, session replay and experiments. This variant follows the official Hobby Docker deployment and bundles the supporting databases, queues and object storage in one stack.\n\nThe stack needs at least 8 GB of RAM and can take several minutes to initialize. It is intended for small teams and evaluation; keep its generated secrets and back up every persistent volume.",
          "logo": "/images/posthog/default/logo.webp",
          "images": [],
          "slug": "default",
          "files": {
            "config": "/files/posthog/default/template.toml",
            "compose": "/files/posthog/default/docker-compose.yml"
          }
        }
      ],
      "slug": "posthog"
    },
    {
      "name": "Qdrant",
      "logo": "/images/qdrant/logo.webp",
      "variants": [
        {
          "name": "Default",
          "shortDescription": "Persistent vector database for embeddings, similarity search and AI applications with API-key security.",
          "category": {
            "name": "AI",
            "icon": "sparkles",
            "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
            "slug": "ai"
          },
          "developedBy": {
            "label": "Qdrant",
            "url": "https://github.com/qdrant"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/qdrant/qdrant",
            "website": "https://qdrant.tech/",
            "docs": [
              "https://qdrant.tech/documentation/"
            ]
          },
          "lastUpdate": new Date("2026-08-29T00:00:00.000Z"),
          "createdAt": new Date("2026-08-29T00:00:00.000Z"),
          "description": "Qdrant is a vector database for embeddings, similarity search and AI applications. This single-node deployment persists collections on a named volume and requires an API key for every client request.",
          "logo": "/images/qdrant/default/logo.webp",
          "images": [],
          "slug": "default",
          "files": {
            "config": "/files/qdrant/default/template.toml",
            "compose": "/files/qdrant/default/docker-compose.yml"
          }
        }
      ],
      "slug": "qdrant"
    },
    {
      "name": "SeaweedFS",
      "logo": "/images/seaweedfs/logo.webp",
      "variants": [
        {
          "name": "Default",
          "shortDescription": "Single-node distributed file and object store using the official mini mode with a protected S3 API.",
          "category": {
            "name": "Storage",
            "icon": "hard-drive",
            "description": "Object storage, file sync, backups and the shares and drives behind them.",
            "slug": "storage"
          },
          "developedBy": {
            "label": "SeaweedFS",
            "url": "https://github.com/seaweedfs"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/seaweedfs/seaweedfs",
            "website": "https://seaweedfs.com/",
            "docs": [
              "https://github.com/seaweedfs/seaweedfs/wiki"
            ]
          },
          "lastUpdate": new Date("2026-08-29T00:00:00.000Z"),
          "createdAt": new Date("2026-08-29T00:00:00.000Z"),
          "description": "SeaweedFS is a distributed file and object store. The official mini mode starts a compact single-node deployment with an S3 endpoint, master UI and Filer UI, protected by generated S3 credentials.\n\nAdd more volume servers when you need a multi-node layout; this template is intentionally a straightforward starting point.",
          "logo": "/images/seaweedfs/default/logo.webp",
          "images": [],
          "slug": "default",
          "files": {
            "config": "/files/seaweedfs/default/template.toml",
            "compose": "/files/seaweedfs/default/docker-compose.yml"
          }
        }
      ],
      "slug": "seaweedfs"
    },
    {
      "name": "Umami",
      "logo": "/images/umami/logo.webp",
      "variants": [
        {
          "name": "Default",
          "shortDescription": "Fast, privacy-focused web analytics with a lightweight self-hosted dashboard.",
          "category": {
            "name": "Analytics",
            "icon": "chart-line",
            "description": "Product, web and business analytics, from privacy-first page counters to full dashboards.",
            "slug": "analytics"
          },
          "developedBy": {
            "label": "Umami",
            "url": "https://github.com/umami-software"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/umami-software/umami",
            "website": "https://umami.is",
            "docs": [
              "https://umami.is/docs"
            ]
          },
          "lastUpdate": new Date("2026-08-25T00:00:00.000Z"),
          "createdAt": new Date("2026-08-25T00:00:00.000Z"),
          "description": "# Umami\n\nUmami is a fast, privacy-focused web analytics dashboard for tracking website\nvisits without invasive profiling.\n\nThe template includes the Umami service and a persistent PostgreSQL database.",
          "logo": "/images/umami/default/logo.webp",
          "images": [],
          "slug": "default",
          "files": {
            "config": "/files/umami/default/template.toml",
            "compose": "/files/umami/default/docker-compose.yml"
          }
        }
      ],
      "slug": "umami"
    },
    {
      "name": "Uptime Kuma",
      "logo": "/images/uptime-kuma/logo.webp",
      "variants": [
        {
          "name": "Default",
          "shortDescription": "Self-hosted uptime monitoring for websites, services and alerting channels.",
          "category": {
            "name": "Monitoring",
            "icon": "activity",
            "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
            "slug": "monitoring"
          },
          "developedBy": {
            "label": "Uptime Kuma",
            "url": "https://github.com/louislam"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/louislam/uptime-kuma",
            "website": "https://uptime.kuma.pet/",
            "docs": [
              "https://github.com/louislam/uptime-kuma/wiki"
            ]
          },
          "lastUpdate": new Date("2026-08-25T00:00:00.000Z"),
          "createdAt": new Date("2026-08-25T00:00:00.000Z"),
          "description": "# Uptime Kuma\n\nUptime Kuma monitors websites and services and sends alerts when checks fail.\n\nThe template persists monitor definitions, history and notification settings.",
          "logo": "/images/uptime-kuma/default/logo.webp",
          "images": [],
          "slug": "default",
          "files": {
            "config": "/files/uptime-kuma/default/template.toml",
            "compose": "/files/uptime-kuma/default/docker-compose.yml"
          }
        },
        {
          "name": "Standalone",
          "shortDescription": "Uptime Kuma monitoring without Docker socket access for a smaller privilege surface.",
          "category": {
            "name": "Monitoring",
            "icon": "activity",
            "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
            "slug": "monitoring"
          },
          "developedBy": {
            "label": "Uptime Kuma",
            "url": "https://github.com/louislam"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/louislam/uptime-kuma",
            "website": "https://uptime.kuma.pet/",
            "docs": [
              "https://github.com/louislam/uptime-kuma/wiki"
            ]
          },
          "lastUpdate": new Date("2026-08-29T00:00:00.000Z"),
          "createdAt": new Date("2026-08-29T00:00:00.000Z"),
          "description": "# Uptime Kuma Standalone\n\nUptime Kuma monitors websites and services and sends alerts when checks fail.\n\nThis variant persists monitor definitions and history without access to the\nDocker socket. Use the default variant only when Docker container monitoring is needed.",
          "logo": "/images/uptime-kuma/standalone/logo.webp",
          "images": [],
          "slug": "standalone",
          "files": {
            "config": "/files/uptime-kuma/standalone/template.toml",
            "compose": "/files/uptime-kuma/standalone/docker-compose.yml"
          }
        }
      ],
      "slug": "uptime-kuma"
    },
    {
      "name": "Vaultwarden",
      "logo": "/images/vaultwarden/logo.webp",
      "variants": [
        {
          "name": "Default",
          "shortDescription": "Lightweight self-hosted password manager server with persistent encrypted vault data.",
          "category": {
            "name": "Security",
            "icon": "shield",
            "description": "Identity providers, single sign-on, password vaults and secret management.",
            "slug": "security"
          },
          "developedBy": {
            "label": "Vaultwarden",
            "url": "https://github.com/dani-garcia"
          },
          "submittedBy": {
            "label": "Deplo",
            "url": "https://github.com/DeploCloud"
          },
          "links": {
            "github": "https://github.com/dani-garcia/vaultwarden",
            "docs": [
              "https://github.com/dani-garcia/vaultwarden/wiki"
            ]
          },
          "lastUpdate": new Date("2026-08-25T00:00:00.000Z"),
          "createdAt": new Date("2026-08-25T00:00:00.000Z"),
          "description": "# Vaultwarden\n\nVaultwarden is a lightweight self-hosted password manager server written in Rust.\n\nThe template keeps vault data in a persistent volume and exposes the web service\nthrough the generated HTTPS domain.",
          "logo": "/images/vaultwarden/default/logo.webp",
          "images": [],
          "slug": "default",
          "files": {
            "config": "/files/vaultwarden/default/template.toml",
            "compose": "/files/vaultwarden/default/docker-compose.yml"
          }
        }
      ],
      "slug": "vaultwarden"
    }
  ]
} as const satisfies { categories: readonly Category[]; templates: readonly Template[] };

export const categories: readonly Category[] = data.categories;
export const templates: readonly Template[] = data.templates;
export const version = "983e13c9b86053aa227042b07f5f90acdeb560c232d028b966b60b1145cf1cb2";
