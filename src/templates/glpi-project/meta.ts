import type { TemplateRaw } from "../../schemas";

export default {
  name: "GLPI Project",
  shortDescription: "Open-source IT service management and asset tracking tool with ticketing, inventory, and helpdesk features.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"glpi-project","url":"https://github.com/glpi-project"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/glpi-project/glpi","website":"https://glpi-project.org/","docs":"https://glpi-project.org/documentation/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
