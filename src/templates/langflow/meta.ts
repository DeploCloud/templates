import type { TemplateRaw } from "../../schemas";

export default {
  name: "Langflow",
  shortDescription: "Low-code visual builder for RAG pipelines and multi-agent AI apps, agnostic to any model, API, or database.",
  category: {"name":"AI","icon":"sparkles","description":"Local language models, chat interfaces, vector stores and the tooling built around them."},
  developedBy: {"label":"langflow-ai","url":"https://github.com/langflow-ai"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/langflow-ai/langflow/tree/main","website":"https://www.langflow.org/","docs":"https://docs.langflow.org/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
