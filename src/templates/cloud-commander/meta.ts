import type { TemplateRaw } from "../../schemas";

export default {
  name: "Cloud Commander",
  shortDescription: "Web-based file manager with a built-in console and text editor for working with server files in the browser.",
  category: {"name":"Storage","icon":"hard-drive","description":"Object storage, file sync, backups and the shares and drives behind them."},
  developedBy: {"label":"coderaiser","url":"https://github.com/coderaiser"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/coderaiser/cloudcmd","website":"https://cloudcmd.io","docs":"https://cloudcmd.io/#install"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
