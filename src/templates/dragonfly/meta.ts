import type { TemplateRaw } from "../../schemas";

export default {
  name: "Dragonfly",
  shortDescription: "Drop-in Redis and Memcached replacement built for high throughput on modern multi-core hardware.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"dragonflydb","url":"https://github.com/dragonflydb"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/dragonflydb/dragonfly","website":"https://www.dragonflydb.io/","docs":"https://www.dragonflydb.io/docs"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
