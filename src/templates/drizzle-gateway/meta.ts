import type { TemplateRaw } from "../../schemas";

export default {
  name: "drizzle gateway",
  shortDescription: "Database gateway that exposes a browsable web interface for connecting to and querying your databases remotely.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"drizzle-team","url":"https://github.com/drizzle-team"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/drizzle-team/drizzle-gateway","website":"https://drizzle-team.github.io/","docs":"https://drizzle-team.github.io/docs"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
