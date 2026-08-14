import type { TemplateRaw } from "../../schemas";

export default {
  name: "RSSHub",
  shortDescription: "Extensible RSS feed generator that turns thousands of websites and services into subscribable feeds.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"DIYgod","url":"https://github.com/DIYgod"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/DIYgod/RSSHub","website":"https://rsshub.app/","docs":"https://docs.rsshub.app/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
