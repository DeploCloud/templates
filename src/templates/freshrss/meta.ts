import type { TemplateRaw } from "../../schemas";

export default {
  name: "FreshRSS",
  shortDescription: "Lightweight self-hosted RSS and Atom aggregator for following news feeds, extensible with themes and plugins.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"FreshRSS","url":"https://github.com/FreshRSS"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/FreshRSS/FreshRSS","website":"https://freshrss.org/","docs":"https://freshrss.github.io/FreshRSS/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
