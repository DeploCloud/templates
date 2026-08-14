import type { TemplateRaw } from "../../schemas";

export default {
  name: "Maybe",
  shortDescription: "Personal finance app for tracking budgets, accounts, and expenses, hosted entirely on your own server.",
  category: {"name":"Finance","icon":"wallet","description":"Accounting, invoicing, budgeting, payments and the ledgers a business runs on."},
  developedBy: {"label":"maybe-finance","url":"https://github.com/maybe-finance"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/maybe-finance/maybe","website":"https://maybe.finance/","docs":"https://docs.maybe.finance/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
