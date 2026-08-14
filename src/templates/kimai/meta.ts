import type { TemplateRaw } from "../../schemas";

export default {
  name: "Kimai",
  shortDescription: "Multi-user time-tracking app for freelancers and teams to log hours, generate reports, and create invoices.",
  category: {"name":"Finance","icon":"wallet","description":"Accounting, invoicing, budgeting, payments and the ledgers a business runs on."},
  developedBy: {"label":"kimai","url":"https://github.com/kimai"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/kimai/kimai","website":"https://www.kimai.org","docs":"https://www.kimai.org/documentation"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
