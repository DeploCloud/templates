import type { TemplateRaw } from "../../schemas";

export default {
  name: "Dashy",
  shortDescription: "Customizable homelab dashboard that organizes your self-hosted services with widgets, status checks, and themes.",
  category: {"name":"Monitoring","icon":"activity","description":"Uptime checks, metrics, logs, traces and alerting for everything you already run."},
  developedBy: {"label":"Lissy93","url":"https://github.com/Lissy93"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/Lissy93/dashy","website":"https://dashy.to/","docs":"https://github.com/Lissy93/dashy/tree/master/docs"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
