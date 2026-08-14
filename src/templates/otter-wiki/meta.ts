import type { TemplateRaw } from "../../schemas";

export default {
  name: "Otter Wiki",
  shortDescription: "Lightweight wiki engine built with Python and Flask, storing markdown pages in Git for versioned documentation.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"redimp","url":"https://github.com/redimp"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/redimp/otterwiki","website":"https://otterwiki.com/","docs":"https://github.com/redimp/otterwiki/wiki"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
