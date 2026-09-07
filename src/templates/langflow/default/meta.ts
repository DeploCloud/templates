import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Visual AI workflow builder with persistent projects and settings.",
  category: {
    name: "AI",
    icon: "sparkles",
    description:
      "Local language models, chat interfaces, vector stores and the tooling built around them.",
  },
  developedBy: { label: "Langflow", url: "https://www.langflow.org/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/langflow-ai/langflow",
    website: "https://www.langflow.org/",
    docs: ["https://docs.langflow.org/"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
