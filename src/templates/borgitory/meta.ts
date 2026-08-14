import type { TemplateRaw } from "../../schemas";

export default {
  name: "Borgitory",
  shortDescription: "Web interface for BorgBackup that browses, mounts via FUSE, and manages your backup repositories.",
  category: {"name":"Storage","icon":"hard-drive","description":"Object storage, file sync, backups and the shares and drives behind them."},
  developedBy: {"label":"mlapaglia","url":"https://github.com/mlapaglia"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/mlapaglia/borgitory","website":"https://github.com/mlapaglia/borgitory","docs":"https://github.com/mlapaglia/borgitory"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
