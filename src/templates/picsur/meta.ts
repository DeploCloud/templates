import type { TemplateRaw } from "../../schemas";

export default {
  name: "Picsur",
  shortDescription: "Self-hosted image host with an admin panel and Postgres backend for uploading and sharing pictures.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"CaramelFur","url":"https://github.com/CaramelFur"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/CaramelFur/picsur","website":"https://github.com/CaramelFur/picsur","docs":"https://github.com/CaramelFur/picsur#readme"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
