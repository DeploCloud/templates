import type { TemplateRaw } from "../../schemas";

export default {
  name: "NTFY",
  shortDescription: "Pub-sub notification service that pushes alerts to your phone or desktop via simple HTTP PUT and POST requests.",
  category: {"name":"Monitoring","icon":"activity","description":"Uptime checks, metrics, logs, traces and alerting for everything you already run."},
  developedBy: {"label":"binwiederhier","url":"https://github.com/binwiederhier"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/binwiederhier/ntfy","website":"https://ntfy.sh/","docs":"https://docs.ntfy.sh/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
