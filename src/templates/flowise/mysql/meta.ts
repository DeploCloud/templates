import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "MySQL",
  shortDescription: "Flowise with mysql persistence for flows and credentials.",
  category: {
    name: "AI",
    icon: "sparkles",
    description:
      "Local language models, chat interfaces, vector stores and the tooling built around them.",
  },
  developedBy: { label: "Flowise", url: "https://flowiseai.com/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/FlowiseAI/Flowise",
    website: "https://flowiseai.com/",
    docs: ["https://docs.flowiseai.com/"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
