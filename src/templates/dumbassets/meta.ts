import type { TemplateRaw } from "../../schemas";

export default {
  name: "DumbAssets",
  shortDescription: "Minimal asset tracker for logging your belongings and equipment, with no database or login to set up.",
  category: {"name":"Other","icon":"package","description":"Everything else worth self-hosting: games, utilities and the odd one-off tool."},
  developedBy: {"label":"dumbwareio","url":"https://github.com/dumbwareio"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/dumbwareio/dumbassets","website":"https://www.dumbware.io/software/DumbAssets/","docs":"https://github.com/dumbwareio/dumbassets"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
