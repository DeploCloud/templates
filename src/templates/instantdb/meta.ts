import type { TemplateRaw } from "../../schemas";

export default {
  name: "InstantDB",
  shortDescription: "Real-time database backend that syncs data instantly across clients, an open-source alternative to Firebase.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"instantdb","url":"https://github.com/instantdb"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/instantdb/instant/tree/main/server","website":"https://github.com/instantdb/instant","docs":"https://github.com/instantdb/instant"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
