import type { TemplateRaw } from "../../schemas";

export default {
  name: "Neko",
  shortDescription: "Virtual browser that runs inside Docker and streams its session over WebRTC for shared browsing and watch parties.",
  category: {"name":"Storage","icon":"hard-drive","description":"Object storage, file sync, backups and the shares and drives behind them."},
  developedBy: {"label":"m1k1o","url":"https://github.com/m1k1o"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/m1k1o/neko","website":"https://github.com/m1k1o/neko","docs":"https://github.com/m1k1o/neko"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
