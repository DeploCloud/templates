import type { TemplateRaw } from "../../schemas";

export default {
  name: "Obsidian LiveSync",
  shortDescription: "Self-hosted CouchDB backend for syncing Obsidian vaults across devices in real time without third-party services.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"vrtmrz","url":"https://github.com/vrtmrz"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/vrtmrz/obsidian-livesync","website":"https://obsidian.md/sync","docs":"https://docs.couchdb.apache.org/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
