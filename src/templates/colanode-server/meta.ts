import type { TemplateRaw } from "../../schemas";

export default {
  name: "Colanode Server",
  shortDescription: "Local-first, open-source collaboration workspace that combines Slack-style chat and Notion-style docs.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"colanode","url":"https://github.com/colanode"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/colanode/colanode","website":"https://colanode.com","docs":"https://colanode.com/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
