import type { TemplateRaw } from "../../schemas";

export default {
  name: "Focalboard",
  shortDescription: "Open-source Kanban and project management board for technical teams, an alternative to Trello and Asana.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"sysblok","url":"https://github.com/sysblok"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/sysblok/focalboard","website":"https://focalboard.com","docs":"https://www.focalboard.com/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
