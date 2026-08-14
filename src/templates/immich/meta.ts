import type { TemplateRaw } from "../../schemas";

export default {
  name: "Immich",
  shortDescription: "High-performance photo and video backup for your phone, an open-source alternative to Google Photos.",
  category: {"name":"Media","icon":"clapperboard","description":"Movie, music, photo and ebook libraries, plus the downloaders and players around them."},
  developedBy: {"label":"immich-app","url":"https://github.com/immich-app"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/immich-app/immich","website":"https://immich.app/","docs":"https://immich.app/docs/overview/introduction"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
