import type { TemplateRaw } from "../../schemas";

export default {
  name: "AList",
  shortDescription: "File listing and WebDAV server that unifies local and cloud storage providers behind one interface.",
  category: {"name":"Storage","icon":"hard-drive","description":"Object storage, file sync, backups and the shares and drives behind them."},
  developedBy: {"label":"AlistGo","url":"https://github.com/AlistGo"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/AlistGo/alist","website":"https://alistgo.com/","docs":"https://alistgo.com/guide/install/docker.html"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
