import type { TemplateRaw } from "../../schemas";

export default {
  name: "Superset (Unofficial)",
  shortDescription: "Data exploration and visualization platform for building interactive dashboards and charts from SQL databases.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"amancevice","url":"https://github.com/amancevice"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/amancevice/docker-superset","website":"https://superset.apache.org","docs":"https://superset.apache.org/docs/intro"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
