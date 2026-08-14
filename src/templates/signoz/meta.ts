import type { TemplateRaw } from "../../schemas";

export default {
  name: "SigNoz",
  shortDescription: "Open-source observability platform and Datadog alternative, unifying traces, metrics, and logs via OpenTelemetry.",
  category: {"name":"Monitoring","icon":"activity","description":"Uptime checks, metrics, logs, traces and alerting for everything you already run."},
  developedBy: {"label":"SigNoz","url":"https://github.com/SigNoz"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/SigNoz/signoz","website":"https://signoz.io/","docs":"https://signoz.io/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
