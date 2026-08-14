import type { TemplateRaw } from "../../schemas";

export default {
  name: "Beszel",
  shortDescription: "Lightweight server monitoring hub that tracks Docker stats and resource history with configurable alerts.",
  category: {"name":"Monitoring","icon":"activity","description":"Uptime checks, metrics, logs, traces and alerting for everything you already run."},
  developedBy: {"label":"henrygd","url":"https://github.com/henrygd"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/henrygd/beszel","website":"https://beszel.dev","docs":"https://beszel.dev/guide/getting-started"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
