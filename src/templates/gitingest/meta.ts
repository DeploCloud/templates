import type { TemplateRaw } from "../../schemas";

export default {
  name: "Gitingest",
  shortDescription: "Turns any Git repository into a single prompt-friendly text digest for feeding codebases into large language models.",
  category: {"name":"Monitoring","icon":"activity","description":"Uptime checks, metrics, logs, traces and alerting for everything you already run."},
  developedBy: {"label":"coderamp-labs","url":"https://github.com/coderamp-labs"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/coderamp-labs/gitingest","website":"https://gitingest.com","docs":"https://github.com/coderamp-labs/gitingest#readme"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
