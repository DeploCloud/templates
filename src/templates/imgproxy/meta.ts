import type { TemplateRaw } from "../../schemas";

export default {
  name: "imgproxy",
  shortDescription: "Fast image processing and resizing server that transforms images on the fly with caching for repeat requests.",
  category: {"name":"Media","icon":"clapperboard","description":"Movie, music, photo and ebook libraries, plus the downloaders and players around them."},
  developedBy: {"label":"imgproxy","url":"https://github.com/imgproxy"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/imgproxy/imgproxy","website":"https://imgproxy.net/","docs":"https://docs.imgproxy.net/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
