import type { TemplateRaw } from "../../schemas";

export default {
  name: "AdventureLog",
  shortDescription: "Open-source travel journal for logging trips and adventures on a map, with Strava integration.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"seanmorley15","url":"https://github.com/seanmorley15"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/seanmorley15/adventurelog","website":"https://adventurelog.app/","docs":"https://adventurelog.app/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
