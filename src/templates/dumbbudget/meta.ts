import type { TemplateRaw } from "../../schemas";

export default {
  name: "DumbBudget",
  shortDescription: "Bare-bones personal budget tracker with PIN protection and no database required to get started.",
  category: {"name":"Finance","icon":"wallet","description":"Accounting, invoicing, budgeting, payments and the ledgers a business runs on."},
  developedBy: {"label":"dumbwareio","url":"https://github.com/dumbwareio"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/dumbwareio/dumbbudget","website":"https://www.dumbware.io/software/DumbBudget/","docs":"https://github.com/dumbwareio/dumbbudget"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
