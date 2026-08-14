import type { TemplateRaw } from "../../schemas";

export default {
  name: "jellyfin",
  shortDescription: "Media server for streaming your own movies, TV, and music to any device, a free alternative to Plex.",
  category: {"name":"Media","icon":"clapperboard","description":"Movie, music, photo and ebook libraries, plus the downloaders and players around them."},
  developedBy: {"label":"jellyfin","url":"https://github.com/jellyfin"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/jellyfin/jellyfin","website":"https://jellyfin.org/","docs":"https://jellyfin.org/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
