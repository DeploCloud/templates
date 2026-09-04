import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Lightweight monitoring hub with persistent systems and history.",
  category: {
    name: "Monitoring",
    icon: "activity",
    description:
      "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
  },
  developedBy: { label: "Beszel", url: "https://beszel.dev/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/henrygd/beszel",
    website: "https://beszel.dev/",
    docs: ["https://beszel.dev/guide/"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
