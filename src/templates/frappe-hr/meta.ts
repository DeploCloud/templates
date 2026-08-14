import type { TemplateRaw } from "../../schemas";

export default {
  name: "Frappe HR",
  shortDescription: "Open-source HR and payroll system handling attendance, leave, expenses, and performance for your team.",
  category: {"name":"Finance","icon":"wallet","description":"Accounting, invoicing, budgeting, payments and the ledgers a business runs on."},
  developedBy: {"label":"frappe","url":"https://github.com/frappe"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/frappe/hrms","docs":"https://docs.frappe.io/hr","website":"https://frappe.io/hr"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
