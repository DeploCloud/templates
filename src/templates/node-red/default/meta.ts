import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Low-code programming tool for connecting hardware, APIs and online services with visual flows.",
  category: {
    name: "Automation",
    icon: "workflow",
    description:
      "Workflow builders, schedulers and low-code tools that wire your services together.",
  },
  developedBy: { label: "Node-RED", url: "https://github.com/node-red" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/node-red/node-red",
    website: "https://nodered.org/",
    docs: ["https://nodered.org/docs/getting-started/docker"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
