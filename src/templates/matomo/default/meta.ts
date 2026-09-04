import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Self-hosted web analytics with persistent reports and configuration.",
  category: {
    name: "Analytics",
    icon: "chart-line",
    description:
      "Product, web and business analytics, from privacy-first page counters to full dashboards.",
  },
  developedBy: { label: "Matomo", url: "https://matomo.org/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/matomo-org/matomo",
    website: "https://matomo.org/",
    docs: ["https://matomo.org/docs/"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
