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
        }
      ],
      "slug": "grafana"
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
        }
      ],
      "slug": "jellyfin"
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
export const version = "0270ba12c972b5a44a899449a8cfe1b1f7de34faeeb5df95750099aa9500e2e3";
