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
      "name": "Garage S3",
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
        "docs": "https://garagehq.deuxfleurs.fr/documentation/quick-start/"
      },
      "description": "Distributed S3-compatible object storage built for self-hosting across multiple machines without a single point of failure.",
      "logo": "/images/garage-s3/logo.webp",
      "images": [],
      "variants": [
        {
          "name": "Base",
          "shortDescription": "Distributed S3-compatible object storage built for self-hosting across multiple machines without a single point of failure.",
          "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
          "createdAt": new Date("2026-08-14T00:00:00.000Z"),
          "slug": "base",
          "files": {
            "config": "/files/garage-s3/base/template.toml",
            "compose": "/files/garage-s3/base/docker-compose.yml"
          }
        },
        {
          "name": "Web UI",
          "shortDescription": "Distributed S3-compatible object storage for self-hosting, bundled with a web UI for managing buckets and access keys.",
          "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
          "createdAt": new Date("2026-08-14T00:00:00.000Z"),
          "slug": "web-ui",
          "files": {
            "config": "/files/garage-s3/web-ui/template.toml",
            "compose": "/files/garage-s3/web-ui/docker-compose.yml"
          }
        }
      ],
      "slug": "garage-s3",
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z")
    }
  ]
} as const satisfies { categories: readonly Category[]; templates: readonly Template[] };

export const categories: readonly Category[] = data.categories;
export const templates: readonly Template[] = data.templates;
export const version = "40b8b8a074441d1cd61695aa83da2434a78bdfb44e90cab294a322175250fa85";
