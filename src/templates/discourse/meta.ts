import type { TemplateRaw } from "../../schemas";

export default {
  name: "Discourse",
  shortDescription: "Modern forum platform for community discussions, doubling as a mailing list or real-time chat room.",
  category: {"name":"Communication","icon":"message-circle","description":"Chat, calls, forums and the bots and bridges that connect a team or a community."},
  developedBy: {"label":"discourse","url":"https://github.com/discourse"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/discourse/discourse","website":"https://www.discourse.org/","docs":"https://meta.discourse.org/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
