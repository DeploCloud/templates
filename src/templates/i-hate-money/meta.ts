import type { TemplateRaw } from "../../schemas";

export default {
  name: "I Hate Money",
  shortDescription: "Shared-expense tracker that records who paid for what and settles up who owes whom across a group.",
  category: {"name":"Finance","icon":"wallet","description":"Accounting, invoicing, budgeting, payments and the ledgers a business runs on."},
  developedBy: {"label":"spiral-project","url":"https://github.com/spiral-project"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/spiral-project/ihatemoney","website":"https://ihatemoney.org/","docs":"https://ihatemoney.readthedocs.io/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
