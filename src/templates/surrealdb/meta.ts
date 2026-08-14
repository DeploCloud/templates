import type { TemplateRaw } from "../../schemas";

export default {
  name: "SurrealDB",
  shortDescription: "Multi-model database combining relational, document, graph, time-series, vector, and geospatial data in one engine.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"surrealdb","url":"https://github.com/surrealdb"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/surrealdb/surrealdb","website":"https://surrealdb.com","docs":"https://surrealdb.com/docs/surrealdb"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
