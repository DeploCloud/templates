import type { TemplateRaw } from "../../schemas";

export default {
  name: "n8n",
  shortDescription: "Source-available workflow automation tool that connects apps and APIs to build automations visually or with code.",
  category: {"name":"Automation","icon":"workflow","description":"Workflow builders, schedulers and low-code tools that wire your services together."},
  developedBy: {"label":"n8n-io","url":"https://github.com/n8n-io"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/n8n-io/n8n","website":"https://n8n.io/","docs":"https://docs.n8n.io/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
