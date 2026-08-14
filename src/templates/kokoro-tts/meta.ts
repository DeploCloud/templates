import type { TemplateRaw } from "../../schemas";

export default {
  name: "Kokoro TTS",
  shortDescription: "FastAPI server for the Kokoro-82M text-to-speech model, with multi-language voices and OpenAI-compatible endpoints.",
  category: {"name":"AI","icon":"sparkles","description":"Local language models, chat interfaces, vector stores and the tooling built around them."},
  developedBy: {"label":"remsky","url":"https://github.com/remsky"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/remsky/Kokoro-FastAPI","website":"https://github.com/remsky/Kokoro-FastAPI","docs":"https://github.com/remsky/Kokoro-FastAPI#readme"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
