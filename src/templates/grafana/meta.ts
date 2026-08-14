import type { TemplateRaw } from "../../schemas";

export default {
  name: "Grafana",
  shortDescription: "Open-source platform for querying, visualizing, and alerting on metrics and logs through interactive dashboards.",
  category: {"name":"Monitoring","icon":"activity","description":"Uptime checks, metrics, logs, traces and alerting for everything you already run."},
  developedBy: {"label":"grafana","url":"https://github.com/grafana"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/grafana/grafana","website":"https://grafana.com/","docs":"https://grafana.com/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
