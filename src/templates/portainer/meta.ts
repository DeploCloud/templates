import type { TemplateRaw } from "../../schemas";

export default {
  name: "Portainer",
  shortDescription: "Container management UI for deploying, monitoring, and securing apps across Docker and Kubernetes.",
  category: {"name":"Monitoring","icon":"activity","description":"Uptime checks, metrics, logs, traces and alerting for everything you already run."},
  developedBy: {"label":"portainer","url":"https://github.com/portainer"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/portainer/portainer","website":"https://www.portainer.io/","docs":"https://docs.portainer.io/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
