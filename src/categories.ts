import type { CategoryRaw } from "./schemas";

export const categories = {
  database: {
    name: "Database",
    icon: "database",
    description:
      "Relational, document and key-value stores, plus the tools to browse and manage them.",
  },
  ai: {
    name: "AI",
    icon: "sparkles",
    description:
      "Local language models, chat interfaces, vector stores and the tooling built around them.",
  },
  monitoring: {
    name: "Monitoring",
    icon: "activity",
    description:
      "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
  },
  analytics: {
    name: "Analytics",
    icon: "chart-line",
    description:
      "Product, web and business analytics, from privacy-first page counters to full dashboards.",
  },
  media: {
    name: "Media",
    icon: "clapperboard",
    description:
      "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
  },
  communication: {
    name: "Communication",
    icon: "message-circle",
    description:
      "Chat, calls, forums and the bots and bridges that connect a team or a community.",
  },
  email: {
    name: "Email",
    icon: "mail",
    description:
      "Mail servers, transactional senders, newsletters and the inboxes to read them in.",
  },
  cms: {
    name: "CMS",
    icon: "layout-template",
    description:
      "Blogs, sites, headless content APIs and the storefronts built on top of them.",
  },
  productivity: {
    name: "Productivity",
    icon: "list-todo",
    description:
      "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
  },
  automation: {
    name: "Automation",
    icon: "workflow",
    description:
      "Workflow builders, schedulers and low-code tools that wire your services together.",
  },
  development: {
    name: "Development",
    icon: "code",
    description:
      "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
  },
  security: {
    name: "Security",
    icon: "shield",
    description:
      "Identity providers, single sign-on, password vaults and secret management.",
  },
  storage: {
    name: "Storage",
    icon: "hard-drive",
    description:
      "Object storage, file sync, backups and the shares and drives behind them.",
  },
  networking: {
    name: "Networking",
    icon: "network",
    description:
      "Proxies, VPNs, DNS, tunnels and the gateways that put your services on the internet.",
  },
  finance: {
    name: "Finance",
    icon: "wallet",
    description:
      "Accounting, invoicing, budgeting, payments and the ledgers a business runs on.",
  },
  other: {
    name: "Other",
    icon: "package",
    description:
      "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
  },
} as const satisfies Record<string, CategoryRaw>;
