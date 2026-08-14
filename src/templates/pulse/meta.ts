import type { TemplateRaw } from "../../schemas";

export default {
  name: "Pulse",
  shortDescription: "Real-time monitoring dashboard for Proxmox VE, PBS, and Docker, showing metrics across nodes and containers.",
  category: {"name":"Monitoring","icon":"activity","description":"Uptime checks, metrics, logs, traces and alerting for everything you already run."},
  developedBy: {"label":"rcourtman","url":"https://github.com/rcourtman"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/rcourtman/Pulse","website":"https://pulserelay.pro/","docs":"https://github.com/rcourtman/Pulse/blob/main/docs/README.md"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
