import type { TemplateRaw } from "../../schemas";

export default {
  name: "Bazarr",
  shortDescription: "Companion to Sonarr and Radarr that automatically finds and downloads subtitles for your media library.",
  category: {"name":"Media","icon":"clapperboard","description":"Movie, music, photo and ebook libraries, plus the downloaders and players around them."},
  developedBy: {"label":"morpheus65535","url":"https://github.com/morpheus65535"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/morpheus65535/bazarr","website":"https://www.bazarr.media/","docs":"https://www.bazarr.media/docs"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
