import type { TemplateRaw } from "../../schemas";

export default {
  name: "Photoprism",
  shortDescription: "Self-hosted photo manager that uses AI to automatically tag, organize, and search your picture library.",
  category: {"name":"Media","icon":"clapperboard","description":"Movie, music, photo and ebook libraries, plus the downloaders and players around them."},
  developedBy: {"label":"photoprism","url":"https://github.com/photoprism"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/photoprism/photoprism","website":"https://www.photoprism.app/","docs":"https://docs.photoprism.app/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
