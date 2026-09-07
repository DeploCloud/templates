import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Privacy-friendly self-hosted web analytics with a lightweight dashboard.",
  category: {
    name: "Analytics",
    icon: "chart-line",
    description:
      "Product, web and business analytics, from privacy-first page counters to full dashboards.",
  },
  developedBy: { label: "Plausible", url: "https://github.com/plausible" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/plausible/plausible",
    website: "https://plausible.io/",
    docs: ["https://plausible.io/docs"],
  },
  lastUpdate: new Date("2026-08-25T00:00:00.000Z"),
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
