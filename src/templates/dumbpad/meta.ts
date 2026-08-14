import type { TemplateRaw } from "../../schemas";

export default {
  name: "DumbPad",
  shortDescription: "Minimal notepad app for jotting quick notes, secured with a PIN and needing no database.",
  category: {"name":"Other","icon":"package","description":"Everything else worth self-hosting: games, utilities and the odd one-off tool."},
  developedBy: {"label":"dumbwareio","url":"https://github.com/dumbwareio"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/dumbwareio/dumbpad","website":"https://www.dumbware.io/software/DumbPad/","docs":"https://github.com/dumbwareio/dumbpad"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
