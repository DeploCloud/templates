import type { TemplateRaw } from "../../schemas";

export default {
  name: "Linkwarden",
  shortDescription: "Collaborative bookmark manager that collects, organizes, and archives full webpage snapshots for safekeeping.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"linkwarden","url":"https://github.com/linkwarden"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/linkwarden/linkwarden","website":"https://linkwarden.app/","docs":"https://docs.linkwarden.app/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
