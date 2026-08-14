import type { TemplateRaw } from "../../schemas";

export default {
  name: "Huly",
  shortDescription: "All-in-one project management platform combining issue tracking, docs, and chat as an alternative to Jira and Notion.",
  category: {"name":"Communication","icon":"message-circle","description":"Chat, calls, forums and the bots and bridges that connect a team or a community."},
  developedBy: {"label":"hcengineering","url":"https://github.com/hcengineering"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/hcengineering/huly-selfhost","website":"https://huly.io/","docs":"https://docs.huly.io/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
