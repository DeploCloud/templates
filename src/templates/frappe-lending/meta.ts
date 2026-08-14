import type { TemplateRaw } from "../../schemas";

export default {
  name: "Frappe Lending",
  shortDescription: "Open-source loan management system on the Frappe Framework for handling loans, repayments, and lending operations.",
  category: {"name":"Finance","icon":"wallet","description":"Accounting, invoicing, budgeting, payments and the ledgers a business runs on."},
  developedBy: {"label":"frappe","url":"https://github.com/frappe"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/frappe/lending","docs":"https://docs.frappe.io/lending","website":"https://frappe.io"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
