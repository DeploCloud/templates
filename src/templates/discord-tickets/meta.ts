import type { TemplateRaw } from "../../schemas";

export default {
  name: "Discord Tickets",
  shortDescription: "Discord bot that creates per-user support ticket channels, letting communities handle help requests in private threads.",
  category: {"name":"Communication","icon":"message-circle","description":"Chat, calls, forums and the bots and bridges that connect a team or a community."},
  developedBy: {"label":"discord-tickets","url":"https://github.com/discord-tickets"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/discord-tickets/bot","website":"https://discordtickets.app","docs":"https://discordtickets.app/self-hosting/installation/docker/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
