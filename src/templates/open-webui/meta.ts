import type { TemplateRaw } from "../../schemas";

export default {
  name: "Open WebUI",
  shortDescription: "Self-hosted chat interface for local LLMs, supporting Ollama and OpenAI-compatible APIs and running fully offline.",
  category: {"name":"Communication","icon":"message-circle","description":"Chat, calls, forums and the bots and bridges that connect a team or a community."},
  developedBy: {"label":"open-webui","url":"https://github.com/open-webui"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/open-webui/open-webui","website":"https://openwebui.com/","docs":"https://docs.openwebui.com/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
