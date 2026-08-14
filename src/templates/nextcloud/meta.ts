import type { TemplateRaw } from "../../schemas";

export default {
  name: "Nextcloud",
  shortDescription: "File sync and storage platform with built-in office, calendar, and chat for self-hosted collaboration and remote work.",
  category: {"name":"Storage","icon":"hard-drive","description":"Object storage, file sync, backups and the shares and drives behind them."},
  developedBy: {"label":"nextcloud","url":"https://github.com/nextcloud"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/nextcloud/docker","website":"https://nextcloud.com/","docs":"https://docs.nextcloud.com/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
