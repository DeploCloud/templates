import type { TemplateRaw } from "../../schemas";

export default {
  name: "Grist",
  shortDescription: "Open-source alternative to Airtable that blends spreadsheet flexibility with relational database structure and formulas.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"gristlabs","url":"https://github.com/gristlabs"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/gristlabs/grist-core","website":"https://www.getgrist.com/","docs":"https://support.getgrist.com/self-managed/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
