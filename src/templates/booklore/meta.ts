import type { TemplateRaw } from "../../schemas";

export default {
  name: "Booklore",
  shortDescription: "Self-hosted app for organizing and serving your book collection, backed by a MariaDB database.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"booklore-app","url":"https://github.com/booklore-app"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/booklore-app/BookLore","website":"https://github.com/booklore-app/BookLore","docs":"https://github.com/booklore-app/BookLore/tree/develop/docs"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
