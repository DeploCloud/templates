import type { TemplateRaw } from "../../schemas";

export default {
  name: "OneDev",
  shortDescription: "Self-hosted Git server with built-in CI/CD pipelines, kanban boards, and package registries for development teams.",
  category: {"name":"Development","icon":"code","description":"Git hosting, CI, registries, API tooling and the rest of a developer's own stack."},
  developedBy: {"label":"theonedev","url":"https://github.com/theonedev"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/theonedev/onedev/","website":"https://onedev.io/","docs":"https://docs.onedev.io/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
