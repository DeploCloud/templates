import type { TemplateRaw } from "../../schemas";

export default {
  name: "Checkmate",
  shortDescription: "Open-source uptime monitor that tracks server hardware, response times, and incidents with clear visualizations.",
  category: {"name":"Monitoring","icon":"activity","description":"Uptime checks, metrics, logs, traces and alerting for everything you already run."},
  developedBy: {"label":"bluewave-labs","url":"https://github.com/bluewave-labs"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/bluewave-labs/checkmate","website":"https://checkmate.so/","docs":"https://docs.checkmate.so"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
