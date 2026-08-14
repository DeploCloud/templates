import type { TemplateRaw } from "../../schemas";

export default {
  name: "LibreTranslate",
  shortDescription: "Free machine translation API powered by Argos Translate, running fully self-hosted with no external services.",
  category: {"name":"AI","icon":"sparkles","description":"Local language models, chat interfaces, vector stores and the tooling built around them."},
  developedBy: {"label":"LibreTranslate","url":"https://github.com/LibreTranslate"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/LibreTranslate/LibreTranslate","website":"https://libretranslate.com/","docs":"https://docs.libretranslate.com/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
