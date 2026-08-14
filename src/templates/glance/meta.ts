import type { TemplateRaw } from "../../schemas";

export default {
  name: "Glance",
  shortDescription: "Self-hosted dashboard that gathers RSS feeds, weather, bookmarks, and service status into one fast, minimal page.",
  category: {"name":"Monitoring","icon":"activity","description":"Uptime checks, metrics, logs, traces and alerting for everything you already run."},
  developedBy: {"label":"glanceapp","url":"https://github.com/glanceapp"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/glanceapp/glance","docs":"https://github.com/glanceapp/glance/blob/main/docs/configuration.md","website":"https://glance.app/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
