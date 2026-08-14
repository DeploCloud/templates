import type { TemplateRaw } from "../../schemas";

export default {
  name: "Mumble",
  shortDescription: "Low-latency, high-quality voice chat server for gaming and team communication over VoIP.",
  category: {"name":"Communication","icon":"message-circle","description":"Chat, calls, forums and the bots and bridges that connect a team or a community."},
  developedBy: {"label":"mumble-voip","url":"https://github.com/mumble-voip"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/mumble-voip/mumble","website":"https://www.mumble.info/","docs":"https://wiki.mumble.info/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
