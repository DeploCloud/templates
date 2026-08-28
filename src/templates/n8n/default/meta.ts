import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Open-source low-code workflow automation for connecting apps, APIs and business processes.",
  category: {
    name: "Automation",
    icon: "workflow",
    description:
      "Workflow builders, schedulers and low-code tools that wire your services together.",
  },
  developedBy: { label: "n8n", url: "https://github.com/n8n-io" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/n8n-io/n8n",
    website: "https://n8n.io/",
    docs: ["https://docs.n8n.io/"],
  },
  lastUpdate: new Date("2026-08-25T00:00:00.000Z"),
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
