import type { TemplateRaw } from "../../schemas";

export default {
  name: "PostgreSQL with PgDog",
  shortDescription: "PostgreSQL paired with PgDog, a multi-threaded connection pooler and load balancer alternative to PgBouncer.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"pgdogdev","url":"https://github.com/pgdogdev"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/pgdogdev/pgdog","website":"https://pgdog.dev","docs":"https://docs.pgdog.dev"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
