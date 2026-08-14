import type { TemplateRaw } from "../../schemas";

export default {
  name: "LiteLLM",
  shortDescription: "OpenAI-compatible proxy that routes requests to 100+ LLM providers through a single unified endpoint.",
  category: {"name":"AI","icon":"sparkles","description":"Local language models, chat interfaces, vector stores and the tooling built around them."},
  developedBy: {"label":"BerriAI","url":"https://github.com/BerriAI"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/BerriAI/litellm","website":"https://docs.litellm.ai","docs":"https://docs.litellm.ai/docs/proxy/quick_start"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
