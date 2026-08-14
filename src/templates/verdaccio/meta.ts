import type { TemplateRaw } from "../../schemas";

export default {
  name: "Verdaccio",
  shortDescription: "Lightweight private npm registry and proxy for hosting your own Node.js packages and caching public ones.",
  category: {"name":"Other","icon":"package","description":"Everything else worth self-hosting: games, utilities and the odd one-off tool."},
  developedBy: {"label":"verdaccio","url":"https://github.com/verdaccio"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/verdaccio/verdaccio","website":"https://www.verdaccio.org/","docs":"https://www.verdaccio.org/docs/what-is-verdaccio"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
