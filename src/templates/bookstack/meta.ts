import type { TemplateRaw } from "../../schemas";

export default {
  name: "BookStack",
  shortDescription: "Self-hosted wiki and documentation platform that organizes content into books, chapters, and pages.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"BookStackApp","url":"https://github.com/BookStackApp"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/BookStackApp/BookStack","website":"https://www.bookstackapp.com","docs":"https://www.bookstackapp.com/docs"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
