import type { TemplateRaw } from "../../schemas";

export default {
  name: "n8n + Worker + Runner with Redis/Postgres and Ollama",
  shortDescription: "Workflow automation tool n8n bundled with PostgreSQL, a dedicated runner, and Ollama for running local AI models in flows.",
  category: {"name":"AI","icon":"sparkles","description":"Local language models, chat interfaces, vector stores and the tooling built around them."},
  developedBy: {"label":"n8n-io","url":"https://github.com/n8n-io"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/n8n-io/n8n","website":"https://n8n.io/","docs":"https://docs.n8n.io/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
