import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Self-hosted chat interface for local language models and OpenAI-compatible APIs.",
  category: {
    name: "AI",
    icon: "sparkles",
    description:
      "Local language models, chat interfaces, vector stores and the tooling around them.",
  },
  developedBy: { label: "Open WebUI", url: "https://github.com/open-webui" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/open-webui/open-webui",
    website: "https://openwebui.com/",
    docs: ["https://docs.openwebui.com/"],
  },
  lastUpdate: new Date("2026-08-25T00:00:00.000Z"),
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
