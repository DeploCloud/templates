import type { TemplateRaw } from "../../schemas";

export default {
  name: "Anytype",
  shortDescription: "Local-first, encrypted knowledge base for notes, tasks, and wikis built from linked objects you define.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"grishy","url":"https://github.com/grishy"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/grishy/any-sync-bundle","docs":"https://doc.anytype.io/anytype-docs","website":"https://anytype.io/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
