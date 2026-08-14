import type { TemplateRaw } from "../../schemas";

export default {
  name: "ERPNext",
  shortDescription: "Open-source ERP suite covering accounting, manufacturing, inventory, sales, HR, and point of sale in one system.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"frappe","url":"https://github.com/frappe"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/frappe/erpnext","docs":"https://docs.frappe.io/erpnext","website":"https://erpnext.com"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
