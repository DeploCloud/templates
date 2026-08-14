import type { TemplateRaw } from "../../schemas";

export default {
  name: "CodeX Docs",
  shortDescription: "Documentation site built on the Editor.js block editor for writing and publishing technical docs.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"codex-team","url":"https://github.com/codex-team"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/codex-team/codex.docs","website":"https://codex.so","docs":"https://docs.codex.so"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
