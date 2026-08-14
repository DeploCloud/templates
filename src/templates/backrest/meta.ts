import type { TemplateRaw } from "../../schemas";

export default {
  name: "Backrest",
  shortDescription: "Web UI for restic backups that schedules snapshots, browses repositories, and restores files from the browser.",
  category: {"name":"Storage","icon":"hard-drive","description":"Object storage, file sync, backups and the shares and drives behind them."},
  developedBy: {"label":"garethgeorge","url":"https://github.com/garethgeorge"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/garethgeorge/backrest","website":"https://garethgeorge.github.io/backrest","docs":"https://garethgeorge.github.io/backrest/introduction/getting-started"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
