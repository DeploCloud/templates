import type { TemplateRaw } from "../../schemas";

export default {
  name: "Confluence",
  shortDescription: "Team workspace from Atlassian for creating, organizing, and collaborating on documentation and project knowledge.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"confluence.atlassian.com","url":"https://confluence.atlassian.com"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"website":"https://confluence.atlassian.com","docs":"https://confluence.atlassian.com/doc/confluence-documentation-135922.html","github":"https://confluence.atlassian.com"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
