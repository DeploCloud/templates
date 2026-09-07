import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Queue mode",
  shortDescription:
    "n8n queue-mode deployment with PostgreSQL, Redis and a dedicated execution worker.",
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
    docs: ["https://docs.n8n.io/hosting/scaling/queue-mode/"],
  },
  lastUpdate: new Date("2026-08-29T00:00:00.000Z"),
  createdAt: new Date("2026-08-29T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
