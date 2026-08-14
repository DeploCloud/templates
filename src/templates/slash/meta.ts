import type { TemplateRaw } from "../../schemas";

export default {
  name: "Slash",
  shortDescription: "Self-hosted bookmarking service and link shortener for organizing and sharing your favorite links in one place.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"yourselfhosted","url":"https://github.com/yourselfhosted"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/yourselfhosted/slash","website":"https://github.com/yourselfhosted/slash#readme","docs":"https://github.com/yourselfhosted/slash/wiki"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
