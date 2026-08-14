import type { TemplateRaw } from "../../schemas";

export default {
  name: "DumbDrop",
  shortDescription: "Stripped-down file-sharing service for quick uploads, requiring no database or account.",
  category: {"name":"Storage","icon":"hard-drive","description":"Object storage, file sync, backups and the shares and drives behind them."},
  developedBy: {"label":"dumbwareio","url":"https://github.com/dumbwareio"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/dumbwareio/dumbdrop","website":"https://www.dumbware.io/software/DumbDrop/","docs":"https://github.com/dumbwareio/dumbdrop"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
