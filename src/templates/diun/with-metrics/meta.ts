import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "With Metrics",
  shortDescription:
    "Docker image update notifier with a Prometheus-compatible metrics endpoint.",
  category: {
    name: "Monitoring",
    icon: "activity",
    description:
      "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
  },
  developedBy: { label: "Diun", url: "https://github.com/crazy-max" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/crazy-max/diun",
    website: "https://crazymax.dev/diun/",
    docs: ["https://crazymax.dev/diun/"],
  },
  lastUpdate: new Date("2026-08-31T00:00:00.000Z"),
  createdAt: new Date("2026-08-31T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
