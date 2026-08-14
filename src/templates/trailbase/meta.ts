import type { TemplateRaw } from "../../schemas";

export default {
  name: "TrailBase",
  shortDescription: "Single-file backend on Rust and SQLite providing type-safe REST APIs, authentication, realtime, and an admin UI.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"trailbase","url":"https://github.com/trailbase"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/trailbase/trailbase","website":"https://trailbase.io/","docs":"https://trailbase.io/getting-started/install"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
