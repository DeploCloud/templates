import type { TemplateRaw } from "../../schemas";

export default {
  name: "Memos",
  shortDescription: "Open-source note-taking app for quickly capturing, organizing, and sharing lightweight notes and memos.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"usememos","url":"https://github.com/usememos"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/usememos/memos","website":"https://www.usememos.com/","docs":"https://www.usememos.com/docs"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
