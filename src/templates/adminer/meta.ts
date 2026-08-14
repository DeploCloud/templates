import type { TemplateRaw } from "../../schemas";

export default {
  name: "Adminer",
  shortDescription: "Lightweight single-file database manager for MySQL, PostgreSQL, SQLite, and more through the browser.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"vrana","url":"https://github.com/vrana"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/vrana/adminer","website":"https://www.adminer.org/","docs":"https://www.adminer.org/en/plugins/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
