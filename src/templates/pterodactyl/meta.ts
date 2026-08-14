import type { TemplateRaw } from "../../schemas";

export default {
  name: "Pterodactyl",
  shortDescription: "Open-source game server management panel for deploying and controlling game servers in isolated containers.",
  category: {"name":"Other","icon":"package","description":"Everything else worth self-hosting: games, utilities and the odd one-off tool."},
  developedBy: {"label":"pterodactyl","url":"https://github.com/pterodactyl"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/pterodactyl/panel","website":"https://pterodactyl.io","docs":"https://pterodactyl.io/project/introduction.html"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
