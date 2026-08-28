import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Fast, privacy-focused web analytics with a lightweight self-hosted dashboard.",
  category: {
    name: "Analytics",
    icon: "chart-line",
    description:
      "Product, web and business analytics, from privacy-first page counters to full dashboards.",
  },
  developedBy: { label: "Umami", url: "https://github.com/umami-software" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/umami-software/umami",
    website: "https://umami.is",
    docs: ["https://umami.is/docs"],
  },
  lastUpdate: new Date("2026-08-25T00:00:00.000Z"),
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
