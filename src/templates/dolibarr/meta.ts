import type { TemplateRaw } from "../../schemas";

export default {
  name: "Dolibarr",
  shortDescription: "Integrated ERP and CRM suite covering contacts, invoices, orders, stock, HR, and project management for small businesses.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"Dolibarr","url":"https://github.com/Dolibarr"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/Dolibarr/dolibarr","website":"https://www.dolibarr.org/","docs":"https://wiki.dolibarr.org/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
