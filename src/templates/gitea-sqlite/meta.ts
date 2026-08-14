import type { TemplateRaw } from "../../schemas";

export default {
  name: "Gitea (SQLite)",
  shortDescription: "Lightweight self-hosted Git service using SQLite for a simple, single-container setup with no separate database.",
  category: {"name":"Development","icon":"code","description":"Git hosting, CI, registries, API tooling and the rest of a developer's own stack."},
  developedBy: {"label":"go-gitea","url":"https://github.com/go-gitea"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/go-gitea/gitea","website":"https://gitea.io/","docs":"https://docs.gitea.com/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
