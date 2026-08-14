import type { TemplateRaw } from "../../schemas";

export default {
  name: "NocoDB",
  shortDescription: "Open-source Airtable alternative that turns MySQL, PostgreSQL, SQL Server, SQLite, and MariaDB into a smart spreadsheet.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"nocodb","url":"https://github.com/nocodb"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/nocodb/nocodb","website":"https://nocodb.com/","docs":"https://docs.nocodb.com/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
