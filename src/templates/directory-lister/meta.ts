import type { TemplateRaw } from "../../schemas";

export default {
  name: "Directory Lister",
  shortDescription: "Lightweight PHP app that turns any web-accessible folder into a browsable, navigable file listing.",
  category: {"name":"Storage","icon":"hard-drive","description":"Object storage, file sync, backups and the shares and drives behind them."},
  developedBy: {"label":"DirectoryLister","url":"https://github.com/DirectoryLister"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/DirectoryLister/DirectoryLister","website":"https://www.directorylister.com/","docs":"https://docs.directorylister.com/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
