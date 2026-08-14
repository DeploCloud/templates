import type { TemplateRaw } from "../../schemas";

export default {
  name: "CommaFeed",
  shortDescription: "Lightweight, open-source RSS feed reader and news aggregator backed by PostgreSQL.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"Athou","url":"https://github.com/Athou"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/Athou/commafeed","website":"https://www.commafeed.com/","docs":"https://github.com/Athou/commafeed/wiki"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
