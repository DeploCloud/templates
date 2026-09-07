import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "NVIDIA GPU",
  shortDescription: "Ollama using NVIDIA GPU acceleration for local models.",
  category: {
    name: "AI",
    icon: "sparkles",
    description:
      "Local language models, chat interfaces, vector stores and the tooling built around them.",
  },
  developedBy: { label: "Ollama", url: "https://ollama.com/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/ollama/ollama",
    website: "https://ollama.com/",
    docs: ["https://docs.ollama.com/"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
