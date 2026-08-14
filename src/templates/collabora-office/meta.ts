import type { TemplateRaw } from "../../schemas";

export default {
  name: "Collabora Office",
  shortDescription: "Online office suite for collaboratively editing documents, spreadsheets, and presentations in the browser.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"CollaboraOnline","url":"https://github.com/CollaboraOnline"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/CollaboraOnline","website":"https://collaboraonline.com","docs":"https://sdk.collaboraonline.com/docs"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
