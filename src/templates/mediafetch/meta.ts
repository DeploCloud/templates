import type { TemplateRaw } from "../../schemas";

export default {
  name: "MediaFetch",
  shortDescription: "Lightweight web wrapper for yt-dlp that downloads video and audio, with optional basic auth.",
  category: {"name":"Media","icon":"clapperboard","description":"Movie, music, photo and ebook libraries, plus the downloaders and players around them."},
  developedBy: {"label":"lukedunsmoto","url":"https://github.com/lukedunsmoto"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/lukedunsmoto/mediafetch","website":"https://www.lukedunsmore.com/mediafetch","docs":"https://docs.lukedunsmore.com/docs/self-hosted/mediafetch/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
