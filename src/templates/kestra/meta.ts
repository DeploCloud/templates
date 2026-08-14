import type { TemplateRaw } from "../../schemas";

export default {
  name: "Kestra",
  shortDescription: "Workflow orchestration platform that lets you define and run data pipelines as code or from the UI.",
  category: {"name":"Automation","icon":"workflow","description":"Workflow builders, schedulers and low-code tools that wire your services together."},
  developedBy: {"label":"kestra-io","url":"https://github.com/kestra-io"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/kestra-io/kestra","website":"https://kestra.io","docs":"https://kestra.io/docs"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
