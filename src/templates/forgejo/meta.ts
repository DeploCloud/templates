import type { TemplateRaw } from "../../schemas";

export default {
  name: "Forgejo",
  shortDescription: "Lightweight self-hosted Git forge for hosting repositories, issues, and pull requests with low maintenance.",
  category: {"name":"Storage","icon":"hard-drive","description":"Object storage, file sync, backups and the shares and drives behind them."},
  developedBy: {"label":"forgejo","url":"https://github.com/forgejo"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://codeberg.org/forgejo/forgejo","website":"https://forgejo.org/","docs":"https://forgejo.org/docs/latest/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
