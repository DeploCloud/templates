import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Self-hosted uptime monitoring for websites, services and alerting channels.",
  category: {
    name: "Monitoring",
    icon: "activity",
    description:
      "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
  },
  developedBy: { label: "Uptime Kuma", url: "https://github.com/louislam" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/louislam/uptime-kuma",
    website: "https://uptime.kuma.pet/",
    docs: ["https://github.com/louislam/uptime-kuma/wiki"],
  },
  lastUpdate: new Date("2026-08-25T00:00:00.000Z"),
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
