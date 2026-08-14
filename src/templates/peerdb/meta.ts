import type { TemplateRaw } from "../../schemas";

export default {
  name: "PeerDB",
  shortDescription: "Data movement platform for fast Postgres replication and syncing data across databases and warehouses.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"peerdb-io","url":"https://github.com/peerdb-io"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/peerdb-io/peerdb","website":"https://peerdb.io","docs":"https://docs.peerdb.io"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
