import type { TemplateRaw } from "../../schemas";

export default {
  name: "Emby",
  shortDescription: "Personal media server that streams your movies, TV, and music to apps on phones, TVs, and browsers.",
  category: {"name":"Media","icon":"clapperboard","description":"Movie, music, photo and ebook libraries, plus the downloaders and players around them."},
  developedBy: {"label":"MediaBrowser","url":"https://github.com/MediaBrowser"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/MediaBrowser/Emby","website":"https://emby.media/","docs":"https://emby.media/support/articles/Home.html"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
