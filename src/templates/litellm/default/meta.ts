import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "OpenAI-compatible proxy for routing language-model requests.",
  category: {
    name: "AI",
    icon: "sparkles",
    description:
      "Local language models, chat interfaces, vector stores and the tooling built around them.",
  },
  developedBy: { label: "LiteLLM", url: "https://www.litellm.ai/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/BerriAI/litellm",
    website: "https://www.litellm.ai/",
    docs: ["https://docs.litellm.ai/"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
