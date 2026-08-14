import type { TemplateRaw } from "../../schemas";

export default {
  name: "Netdata",
  shortDescription: "Real-time monitoring tool that visualizes system, container, and application metrics with per-second granularity.",
  category: {"name":"Monitoring","icon":"activity","description":"Uptime checks, metrics, logs, traces and alerting for everything you already run."},
  developedBy: {"label":"netdata","url":"https://github.com/netdata"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/netdata/netdata","website":"https://www.netdata.cloud/","docs":"https://learn.netdata.cloud/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
