import type { TemplateRaw } from "../../schemas";

export default {
  name: "Hoarder",
  shortDescription: "Open-source bookmark and read-it-later app that auto-tags saved links, notes, and images using AI.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"hoarder","url":"https://github.com/hoarder"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/hoarder/hoarder","website":"https://hoarder.app/","docs":"https://docs.hoarder.app/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
