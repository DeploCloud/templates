import type { TemplateRaw } from "../../schemas";

export default {
  name: "AnythingLLM",
  shortDescription: "Private document chatbot that lets you query your own files using the LLM provider of your choice.",
  category: {"name":"AI","icon":"sparkles","description":"Local language models, chat interfaces, vector stores and the tooling built around them."},
  developedBy: {"label":"Mintplex-Labs","url":"https://github.com/Mintplex-Labs"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/Mintplex-Labs/anything-llm","website":"https://useanything.com","docs":"https://github.com/Mintplex-Labs/anything-llm/tree/master/docs"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
