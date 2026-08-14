import type { TemplateRaw } from "../../schemas";

export default {
  name: "Postgresus",
  shortDescription: "Open-source tool for automated PostgreSQL backups, with multiple storage targets and notifications.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"RostislavDugin","url":"https://github.com/RostislavDugin"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/RostislavDugin/postgresus","website":"https://postgresus.com","docs":"https://postgresus.com"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
