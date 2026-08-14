import type { TemplateRaw } from "../../schemas";

export default {
  name: "Openinary",
  shortDescription: "Self-hosted media management service for storing and transforming images and videos, an alternative to Cloudinary.",
  category: {"name":"Media","icon":"clapperboard","description":"Movie, music, photo and ebook libraries, plus the downloaders and players around them."},
  developedBy: {"label":"openinary","url":"https://github.com/openinary"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/openinary/openinary","website":"https://openinary.dev","docs":"https://docs.openinary.dev"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
