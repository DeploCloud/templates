import type { TemplateRaw } from "../../schemas";

export default {
  name: "Rocketchat",
  shortDescription: "Open-source team chat platform for messaging, channels, and collaboration, positioned as a Slack alternative.",
  category: {"name":"Communication","icon":"message-circle","description":"Chat, calls, forums and the bots and bridges that connect a team or a community."},
  developedBy: {"label":"RocketChat","url":"https://github.com/RocketChat"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/RocketChat/Rocket.Chat","website":"https://rocket.chat/","docs":"https://rocket.chat/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
