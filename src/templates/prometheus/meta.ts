import type { TemplateRaw } from "../../schemas";

export default {
  name: "Prometheus",
  shortDescription: "Open-source monitoring and alerting toolkit that collects time-series metrics for reliable observability.",
  category: {"name":"Monitoring","icon":"activity","description":"Uptime checks, metrics, logs, traces and alerting for everything you already run."},
  developedBy: {"label":"prometheus","url":"https://github.com/prometheus"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/prometheus/prometheus","website":"https://prometheus.io/","docs":"https://prometheus.io/docs/introduction/overview/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
