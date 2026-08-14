import type { TemplateRaw } from "../../schemas";

export default {
  name: "YOURLS",
  shortDescription: "Self-hosted URL shortener written in PHP, giving you your own link service with stats and a plugin system, like Bitly.",
  category: {"name":"Other","icon":"package","description":"Everything else worth self-hosting: games, utilities and the odd one-off tool."},
  developedBy: {"label":"YOURLS","url":"https://github.com/YOURLS"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/YOURLS/YOURLS","website":"https://yourls.org/","docs":"https://yourls.org/#documentation"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
