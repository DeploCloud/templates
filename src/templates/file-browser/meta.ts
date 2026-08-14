import type { TemplateRaw } from "../../schemas";

export default {
  name: "File Browser",
  shortDescription: "Standalone web file manager for uploading, editing, and previewing files, with per-user directories and access.",
  category: {"name":"Storage","icon":"hard-drive","description":"Object storage, file sync, backups and the shares and drives behind them."},
  developedBy: {"label":"filebrowser","url":"https://github.com/filebrowser"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/filebrowser/filebrowser","website":"https://filebrowser.org/","docs":"https://filebrowser.org/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
