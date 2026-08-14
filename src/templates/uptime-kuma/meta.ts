import type { TemplateRaw } from "../../schemas";

export default {
  name: "Uptime Kuma",
  shortDescription: "Self-hosted uptime monitor that tracks websites and services and sends alerts when they go down.",
  category: {"name":"Monitoring","icon":"activity","description":"Uptime checks, metrics, logs, traces and alerting for everything you already run."},
  developedBy: {"label":"louislam","url":"https://github.com/louislam"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/louislam/uptime-kuma","website":"https://uptime.kuma.pet/","docs":"https://github.com/louislam/uptime-kuma/wiki"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
