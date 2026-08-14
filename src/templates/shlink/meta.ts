import type { TemplateRaw } from "../../schemas";

export default {
  name: "Shlink",
  shortDescription: "Self-hosted URL shortener that serves short links under your own domain, with detailed click analytics and a REST API.",
  category: {"name":"Storage","icon":"hard-drive","description":"Object storage, file sync, backups and the shares and drives behind them."},
  developedBy: {"label":"shlinkio","url":"https://github.com/shlinkio"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/shlinkio/shlink","website":"https://shlink.io","docs":"https://shlink.io/documentation"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
