import type { TemplateRaw } from "../../schemas";

export default {
  name: "KaraKeep",
  shortDescription: "Bookmark-everything app for links, notes, and images with AI tagging and full-text search, formerly Hoarder.",
  category: {"name":"AI","icon":"sparkles","description":"Local language models, chat interfaces, vector stores and the tooling built around them."},
  developedBy: {"label":"karakeep-app","url":"https://github.com/karakeep-app"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/karakeep-app/karakeep","website":"https://karakeep.app/","docs":"https://github.com/karakeep-app/karakeep/tree/main/docs"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
