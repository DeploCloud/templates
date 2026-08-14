import type { TemplateRaw } from "../../schemas";

export default {
  name: "pgAdmin",
  shortDescription: "Web-based administration and development tool for managing PostgreSQL databases through a rich GUI.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"pgadmin-org","url":"https://github.com/pgadmin-org"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/pgadmin-org/pgadmin4","website":"https://www.pgadmin.org/","docs":"https://www.pgadmin.org/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
