import type { TemplateRaw } from "../../schemas";

export default {
  name: "Open Notebook",
  shortDescription: "AI-powered notebook backed by SurrealDB for organizing research and chatting with your notes and sources.",
  category: {"name":"AI","icon":"sparkles","description":"Local language models, chat interfaces, vector stores and the tooling built around them."},
  developedBy: {"label":"lfnovo","url":"https://github.com/lfnovo"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/lfnovo/open_notebook","website":"https://www.open-notebook.ai/","docs":"https://www.open-notebook.ai/get-started.html"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
