import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Fast typo-tolerant search engine with a protected HTTP API and persistent index storage.",
  category: {
    name: "Database",
    icon: "database",
    description:
      "Relational, document and key-value stores, plus the tools to browse and manage them.",
  },
  developedBy: { label: "Meilisearch", url: "https://github.com/meilisearch" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/meilisearch/meilisearch",
    website: "https://www.meilisearch.com/",
    docs: ["https://www.meilisearch.com/docs/"],
  },
  lastUpdate: new Date("2026-08-29T00:00:00.000Z"),
  createdAt: new Date("2026-08-29T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
