import type { TemplateRaw } from "../../schemas";

export default {
  name: "Vikunja",
  shortDescription: "Open-source to-do and project management app for organizing tasks across lists, boards, and calendar views.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"go-vikunja","url":"https://github.com/go-vikunja"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/go-vikunja/vikunja","website":"https://vikunja.io/","docs":"https://vikunja.io/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
