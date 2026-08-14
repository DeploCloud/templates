import type { TemplateRaw } from "../../schemas";

export default {
  name: "Inngest",
  shortDescription: "Event-driven workflow engine for background jobs, with built-in retries, scheduling, and observability.",
  category: {"name":"Automation","icon":"workflow","description":"Workflow builders, schedulers and low-code tools that wire your services together."},
  developedBy: {"label":"inngest","url":"https://github.com/inngest"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/inngest/inngest","website":"https://www.inngest.com/","docs":"https://www.inngest.com/docs/self-hosting"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
