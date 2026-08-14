import type { TemplateRaw } from "../../schemas";

export default {
  name: "Pyrodactyl",
  shortDescription: "Pterodactyl-based game server panel rebuilt to be faster, smaller, and more accessible to manage.",
  category: {"name":"Other","icon":"package","description":"Everything else worth self-hosting: games, utilities and the odd one-off tool."},
  developedBy: {"label":"pyrohost","url":"https://github.com/pyrohost"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/pyrohost/pyrodactyl","website":"https://pyrodactyl.dev","docs":"https://pyrodactyl.dev/docs"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
