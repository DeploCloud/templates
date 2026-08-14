import type { TemplateRaw } from "../../schemas";

export default {
  name: "n8n with Postgres",
  shortDescription: "Workflow automation tool n8n paired with a PostgreSQL database for reliable, persistent storage of your automations.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"n8n-io","url":"https://github.com/n8n-io"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/n8n-io/n8n","website":"https://n8n.io/","docs":"https://docs.n8n.io/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
