import type { TemplateRaw } from "../../schemas";

export default {
  name: "Owncast",
  shortDescription: "Self-hosted live streaming and chat server that works with existing broadcast software as a YouTube Live alternative.",
  category: {"name":"Communication","icon":"message-circle","description":"Chat, calls, forums and the bots and bridges that connect a team or a community."},
  developedBy: {"label":"owncast","url":"https://github.com/owncast"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/owncast/owncast","website":"https://owncast.online/","docs":"https://owncast.online/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
