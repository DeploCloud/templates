import type { TemplateRaw } from "../../schemas";

export default {
  name: "ClickHouse",
  shortDescription: "Column-oriented OLAP database built for fast, real-time analytical queries over very large datasets.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"ClickHouse","url":"https://github.com/ClickHouse"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/ClickHouse/ClickHouse","website":"https://clickhouse.com/","docs":"https://clickhouse.com/docs"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
