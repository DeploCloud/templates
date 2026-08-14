import type { TemplateRaw } from "../../schemas";

export default {
  name: "Audiobookshelf",
  shortDescription: "Self-hosted server that organizes and streams your audiobook and podcast library to any device.",
  category: {"name":"Media","icon":"clapperboard","description":"Movie, music, photo and ebook libraries, plus the downloaders and players around them."},
  developedBy: {"label":"advplyr","url":"https://github.com/advplyr"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/advplyr/audiobookshelf","website":"https://www.audiobookshelf.org","docs":"https://www.audiobookshelf.org/docs"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
