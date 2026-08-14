import type { TemplateRaw } from "../../schemas";

export default {
  name: "InvoiceShelf",
  shortDescription: "Open-source invoicing tool for freelancers and small businesses to create estimates and track payments.",
  category: {"name":"Finance","icon":"wallet","description":"Accounting, invoicing, budgeting, payments and the ledgers a business runs on."},
  developedBy: {"label":"InvoiceShelf","url":"https://github.com/InvoiceShelf"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/InvoiceShelf/invoiceshelf","website":"https://invoiceshelf.com","docs":"https://github.com/InvoiceShelf/invoiceshelf#readme"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
