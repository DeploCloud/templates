import type { TemplateRaw } from "../../schemas";

export default {
  name: "CouchDB",
  shortDescription: "Document-oriented NoSQL database from Apache built for easy replication and horizontal scaling.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"apache","url":"https://github.com/apache"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/apache/couchdb","website":"https://couchdb.apache.org/","docs":"https://docs.couchdb.org/en/stable/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
