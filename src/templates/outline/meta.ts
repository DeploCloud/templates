import type { TemplateRaw } from "../../schemas";

export default {
  name: "Outline",
  shortDescription: "Self-hosted knowledge base and team wiki with fast search and markdown editing for documentation and collaboration.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"outline","url":"https://github.com/outline"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/outline/outline","website":"https://getoutline.com/","docs":"https://docs.getoutline.com/s/guide"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
