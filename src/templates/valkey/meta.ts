import type { TemplateRaw } from "../../schemas";

export default {
  name: "Valkey",
  shortDescription: "In-memory key-value store and cache, a community-driven fork of Redis backed by the Linux Foundation.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"valkey-io","url":"https://github.com/valkey-io"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/valkey-io/valkey","website":"https://valkey.io/","docs":"https://github.com/valkey-io/valkey"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
