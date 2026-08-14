import type { TemplateRaw } from "../../schemas";

export default {
  name: "Actual Budget",
  shortDescription: "Local-first personal finance app using zero-based budgeting to track spending and plan your money.",
  category: {"name":"Finance","icon":"wallet","description":"Accounting, invoicing, budgeting, payments and the ledgers a business runs on."},
  developedBy: {"label":"actualbudget","url":"https://github.com/actualbudget"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/actualbudget/actual","website":"https://actualbudget.org","docs":"https://actualbudget.org/docs"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
