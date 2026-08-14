import type { TemplateRaw } from "../../schemas";

export default {
  name: "Ampache",
  shortDescription: "Web-based music and video streaming server for accessing your media library from any device.",
  category: {"name":"Media","icon":"clapperboard","description":"Movie, music, photo and ebook libraries, plus the downloaders and players around them."},
  developedBy: {"label":"ampache","url":"https://github.com/ampache"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/ampache/ampache","docs":"https://github.com/ampache/ampache/wiki"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
