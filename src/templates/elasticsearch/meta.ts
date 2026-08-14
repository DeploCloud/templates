import type { TemplateRaw } from "../../schemas";

export default {
  name: "Elasticsearch",
  shortDescription: "Distributed search and analytics engine for full-text search, log analysis, and querying large structured datasets.",
  category: {"name":"Analytics","icon":"chart-line","description":"Product, web and business analytics, from privacy-first page counters to full dashboards."},
  developedBy: {"label":"elastic","url":"https://github.com/elastic"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/elastic/elasticsearch","website":"https://www.elastic.co/elasticsearch/","docs":"https://docs.elastic.co/elasticsearch/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
