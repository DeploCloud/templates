import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "PocketBase backend with persistent embedded SQLite storage.",
  category: {
    name: "Database",
    icon: "database",
    description:
      "Relational, document and key-value stores, plus the tools to browse and manage them.",
  },
  developedBy: { label: "PocketBase", url: "https://pocketbase.io/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/pocketbase/pocketbase",
    website: "https://pocketbase.io/",
    docs: ["https://pocketbase.io/docs/"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
