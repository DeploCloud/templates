import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Privacy-friendly web analytics with sessions, funnels and replay.",
  category: {
    name: "Analytics",
    icon: "chart-line",
    description:
      "Product, web and business analytics, from privacy-first page counters to full dashboards.",
  },
  developedBy: { label: "Rybbit", url: "https://github.com/rybbit-io" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/rybbit-io/rybbit",
    website: "https://rybbit.com/",
    docs: ["https://rybbit.com/docs/self-hosting"],
  },
  lastUpdate: new Date("2026-09-12T00:00:00.000Z"),
  createdAt: new Date("2026-09-07T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
