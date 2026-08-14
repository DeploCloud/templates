import type { TemplateRaw } from "../../schemas";

export default {
  name: "EZBookkeeping",
  shortDescription: "Self-hosted bookkeeping app for tracking income, expenses, and accounts with built-in financial reports.",
  category: {"name":"Finance","icon":"wallet","description":"Accounting, invoicing, budgeting, payments and the ledgers a business runs on."},
  developedBy: {"label":"mayswind","url":"https://github.com/mayswind"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/mayswind/ezbookkeeping","website":"https://github.com/mayswind/ezbookkeeping","docs":"https://github.com/mayswind/ezbookkeeping"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
