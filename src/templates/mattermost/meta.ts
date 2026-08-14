import type { TemplateRaw } from "../../schemas";

export default {
  name: "Mattermost",
  shortDescription: "Open-source team messaging platform and self-hosted alternative to Slack for chat and collaboration.",
  category: {"name":"Communication","icon":"message-circle","description":"Chat, calls, forums and the bots and bridges that connect a team or a community."},
  developedBy: {"label":"mattermost","url":"https://github.com/mattermost"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/mattermost/mattermost","website":"https://mattermost.com/","docs":"https://docs.mattermost.com/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
