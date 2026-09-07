import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "PostgreSQL",
  shortDescription:
    "NocoDB with bundled PostgreSQL, Redis and a persistent background worker.",
  category: {
    name: "Database",
    icon: "database",
    description:
      "Relational, document and key-value stores, plus the tools to browse and manage them.",
  },
  developedBy: { label: "NocoDB", url: "https://github.com/nocodb" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/nocodb/nocodb",
    website: "https://www.nocodb.com/",
    docs: ["https://www.nocodb.com/docs/self-hosting/installation/quickstart"],
  },
  lastUpdate: new Date("2026-08-31T00:00:00.000Z"),
  createdAt: new Date("2026-08-31T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
