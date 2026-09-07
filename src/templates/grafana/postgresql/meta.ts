import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "PostgreSQL",
  shortDescription:
    "Grafana dashboards backed by a dedicated PostgreSQL database for persistent production deployments.",
  category: {
    name: "Monitoring",
    icon: "activity",
    description:
      "Uptime checks, metrics, logs, traces and alerting for everything you already run.",
  },
  developedBy: { label: "Grafana Labs", url: "https://github.com/grafana" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/grafana/grafana",
    website: "https://grafana.com/",
    docs: [
      "https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/",
    ],
  },
  lastUpdate: new Date("2026-08-29T00:00:00.000Z"),
  createdAt: new Date("2026-08-29T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
