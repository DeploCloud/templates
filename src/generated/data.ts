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
      "name": "Ackee",
      "shortDescription": "Self-hosted, privacy-friendly web analytics that tracks visitors without collecting personal data.",
      "category": {
        "name": "Analytics",
        "icon": "chart-line",
        "description": "Product, web and business analytics, from privacy-first page counters to full dashboards.",
        "slug": "analytics"
      },
      "developedBy": {
        "label": "electerious",
        "url": "https://github.com/electerious"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/electerious/Ackee",
        "website": "https://ackee.electerious.com/",
        "docs": "https://docs.ackee.electerious.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted, privacy-friendly web analytics that tracks visitors without collecting personal data.",
      "logo": "/images/ackee/logo.webp",
      "images": [],
      "files": {
        "config": "/files/ackee/template.toml",
        "compose": "/files/ackee/docker-compose.yml"
      },
      "slug": "ackee"
    },
    {
      "name": "Activepieces",
      "shortDescription": "No-code business automation builder that connects your apps into workflows, an open-source alternative to Zapier.",
      "category": {
        "name": "Automation",
        "icon": "workflow",
        "description": "Workflow builders, schedulers and low-code tools that wire your services together.",
        "slug": "automation"
      },
      "developedBy": {
        "label": "activepieces",
        "url": "https://github.com/activepieces"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/activepieces/activepieces",
        "website": "https://www.activepieces.com/",
        "docs": "https://www.activepieces.com/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "No-code business automation builder that connects your apps into workflows, an open-source alternative to Zapier.",
      "logo": "/images/activepieces/logo.webp",
      "images": [],
      "files": {
        "config": "/files/activepieces/template.toml",
        "compose": "/files/activepieces/docker-compose.yml"
      },
      "slug": "activepieces"
    },
    {
      "name": "Actual Budget",
      "shortDescription": "Local-first personal finance app using zero-based budgeting to track spending and plan your money.",
      "category": {
        "name": "Finance",
        "icon": "wallet",
        "description": "Accounting, invoicing, budgeting, payments and the ledgers a business runs on.",
        "slug": "finance"
      },
      "developedBy": {
        "label": "actualbudget",
        "url": "https://github.com/actualbudget"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/actualbudget/actual",
        "website": "https://actualbudget.org",
        "docs": "https://actualbudget.org/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Local-first personal finance app using zero-based budgeting to track spending and plan your money.",
      "logo": "/images/actual-budget/logo.webp",
      "images": [],
      "files": {
        "config": "/files/actual-budget/template.toml",
        "compose": "/files/actual-budget/docker-compose.yml"
      },
      "slug": "actual-budget"
    },
    {
      "name": "AdGuard Home",
      "shortDescription": "Network-wide DNS server that blocks ads and trackers across every device, with parental controls.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "AdguardTeam",
        "url": "https://github.com/AdguardTeam"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/AdguardTeam/AdGuardHome",
        "website": "https://adguard.com",
        "docs": "https://github.com/AdguardTeam/AdGuardHome/wiki"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Network-wide DNS server that blocks ads and trackers across every device, with parental controls.",
      "logo": "/images/adguard-home/logo.webp",
      "images": [],
      "files": {
        "config": "/files/adguard-home/template.toml",
        "compose": "/files/adguard-home/docker-compose.yml"
      },
      "slug": "adguard-home"
    },
    {
      "name": "Adminer",
      "shortDescription": "Lightweight single-file database manager for MySQL, PostgreSQL, SQLite, and more through the browser.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "vrana",
        "url": "https://github.com/vrana"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/vrana/adminer",
        "website": "https://www.adminer.org/",
        "docs": "https://www.adminer.org/en/plugins/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Lightweight single-file database manager for MySQL, PostgreSQL, SQLite, and more through the browser.",
      "logo": "/images/adminer/logo.webp",
      "images": [],
      "files": {
        "config": "/files/adminer/template.toml",
        "compose": "/files/adminer/docker-compose.yml"
      },
      "slug": "adminer"
    },
    {
      "name": "AdventureLog",
      "shortDescription": "Open-source travel journal for logging trips and adventures on a map, with Strava integration.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "seanmorley15",
        "url": "https://github.com/seanmorley15"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/seanmorley15/adventurelog",
        "website": "https://adventurelog.app/",
        "docs": "https://adventurelog.app/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source travel journal for logging trips and adventures on a map, with Strava integration.",
      "logo": "/images/adventurelog/logo.webp",
      "images": [],
      "files": {
        "config": "/files/adventurelog/template.toml",
        "compose": "/files/adventurelog/docker-compose.yml"
      },
      "slug": "adventurelog"
    },
    {
      "name": "Affine Pro",
      "shortDescription": "Workspace combining docs, whiteboards, and databases for notes and collaborative project management.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "toeverything",
        "url": "https://github.com/toeverything"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/toeverything/Affine",
        "website": "https://affine.pro/",
        "docs": "https://affine.pro/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Workspace combining docs, whiteboards, and databases for notes and collaborative project management.",
      "logo": "/images/affine-pro/logo.webp",
      "images": [],
      "files": {
        "config": "/files/affine-pro/template.toml",
        "compose": "/files/affine-pro/docker-compose.yml"
      },
      "slug": "affine-pro"
    },
    {
      "name": "Agent DVR",
      "shortDescription": "Video surveillance software with motion detection, alerts, and remote access for your security cameras.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "ispysoftware",
        "url": "https://github.com/ispysoftware"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/ispysoftware/AgentDVR",
        "website": "https://www.ispyconnect.com/",
        "docs": "https://www.ispyconnect.com/userguide-agent-dvr.aspx"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Video surveillance software with motion detection, alerts, and remote access for your security cameras.",
      "logo": "/images/agent-dvr/logo.webp",
      "images": [],
      "files": {
        "config": "/files/agent-dvr/template.toml",
        "compose": "/files/agent-dvr/docker-compose.yml"
      },
      "slug": "agent-dvr"
    },
    {
      "name": "Akaunting",
      "shortDescription": "Open-source accounting software for small businesses to manage invoices, expenses, and finances online.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "akaunting",
        "url": "https://github.com/akaunting"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/akaunting/akaunting",
        "website": "https://akaunting.com",
        "docs": "https://akaunting.com/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source accounting software for small businesses to manage invoices, expenses, and finances online.",
      "logo": "/images/akaunting/logo.webp",
      "images": [],
      "files": {
        "config": "/files/akaunting/template.toml",
        "compose": "/files/akaunting/docker-compose.yml"
      },
      "slug": "akaunting"
    },
    {
      "name": "AList",
      "shortDescription": "File listing and WebDAV server that unifies local and cloud storage providers behind one interface.",
      "category": {
        "name": "Storage",
        "icon": "hard-drive",
        "description": "Object storage, file sync, backups and the shares and drives behind them.",
        "slug": "storage"
      },
      "developedBy": {
        "label": "AlistGo",
        "url": "https://github.com/AlistGo"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/AlistGo/alist",
        "website": "https://alistgo.com/",
        "docs": "https://alistgo.com/guide/install/docker.html"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "File listing and WebDAV server that unifies local and cloud storage providers behind one interface.",
      "logo": "/images/alist/logo.webp",
      "images": [],
      "files": {
        "config": "/files/alist/template.toml",
        "compose": "/files/alist/docker-compose.yml"
      },
      "slug": "alist"
    },
    {
      "name": "AllTube",
      "shortDescription": "Web front-end for youtube-dl that downloads and converts videos from YouTube and many other sites.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "Rudloff",
        "url": "https://github.com/Rudloff"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/Rudloff/alltube",
        "website": "https://github.com/Rudloff/alltube",
        "docs": "https://github.com/Rudloff/alltube/wiki"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Web front-end for youtube-dl that downloads and converts videos from YouTube and many other sites.",
      "logo": "/images/alltube/logo.webp",
      "images": [],
      "files": {
        "config": "/files/alltube/template.toml",
        "compose": "/files/alltube/docker-compose.yml"
      },
      "slug": "alltube"
    },
    {
      "name": "Ampache",
      "shortDescription": "Web-based music and video streaming server for accessing your media library from any device.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "ampache",
        "url": "https://github.com/ampache"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/ampache/ampache",
        "docs": "https://github.com/ampache/ampache/wiki"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Web-based music and video streaming server for accessing your media library from any device.",
      "logo": "/images/ampache/logo.webp",
      "images": [],
      "files": {
        "config": "/files/ampache/template.toml",
        "compose": "/files/ampache/docker-compose.yml"
      },
      "slug": "ampache"
    },
    {
      "name": "AnonUpload",
      "shortDescription": "Anonymous file-sharing service that needs no database and keeps uploaded filenames private.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "supernova3339",
        "url": "https://github.com/supernova3339"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/supernova3339/anonupload",
        "website": "https://anonupload.com/",
        "docs": "https://github.com/Supernova3339/anonupload/blob/main/env.md"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Anonymous file-sharing service that needs no database and keeps uploaded filenames private.",
      "logo": "/images/anonupload/logo.webp",
      "images": [],
      "files": {
        "config": "/files/anonupload/template.toml",
        "compose": "/files/anonupload/docker-compose.yml"
      },
      "slug": "anonupload"
    },
    {
      "name": "Anse",
      "shortDescription": "Clean web UI for chatting with OpenAI-compatible AI models, an open-source ChatGPT alternative.",
      "category": {
        "name": "AI",
        "icon": "sparkles",
        "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
        "slug": "ai"
      },
      "developedBy": {
        "label": "ddiu8081",
        "url": "https://github.com/ddiu8081"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/ddiu8081/anse",
        "website": "https://anse.app/",
        "docs": "https://github.com/ddiu8081/anse#readme"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Clean web UI for chatting with OpenAI-compatible AI models, an open-source ChatGPT alternative.",
      "logo": "/images/anse/logo.webp",
      "images": [],
      "files": {
        "config": "/files/anse/template.toml",
        "compose": "/files/anse/docker-compose.yml"
      },
      "slug": "anse"
    },
    {
      "name": "Answer",
      "shortDescription": "Self-hosted Q&A platform from Apache for building community knowledge bases and help centers.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "apache",
        "url": "https://github.com/apache"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/apache/answer",
        "website": "https://answer.apache.org/",
        "docs": "https://answer.apache.org/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted Q&A platform from Apache for building community knowledge bases and help centers.",
      "logo": "/images/answer/logo.webp",
      "images": [],
      "files": {
        "config": "/files/answer/template.toml",
        "compose": "/files/answer/docker-compose.yml"
      },
      "slug": "answer"
    },
    {
      "name": "Anubis",
      "shortDescription": "Reverse-proxy bot protection that uses proof-of-work challenges to keep scrapers off your website.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "TecharoHQ",
        "url": "https://github.com/TecharoHQ"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/TecharoHQ/anubis",
        "website": "https://anubis.techaro.lol",
        "docs": "https://anubis.techaro.lol/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Reverse-proxy bot protection that uses proof-of-work challenges to keep scrapers off your website.",
      "logo": "/images/anubis/logo.webp",
      "images": [],
      "files": {
        "config": "/files/anubis/template.toml",
        "compose": "/files/anubis/docker-compose.yml"
      },
      "slug": "anubis"
    },
    {
      "name": "AnythingLLM",
      "shortDescription": "Private document chatbot that lets you query your own files using the LLM provider of your choice.",
      "category": {
        "name": "AI",
        "icon": "sparkles",
        "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
        "slug": "ai"
      },
      "developedBy": {
        "label": "Mintplex-Labs",
        "url": "https://github.com/Mintplex-Labs"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/Mintplex-Labs/anything-llm",
        "website": "https://useanything.com",
        "docs": "https://github.com/Mintplex-Labs/anything-llm/tree/master/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Private document chatbot that lets you query your own files using the LLM provider of your choice.",
      "logo": "/images/anythingllm/logo.webp",
      "images": [],
      "files": {
        "config": "/files/anythingllm/template.toml",
        "compose": "/files/anythingllm/docker-compose.yml"
      },
      "slug": "anythingllm"
    },
    {
      "name": "Anytype",
      "shortDescription": "Local-first, encrypted knowledge base for notes, tasks, and wikis built from linked objects you define.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "grishy",
        "url": "https://github.com/grishy"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/grishy/any-sync-bundle",
        "website": "https://anytype.io/",
        "docs": "https://doc.anytype.io/anytype-docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Local-first, encrypted knowledge base for notes, tasks, and wikis built from linked objects you define.",
      "logo": "/images/anytype/logo.webp",
      "images": [],
      "files": {
        "config": "/files/anytype/template.toml",
        "compose": "/files/anytype/docker-compose.yml"
      },
      "slug": "anytype"
    },
    {
      "name": "App Flowy",
      "shortDescription": "Notes and project workspace you fully control, positioned as an open-source alternative to Notion.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "AppFlowy-IO",
        "url": "https://github.com/AppFlowy-IO"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/AppFlowy-IO/AppFlowy",
        "website": "https://appflowy.io/",
        "docs": "https://docs.appflowy.io/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Notes and project workspace you fully control, positioned as an open-source alternative to Notion.",
      "logo": "/images/app-flowy/logo.webp",
      "images": [],
      "files": {
        "config": "/files/app-flowy/template.toml",
        "compose": "/files/app-flowy/docker-compose.yml"
      },
      "slug": "app-flowy"
    },
    {
      "name": "Apprise API",
      "shortDescription": "Simple HTTP API for pushing notifications to dozens of popular services from a single endpoint.",
      "category": {
        "name": "Communication",
        "icon": "message-circle",
        "description": "Chat, calls, forums and the bots and bridges that connect a team or a community.",
        "slug": "communication"
      },
      "developedBy": {
        "label": "caronc",
        "url": "https://github.com/caronc"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/caronc/apprise-api",
        "website": "https://github.com/caronc/apprise-api",
        "docs": "https://github.com/caronc/apprise-api/wiki"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Simple HTTP API for pushing notifications to dozens of popular services from a single endpoint.",
      "logo": "/images/apprise-api/logo.webp",
      "images": [],
      "files": {
        "config": "/files/apprise-api/template.toml",
        "compose": "/files/apprise-api/docker-compose.yml"
      },
      "slug": "apprise-api"
    },
    {
      "name": "Appsmith",
      "shortDescription": "Open-source low-code platform for building internal tools, admin panels, and CRUD apps quickly.",
      "category": {
        "name": "CMS",
        "icon": "layout-template",
        "description": "Blogs, sites, headless content APIs and the storefronts built on top of them.",
        "slug": "cms"
      },
      "developedBy": {
        "label": "appsmithorg",
        "url": "https://github.com/appsmithorg"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/appsmithorg/appsmith",
        "website": "https://appsmith.com/",
        "docs": "https://docs.appsmith.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source low-code platform for building internal tools, admin panels, and CRUD apps quickly.",
      "logo": "/images/appsmith/logo.webp",
      "images": [],
      "files": {
        "config": "/files/appsmith/template.toml",
        "compose": "/files/appsmith/docker-compose.yml"
      },
      "slug": "appsmith"
    },
    {
      "name": "Appwrite",
      "shortDescription": "Backend platform offering auth, databases, storage, and functions, an open-source Firebase alternative.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "appwrite",
        "url": "https://github.com/appwrite"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/appwrite/appwrite",
        "website": "https://appwrite.io/",
        "docs": "https://appwrite.io/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Backend platform offering auth, databases, storage, and functions, an open-source Firebase alternative.",
      "logo": "/images/appwrite/logo.webp",
      "images": [],
      "files": {
        "config": "/files/appwrite/template.toml",
        "compose": "/files/appwrite/docker-compose.yml"
      },
      "slug": "appwrite"
    },
    {
      "name": "Aptabase",
      "shortDescription": "Privacy-friendly, self-hosted analytics for tracking usage in web, mobile, and desktop apps.",
      "category": {
        "name": "Analytics",
        "icon": "chart-line",
        "description": "Product, web and business analytics, from privacy-first page counters to full dashboards.",
        "slug": "analytics"
      },
      "developedBy": {
        "label": "aptabase",
        "url": "https://github.com/aptabase"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/aptabase/aptabase",
        "website": "https://aptabase.com/",
        "docs": "https://github.com/aptabase/aptabase/blob/main/README.md"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Privacy-friendly, self-hosted analytics for tracking usage in web, mobile, and desktop apps.",
      "logo": "/images/aptabase/logo.webp",
      "images": [],
      "files": {
        "config": "/files/aptabase/template.toml",
        "compose": "/files/aptabase/docker-compose.yml"
      },
      "slug": "aptabase"
    },
    {
      "name": "ArangoDB",
      "shortDescription": "Native multi-model database handling documents, graphs, and key-values through one query language.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "arangodb",
        "url": "https://github.com/arangodb"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/arangodb/arangodb",
        "website": "https://www.arangodb.com/",
        "docs": "https://www.arangodb.com/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Native multi-model database handling documents, graphs, and key-values through one query language.",
      "logo": "/images/arangodb/logo.webp",
      "images": [],
      "files": {
        "config": "/files/arangodb/template.toml",
        "compose": "/files/arangodb/docker-compose.yml"
      },
      "slug": "arangodb"
    },
    {
      "name": "Argilla",
      "shortDescription": "Data annotation and labeling platform that helps teams curate quality datasets for machine learning.",
      "category": {
        "name": "AI",
        "icon": "sparkles",
        "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
        "slug": "ai"
      },
      "developedBy": {
        "label": "argilla-io",
        "url": "https://github.com/argilla-io"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/argilla-io/argilla",
        "website": "https://www.argilla.io/",
        "docs": "https://docs.argilla.io/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Data annotation and labeling platform that helps teams curate quality datasets for machine learning.",
      "logo": "/images/argilla/logo.webp",
      "images": [],
      "files": {
        "config": "/files/argilla/template.toml",
        "compose": "/files/argilla/docker-compose.yml"
      },
      "slug": "argilla"
    },
    {
      "name": "Audiobookshelf",
      "shortDescription": "Self-hosted server that organizes and streams your audiobook and podcast library to any device.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "advplyr",
        "url": "https://github.com/advplyr"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/advplyr/audiobookshelf",
        "website": "https://www.audiobookshelf.org",
        "docs": "https://www.audiobookshelf.org/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted server that organizes and streams your audiobook and podcast library to any device.",
      "logo": "/images/audiobookshelf/logo.webp",
      "images": [],
      "files": {
        "config": "/files/audiobookshelf/template.toml",
        "compose": "/files/audiobookshelf/docker-compose.yml"
      },
      "slug": "audiobookshelf"
    },
    {
      "name": "Authelia",
      "shortDescription": "Authentication portal that adds single sign-on and two-factor login in front of your web apps.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "authelia",
        "url": "https://github.com/authelia"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/authelia/authelia",
        "website": "https://www.authelia.com/",
        "docs": "https://www.authelia.com/overview/prologue/introduction/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Authentication portal that adds single sign-on and two-factor login in front of your web apps.",
      "logo": "/images/authelia/logo.webp",
      "images": [],
      "files": {
        "config": "/files/authelia/template.toml",
        "compose": "/files/authelia/docker-compose.yml"
      },
      "slug": "authelia"
    },
    {
      "name": "Authentik",
      "shortDescription": "Open-source identity provider offering SSO, SAML, OAuth2, and OIDC for centralized user authentication.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "goauthentik",
        "url": "https://github.com/goauthentik"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/goauthentik/authentik",
        "website": "https://goauthentik.io/",
        "docs": "https://goauthentik.io/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source identity provider offering SSO, SAML, OAuth2, and OIDC for centralized user authentication.",
      "logo": "/images/authentik/logo.webp",
      "images": [],
      "files": {
        "config": "/files/authentik/template.toml",
        "compose": "/files/authentik/docker-compose.yml"
      },
      "slug": "authentik"
    },
    {
      "name": "Authorizer",
      "shortDescription": "Developer-focused auth solution providing user login, sign-up, and access control via a low-code setup.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "authorizerdev",
        "url": "https://github.com/authorizerdev"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/authorizerdev/authorizer",
        "website": "https://authorizer.dev",
        "docs": "https://docs.authorizer.dev/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Developer-focused auth solution providing user login, sign-up, and access control via a low-code setup.",
      "logo": "/images/authorizer/logo.webp",
      "images": [],
      "files": {
        "config": "/files/authorizer/template.toml",
        "compose": "/files/authorizer/docker-compose.yml"
      },
      "slug": "authorizer"
    },
    {
      "name": "Autobase",
      "shortDescription": "Automated PostgreSQL cluster management for running your own self-hosted database-as-a-service.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "vitabaks",
        "url": "https://github.com/vitabaks"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/vitabaks/autobase",
        "website": "https://autobase.tech/",
        "docs": "https://autobase.tech/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Automated PostgreSQL cluster management for running your own self-hosted database-as-a-service.",
      "logo": "/images/autobase/logo.webp",
      "images": [],
      "files": {
        "config": "/files/autobase/template.toml",
        "compose": "/files/autobase/docker-compose.yml"
      },
      "slug": "autobase"
    },
    {
      "name": "Automatisch",
      "shortDescription": "Self-hosted workflow automation that connects apps to sync data and trigger actions, like Zapier.",
      "category": {
        "name": "Automation",
        "icon": "workflow",
        "description": "Workflow builders, schedulers and low-code tools that wire your services together.",
        "slug": "automation"
      },
      "developedBy": {
        "label": "automatisch",
        "url": "https://github.com/automatisch"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/automatisch/automatisch",
        "website": "https://automatisch.io/docs",
        "docs": "https://automatisch.io/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted workflow automation that connects apps to sync data and trigger actions, like Zapier.",
      "logo": "/images/automatisch/logo.webp",
      "images": [],
      "files": {
        "config": "/files/automatisch/template.toml",
        "compose": "/files/automatisch/docker-compose.yml"
      },
      "slug": "automatisch"
    },
    {
      "name": "AzuraCast",
      "shortDescription": "All-in-one web radio suite for running internet radio stations from a single management interface.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "AzuraCast",
        "url": "https://github.com/AzuraCast"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/AzuraCast/AzuraCast",
        "website": "https://www.azuracast.com/",
        "docs": "https://docs.azuracast.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "All-in-one web radio suite for running internet radio stations from a single management interface.",
      "logo": "/images/azuracast/logo.webp",
      "images": [],
      "files": {
        "config": "/files/azuracast/template.toml",
        "compose": "/files/azuracast/docker-compose.yml"
      },
      "slug": "azuracast"
    },
    {
      "name": "BabyBuddy",
      "shortDescription": "Baby-tracking app for logging feedings, sleep, diaper changes, and growth milestones in one shared timeline.",
      "category": {
        "name": "Analytics",
        "icon": "chart-line",
        "description": "Product, web and business analytics, from privacy-first page counters to full dashboards.",
        "slug": "analytics"
      },
      "developedBy": {
        "label": "babybuddy",
        "url": "https://github.com/babybuddy"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/babybuddy/babybuddy",
        "website": "https://babybuddy.app",
        "docs": "https://docs.babybuddy.app"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Baby-tracking app for logging feedings, sleep, diaper changes, and growth milestones in one shared timeline.",
      "logo": "/images/babybuddy/logo.webp",
      "images": [],
      "files": {
        "config": "/files/babybuddy/template.toml",
        "compose": "/files/babybuddy/docker-compose.yml"
      },
      "slug": "babybuddy"
    },
    {
      "name": "Backrest",
      "shortDescription": "Web UI for restic backups that schedules snapshots, browses repositories, and restores files from the browser.",
      "category": {
        "name": "Storage",
        "icon": "hard-drive",
        "description": "Object storage, file sync, backups and the shares and drives behind them.",
        "slug": "storage"
      },
      "developedBy": {
        "label": "garethgeorge",
        "url": "https://github.com/garethgeorge"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/garethgeorge/backrest",
        "website": "https://garethgeorge.github.io/backrest",
        "docs": "https://garethgeorge.github.io/backrest/introduction/getting-started"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Web UI for restic backups that schedules snapshots, browses repositories, and restores files from the browser.",
      "logo": "/images/backrest/logo.webp",
      "images": [],
      "files": {
        "config": "/files/backrest/template.toml",
        "compose": "/files/backrest/docker-compose.yml"
      },
      "slug": "backrest"
    },
    {
      "name": "Baikal",
      "shortDescription": "Lightweight CalDAV and CardDAV server for syncing calendars and contacts across your devices.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "baikal",
        "url": "https://github.com/baikal"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://sabre.io/baikal/",
        "website": "https://sabre.io/baikal/",
        "docs": "https://sabre.io/baikal/install/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Lightweight CalDAV and CardDAV server for syncing calendars and contacts across your devices.",
      "logo": "/images/baikal/logo.webp",
      "images": [],
      "files": {
        "config": "/files/baikal/template.toml",
        "compose": "/files/baikal/docker-compose.yml"
      },
      "slug": "baikal"
    },
    {
      "name": "Barrage",
      "shortDescription": "Mobile-first web interface for the Deluge torrent client, letting you manage downloads from any device.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "maulik9898",
        "url": "https://github.com/maulik9898"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/maulik9898/barrage",
        "website": "https://github.com/maulik9898/barrage",
        "docs": "https://github.com/maulik9898/barrage/blob/main/README.md"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Mobile-first web interface for the Deluge torrent client, letting you manage downloads from any device.",
      "logo": "/images/barrage/logo.webp",
      "images": [],
      "files": {
        "config": "/files/barrage/template.toml",
        "compose": "/files/barrage/docker-compose.yml"
      },
      "slug": "barrage"
    },
    {
      "name": "Baserow",
      "shortDescription": "Open-source Airtable alternative for building databases and spreadsheets through a no-code interface.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "Baserow",
        "url": "https://github.com/Baserow"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/Baserow/baserow",
        "website": "https://baserow.io/",
        "docs": "https://baserow.io/docs/index"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source Airtable alternative for building databases and spreadsheets through a no-code interface.",
      "logo": "/images/baserow/logo.webp",
      "images": [],
      "files": {
        "config": "/files/baserow/template.toml",
        "compose": "/files/baserow/docker-compose.yml"
      },
      "slug": "baserow"
    },
    {
      "name": "Bazarr",
      "shortDescription": "Companion to Sonarr and Radarr that automatically finds and downloads subtitles for your media library.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "morpheus65535",
        "url": "https://github.com/morpheus65535"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/morpheus65535/bazarr",
        "website": "https://www.bazarr.media/",
        "docs": "https://www.bazarr.media/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Companion to Sonarr and Radarr that automatically finds and downloads subtitles for your media library.",
      "logo": "/images/bazarr/logo.webp",
      "images": [],
      "files": {
        "config": "/files/bazarr/template.toml",
        "compose": "/files/bazarr/docker-compose.yml"
      },
      "slug": "bazarr"
    },
    {
      "name": "BentoPDF",
      "shortDescription": "Lightweight PDF generation microservice exposing a simple HTTP API for creating documents on demand.",
      "category": {
        "name": "Development",
        "icon": "code",
        "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
        "slug": "development"
      },
      "developedBy": {
        "label": "bentopdf",
        "url": "https://github.com/bentopdf"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/bentopdf/bentopdf",
        "website": "https://bentopdf.com/",
        "docs": "https://github.com/bentopdf/bentopdf#readme"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Lightweight PDF generation microservice exposing a simple HTTP API for creating documents on demand.",
      "logo": "/images/bentopdf/logo.webp",
      "images": [],
      "files": {
        "config": "/files/bentopdf/template.toml",
        "compose": "/files/bentopdf/docker-compose.yml"
      },
      "slug": "bentopdf"
    },
    {
      "name": "Beszel",
      "shortDescription": "Lightweight server monitoring hub that tracks Docker stats and resource history with configurable alerts.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "henrygd",
        "url": "https://github.com/henrygd"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/henrygd/beszel",
        "website": "https://beszel.dev",
        "docs": "https://beszel.dev/guide/getting-started"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Lightweight server monitoring hub that tracks Docker stats and resource history with configurable alerts.",
      "logo": "/images/beszel/logo.webp",
      "images": [],
      "files": {
        "config": "/files/beszel/template.toml",
        "compose": "/files/beszel/docker-compose.yml"
      },
      "slug": "beszel"
    },
    {
      "name": "BigCapital",
      "shortDescription": "Open-source QuickBooks alternative for accounting, bookkeeping, and financial reporting for small businesses.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "bigcapitalhq",
        "url": "https://github.com/bigcapitalhq"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/bigcapitalhq/bigcapital",
        "website": "https://bigcapital.app/",
        "docs": "https://github.com/bigcapitalhq/bigcapital"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source QuickBooks alternative for accounting, bookkeeping, and financial reporting for small businesses.",
      "logo": "/images/bigcapital/logo.webp",
      "images": [],
      "files": {
        "config": "/files/bigcapital/template.toml",
        "compose": "/files/bigcapital/docker-compose.yml"
      },
      "slug": "bigcapital"
    },
    {
      "name": "Blender",
      "shortDescription": "Free 3D creation suite covering modeling, animation, rendering, compositing, and video editing.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "linuxserver",
        "url": "https://github.com/linuxserver"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/linuxserver/docker-blender",
        "website": "https://www.blender.org/",
        "docs": "https://docs.blender.org/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Free 3D creation suite covering modeling, animation, rendering, compositing, and video editing.",
      "logo": "/images/blender/logo.webp",
      "images": [],
      "files": {
        "config": "/files/blender/template.toml",
        "compose": "/files/blender/docker-compose.yml"
      },
      "slug": "blender"
    },
    {
      "name": "Blinko",
      "shortDescription": "Self-hosted note-taking app for quickly capturing and organizing ideas and digital content.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "blinkospace",
        "url": "https://github.com/blinkospace"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/blinkospace/blinko",
        "website": "https://blinko.space/",
        "docs": "https://docs.blinko.space/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted note-taking app for quickly capturing and organizing ideas and digital content.",
      "logo": null,
      "images": [],
      "files": {
        "config": "/files/blinko/template.toml",
        "compose": "/files/blinko/docker-compose.yml"
      },
      "slug": "blinko"
    },
    {
      "name": "Bluesky PDS",
      "shortDescription": "Personal Data Server for Bluesky, letting you host your own account and data on the AT Protocol network.",
      "category": {
        "name": "Analytics",
        "icon": "chart-line",
        "description": "Product, web and business analytics, from privacy-first page counters to full dashboards.",
        "slug": "analytics"
      },
      "developedBy": {
        "label": "bluesky-social",
        "url": "https://github.com/bluesky-social"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/bluesky-social/pds",
        "website": "https://bsky.social/about",
        "docs": "https://github.com/bluesky-social/pds"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Personal Data Server for Bluesky, letting you host your own account and data on the AT Protocol network.",
      "logo": "/images/bluesky-pds/logo.webp",
      "images": [],
      "files": {
        "config": "/files/bluesky-pds/template.toml",
        "compose": "/files/bluesky-pds/docker-compose.yml"
      },
      "slug": "bluesky-pds"
    },
    {
      "name": "bolt.diy",
      "shortDescription": "AI coding agent that builds, runs, edits, and deploys full-stack web apps using the LLM of your choice.",
      "category": {
        "name": "AI",
        "icon": "sparkles",
        "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
        "slug": "ai"
      },
      "developedBy": {
        "label": "stackblitz-labs",
        "url": "https://github.com/stackblitz-labs"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/stackblitz-labs/bolt.diy",
        "website": "https://stackblitz-labs.github.io/bolt.diy/",
        "docs": "https://stackblitz-labs.github.io/bolt.diy/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "AI coding agent that builds, runs, edits, and deploys full-stack web apps using the LLM of your choice.",
      "logo": "/images/bolt-diy/logo.webp",
      "images": [],
      "files": {
        "config": "/files/bolt-diy/template.toml",
        "compose": "/files/bolt-diy/docker-compose.yml"
      },
      "slug": "bolt-diy"
    },
    {
      "name": "Booklore",
      "shortDescription": "Self-hosted app for organizing and serving your book collection, backed by a MariaDB database.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "booklore-app",
        "url": "https://github.com/booklore-app"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/booklore-app/BookLore",
        "website": "https://github.com/booklore-app/BookLore",
        "docs": "https://github.com/booklore-app/BookLore/tree/develop/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted app for organizing and serving your book collection, backed by a MariaDB database.",
      "logo": "/images/booklore/logo.webp",
      "images": [],
      "files": {
        "config": "/files/booklore/template.toml",
        "compose": "/files/booklore/docker-compose.yml"
      },
      "slug": "booklore"
    },
    {
      "name": "BookStack",
      "shortDescription": "Self-hosted wiki and documentation platform that organizes content into books, chapters, and pages.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "BookStackApp",
        "url": "https://github.com/BookStackApp"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/BookStackApp/BookStack",
        "website": "https://www.bookstackapp.com",
        "docs": "https://www.bookstackapp.com/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted wiki and documentation platform that organizes content into books, chapters, and pages.",
      "logo": "/images/bookstack/logo.webp",
      "images": [],
      "files": {
        "config": "/files/bookstack/template.toml",
        "compose": "/files/bookstack/docker-compose.yml"
      },
      "slug": "bookstack"
    },
    {
      "name": "Borgitory",
      "shortDescription": "Web interface for BorgBackup that browses, mounts via FUSE, and manages your backup repositories.",
      "category": {
        "name": "Storage",
        "icon": "hard-drive",
        "description": "Object storage, file sync, backups and the shares and drives behind them.",
        "slug": "storage"
      },
      "developedBy": {
        "label": "mlapaglia",
        "url": "https://github.com/mlapaglia"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/mlapaglia/borgitory",
        "website": "https://github.com/mlapaglia/borgitory",
        "docs": "https://github.com/mlapaglia/borgitory"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Web interface for BorgBackup that browses, mounts via FUSE, and manages your backup repositories.",
      "logo": "/images/borgitory/logo.webp",
      "images": [],
      "files": {
        "config": "/files/borgitory/template.toml",
        "compose": "/files/borgitory/docker-compose.yml"
      },
      "slug": "borgitory"
    },
    {
      "name": "Botpress",
      "shortDescription": "Platform for building, deploying, and managing conversational AI chatbots and agents.",
      "category": {
        "name": "AI",
        "icon": "sparkles",
        "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
        "slug": "ai"
      },
      "developedBy": {
        "label": "botpress",
        "url": "https://github.com/botpress"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/botpress/botpress",
        "website": "https://botpress.com",
        "docs": "https://botpress.com/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Platform for building, deploying, and managing conversational AI chatbots and agents.",
      "logo": "/images/botpress/logo.webp",
      "images": [],
      "files": {
        "config": "/files/botpress/template.toml",
        "compose": "/files/botpress/docker-compose.yml"
      },
      "slug": "botpress"
    },
    {
      "name": "Browserless",
      "shortDescription": "Headless browser service for Puppeteer and Playwright, with REST APIs for scraping and PDF generation.",
      "category": {
        "name": "Automation",
        "icon": "workflow",
        "description": "Workflow builders, schedulers and low-code tools that wire your services together.",
        "slug": "automation"
      },
      "developedBy": {
        "label": "browserless",
        "url": "https://github.com/browserless"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/browserless/browserless",
        "website": "https://www.browserless.io/",
        "docs": "https://docs.browserless.io/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Headless browser service for Puppeteer and Playwright, with REST APIs for scraping and PDF generation.",
      "logo": "/images/browserless/logo.webp",
      "images": [],
      "files": {
        "config": "/files/browserless/template.toml",
        "compose": "/files/browserless/docker-compose.yml"
      },
      "slug": "browserless"
    },
    {
      "name": "Budget Board",
      "shortDescription": "Self-hosted personal budgeting app with a web UI and a PostgreSQL-backed server for tracking finances.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "teelur",
        "url": "https://github.com/teelur"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/teelur/budget-board",
        "website": "https://budgetboard.net/",
        "docs": "https://budgetboard.net/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted personal budgeting app with a web UI and a PostgreSQL-backed server for tracking finances.",
      "logo": "/images/budget-board/logo.webp",
      "images": [],
      "files": {
        "config": "/files/budget-board/template.toml",
        "compose": "/files/budget-board/docker-compose.yml"
      },
      "slug": "budget-board"
    },
    {
      "name": "Budibase",
      "shortDescription": "Open-source low-code platform for building internal tools, forms, and approval apps backed by your data.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "Budibase",
        "url": "https://github.com/Budibase"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/Budibase/budibase",
        "website": "https://budibase.com/",
        "docs": "https://docs.budibase.com/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source low-code platform for building internal tools, forms, and approval apps backed by your data.",
      "logo": "/images/budibase/logo.webp",
      "images": [],
      "files": {
        "config": "/files/budibase/template.toml",
        "compose": "/files/budibase/docker-compose.yml"
      },
      "slug": "budibase"
    },
    {
      "name": "Bugsink",
      "shortDescription": "Self-hosted error tracker compatible with the Sentry SDK for capturing and monitoring application exceptions.",
      "category": {
        "name": "Development",
        "icon": "code",
        "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
        "slug": "development"
      },
      "developedBy": {
        "label": "bugsink",
        "url": "https://github.com/bugsink"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/bugsink/bugsink/",
        "website": "https://www.bugsink.com/",
        "docs": "https://www.bugsink.com/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted error tracker compatible with the Sentry SDK for capturing and monitoring application exceptions.",
      "logo": "/images/bugsink/logo.webp",
      "images": [],
      "files": {
        "config": "/files/bugsink/template.toml",
        "compose": "/files/bugsink/docker-compose.yml"
      },
      "slug": "bugsink"
    },
    {
      "name": "Bytebase",
      "shortDescription": "Database DevOps and CI/CD tool for managing schema changes and reviewing migrations across teams.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "bytebase",
        "url": "https://github.com/bytebase"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/bytebase/bytebase",
        "website": "https://www.bytebase.com",
        "docs": "https://www.bytebase.com/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Database DevOps and CI/CD tool for managing schema changes and reviewing migrations across teams.",
      "logo": "/images/bytebase/logo.webp",
      "images": [],
      "files": {
        "config": "/files/bytebase/template.toml",
        "compose": "/files/bytebase/docker-compose.yml"
      },
      "slug": "bytebase"
    },
    {
      "name": "ByteStash",
      "shortDescription": "Self-hosted vault for storing, organizing, and filtering your code snippets in one secure place.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "jordan-dalby",
        "url": "https://github.com/jordan-dalby"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/jordan-dalby/ByteStash",
        "website": "https://github.com/jordan-dalby/ByteStash",
        "docs": "https://github.com/jordan-dalby/ByteStash"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted vault for storing, organizing, and filtering your code snippets in one secure place.",
      "logo": "/images/bytestash/logo.webp",
      "images": [],
      "files": {
        "config": "/files/bytestash/template.toml",
        "compose": "/files/bytestash/docker-compose.yml"
      },
      "slug": "bytestash"
    },
    {
      "name": "Calcom",
      "shortDescription": "Open-source scheduling and booking platform, a self-hosted alternative to Calendly for managing appointments.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "calcom",
        "url": "https://github.com/calcom"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/calcom/cal.com",
        "website": "https://cal.com/",
        "docs": "https://cal.com/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source scheduling and booking platform, a self-hosted alternative to Calendly for managing appointments.",
      "logo": "/images/calcom/logo.webp",
      "images": [],
      "files": {
        "config": "/files/calcom/template.toml",
        "compose": "/files/calcom/docker-compose.yml"
      },
      "slug": "calcom"
    },
    {
      "name": "Calibre-Web",
      "shortDescription": "Web interface for browsing, reading, and managing an existing Calibre e-book library from any browser.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "janeczku",
        "url": "https://github.com/janeczku"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/janeczku/calibre-web",
        "website": "https://github.com/janeczku/calibre-web",
        "docs": "https://github.com/janeczku/calibre-web/wiki"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Web interface for browsing, reading, and managing an existing Calibre e-book library from any browser.",
      "logo": "/images/calibre-web/logo.webp",
      "images": [],
      "files": {
        "config": "/files/calibre-web/template.toml",
        "compose": "/files/calibre-web/docker-compose.yml"
      },
      "slug": "calibre-web"
    },
    {
      "name": "Calibre",
      "shortDescription": "E-book library manager that organizes, converts, and reads collections across most major formats and reader devices.",
      "category": {
        "name": "CMS",
        "icon": "layout-template",
        "description": "Blogs, sites, headless content APIs and the storefronts built on top of them.",
        "slug": "cms"
      },
      "developedBy": {
        "label": "kovidgoyal",
        "url": "https://github.com/kovidgoyal"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/kovidgoyal/calibre",
        "website": "https://calibre-ebook.com/",
        "docs": "https://manual.calibre-ebook.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "E-book library manager that organizes, converts, and reads collections across most major formats and reader devices.",
      "logo": "/images/calibre/logo.webp",
      "images": [],
      "files": {
        "config": "/files/calibre/template.toml",
        "compose": "/files/calibre/docker-compose.yml"
      },
      "slug": "calibre"
    },
    {
      "name": "Cap.so",
      "shortDescription": "Cap is an open-source screen recorder for sharing videos, backed by MySQL and S3-compatible storage.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "CapSoftware",
        "url": "https://github.com/CapSoftware"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/CapSoftware/Cap",
        "website": "https://cap.so/",
        "docs": "https://cap.so/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Cap is an open-source screen recorder for sharing videos, backed by MySQL and S3-compatible storage.",
      "logo": "/images/cap-so/logo.webp",
      "images": [],
      "files": {
        "config": "/files/cap-so/template.toml",
        "compose": "/files/cap-so/docker-compose.yml"
      },
      "slug": "cap-so"
    },
    {
      "name": "Carbone",
      "shortDescription": "Document generation engine that renders PDF, DOCX, and XLSX files from JSON data and templates.",
      "category": {
        "name": "Analytics",
        "icon": "chart-line",
        "description": "Product, web and business analytics, from privacy-first page counters to full dashboards.",
        "slug": "analytics"
      },
      "developedBy": {
        "label": "carboneio",
        "url": "https://github.com/carboneio"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/carboneio/carbone",
        "website": "https://carbone.io/",
        "docs": "https://carbone.io/documentation/design/overview/getting-started.html"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Document generation engine that renders PDF, DOCX, and XLSX files from JSON data and templates.",
      "logo": "/images/carbone/logo.webp",
      "images": [],
      "files": {
        "config": "/files/carbone/template.toml",
        "compose": "/files/carbone/docker-compose.yml"
      },
      "slug": "carbone"
    },
    {
      "name": "Casdoor",
      "shortDescription": "Identity and access management platform with a web UI for SSO via OAuth2, OIDC, SAML, LDAP, and MFA.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "casdoor",
        "url": "https://github.com/casdoor"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/casdoor/casdoor",
        "website": "https://casdoor.org/",
        "docs": "https://casdoor.org/docs/overview"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Identity and access management platform with a web UI for SSO via OAuth2, OIDC, SAML, LDAP, and MFA.",
      "logo": "/images/casdoor/logo.webp",
      "images": [],
      "files": {
        "config": "/files/casdoor/template.toml",
        "compose": "/files/casdoor/docker-compose.yml"
      },
      "slug": "casdoor"
    },
    {
      "name": "Change Detection",
      "shortDescription": "Website change monitor that watches pages for updates and sends notifications when content shifts.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "dgtlmoon",
        "url": "https://github.com/dgtlmoon"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/dgtlmoon/changedetection.io",
        "website": "https://changedetection.io",
        "docs": "https://github.com/dgtlmoon/changedetection.io/wiki"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Website change monitor that watches pages for updates and sends notifications when content shifts.",
      "logo": "/images/change-detection/logo.webp",
      "images": [],
      "files": {
        "config": "/files/change-detection/template.toml",
        "compose": "/files/change-detection/docker-compose.yml"
      },
      "slug": "change-detection"
    },
    {
      "name": "Chatwoot",
      "shortDescription": "Open-source customer engagement suite with a shared inbox, live chat, and omnichannel support for teams.",
      "category": {
        "name": "Communication",
        "icon": "message-circle",
        "description": "Chat, calls, forums and the bots and bridges that connect a team or a community.",
        "slug": "communication"
      },
      "developedBy": {
        "label": "chatwoot",
        "url": "https://github.com/chatwoot"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/chatwoot/chatwoot",
        "website": "https://www.chatwoot.com",
        "docs": "https://www.chatwoot.com/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source customer engagement suite with a shared inbox, live chat, and omnichannel support for teams.",
      "logo": "/images/chatwoot/logo.webp",
      "images": [],
      "files": {
        "config": "/files/chatwoot/template.toml",
        "compose": "/files/chatwoot/docker-compose.yml"
      },
      "slug": "chatwoot"
    },
    {
      "name": "Checkcle",
      "shortDescription": "Monitoring and compliance tool that surfaces insights into system configuration and runtime checks.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "Operacle",
        "url": "https://github.com/Operacle"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/Operacle/checkcle",
        "website": "https://operacle.com/",
        "docs": "https://github.com/Operacle/checkcle#readme"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Monitoring and compliance tool that surfaces insights into system configuration and runtime checks.",
      "logo": "/images/checkcle/logo.webp",
      "images": [],
      "files": {
        "config": "/files/checkcle/template.toml",
        "compose": "/files/checkcle/docker-compose.yml"
      },
      "slug": "checkcle"
    },
    {
      "name": "Checkmate",
      "shortDescription": "Open-source uptime monitor that tracks server hardware, response times, and incidents with clear visualizations.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "bluewave-labs",
        "url": "https://github.com/bluewave-labs"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/bluewave-labs/checkmate",
        "website": "https://checkmate.so/",
        "docs": "https://docs.checkmate.so"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source uptime monitor that tracks server hardware, response times, and incidents with clear visualizations.",
      "logo": "/images/checkmate/logo.webp",
      "images": [],
      "files": {
        "config": "/files/checkmate/template.toml",
        "compose": "/files/checkmate/docker-compose.yml"
      },
      "slug": "checkmate"
    },
    {
      "name": "Chevereto",
      "shortDescription": "Self-hosted image and video hosting platform for uploading, organizing, and sharing media in albums.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "chevereto",
        "url": "https://github.com/chevereto"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/chevereto/chevereto",
        "website": "https://chevereto.com/",
        "docs": "https://v4-docs.chevereto.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted image and video hosting platform for uploading, organizing, and sharing media in albums.",
      "logo": "/images/chevereto/logo.webp",
      "images": [],
      "files": {
        "config": "/files/chevereto/template.toml",
        "compose": "/files/chevereto/docker-compose.yml"
      },
      "slug": "chevereto"
    },
    {
      "name": "Chibisafe",
      "shortDescription": "Self-hosted file vault for uploading and sharing files, with a clean interface and fast uploads.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "chibisafe",
        "url": "https://github.com/chibisafe"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/chibisafe/chibisafe",
        "website": "https://chibisafe.app",
        "docs": "https://chibisafe.app/docs/intro"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted file vault for uploading and sharing files, with a clean interface and fast uploads.",
      "logo": "/images/chibisafe/logo.webp",
      "images": [],
      "files": {
        "config": "/files/chibisafe/template.toml",
        "compose": "/files/chibisafe/docker-compose.yml"
      },
      "slug": "chibisafe"
    },
    {
      "name": "Chief-Onboarding",
      "shortDescription": "Employee onboarding platform that streamlines new-hire workflows, task tracking, and document management.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "chiefonboarding",
        "url": "https://github.com/chiefonboarding"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/chiefonboarding/chiefonboarding",
        "website": "https://demo.chiefonboarding.com/",
        "docs": "https://docs.chiefonboarding.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Employee onboarding platform that streamlines new-hire workflows, task tracking, and document management.",
      "logo": "/images/chief-onboarding/logo.webp",
      "images": [],
      "files": {
        "config": "/files/chief-onboarding/template.toml",
        "compose": "/files/chief-onboarding/docker-compose.yml"
      },
      "slug": "chief-onboarding"
    },
    {
      "name": "ChirpStack",
      "shortDescription": "Open-source LoRaWAN network server for IoT, with gateway bridges, a REST API, and a device management UI.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "chirpstack",
        "url": "https://github.com/chirpstack"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/chirpstack/chirpstack",
        "website": "https://www.chirpstack.io/",
        "docs": "https://www.chirpstack.io/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source LoRaWAN network server for IoT, with gateway bridges, a REST API, and a device management UI.",
      "logo": "/images/chirpstack/logo.webp",
      "images": [],
      "files": {
        "config": "/files/chirpstack/template.toml",
        "compose": "/files/chirpstack/docker-compose.yml"
      },
      "slug": "chirpstack"
    },
    {
      "name": "Chromium",
      "shortDescription": "Containerized Chromium browser you can access from a web browser for sandboxed, remote browsing.",
      "category": {
        "name": "Development",
        "icon": "code",
        "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
        "slug": "development"
      },
      "developedBy": {
        "label": "linuxserver",
        "url": "https://github.com/linuxserver"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/linuxserver/docker-chromium",
        "website": "https://docs.linuxserver.io/images/docker-chromium",
        "docs": "https://docs.linuxserver.io/images/docker-chromium"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Containerized Chromium browser you can access from a web browser for sandboxed, remote browsing.",
      "logo": "/images/chromium/logo.webp",
      "images": [],
      "files": {
        "config": "/files/chromium/template.toml",
        "compose": "/files/chromium/docker-compose.yml"
      },
      "slug": "chromium"
    },
    {
      "name": "ClassicPress",
      "shortDescription": "Community-led CMS forked from WordPress 6.2 that keeps the classic TinyMCE editor as the default.",
      "category": {
        "name": "CMS",
        "icon": "layout-template",
        "description": "Blogs, sites, headless content APIs and the storefronts built on top of them.",
        "slug": "cms"
      },
      "developedBy": {
        "label": "ClassicPress",
        "url": "https://github.com/ClassicPress"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/ClassicPress/",
        "website": "https://www.classicpress.net/",
        "docs": "https://docs.classicpress.net/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Community-led CMS forked from WordPress 6.2 that keeps the classic TinyMCE editor as the default.",
      "logo": "/images/classicpress/logo.webp",
      "images": [],
      "files": {
        "config": "/files/classicpress/template.toml",
        "compose": "/files/classicpress/docker-compose.yml"
      },
      "slug": "classicpress"
    },
    {
      "name": "ClickHouse",
      "shortDescription": "Column-oriented OLAP database built for fast, real-time analytical queries over very large datasets.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "ClickHouse",
        "url": "https://github.com/ClickHouse"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/ClickHouse/ClickHouse",
        "website": "https://clickhouse.com/",
        "docs": "https://clickhouse.com/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Column-oriented OLAP database built for fast, real-time analytical queries over very large datasets.",
      "logo": "/images/clickhouse/logo.webp",
      "images": [],
      "files": {
        "config": "/files/clickhouse/template.toml",
        "compose": "/files/clickhouse/docker-compose.yml"
      },
      "slug": "clickhouse"
    },
    {
      "name": "Cloud Commander",
      "shortDescription": "Web-based file manager with a built-in console and text editor for working with server files in the browser.",
      "category": {
        "name": "Storage",
        "icon": "hard-drive",
        "description": "Object storage, file sync, backups and the shares and drives behind them.",
        "slug": "storage"
      },
      "developedBy": {
        "label": "coderaiser",
        "url": "https://github.com/coderaiser"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/coderaiser/cloudcmd",
        "website": "https://cloudcmd.io",
        "docs": "https://cloudcmd.io/#install"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Web-based file manager with a built-in console and text editor for working with server files in the browser.",
      "logo": "/images/cloud-commander/logo.webp",
      "images": [],
      "files": {
        "config": "/files/cloud-commander/template.toml",
        "compose": "/files/cloud-commander/docker-compose.yml"
      },
      "slug": "cloud-commander"
    },
    {
      "name": "Cloud9",
      "shortDescription": "Cloud-based IDE for writing, building, and debugging applications collaboratively in real time.",
      "category": {
        "name": "Development",
        "icon": "code",
        "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
        "slug": "development"
      },
      "developedBy": {
        "label": "c9",
        "url": "https://github.com/c9"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/c9",
        "website": "https://aws.amazon.com/cloud9/",
        "docs": "https://docs.aws.amazon.com/cloud9/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Cloud-based IDE for writing, building, and debugging applications collaboratively in real time.",
      "logo": "/images/cloud9/logo.webp",
      "images": [],
      "files": {
        "config": "/files/cloud9/template.toml",
        "compose": "/files/cloud9/docker-compose.yml"
      },
      "slug": "cloud9"
    },
    {
      "name": "Cloudflare DDNS",
      "shortDescription": "Lightweight Cloudflare DDNS updater that keeps your DNS records pointed at a changing IP address.",
      "category": {
        "name": "Development",
        "icon": "code",
        "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
        "slug": "development"
      },
      "developedBy": {
        "label": "favonia",
        "url": "https://github.com/favonia"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/favonia/cloudflare-ddns",
        "website": "https://github.com/favonia/cloudflare-ddns",
        "docs": "https://github.com/favonia/cloudflare-ddns"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Lightweight Cloudflare DDNS updater that keeps your DNS records pointed at a changing IP address.",
      "logo": "/images/cloudflare-ddns/logo.webp",
      "images": [],
      "files": {
        "config": "/files/cloudflare-ddns/template.toml",
        "compose": "/files/cloudflare-ddns/docker-compose.yml"
      },
      "slug": "cloudflare-ddns"
    },
    {
      "name": "Cloudflared",
      "shortDescription": "Daemon that securely exposes local services to the internet through a Cloudflare Tunnel, no open ports needed.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "cloudflare",
        "url": "https://github.com/cloudflare"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/cloudflare/cloudflared",
        "website": "https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/",
        "docs": "https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/get-started/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Daemon that securely exposes local services to the internet through a Cloudflare Tunnel, no open ports needed.",
      "logo": "/images/cloudflared/logo.webp",
      "images": [],
      "files": {
        "config": "/files/cloudflared/template.toml",
        "compose": "/files/cloudflared/docker-compose.yml"
      },
      "slug": "cloudflared"
    },
    {
      "name": "Cloudreve",
      "shortDescription": "Self-hosted file management and sharing system supporting local, OneDrive, S3, and other storage backends.",
      "category": {
        "name": "Development",
        "icon": "code",
        "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
        "slug": "development"
      },
      "developedBy": {
        "label": "cloudreve",
        "url": "https://github.com/cloudreve"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/cloudreve/Cloudreve",
        "website": "https://cloudreve.org",
        "docs": "https://docs.cloudreve.org"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted file management and sharing system supporting local, OneDrive, S3, and other storage backends.",
      "logo": "/images/cloudreve/logo.webp",
      "images": [],
      "files": {
        "config": "/files/cloudreve/template.toml",
        "compose": "/files/cloudreve/docker-compose.yml"
      },
      "slug": "cloudreve"
    },
    {
      "name": "Cockpit",
      "shortDescription": "API-first headless CMS for structuring and delivering content to websites, apps, and digital products.",
      "category": {
        "name": "CMS",
        "icon": "layout-template",
        "description": "Blogs, sites, headless content APIs and the storefronts built on top of them.",
        "slug": "cms"
      },
      "developedBy": {
        "label": "Cockpit-HQ",
        "url": "https://github.com/Cockpit-HQ"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/Cockpit-HQ",
        "website": "https://getcockpit.com",
        "docs": "https://getcockpit.com/documentation"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "API-first headless CMS for structuring and delivering content to websites, apps, and digital products.",
      "logo": "/images/cockpit/logo.webp",
      "images": [],
      "files": {
        "config": "/files/cockpit/template.toml",
        "compose": "/files/cockpit/docker-compose.yml"
      },
      "slug": "cockpit"
    },
    {
      "name": "Coder",
      "shortDescription": "Open-source cloud development environment you host yourself, giving teams remote workspaces on your infrastructure.",
      "category": {
        "name": "Development",
        "icon": "code",
        "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
        "slug": "development"
      },
      "developedBy": {
        "label": "coder",
        "url": "https://github.com/coder"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/coder/coder",
        "website": "https://coder.com/",
        "docs": "https://coder.com/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source cloud development environment you host yourself, giving teams remote workspaces on your infrastructure.",
      "logo": "/images/coder/logo.webp",
      "images": [],
      "files": {
        "config": "/files/coder/template.toml",
        "compose": "/files/coder/docker-compose.yml"
      },
      "slug": "coder"
    },
    {
      "name": "CodeX Docs",
      "shortDescription": "Documentation site built on the Editor.js block editor for writing and publishing technical docs.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "codex-team",
        "url": "https://github.com/codex-team"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/codex-team/codex.docs",
        "website": "https://codex.so",
        "docs": "https://docs.codex.so"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Documentation site built on the Editor.js block editor for writing and publishing technical docs.",
      "logo": "/images/codex-docs/logo.webp",
      "images": [],
      "files": {
        "config": "/files/codex-docs/template.toml",
        "compose": "/files/codex-docs/docker-compose.yml"
      },
      "slug": "codex-docs"
    },
    {
      "name": "Colanode Server",
      "shortDescription": "Local-first, open-source collaboration workspace that combines Slack-style chat and Notion-style docs.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "colanode",
        "url": "https://github.com/colanode"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/colanode/colanode",
        "website": "https://colanode.com",
        "docs": "https://colanode.com/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Local-first, open-source collaboration workspace that combines Slack-style chat and Notion-style docs.",
      "logo": "/images/colanode-server/logo.webp",
      "images": [],
      "files": {
        "config": "/files/colanode-server/template.toml",
        "compose": "/files/colanode-server/docker-compose.yml"
      },
      "slug": "colanode-server"
    },
    {
      "name": "Collabora Office",
      "shortDescription": "Online office suite for collaboratively editing documents, spreadsheets, and presentations in the browser.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "CollaboraOnline",
        "url": "https://github.com/CollaboraOnline"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/CollaboraOnline",
        "website": "https://collaboraonline.com",
        "docs": "https://sdk.collaboraonline.com/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Online office suite for collaboratively editing documents, spreadsheets, and presentations in the browser.",
      "logo": "/images/collabora-office/logo.webp",
      "images": [],
      "files": {
        "config": "/files/collabora-office/template.toml",
        "compose": "/files/collabora-office/docker-compose.yml"
      },
      "slug": "collabora-office"
    },
    {
      "name": "CommaFeed",
      "shortDescription": "Lightweight, open-source RSS feed reader and news aggregator backed by PostgreSQL.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "Athou",
        "url": "https://github.com/Athou"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/Athou/commafeed",
        "website": "https://www.commafeed.com/",
        "docs": "https://github.com/Athou/commafeed/wiki"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Lightweight, open-source RSS feed reader and news aggregator backed by PostgreSQL.",
      "logo": "/images/commafeed/logo.webp",
      "images": [],
      "files": {
        "config": "/files/commafeed/template.toml",
        "compose": "/files/commafeed/docker-compose.yml"
      },
      "slug": "commafeed"
    },
    {
      "name": "Commento Plus Plus",
      "shortDescription": "Open-source embeddable comments box with markdown, voting, spam detection, moderation, and OAuth login.",
      "category": {
        "name": "Communication",
        "icon": "message-circle",
        "description": "Chat, calls, forums and the bots and bridges that connect a team or a community.",
        "slug": "communication"
      },
      "developedBy": {
        "label": "souramoo",
        "url": "https://github.com/souramoo"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/souramoo/commentoplusplus",
        "website": "https://commento.io/",
        "docs": "https://commento.io/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source embeddable comments box with markdown, voting, spam detection, moderation, and OAuth login.",
      "logo": "/images/commento-plus-plus/logo.webp",
      "images": [],
      "files": {
        "config": "/files/commento-plus-plus/template.toml",
        "compose": "/files/commento-plus-plus/docker-compose.yml"
      },
      "slug": "commento-plus-plus"
    },
    {
      "name": "Commento",
      "shortDescription": "Lightweight, privacy-friendly comments widget with markdown support and moderation for embedding on your site.",
      "category": {
        "name": "Communication",
        "icon": "message-circle",
        "description": "Chat, calls, forums and the bots and bridges that connect a team or a community.",
        "slug": "communication"
      },
      "developedBy": {
        "label": "souramoo",
        "url": "https://github.com/souramoo"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/souramoo/commentoplusplus",
        "website": "https://commento.io/",
        "docs": "https://commento.io/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Lightweight, privacy-friendly comments widget with markdown support and moderation for embedding on your site.",
      "logo": "/images/commento/logo.webp",
      "images": [],
      "files": {
        "config": "/files/commento/template.toml",
        "compose": "/files/commento/docker-compose.yml"
      },
      "slug": "commento"
    },
    {
      "name": "Conduit",
      "shortDescription": "Simple, fast Matrix homeserver written in Rust for hosting your own federated chat.",
      "category": {
        "name": "Communication",
        "icon": "message-circle",
        "description": "Chat, calls, forums and the bots and bridges that connect a team or a community.",
        "slug": "communication"
      },
      "developedBy": {
        "label": "famedly",
        "url": "https://github.com/famedly"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://gitlab.com/famedly/conduit",
        "website": "https://conduit.rs/",
        "docs": "https://docs.conduit.rs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Simple, fast Matrix homeserver written in Rust for hosting your own federated chat.",
      "logo": "/images/conduit/logo.webp",
      "images": [],
      "files": {
        "config": "/files/conduit/template.toml",
        "compose": "/files/conduit/docker-compose.yml"
      },
      "slug": "conduit"
    },
    {
      "name": "Conduwuit",
      "shortDescription": "Featureful Matrix chat homeserver, a well-maintained fork of Conduit for self-hosted federated messaging.",
      "category": {
        "name": "Communication",
        "icon": "message-circle",
        "description": "Chat, calls, forums and the bots and bridges that connect a team or a community.",
        "slug": "communication"
      },
      "developedBy": {
        "label": "girlbossceo",
        "url": "https://github.com/girlbossceo"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/girlbossceo/conduwuit",
        "website": "https://conduwuit.puppyirl.gay",
        "docs": "https://conduwuit.puppyirl.gay/configuration.html"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Featureful Matrix chat homeserver, a well-maintained fork of Conduit for self-hosted federated messaging.",
      "logo": "/images/conduwuit/logo.webp",
      "images": [],
      "files": {
        "config": "/files/conduwuit/template.toml",
        "compose": "/files/conduwuit/docker-compose.yml"
      },
      "slug": "conduwuit"
    },
    {
      "name": "Confluence",
      "shortDescription": "Team workspace from Atlassian for creating, organizing, and collaborating on documentation and project knowledge.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "confluence.atlassian.com",
        "url": "https://confluence.atlassian.com"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://confluence.atlassian.com",
        "website": "https://confluence.atlassian.com",
        "docs": "https://confluence.atlassian.com/doc/confluence-documentation-135922.html"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Team workspace from Atlassian for creating, organizing, and collaborating on documentation and project knowledge.",
      "logo": "/images/confluence/logo.webp",
      "images": [],
      "files": {
        "config": "/files/confluence/template.toml",
        "compose": "/files/confluence/docker-compose.yml"
      },
      "slug": "confluence"
    },
    {
      "name": "ConvertX",
      "shortDescription": "Self-hosted media file converter with optional user accounts and file management.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "c4illin",
        "url": "https://github.com/c4illin"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/c4illin/ConvertX",
        "website": "https://github.com/c4illin/ConvertX",
        "docs": "https://github.com/c4illin/ConvertX#environment-variables"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted media file converter with optional user accounts and file management.",
      "logo": "/images/convertx/logo.webp",
      "images": [],
      "files": {
        "config": "/files/convertx/template.toml",
        "compose": "/files/convertx/docker-compose.yml"
      },
      "slug": "convertx"
    },
    {
      "name": "Convex",
      "shortDescription": "Open-source reactive backend database with built-in real-time sync for web app developers.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "get-convex",
        "url": "https://github.com/get-convex"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/get-convex/convex",
        "website": "https://www.convex.dev/",
        "docs": "https://www.convex.dev/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source reactive backend database with built-in real-time sync for web app developers.",
      "logo": "/images/convex/logo.webp",
      "images": [],
      "files": {
        "config": "/files/convex/template.toml",
        "compose": "/files/convex/docker-compose.yml"
      },
      "slug": "convex"
    },
    {
      "name": "CookieCloud",
      "shortDescription": "Self-hosted backend for securely syncing and managing browser cookies across your devices.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "easychen",
        "url": "https://github.com/easychen"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/easychen/cookiecloud",
        "website": "https://github.com/easychen/cookiecloud",
        "docs": "https://github.com/easychen/cookiecloud#readme"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted backend for securely syncing and managing browser cookies across your devices.",
      "logo": "/images/cookiecloud/logo.webp",
      "images": [],
      "files": {
        "config": "/files/cookiecloud/template.toml",
        "compose": "/files/cookiecloud/docker-compose.yml"
      },
      "slug": "cookiecloud"
    },
    {
      "name": "Coral",
      "shortDescription": "Open-source commenting platform with AI-assisted moderation and full data control, used by major news sites.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "coralproject",
        "url": "https://github.com/coralproject"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/coralproject/talk",
        "website": "https://coralproject.net/",
        "docs": "https://docs.coralproject.net/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source commenting platform with AI-assisted moderation and full data control, used by major news sites.",
      "logo": "/images/coral/logo.webp",
      "images": [],
      "files": {
        "config": "/files/coral/template.toml",
        "compose": "/files/coral/docker-compose.yml"
      },
      "slug": "coral"
    },
    {
      "name": "CouchDB",
      "shortDescription": "Document-oriented NoSQL database from Apache built for easy replication and horizontal scaling.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "apache",
        "url": "https://github.com/apache"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/apache/couchdb",
        "website": "https://couchdb.apache.org/",
        "docs": "https://docs.couchdb.org/en/stable/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Document-oriented NoSQL database from Apache built for easy replication and horizontal scaling.",
      "logo": "/images/couchdb/logo.webp",
      "images": [],
      "files": {
        "config": "/files/couchdb/template.toml",
        "compose": "/files/couchdb/docker-compose.yml"
      },
      "slug": "couchdb"
    },
    {
      "name": "Crawl4AI",
      "shortDescription": "AI-oriented web crawler for screenshots, PDFs, and LLM-based extraction, with a playground and MCP integration.",
      "category": {
        "name": "AI",
        "icon": "sparkles",
        "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
        "slug": "ai"
      },
      "developedBy": {
        "label": "unclecode",
        "url": "https://github.com/unclecode"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/unclecode/crawl4ai",
        "website": "https://crawl4ai.com",
        "docs": "https://github.com/unclecode/crawl4ai#readme"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "AI-oriented web crawler for screenshots, PDFs, and LLM-based extraction, with a playground and MCP integration.",
      "logo": "/images/crawl4ai/logo.webp",
      "images": [],
      "files": {
        "config": "/files/crawl4ai/template.toml",
        "compose": "/files/crawl4ai/docker-compose.yml"
      },
      "slug": "crawl4ai"
    },
    {
      "name": "Crowdsec",
      "shortDescription": "Open-source security engine that detects and blocks malicious IPs to protect your infrastructure and apps.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "crowdsecurity",
        "url": "https://github.com/crowdsecurity"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/crowdsecurity/crowdsec",
        "website": "https://crowdsec.net/",
        "docs": "https://docs.crowdsec.net"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source security engine that detects and blocks malicious IPs to protect your infrastructure and apps.",
      "logo": "/images/crowdsec/logo.webp",
      "images": [],
      "files": {
        "config": "/files/crowdsec/template.toml",
        "compose": "/files/crowdsec/docker-compose.yml"
      },
      "slug": "crowdsec"
    },
    {
      "name": "Cup",
      "shortDescription": "Self-hosted UI for checking and managing Docker container image updates.",
      "category": {
        "name": "Development",
        "icon": "code",
        "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
        "slug": "development"
      },
      "developedBy": {
        "label": "sergi0g",
        "url": "https://github.com/sergi0g"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/sergi0g/cup",
        "website": "https://cup.sh",
        "docs": "https://github.com/sergi0g/cup"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted UI for checking and managing Docker container image updates.",
      "logo": "/images/cup/logo.webp",
      "images": [],
      "files": {
        "config": "/files/cup/template.toml",
        "compose": "/files/cup/docker-compose.yml"
      },
      "slug": "cup"
    },
    {
      "name": "CyberChef",
      "shortDescription": "Web app from GCHQ for encryption, encoding, compression, and data analysis through chainable operations.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "gchq",
        "url": "https://github.com/gchq"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/gchq/CyberChef",
        "website": "https://gchq.github.io/CyberChef/",
        "docs": "https://github.com/gchq/CyberChef/wiki"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Web app from GCHQ for encryption, encoding, compression, and data analysis through chainable operations.",
      "logo": "/images/cyberchef/logo.webp",
      "images": [],
      "files": {
        "config": "/files/cyberchef/template.toml",
        "compose": "/files/cyberchef/docker-compose.yml"
      },
      "slug": "cyberchef"
    },
    {
      "name": "Dashy",
      "shortDescription": "Customizable homelab dashboard that organizes your self-hosted services with widgets, status checks, and themes.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "Lissy93",
        "url": "https://github.com/Lissy93"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/Lissy93/dashy",
        "website": "https://dashy.to/",
        "docs": "https://github.com/Lissy93/dashy/tree/master/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Customizable homelab dashboard that organizes your self-hosted services with widgets, status checks, and themes.",
      "logo": "/images/dashy/logo.webp",
      "images": [],
      "files": {
        "config": "/files/dashy/template.toml",
        "compose": "/files/dashy/docker-compose.yml"
      },
      "slug": "dashy"
    },
    {
      "name": "DataLens",
      "shortDescription": "Business intelligence platform for building interactive dashboards, charts, and data visualizations from your databases.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "datalens-tech",
        "url": "https://github.com/datalens-tech"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/datalens-tech/datalens",
        "website": "https://datalens.tech/",
        "docs": "https://datalens.tech/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Business intelligence platform for building interactive dashboards, charts, and data visualizations from your databases.",
      "logo": "/images/datalens/logo.webp",
      "images": [],
      "files": {
        "config": "/files/datalens/template.toml",
        "compose": "/files/datalens/docker-compose.yml"
      },
      "slug": "datalens"
    },
    {
      "name": "Directory Lister",
      "shortDescription": "Lightweight PHP app that turns any web-accessible folder into a browsable, navigable file listing.",
      "category": {
        "name": "Storage",
        "icon": "hard-drive",
        "description": "Object storage, file sync, backups and the shares and drives behind them.",
        "slug": "storage"
      },
      "developedBy": {
        "label": "DirectoryLister",
        "url": "https://github.com/DirectoryLister"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/DirectoryLister/DirectoryLister",
        "website": "https://www.directorylister.com/",
        "docs": "https://docs.directorylister.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Lightweight PHP app that turns any web-accessible folder into a browsable, navigable file listing.",
      "logo": "/images/directory-lister/logo.webp",
      "images": [],
      "files": {
        "config": "/files/directory-lister/template.toml",
        "compose": "/files/directory-lister/docker-compose.yml"
      },
      "slug": "directory-lister"
    },
    {
      "name": "Directus",
      "shortDescription": "Headless CMS that wraps any SQL database with an instant REST and GraphQL API plus an admin dashboard.",
      "category": {
        "name": "CMS",
        "icon": "layout-template",
        "description": "Blogs, sites, headless content APIs and the storefronts built on top of them.",
        "slug": "cms"
      },
      "developedBy": {
        "label": "directus",
        "url": "https://github.com/directus"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/directus/directus",
        "website": "https://directus.io/",
        "docs": "https://docs.directus.io/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Headless CMS that wraps any SQL database with an instant REST and GraphQL API plus an admin dashboard.",
      "logo": "/images/directus/logo.webp",
      "images": [],
      "files": {
        "config": "/files/directus/template.toml",
        "compose": "/files/directus/docker-compose.yml"
      },
      "slug": "directus"
    },
    {
      "name": "Discord Tickets",
      "shortDescription": "Discord bot that creates per-user support ticket channels, letting communities handle help requests in private threads.",
      "category": {
        "name": "Communication",
        "icon": "message-circle",
        "description": "Chat, calls, forums and the bots and bridges that connect a team or a community.",
        "slug": "communication"
      },
      "developedBy": {
        "label": "discord-tickets",
        "url": "https://github.com/discord-tickets"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/discord-tickets/bot",
        "website": "https://discordtickets.app",
        "docs": "https://discordtickets.app/self-hosting/installation/docker/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Discord bot that creates per-user support ticket channels, letting communities handle help requests in private threads.",
      "logo": "/images/discord-tickets/logo.webp",
      "images": [],
      "files": {
        "config": "/files/discord-tickets/template.toml",
        "compose": "/files/discord-tickets/docker-compose.yml"
      },
      "slug": "discord-tickets"
    },
    {
      "name": "Discourse",
      "shortDescription": "Modern forum platform for community discussions, doubling as a mailing list or real-time chat room.",
      "category": {
        "name": "Communication",
        "icon": "message-circle",
        "description": "Chat, calls, forums and the bots and bridges that connect a team or a community.",
        "slug": "communication"
      },
      "developedBy": {
        "label": "discourse",
        "url": "https://github.com/discourse"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/discourse/discourse",
        "website": "https://www.discourse.org/",
        "docs": "https://meta.discourse.org/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Modern forum platform for community discussions, doubling as a mailing list or real-time chat room.",
      "logo": "/images/discourse/logo.webp",
      "images": [],
      "files": {
        "config": "/files/discourse/template.toml",
        "compose": "/files/discourse/docker-compose.yml"
      },
      "slug": "discourse"
    },
    {
      "name": "Docker Registry",
      "shortDescription": "Reference implementation of the Docker Registry for storing, versioning, and distributing container images and OCI artifacts.",
      "category": {
        "name": "Development",
        "icon": "code",
        "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
        "slug": "development"
      },
      "developedBy": {
        "label": "distribution",
        "url": "https://github.com/distribution"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/distribution/distribution",
        "website": "https://hub.docker.com/_/registry",
        "docs": "https://distribution.github.io/distribution/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Reference implementation of the Docker Registry for storing, versioning, and distributing container images and OCI artifacts.",
      "logo": "/images/docker-registry/logo.webp",
      "images": [],
      "files": {
        "config": "/files/docker-registry/template.toml",
        "compose": "/files/docker-registry/docker-compose.yml"
      },
      "slug": "docker-registry"
    },
    {
      "name": "Docling Serve",
      "shortDescription": "API service that parses and converts PDFs and office documents into structured, AI-ready text and data.",
      "category": {
        "name": "AI",
        "icon": "sparkles",
        "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
        "slug": "ai"
      },
      "developedBy": {
        "label": "docling-project",
        "url": "https://github.com/docling-project"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/docling-project/docling-serve",
        "website": "https://docling-project.github.io/docling-serve/",
        "docs": "https://docling-project.github.io/docling-serve/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "API service that parses and converts PDFs and office documents into structured, AI-ready text and data.",
      "logo": "/images/docling-serve/logo.webp",
      "images": [],
      "files": {
        "config": "/files/docling-serve/template.toml",
        "compose": "/files/docling-serve/docker-compose.yml"
      },
      "slug": "docling-serve"
    },
    {
      "name": "Docmost",
      "shortDescription": "Collaborative wiki and documentation tool for teams to write, organize, and share knowledge in real time.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "docmost",
        "url": "https://github.com/docmost"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/docmost/docmost",
        "website": "https://docmost.com/",
        "docs": "https://docmost.com/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Collaborative wiki and documentation tool for teams to write, organize, and share knowledge in real time.",
      "logo": "/images/docmost/logo.webp",
      "images": [],
      "files": {
        "config": "/files/docmost/template.toml",
        "compose": "/files/docmost/docker-compose.yml"
      },
      "slug": "docmost"
    },
    {
      "name": "Documenso",
      "shortDescription": "Open-source alternative to DocuSign for sending, signing, and managing digital documents securely.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "documenso",
        "url": "https://github.com/documenso"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/documenso/documenso",
        "website": "https://documenso.com/",
        "docs": "https://documenso.com/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source alternative to DocuSign for sending, signing, and managing digital documents securely.",
      "logo": "/images/documenso/logo.webp",
      "images": [],
      "files": {
        "config": "/files/documenso/template.toml",
        "compose": "/files/documenso/docker-compose.yml"
      },
      "slug": "documenso"
    },
    {
      "name": "Docuseal",
      "shortDescription": "Document signing platform for creating fillable forms and collecting legally binding e-signatures.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "docusealco",
        "url": "https://github.com/docusealco"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/docusealco/docuseal",
        "website": "https://www.docuseal.com/",
        "docs": "https://www.docuseal.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Document signing platform for creating fillable forms and collecting legally binding e-signatures.",
      "logo": "/images/docuseal/logo.webp",
      "images": [],
      "files": {
        "config": "/files/docuseal/template.toml",
        "compose": "/files/docuseal/docker-compose.yml"
      },
      "slug": "docuseal"
    },
    {
      "name": "Dolibarr",
      "shortDescription": "Integrated ERP and CRM suite covering contacts, invoices, orders, stock, HR, and project management for small businesses.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "Dolibarr",
        "url": "https://github.com/Dolibarr"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/Dolibarr/dolibarr",
        "website": "https://www.dolibarr.org/",
        "docs": "https://wiki.dolibarr.org/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Integrated ERP and CRM suite covering contacts, invoices, orders, stock, HR, and project management for small businesses.",
      "logo": "/images/dolibarr/logo.webp",
      "images": [],
      "files": {
        "config": "/files/dolibarr/template.toml",
        "compose": "/files/dolibarr/docker-compose.yml"
      },
      "slug": "dolibarr"
    },
    {
      "name": "Domain Locker",
      "shortDescription": "Domain portfolio tracker that monitors expiration dates and sends renewal reminders before names lapse.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "Lissy93",
        "url": "https://github.com/Lissy93"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/Lissy93/domain-locker",
        "website": "https://domain-locker.com/",
        "docs": "https://github.com/Lissy93/domain-locker#readme"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Domain portfolio tracker that monitors expiration dates and sends renewal reminders before names lapse.",
      "logo": "/images/domain-locker/logo.webp",
      "images": [],
      "files": {
        "config": "/files/domain-locker/template.toml",
        "compose": "/files/domain-locker/docker-compose.yml"
      },
      "slug": "domain-locker"
    },
    {
      "name": "Double Zero",
      "shortDescription": "Dashboard for sending and monitoring transactional email through Amazon SES, with delivery tracking built in.",
      "category": {
        "name": "Email",
        "icon": "mail",
        "description": "Mail servers, transactional senders, newsletters and the inboxes to read them in.",
        "slug": "email"
      },
      "developedBy": {
        "label": "technomancy-dev",
        "url": "https://github.com/technomancy-dev"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/technomancy-dev/00",
        "website": "https://www.double-zero.cloud/",
        "docs": "https://github.com/technomancy-dev/00"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Dashboard for sending and monitoring transactional email through Amazon SES, with delivery tracking built in.",
      "logo": "/images/double-zero/logo.webp",
      "images": [],
      "files": {
        "config": "/files/double-zero/template.toml",
        "compose": "/files/double-zero/docker-compose.yml"
      },
      "slug": "double-zero"
    },
    {
      "name": "Dozzle",
      "shortDescription": "Real-time log viewer for Docker containers, streaming output live in the browser with no setup or storage.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "amir20",
        "url": "https://github.com/amir20"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/amir20/dozzle",
        "website": "https://dozzle.dev",
        "docs": "https://dozzle.dev/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Real-time log viewer for Docker containers, streaming output live in the browser with no setup or storage.",
      "logo": "/images/dozzle/logo.webp",
      "images": [],
      "files": {
        "config": "/files/dozzle/template.toml",
        "compose": "/files/dozzle/docker-compose.yml"
      },
      "slug": "dozzle"
    },
    {
      "name": "Dragonfly",
      "shortDescription": "Drop-in Redis and Memcached replacement built for high throughput on modern multi-core hardware.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "dragonflydb",
        "url": "https://github.com/dragonflydb"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/dragonflydb/dragonfly",
        "website": "https://www.dragonflydb.io/",
        "docs": "https://www.dragonflydb.io/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Drop-in Redis and Memcached replacement built for high throughput on modern multi-core hardware.",
      "logo": "/images/dragonfly/logo.webp",
      "images": [],
      "files": {
        "config": "/files/dragonfly/template.toml",
        "compose": "/files/dragonfly/docker-compose.yml"
      },
      "slug": "dragonfly"
    },
    {
      "name": "draw.io",
      "shortDescription": "Diagramming and whiteboarding tool for creating flowcharts, network diagrams, and wireframes in the browser.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "jgraph",
        "url": "https://github.com/jgraph"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/jgraph/drawio",
        "website": "https://draw.io/",
        "docs": "https://www.drawio.com/doc/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Diagramming and whiteboarding tool for creating flowcharts, network diagrams, and wireframes in the browser.",
      "logo": "/images/draw-io/logo.webp",
      "images": [],
      "files": {
        "config": "/files/draw-io/template.toml",
        "compose": "/files/draw-io/docker-compose.yml"
      },
      "slug": "draw-io"
    },
    {
      "name": "Drawnix",
      "shortDescription": "Whiteboard app for sketching diagrams and visual content, combining freeform drawing with mind-mapping.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "pubuzhixing",
        "url": "https://github.com/pubuzhixing"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/pubuzhixing/drawnix",
        "website": "https://hub.docker.com/r/pubuzhixing/drawnix",
        "docs": "https://hub.docker.com/r/pubuzhixing/drawnix"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Whiteboard app for sketching diagrams and visual content, combining freeform drawing with mind-mapping.",
      "logo": "/images/drawnix/logo.webp",
      "images": [],
      "files": {
        "config": "/files/drawnix/template.toml",
        "compose": "/files/drawnix/docker-compose.yml"
      },
      "slug": "drawnix"
    },
    {
      "name": "drizzle gateway",
      "shortDescription": "Database gateway that exposes a browsable web interface for connecting to and querying your databases remotely.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "drizzle-team",
        "url": "https://github.com/drizzle-team"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/drizzle-team/drizzle-gateway",
        "website": "https://drizzle-team.github.io/",
        "docs": "https://drizzle-team.github.io/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Database gateway that exposes a browsable web interface for connecting to and querying your databases remotely.",
      "logo": "/images/drizzle-gateway/logo.webp",
      "images": [],
      "files": {
        "config": "/files/drizzle-gateway/template.toml",
        "compose": "/files/drizzle-gateway/docker-compose.yml"
      },
      "slug": "drizzle-gateway"
    },
    {
      "name": "DumbAssets",
      "shortDescription": "Minimal asset tracker for logging your belongings and equipment, with no database or login to set up.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "dumbwareio",
        "url": "https://github.com/dumbwareio"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/dumbwareio/dumbassets",
        "website": "https://www.dumbware.io/software/DumbAssets/",
        "docs": "https://github.com/dumbwareio/dumbassets"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Minimal asset tracker for logging your belongings and equipment, with no database or login to set up.",
      "logo": "/images/dumbassets/logo.webp",
      "images": [],
      "files": {
        "config": "/files/dumbassets/template.toml",
        "compose": "/files/dumbassets/docker-compose.yml"
      },
      "slug": "dumbassets"
    },
    {
      "name": "DumbBudget",
      "shortDescription": "Bare-bones personal budget tracker with PIN protection and no database required to get started.",
      "category": {
        "name": "Finance",
        "icon": "wallet",
        "description": "Accounting, invoicing, budgeting, payments and the ledgers a business runs on.",
        "slug": "finance"
      },
      "developedBy": {
        "label": "dumbwareio",
        "url": "https://github.com/dumbwareio"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/dumbwareio/dumbbudget",
        "website": "https://www.dumbware.io/software/DumbBudget/",
        "docs": "https://github.com/dumbwareio/dumbbudget"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Bare-bones personal budget tracker with PIN protection and no database required to get started.",
      "logo": "/images/dumbbudget/logo.webp",
      "images": [],
      "files": {
        "config": "/files/dumbbudget/template.toml",
        "compose": "/files/dumbbudget/docker-compose.yml"
      },
      "slug": "dumbbudget"
    },
    {
      "name": "DumbDrop",
      "shortDescription": "Stripped-down file-sharing service for quick uploads, requiring no database or account.",
      "category": {
        "name": "Storage",
        "icon": "hard-drive",
        "description": "Object storage, file sync, backups and the shares and drives behind them.",
        "slug": "storage"
      },
      "developedBy": {
        "label": "dumbwareio",
        "url": "https://github.com/dumbwareio"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/dumbwareio/dumbdrop",
        "website": "https://www.dumbware.io/software/DumbDrop/",
        "docs": "https://github.com/dumbwareio/dumbdrop"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Stripped-down file-sharing service for quick uploads, requiring no database or account.",
      "logo": "/images/dumbdrop/logo.webp",
      "images": [],
      "files": {
        "config": "/files/dumbdrop/template.toml",
        "compose": "/files/dumbdrop/docker-compose.yml"
      },
      "slug": "dumbdrop"
    },
    {
      "name": "DumbPad",
      "shortDescription": "Minimal notepad app for jotting quick notes, secured with a PIN and needing no database.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "dumbwareio",
        "url": "https://github.com/dumbwareio"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/dumbwareio/dumbpad",
        "website": "https://www.dumbware.io/software/DumbPad/",
        "docs": "https://github.com/dumbwareio/dumbpad"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Minimal notepad app for jotting quick notes, secured with a PIN and needing no database.",
      "logo": "/images/dumbpad/logo.webp",
      "images": [],
      "files": {
        "config": "/files/dumbpad/template.toml",
        "compose": "/files/dumbpad/docker-compose.yml"
      },
      "slug": "dumbpad"
    },
    {
      "name": "Easy!Appointments",
      "shortDescription": "Web-based appointment scheduler that lets customers self-book time slots through a customizable booking page.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "alextselegidis",
        "url": "https://github.com/alextselegidis"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/alextselegidis/easyappointments",
        "website": "https://easyappointments.org",
        "docs": "https://easyappointments.org/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Web-based appointment scheduler that lets customers self-book time slots through a customizable booking page.",
      "logo": "/images/easy-appointments/logo.webp",
      "images": [],
      "files": {
        "config": "/files/easy-appointments/template.toml",
        "compose": "/files/easy-appointments/docker-compose.yml"
      },
      "slug": "easy-appointments"
    },
    {
      "name": "Elasticsearch",
      "shortDescription": "Distributed search and analytics engine for full-text search, log analysis, and querying large structured datasets.",
      "category": {
        "name": "Analytics",
        "icon": "chart-line",
        "description": "Product, web and business analytics, from privacy-first page counters to full dashboards.",
        "slug": "analytics"
      },
      "developedBy": {
        "label": "elastic",
        "url": "https://github.com/elastic"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/elastic/elasticsearch",
        "website": "https://www.elastic.co/elasticsearch/",
        "docs": "https://docs.elastic.co/elasticsearch/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Distributed search and analytics engine for full-text search, log analysis, and querying large structured datasets.",
      "logo": "/images/elasticsearch/logo.webp",
      "images": [],
      "files": {
        "config": "/files/elasticsearch/template.toml",
        "compose": "/files/elasticsearch/docker-compose.yml"
      },
      "slug": "elasticsearch"
    },
    {
      "name": "Emby",
      "shortDescription": "Personal media server that streams your movies, TV, and music to apps on phones, TVs, and browsers.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "MediaBrowser",
        "url": "https://github.com/MediaBrowser"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/MediaBrowser/Emby",
        "website": "https://emby.media/",
        "docs": "https://emby.media/support/articles/Home.html"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Personal media server that streams your movies, TV, and music to apps on phones, TVs, and browsers.",
      "logo": "/images/emby/logo.webp",
      "images": [],
      "files": {
        "config": "/files/emby/template.toml",
        "compose": "/files/emby/docker-compose.yml"
      },
      "slug": "emby"
    },
    {
      "name": "EMQX",
      "shortDescription": "Scalable MQTT broker for IoT, connected vehicles, and real-time messaging across millions of devices.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "emqx",
        "url": "https://github.com/emqx"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/emqx/emqx",
        "website": "https://www.emqx.com",
        "docs": "https://docs.emqx.com"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Scalable MQTT broker for IoT, connected vehicles, and real-time messaging across millions of devices.",
      "logo": "/images/emqx/logo.webp",
      "images": [],
      "files": {
        "config": "/files/emqx/template.toml",
        "compose": "/files/emqx/docker-compose.yml"
      },
      "slug": "emqx"
    },
    {
      "name": "Enshrouded",
      "shortDescription": "Dedicated server for hosting your own Enshrouded survival co-op game world for friends to join.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "mornedhels",
        "url": "https://github.com/mornedhels"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/mornedhels/enshrouded-server"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Dedicated server for hosting your own Enshrouded survival co-op game world for friends to join.",
      "logo": "/images/enshrouded/logo.webp",
      "images": [],
      "files": {
        "config": "/files/enshrouded/template.toml",
        "compose": "/files/enshrouded/docker-compose.yml"
      },
      "slug": "enshrouded"
    },
    {
      "name": "ERPNext",
      "shortDescription": "Open-source ERP suite covering accounting, manufacturing, inventory, sales, HR, and point of sale in one system.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "frappe",
        "url": "https://github.com/frappe"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/frappe/erpnext",
        "website": "https://erpnext.com",
        "docs": "https://docs.frappe.io/erpnext"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source ERP suite covering accounting, manufacturing, inventory, sales, HR, and point of sale in one system.",
      "logo": "/images/erpnext/logo.webp",
      "images": [],
      "files": {
        "config": "/files/erpnext/template.toml",
        "compose": "/files/erpnext/docker-compose.yml"
      },
      "slug": "erpnext"
    },
    {
      "name": "Etherpad",
      "shortDescription": "Real-time collaborative document editor where multiple people can write and edit the same text at once.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "ether",
        "url": "https://github.com/ether"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/ether/etherpad-lite",
        "website": "https://etherpad.org/",
        "docs": "https://github.com/ether/etherpad-lite/wiki"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Real-time collaborative document editor where multiple people can write and edit the same text at once.",
      "logo": "/images/etherpad/logo.webp",
      "images": [],
      "files": {
        "config": "/files/etherpad/template.toml",
        "compose": "/files/etherpad/docker-compose.yml"
      },
      "slug": "etherpad"
    },
    {
      "name": "Evershop",
      "shortDescription": "Open-source ecommerce platform for building and running online stores, from catalog to checkout.",
      "category": {
        "name": "CMS",
        "icon": "layout-template",
        "description": "Blogs, sites, headless content APIs and the storefronts built on top of them.",
        "slug": "cms"
      },
      "developedBy": {
        "label": "evershopcommerce",
        "url": "https://github.com/evershopcommerce"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/evershopcommerce/evershop",
        "website": "https://evershop.io/",
        "docs": "https://evershop.io/docs/development/getting-started/introduction"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source ecommerce platform for building and running online stores, from catalog to checkout.",
      "logo": "/images/evershop/logo.webp",
      "images": [],
      "files": {
        "config": "/files/evershop/template.toml",
        "compose": "/files/evershop/docker-compose.yml"
      },
      "slug": "evershop"
    },
    {
      "name": "Evolution API",
      "shortDescription": "WhatsApp messaging API for small businesses to automate conversations and integrate chat into their apps.",
      "category": {
        "name": "Communication",
        "icon": "message-circle",
        "description": "Chat, calls, forums and the bots and bridges that connect a team or a community.",
        "slug": "communication"
      },
      "developedBy": {
        "label": "EvolutionAPI",
        "url": "https://github.com/EvolutionAPI"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/EvolutionAPI/evolution-api",
        "website": "https://evolution-api.com/opensource-whatsapp-api/",
        "docs": "https://doc.evolution-api.com/v2/en/get-started/introduction"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "WhatsApp messaging API for small businesses to automate conversations and integrate chat into their apps.",
      "logo": "/images/evolution-api/logo.webp",
      "images": [],
      "files": {
        "config": "/files/evolution-api/template.toml",
        "compose": "/files/evolution-api/docker-compose.yml"
      },
      "slug": "evolution-api"
    },
    {
      "name": "Excalidraw",
      "shortDescription": "Open-source whiteboard for sketching diagrams and wireframes with a hand-drawn look, easy to share with others.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "excalidraw",
        "url": "https://github.com/excalidraw"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/excalidraw/excalidraw",
        "website": "https://excalidraw.com/",
        "docs": "https://docs.excalidraw.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source whiteboard for sketching diagrams and wireframes with a hand-drawn look, easy to share with others.",
      "logo": "/images/excalidraw/logo.webp",
      "images": [],
      "files": {
        "config": "/files/excalidraw/template.toml",
        "compose": "/files/excalidraw/docker-compose.yml"
      },
      "slug": "excalidraw"
    },
    {
      "name": "EZBookkeeping",
      "shortDescription": "Self-hosted bookkeeping app for tracking income, expenses, and accounts with built-in financial reports.",
      "category": {
        "name": "Finance",
        "icon": "wallet",
        "description": "Accounting, invoicing, budgeting, payments and the ledgers a business runs on.",
        "slug": "finance"
      },
      "developedBy": {
        "label": "mayswind",
        "url": "https://github.com/mayswind"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/mayswind/ezbookkeeping",
        "website": "https://github.com/mayswind/ezbookkeeping",
        "docs": "https://github.com/mayswind/ezbookkeeping"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted bookkeeping app for tracking income, expenses, and accounts with built-in financial reports.",
      "logo": "/images/ezbookkeeping/logo.webp",
      "images": [],
      "files": {
        "config": "/files/ezbookkeeping/template.toml",
        "compose": "/files/ezbookkeeping/docker-compose.yml"
      },
      "slug": "ezbookkeeping"
    },
    {
      "name": "File Browser",
      "shortDescription": "Standalone web file manager for uploading, editing, and previewing files, with per-user directories and access.",
      "category": {
        "name": "Storage",
        "icon": "hard-drive",
        "description": "Object storage, file sync, backups and the shares and drives behind them.",
        "slug": "storage"
      },
      "developedBy": {
        "label": "filebrowser",
        "url": "https://github.com/filebrowser"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/filebrowser/filebrowser",
        "website": "https://filebrowser.org/",
        "docs": "https://filebrowser.org/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Standalone web file manager for uploading, editing, and previewing files, with per-user directories and access.",
      "logo": "/images/file-browser/logo.webp",
      "images": [],
      "files": {
        "config": "/files/file-browser/template.toml",
        "compose": "/files/file-browser/docker-compose.yml"
      },
      "slug": "file-browser"
    },
    {
      "name": "Filestash",
      "shortDescription": "Web file manager that connects your storage backends to your identity provider with fine-grained access control.",
      "category": {
        "name": "Storage",
        "icon": "hard-drive",
        "description": "Object storage, file sync, backups and the shares and drives behind them.",
        "slug": "storage"
      },
      "developedBy": {
        "label": "mickael-kerjean",
        "url": "https://github.com/mickael-kerjean"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/mickael-kerjean/filestash",
        "website": "https://www.filestash.app/",
        "docs": "https://www.filestash.app/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Web file manager that connects your storage backends to your identity provider with fine-grained access control.",
      "logo": "/images/filestash/logo.webp",
      "images": [],
      "files": {
        "config": "/files/filestash/template.toml",
        "compose": "/files/filestash/docker-compose.yml"
      },
      "slug": "filestash"
    },
    {
      "name": "Firecrawl",
      "shortDescription": "Crawling API that turns any URL and its subpages into clean markdown or structured data, ideal for LLM pipelines.",
      "category": {
        "name": "AI",
        "icon": "sparkles",
        "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
        "slug": "ai"
      },
      "developedBy": {
        "label": "firecrawl",
        "url": "https://github.com/firecrawl"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/firecrawl/firecrawl",
        "website": "https://firecrawl.dev",
        "docs": "https://github.com/firecrawl/firecrawl"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Crawling API that turns any URL and its subpages into clean markdown or structured data, ideal for LLM pipelines.",
      "logo": "/images/firecrawl/logo.webp",
      "images": [],
      "files": {
        "config": "/files/firecrawl/template.toml",
        "compose": "/files/firecrawl/docker-compose.yml"
      },
      "slug": "firecrawl"
    },
    {
      "name": "FiveM Server",
      "shortDescription": "Dedicated server for hosting modded GTA V multiplayer, with an optional txAdmin web panel for management.",
      "category": {
        "name": "Development",
        "icon": "code",
        "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
        "slug": "development"
      },
      "developedBy": {
        "label": "spritsail",
        "url": "https://github.com/spritsail"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/spritsail/fivem",
        "website": "https://fivem.net/",
        "docs": "https://docs.fivem.net/docs/server-manual/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Dedicated server for hosting modded GTA V multiplayer, with an optional txAdmin web panel for management.",
      "logo": "/images/fivem-server/logo.webp",
      "images": [],
      "files": {
        "config": "/files/fivem-server/template.toml",
        "compose": "/files/fivem-server/docker-compose.yml"
      },
      "slug": "fivem-server"
    },
    {
      "name": "Flagsmith",
      "shortDescription": "Open-source feature flag and remote config service for rolling out and toggling features without redeploying.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "Flagsmith",
        "url": "https://github.com/Flagsmith"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/Flagsmith/flagsmith",
        "website": "https://www.flagsmith.com/",
        "docs": "https://docs.flagsmith.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source feature flag and remote config service for rolling out and toggling features without redeploying.",
      "logo": "/images/flagsmith/logo.webp",
      "images": [],
      "files": {
        "config": "/files/flagsmith/template.toml",
        "compose": "/files/flagsmith/docker-compose.yml"
      },
      "slug": "flagsmith"
    },
    {
      "name": "FlareSolverr",
      "shortDescription": "Proxy server that solves Cloudflare and DDoS-GUARD challenges so scrapers can reach protected pages.",
      "category": {
        "name": "Networking",
        "icon": "network",
        "description": "Proxies, VPNs, DNS, tunnels and the gateways that put your services on the internet.",
        "slug": "networking"
      },
      "developedBy": {
        "label": "FlareSolverr",
        "url": "https://github.com/FlareSolverr"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/FlareSolverr/FlareSolverr",
        "website": "https://github.com/FlareSolverr/FlareSolverr",
        "docs": "https://github.com/FlareSolverr/FlareSolverr"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Proxy server that solves Cloudflare and DDoS-GUARD challenges so scrapers can reach protected pages.",
      "logo": "/images/flaresolverr/logo.webp",
      "images": [],
      "files": {
        "config": "/files/flaresolverr/template.toml",
        "compose": "/files/flaresolverr/docker-compose.yml"
      },
      "slug": "flaresolverr"
    },
    {
      "name": "Flatnotes (TOTP)",
      "shortDescription": "Self-hosted Markdown note app, secured with TOTP two-factor login on top of username and password.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "dullage",
        "url": "https://github.com/dullage"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/dullage/flatnotes",
        "website": "https://flatnotes.io",
        "docs": "https://github.com/dullage/flatnotes"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted Markdown note app, secured with TOTP two-factor login on top of username and password.",
      "logo": "/images/flatnotes-totp/logo.webp",
      "images": [],
      "files": {
        "config": "/files/flatnotes-totp/template.toml",
        "compose": "/files/flatnotes-totp/docker-compose.yml"
      },
      "slug": "flatnotes-totp"
    },
    {
      "name": "Flatnotes",
      "shortDescription": "Self-hosted note-taking app that stores everything as plain-text Markdown files you fully own.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "dullage",
        "url": "https://github.com/dullage"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/dullage/flatnotes",
        "website": "https://flatnotes.io",
        "docs": "https://github.com/dullage/flatnotes"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted note-taking app that stores everything as plain-text Markdown files you fully own.",
      "logo": "/images/flatnotes/logo.webp",
      "images": [],
      "files": {
        "config": "/files/flatnotes/template.toml",
        "compose": "/files/flatnotes/docker-compose.yml"
      },
      "slug": "flatnotes"
    },
    {
      "name": "Flowise",
      "shortDescription": "Open-source visual builder for assembling LLM apps and AI agent workflows through a drag-and-drop interface.",
      "category": {
        "name": "AI",
        "icon": "sparkles",
        "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
        "slug": "ai"
      },
      "developedBy": {
        "label": "FlowiseAI",
        "url": "https://github.com/FlowiseAI"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/FlowiseAI/Flowise",
        "website": "https://flowiseai.com/",
        "docs": "https://docs.flowiseai.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source visual builder for assembling LLM apps and AI agent workflows through a drag-and-drop interface.",
      "logo": "/images/flowise/logo.webp",
      "images": [],
      "files": {
        "config": "/files/flowise/template.toml",
        "compose": "/files/flowise/docker-compose.yml"
      },
      "slug": "flowise"
    },
    {
      "name": "FMD Server",
      "shortDescription": "Backend for the Find My Device Android app, letting you locate, lock, and control your phones remotely.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "fmd-foss",
        "url": "https://github.com/fmd-foss"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://gitlab.com/fmd-foss/fmd-server",
        "website": "https://fmd-foss.org",
        "docs": "https://fmd-foss.org/docs/fmd-server/overview"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Backend for the Find My Device Android app, letting you locate, lock, and control your phones remotely.",
      "logo": "/images/fmd-server/logo.webp",
      "images": [],
      "files": {
        "config": "/files/fmd-server/template.toml",
        "compose": "/files/fmd-server/docker-compose.yml"
      },
      "slug": "fmd-server"
    },
    {
      "name": "Focalboard",
      "shortDescription": "Open-source Kanban and project management board for technical teams, an alternative to Trello and Asana.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "sysblok",
        "url": "https://github.com/sysblok"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/sysblok/focalboard",
        "website": "https://focalboard.com",
        "docs": "https://www.focalboard.com/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source Kanban and project management board for technical teams, an alternative to Trello and Asana.",
      "logo": "/images/focalboard/logo.webp",
      "images": [],
      "files": {
        "config": "/files/focalboard/template.toml",
        "compose": "/files/focalboard/docker-compose.yml"
      },
      "slug": "focalboard"
    },
    {
      "name": "Fonoster",
      "shortDescription": "Open-source telephony stack for building voice apps with SIP, WebRTC, and PSTN, an alternative to Twilio.",
      "category": {
        "name": "Communication",
        "icon": "message-circle",
        "description": "Chat, calls, forums and the bots and bridges that connect a team or a community.",
        "slug": "communication"
      },
      "developedBy": {
        "label": "fonoster",
        "url": "https://github.com/fonoster"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/fonoster/fonoster",
        "website": "https://fonoster.com/",
        "docs": "https://docs.fonoster.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source telephony stack for building voice apps with SIP, WebRTC, and PSTN, an alternative to Twilio.",
      "logo": "/images/fonoster/logo.webp",
      "images": [],
      "files": {
        "config": "/files/fonoster/template.toml",
        "compose": "/files/fonoster/docker-compose.yml"
      },
      "slug": "fonoster"
    },
    {
      "name": "Forgejo",
      "shortDescription": "Lightweight self-hosted Git forge for hosting repositories, issues, and pull requests with low maintenance.",
      "category": {
        "name": "Storage",
        "icon": "hard-drive",
        "description": "Object storage, file sync, backups and the shares and drives behind them.",
        "slug": "storage"
      },
      "developedBy": {
        "label": "forgejo",
        "url": "https://github.com/forgejo"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://codeberg.org/forgejo/forgejo",
        "website": "https://forgejo.org/",
        "docs": "https://forgejo.org/docs/latest/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Lightweight self-hosted Git forge for hosting repositories, issues, and pull requests with low maintenance.",
      "logo": "/images/forgejo/logo.webp",
      "images": [],
      "files": {
        "config": "/files/forgejo/template.toml",
        "compose": "/files/forgejo/docker-compose.yml"
      },
      "slug": "forgejo"
    },
    {
      "name": "Formbricks",
      "shortDescription": "Open-source survey and form platform for collecting user feedback and turning it into actionable insights.",
      "category": {
        "name": "Analytics",
        "icon": "chart-line",
        "description": "Product, web and business analytics, from privacy-first page counters to full dashboards.",
        "slug": "analytics"
      },
      "developedBy": {
        "label": "formbricks",
        "url": "https://github.com/formbricks"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/formbricks/formbricks",
        "website": "https://formbricks.com/",
        "docs": "https://formbricks.com/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source survey and form platform for collecting user feedback and turning it into actionable insights.",
      "logo": "/images/formbricks/logo.webp",
      "images": [],
      "files": {
        "config": "/files/formbricks/template.toml",
        "compose": "/files/formbricks/docker-compose.yml"
      },
      "slug": "formbricks"
    },
    {
      "name": "Frappe HR",
      "shortDescription": "Open-source HR and payroll system handling attendance, leave, expenses, and performance for your team.",
      "category": {
        "name": "Finance",
        "icon": "wallet",
        "description": "Accounting, invoicing, budgeting, payments and the ledgers a business runs on.",
        "slug": "finance"
      },
      "developedBy": {
        "label": "frappe",
        "url": "https://github.com/frappe"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/frappe/hrms",
        "website": "https://frappe.io/hr",
        "docs": "https://docs.frappe.io/hr"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source HR and payroll system handling attendance, leave, expenses, and performance for your team.",
      "logo": "/images/frappe-hr/logo.webp",
      "images": [],
      "files": {
        "config": "/files/frappe-hr/template.toml",
        "compose": "/files/frappe-hr/docker-compose.yml"
      },
      "slug": "frappe-hr"
    },
    {
      "name": "Frappe Lending",
      "shortDescription": "Open-source loan management system on the Frappe Framework for handling loans, repayments, and lending operations.",
      "category": {
        "name": "Finance",
        "icon": "wallet",
        "description": "Accounting, invoicing, budgeting, payments and the ledgers a business runs on.",
        "slug": "finance"
      },
      "developedBy": {
        "label": "frappe",
        "url": "https://github.com/frappe"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/frappe/lending",
        "website": "https://frappe.io",
        "docs": "https://docs.frappe.io/lending"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source loan management system on the Frappe Framework for handling loans, repayments, and lending operations.",
      "logo": "/images/frappe-lending/logo.webp",
      "images": [],
      "files": {
        "config": "/files/frappe-lending/template.toml",
        "compose": "/files/frappe-lending/docker-compose.yml"
      },
      "slug": "frappe-lending"
    },
    {
      "name": "FreeScout",
      "shortDescription": "Self-hosted help desk and shared inbox for managing customer support email, an alternative to Help Scout and Zendesk.",
      "category": {
        "name": "Email",
        "icon": "mail",
        "description": "Mail servers, transactional senders, newsletters and the inboxes to read them in.",
        "slug": "email"
      },
      "developedBy": {
        "label": "freescout-helpdesk",
        "url": "https://github.com/freescout-helpdesk"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/freescout-helpdesk/freescout",
        "website": "https://freescout.net/",
        "docs": "https://github.com/freescout-helpdesk/freescout/wiki/Installation-Guide"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted help desk and shared inbox for managing customer support email, an alternative to Help Scout and Zendesk.",
      "logo": "/images/freescout/logo.webp",
      "images": [],
      "files": {
        "config": "/files/freescout/template.toml",
        "compose": "/files/freescout/docker-compose.yml"
      },
      "slug": "freescout"
    },
    {
      "name": "FreshRSS",
      "shortDescription": "Lightweight self-hosted RSS and Atom aggregator for following news feeds, extensible with themes and plugins.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "FreshRSS",
        "url": "https://github.com/FreshRSS"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/FreshRSS/FreshRSS",
        "website": "https://freshrss.org/",
        "docs": "https://freshrss.github.io/FreshRSS/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Lightweight self-hosted RSS and Atom aggregator for following news feeds, extensible with themes and plugins.",
      "logo": "/images/freshrss/logo.webp",
      "images": [],
      "files": {
        "config": "/files/freshrss/template.toml",
        "compose": "/files/freshrss/docker-compose.yml"
      },
      "slug": "freshrss"
    },
    {
      "name": "Garage S3 with Web UI",
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
        "docs": "https://garagehq.deuxfleurs.fr/documentation/quick-start/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Distributed S3-compatible object storage for self-hosting, bundled with a web UI for managing buckets and access keys.",
      "logo": "/images/garage-s3-with-web-ui/logo.webp",
      "images": [],
      "files": {
        "config": "/files/garage-s3-with-web-ui/template.toml",
        "compose": "/files/garage-s3-with-web-ui/docker-compose.yml"
      },
      "slug": "garage-s3-with-web-ui"
    },
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
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Distributed S3-compatible object storage built for self-hosting across multiple machines without a single point of failure.",
      "logo": "/images/garage-s3/logo.webp",
      "images": [],
      "files": {
        "config": "/files/garage-s3/template.toml",
        "compose": "/files/garage-s3/docker-compose.yml"
      },
      "slug": "garage-s3"
    },
    {
      "name": "Ghost",
      "shortDescription": "Open-source publishing platform for blogs, newsletters, and paid memberships, built on a modern Node.js stack.",
      "category": {
        "name": "CMS",
        "icon": "layout-template",
        "description": "Blogs, sites, headless content APIs and the storefronts built on top of them.",
        "slug": "cms"
      },
      "developedBy": {
        "label": "TryGhost",
        "url": "https://github.com/TryGhost"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/TryGhost/Ghost",
        "website": "https://ghost.org/",
        "docs": "https://ghost.org/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source publishing platform for blogs, newsletters, and paid memberships, built on a modern Node.js stack.",
      "logo": "/images/ghost/logo.webp",
      "images": [],
      "files": {
        "config": "/files/ghost/template.toml",
        "compose": "/files/ghost/docker-compose.yml"
      },
      "slug": "ghost"
    },
    {
      "name": "Gitea Mirror",
      "shortDescription": "Web app that automatically mirrors GitHub repositories and organizations to your self-hosted Gitea instance on a schedule.",
      "category": {
        "name": "Automation",
        "icon": "workflow",
        "description": "Workflow builders, schedulers and low-code tools that wire your services together.",
        "slug": "automation"
      },
      "developedBy": {
        "label": "arunavo4",
        "url": "https://github.com/arunavo4"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/arunavo4/gitea-mirror",
        "website": "https://github.com/arunavo4/gitea-mirror",
        "docs": "https://github.com/arunavo4/gitea-mirror#readme"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Web app that automatically mirrors GitHub repositories and organizations to your self-hosted Gitea instance on a schedule.",
      "logo": "/images/gitea-mirror/logo.webp",
      "images": [],
      "files": {
        "config": "/files/gitea-mirror/template.toml",
        "compose": "/files/gitea-mirror/docker-compose.yml"
      },
      "slug": "gitea-mirror"
    },
    {
      "name": "Gitea (MySQL)",
      "shortDescription": "Lightweight self-hosted Git service with issues, pull requests, and CI, bundled with MySQL 8 for storage.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "go-gitea",
        "url": "https://github.com/go-gitea"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/go-gitea/gitea",
        "website": "https://gitea.io/",
        "docs": "https://docs.gitea.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Lightweight self-hosted Git service with issues, pull requests, and CI, bundled with MySQL 8 for storage.",
      "logo": "/images/gitea-mysql/logo.webp",
      "images": [],
      "files": {
        "config": "/files/gitea-mysql/template.toml",
        "compose": "/files/gitea-mysql/docker-compose.yml"
      },
      "slug": "gitea-mysql"
    },
    {
      "name": "Gitea (PostgreSQL)",
      "shortDescription": "Lightweight self-hosted Git service with issues, pull requests, and CI, bundled with PostgreSQL for storage.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "go-gitea",
        "url": "https://github.com/go-gitea"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/go-gitea/gitea",
        "website": "https://gitea.io/",
        "docs": "https://docs.gitea.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Lightweight self-hosted Git service with issues, pull requests, and CI, bundled with PostgreSQL for storage.",
      "logo": "/images/gitea-postgresql/logo.webp",
      "images": [],
      "files": {
        "config": "/files/gitea-postgresql/template.toml",
        "compose": "/files/gitea-postgresql/docker-compose.yml"
      },
      "slug": "gitea-postgresql"
    },
    {
      "name": "Gitea (SQLite)",
      "shortDescription": "Lightweight self-hosted Git service using SQLite for a simple, single-container setup with no separate database.",
      "category": {
        "name": "Development",
        "icon": "code",
        "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
        "slug": "development"
      },
      "developedBy": {
        "label": "go-gitea",
        "url": "https://github.com/go-gitea"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/go-gitea/gitea",
        "website": "https://gitea.io/",
        "docs": "https://docs.gitea.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Lightweight self-hosted Git service using SQLite for a simple, single-container setup with no separate database.",
      "logo": "/images/gitea-sqlite/logo.webp",
      "images": [],
      "files": {
        "config": "/files/gitea-sqlite/template.toml",
        "compose": "/files/gitea-sqlite/docker-compose.yml"
      },
      "slug": "gitea-sqlite"
    },
    {
      "name": "Gitingest",
      "shortDescription": "Turns any Git repository into a single prompt-friendly text digest for feeding codebases into large language models.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "coderamp-labs",
        "url": "https://github.com/coderamp-labs"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/coderamp-labs/gitingest",
        "website": "https://gitingest.com",
        "docs": "https://github.com/coderamp-labs/gitingest#readme"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Turns any Git repository into a single prompt-friendly text digest for feeding codebases into large language models.",
      "logo": "/images/gitingest/logo.webp",
      "images": [],
      "files": {
        "config": "/files/gitingest/template.toml",
        "compose": "/files/gitingest/docker-compose.yml"
      },
      "slug": "gitingest"
    },
    {
      "name": "GitLab CE",
      "shortDescription": "Open-source DevOps platform for Git hosting, CI/CD pipelines, issue tracking, and project management in one place.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "gitlab-org",
        "url": "https://github.com/gitlab-org"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://gitlab.com/gitlab-org/gitlab-ce",
        "website": "https://gitlab.com/",
        "docs": "https://docs.gitlab.com/ee/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source DevOps platform for Git hosting, CI/CD pipelines, issue tracking, and project management in one place.",
      "logo": "/images/gitlab-ce/logo.webp",
      "images": [],
      "files": {
        "config": "/files/gitlab-ce/template.toml",
        "compose": "/files/gitlab-ce/docker-compose.yml"
      },
      "slug": "gitlab-ce"
    },
    {
      "name": "Glance",
      "shortDescription": "Self-hosted dashboard that gathers RSS feeds, weather, bookmarks, and service status into one fast, minimal page.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "glanceapp",
        "url": "https://github.com/glanceapp"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/glanceapp/glance",
        "website": "https://glance.app/",
        "docs": "https://github.com/glanceapp/glance/blob/main/docs/configuration.md"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted dashboard that gathers RSS feeds, weather, bookmarks, and service status into one fast, minimal page.",
      "logo": "/images/glance/logo.webp",
      "images": [],
      "files": {
        "config": "/files/glance/template.toml",
        "compose": "/files/glance/docker-compose.yml"
      },
      "slug": "glance"
    },
    {
      "name": "Glitchtip",
      "shortDescription": "Open-source error tracking that is Sentry-SDK compatible, helping you catch and triage application exceptions.",
      "category": {
        "name": "Development",
        "icon": "code",
        "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
        "slug": "development"
      },
      "developedBy": {
        "label": "glitchtip",
        "url": "https://github.com/glitchtip"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://gitlab.com/glitchtip/",
        "website": "https://glitchtip.com/",
        "docs": "https://glitchtip.com/documentation"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source error tracking that is Sentry-SDK compatible, helping you catch and triage application exceptions.",
      "logo": "/images/glitchtip/logo.webp",
      "images": [],
      "files": {
        "config": "/files/glitchtip/template.toml",
        "compose": "/files/glitchtip/docker-compose.yml"
      },
      "slug": "glitchtip"
    },
    {
      "name": "GLPI Project",
      "shortDescription": "Open-source IT service management and asset tracking tool with ticketing, inventory, and helpdesk features.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "glpi-project",
        "url": "https://github.com/glpi-project"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/glpi-project/glpi",
        "website": "https://glpi-project.org/",
        "docs": "https://glpi-project.org/documentation/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source IT service management and asset tracking tool with ticketing, inventory, and helpdesk features.",
      "logo": "/images/glpi-project/logo.webp",
      "images": [],
      "files": {
        "config": "/files/glpi-project/template.toml",
        "compose": "/files/glpi-project/docker-compose.yml"
      },
      "slug": "glpi-project"
    },
    {
      "name": "go2rtc",
      "shortDescription": "Camera streaming server that bridges dozens of video formats and protocols, with WebRTC and Home Assistant support.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "AlexxIT",
        "url": "https://github.com/AlexxIT"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/AlexxIT/go2rtc",
        "website": "https://go2rtc.org/",
        "docs": "https://go2rtc.org/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Camera streaming server that bridges dozens of video formats and protocols, with WebRTC and Home Assistant support.",
      "logo": "/images/go2rtc/logo.webp",
      "images": [],
      "files": {
        "config": "/files/go2rtc/template.toml",
        "compose": "/files/go2rtc/docker-compose.yml"
      },
      "slug": "go2rtc"
    },
    {
      "name": "Gotenberg",
      "shortDescription": "Stateless Docker API for converting HTML, Office files, and URLs into PDFs and merging documents.",
      "category": {
        "name": "Development",
        "icon": "code",
        "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
        "slug": "development"
      },
      "developedBy": {
        "label": "gotenberg",
        "url": "https://github.com/gotenberg"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/gotenberg/gotenberg",
        "website": "https://gotenberg.dev",
        "docs": "https://gotenberg.dev/docs/getting-started/introduction"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Stateless Docker API for converting HTML, Office files, and URLs into PDFs and merging documents.",
      "logo": "/images/gotenberg/logo.webp",
      "images": [],
      "files": {
        "config": "/files/gotenberg/template.toml",
        "compose": "/files/gotenberg/docker-compose.yml"
      },
      "slug": "gotenberg"
    },
    {
      "name": "Grafana",
      "shortDescription": "Open-source platform for querying, visualizing, and alerting on metrics and logs through interactive dashboards.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "grafana",
        "url": "https://github.com/grafana"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/grafana/grafana",
        "website": "https://grafana.com/",
        "docs": "https://grafana.com/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source platform for querying, visualizing, and alerting on metrics and logs through interactive dashboards.",
      "logo": "/images/grafana/logo.webp",
      "images": [],
      "files": {
        "config": "/files/grafana/template.toml",
        "compose": "/files/grafana/docker-compose.yml"
      },
      "slug": "grafana"
    },
    {
      "name": "Grimoire",
      "shortDescription": "Self-hosted bookmark manager focused on speed and simplicity for organizing and revisiting your saved links.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "goniszewski",
        "url": "https://github.com/goniszewski"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/goniszewski/grimoire",
        "website": "https://github.com/goniszewski/grimoire",
        "docs": "https://github.com/goniszewski/grimoire"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted bookmark manager focused on speed and simplicity for organizing and revisiting your saved links.",
      "logo": "/images/grimoire/logo.webp",
      "images": [],
      "files": {
        "config": "/files/grimoire/template.toml",
        "compose": "/files/grimoire/docker-compose.yml"
      },
      "slug": "grimoire"
    },
    {
      "name": "Grist",
      "shortDescription": "Open-source alternative to Airtable that blends spreadsheet flexibility with relational database structure and formulas.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "gristlabs",
        "url": "https://github.com/gristlabs"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/gristlabs/grist-core",
        "website": "https://www.getgrist.com/",
        "docs": "https://support.getgrist.com/self-managed/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source alternative to Airtable that blends spreadsheet flexibility with relational database structure and formulas.",
      "logo": "/images/grist/logo.webp",
      "images": [],
      "files": {
        "config": "/files/grist/template.toml",
        "compose": "/files/grist/docker-compose.yml"
      },
      "slug": "grist"
    },
    {
      "name": "Habitica",
      "shortDescription": "Habit and to-do tracker that gamifies your daily goals with rewards, penalties, and a social party system.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "HabitRPG",
        "url": "https://github.com/HabitRPG"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/HabitRPG/habitica",
        "website": "https://habitica.com/",
        "docs": "https://habitica.fandom.com/wiki/Setting_up_Habitica_Locally"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Habit and to-do tracker that gamifies your daily goals with rewards, penalties, and a social party system.",
      "logo": "/images/habitica/logo.webp",
      "images": [],
      "files": {
        "config": "/files/habitica/template.toml",
        "compose": "/files/habitica/docker-compose.yml"
      },
      "slug": "habitica"
    },
    {
      "name": "HeyForm",
      "shortDescription": "Form builder for creating conversational surveys, questionnaires, quizzes, and polls without writing any code.",
      "category": {
        "name": "CMS",
        "icon": "layout-template",
        "description": "Blogs, sites, headless content APIs and the storefronts built on top of them.",
        "slug": "cms"
      },
      "developedBy": {
        "label": "heyform",
        "url": "https://github.com/heyform"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/heyform/heyform",
        "website": "https://heyform.net",
        "docs": "https://docs.heyform.net"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Form builder for creating conversational surveys, questionnaires, quizzes, and polls without writing any code.",
      "logo": "/images/heyform/logo.webp",
      "images": [],
      "files": {
        "config": "/files/heyform/template.toml",
        "compose": "/files/heyform/docker-compose.yml"
      },
      "slug": "heyform"
    },
    {
      "name": "Hi.events",
      "shortDescription": "Self-hosted event management and ticketing platform for creating, promoting, and selling tickets to your events.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "HiEventsDev",
        "url": "https://github.com/HiEventsDev"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/HiEventsDev/hi.events",
        "website": "https://hi.events/",
        "docs": "https://hi.events/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted event management and ticketing platform for creating, promoting, and selling tickets to your events.",
      "logo": "/images/hi-events/logo.webp",
      "images": [],
      "files": {
        "config": "/files/hi-events/template.toml",
        "compose": "/files/hi-events/docker-compose.yml"
      },
      "slug": "hi-events"
    },
    {
      "name": "Hoarder",
      "shortDescription": "Open-source bookmark and read-it-later app that auto-tags saved links, notes, and images using AI.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "hoarder",
        "url": "https://github.com/hoarder"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/hoarder/hoarder",
        "website": "https://hoarder.app/",
        "docs": "https://docs.hoarder.app/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source bookmark and read-it-later app that auto-tags saved links, notes, and images using AI.",
      "logo": "/images/hoarder/logo.webp",
      "images": [],
      "files": {
        "config": "/files/hoarder/template.toml",
        "compose": "/files/hoarder/docker-compose.yml"
      },
      "slug": "hoarder"
    },
    {
      "name": "Homarr",
      "shortDescription": "Sleek dashboard that brings your self-hosted apps and services together, with Docker integration and live widgets.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "homarr-labs",
        "url": "https://github.com/homarr-labs"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/homarr-labs/homarr",
        "website": "https://homarr.dev/",
        "docs": "https://homarr.dev/docs/getting-started/installation/docker"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Sleek dashboard that brings your self-hosted apps and services together, with Docker integration and live widgets.",
      "logo": "/images/homarr/logo.webp",
      "images": [],
      "files": {
        "config": "/files/homarr/template.toml",
        "compose": "/files/homarr/docker-compose.yml"
      },
      "slug": "homarr"
    },
    {
      "name": "Home Assistant",
      "shortDescription": "Open-source home automation hub that controls smart devices locally, putting privacy and offline control first.",
      "category": {
        "name": "Development",
        "icon": "code",
        "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
        "slug": "development"
      },
      "developedBy": {
        "label": "home-assistant",
        "url": "https://github.com/home-assistant"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/home-assistant/core",
        "website": "https://www.home-assistant.io/",
        "docs": "https://www.home-assistant.io/getting-started/onboarding/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source home automation hub that controls smart devices locally, putting privacy and offline control first.",
      "logo": "/images/home-assistant/logo.webp",
      "images": [],
      "files": {
        "config": "/files/home-assistant/template.toml",
        "compose": "/files/home-assistant/docker-compose.yml"
      },
      "slug": "home-assistant"
    },
    {
      "name": "Homebridge",
      "shortDescription": "Bridge that adds Apple HomeKit support to smart home devices that do not natively work with it.",
      "category": {
        "name": "Development",
        "icon": "code",
        "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
        "slug": "development"
      },
      "developedBy": {
        "label": "homebridge",
        "url": "https://github.com/homebridge"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/homebridge/homebridge",
        "website": "https://homebridge.io/",
        "docs": "https://github.com/homebridge/homebridge/wiki"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Bridge that adds Apple HomeKit support to smart home devices that do not natively work with it.",
      "logo": "/images/homebridge/logo.webp",
      "images": [],
      "files": {
        "config": "/files/homebridge/template.toml",
        "compose": "/files/homebridge/docker-compose.yml"
      },
      "slug": "homebridge"
    },
    {
      "name": "Hoppscotch (AIO + Migrations)",
      "shortDescription": "Open-source alternative to Postman for testing REST and GraphQL APIs, bundled all-in-one with automatic migrations.",
      "category": {
        "name": "Development",
        "icon": "code",
        "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
        "slug": "development"
      },
      "developedBy": {
        "label": "hoppscotch",
        "url": "https://github.com/hoppscotch"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/hoppscotch/hoppscotch",
        "website": "https://hoppscotch.io/",
        "docs": "https://docs.hoppscotch.io/documentation/self-host/community-edition/install-and-build"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source alternative to Postman for testing REST and GraphQL APIs, bundled all-in-one with automatic migrations.",
      "logo": "/images/hoppscotch-aio-migrations/logo.webp",
      "images": [],
      "files": {
        "config": "/files/hoppscotch-aio-migrations/template.toml",
        "compose": "/files/hoppscotch-aio-migrations/docker-compose.yml"
      },
      "slug": "hoppscotch-aio-migrations"
    },
    {
      "name": "HortusFox",
      "shortDescription": "Open-source app for tracking your plants, complete with photos, watering tasks, and a shared collection library.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "danielbrendel",
        "url": "https://github.com/danielbrendel"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/danielbrendel/hortusfox-web",
        "website": "https://www.hortusfox.com",
        "docs": "https://github.com/danielbrendel/hortusfox-web#readme"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source app for tracking your plants, complete with photos, watering tasks, and a shared collection library.",
      "logo": "/images/hortusfox/logo.webp",
      "images": [],
      "files": {
        "config": "/files/hortusfox/template.toml",
        "compose": "/files/hortusfox/docker-compose.yml"
      },
      "slug": "hortusfox"
    },
    {
      "name": "Huly",
      "shortDescription": "All-in-one project management platform combining issue tracking, docs, and chat as an alternative to Jira and Notion.",
      "category": {
        "name": "Communication",
        "icon": "message-circle",
        "description": "Chat, calls, forums and the bots and bridges that connect a team or a community.",
        "slug": "communication"
      },
      "developedBy": {
        "label": "hcengineering",
        "url": "https://github.com/hcengineering"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/hcengineering/huly-selfhost",
        "website": "https://huly.io/",
        "docs": "https://docs.huly.io/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "All-in-one project management platform combining issue tracking, docs, and chat as an alternative to Jira and Notion.",
      "logo": "/images/huly/logo.webp",
      "images": [],
      "files": {
        "config": "/files/huly/template.toml",
        "compose": "/files/huly/docker-compose.yml"
      },
      "slug": "huly"
    },
    {
      "name": "I Hate Money",
      "shortDescription": "Shared-expense tracker that records who paid for what and settles up who owes whom across a group.",
      "category": {
        "name": "Finance",
        "icon": "wallet",
        "description": "Accounting, invoicing, budgeting, payments and the ledgers a business runs on.",
        "slug": "finance"
      },
      "developedBy": {
        "label": "spiral-project",
        "url": "https://github.com/spiral-project"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/spiral-project/ihatemoney",
        "website": "https://ihatemoney.org/",
        "docs": "https://ihatemoney.readthedocs.io/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Shared-expense tracker that records who paid for what and settles up who owes whom across a group.",
      "logo": "/images/i-hate-money/logo.webp",
      "images": [],
      "files": {
        "config": "/files/i-hate-money/template.toml",
        "compose": "/files/i-hate-money/docker-compose.yml"
      },
      "slug": "i-hate-money"
    },
    {
      "name": "i18n Blog (Kuno)",
      "shortDescription": "Internationalized blogging platform (Kuno) with a Go backend and Next.js frontend for multilingual sites.",
      "category": {
        "name": "CMS",
        "icon": "layout-template",
        "description": "Blogs, sites, headless content APIs and the storefronts built on top of them.",
        "slug": "cms"
      },
      "developedBy": {
        "label": "xuemian168",
        "url": "https://github.com/xuemian168"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/xuemian168/kuno",
        "website": "https://qut.edu.kg/",
        "docs": "https://github.com/xuemian168/kuno#readme"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Internationalized blogging platform (Kuno) with a Go backend and Next.js frontend for multilingual sites.",
      "logo": "/images/i18n-blog-kuno/logo.webp",
      "images": [],
      "files": {
        "config": "/files/i18n-blog-kuno/template.toml",
        "compose": "/files/i18n-blog-kuno/docker-compose.yml"
      },
      "slug": "i18n-blog-kuno"
    },
    {
      "name": "imgproxy",
      "shortDescription": "Fast image processing and resizing server that transforms images on the fly with caching for repeat requests.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "imgproxy",
        "url": "https://github.com/imgproxy"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/imgproxy/imgproxy",
        "website": "https://imgproxy.net/",
        "docs": "https://docs.imgproxy.net/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Fast image processing and resizing server that transforms images on the fly with caching for repeat requests.",
      "logo": "/images/imgproxy/logo.webp",
      "images": [],
      "files": {
        "config": "/files/imgproxy/template.toml",
        "compose": "/files/imgproxy/docker-compose.yml"
      },
      "slug": "imgproxy"
    },
    {
      "name": "Immich",
      "shortDescription": "High-performance photo and video backup for your phone, an open-source alternative to Google Photos.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "immich-app",
        "url": "https://github.com/immich-app"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/immich-app/immich",
        "website": "https://immich.app/",
        "docs": "https://immich.app/docs/overview/introduction"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "High-performance photo and video backup for your phone, an open-source alternative to Google Photos.",
      "logo": "/images/immich/logo.webp",
      "images": [],
      "files": {
        "config": "/files/immich/template.toml",
        "compose": "/files/immich/docker-compose.yml"
      },
      "slug": "immich"
    },
    {
      "name": "Infisical",
      "shortDescription": "Secrets management platform for storing, syncing, and sharing API keys and configuration across your team.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "Infisical",
        "url": "https://github.com/Infisical"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/Infisical/infisical",
        "website": "https://infisical.com/",
        "docs": "https://infisical.com/docs/documentation/getting-started/introduction"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Secrets management platform for storing, syncing, and sharing API keys and configuration across your team.",
      "logo": "/images/infisical/logo.webp",
      "images": [],
      "files": {
        "config": "/files/infisical/template.toml",
        "compose": "/files/infisical/docker-compose.yml"
      },
      "slug": "infisical"
    },
    {
      "name": "InfluxDB",
      "shortDescription": "Time-series database for collecting, storing, and querying metrics, events, and sensor data at scale.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "influxdata",
        "url": "https://github.com/influxdata"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/influxdata/influxdb",
        "website": "https://www.influxdata.com/",
        "docs": "https://docs.influxdata.com/influxdb/v2/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Time-series database for collecting, storing, and querying metrics, events, and sensor data at scale.",
      "logo": "/images/influxdb/logo.webp",
      "images": [],
      "files": {
        "config": "/files/influxdb/template.toml",
        "compose": "/files/influxdb/docker-compose.yml"
      },
      "slug": "influxdb"
    },
    {
      "name": "Inngest",
      "shortDescription": "Event-driven workflow engine for background jobs, with built-in retries, scheduling, and observability.",
      "category": {
        "name": "Automation",
        "icon": "workflow",
        "description": "Workflow builders, schedulers and low-code tools that wire your services together.",
        "slug": "automation"
      },
      "developedBy": {
        "label": "inngest",
        "url": "https://github.com/inngest"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/inngest/inngest",
        "website": "https://www.inngest.com/",
        "docs": "https://www.inngest.com/docs/self-hosting"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Event-driven workflow engine for background jobs, with built-in retries, scheduling, and observability.",
      "logo": "/images/inngest/logo.webp",
      "images": [],
      "files": {
        "config": "/files/inngest/template.toml",
        "compose": "/files/inngest/docker-compose.yml"
      },
      "slug": "inngest"
    },
    {
      "name": "InstantDB",
      "shortDescription": "Real-time database backend that syncs data instantly across clients, an open-source alternative to Firebase.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "instantdb",
        "url": "https://github.com/instantdb"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/instantdb/instant/tree/main/server",
        "website": "https://github.com/instantdb/instant",
        "docs": "https://github.com/instantdb/instant"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Real-time database backend that syncs data instantly across clients, an open-source alternative to Firebase.",
      "logo": "/images/instantdb/logo.webp",
      "images": [],
      "files": {
        "config": "/files/instantdb/template.toml",
        "compose": "/files/instantdb/docker-compose.yml"
      },
      "slug": "instantdb"
    },
    {
      "name": "InvoiceShelf",
      "shortDescription": "Open-source invoicing tool for freelancers and small businesses to create estimates and track payments.",
      "category": {
        "name": "Finance",
        "icon": "wallet",
        "description": "Accounting, invoicing, budgeting, payments and the ledgers a business runs on.",
        "slug": "finance"
      },
      "developedBy": {
        "label": "InvoiceShelf",
        "url": "https://github.com/InvoiceShelf"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/InvoiceShelf/invoiceshelf",
        "website": "https://invoiceshelf.com",
        "docs": "https://github.com/InvoiceShelf/invoiceshelf#readme"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source invoicing tool for freelancers and small businesses to create estimates and track payments.",
      "logo": "/images/invoiceshelf/logo.webp",
      "images": [],
      "files": {
        "config": "/files/invoiceshelf/template.toml",
        "compose": "/files/invoiceshelf/docker-compose.yml"
      },
      "slug": "invoiceshelf"
    },
    {
      "name": "IPFS (Kubo)",
      "shortDescription": "Run your own node on the IPFS decentralized network to store and serve files over a peer-to-peer gateway.",
      "category": {
        "name": "Storage",
        "icon": "hard-drive",
        "description": "Object storage, file sync, backups and the shares and drives behind them.",
        "slug": "storage"
      },
      "developedBy": {
        "label": "ipfs",
        "url": "https://github.com/ipfs"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/ipfs/kubo",
        "website": "https://ipfs.tech/",
        "docs": "https://docs.ipfs.tech/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Run your own node on the IPFS decentralized network to store and serve files over a peer-to-peer gateway.",
      "logo": "/images/ipfs-kubo/logo.webp",
      "images": [],
      "files": {
        "config": "/files/ipfs-kubo/template.toml",
        "compose": "/files/ipfs-kubo/docker-compose.yml"
      },
      "slug": "ipfs-kubo"
    },
    {
      "name": "IT Tools",
      "shortDescription": "Collection of handy developer utilities like encoders, converters, and generators in one web interface.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "CorentinTh",
        "url": "https://github.com/CorentinTh"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/CorentinTh/it-tools",
        "website": "https://it-tools.tech",
        "docs": "https://it-tools.tech/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Collection of handy developer utilities like encoders, converters, and generators in one web interface.",
      "logo": "/images/it-tools/logo.webp",
      "images": [],
      "files": {
        "config": "/files/it-tools/template.toml",
        "compose": "/files/it-tools/docker-compose.yml"
      },
      "slug": "it-tools"
    },
    {
      "name": "Java Runtime (Multi-Version)",
      "shortDescription": "Configurable Java runtime supporting versions 8 through 21, suited for Minecraft servers and Spring Boot apps.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "pterodactyl",
        "url": "https://github.com/pterodactyl"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/pterodactyl/yolks",
        "website": "https://java.com/",
        "docs": "https://docs.oracle.com/en/java/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Configurable Java runtime supporting versions 8 through 21, suited for Minecraft servers and Spring Boot apps.",
      "logo": "/images/java-runtime-multi-version/logo.webp",
      "images": [],
      "files": {
        "config": "/files/java-runtime-multi-version/template.toml",
        "compose": "/files/java-runtime-multi-version/docker-compose.yml"
      },
      "slug": "java-runtime-multi-version"
    },
    {
      "name": "jellyfin",
      "shortDescription": "Media server for streaming your own movies, TV, and music to any device, a free alternative to Plex.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "jellyfin",
        "url": "https://github.com/jellyfin"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/jellyfin/jellyfin",
        "website": "https://jellyfin.org/",
        "docs": "https://jellyfin.org/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Media server for streaming your own movies, TV, and music to any device, a free alternative to Plex.",
      "logo": "/images/jellyfin/logo.webp",
      "images": [],
      "files": {
        "config": "/files/jellyfin/template.toml",
        "compose": "/files/jellyfin/docker-compose.yml"
      },
      "slug": "jellyfin"
    },
    {
      "name": "jenkins",
      "shortDescription": "Automation server for CI/CD that builds, tests, and deploys software through configurable pipelines.",
      "category": {
        "name": "Automation",
        "icon": "workflow",
        "description": "Workflow builders, schedulers and low-code tools that wire your services together.",
        "slug": "automation"
      },
      "developedBy": {
        "label": "jenkinsci",
        "url": "https://github.com/jenkinsci"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/jenkinsci/jenkins",
        "website": "https://www.jenkins.io/",
        "docs": "https://www.jenkins.io/doc/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Automation server for CI/CD that builds, tests, and deploys software through configurable pipelines.",
      "logo": "/images/jenkins/logo.webp",
      "images": [],
      "files": {
        "config": "/files/jenkins/template.toml",
        "compose": "/files/jenkins/docker-compose.yml"
      },
      "slug": "jenkins"
    },
    {
      "name": "Kaneo",
      "shortDescription": "Open-source project management tool focused on simple, efficient task tracking for self-hosted teams.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "usekaneo",
        "url": "https://github.com/usekaneo"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/usekaneo/kaneo",
        "website": "https://kaneo.app/",
        "docs": "https://kaneo.app/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source project management tool focused on simple, efficient task tracking for self-hosted teams.",
      "logo": "/images/kaneo/logo.webp",
      "images": [],
      "files": {
        "config": "/files/kaneo/template.toml",
        "compose": "/files/kaneo/docker-compose.yml"
      },
      "slug": "kaneo"
    },
    {
      "name": "KaraKeep",
      "shortDescription": "Bookmark-everything app for links, notes, and images with AI tagging and full-text search, formerly Hoarder.",
      "category": {
        "name": "AI",
        "icon": "sparkles",
        "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
        "slug": "ai"
      },
      "developedBy": {
        "label": "karakeep-app",
        "url": "https://github.com/karakeep-app"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/karakeep-app/karakeep",
        "website": "https://karakeep.app/",
        "docs": "https://github.com/karakeep-app/karakeep/tree/main/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Bookmark-everything app for links, notes, and images with AI tagging and full-text search, formerly Hoarder.",
      "logo": "/images/karakeep/logo.webp",
      "images": [],
      "files": {
        "config": "/files/karakeep/template.toml",
        "compose": "/files/karakeep/docker-compose.yml"
      },
      "slug": "karakeep"
    },
    {
      "name": "Kener",
      "shortDescription": "Open-source status page for monitoring service uptime and sending incident notifications to your users.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "rajnandan1",
        "url": "https://github.com/rajnandan1"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/rajnandan1/kener",
        "website": "https://kener.ing/",
        "docs": "https://kener.ing/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source status page for monitoring service uptime and sending incident notifications to your users.",
      "logo": "/images/kener/logo.webp",
      "images": [],
      "files": {
        "config": "/files/kener/template.toml",
        "compose": "/files/kener/docker-compose.yml"
      },
      "slug": "kener"
    },
    {
      "name": "Kestra",
      "shortDescription": "Workflow orchestration platform that lets you define and run data pipelines as code or from the UI.",
      "category": {
        "name": "Automation",
        "icon": "workflow",
        "description": "Workflow builders, schedulers and low-code tools that wire your services together.",
        "slug": "automation"
      },
      "developedBy": {
        "label": "kestra-io",
        "url": "https://github.com/kestra-io"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/kestra-io/kestra",
        "website": "https://kestra.io",
        "docs": "https://kestra.io/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Workflow orchestration platform that lets you define and run data pipelines as code or from the UI.",
      "logo": "/images/kestra/logo.webp",
      "images": [],
      "files": {
        "config": "/files/kestra/template.toml",
        "compose": "/files/kestra/docker-compose.yml"
      },
      "slug": "kestra"
    },
    {
      "name": "Keycloak",
      "shortDescription": "Identity and access management server providing single sign-on, OAuth2, and OpenID Connect for your apps.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "keycloak",
        "url": "https://github.com/keycloak"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/keycloak/keycloak",
        "website": "https://www.keycloak.org/",
        "docs": "https://www.keycloak.org/documentation"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Identity and access management server providing single sign-on, OAuth2, and OpenID Connect for your apps.",
      "logo": "/images/keycloak/logo.webp",
      "images": [],
      "files": {
        "config": "/files/keycloak/template.toml",
        "compose": "/files/keycloak/docker-compose.yml"
      },
      "slug": "keycloak"
    },
    {
      "name": "Kimai",
      "shortDescription": "Multi-user time-tracking app for freelancers and teams to log hours, generate reports, and create invoices.",
      "category": {
        "name": "Finance",
        "icon": "wallet",
        "description": "Accounting, invoicing, budgeting, payments and the ledgers a business runs on.",
        "slug": "finance"
      },
      "developedBy": {
        "label": "kimai",
        "url": "https://github.com/kimai"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/kimai/kimai",
        "website": "https://www.kimai.org",
        "docs": "https://www.kimai.org/documentation"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Multi-user time-tracking app for freelancers and teams to log hours, generate reports, and create invoices.",
      "logo": "/images/kimai/logo.webp",
      "images": [],
      "files": {
        "config": "/files/kimai/template.toml",
        "compose": "/files/kimai/docker-compose.yml"
      },
      "slug": "kimai"
    },
    {
      "name": "KitchenOwl",
      "shortDescription": "Grocery list and recipe manager that helps you plan meals and share shopping lists across your household.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "TomBursch",
        "url": "https://github.com/TomBursch"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/TomBursch/kitchenowl",
        "website": "https://kitchenowl.org/",
        "docs": "https://github.com/TomBursch/kitchenowl/wiki"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Grocery list and recipe manager that helps you plan meals and share shopping lists across your household.",
      "logo": "/images/kitchenowl/logo.webp",
      "images": [],
      "files": {
        "config": "/files/kitchenowl/template.toml",
        "compose": "/files/kitchenowl/docker-compose.yml"
      },
      "slug": "kitchenowl"
    },
    {
      "name": "Kokoro TTS",
      "shortDescription": "FastAPI server for the Kokoro-82M text-to-speech model, with multi-language voices and OpenAI-compatible endpoints.",
      "category": {
        "name": "AI",
        "icon": "sparkles",
        "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
        "slug": "ai"
      },
      "developedBy": {
        "label": "remsky",
        "url": "https://github.com/remsky"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/remsky/Kokoro-FastAPI",
        "website": "https://github.com/remsky/Kokoro-FastAPI",
        "docs": "https://github.com/remsky/Kokoro-FastAPI#readme"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "FastAPI server for the Kokoro-82M text-to-speech model, with multi-language voices and OpenAI-compatible endpoints.",
      "logo": "/images/kokoro-tts/logo.webp",
      "images": [],
      "files": {
        "config": "/files/kokoro-tts/template.toml",
        "compose": "/files/kokoro-tts/docker-compose.yml"
      },
      "slug": "kokoro-tts"
    },
    {
      "name": "Kokoro Web",
      "shortDescription": "Web interface for the Kokoro text-to-speech model, with voice synthesis, model caching, and API access.",
      "category": {
        "name": "AI",
        "icon": "sparkles",
        "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
        "slug": "ai"
      },
      "developedBy": {
        "label": "eduardolat",
        "url": "https://github.com/eduardolat"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/eduardolat/kokoro-web",
        "website": "https://github.com/eduardolat/kokoro-web",
        "docs": "https://github.com/eduardolat/kokoro-web#readme"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Web interface for the Kokoro text-to-speech model, with voice synthesis, model caching, and API access.",
      "logo": "/images/kokoro-web/logo.webp",
      "images": [],
      "files": {
        "config": "/files/kokoro-web/template.toml",
        "compose": "/files/kokoro-web/docker-compose.yml"
      },
      "slug": "kokoro-web"
    },
    {
      "name": "Komari Monitor",
      "shortDescription": "Lightweight server monitoring tool for tracking CPU, memory, and performance metrics across your machines.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "komari-monitor",
        "url": "https://github.com/komari-monitor"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/komari-monitor/komari",
        "website": "https://github.com/komari-monitor/komari",
        "docs": "https://github.com/komari-monitor/komari#readme"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Lightweight server monitoring tool for tracking CPU, memory, and performance metrics across your machines.",
      "logo": "/images/komari-monitor/logo.webp",
      "images": [],
      "files": {
        "config": "/files/komari-monitor/template.toml",
        "compose": "/files/komari-monitor/docker-compose.yml"
      },
      "slug": "komari-monitor"
    },
    {
      "name": "Kutt",
      "shortDescription": "Modern URL shortener with custom domains, link statistics, and user management for self-hosted short links.",
      "category": {
        "name": "Storage",
        "icon": "hard-drive",
        "description": "Object storage, file sync, backups and the shares and drives behind them.",
        "slug": "storage"
      },
      "developedBy": {
        "label": "thedevs-network",
        "url": "https://github.com/thedevs-network"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/thedevs-network/kutt",
        "website": "https://kutt.it",
        "docs": "https://github.com/thedevs-network/kutt#kuttit"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Modern URL shortener with custom domains, link statistics, and user management for self-hosted short links.",
      "logo": "/images/kutt/logo.webp",
      "images": [],
      "files": {
        "config": "/files/kutt/template.toml",
        "compose": "/files/kutt/docker-compose.yml"
      },
      "slug": "kutt"
    },
    {
      "name": "Langflow",
      "shortDescription": "Low-code visual builder for RAG pipelines and multi-agent AI apps, agnostic to any model, API, or database.",
      "category": {
        "name": "AI",
        "icon": "sparkles",
        "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
        "slug": "ai"
      },
      "developedBy": {
        "label": "langflow-ai",
        "url": "https://github.com/langflow-ai"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/langflow-ai/langflow/tree/main",
        "website": "https://www.langflow.org/",
        "docs": "https://docs.langflow.org/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Low-code visual builder for RAG pipelines and multi-agent AI apps, agnostic to any model, API, or database.",
      "logo": "/images/langflow/logo.webp",
      "images": [],
      "files": {
        "config": "/files/langflow/template.toml",
        "compose": "/files/langflow/docker-compose.yml"
      },
      "slug": "langflow"
    },
    {
      "name": "Lavalink",
      "shortDescription": "Standalone audio-streaming node based on Lavaplayer, commonly used to play music in Discord bots.",
      "category": {
        "name": "Communication",
        "icon": "message-circle",
        "description": "Chat, calls, forums and the bots and bridges that connect a team or a community.",
        "slug": "communication"
      },
      "developedBy": {
        "label": "lavalink-devs",
        "url": "https://github.com/lavalink-devs"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/lavalink-devs/Lavalink",
        "website": "https://lavalink.dev/",
        "docs": "https://lavalink.dev/getting-started/index.html"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Standalone audio-streaming node based on Lavaplayer, commonly used to play music in Discord bots.",
      "logo": "/images/lavalink/logo.webp",
      "images": [],
      "files": {
        "config": "/files/lavalink/template.toml",
        "compose": "/files/lavalink/docker-compose.yml"
      },
      "slug": "lavalink"
    },
    {
      "name": "Letterfeed",
      "shortDescription": "Turns email newsletters into RSS feeds so you can read subscriptions in your favorite feed reader.",
      "category": {
        "name": "Email",
        "icon": "mail",
        "description": "Mail servers, transactional senders, newsletters and the inboxes to read them in.",
        "slug": "email"
      },
      "developedBy": {
        "label": "leonmuscoden",
        "url": "https://github.com/leonmuscoden"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/leonmuscoden/letterfeed",
        "website": "https://github.com/leonmuscoden/letterfeed",
        "docs": "https://github.com/leonmuscoden/letterfeed"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Turns email newsletters into RSS feeds so you can read subscriptions in your favorite feed reader.",
      "logo": "/images/letterfeed/logo.webp",
      "images": [],
      "files": {
        "config": "/files/letterfeed/template.toml",
        "compose": "/files/letterfeed/docker-compose.yml"
      },
      "slug": "letterfeed"
    },
    {
      "name": "LibreChat",
      "shortDescription": "Open-source AI chat interface that works with OpenAI, Ollama, Google, and other providers in one place.",
      "category": {
        "name": "AI",
        "icon": "sparkles",
        "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
        "slug": "ai"
      },
      "developedBy": {
        "label": "danny-avila",
        "url": "https://github.com/danny-avila"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/danny-avila/librechat",
        "website": "https://librechat.ai",
        "docs": "https://docs.librechat.ai"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source AI chat interface that works with OpenAI, Ollama, Google, and other providers in one place.",
      "logo": "/images/librechat/logo.webp",
      "images": [],
      "files": {
        "config": "/files/librechat/template.toml",
        "compose": "/files/librechat/docker-compose.yml"
      },
      "slug": "librechat"
    },
    {
      "name": "Libredesk",
      "shortDescription": "Self-hosted customer support help desk shipped as a single binary for managing tickets and conversations.",
      "category": {
        "name": "Storage",
        "icon": "hard-drive",
        "description": "Object storage, file sync, backups and the shares and drives behind them.",
        "slug": "storage"
      },
      "developedBy": {
        "label": "abhinavxd",
        "url": "https://github.com/abhinavxd"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/abhinavxd/libredesk",
        "website": "https://libredesk.io",
        "docs": "https://docs.libredesk.io/introduction"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted customer support help desk shipped as a single binary for managing tickets and conversations.",
      "logo": "/images/libredesk/logo.webp",
      "images": [],
      "files": {
        "config": "/files/libredesk/template.toml",
        "compose": "/files/libredesk/docker-compose.yml"
      },
      "slug": "libredesk"
    },
    {
      "name": "LibreTranslate",
      "shortDescription": "Free machine translation API powered by Argos Translate, running fully self-hosted with no external services.",
      "category": {
        "name": "AI",
        "icon": "sparkles",
        "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
        "slug": "ai"
      },
      "developedBy": {
        "label": "LibreTranslate",
        "url": "https://github.com/LibreTranslate"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/LibreTranslate/LibreTranslate",
        "website": "https://libretranslate.com/",
        "docs": "https://docs.libretranslate.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Free machine translation API powered by Argos Translate, running fully self-hosted with no external services.",
      "logo": "/images/libretranslate/logo.webp",
      "images": [],
      "files": {
        "config": "/files/libretranslate/template.toml",
        "compose": "/files/libretranslate/docker-compose.yml"
      },
      "slug": "libretranslate"
    },
    {
      "name": "Linkding",
      "shortDescription": "Self-hosted bookmark manager with a clean, fast interface for saving and tagging your links.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "sissbruecker",
        "url": "https://github.com/sissbruecker"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/sissbruecker/linkding",
        "website": "https://linkding.link/",
        "docs": "https://github.com/sissbruecker/linkding/tree/master/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted bookmark manager with a clean, fast interface for saving and tagging your links.",
      "logo": "/images/linkding/logo.webp",
      "images": [],
      "files": {
        "config": "/files/linkding/template.toml",
        "compose": "/files/linkding/docker-compose.yml"
      },
      "slug": "linkding"
    },
    {
      "name": "LinkStack",
      "shortDescription": "Open-source link-in-bio tool for sharing all your links on a single customizable landing page.",
      "category": {
        "name": "CMS",
        "icon": "layout-template",
        "description": "Blogs, sites, headless content APIs and the storefronts built on top of them.",
        "slug": "cms"
      },
      "developedBy": {
        "label": "linkstackorg",
        "url": "https://github.com/linkstackorg"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/linkstackorg/linkstack",
        "website": "https://linkstack.org/",
        "docs": "https://docs.linkstack.org/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source link-in-bio tool for sharing all your links on a single customizable landing page.",
      "logo": "/images/linkstack/logo.webp",
      "images": [],
      "files": {
        "config": "/files/linkstack/template.toml",
        "compose": "/files/linkstack/docker-compose.yml"
      },
      "slug": "linkstack"
    },
    {
      "name": "Linkwarden",
      "shortDescription": "Collaborative bookmark manager that collects, organizes, and archives full webpage snapshots for safekeeping.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "linkwarden",
        "url": "https://github.com/linkwarden"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/linkwarden/linkwarden",
        "website": "https://linkwarden.app/",
        "docs": "https://docs.linkwarden.app/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Collaborative bookmark manager that collects, organizes, and archives full webpage snapshots for safekeeping.",
      "logo": "/images/linkwarden/logo.webp",
      "images": [],
      "files": {
        "config": "/files/linkwarden/template.toml",
        "compose": "/files/linkwarden/docker-compose.yml"
      },
      "slug": "linkwarden"
    },
    {
      "name": "Listmonk",
      "shortDescription": "High-performance newsletter and mailing list manager with a modern dashboard for self-hosted email campaigns.",
      "category": {
        "name": "Email",
        "icon": "mail",
        "description": "Mail servers, transactional senders, newsletters and the inboxes to read them in.",
        "slug": "email"
      },
      "developedBy": {
        "label": "knadh",
        "url": "https://github.com/knadh"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/knadh/listmonk",
        "website": "https://listmonk.app/",
        "docs": "https://listmonk.app/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "High-performance newsletter and mailing list manager with a modern dashboard for self-hosted email campaigns.",
      "logo": "/images/listmonk/logo.webp",
      "images": [],
      "files": {
        "config": "/files/listmonk/template.toml",
        "compose": "/files/listmonk/docker-compose.yml"
      },
      "slug": "listmonk"
    },
    {
      "name": "LiteLLM",
      "shortDescription": "OpenAI-compatible proxy that routes requests to 100+ LLM providers through a single unified endpoint.",
      "category": {
        "name": "AI",
        "icon": "sparkles",
        "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
        "slug": "ai"
      },
      "developedBy": {
        "label": "BerriAI",
        "url": "https://github.com/BerriAI"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/BerriAI/litellm",
        "website": "https://docs.litellm.ai",
        "docs": "https://docs.litellm.ai/docs/proxy/quick_start"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "OpenAI-compatible proxy that routes requests to 100+ LLM providers through a single unified endpoint.",
      "logo": "/images/litellm/logo.webp",
      "images": [],
      "files": {
        "config": "/files/litellm/template.toml",
        "compose": "/files/litellm/docker-compose.yml"
      },
      "slug": "litellm"
    },
    {
      "name": "Livekit",
      "shortDescription": "Open-source WebRTC platform for building realtime video, audio, and live streaming into your applications.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "livekit",
        "url": "https://github.com/livekit"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/livekit/livekit",
        "website": "https://livekit.io/",
        "docs": "https://docs.livekit.io/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source WebRTC platform for building realtime video, audio, and live streaming into your applications.",
      "logo": "/images/livekit/logo.webp",
      "images": [],
      "files": {
        "config": "/files/livekit/template.toml",
        "compose": "/files/livekit/docker-compose.yml"
      },
      "slug": "livekit"
    },
    {
      "name": "Lobe Chat",
      "shortDescription": "Modern open-source AI chat framework with a polished interface for conversing across multiple LLM providers.",
      "category": {
        "name": "Communication",
        "icon": "message-circle",
        "description": "Chat, calls, forums and the bots and bridges that connect a team or a community.",
        "slug": "communication"
      },
      "developedBy": {
        "label": "lobehub",
        "url": "https://github.com/lobehub"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/lobehub/lobe-chat",
        "website": "https://chat-preview.lobehub.com/",
        "docs": "https://lobehub.com/docs/self-hosting/platform/docker-compose"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Modern open-source AI chat framework with a polished interface for conversing across multiple LLM providers.",
      "logo": "/images/lobe-chat/logo.webp",
      "images": [],
      "files": {
        "config": "/files/lobe-chat/template.toml",
        "compose": "/files/lobe-chat/docker-compose.yml"
      },
      "slug": "lobe-chat"
    },
    {
      "name": "Lodestone",
      "shortDescription": "Open-source game server hosting tool for running and managing Minecraft and other multiplayer servers.",
      "category": {
        "name": "Development",
        "icon": "code",
        "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
        "slug": "development"
      },
      "developedBy": {
        "label": "Lodestone-Team",
        "url": "https://github.com/Lodestone-Team"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/Lodestone-Team/lodestone",
        "website": "https://lodestone.cc",
        "docs": "https://github.com/Lodestone-Team/lodestone/wiki"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source game server hosting tool for running and managing Minecraft and other multiplayer servers.",
      "logo": "/images/lodestone/logo.webp",
      "images": [],
      "files": {
        "config": "/files/lodestone/template.toml",
        "compose": "/files/lodestone/docker-compose.yml"
      },
      "slug": "lodestone"
    },
    {
      "name": "Logto",
      "shortDescription": "Open-source identity and access management platform for customer (CIAM) and workforce authentication.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "logto-io",
        "url": "https://github.com/logto-io"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/logto-io/logto",
        "website": "https://logto.io/",
        "docs": "https://docs.logto.io/introduction"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source identity and access management platform for customer (CIAM) and workforce authentication.",
      "logo": "/images/logto/logo.webp",
      "images": [],
      "files": {
        "config": "/files/logto/template.toml",
        "compose": "/files/logto/docker-compose.yml"
      },
      "slug": "logto"
    },
    {
      "name": "Lowcoder",
      "shortDescription": "Open-source low-code platform for quickly building internal tools, dashboards, and business apps.",
      "category": {
        "name": "Automation",
        "icon": "workflow",
        "description": "Workflow builders, schedulers and low-code tools that wire your services together.",
        "slug": "automation"
      },
      "developedBy": {
        "label": "lowcoder-org",
        "url": "https://github.com/lowcoder-org"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/lowcoder-org/lowcoder",
        "website": "https://www.lowcoder.cloud/",
        "docs": "https://docs.lowcoder.cloud/lowcoder-documentation"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source low-code platform for quickly building internal tools, dashboards, and business apps.",
      "logo": "/images/lowcoder/logo.webp",
      "images": [],
      "files": {
        "config": "/files/lowcoder/template.toml",
        "compose": "/files/lowcoder/docker-compose.yml"
      },
      "slug": "lowcoder"
    },
    {
      "name": "MacOS (dockerized)",
      "shortDescription": "Run a full macOS environment inside a Docker container, accessible over VNC from your browser.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "dockur",
        "url": "https://github.com/dockur"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/dockur/macos",
        "docs": "https://github.com/dockur/macos?tab=readme-ov-file#how-do-i-use-it"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Run a full macOS environment inside a Docker container, accessible over VNC from your browser.",
      "logo": "/images/macos-dockerized/logo.webp",
      "images": [],
      "files": {
        "config": "/files/macos-dockerized/template.toml",
        "compose": "/files/macos-dockerized/docker-compose.yml"
      },
      "slug": "macos-dockerized"
    },
    {
      "name": "Mage AI",
      "shortDescription": "Data pipeline tool for building, running, and managing ETL workflows that integrate and transform data.",
      "category": {
        "name": "Analytics",
        "icon": "chart-line",
        "description": "Product, web and business analytics, from privacy-first page counters to full dashboards.",
        "slug": "analytics"
      },
      "developedBy": {
        "label": "mage-ai",
        "url": "https://github.com/mage-ai"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/mage-ai/mage-ai",
        "website": "https://mage.ai",
        "docs": "https://docs.mage.ai"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Data pipeline tool for building, running, and managing ETL workflows that integrate and transform data.",
      "logo": "/images/mage-ai/logo.webp",
      "images": [],
      "files": {
        "config": "/files/mage-ai/template.toml",
        "compose": "/files/mage-ai/docker-compose.yml"
      },
      "slug": "mage-ai"
    },
    {
      "name": "Mailpit",
      "shortDescription": "Email and SMTP testing tool that captures messages during development and shows them in a web inbox.",
      "category": {
        "name": "Email",
        "icon": "mail",
        "description": "Mail servers, transactional senders, newsletters and the inboxes to read them in.",
        "slug": "email"
      },
      "developedBy": {
        "label": "axllent",
        "url": "https://github.com/axllent"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/axllent/mailpit",
        "website": "https://mailpit.axllent.org/",
        "docs": "https://mailpit.axllent.org/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Email and SMTP testing tool that captures messages during development and shows them in a web inbox.",
      "logo": "/images/mailpit/logo.webp",
      "images": [],
      "files": {
        "config": "/files/mailpit/template.toml",
        "compose": "/files/mailpit/docker-compose.yml"
      },
      "slug": "mailpit"
    },
    {
      "name": "Mattermost",
      "shortDescription": "Open-source team messaging platform and self-hosted alternative to Slack for chat and collaboration.",
      "category": {
        "name": "Communication",
        "icon": "message-circle",
        "description": "Chat, calls, forums and the bots and bridges that connect a team or a community.",
        "slug": "communication"
      },
      "developedBy": {
        "label": "mattermost",
        "url": "https://github.com/mattermost"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/mattermost/mattermost",
        "website": "https://mattermost.com/",
        "docs": "https://docs.mattermost.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source team messaging platform and self-hosted alternative to Slack for chat and collaboration.",
      "logo": "/images/mattermost/logo.webp",
      "images": [],
      "files": {
        "config": "/files/mattermost/template.toml",
        "compose": "/files/mattermost/docker-compose.yml"
      },
      "slug": "mattermost"
    },
    {
      "name": "Mautic",
      "shortDescription": "Open-source marketing automation platform for email campaigns, landing pages, and contact nurturing.",
      "category": {
        "name": "Email",
        "icon": "mail",
        "description": "Mail servers, transactional senders, newsletters and the inboxes to read them in.",
        "slug": "email"
      },
      "developedBy": {
        "label": "mautic",
        "url": "https://github.com/mautic"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/mautic/mautic",
        "website": "https://www.mautic.org/",
        "docs": "https://docs.mautic.org/en"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source marketing automation platform for email campaigns, landing pages, and contact nurturing.",
      "logo": "/images/mautic/logo.webp",
      "images": [],
      "files": {
        "config": "/files/mautic/template.toml",
        "compose": "/files/mautic/docker-compose.yml"
      },
      "slug": "mautic"
    },
    {
      "name": "Maybe",
      "shortDescription": "Personal finance app for tracking budgets, accounts, and expenses, hosted entirely on your own server.",
      "category": {
        "name": "Finance",
        "icon": "wallet",
        "description": "Accounting, invoicing, budgeting, payments and the ledgers a business runs on.",
        "slug": "finance"
      },
      "developedBy": {
        "label": "maybe-finance",
        "url": "https://github.com/maybe-finance"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/maybe-finance/maybe",
        "website": "https://maybe.finance/",
        "docs": "https://docs.maybe.finance/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Personal finance app for tracking budgets, accounts, and expenses, hosted entirely on your own server.",
      "logo": "/images/maybe/logo.webp",
      "images": [],
      "files": {
        "config": "/files/maybe/template.toml",
        "compose": "/files/maybe/docker-compose.yml"
      },
      "slug": "maybe"
    },
    {
      "name": "MAZANOKE",
      "shortDescription": "Self-hosted image hosting and sharing platform for uploading, organizing, and sharing your photos.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "civilblur",
        "url": "https://github.com/civilblur"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/civilblur/mazanoke",
        "website": "https://github.com/civilblur/mazanoke",
        "docs": "https://github.com/civilblur/mazanoke"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted image hosting and sharing platform for uploading, organizing, and sharing your photos.",
      "logo": "/images/mazanoke/logo.webp",
      "images": [],
      "files": {
        "config": "/files/mazanoke/template.toml",
        "compose": "/files/mazanoke/docker-compose.yml"
      },
      "slug": "mazanoke"
    },
    {
      "name": "MCSManager",
      "shortDescription": "Web dashboard for running and managing Minecraft and other game servers, with a beginner-friendly UI.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "MCSManager",
        "url": "https://github.com/MCSManager"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/MCSManager/MCSManager",
        "website": "https://github.com/MCSManager/MCSManager",
        "docs": "https://github.com/MCSManager/MCSManager#readme"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Web dashboard for running and managing Minecraft and other game servers, with a beginner-friendly UI.",
      "logo": "/images/mcsmanager/logo.webp",
      "images": [],
      "files": {
        "config": "/files/mcsmanager/template.toml",
        "compose": "/files/mcsmanager/docker-compose.yml"
      },
      "slug": "mcsmanager"
    },
    {
      "name": "Mealie (sqlite version)",
      "shortDescription": "Recipe manager and meal planner for organizing your collection, shopping lists, and weekly menus.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "mealie-recipes",
        "url": "https://github.com/mealie-recipes"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/mealie-recipes/mealie",
        "website": "https://mealie.io/",
        "docs": "https://docs.mealie.io/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Recipe manager and meal planner for organizing your collection, shopping lists, and weekly menus.",
      "logo": "/images/mealie-sqlite-version/logo.webp",
      "images": [],
      "files": {
        "config": "/files/mealie-sqlite-version/template.toml",
        "compose": "/files/mealie-sqlite-version/docker-compose.yml"
      },
      "slug": "mealie-sqlite-version"
    },
    {
      "name": "MediaCMS",
      "shortDescription": "Open-source video and media CMS for uploading, organizing, and streaming content from your own server.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "mediacms",
        "url": "https://github.com/mediacms"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/mediacms/mediacms",
        "website": "https://mediacms.io/",
        "docs": "https://docs.mediacms.io/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source video and media CMS for uploading, organizing, and streaming content from your own server.",
      "logo": "/images/mediacms/logo.webp",
      "images": [],
      "files": {
        "config": "/files/mediacms/template.toml",
        "compose": "/files/mediacms/docker-compose.yml"
      },
      "slug": "mediacms"
    },
    {
      "name": "MediaFetch",
      "shortDescription": "Lightweight web wrapper for yt-dlp that downloads video and audio, with optional basic auth.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "lukedunsmoto",
        "url": "https://github.com/lukedunsmoto"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/lukedunsmoto/mediafetch",
        "website": "https://www.lukedunsmore.com/mediafetch",
        "docs": "https://docs.lukedunsmore.com/docs/self-hosted/mediafetch/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Lightweight web wrapper for yt-dlp that downloads video and audio, with optional basic auth.",
      "logo": "/images/mediafetch/logo.webp",
      "images": [],
      "files": {
        "config": "/files/mediafetch/template.toml",
        "compose": "/files/mediafetch/docker-compose.yml"
      },
      "slug": "mediafetch"
    },
    {
      "name": "Meilisearch",
      "shortDescription": "Fast, open-source search engine for adding typo-tolerant instant search to your apps and websites.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "meilisearch",
        "url": "https://github.com/meilisearch"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/meilisearch/meilisearch",
        "website": "https://www.meilisearch.com/",
        "docs": "https://docs.meilisearch.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Fast, open-source search engine for adding typo-tolerant instant search to your apps and websites.",
      "logo": "/images/meilisearch/logo.webp",
      "images": [],
      "files": {
        "config": "/files/meilisearch/template.toml",
        "compose": "/files/meilisearch/docker-compose.yml"
      },
      "slug": "meilisearch"
    },
    {
      "name": "Memos",
      "shortDescription": "Open-source note-taking app for quickly capturing, organizing, and sharing lightweight notes and memos.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "usememos",
        "url": "https://github.com/usememos"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/usememos/memos",
        "website": "https://www.usememos.com/",
        "docs": "https://www.usememos.com/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source note-taking app for quickly capturing, organizing, and sharing lightweight notes and memos.",
      "logo": "/images/memos/logo.webp",
      "images": [],
      "files": {
        "config": "/files/memos/template.toml",
        "compose": "/files/memos/docker-compose.yml"
      },
      "slug": "memos"
    },
    {
      "name": "Metabase",
      "shortDescription": "Open-source business intelligence tool for querying databases and building dashboards without SQL.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "metabase",
        "url": "https://github.com/metabase"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/metabase/metabase",
        "website": "https://www.metabase.com/",
        "docs": "https://www.metabase.com/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source business intelligence tool for querying databases and building dashboards without SQL.",
      "logo": "/images/metabase/logo.webp",
      "images": [],
      "files": {
        "config": "/files/metabase/template.toml",
        "compose": "/files/metabase/docker-compose.yml"
      },
      "slug": "metabase"
    },
    {
      "name": "MeTube",
      "shortDescription": "Web UI for yt-dlp that downloads videos and audio from YouTube and many other sites to your server.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "alexta69",
        "url": "https://github.com/alexta69"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/alexta69/metube",
        "website": "https://github.com/alexta69/metube",
        "docs": "https://github.com/alexta69/metube/wiki"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Web UI for yt-dlp that downloads videos and audio from YouTube and many other sites to your server.",
      "logo": "/images/metube/logo.webp",
      "images": [],
      "files": {
        "config": "/files/metube/template.toml",
        "compose": "/files/metube/docker-compose.yml"
      },
      "slug": "metube"
    },
    {
      "name": "Minepanel",
      "shortDescription": "Web panel for managing Docker-based Minecraft servers: create, configure, and monitor multiple instances.",
      "category": {
        "name": "Development",
        "icon": "code",
        "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
        "slug": "development"
      },
      "developedBy": {
        "label": "Ketbome",
        "url": "https://github.com/Ketbome"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/Ketbome/minepanel",
        "website": "https://minepanel.ketbome.lat",
        "docs": "https://minepanel.ketbome.lat"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Web panel for managing Docker-based Minecraft servers: create, configure, and monitor multiple instances.",
      "logo": "/images/minepanel/logo.webp",
      "images": [],
      "files": {
        "config": "/files/minepanel/template.toml",
        "compose": "/files/minepanel/docker-compose.yml"
      },
      "slug": "minepanel"
    },
    {
      "name": "Minio",
      "shortDescription": "High-performance, S3-compatible object storage server you can run on your own infrastructure.",
      "category": {
        "name": "Storage",
        "icon": "hard-drive",
        "description": "Object storage, file sync, backups and the shares and drives behind them.",
        "slug": "storage"
      },
      "developedBy": {
        "label": "minio",
        "url": "https://github.com/minio"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/minio/minio",
        "website": "https://minio.io/",
        "docs": "https://docs.minio.io/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "High-performance, S3-compatible object storage server you can run on your own infrastructure.",
      "logo": "/images/minio/logo.webp",
      "images": [],
      "files": {
        "config": "/files/minio/template.toml",
        "compose": "/files/minio/docker-compose.yml"
      },
      "slug": "minio"
    },
    {
      "name": "Misaka Danmu Server",
      "shortDescription": "Self-hosted danmaku server that serves scrolling bullet comments for video and streaming platforms.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "l429609201",
        "url": "https://github.com/l429609201"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/l429609201/misaka_danmu_server",
        "website": "https://github.com/l429609201/misaka_danmu_server",
        "docs": "https://github.com/l429609201/misaka_danmu_server#readme"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted danmaku server that serves scrolling bullet comments for video and streaming platforms.",
      "logo": "/images/misaka-danmu-server/logo.webp",
      "images": [],
      "files": {
        "config": "/files/misaka-danmu-server/template.toml",
        "compose": "/files/misaka-danmu-server/docker-compose.yml"
      },
      "slug": "misaka-danmu-server"
    },
    {
      "name": "Mixpost",
      "shortDescription": "Open-source social media scheduler for creating, scheduling, and publishing posts across many platforms.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "inovector",
        "url": "https://github.com/inovector"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/inovector/mixpost",
        "website": "https://mixpost.app/",
        "docs": "https://docs.mixpost.app/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source social media scheduler for creating, scheduling, and publishing posts across many platforms.",
      "logo": "/images/mixpost/logo.webp",
      "images": [],
      "files": {
        "config": "/files/mixpost/template.toml",
        "compose": "/files/mixpost/docker-compose.yml"
      },
      "slug": "mixpost"
    },
    {
      "name": "Moltbot",
      "shortDescription": "Self-hosted WhatsApp gateway with AI-powered messaging, controlled through a command-line interface.",
      "category": {
        "name": "AI",
        "icon": "sparkles",
        "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
        "slug": "ai"
      },
      "developedBy": {
        "label": "moltbot",
        "url": "https://github.com/moltbot"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/moltbot/moltbot",
        "website": "https://molt.bot",
        "docs": "https://docs.molt.bot"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted WhatsApp gateway with AI-powered messaging, controlled through a command-line interface.",
      "logo": "/images/moltbot/logo.webp",
      "images": [],
      "files": {
        "config": "/files/moltbot/template.toml",
        "compose": "/files/moltbot/docker-compose.yml"
      },
      "slug": "moltbot"
    },
    {
      "name": "Morphos",
      "shortDescription": "Lightweight service for distributed operations and orchestration across your infrastructure.",
      "category": {
        "name": "Development",
        "icon": "code",
        "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
        "slug": "development"
      },
      "developedBy": {
        "label": "danvergara",
        "url": "https://github.com/danvergara"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/danvergara/morphos-server",
        "website": "https://github.com/danvergara/morphos-server",
        "docs": "https://github.com/danvergara/morphos-server#readme"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Lightweight service for distributed operations and orchestration across your infrastructure.",
      "logo": "/images/morphos/logo.webp",
      "images": [],
      "files": {
        "config": "/files/morphos/template.toml",
        "compose": "/files/morphos/docker-compose.yml"
      },
      "slug": "morphos"
    },
    {
      "name": "Movary",
      "shortDescription": "Self-hosted movie tracker that logs and rates what you watch, with TMDB data and Plex or Jellyfin sync.",
      "category": {
        "name": "Analytics",
        "icon": "chart-line",
        "description": "Product, web and business analytics, from privacy-first page counters to full dashboards.",
        "slug": "analytics"
      },
      "developedBy": {
        "label": "leepeuker",
        "url": "https://github.com/leepeuker"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/leepeuker/movary",
        "website": "https://movary.org/",
        "docs": "https://docs.movary.org/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted movie tracker that logs and rates what you watch, with TMDB data and Plex or Jellyfin sync.",
      "logo": "/images/movary/logo.webp",
      "images": [],
      "files": {
        "config": "/files/movary/template.toml",
        "compose": "/files/movary/docker-compose.yml"
      },
      "slug": "movary"
    },
    {
      "name": "MuleSoft ESB Runtime Community Edition",
      "shortDescription": "Java-based integration runtime for connecting applications, APIs, and data sources via an enterprise ESB.",
      "category": {
        "name": "Automation",
        "icon": "workflow",
        "description": "Workflow builders, schedulers and low-code tools that wire your services together.",
        "slug": "automation"
      },
      "developedBy": {
        "label": "mulesoft",
        "url": "https://github.com/mulesoft"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/mulesoft",
        "website": "https://www.mulesoft.com/",
        "docs": "https://docs.mulesoft.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Java-based integration runtime for connecting applications, APIs, and data sources via an enterprise ESB.",
      "logo": "/images/mulesoft-esb-runtime-community-edition/logo.webp",
      "images": [],
      "files": {
        "config": "/files/mulesoft-esb-runtime-community-edition/template.toml",
        "compose": "/files/mulesoft-esb-runtime-community-edition/docker-compose.yml"
      },
      "slug": "mulesoft-esb-runtime-community-edition"
    },
    {
      "name": "Mumble",
      "shortDescription": "Low-latency, high-quality voice chat server for gaming and team communication over VoIP.",
      "category": {
        "name": "Communication",
        "icon": "message-circle",
        "description": "Chat, calls, forums and the bots and bridges that connect a team or a community.",
        "slug": "communication"
      },
      "developedBy": {
        "label": "mumble-voip",
        "url": "https://github.com/mumble-voip"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/mumble-voip/mumble",
        "website": "https://www.mumble.info/",
        "docs": "https://wiki.mumble.info/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Low-latency, high-quality voice chat server for gaming and team communication over VoIP.",
      "logo": "/images/mumble/logo.webp",
      "images": [],
      "files": {
        "config": "/files/mumble/template.toml",
        "compose": "/files/mumble/docker-compose.yml"
      },
      "slug": "mumble"
    },
    {
      "name": "n8n with Postgres",
      "shortDescription": "Workflow automation tool n8n paired with a PostgreSQL database for reliable, persistent storage of your automations.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "n8n-io",
        "url": "https://github.com/n8n-io"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/n8n-io/n8n",
        "website": "https://n8n.io/",
        "docs": "https://docs.n8n.io/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Workflow automation tool n8n paired with a PostgreSQL database for reliable, persistent storage of your automations.",
      "logo": "/images/n8n-with-postgres/logo.webp",
      "images": [],
      "files": {
        "config": "/files/n8n-with-postgres/template.toml",
        "compose": "/files/n8n-with-postgres/docker-compose.yml"
      },
      "slug": "n8n-with-postgres"
    },
    {
      "name": "n8n + Worker + Runner with Redis/Postgres and Ollama",
      "shortDescription": "Workflow automation tool n8n bundled with PostgreSQL, a dedicated runner, and Ollama for running local AI models in flows.",
      "category": {
        "name": "AI",
        "icon": "sparkles",
        "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
        "slug": "ai"
      },
      "developedBy": {
        "label": "n8n-io",
        "url": "https://github.com/n8n-io"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/n8n-io/n8n",
        "website": "https://n8n.io/",
        "docs": "https://docs.n8n.io/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Workflow automation tool n8n bundled with PostgreSQL, a dedicated runner, and Ollama for running local AI models in flows.",
      "logo": "/images/n8n-worker-runner-with-redis-postgres-and-ollama/logo.webp",
      "images": [],
      "files": {
        "config": "/files/n8n-worker-runner-with-redis-postgres-and-ollama/template.toml",
        "compose": "/files/n8n-worker-runner-with-redis-postgres-and-ollama/docker-compose.yml"
      },
      "slug": "n8n-worker-runner-with-redis-postgres-and-ollama"
    },
    {
      "name": "n8n",
      "shortDescription": "Source-available workflow automation tool that connects apps and APIs to build automations visually or with code.",
      "category": {
        "name": "Automation",
        "icon": "workflow",
        "description": "Workflow builders, schedulers and low-code tools that wire your services together.",
        "slug": "automation"
      },
      "developedBy": {
        "label": "n8n-io",
        "url": "https://github.com/n8n-io"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/n8n-io/n8n",
        "website": "https://n8n.io/",
        "docs": "https://docs.n8n.io/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Source-available workflow automation tool that connects apps and APIs to build automations visually or with code.",
      "logo": "/images/n8n/logo.webp",
      "images": [],
      "files": {
        "config": "/files/n8n/template.toml",
        "compose": "/files/n8n/docker-compose.yml"
      },
      "slug": "n8n"
    },
    {
      "name": "Navidrome",
      "shortDescription": "Music server and streamer compatible with Subsonic and Airsonic clients, letting you access your collection anywhere.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "navidrome",
        "url": "https://github.com/navidrome"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/navidrome/navidrome",
        "website": "https://www.navidrome.org/",
        "docs": "https://www.navidrome.org/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Music server and streamer compatible with Subsonic and Airsonic clients, letting you access your collection anywhere.",
      "logo": "/images/navidrome/logo.webp",
      "images": [],
      "files": {
        "config": "/files/navidrome/template.toml",
        "compose": "/files/navidrome/docker-compose.yml"
      },
      "slug": "navidrome"
    },
    {
      "name": "Neko",
      "shortDescription": "Virtual browser that runs inside Docker and streams its session over WebRTC for shared browsing and watch parties.",
      "category": {
        "name": "Storage",
        "icon": "hard-drive",
        "description": "Object storage, file sync, backups and the shares and drives behind them.",
        "slug": "storage"
      },
      "developedBy": {
        "label": "m1k1o",
        "url": "https://github.com/m1k1o"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/m1k1o/neko",
        "website": "https://github.com/m1k1o/neko",
        "docs": "https://github.com/m1k1o/neko"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Virtual browser that runs inside Docker and streams its session over WebRTC for shared browsing and watch parties.",
      "logo": "/images/neko/logo.webp",
      "images": [],
      "files": {
        "config": "/files/neko/template.toml",
        "compose": "/files/neko/docker-compose.yml"
      },
      "slug": "neko"
    },
    {
      "name": "Netdata",
      "shortDescription": "Real-time monitoring tool that visualizes system, container, and application metrics with per-second granularity.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "netdata",
        "url": "https://github.com/netdata"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/netdata/netdata",
        "website": "https://www.netdata.cloud/",
        "docs": "https://learn.netdata.cloud/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Real-time monitoring tool that visualizes system, container, and application metrics with per-second granularity.",
      "logo": "/images/netdata/logo.webp",
      "images": [],
      "files": {
        "config": "/files/netdata/template.toml",
        "compose": "/files/netdata/docker-compose.yml"
      },
      "slug": "netdata"
    },
    {
      "name": "Networking Toolbox",
      "shortDescription": "Collection of networking utilities like subnet, DNS, and IP calculators bundled into one self-hostable web app.",
      "category": {
        "name": "Networking",
        "icon": "network",
        "description": "Proxies, VPNs, DNS, tunnels and the gateways that put your services on the internet.",
        "slug": "networking"
      },
      "developedBy": {
        "label": "lissy93",
        "url": "https://github.com/lissy93"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/lissy93/networking",
        "website": "https://github.com/lissy93/networking",
        "docs": "https://github.com/lissy93/networking#readme"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Collection of networking utilities like subnet, DNS, and IP calculators bundled into one self-hostable web app.",
      "logo": "/images/networking-toolbox/logo.webp",
      "images": [],
      "files": {
        "config": "/files/networking-toolbox/template.toml",
        "compose": "/files/networking-toolbox/docker-compose.yml"
      },
      "slug": "networking-toolbox"
    },
    {
      "name": "Nextcloud",
      "shortDescription": "File sync and storage platform with built-in office, calendar, and chat for self-hosted collaboration and remote work.",
      "category": {
        "name": "Storage",
        "icon": "hard-drive",
        "description": "Object storage, file sync, backups and the shares and drives behind them.",
        "slug": "storage"
      },
      "developedBy": {
        "label": "nextcloud",
        "url": "https://github.com/nextcloud"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/nextcloud/docker",
        "website": "https://nextcloud.com/",
        "docs": "https://docs.nextcloud.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "File sync and storage platform with built-in office, calendar, and chat for self-hosted collaboration and remote work.",
      "logo": "/images/nextcloud/logo.webp",
      "images": [],
      "files": {
        "config": "/files/nextcloud/template.toml",
        "compose": "/files/nextcloud/docker-compose.yml"
      },
      "slug": "nextcloud"
    },
    {
      "name": "Nginx",
      "shortDescription": "High-performance web server and reverse proxy widely used for serving static content and load balancing.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "nginx",
        "url": "https://github.com/nginx"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/nginx/nginx",
        "website": "https://nginx.org/",
        "docs": "https://nginx.org/en/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "High-performance web server and reverse proxy widely used for serving static content and load balancing.",
      "logo": "/images/nginx/logo.webp",
      "images": [],
      "files": {
        "config": "/files/nginx/template.toml",
        "compose": "/files/nginx/docker-compose.yml"
      },
      "slug": "nginx"
    },
    {
      "name": "NocoDB",
      "shortDescription": "Open-source Airtable alternative that turns MySQL, PostgreSQL, SQL Server, SQLite, and MariaDB into a smart spreadsheet.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "nocodb",
        "url": "https://github.com/nocodb"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/nocodb/nocodb",
        "website": "https://nocodb.com/",
        "docs": "https://docs.nocodb.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source Airtable alternative that turns MySQL, PostgreSQL, SQL Server, SQLite, and MariaDB into a smart spreadsheet.",
      "logo": "/images/nocodb/logo.webp",
      "images": [],
      "files": {
        "config": "/files/nocodb/template.toml",
        "compose": "/files/nocodb/docker-compose.yml"
      },
      "slug": "nocodb"
    },
    {
      "name": "Notifuse",
      "shortDescription": "Open-source newsletter and notification platform for creating, sending, and tracking team communications at scale.",
      "category": {
        "name": "Email",
        "icon": "mail",
        "description": "Mail servers, transactional senders, newsletters and the inboxes to read them in.",
        "slug": "email"
      },
      "developedBy": {
        "label": "notifuse",
        "url": "https://github.com/notifuse"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/notifuse/notifuse",
        "website": "https://notifuse.com/",
        "docs": "https://docs.notifuse.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source newsletter and notification platform for creating, sending, and tracking team communications at scale.",
      "logo": "/images/notifuse/logo.webp",
      "images": [],
      "files": {
        "config": "/files/notifuse/template.toml",
        "compose": "/files/notifuse/docker-compose.yml"
      },
      "slug": "notifuse"
    },
    {
      "name": "NTFY",
      "shortDescription": "Pub-sub notification service that pushes alerts to your phone or desktop via simple HTTP PUT and POST requests.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "binwiederhier",
        "url": "https://github.com/binwiederhier"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/binwiederhier/ntfy",
        "website": "https://ntfy.sh/",
        "docs": "https://docs.ntfy.sh/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Pub-sub notification service that pushes alerts to your phone or desktop via simple HTTP PUT and POST requests.",
      "logo": "/images/ntfy/logo.webp",
      "images": [],
      "files": {
        "config": "/files/ntfy/template.toml",
        "compose": "/files/ntfy/docker-compose.yml"
      },
      "slug": "ntfy"
    },
    {
      "name": "Obsidian LiveSync",
      "shortDescription": "Self-hosted CouchDB backend for syncing Obsidian vaults across devices in real time without third-party services.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "vrtmrz",
        "url": "https://github.com/vrtmrz"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/vrtmrz/obsidian-livesync",
        "website": "https://obsidian.md/sync",
        "docs": "https://docs.couchdb.apache.org/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted CouchDB backend for syncing Obsidian vaults across devices in real time without third-party services.",
      "logo": "/images/obsidian-livesync/logo.webp",
      "images": [],
      "files": {
        "config": "/files/obsidian-livesync/template.toml",
        "compose": "/files/obsidian-livesync/docker-compose.yml"
      },
      "slug": "obsidian-livesync"
    },
    {
      "name": "Odoo 17",
      "shortDescription": "Open-source business management suite (ERP) covering sales, inventory, accounting, and CRM, here on version 17.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "odoo",
        "url": "https://github.com/odoo"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/odoo/odoo",
        "website": "https://odoo.com/",
        "docs": "https://www.odoo.com/documentation/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source business management suite (ERP) covering sales, inventory, accounting, and CRM, here on version 17.",
      "logo": "/images/odoo-17/logo.webp",
      "images": [],
      "files": {
        "config": "/files/odoo-17/template.toml",
        "compose": "/files/odoo-17/docker-compose.yml"
      },
      "slug": "odoo-17"
    },
    {
      "name": "Odoo 18",
      "shortDescription": "Open-source business management suite (ERP) covering sales, inventory, accounting, and CRM, here on version 18.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "odoo",
        "url": "https://github.com/odoo"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/odoo/odoo",
        "website": "https://odoo.com/",
        "docs": "https://www.odoo.com/documentation/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source business management suite (ERP) covering sales, inventory, accounting, and CRM, here on version 18.",
      "logo": "/images/odoo-18/logo.webp",
      "images": [],
      "files": {
        "config": "/files/odoo-18/template.toml",
        "compose": "/files/odoo-18/docker-compose.yml"
      },
      "slug": "odoo-18"
    },
    {
      "name": "Odoo 19",
      "shortDescription": "Open-source business management suite (ERP) covering sales, inventory, accounting, and CRM, here on version 19.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "odoo",
        "url": "https://github.com/odoo"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/odoo/odoo",
        "website": "https://odoo.com/",
        "docs": "https://www.odoo.com/documentation/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source business management suite (ERP) covering sales, inventory, accounting, and CRM, here on version 19.",
      "logo": "/images/odoo-19/logo.webp",
      "images": [],
      "files": {
        "config": "/files/odoo-19/template.toml",
        "compose": "/files/odoo-19/docker-compose.yml"
      },
      "slug": "odoo-19"
    },
    {
      "name": "Omni-Tools",
      "shortDescription": "Self-hosted collection of everyday utilities for text, image, and data conversions, all in one web interface.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "iib0011",
        "url": "https://github.com/iib0011"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/iib0011/omni-tools",
        "website": "https://github.com/iib0011/omni-tools",
        "docs": "https://github.com/iib0011/omni-tools"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted collection of everyday utilities for text, image, and data conversions, all in one web interface.",
      "logo": "/images/omni-tools/logo.webp",
      "images": [],
      "files": {
        "config": "/files/omni-tools/template.toml",
        "compose": "/files/omni-tools/docker-compose.yml"
      },
      "slug": "omni-tools"
    },
    {
      "name": "One Time Secret",
      "shortDescription": "Secure secret sharing service that creates self-destructing links viewable only once, ideal for passwords and keys.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "onetimesecret",
        "url": "https://github.com/onetimesecret"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/onetimesecret/onetimesecret",
        "website": "https://onetimesecret.com",
        "docs": "https://docs.onetimesecret.com"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Secure secret sharing service that creates self-destructing links viewable only once, ideal for passwords and keys.",
      "logo": "/images/one-time-secret/logo.webp",
      "images": [],
      "files": {
        "config": "/files/one-time-secret/template.toml",
        "compose": "/files/one-time-secret/docker-compose.yml"
      },
      "slug": "one-time-secret"
    },
    {
      "name": "OneDev",
      "shortDescription": "Self-hosted Git server with built-in CI/CD pipelines, kanban boards, and package registries for development teams.",
      "category": {
        "name": "Development",
        "icon": "code",
        "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
        "slug": "development"
      },
      "developedBy": {
        "label": "theonedev",
        "url": "https://github.com/theonedev"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/theonedev/onedev/",
        "website": "https://onedev.io/",
        "docs": "https://docs.onedev.io/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted Git server with built-in CI/CD pipelines, kanban boards, and package registries for development teams.",
      "logo": "/images/onedev/logo.webp",
      "images": [],
      "files": {
        "config": "/files/onedev/template.toml",
        "compose": "/files/onedev/docker-compose.yml"
      },
      "slug": "onedev"
    },
    {
      "name": "Ontime",
      "shortDescription": "Browser-based tool for managing event rundowns, scheduling, and cueing, with timers for live productions.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "cpvalente",
        "url": "https://github.com/cpvalente"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/cpvalente/ontime/",
        "website": "https://getontime.no",
        "docs": "https://docs.getontime.no"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Browser-based tool for managing event rundowns, scheduling, and cueing, with timers for live productions.",
      "logo": "/images/ontime/logo.webp",
      "images": [],
      "files": {
        "config": "/files/ontime/template.toml",
        "compose": "/files/ontime/docker-compose.yml"
      },
      "slug": "ontime"
    },
    {
      "name": "Open Fiesta",
      "shortDescription": "Open-source AI chat interface that connects to multiple model backends including OpenRouter, Gemini, and Ollama.",
      "category": {
        "name": "AI",
        "icon": "sparkles",
        "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
        "slug": "ai"
      },
      "developedBy": {
        "label": "jaainil",
        "url": "https://github.com/jaainil"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/jaainil/open-fiesta",
        "website": "https://github.com/jaainil/open-fiesta",
        "docs": "https://github.com/jaainil/open-fiesta#readme"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source AI chat interface that connects to multiple model backends including OpenRouter, Gemini, and Ollama.",
      "logo": "/images/open-fiesta/logo.webp",
      "images": [],
      "files": {
        "config": "/files/open-fiesta/template.toml",
        "compose": "/files/open-fiesta/docker-compose.yml"
      },
      "slug": "open-fiesta"
    },
    {
      "name": "Open Journal Systems",
      "shortDescription": "Open Journal Systems, a publishing platform for managing peer review and online distribution of scholarly journals.",
      "category": {
        "name": "CMS",
        "icon": "layout-template",
        "description": "Blogs, sites, headless content APIs and the storefronts built on top of them.",
        "slug": "cms"
      },
      "developedBy": {
        "label": "pkp",
        "url": "https://github.com/pkp"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/pkp/docker-ojs",
        "website": "https://pkp.sfu.ca/ojs/",
        "docs": "https://pkp.sfu.ca/ojs/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open Journal Systems, a publishing platform for managing peer review and online distribution of scholarly journals.",
      "logo": "/images/open-journal-systems/logo.webp",
      "images": [],
      "files": {
        "config": "/files/open-journal-systems/template.toml",
        "compose": "/files/open-journal-systems/docker-compose.yml"
      },
      "slug": "open-journal-systems"
    },
    {
      "name": "Open Notebook",
      "shortDescription": "AI-powered notebook backed by SurrealDB for organizing research and chatting with your notes and sources.",
      "category": {
        "name": "AI",
        "icon": "sparkles",
        "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
        "slug": "ai"
      },
      "developedBy": {
        "label": "lfnovo",
        "url": "https://github.com/lfnovo"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/lfnovo/open_notebook",
        "website": "https://www.open-notebook.ai/",
        "docs": "https://www.open-notebook.ai/get-started.html"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "AI-powered notebook backed by SurrealDB for organizing research and chatting with your notes and sources.",
      "logo": "/images/open-notebook/logo.webp",
      "images": [],
      "files": {
        "config": "/files/open-notebook/template.toml",
        "compose": "/files/open-notebook/docker-compose.yml"
      },
      "slug": "open-notebook"
    },
    {
      "name": "Open WebUI",
      "shortDescription": "Self-hosted chat interface for local LLMs, supporting Ollama and OpenAI-compatible APIs and running fully offline.",
      "category": {
        "name": "Communication",
        "icon": "message-circle",
        "description": "Chat, calls, forums and the bots and bridges that connect a team or a community.",
        "slug": "communication"
      },
      "developedBy": {
        "label": "open-webui",
        "url": "https://github.com/open-webui"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/open-webui/open-webui",
        "website": "https://openwebui.com/",
        "docs": "https://docs.openwebui.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted chat interface for local LLMs, supporting Ollama and OpenAI-compatible APIs and running fully offline.",
      "logo": "/images/open-webui/logo.webp",
      "images": [],
      "files": {
        "config": "/files/open-webui/template.toml",
        "compose": "/files/open-webui/docker-compose.yml"
      },
      "slug": "open-webui"
    },
    {
      "name": "Openclaw",
      "shortDescription": "Self-hosted WhatsApp gateway with a CLI and RPC agent for building AI-powered messaging bots and automations.",
      "category": {
        "name": "AI",
        "icon": "sparkles",
        "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
        "slug": "ai"
      },
      "developedBy": {
        "label": "openclaw",
        "url": "https://github.com/openclaw"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/openclaw/openclaw",
        "website": "https://openclaw.ai/",
        "docs": "https://docs.openclaw.ai/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted WhatsApp gateway with a CLI and RPC agent for building AI-powered messaging bots and automations.",
      "logo": "/images/openclaw/logo.webp",
      "images": [],
      "files": {
        "config": "/files/openclaw/template.toml",
        "compose": "/files/openclaw/docker-compose.yml"
      },
      "slug": "openclaw"
    },
    {
      "name": "OpenGist",
      "shortDescription": "Self-hosted pastebin and snippet sharing service, an open-source alternative to GitHub Gist backed by Git.",
      "category": {
        "name": "Development",
        "icon": "code",
        "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
        "slug": "development"
      },
      "developedBy": {
        "label": "thomiceli",
        "url": "https://github.com/thomiceli"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/thomiceli/opengist",
        "website": "https://github.com/thomiceli/opengist",
        "docs": "https://github.com/thomiceli/opengist"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted pastebin and snippet sharing service, an open-source alternative to GitHub Gist backed by Git.",
      "logo": "/images/opengist/logo.webp",
      "images": [],
      "files": {
        "config": "/files/opengist/template.toml",
        "compose": "/files/opengist/docker-compose.yml"
      },
      "slug": "opengist"
    },
    {
      "name": "OpenHands",
      "shortDescription": "Open-source platform for running and managing autonomous AI coding agents that write and execute software tasks.",
      "category": {
        "name": "AI",
        "icon": "sparkles",
        "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
        "slug": "ai"
      },
      "developedBy": {
        "label": "all-hands-ai",
        "url": "https://github.com/all-hands-ai"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/all-hands-ai/OpenHands",
        "website": "https://github.com/all-hands-ai/OpenHands",
        "docs": "https://github.com/all-hands-ai/OpenHands"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source platform for running and managing autonomous AI coding agents that write and execute software tasks.",
      "logo": "/images/openhands/logo.webp",
      "images": [],
      "files": {
        "config": "/files/openhands/template.toml",
        "compose": "/files/openhands/docker-compose.yml"
      },
      "slug": "openhands"
    },
    {
      "name": "Openinary",
      "shortDescription": "Self-hosted media management service for storing and transforming images and videos, an alternative to Cloudinary.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "openinary",
        "url": "https://github.com/openinary"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/openinary/openinary",
        "website": "https://openinary.dev",
        "docs": "https://docs.openinary.dev"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted media management service for storing and transforming images and videos, an alternative to Cloudinary.",
      "logo": "/images/openinary/logo.webp",
      "images": [],
      "files": {
        "config": "/files/openinary/template.toml",
        "compose": "/files/openinary/docker-compose.yml"
      },
      "slug": "openinary"
    },
    {
      "name": "OpenPanel",
      "shortDescription": "Open-source web and product analytics platform that blends Mixpanel-style events with Plausible-like simplicity.",
      "category": {
        "name": "Analytics",
        "icon": "chart-line",
        "description": "Product, web and business analytics, from privacy-first page counters to full dashboards.",
        "slug": "analytics"
      },
      "developedBy": {
        "label": "Openpanel-dev",
        "url": "https://github.com/Openpanel-dev"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/Openpanel-dev/openpanel",
        "website": "https://openpanel.dev/",
        "docs": "https://openpanel.dev/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source web and product analytics platform that blends Mixpanel-style events with Plausible-like simplicity.",
      "logo": "/images/openpanel/logo.webp",
      "images": [],
      "files": {
        "config": "/files/openpanel/template.toml",
        "compose": "/files/openpanel/docker-compose.yml"
      },
      "slug": "openpanel"
    },
    {
      "name": "OpenResty Manager",
      "shortDescription": "Web UI for OpenResty and Nginx that simplifies reverse proxying with access control, free SSL, and flood protection.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "Safe3",
        "url": "https://github.com/Safe3"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/Safe3/openresty-manager",
        "website": "https://om.uusec.com/",
        "docs": "https://github.com/Safe3/openresty-manager"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Web UI for OpenResty and Nginx that simplifies reverse proxying with access control, free SSL, and flood protection.",
      "logo": "/images/openresty-manager/logo.webp",
      "images": [],
      "files": {
        "config": "/files/openresty-manager/template.toml",
        "compose": "/files/openresty-manager/docker-compose.yml"
      },
      "slug": "openresty-manager"
    },
    {
      "name": "OpenSpeedTest",
      "shortDescription": "Browser-based HTML5 network speed test for measuring bandwidth, latency, and throughput without plugins or Flash.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "openspeedtest",
        "url": "https://github.com/openspeedtest"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/openspeedtest/Speed-Test",
        "website": "https://openspeedtest.com/",
        "docs": "https://github.com/openspeedtest/Speed-Test/wiki"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Browser-based HTML5 network speed test for measuring bandwidth, latency, and throughput without plugins or Flash.",
      "logo": "/images/openspeedtest/logo.webp",
      "images": [],
      "files": {
        "config": "/files/openspeedtest/template.toml",
        "compose": "/files/openspeedtest/docker-compose.yml"
      },
      "slug": "openspeedtest"
    },
    {
      "name": "Otter Wiki",
      "shortDescription": "Lightweight wiki engine built with Python and Flask, storing markdown pages in Git for versioned documentation.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "redimp",
        "url": "https://github.com/redimp"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/redimp/otterwiki",
        "website": "https://otterwiki.com/",
        "docs": "https://github.com/redimp/otterwiki/wiki"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Lightweight wiki engine built with Python and Flask, storing markdown pages in Git for versioned documentation.",
      "logo": "/images/otter-wiki/logo.webp",
      "images": [],
      "files": {
        "config": "/files/otter-wiki/template.toml",
        "compose": "/files/otter-wiki/docker-compose.yml"
      },
      "slug": "otter-wiki"
    },
    {
      "name": "Outline",
      "shortDescription": "Self-hosted knowledge base and team wiki with fast search and markdown editing for documentation and collaboration.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "outline",
        "url": "https://github.com/outline"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/outline/outline",
        "website": "https://getoutline.com/",
        "docs": "https://docs.getoutline.com/s/guide"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted knowledge base and team wiki with fast search and markdown editing for documentation and collaboration.",
      "logo": "/images/outline/logo.webp",
      "images": [],
      "files": {
        "config": "/files/outline/template.toml",
        "compose": "/files/outline/docker-compose.yml"
      },
      "slug": "outline"
    },
    {
      "name": "Owncast",
      "shortDescription": "Self-hosted live streaming and chat server that works with existing broadcast software as a YouTube Live alternative.",
      "category": {
        "name": "Communication",
        "icon": "message-circle",
        "description": "Chat, calls, forums and the bots and bridges that connect a team or a community.",
        "slug": "communication"
      },
      "developedBy": {
        "label": "owncast",
        "url": "https://github.com/owncast"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/owncast/owncast",
        "website": "https://owncast.online/",
        "docs": "https://owncast.online/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted live streaming and chat server that works with existing broadcast software as a YouTube Live alternative.",
      "logo": "/images/owncast/logo.webp",
      "images": [],
      "files": {
        "config": "/files/owncast/template.toml",
        "compose": "/files/owncast/docker-compose.yml"
      },
      "slug": "owncast"
    },
    {
      "name": "Palmr",
      "shortDescription": "Open-source alternative to WeTransfer for sharing files securely, with no tracking or size limits.",
      "category": {
        "name": "Storage",
        "icon": "hard-drive",
        "description": "Object storage, file sync, backups and the shares and drives behind them.",
        "slug": "storage"
      },
      "developedBy": {
        "label": "kyantech",
        "url": "https://github.com/kyantech"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/kyantech/Palmr",
        "website": "https://palmr.kyantech.com.br/",
        "docs": "https://palmr.kyantech.com.br/docs/3.0-beta"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source alternative to WeTransfer for sharing files securely, with no tracking or size limits.",
      "logo": "/images/palmr/logo.webp",
      "images": [],
      "files": {
        "config": "/files/palmr/template.toml",
        "compose": "/files/palmr/docker-compose.yml"
      },
      "slug": "palmr"
    },
    {
      "name": "Parseable",
      "shortDescription": "Log analytics and observability platform that stores and queries logs directly on object storage.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "parseablehq",
        "url": "https://github.com/parseablehq"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/parseablehq/parseable",
        "website": "https://www.parseable.com/",
        "docs": "https://www.parseable.com/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Log analytics and observability platform that stores and queries logs directly on object storage.",
      "logo": "/images/parseable/logo.webp",
      "images": [],
      "files": {
        "config": "/files/parseable/template.toml",
        "compose": "/files/parseable/docker-compose.yml"
      },
      "slug": "parseable"
    },
    {
      "name": "Passbolt",
      "shortDescription": "Open-source password manager for teams, built to share and collaborate on credentials and secrets securely.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "passbolt",
        "url": "https://github.com/passbolt"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/passbolt/passbolt_api",
        "website": "https://www.passbolt.com/",
        "docs": "https://www.passbolt.com/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source password manager for teams, built to share and collaborate on credentials and secrets securely.",
      "logo": "/images/passbolt/logo.webp",
      "images": [],
      "files": {
        "config": "/files/passbolt/template.toml",
        "compose": "/files/passbolt/docker-compose.yml"
      },
      "slug": "passbolt"
    },
    {
      "name": "Pastefy",
      "shortDescription": "Open-source pastebin for sharing code and text, with syntax highlighting and OAuth2 sign-in.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "interaapps",
        "url": "https://github.com/interaapps"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/interaapps/pastefy",
        "website": "https://pastefy.app",
        "docs": "https://github.com/interaapps/pastefy/wiki"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source pastebin for sharing code and text, with syntax highlighting and OAuth2 sign-in.",
      "logo": "/images/pastefy/logo.webp",
      "images": [],
      "files": {
        "config": "/files/pastefy/template.toml",
        "compose": "/files/pastefy/docker-compose.yml"
      },
      "slug": "pastefy"
    },
    {
      "name": "Paymenter",
      "shortDescription": "Billing and client management system for hosting providers, handling invoicing, payments, and automation.",
      "category": {
        "name": "Automation",
        "icon": "workflow",
        "description": "Workflow builders, schedulers and low-code tools that wire your services together.",
        "slug": "automation"
      },
      "developedBy": {
        "label": "Paymenter",
        "url": "https://github.com/Paymenter"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/Paymenter/Paymenter",
        "website": "https://paymenter.org/",
        "docs": "https://paymenter.org/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Billing and client management system for hosting providers, handling invoicing, payments, and automation.",
      "logo": "/images/paymenter/logo.webp",
      "images": [],
      "files": {
        "config": "/files/paymenter/template.toml",
        "compose": "/files/paymenter/docker-compose.yml"
      },
      "slug": "paymenter"
    },
    {
      "name": "PeerDB",
      "shortDescription": "Data movement platform for fast Postgres replication and syncing data across databases and warehouses.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "peerdb-io",
        "url": "https://github.com/peerdb-io"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/peerdb-io/peerdb",
        "website": "https://peerdb.io",
        "docs": "https://docs.peerdb.io"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Data movement platform for fast Postgres replication and syncing data across databases and warehouses.",
      "logo": "/images/peerdb/logo.webp",
      "images": [],
      "files": {
        "config": "/files/peerdb/template.toml",
        "compose": "/files/peerdb/docker-compose.yml"
      },
      "slug": "peerdb"
    },
    {
      "name": "Penpot",
      "shortDescription": "Open-source design and prototyping tool built on web standards to keep designers and developers in sync.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "penpot",
        "url": "https://github.com/penpot"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/penpot/penpot",
        "website": "https://penpot.app/",
        "docs": "https://docs.penpot.app/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source design and prototyping tool built on web standards to keep designers and developers in sync.",
      "logo": "/images/penpot/logo.webp",
      "images": [],
      "files": {
        "config": "/files/penpot/template.toml",
        "compose": "/files/penpot/docker-compose.yml"
      },
      "slug": "penpot"
    },
    {
      "name": "Peppermint",
      "shortDescription": "Open-source ticketing and help desk system for tracking issues and managing customer support requests.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "Peppermint-Lab",
        "url": "https://github.com/Peppermint-Lab"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/Peppermint-Lab/peppermint",
        "website": "https://peppermint.sh/",
        "docs": "https://docs.peppermint.sh/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source ticketing and help desk system for tracking issues and managing customer support requests.",
      "logo": "/images/peppermint/logo.webp",
      "images": [],
      "files": {
        "config": "/files/peppermint/template.toml",
        "compose": "/files/peppermint/docker-compose.yml"
      },
      "slug": "peppermint"
    },
    {
      "name": "pgAdmin",
      "shortDescription": "Web-based administration and development tool for managing PostgreSQL databases through a rich GUI.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "pgadmin-org",
        "url": "https://github.com/pgadmin-org"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/pgadmin-org/pgadmin4",
        "website": "https://www.pgadmin.org/",
        "docs": "https://www.pgadmin.org/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Web-based administration and development tool for managing PostgreSQL databases through a rich GUI.",
      "logo": "/images/pgadmin/logo.webp",
      "images": [],
      "files": {
        "config": "/files/pgadmin/template.toml",
        "compose": "/files/pgadmin/docker-compose.yml"
      },
      "slug": "pgadmin"
    },
    {
      "name": "Photoprism",
      "shortDescription": "Self-hosted photo manager that uses AI to automatically tag, organize, and search your picture library.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "photoprism",
        "url": "https://github.com/photoprism"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/photoprism/photoprism",
        "website": "https://www.photoprism.app/",
        "docs": "https://docs.photoprism.app/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted photo manager that uses AI to automatically tag, organize, and search your picture library.",
      "logo": "/images/photoprism/logo.webp",
      "images": [],
      "files": {
        "config": "/files/photoprism/template.toml",
        "compose": "/files/photoprism/docker-compose.yml"
      },
      "slug": "photoprism"
    },
    {
      "name": "Phpmyadmin",
      "shortDescription": "Web interface for administering MySQL and MariaDB databases, from running queries to managing tables.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "phpmyadmin",
        "url": "https://github.com/phpmyadmin"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/phpmyadmin/phpmyadmin",
        "website": "https://www.phpmyadmin.net/",
        "docs": "https://www.phpmyadmin.net/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Web interface for administering MySQL and MariaDB databases, from running queries to managing tables.",
      "logo": "/images/phpmyadmin/logo.webp",
      "images": [],
      "files": {
        "config": "/files/phpmyadmin/template.toml",
        "compose": "/files/phpmyadmin/docker-compose.yml"
      },
      "slug": "phpmyadmin"
    },
    {
      "name": "Picsur",
      "shortDescription": "Self-hosted image host with an admin panel and Postgres backend for uploading and sharing pictures.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "CaramelFur",
        "url": "https://github.com/CaramelFur"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/CaramelFur/picsur",
        "website": "https://github.com/CaramelFur/picsur",
        "docs": "https://github.com/CaramelFur/picsur#readme"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted image host with an admin panel and Postgres backend for uploading and sharing pictures.",
      "logo": "/images/picsur/logo.webp",
      "images": [],
      "files": {
        "config": "/files/picsur/template.toml",
        "compose": "/files/picsur/docker-compose.yml"
      },
      "slug": "picsur"
    },
    {
      "name": "Pinchflat",
      "shortDescription": "Self-hosted YouTube downloader that archives channels and playlists automatically via a clean web UI.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "kieraneglin",
        "url": "https://github.com/kieraneglin"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/kieraneglin/pinchflat",
        "website": "https://github.com/kieraneglin/pinchflat",
        "docs": "https://github.com/kieraneglin/pinchflat"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted YouTube downloader that archives channels and playlists automatically via a clean web UI.",
      "logo": "/images/pinchflat/logo.webp",
      "images": [],
      "files": {
        "config": "/files/pinchflat/template.toml",
        "compose": "/files/pinchflat/docker-compose.yml"
      },
      "slug": "pinchflat"
    },
    {
      "name": "Plane",
      "shortDescription": "Open-source project management tool for tracking issues, sprints, and roadmaps across teams.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "makeplane",
        "url": "https://github.com/makeplane"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/makeplane/plane",
        "website": "https://plane.so",
        "docs": "https://docs.plane.so/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source project management tool for tracking issues, sprints, and roadmaps across teams.",
      "logo": "/images/plane/logo.webp",
      "images": [],
      "files": {
        "config": "/files/plane/template.toml",
        "compose": "/files/plane/docker-compose.yml"
      },
      "slug": "plane"
    },
    {
      "name": "Plark",
      "shortDescription": "Self-hosted website builder for creating and publishing sites without writing code.",
      "category": {
        "name": "CMS",
        "icon": "layout-template",
        "description": "Blogs, sites, headless content APIs and the storefronts built on top of them.",
        "slug": "cms"
      },
      "developedBy": {
        "label": "plark-inc",
        "url": "https://github.com/plark-inc"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/plark-inc/render",
        "website": "https://plark.com",
        "docs": "https://plark.com/get-started"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted website builder for creating and publishing sites without writing code.",
      "logo": "/images/plark/logo.webp",
      "images": [],
      "files": {
        "config": "/files/plark/template.toml",
        "compose": "/files/plark/docker-compose.yml"
      },
      "slug": "plark"
    },
    {
      "name": "Plausible",
      "shortDescription": "Privacy-friendly, open-source alternative to Google Analytics for lightweight, cookie-free website stats.",
      "category": {
        "name": "Analytics",
        "icon": "chart-line",
        "description": "Product, web and business analytics, from privacy-first page counters to full dashboards.",
        "slug": "analytics"
      },
      "developedBy": {
        "label": "plausible",
        "url": "https://github.com/plausible"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/plausible/plausible",
        "website": "https://plausible.io/",
        "docs": "https://plausible.io/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Privacy-friendly, open-source alternative to Google Analytics for lightweight, cookie-free website stats.",
      "logo": "/images/plausible/logo.webp",
      "images": [],
      "files": {
        "config": "/files/plausible/template.toml",
        "compose": "/files/plausible/docker-compose.yml"
      },
      "slug": "plausible"
    },
    {
      "name": "Plunk",
      "shortDescription": "Open-source email platform combining marketing, transactional, and broadcast email in one tool.",
      "category": {
        "name": "Email",
        "icon": "mail",
        "description": "Mail servers, transactional senders, newsletters and the inboxes to read them in.",
        "slug": "email"
      },
      "developedBy": {
        "label": "useplunk",
        "url": "https://github.com/useplunk"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/useplunk/plunk",
        "website": "https://www.useplunk.com/",
        "docs": "https://docs.useplunk.com"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source email platform combining marketing, transactional, and broadcast email in one tool.",
      "logo": "/images/plunk/logo.webp",
      "images": [],
      "files": {
        "config": "/files/plunk/template.toml",
        "compose": "/files/plunk/docker-compose.yml"
      },
      "slug": "plunk"
    },
    {
      "name": "Pocket ID",
      "shortDescription": "Lightweight OIDC provider that lets users sign in to your services with passkeys instead of passwords.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "pocket-id",
        "url": "https://github.com/pocket-id"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/pocket-id/pocket-id",
        "website": "https://pocket-id.org/",
        "docs": "https://pocket-id.org/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Lightweight OIDC provider that lets users sign in to your services with passkeys instead of passwords.",
      "logo": "/images/pocket-id/logo.webp",
      "images": [],
      "files": {
        "config": "/files/pocket-id/template.toml",
        "compose": "/files/pocket-id/docker-compose.yml"
      },
      "slug": "pocket-id"
    },
    {
      "name": "PocketBase",
      "shortDescription": "Open-source backend in a single file, bundling a database, auth, file storage, and a REST API.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "pocketbase",
        "url": "https://github.com/pocketbase"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/pocketbase/pocketbase",
        "website": "https://pocketbase.io/",
        "docs": "https://pocketbase.io/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source backend in a single file, bundling a database, auth, file storage, and a REST API.",
      "logo": "/images/pocketbase/logo.webp",
      "images": [],
      "files": {
        "config": "/files/pocketbase/template.toml",
        "compose": "/files/pocketbase/docker-compose.yml"
      },
      "slug": "pocketbase"
    },
    {
      "name": "Poke",
      "shortDescription": "Privacy-focused, self-hosted YouTube front-end for watching and sharing videos without tracking.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "ashley",
        "url": "https://github.com/ashley"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://codeberg.org/ashley/poke",
        "website": "https://poketube.fun/",
        "docs": "https://codeberg.org/ashley/poke"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Privacy-focused, self-hosted YouTube front-end for watching and sharing videos without tracking.",
      "logo": "/images/poke/logo.webp",
      "images": [],
      "files": {
        "config": "/files/poke/template.toml",
        "compose": "/files/poke/docker-compose.yml"
      },
      "slug": "poke"
    },
    {
      "name": "Portainer",
      "shortDescription": "Container management UI for deploying, monitoring, and securing apps across Docker and Kubernetes.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "portainer",
        "url": "https://github.com/portainer"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/portainer/portainer",
        "website": "https://www.portainer.io/",
        "docs": "https://docs.portainer.io/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Container management UI for deploying, monitoring, and securing apps across Docker and Kubernetes.",
      "logo": "/images/portainer/logo.webp",
      "images": [],
      "files": {
        "config": "/files/portainer/template.toml",
        "compose": "/files/portainer/docker-compose.yml"
      },
      "slug": "portainer"
    },
    {
      "name": "Poste.io",
      "shortDescription": "All-in-one mail server with SMTP, IMAP, POP3, antispam, antivirus, webmail, and a web admin panel.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "analogic",
        "url": "https://github.com/analogic"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://bitbucket.org/analogic/mailserver",
        "website": "https://poste.io/",
        "docs": "https://poste.io/doc/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "All-in-one mail server with SMTP, IMAP, POP3, antispam, antivirus, webmail, and a web admin panel.",
      "logo": "/images/poste-io/logo.webp",
      "images": [],
      "files": {
        "config": "/files/poste-io/template.toml",
        "compose": "/files/poste-io/docker-compose.yml"
      },
      "slug": "poste-io"
    },
    {
      "name": "PostgreSQL with PgDog",
      "shortDescription": "PostgreSQL paired with PgDog, a multi-threaded connection pooler and load balancer alternative to PgBouncer.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "pgdogdev",
        "url": "https://github.com/pgdogdev"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/pgdogdev/pgdog",
        "website": "https://pgdog.dev",
        "docs": "https://docs.pgdog.dev"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "PostgreSQL paired with PgDog, a multi-threaded connection pooler and load balancer alternative to PgBouncer.",
      "logo": "/images/postgresql-with-pgdog/logo.webp",
      "images": [],
      "files": {
        "config": "/files/postgresql-with-pgdog/template.toml",
        "compose": "/files/postgresql-with-pgdog/docker-compose.yml"
      },
      "slug": "postgresql-with-pgdog"
    },
    {
      "name": "Postgresus",
      "shortDescription": "Open-source tool for automated PostgreSQL backups, with multiple storage targets and notifications.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "RostislavDugin",
        "url": "https://github.com/RostislavDugin"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/RostislavDugin/postgresus",
        "website": "https://postgresus.com",
        "docs": "https://postgresus.com"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source tool for automated PostgreSQL backups, with multiple storage targets and notifications.",
      "logo": "/images/postgresus/logo.webp",
      "images": [],
      "files": {
        "config": "/files/postgresus/template.toml",
        "compose": "/files/postgresus/docker-compose.yml"
      },
      "slug": "postgresus"
    },
    {
      "name": "Postiz",
      "shortDescription": "Open-source social media scheduler for planning and publishing content across multiple channels.",
      "category": {
        "name": "CMS",
        "icon": "layout-template",
        "description": "Blogs, sites, headless content APIs and the storefronts built on top of them.",
        "slug": "cms"
      },
      "developedBy": {
        "label": "gitroomhq",
        "url": "https://github.com/gitroomhq"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/gitroomhq/postiz",
        "website": "https://postiz.com",
        "docs": "https://docs.postiz.com"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source social media scheduler for planning and publishing content across multiple channels.",
      "logo": "/images/postiz/logo.webp",
      "images": [],
      "files": {
        "config": "/files/postiz/template.toml",
        "compose": "/files/postiz/docker-compose.yml"
      },
      "slug": "postiz"
    },
    {
      "name": "Prometheus",
      "shortDescription": "Open-source monitoring and alerting toolkit that collects time-series metrics for reliable observability.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "prometheus",
        "url": "https://github.com/prometheus"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/prometheus/prometheus",
        "website": "https://prometheus.io/",
        "docs": "https://prometheus.io/docs/introduction/overview/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source monitoring and alerting toolkit that collects time-series metrics for reliable observability.",
      "logo": "/images/prometheus/logo.webp",
      "images": [],
      "files": {
        "config": "/files/prometheus/template.toml",
        "compose": "/files/prometheus/docker-compose.yml"
      },
      "slug": "prometheus"
    },
    {
      "name": "Pterodactyl",
      "shortDescription": "Open-source game server management panel for deploying and controlling game servers in isolated containers.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "pterodactyl",
        "url": "https://github.com/pterodactyl"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/pterodactyl/panel",
        "website": "https://pterodactyl.io",
        "docs": "https://pterodactyl.io/project/introduction.html"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source game server management panel for deploying and controlling game servers in isolated containers.",
      "logo": "/images/pterodactyl/logo.webp",
      "images": [],
      "files": {
        "config": "/files/pterodactyl/template.toml",
        "compose": "/files/pterodactyl/docker-compose.yml"
      },
      "slug": "pterodactyl"
    },
    {
      "name": "Pulse",
      "shortDescription": "Real-time monitoring dashboard for Proxmox VE, PBS, and Docker, showing metrics across nodes and containers.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "rcourtman",
        "url": "https://github.com/rcourtman"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/rcourtman/Pulse",
        "website": "https://pulserelay.pro/",
        "docs": "https://github.com/rcourtman/Pulse/blob/main/docs/README.md"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Real-time monitoring dashboard for Proxmox VE, PBS, and Docker, showing metrics across nodes and containers.",
      "logo": "/images/pulse/logo.webp",
      "images": [],
      "files": {
        "config": "/files/pulse/template.toml",
        "compose": "/files/pulse/docker-compose.yml"
      },
      "slug": "pulse"
    },
    {
      "name": "Pyrodactyl",
      "shortDescription": "Pterodactyl-based game server panel rebuilt to be faster, smaller, and more accessible to manage.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "pyrohost",
        "url": "https://github.com/pyrohost"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/pyrohost/pyrodactyl",
        "website": "https://pyrodactyl.dev",
        "docs": "https://pyrodactyl.dev/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Pterodactyl-based game server panel rebuilt to be faster, smaller, and more accessible to manage.",
      "logo": "/images/pyrodactyl/logo.webp",
      "images": [],
      "files": {
        "config": "/files/pyrodactyl/template.toml",
        "compose": "/files/pyrodactyl/docker-compose.yml"
      },
      "slug": "pyrodactyl"
    },
    {
      "name": "qBittorrent Web UI",
      "shortDescription": "Web dashboard for monitoring and controlling several qBittorrent instances from a single interface.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "Maciejonos",
        "url": "https://github.com/Maciejonos"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/Maciejonos/qbitwebui",
        "website": "https://github.com/Maciejonos/qbitwebui",
        "docs": "https://github.com/Maciejonos/qbitwebui#readme"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Web dashboard for monitoring and controlling several qBittorrent instances from a single interface.",
      "logo": "/images/qbittorrent-web-ui/logo.webp",
      "images": [],
      "files": {
        "config": "/files/qbittorrent-web-ui/template.toml",
        "compose": "/files/qbittorrent-web-ui/docker-compose.yml"
      },
      "slug": "qbittorrent-web-ui"
    },
    {
      "name": "qBittorrent",
      "shortDescription": "Open-source BitTorrent client with a built-in web UI for adding and managing downloads remotely from any browser.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "qbittorrent",
        "url": "https://github.com/qbittorrent"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/qbittorrent/qBittorrent",
        "website": "https://www.qbittorrent.org/",
        "docs": "https://github.com/qbittorrent/qBittorrent/wiki"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source BitTorrent client with a built-in web UI for adding and managing downloads remotely from any browser.",
      "logo": "/images/qbittorrent/logo.webp",
      "images": [],
      "files": {
        "config": "/files/qbittorrent/template.toml",
        "compose": "/files/qbittorrent/docker-compose.yml"
      },
      "slug": "qbittorrent"
    },
    {
      "name": "Qdrant",
      "shortDescription": "Open-source vector database for storing embeddings and running fast similarity search to power AI and recommendation features.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "qdrant",
        "url": "https://github.com/qdrant"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/qdrant/qdrant",
        "website": "https://qdrant.tech/",
        "docs": "https://qdrant.tech/documentation/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source vector database for storing embeddings and running fast similarity search to power AI and recommendation features.",
      "logo": "/images/qdrant/logo.webp",
      "images": [],
      "files": {
        "config": "/files/qdrant/template.toml",
        "compose": "/files/qdrant/docker-compose.yml"
      },
      "slug": "qdrant"
    },
    {
      "name": "Quant-UX",
      "shortDescription": "Open-source UX design tool for building interactive prototypes and running usability tests with behavior analytics.",
      "category": {
        "name": "Analytics",
        "icon": "chart-line",
        "description": "Product, web and business analytics, from privacy-first page counters to full dashboards.",
        "slug": "analytics"
      },
      "developedBy": {
        "label": "KlausSchaefers",
        "url": "https://github.com/KlausSchaefers"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/KlausSchaefers/quant-ux",
        "website": "https://www.quant-ux.com/",
        "docs": "https://www.quant-ux.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source UX design tool for building interactive prototypes and running usability tests with behavior analytics.",
      "logo": "/images/quant-ux/logo.webp",
      "images": [],
      "files": {
        "config": "/files/quant-ux/template.toml",
        "compose": "/files/quant-ux/docker-compose.yml"
      },
      "slug": "quant-ux"
    },
    {
      "name": "RabbitMQ",
      "shortDescription": "Open-source message broker that queues and routes messages between services using AMQP and other protocols.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "rabbitmq",
        "url": "https://github.com/rabbitmq"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/rabbitmq/rabbitmq-server",
        "website": "https://www.rabbitmq.com/",
        "docs": "https://www.rabbitmq.com/documentation.html"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source message broker that queues and routes messages between services using AMQP and other protocols.",
      "logo": "/images/rabbitmq/logo.webp",
      "images": [],
      "files": {
        "config": "/files/rabbitmq/template.toml",
        "compose": "/files/rabbitmq/docker-compose.yml"
      },
      "slug": "rabbitmq"
    },
    {
      "name": "Reactive Resume",
      "shortDescription": "Open-source resume builder for creating, editing, and sharing professional resumes from clean templates.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "AmruthPillai",
        "url": "https://github.com/AmruthPillai"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/AmruthPillai/Reactive-Resume",
        "website": "https://rxresu.me/",
        "docs": "https://docs.rxresu.me/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source resume builder for creating, editing, and sharing professional resumes from clean templates.",
      "logo": "/images/reactive-resume/logo.webp",
      "images": [],
      "files": {
        "config": "/files/reactive-resume/template.toml",
        "compose": "/files/reactive-resume/docker-compose.yml"
      },
      "slug": "reactive-resume"
    },
    {
      "name": "Rocketchat",
      "shortDescription": "Open-source team chat platform for messaging, channels, and collaboration, positioned as a Slack alternative.",
      "category": {
        "name": "Communication",
        "icon": "message-circle",
        "description": "Chat, calls, forums and the bots and bridges that connect a team or a community.",
        "slug": "communication"
      },
      "developedBy": {
        "label": "RocketChat",
        "url": "https://github.com/RocketChat"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/RocketChat/Rocket.Chat",
        "website": "https://rocket.chat/",
        "docs": "https://rocket.chat/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source team chat platform for messaging, channels, and collaboration, positioned as a Slack alternative.",
      "logo": "/images/rocketchat/logo.webp",
      "images": [],
      "files": {
        "config": "/files/rocketchat/template.toml",
        "compose": "/files/rocketchat/docker-compose.yml"
      },
      "slug": "rocketchat"
    },
    {
      "name": "Rote",
      "shortDescription": "Open-source personal note-taking app with an open API, full data ownership, and simple Docker deployment.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "Rabithua",
        "url": "https://github.com/Rabithua"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/Rabithua/Rote",
        "website": "https://rote.ink",
        "docs": "https://github.com/Rabithua/Rote/tree/main/doc/userguide"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source personal note-taking app with an open API, full data ownership, and simple Docker deployment.",
      "logo": "/images/rote/logo.webp",
      "images": [],
      "files": {
        "config": "/files/rote/template.toml",
        "compose": "/files/rote/docker-compose.yml"
      },
      "slug": "rote"
    },
    {
      "name": "Roundcube",
      "shortDescription": "Browser-based IMAP webmail client written in PHP, giving your mail server a clean and familiar inbox interface.",
      "category": {
        "name": "Email",
        "icon": "mail",
        "description": "Mail servers, transactional senders, newsletters and the inboxes to read them in.",
        "slug": "email"
      },
      "developedBy": {
        "label": "roundcube",
        "url": "https://github.com/roundcube"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/roundcube/roundcubemail",
        "website": "https://roundcube.net/",
        "docs": "https://roundcube.net/about/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Browser-based IMAP webmail client written in PHP, giving your mail server a clean and familiar inbox interface.",
      "logo": "/images/roundcube/logo.webp",
      "images": [],
      "files": {
        "config": "/files/roundcube/template.toml",
        "compose": "/files/roundcube/docker-compose.yml"
      },
      "slug": "roundcube"
    },
    {
      "name": "RSS-Bridge",
      "shortDescription": "PHP tool that generates RSS and Atom feeds for sites that don't publish their own, so you can follow them in any reader.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "RSS-Bridge",
        "url": "https://github.com/RSS-Bridge"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/RSS-Bridge/rss-bridge",
        "website": "https://rss-bridge.github.io/rss-bridge/",
        "docs": "https://rss-bridge.github.io/rss-bridge/General/Project_goals.html"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "PHP tool that generates RSS and Atom feeds for sites that don't publish their own, so you can follow them in any reader.",
      "logo": "/images/rss-bridge/logo.webp",
      "images": [],
      "files": {
        "config": "/files/rss-bridge/template.toml",
        "compose": "/files/rss-bridge/docker-compose.yml"
      },
      "slug": "rss-bridge"
    },
    {
      "name": "RSSHub",
      "shortDescription": "Extensible RSS feed generator that turns thousands of websites and services into subscribable feeds.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "DIYgod",
        "url": "https://github.com/DIYgod"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/DIYgod/RSSHub",
        "website": "https://rsshub.app/",
        "docs": "https://docs.rsshub.app/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Extensible RSS feed generator that turns thousands of websites and services into subscribable feeds.",
      "logo": "/images/rsshub/logo.webp",
      "images": [],
      "files": {
        "config": "/files/rsshub/template.toml",
        "compose": "/files/rsshub/docker-compose.yml"
      },
      "slug": "rsshub"
    },
    {
      "name": "RustDesk",
      "shortDescription": "Open-source remote desktop server for self-hosted screen sharing and remote control, an alternative to TeamViewer.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "rustdesk",
        "url": "https://github.com/rustdesk"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/rustdesk/rustdesk-server",
        "website": "https://rustdesk.com/",
        "docs": "https://rustdesk.com/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source remote desktop server for self-hosted screen sharing and remote control, an alternative to TeamViewer.",
      "logo": "/images/rustdesk/logo.webp",
      "images": [],
      "files": {
        "config": "/files/rustdesk/template.toml",
        "compose": "/files/rustdesk/docker-compose.yml"
      },
      "slug": "rustdesk"
    },
    {
      "name": "RustFS",
      "shortDescription": "S3-compatible distributed object storage written in Rust, offering high-throughput file storage as a MinIO alternative.",
      "category": {
        "name": "Storage",
        "icon": "hard-drive",
        "description": "Object storage, file sync, backups and the shares and drives behind them.",
        "slug": "storage"
      },
      "developedBy": {
        "label": "rustfs",
        "url": "https://github.com/rustfs"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/rustfs/rustfs",
        "website": "https://rustfs.com/",
        "docs": "https://docs.rustfs.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "S3-compatible distributed object storage written in Rust, offering high-throughput file storage as a MinIO alternative.",
      "logo": "/images/rustfs/logo.webp",
      "images": [],
      "files": {
        "config": "/files/rustfs/template.toml",
        "compose": "/files/rustfs/docker-compose.yml"
      },
      "slug": "rustfs"
    },
    {
      "name": "ruTorrent",
      "shortDescription": "Web interface for the rTorrent BitTorrent client, letting you manage torrents and seeding from your browser.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "crazy-max",
        "url": "https://github.com/crazy-max"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/crazy-max/docker-rtorrent-rutorrent",
        "website": "https://crazymax.dev/",
        "docs": "https://github.com/crazy-max/docker-rtorrent-rutorrent"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Web interface for the rTorrent BitTorrent client, letting you manage torrents and seeding from your browser.",
      "logo": "/images/rutorrent/logo.webp",
      "images": [],
      "files": {
        "config": "/files/rutorrent/template.toml",
        "compose": "/files/rutorrent/docker-compose.yml"
      },
      "slug": "rutorrent"
    },
    {
      "name": "Rybbit",
      "shortDescription": "Privacy-friendly web analytics for tracking visitors without cookies, positioned as an open-source Google Analytics alternative.",
      "category": {
        "name": "Analytics",
        "icon": "chart-line",
        "description": "Product, web and business analytics, from privacy-first page counters to full dashboards.",
        "slug": "analytics"
      },
      "developedBy": {
        "label": "rybbit-io",
        "url": "https://github.com/rybbit-io"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/rybbit-io/rybbit",
        "website": "https://rybbit.io",
        "docs": "https://www.rybbit.io/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Privacy-friendly web analytics for tracking visitors without cookies, positioned as an open-source Google Analytics alternative.",
      "logo": "/images/rybbit/logo.webp",
      "images": [],
      "files": {
        "config": "/files/rybbit/template.toml",
        "compose": "/files/rybbit/docker-compose.yml"
      },
      "slug": "rybbit"
    },
    {
      "name": "Ryot",
      "shortDescription": "Self-hosted tracker for movies, TV, games, books, and audiobooks, keeping all your media progress in one place.",
      "category": {
        "name": "Analytics",
        "icon": "chart-line",
        "description": "Product, web and business analytics, from privacy-first page counters to full dashboards.",
        "slug": "analytics"
      },
      "developedBy": {
        "label": "IgnisDa",
        "url": "https://github.com/IgnisDa"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/IgnisDa/ryot",
        "website": "https://ryot.io/",
        "docs": "https://docs.ryot.io/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted tracker for movies, TV, games, books, and audiobooks, keeping all your media progress in one place.",
      "logo": "/images/ryot/logo.webp",
      "images": [],
      "files": {
        "config": "/files/ryot/template.toml",
        "compose": "/files/ryot/docker-compose.yml"
      },
      "slug": "ryot"
    },
    {
      "name": "Scrutiny",
      "shortDescription": "Hard drive health dashboard that monitors S.M.A.R.T. data and historical trends to warn you before disks fail.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "AnalogJ",
        "url": "https://github.com/AnalogJ"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/AnalogJ/scrutiny/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Hard drive health dashboard that monitors S.M.A.R.T. data and historical trends to warn you before disks fail.",
      "logo": "/images/scrutiny/logo.webp",
      "images": [],
      "files": {
        "config": "/files/scrutiny/template.toml",
        "compose": "/files/scrutiny/docker-compose.yml"
      },
      "slug": "scrutiny"
    },
    {
      "name": "Scrypted",
      "shortDescription": "Home automation and NVR platform that unifies smart-home devices and camera surveillance under HomeKit, Alexa, and Google Home.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "koush",
        "url": "https://github.com/koush"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/koush/scrypted",
        "website": "https://www.scrypted.app/",
        "docs": "https://docs.scrypted.app/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Home automation and NVR platform that unifies smart-home devices and camera surveillance under HomeKit, Alexa, and Google Home.",
      "logo": "/images/scrypted/logo.webp",
      "images": [],
      "files": {
        "config": "/files/scrypted/template.toml",
        "compose": "/files/scrypted/docker-compose.yml"
      },
      "slug": "scrypted"
    },
    {
      "name": "Seafile",
      "shortDescription": "Open-source file sync and share platform with reliable storage and built-in document collaboration for teams.",
      "category": {
        "name": "Storage",
        "icon": "hard-drive",
        "description": "Object storage, file sync, backups and the shares and drives behind them.",
        "slug": "storage"
      },
      "developedBy": {
        "label": "haiwen",
        "url": "https://github.com/haiwen"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/haiwen/seafile",
        "website": "https://seafile.com",
        "docs": "https://manual.seafile.com/12.0"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source file sync and share platform with reliable storage and built-in document collaboration for teams.",
      "logo": "/images/seafile/logo.webp",
      "images": [],
      "files": {
        "config": "/files/seafile/template.toml",
        "compose": "/files/seafile/docker-compose.yml"
      },
      "slug": "seafile"
    },
    {
      "name": "SearXNG",
      "shortDescription": "Privacy-respecting metasearch engine that aggregates results from many search engines without tracking or profiling you.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "searxng",
        "url": "https://github.com/searxng"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/searxng/searxng",
        "website": "https://searxng.github.io/",
        "docs": "https://docs.searxng.github.io/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Privacy-respecting metasearch engine that aggregates results from many search engines without tracking or profiling you.",
      "logo": "/images/searxng/logo.webp",
      "images": [],
      "files": {
        "config": "/files/searxng/template.toml",
        "compose": "/files/searxng/docker-compose.yml"
      },
      "slug": "searxng"
    },
    {
      "name": "SeaweedFS",
      "shortDescription": "Fast distributed storage for blobs, objects, and files, with an S3-compatible API, FUSE mount, and WebDAV support.",
      "category": {
        "name": "Storage",
        "icon": "hard-drive",
        "description": "Object storage, file sync, backups and the shares and drives behind them.",
        "slug": "storage"
      },
      "developedBy": {
        "label": "seaweedfs",
        "url": "https://github.com/seaweedfs"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/seaweedfs/seaweedfs",
        "website": "https://seaweedfs.com/",
        "docs": "https://github.com/seaweedfs/seaweedfs/wiki"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Fast distributed storage for blobs, objects, and files, with an S3-compatible API, FUSE mount, and WebDAV support.",
      "logo": "/images/seaweedfs/logo.webp",
      "images": [],
      "files": {
        "config": "/files/seaweedfs/template.toml",
        "compose": "/files/seaweedfs/docker-compose.yml"
      },
      "slug": "seaweedfs"
    },
    {
      "name": "Shlink",
      "shortDescription": "Self-hosted URL shortener that serves short links under your own domain, with detailed click analytics and a REST API.",
      "category": {
        "name": "Storage",
        "icon": "hard-drive",
        "description": "Object storage, file sync, backups and the shares and drives behind them.",
        "slug": "storage"
      },
      "developedBy": {
        "label": "shlinkio",
        "url": "https://github.com/shlinkio"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/shlinkio/shlink",
        "website": "https://shlink.io",
        "docs": "https://shlink.io/documentation"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted URL shortener that serves short links under your own domain, with detailed click analytics and a REST API.",
      "logo": "/images/shlink/logo.webp",
      "images": [],
      "files": {
        "config": "/files/shlink/template.toml",
        "compose": "/files/shlink/docker-compose.yml"
      },
      "slug": "shlink"
    },
    {
      "name": "SigNoz",
      "shortDescription": "Open-source observability platform and Datadog alternative, unifying traces, metrics, and logs via OpenTelemetry.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "SigNoz",
        "url": "https://github.com/SigNoz"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/SigNoz/signoz",
        "website": "https://signoz.io/",
        "docs": "https://signoz.io/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source observability platform and Datadog alternative, unifying traces, metrics, and logs via OpenTelemetry.",
      "logo": "/images/signoz/logo.webp",
      "images": [],
      "files": {
        "config": "/files/signoz/template.toml",
        "compose": "/files/signoz/docker-compose.yml"
      },
      "slug": "signoz"
    },
    {
      "name": "SilverBullet",
      "shortDescription": "Markdown-based personal knowledge base for note-taking that grows smarter with linked pages and live queries.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "silverbulletmd",
        "url": "https://github.com/silverbulletmd"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/silverbulletmd/silverbullet",
        "website": "https://silverbullet.md",
        "docs": "https://silverbullet.md/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Markdown-based personal knowledge base for note-taking that grows smarter with linked pages and live queries.",
      "logo": "/images/silverbullet/logo.webp",
      "images": [],
      "files": {
        "config": "/files/silverbullet/template.toml",
        "compose": "/files/silverbullet/docker-compose.yml"
      },
      "slug": "silverbullet"
    },
    {
      "name": "Slash",
      "shortDescription": "Self-hosted bookmarking service and link shortener for organizing and sharing your favorite links in one place.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "yourselfhosted",
        "url": "https://github.com/yourselfhosted"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/yourselfhosted/slash",
        "website": "https://github.com/yourselfhosted/slash#readme",
        "docs": "https://github.com/yourselfhosted/slash/wiki"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted bookmarking service and link shortener for organizing and sharing your favorite links in one place.",
      "logo": "/images/slash/logo.webp",
      "images": [],
      "files": {
        "config": "/files/slash/template.toml",
        "compose": "/files/slash/docker-compose.yml"
      },
      "slug": "slash"
    },
    {
      "name": "Snapp",
      "shortDescription": "Self-hosted screenshot sharing service with user accounts and authentication to keep your captures private.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "UraniaDev",
        "url": "https://github.com/UraniaDev"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/UraniaDev/snapp",
        "website": "https://github.com/UraniaDev/snapp",
        "docs": "https://github.com/UraniaDev/snapp"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted screenshot sharing service with user accounts and authentication to keep your captures private.",
      "logo": "/images/snapp/logo.webp",
      "images": [],
      "files": {
        "config": "/files/snapp/template.toml",
        "compose": "/files/snapp/docker-compose.yml"
      },
      "slug": "snapp"
    },
    {
      "name": "Soketi",
      "shortDescription": "Open-source WebSockets server, compatible with Pusher, for fast and resilient real-time messaging in your apps.",
      "category": {
        "name": "Communication",
        "icon": "message-circle",
        "description": "Chat, calls, forums and the bots and bridges that connect a team or a community.",
        "slug": "communication"
      },
      "developedBy": {
        "label": "soketi",
        "url": "https://github.com/soketi"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/soketi/soketi",
        "website": "https://soketi.app/",
        "docs": "https://docs.soketi.app/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source WebSockets server, compatible with Pusher, for fast and resilient real-time messaging in your apps.",
      "logo": "/images/soketi/logo.webp",
      "images": [],
      "files": {
        "config": "/files/soketi/template.toml",
        "compose": "/files/soketi/docker-compose.yml"
      },
      "slug": "soketi"
    },
    {
      "name": "Spacedrive",
      "shortDescription": "Cross-platform file manager built on a virtual distributed filesystem, organizing files across all your devices at once.",
      "category": {
        "name": "Storage",
        "icon": "hard-drive",
        "description": "Object storage, file sync, backups and the shares and drives behind them.",
        "slug": "storage"
      },
      "developedBy": {
        "label": "spacedriveapp",
        "url": "https://github.com/spacedriveapp"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/spacedriveapp/spacedrive",
        "website": "https://spacedrive.com/",
        "docs": "https://www.spacedrive.com/docs/product/getting-started/introduction"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Cross-platform file manager built on a virtual distributed filesystem, organizing files across all your devices at once.",
      "logo": "/images/spacedrive/logo.webp",
      "images": [],
      "files": {
        "config": "/files/spacedrive/template.toml",
        "compose": "/files/spacedrive/docker-compose.yml"
      },
      "slug": "spacedrive"
    },
    {
      "name": "Stack Auth",
      "shortDescription": "Open-source authentication platform and Auth0/Clerk alternative for adding user sign-in and management to your apps.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "stack-auth",
        "url": "https://github.com/stack-auth"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/stack-auth/stack-auth",
        "website": "https://stack-auth.com/",
        "docs": "https://docs.stack-auth.com/next/overview"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source authentication platform and Auth0/Clerk alternative for adding user sign-in and management to your apps.",
      "logo": "/images/stack-auth/logo.webp",
      "images": [],
      "files": {
        "config": "/files/stack-auth/template.toml",
        "compose": "/files/stack-auth/docker-compose.yml"
      },
      "slug": "stack-auth"
    },
    {
      "name": "Stalwart",
      "shortDescription": "All-in-one mail server written in Rust, supporting JMAP, IMAP4, POP3, and SMTP with a focus on security and scalability.",
      "category": {
        "name": "Email",
        "icon": "mail",
        "description": "Mail servers, transactional senders, newsletters and the inboxes to read them in.",
        "slug": "email"
      },
      "developedBy": {
        "label": "stalwartlabs",
        "url": "https://github.com/stalwartlabs"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/stalwartlabs/mail-server",
        "website": "https://stalw.art/",
        "docs": "https://stalw.art/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "All-in-one mail server written in Rust, supporting JMAP, IMAP4, POP3, and SMTP with a focus on security and scalability.",
      "logo": "/images/stalwart/logo.webp",
      "images": [],
      "files": {
        "config": "/files/stalwart/template.toml",
        "compose": "/files/stalwart/docker-compose.yml"
      },
      "slug": "stalwart"
    },
    {
      "name": "Statping-NG",
      "shortDescription": "Status page for monitoring websites and apps, with health checks, uptime metrics, and notifications when things break.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "adamboutcher",
        "url": "https://github.com/adamboutcher"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/adamboutcher/statping-ng",
        "website": "https://statping-ng.github.io/",
        "docs": "https://statping-ng.github.io/install.html"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Status page for monitoring websites and apps, with health checks, uptime metrics, and notifications when things break.",
      "logo": "/images/statping-ng/logo.webp",
      "images": [],
      "files": {
        "config": "/files/statping-ng/template.toml",
        "compose": "/files/statping-ng/docker-compose.yml"
      },
      "slug": "statping-ng"
    },
    {
      "name": "Stirling PDF",
      "shortDescription": "Locally hosted toolkit for working with PDFs, covering merging, splitting, conversion, OCR, and dozens of other edits.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "Stirling-Tools",
        "url": "https://github.com/Stirling-Tools"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/Stirling-Tools/Stirling-PDF",
        "website": "https://www.stirlingpdf.com/",
        "docs": "https://docs.stirlingpdf.com/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Locally hosted toolkit for working with PDFs, covering merging, splitting, conversion, OCR, and dozens of other edits.",
      "logo": "/images/stirling-pdf/logo.webp",
      "images": [],
      "files": {
        "config": "/files/stirling-pdf/template.toml",
        "compose": "/files/stirling-pdf/docker-compose.yml"
      },
      "slug": "stirling-pdf"
    },
    {
      "name": "Storyden",
      "shortDescription": "Modern, extensible forum and bulletin board platform for building secure online communities and discussions.",
      "category": {
        "name": "Communication",
        "icon": "message-circle",
        "description": "Chat, calls, forums and the bots and bridges that connect a team or a community.",
        "slug": "communication"
      },
      "developedBy": {
        "label": "Southclaws",
        "url": "https://github.com/Southclaws"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/Southclaws/storyden",
        "website": "https://www.storyden.org/",
        "docs": "https://www.storyden.org/docs/introduction"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Modern, extensible forum and bulletin board platform for building secure online communities and discussions.",
      "logo": "/images/storyden/logo.webp",
      "images": [],
      "files": {
        "config": "/files/storyden/template.toml",
        "compose": "/files/storyden/docker-compose.yml"
      },
      "slug": "storyden"
    },
    {
      "name": "Strapi",
      "shortDescription": "Open-source headless CMS for building customizable APIs with a friendly admin panel for managing content.",
      "category": {
        "name": "CMS",
        "icon": "layout-template",
        "description": "Blogs, sites, headless content APIs and the storefronts built on top of them.",
        "slug": "cms"
      },
      "developedBy": {
        "label": "strapi",
        "url": "https://github.com/strapi"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/strapi/strapi",
        "website": "https://strapi.io",
        "docs": "https://docs.strapi.io"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source headless CMS for building customizable APIs with a friendly admin panel for managing content.",
      "logo": "/images/strapi/logo.webp",
      "images": [],
      "files": {
        "config": "/files/strapi/template.toml",
        "compose": "/files/strapi/docker-compose.yml"
      },
      "slug": "strapi"
    },
    {
      "name": "StreamFlow",
      "shortDescription": "Live streaming app that broadcasts RTMP to YouTube, Facebook, and more at once, with scheduling and real-time monitoring.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "bangtutorial",
        "url": "https://github.com/bangtutorial"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/bangtutorial/streamflow",
        "website": "https://github.com/bangtutorial/streamflow",
        "docs": "https://github.com/bangtutorial/streamflow#readme"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Live streaming app that broadcasts RTMP to YouTube, Facebook, and more at once, with scheduling and real-time monitoring.",
      "logo": "/images/streamflow/logo.webp",
      "images": [],
      "files": {
        "config": "/files/streamflow/template.toml",
        "compose": "/files/streamflow/docker-compose.yml"
      },
      "slug": "streamflow"
    },
    {
      "name": "Supabase Legacy",
      "shortDescription": "Open-source Firebase alternative giving you a Postgres database, auth, and APIs for web, mobile, and AI apps.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "supabase",
        "url": "https://github.com/supabase"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/supabase/supabase",
        "website": "https://supabase.com/",
        "docs": "https://supabase.com/docs/guides/self-hosting"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source Firebase alternative giving you a Postgres database, auth, and APIs for web, mobile, and AI apps.",
      "logo": "/images/supabase-legacy/logo.webp",
      "images": [],
      "files": {
        "config": "/files/supabase-legacy/template.toml",
        "compose": "/files/supabase-legacy/docker-compose.yml"
      },
      "slug": "supabase-legacy"
    },
    {
      "name": "Supabase",
      "shortDescription": "Open-source Firebase alternative giving you a dedicated Postgres database with auth, storage, and APIs for your apps.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "supabase",
        "url": "https://github.com/supabase"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/supabase/supabase",
        "website": "https://supabase.com/",
        "docs": "https://supabase.com/docs/guides/self-hosting"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source Firebase alternative giving you a dedicated Postgres database with auth, storage, and APIs for your apps.",
      "logo": "/images/supabase/logo.webp",
      "images": [],
      "files": {
        "config": "/files/supabase/template.toml",
        "compose": "/files/supabase/docker-compose.yml"
      },
      "slug": "supabase"
    },
    {
      "name": "Superset (Unofficial)",
      "shortDescription": "Data exploration and visualization platform for building interactive dashboards and charts from SQL databases.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "amancevice",
        "url": "https://github.com/amancevice"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/amancevice/docker-superset",
        "website": "https://superset.apache.org",
        "docs": "https://superset.apache.org/docs/intro"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Data exploration and visualization platform for building interactive dashboards and charts from SQL databases.",
      "logo": "/images/superset-unofficial/logo.webp",
      "images": [],
      "files": {
        "config": "/files/superset-unofficial/template.toml",
        "compose": "/files/superset-unofficial/docker-compose.yml"
      },
      "slug": "superset-unofficial"
    },
    {
      "name": "SurrealDB",
      "shortDescription": "Multi-model database combining relational, document, graph, time-series, vector, and geospatial data in one engine.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "surrealdb",
        "url": "https://github.com/surrealdb"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/surrealdb/surrealdb",
        "website": "https://surrealdb.com",
        "docs": "https://surrealdb.com/docs/surrealdb"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Multi-model database combining relational, document, graph, time-series, vector, and geospatial data in one engine.",
      "logo": "/images/surrealdb/logo.webp",
      "images": [],
      "files": {
        "config": "/files/surrealdb/template.toml",
        "compose": "/files/surrealdb/docker-compose.yml"
      },
      "slug": "surrealdb"
    },
    {
      "name": "Syncthing",
      "shortDescription": "Continuous file synchronization tool that keeps files in sync across your devices in real time, with no central server.",
      "category": {
        "name": "Storage",
        "icon": "hard-drive",
        "description": "Object storage, file sync, backups and the shares and drives behind them.",
        "slug": "storage"
      },
      "developedBy": {
        "label": "syncthing",
        "url": "https://github.com/syncthing"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/syncthing/syncthing",
        "website": "https://syncthing.net/",
        "docs": "https://docs.syncthing.net/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Continuous file synchronization tool that keeps files in sync across your devices in real time, with no central server.",
      "logo": "/images/syncthing/logo.webp",
      "images": [],
      "files": {
        "config": "/files/syncthing/template.toml",
        "compose": "/files/syncthing/docker-compose.yml"
      },
      "slug": "syncthing"
    },
    {
      "name": "Tailscale Exit nodes",
      "shortDescription": "Routes your internet traffic through a chosen device on your Tailscale network, acting as a private VPN gateway.",
      "category": {
        "name": "Networking",
        "icon": "network",
        "description": "Proxies, VPNs, DNS, tunnels and the gateways that put your services on the internet.",
        "slug": "networking"
      },
      "developedBy": {
        "label": "tailscale-dev",
        "url": "https://github.com/tailscale-dev"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/tailscale-dev/docker-guide-code-examples",
        "website": "https://tailscale.com/",
        "docs": "https://tailscale.com/kb/1408/quick-guide-exit-nodes"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Routes your internet traffic through a chosen device on your Tailscale network, acting as a private VPN gateway.",
      "logo": "/images/tailscale-exit-nodes/logo.webp",
      "images": [],
      "files": {
        "config": "/files/tailscale-exit-nodes/template.toml",
        "compose": "/files/tailscale-exit-nodes/docker-compose.yml"
      },
      "slug": "tailscale-exit-nodes"
    },
    {
      "name": "teable",
      "shortDescription": "No-code database built on PostgreSQL with a spreadsheet-style interface, an open alternative to Airtable.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "teableio",
        "url": "https://github.com/teableio"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/teableio/teable",
        "website": "https://teable.io/",
        "docs": "https://help.teable.io/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "No-code database built on PostgreSQL with a spreadsheet-style interface, an open alternative to Airtable.",
      "logo": "/images/teable/logo.webp",
      "images": [],
      "files": {
        "config": "/files/teable/template.toml",
        "compose": "/files/teable/docker-compose.yml"
      },
      "slug": "teable"
    },
    {
      "name": "Tianji",
      "shortDescription": "Combines website analytics, uptime monitoring, and server status tracking in a single self-hosted dashboard.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "msgbyte",
        "url": "https://github.com/msgbyte"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/msgbyte/tianji",
        "website": "https://tianji.dev/",
        "docs": "https://tianji.dev/docs/intro"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Combines website analytics, uptime monitoring, and server status tracking in a single self-hosted dashboard.",
      "logo": "/images/tianji/logo.webp",
      "images": [],
      "files": {
        "config": "/files/tianji/template.toml",
        "compose": "/files/tianji/docker-compose.yml"
      },
      "slug": "tianji"
    },
    {
      "name": "Tolgee",
      "shortDescription": "Web-based localization platform that helps developers and translators manage app translations and i18n keys.",
      "category": {
        "name": "Development",
        "icon": "code",
        "description": "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
        "slug": "development"
      },
      "developedBy": {
        "label": "tolgee",
        "url": "https://github.com/tolgee"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/tolgee/tolgee-platform",
        "website": "https://tolgee.io",
        "docs": "https://tolgee.io/platform"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Web-based localization platform that helps developers and translators manage app translations and i18n keys.",
      "logo": "/images/tolgee/logo.webp",
      "images": [],
      "files": {
        "config": "/files/tolgee/template.toml",
        "compose": "/files/tolgee/docker-compose.yml"
      },
      "slug": "tolgee"
    },
    {
      "name": "Tooljet",
      "shortDescription": "Low-code platform for building internal tools and dashboards that connect to your databases and APIs.",
      "category": {
        "name": "Storage",
        "icon": "hard-drive",
        "description": "Object storage, file sync, backups and the shares and drives behind them.",
        "slug": "storage"
      },
      "developedBy": {
        "label": "ToolJet",
        "url": "https://github.com/ToolJet"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/ToolJet/ToolJet",
        "website": "https://tooljet.ai/",
        "docs": "https://docs.tooljet.ai/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Low-code platform for building internal tools and dashboards that connect to your databases and APIs.",
      "logo": "/images/tooljet/logo.webp",
      "images": [],
      "files": {
        "config": "/files/tooljet/template.toml",
        "compose": "/files/tooljet/docker-compose.yml"
      },
      "slug": "tooljet"
    },
    {
      "name": "Tor Browser",
      "shortDescription": "Runs the Tor Browser inside a container, accessible from any device through a web-based VNC session.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "DomiStyle",
        "url": "https://github.com/DomiStyle"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/DomiStyle/docker-tor-browser",
        "website": "https://www.torproject.org/",
        "docs": "https://hub.docker.com/r/domistyle/tor-browser"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Runs the Tor Browser inside a container, accessible from any device through a web-based VNC session.",
      "logo": "/images/tor-browser/logo.webp",
      "images": [],
      "files": {
        "config": "/files/tor-browser/template.toml",
        "compose": "/files/tor-browser/docker-compose.yml"
      },
      "slug": "tor-browser"
    },
    {
      "name": "TrailBase",
      "shortDescription": "Single-file backend on Rust and SQLite providing type-safe REST APIs, authentication, realtime, and an admin UI.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "trailbase",
        "url": "https://github.com/trailbase"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/trailbase/trailbase",
        "website": "https://trailbase.io/",
        "docs": "https://trailbase.io/getting-started/install"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Single-file backend on Rust and SQLite providing type-safe REST APIs, authentication, realtime, and an admin UI.",
      "logo": "/images/trailbase/logo.webp",
      "images": [],
      "files": {
        "config": "/files/trailbase/template.toml",
        "compose": "/files/trailbase/docker-compose.yml"
      },
      "slug": "trailbase"
    },
    {
      "name": "Trigger.dev",
      "shortDescription": "Background jobs and event-driven workflow platform for running long-running tasks directly from your codebase.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "triggerdotdev",
        "url": "https://github.com/triggerdotdev"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/triggerdotdev/trigger.dev",
        "website": "https://trigger.dev/",
        "docs": "https://trigger.dev/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Background jobs and event-driven workflow platform for running long-running tasks directly from your codebase.",
      "logo": "/images/trigger-dev/logo.webp",
      "images": [],
      "files": {
        "config": "/files/trigger-dev/template.toml",
        "compose": "/files/trigger-dev/docker-compose.yml"
      },
      "slug": "trigger-dev"
    },
    {
      "name": "Trilium",
      "shortDescription": "Hierarchical note-taking app for building large personal knowledge bases with linked, structured notes.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "zadam",
        "url": "https://github.com/zadam"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/zadam/trilium",
        "website": "https://github.com/zadam/trilium",
        "docs": "https://github.com/zadam/trilium/wiki/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Hierarchical note-taking app for building large personal knowledge bases with linked, structured notes.",
      "logo": "/images/trilium/logo.webp",
      "images": [],
      "files": {
        "config": "/files/trilium/template.toml",
        "compose": "/files/trilium/docker-compose.yml"
      },
      "slug": "trilium"
    },
    {
      "name": "TriliumNext",
      "shortDescription": "Community-maintained successor to Trilium Notes, a cross-platform hierarchical knowledge base for personal notes.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "TriliumNext",
        "url": "https://github.com/TriliumNext"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/TriliumNext/Trilium",
        "website": "https://triliumnotes.org/",
        "docs": "https://docs.triliumnotes.org/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Community-maintained successor to Trilium Notes, a cross-platform hierarchical knowledge base for personal notes.",
      "logo": "/images/triliumnext/logo.webp",
      "images": [],
      "files": {
        "config": "/files/triliumnext/template.toml",
        "compose": "/files/triliumnext/docker-compose.yml"
      },
      "slug": "triliumnext"
    },
    {
      "name": "TRMNL BYOS Laravel",
      "shortDescription": "Self-hosted server for managing TRMNL e-ink displays and the content shown on your own devices.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "usetrmnl",
        "url": "https://github.com/usetrmnl"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/usetrmnl/byos_laravel",
        "website": "https://docs.usetrmnl.com/go/diy/byos",
        "docs": "https://github.com/usetrmnl/byos_laravel/blob/main/README.md"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted server for managing TRMNL e-ink displays and the content shown on your own devices.",
      "logo": "/images/trmnl-byos-laravel/logo.webp",
      "images": [],
      "files": {
        "config": "/files/trmnl-byos-laravel/template.toml",
        "compose": "/files/trmnl-byos-laravel/docker-compose.yml"
      },
      "slug": "trmnl-byos-laravel"
    },
    {
      "name": "Tuwunel",
      "shortDescription": "High-performance Matrix homeserver written in Rust, a lightweight alternative to Synapse and successor to Conduwuit.",
      "category": {
        "name": "Communication",
        "icon": "message-circle",
        "description": "Chat, calls, forums and the bots and bridges that connect a team or a community.",
        "slug": "communication"
      },
      "developedBy": {
        "label": "matrix-construct",
        "url": "https://github.com/matrix-construct"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/matrix-construct/tuwunel",
        "website": "https://tuwunel.chat",
        "docs": "https://matrix-construct.github.io/tuwunel/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "High-performance Matrix homeserver written in Rust, a lightweight alternative to Synapse and successor to Conduwuit.",
      "logo": "/images/tuwunel/logo.webp",
      "images": [],
      "files": {
        "config": "/files/tuwunel/template.toml",
        "compose": "/files/tuwunel/docker-compose.yml"
      },
      "slug": "tuwunel"
    },
    {
      "name": "Twenty CRM",
      "shortDescription": "Modern CRM with a spreadsheet-like interface for managing contacts and deals, an open alternative to Salesforce.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "twentyhq",
        "url": "https://github.com/twentyhq"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/twentyhq/twenty",
        "website": "https://twenty.com",
        "docs": "https://docs.twenty.com"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Modern CRM with a spreadsheet-like interface for managing contacts and deals, an open alternative to Salesforce.",
      "logo": "/images/twenty-crm/logo.webp",
      "images": [],
      "files": {
        "config": "/files/twenty-crm/template.toml",
        "compose": "/files/twenty-crm/docker-compose.yml"
      },
      "slug": "twenty-crm"
    },
    {
      "name": "Typebot",
      "shortDescription": "Visual builder for conversational forms and chatbots you can embed on sites or connect to messaging channels.",
      "category": {
        "name": "AI",
        "icon": "sparkles",
        "description": "Local language models, chat interfaces, vector stores and the tooling built around them.",
        "slug": "ai"
      },
      "developedBy": {
        "label": "baptisteArno",
        "url": "https://github.com/baptisteArno"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/baptisteArno/typebot.io",
        "website": "https://typebot.io/",
        "docs": "https://docs.typebot.io/get-started/introduction"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Visual builder for conversational forms and chatbots you can embed on sites or connect to messaging channels.",
      "logo": "/images/typebot/logo.webp",
      "images": [],
      "files": {
        "config": "/files/typebot/template.toml",
        "compose": "/files/typebot/docker-compose.yml"
      },
      "slug": "typebot"
    },
    {
      "name": "Typecho",
      "shortDescription": "Lightweight PHP blogging platform and CMS with Markdown support and multi-database compatibility.",
      "category": {
        "name": "CMS",
        "icon": "layout-template",
        "description": "Blogs, sites, headless content APIs and the storefronts built on top of them.",
        "slug": "cms"
      },
      "developedBy": {
        "label": "typecho",
        "url": "https://github.com/typecho"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/typecho/typecho",
        "website": "https://typecho.org/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Lightweight PHP blogging platform and CMS with Markdown support and multi-database compatibility.",
      "logo": "/images/typecho/logo.webp",
      "images": [],
      "files": {
        "config": "/files/typecho/template.toml",
        "compose": "/files/typecho/docker-compose.yml"
      },
      "slug": "typecho"
    },
    {
      "name": "Typesense",
      "shortDescription": "Fast, typo-tolerant search engine for adding instant search and filtering to apps, an open alternative to Algolia.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "typesense",
        "url": "https://github.com/typesense"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/typesense/typesense",
        "website": "https://typesense.org/",
        "docs": "https://typesense.org/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Fast, typo-tolerant search engine for adding instant search and filtering to apps, an open alternative to Algolia.",
      "logo": "/images/typesense/logo.webp",
      "images": [],
      "files": {
        "config": "/files/typesense/template.toml",
        "compose": "/files/typesense/docker-compose.yml"
      },
      "slug": "typesense"
    },
    {
      "name": "Umami",
      "shortDescription": "Privacy-focused web analytics that tracks visitors without cookies, a lightweight alternative to Google Analytics.",
      "category": {
        "name": "Analytics",
        "icon": "chart-line",
        "description": "Product, web and business analytics, from privacy-first page counters to full dashboards.",
        "slug": "analytics"
      },
      "developedBy": {
        "label": "umami-software",
        "url": "https://github.com/umami-software"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/umami-software/umami",
        "website": "https://umami.is",
        "docs": "https://umami.is/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Privacy-focused web analytics that tracks visitors without cookies, a lightweight alternative to Google Analytics.",
      "logo": "/images/umami/logo.webp",
      "images": [],
      "files": {
        "config": "/files/umami/template.toml",
        "compose": "/files/umami/docker-compose.yml"
      },
      "slug": "umami"
    },
    {
      "name": "Unifi Network",
      "shortDescription": "Network management controller for configuring and monitoring UniFi access points, switches, and gateways.",
      "category": {
        "name": "Networking",
        "icon": "network",
        "description": "Proxies, VPNs, DNS, tunnels and the gateways that put your services on the internet.",
        "slug": "networking"
      },
      "developedBy": {
        "label": "ubiquiti",
        "url": "https://github.com/ubiquiti"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/ubiquiti",
        "website": "https://www.ui.com/",
        "docs": "https://help.ui.com/hc/en-us/articles/360012282453-Self-Hosting-a-UniFi-Network-Server"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Network management controller for configuring and monitoring UniFi access points, switches, and gateways.",
      "logo": "/images/unifi-network/logo.webp",
      "images": [],
      "files": {
        "config": "/files/unifi-network/template.toml",
        "compose": "/files/unifi-network/docker-compose.yml"
      },
      "slug": "unifi-network"
    },
    {
      "name": "Unleash",
      "shortDescription": "Feature flag and toggle management platform for rolling out, testing, and controlling features in production.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "unleash",
        "url": "https://github.com/unleash"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/unleash/unleash",
        "website": "https://www.getunleash.io/",
        "docs": "https://docs.getunleash.io/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Feature flag and toggle management platform for rolling out, testing, and controlling features in production.",
      "logo": "/images/unleash/logo.webp",
      "images": [],
      "files": {
        "config": "/files/unleash/template.toml",
        "compose": "/files/unleash/docker-compose.yml"
      },
      "slug": "unleash"
    },
    {
      "name": "Upsnap",
      "shortDescription": "Network device dashboard built on PocketBase for monitoring hosts and waking them remotely via Wake-on-LAN.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "seriousm4x",
        "url": "https://github.com/seriousm4x"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/seriousm4x/upsnap",
        "website": "https://github.com/seriousm4x/upsnap",
        "docs": "https://github.com/seriousm4x/upsnap#readme"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Network device dashboard built on PocketBase for monitoring hosts and waking them remotely via Wake-on-LAN.",
      "logo": "/images/upsnap/logo.webp",
      "images": [],
      "files": {
        "config": "/files/upsnap/template.toml",
        "compose": "/files/upsnap/docker-compose.yml"
      },
      "slug": "upsnap"
    },
    {
      "name": "Uptime Kuma",
      "shortDescription": "Self-hosted uptime monitor that tracks websites and services and sends alerts when they go down.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "louislam",
        "url": "https://github.com/louislam"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/louislam/uptime-kuma",
        "website": "https://uptime.kuma.pet/",
        "docs": "https://github.com/louislam/uptime-kuma/wiki"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted uptime monitor that tracks websites and services and sends alerts when they go down.",
      "logo": "/images/uptime-kuma/logo.webp",
      "images": [],
      "files": {
        "config": "/files/uptime-kuma/template.toml",
        "compose": "/files/uptime-kuma/docker-compose.yml"
      },
      "slug": "uptime-kuma"
    },
    {
      "name": "useSend",
      "shortDescription": "Transactional email sending service with an API and SMTP, an open alternative to Resend and SendGrid.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "usesend",
        "url": "https://github.com/usesend"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/usesend/usesend",
        "website": "https://usesend.com/",
        "docs": "https://docs.usesend.com/introduction"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Transactional email sending service with an API and SMTP, an open alternative to Resend and SendGrid.",
      "logo": "/images/usesend/logo.webp",
      "images": [],
      "files": {
        "config": "/files/usesend/template.toml",
        "compose": "/files/usesend/docker-compose.yml"
      },
      "slug": "usesend"
    },
    {
      "name": "Valkey",
      "shortDescription": "In-memory key-value store and cache, a community-driven fork of Redis backed by the Linux Foundation.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "valkey-io",
        "url": "https://github.com/valkey-io"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/valkey-io/valkey",
        "website": "https://valkey.io/",
        "docs": "https://github.com/valkey-io/valkey"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "In-memory key-value store and cache, a community-driven fork of Redis backed by the Linux Foundation.",
      "logo": "/images/valkey/logo.webp",
      "images": [],
      "files": {
        "config": "/files/valkey/template.toml",
        "compose": "/files/valkey/docker-compose.yml"
      },
      "slug": "valkey"
    },
    {
      "name": "Vault",
      "shortDescription": "Secrets manager that stores and tightly controls access to API keys, passwords, and certificates with audit logging.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "hashicorp",
        "url": "https://github.com/hashicorp"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/hashicorp/vault",
        "website": "https://www.vaultproject.io/",
        "docs": "https://developer.hashicorp.com/vault/docs"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Secrets manager that stores and tightly controls access to API keys, passwords, and certificates with audit logging.",
      "logo": "/images/vault/logo.webp",
      "images": [],
      "files": {
        "config": "/files/vault/template.toml",
        "compose": "/files/vault/docker-compose.yml"
      },
      "slug": "vault"
    },
    {
      "name": "Vaultwarden",
      "shortDescription": "Lightweight Bitwarden-compatible password manager server written in Rust, formerly known as bitwarden_rs.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "dani-garcia",
        "url": "https://github.com/dani-garcia"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/dani-garcia/vaultwarden",
        "docs": "https://github.com/dani-garcia/vaultwarden/wiki"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Lightweight Bitwarden-compatible password manager server written in Rust, formerly known as bitwarden_rs.",
      "logo": "/images/vaultwarden/logo.webp",
      "images": [],
      "files": {
        "config": "/files/vaultwarden/template.toml",
        "compose": "/files/vaultwarden/docker-compose.yml"
      },
      "slug": "vaultwarden"
    },
    {
      "name": "Verdaccio",
      "shortDescription": "Lightweight private npm registry and proxy for hosting your own Node.js packages and caching public ones.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "verdaccio",
        "url": "https://github.com/verdaccio"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/verdaccio/verdaccio",
        "website": "https://www.verdaccio.org/",
        "docs": "https://www.verdaccio.org/docs/what-is-verdaccio"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Lightweight private npm registry and proxy for hosting your own Node.js packages and caching public ones.",
      "logo": "/images/verdaccio/logo.webp",
      "images": [],
      "files": {
        "config": "/files/verdaccio/template.toml",
        "compose": "/files/verdaccio/docker-compose.yml"
      },
      "slug": "verdaccio"
    },
    {
      "name": "Vikunja",
      "shortDescription": "Open-source to-do and project management app for organizing tasks across lists, boards, and calendar views.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "go-vikunja",
        "url": "https://github.com/go-vikunja"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/go-vikunja/vikunja",
        "website": "https://vikunja.io/",
        "docs": "https://vikunja.io/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source to-do and project management app for organizing tasks across lists, boards, and calendar views.",
      "logo": "/images/vikunja/logo.webp",
      "images": [],
      "files": {
        "config": "/files/vikunja/template.toml",
        "compose": "/files/vikunja/docker-compose.yml"
      },
      "slug": "vikunja"
    },
    {
      "name": "Wallos",
      "shortDescription": "Subscription tracker that records recurring payments and gives you a clear view of your spending over time.",
      "category": {
        "name": "Finance",
        "icon": "wallet",
        "description": "Accounting, invoicing, budgeting, payments and the ledgers a business runs on.",
        "slug": "finance"
      },
      "developedBy": {
        "label": "ellite",
        "url": "https://github.com/ellite"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/ellite/wallos",
        "website": "https://wallosapp.com",
        "docs": "https://github.com/ellite/wallos?tab=readme-ov-file#getting-started"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Subscription tracker that records recurring payments and gives you a clear view of your spending over time.",
      "logo": "/images/wallos/logo.webp",
      "images": [],
      "files": {
        "config": "/files/wallos/template.toml",
        "compose": "/files/wallos/docker-compose.yml"
      },
      "slug": "wallos"
    },
    {
      "name": "Wanderer",
      "shortDescription": "Self-hosted trail database and route tracker for recording, browsing, and sharing your hikes and outdoor activities.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "flomp",
        "url": "https://github.com/flomp"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/flomp/wanderer",
        "website": "https://wanderer.app",
        "docs": "https://github.com/flomp/wanderer#readme"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted trail database and route tracker for recording, browsing, and sharing your hikes and outdoor activities.",
      "logo": "/images/wanderer/logo.webp",
      "images": [],
      "files": {
        "config": "/files/wanderer/template.toml",
        "compose": "/files/wanderer/docker-compose.yml"
      },
      "slug": "wanderer"
    },
    {
      "name": "Web-Check",
      "shortDescription": "Website analysis tool that reveals a site's security headers, performance, DNS, SSL, and SEO details in one report.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "lissy93",
        "url": "https://github.com/lissy93"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/lissy93/web-check",
        "website": "https://github.com/lissy93/web-check",
        "docs": "https://github.com/lissy93/web-check"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Website analysis tool that reveals a site's security headers, performance, DNS, SSL, and SEO details in one report.",
      "logo": "/images/web-check/logo.webp",
      "images": [],
      "files": {
        "config": "/files/web-check/template.toml",
        "compose": "/files/web-check/docker-compose.yml"
      },
      "slug": "web-check"
    },
    {
      "name": "WG-Easy",
      "shortDescription": "WireGuard VPN server with a simple web UI for creating clients, sharing QR configs, and managing connections.",
      "category": {
        "name": "Networking",
        "icon": "network",
        "description": "Proxies, VPNs, DNS, tunnels and the gateways that put your services on the internet.",
        "slug": "networking"
      },
      "developedBy": {
        "label": "wg-easy",
        "url": "https://github.com/wg-easy"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/wg-easy/wg-easy",
        "website": "https://wg-easy.github.io/",
        "docs": "https://github.com/wg-easy/wg-easy/wiki"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "WireGuard VPN server with a simple web UI for creating clients, sharing QR configs, and managing connections.",
      "logo": "/images/wg-easy/logo.webp",
      "images": [],
      "files": {
        "config": "/files/wg-easy/template.toml",
        "compose": "/files/wg-easy/docker-compose.yml"
      },
      "slug": "wg-easy"
    },
    {
      "name": "WhatsApp API Multi Device Version",
      "shortDescription": "Self-hosted WhatsApp HTTP API for sending and receiving chats, images, and voice notes from your own server.",
      "category": {
        "name": "Communication",
        "icon": "message-circle",
        "description": "Chat, calls, forums and the bots and bridges that connect a team or a community.",
        "slug": "communication"
      },
      "developedBy": {
        "label": "aldinokemal",
        "url": "https://github.com/aldinokemal"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/aldinokemal/go-whatsapp-web-multidevice",
        "website": "https://github.com/aldinokemal/go-whatsapp-web-multidevice",
        "docs": "https://github.com/aldinokemal/go-whatsapp-web-multidevice"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted WhatsApp HTTP API for sending and receiving chats, images, and voice notes from your own server.",
      "logo": "/images/whatsapp-api-multi-device-version/logo.webp",
      "images": [],
      "files": {
        "config": "/files/whatsapp-api-multi-device-version/template.toml",
        "compose": "/files/whatsapp-api-multi-device-version/docker-compose.yml"
      },
      "slug": "whatsapp-api-multi-device-version"
    },
    {
      "name": "Wiki.js",
      "shortDescription": "Extensible open-source wiki platform for building documentation and knowledge bases with Markdown and access control.",
      "category": {
        "name": "Productivity",
        "icon": "list-todo",
        "description": "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
        "slug": "productivity"
      },
      "developedBy": {
        "label": "requarks",
        "url": "https://github.com/requarks"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/requarks/wiki",
        "website": "https://js.wiki/",
        "docs": "https://docs.requarks.io/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Extensible open-source wiki platform for building documentation and knowledge bases with Markdown and access control.",
      "logo": "/images/wiki-js/logo.webp",
      "images": [],
      "files": {
        "config": "/files/wiki-js/template.toml",
        "compose": "/files/wiki-js/docker-compose.yml"
      },
      "slug": "wiki-js"
    },
    {
      "name": "Windmill",
      "shortDescription": "Developer platform for turning scripts into workflows and internal apps, an open-source alternative to Retool and Airplane.",
      "category": {
        "name": "Automation",
        "icon": "workflow",
        "description": "Workflow builders, schedulers and low-code tools that wire your services together.",
        "slug": "automation"
      },
      "developedBy": {
        "label": "windmill-labs",
        "url": "https://github.com/windmill-labs"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/windmill-labs/windmill",
        "website": "https://www.windmill.dev/",
        "docs": "https://docs.windmill.dev/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Developer platform for turning scripts into workflows and internal apps, an open-source alternative to Retool and Airplane.",
      "logo": "/images/windmill/logo.webp",
      "images": [],
      "files": {
        "config": "/files/windmill/template.toml",
        "compose": "/files/windmill/docker-compose.yml"
      },
      "slug": "windmill"
    },
    {
      "name": "Windows (dockerized)",
      "shortDescription": "Runs a full Windows desktop inside a Docker container, accessible through your browser via a built-in VNC viewer.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "dockur",
        "url": "https://github.com/dockur"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/dockur/windows",
        "docs": "https://github.com/dockur/windows?tab=readme-ov-file#how-do-i-use-it"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Runs a full Windows desktop inside a Docker container, accessible through your browser via a built-in VNC viewer.",
      "logo": "/images/windows-dockerized/logo.webp",
      "images": [],
      "files": {
        "config": "/files/windows-dockerized/template.toml",
        "compose": "/files/windows-dockerized/docker-compose.yml"
      },
      "slug": "windows-dockerized"
    },
    {
      "name": "Wordpress",
      "shortDescription": "Open-source content management system for building and running websites and blogs, powering much of the web.",
      "category": {
        "name": "CMS",
        "icon": "layout-template",
        "description": "Blogs, sites, headless content APIs and the storefronts built on top of them.",
        "slug": "cms"
      },
      "developedBy": {
        "label": "WordPress",
        "url": "https://github.com/WordPress"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/WordPress/WordPress",
        "website": "https://wordpress.org/",
        "docs": "https://wordpress.org/documentation/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Open-source content management system for building and running websites and blogs, powering much of the web.",
      "logo": "/images/wordpress/logo.webp",
      "images": [],
      "files": {
        "config": "/files/wordpress/template.toml",
        "compose": "/files/wordpress/docker-compose.yml"
      },
      "slug": "wordpress"
    },
    {
      "name": "WuzAPI",
      "shortDescription": "RESTful WhatsApp API gateway supporting multiple devices and concurrent sessions for messaging automation.",
      "category": {
        "name": "Communication",
        "icon": "message-circle",
        "description": "Chat, calls, forums and the bots and bridges that connect a team or a community.",
        "slug": "communication"
      },
      "developedBy": {
        "label": "asternic",
        "url": "https://github.com/asternic"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/asternic/wuzapi",
        "website": "https://www.wuzapi.app/",
        "docs": "https://github.com/asternic/wuzapi/blob/main/README.md"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "RESTful WhatsApp API gateway supporting multiple devices and concurrent sessions for messaging automation.",
      "logo": "/images/wuzapi/logo.webp",
      "images": [],
      "files": {
        "config": "/files/wuzapi/template.toml",
        "compose": "/files/wuzapi/docker-compose.yml"
      },
      "slug": "wuzapi"
    },
    {
      "name": "XSSHunter",
      "shortDescription": "Security testing platform for detecting blind cross-site scripting flaws, built for pentesters and bug bounty hunters.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "rs-loves-bugs",
        "url": "https://github.com/rs-loves-bugs"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/rs-loves-bugs/xsshunter",
        "website": "https://github.com/rs-loves-bugs/xsshunter",
        "docs": "https://github.com/rs-loves-bugs/xsshunter#requirements"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Security testing platform for detecting blind cross-site scripting flaws, built for pentesters and bug bounty hunters.",
      "logo": "/images/xsshunter/logo.webp",
      "images": [],
      "files": {
        "config": "/files/xsshunter/template.toml",
        "compose": "/files/xsshunter/docker-compose.yml"
      },
      "slug": "xsshunter"
    },
    {
      "name": "Yamtrack",
      "shortDescription": "Self-hosted tracker for anime, manga, games, movies, and TV shows that keeps your watch and read progress in one place.",
      "category": {
        "name": "Database",
        "icon": "database",
        "description": "Relational, document and key-value stores, plus the tools to browse and manage them.",
        "slug": "database"
      },
      "developedBy": {
        "label": "fuzzygrim",
        "url": "https://github.com/fuzzygrim"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/fuzzygrim/yamtrack",
        "website": "https://github.com/fuzzygrim/yamtrack",
        "docs": "https://github.com/fuzzygrim/yamtrack"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted tracker for anime, manga, games, movies, and TV shows that keeps your watch and read progress in one place.",
      "logo": "/images/yamtrack/logo.webp",
      "images": [],
      "files": {
        "config": "/files/yamtrack/template.toml",
        "compose": "/files/yamtrack/docker-compose.yml"
      },
      "slug": "yamtrack"
    },
    {
      "name": "YOURLS",
      "shortDescription": "Self-hosted URL shortener written in PHP, giving you your own link service with stats and a plugin system, like Bitly.",
      "category": {
        "name": "Other",
        "icon": "package",
        "description": "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
        "slug": "other"
      },
      "developedBy": {
        "label": "YOURLS",
        "url": "https://github.com/YOURLS"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/YOURLS/YOURLS",
        "website": "https://yourls.org/",
        "docs": "https://yourls.org/#documentation"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Self-hosted URL shortener written in PHP, giving you your own link service with stats and a plugin system, like Bitly.",
      "logo": "/images/yourls/logo.webp",
      "images": [],
      "files": {
        "config": "/files/yourls/template.toml",
        "compose": "/files/yourls/docker-compose.yml"
      },
      "slug": "yourls"
    },
    {
      "name": "yt-dlp-webui",
      "shortDescription": "Web interface for yt-dlp that lets you queue and download video and audio from many sites without the command line.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "marcopiovanello",
        "url": "https://github.com/marcopiovanello"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/marcopiovanello/yt-dlp-web-ui",
        "website": "https://github.com/marcopiovanello/yt-dlp-web-ui",
        "docs": "https://github.com/marcopiovanello/yt-dlp-web-ui"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Web interface for yt-dlp that lets you queue and download video and audio from many sites without the command line.",
      "logo": null,
      "images": [],
      "files": {
        "config": "/files/yt-dlp-webui/template.toml",
        "compose": "/files/yt-dlp-webui/docker-compose.yml"
      },
      "slug": "yt-dlp-webui"
    },
    {
      "name": "Zabbix",
      "shortDescription": "Enterprise-grade monitoring platform for networks, servers, and cloud services with metrics, alerting, and dashboards.",
      "category": {
        "name": "Monitoring",
        "icon": "activity",
        "description": "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
        "slug": "monitoring"
      },
      "developedBy": {
        "label": "zabbix",
        "url": "https://github.com/zabbix"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/zabbix/zabbix-docker",
        "website": "https://www.zabbix.com/",
        "docs": "https://www.zabbix.com/documentation/current/en/manual/installation/containers"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Enterprise-grade monitoring platform for networks, servers, and cloud services with metrics, alerting, and dashboards.",
      "logo": "/images/zabbix/logo.webp",
      "images": [],
      "files": {
        "config": "/files/zabbix/template.toml",
        "compose": "/files/zabbix/docker-compose.yml"
      },
      "slug": "zabbix"
    },
    {
      "name": "Zipline",
      "shortDescription": "ShareX-compatible file and image upload server with shortened links, an easy setup, and a feature-rich dashboard.",
      "category": {
        "name": "Media",
        "icon": "clapperboard",
        "description": "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
        "slug": "media"
      },
      "developedBy": {
        "label": "diced",
        "url": "https://github.com/diced"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/diced/zipline",
        "website": "https://zipline.diced.sh/",
        "docs": "https://zipline.diced.sh/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "ShareX-compatible file and image upload server with shortened links, an easy setup, and a feature-rich dashboard.",
      "logo": "/images/zipline/logo.webp",
      "images": [],
      "files": {
        "config": "/files/zipline/template.toml",
        "compose": "/files/zipline/docker-compose.yml"
      },
      "slug": "zipline"
    },
    {
      "name": "Zitadel",
      "shortDescription": "Identity and access management platform with multi-tenancy, supporting OpenID Connect, SAML, and OAuth 2.0.",
      "category": {
        "name": "Security",
        "icon": "shield",
        "description": "Identity providers, single sign-on, password vaults and secret management.",
        "slug": "security"
      },
      "developedBy": {
        "label": "zitadel",
        "url": "https://github.com/zitadel"
      },
      "submittedBy": {
        "label": "Deplo",
        "url": "https://github.com/DeploCloud"
      },
      "links": {
        "github": "https://github.com/zitadel/zitadel",
        "website": "https://zitadel.com/",
        "docs": "https://zitadel.com/docs/"
      },
      "lastUpdate": new Date("2026-08-14T00:00:00.000Z"),
      "createdAt": new Date("2026-08-14T00:00:00.000Z"),
      "description": "Identity and access management platform with multi-tenancy, supporting OpenID Connect, SAML, and OAuth 2.0.",
      "logo": "/images/zitadel/logo.webp",
      "images": [],
      "files": {
        "config": "/files/zitadel/template.toml",
        "compose": "/files/zitadel/docker-compose.yml"
      },
      "slug": "zitadel"
    }
  ]
} as const satisfies { categories: readonly Category[]; templates: readonly Template[] };

export const categories: readonly Category[] = data.categories;
export const templates: readonly Template[] = data.templates;
export const version = "4d4417bc7d63304b3dd030301585ea3da8d577092cfee958617597466eefb011";
