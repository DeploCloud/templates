import type { TemplateRaw } from "../../schemas";

export default {
  name: "Dozzle",
  shortDescription: "Real-time log viewer for Docker containers, streaming output live in the browser with no setup or storage.",
  category: {"name":"Monitoring","icon":"activity","description":"Uptime checks, metrics, logs, traces and alerting for everything you already run."},
  developedBy: {"label":"amir20","url":"https://github.com/amir20"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/amir20/dozzle","website":"https://dozzle.dev","docs":"https://dozzle.dev/docs"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
