import type { TemplateRaw } from "../../schemas";

export default {
  name: "Gitea Mirror",
  shortDescription: "Web app that automatically mirrors GitHub repositories and organizations to your self-hosted Gitea instance on a schedule.",
  category: {"name":"Automation","icon":"workflow","description":"Workflow builders, schedulers and low-code tools that wire your services together."},
  developedBy: {"label":"arunavo4","url":"https://github.com/arunavo4"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/arunavo4/gitea-mirror","website":"https://github.com/arunavo4/gitea-mirror","docs":"https://github.com/arunavo4/gitea-mirror#readme"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
