import type { TemplateRaw } from "../../schemas";

export default {
  name: "ArangoDB",
  shortDescription: "Native multi-model database handling documents, graphs, and key-values through one query language.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"arangodb","url":"https://github.com/arangodb"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/arangodb/arangodb","website":"https://www.arangodb.com/","docs":"https://www.arangodb.com/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
