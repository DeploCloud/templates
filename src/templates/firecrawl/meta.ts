import type { TemplateRaw } from "../../schemas";

export default {
  name: "Firecrawl",
  shortDescription: "Crawling API that turns any URL and its subpages into clean markdown or structured data, ideal for LLM pipelines.",
  category: {"name":"AI","icon":"sparkles","description":"Local language models, chat interfaces, vector stores and the tooling built around them."},
  developedBy: {"label":"firecrawl","url":"https://github.com/firecrawl"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/firecrawl/firecrawl","website":"https://firecrawl.dev","docs":"https://github.com/firecrawl/firecrawl"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
