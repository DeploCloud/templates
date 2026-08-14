import type { TemplateRaw } from "../../schemas";

export default {
  name: "Homarr",
  shortDescription: "Sleek dashboard that brings your self-hosted apps and services together, with Docker integration and live widgets.",
  category: {"name":"Monitoring","icon":"activity","description":"Uptime checks, metrics, logs, traces and alerting for everything you already run."},
  developedBy: {"label":"homarr-labs","url":"https://github.com/homarr-labs"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/homarr-labs/homarr","docs":"https://homarr.dev/docs/getting-started/installation/docker","website":"https://homarr.dev/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
