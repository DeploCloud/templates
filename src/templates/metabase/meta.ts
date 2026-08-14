import type { TemplateRaw } from "../../schemas";

export default {
  name: "Metabase",
  shortDescription: "Open-source business intelligence tool for querying databases and building dashboards without SQL.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"metabase","url":"https://github.com/metabase"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/metabase/metabase","website":"https://www.metabase.com/","docs":"https://www.metabase.com/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
