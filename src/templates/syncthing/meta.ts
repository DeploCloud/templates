import type { TemplateRaw } from "../../schemas";

export default {
  name: "Syncthing",
  shortDescription: "Continuous file synchronization tool that keeps files in sync across your devices in real time, with no central server.",
  category: {"name":"Storage","icon":"hard-drive","description":"Object storage, file sync, backups and the shares and drives behind them."},
  developedBy: {"label":"syncthing","url":"https://github.com/syncthing"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/syncthing/syncthing","website":"https://syncthing.net/","docs":"https://docs.syncthing.net/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
