import type { TemplateRaw } from "../../schemas";

export default {
  name: "Gitea (MySQL)",
  shortDescription: "Lightweight self-hosted Git service with issues, pull requests, and CI, bundled with MySQL 8 for storage.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"go-gitea","url":"https://github.com/go-gitea"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/go-gitea/gitea","website":"https://gitea.io/","docs":"https://docs.gitea.com/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
