import type { TemplateRaw } from "../../schemas";

export default {
  name: "Qdrant",
  shortDescription: "Open-source vector database for storing embeddings and running fast similarity search to power AI and recommendation features.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"qdrant","url":"https://github.com/qdrant"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/qdrant/qdrant","website":"https://qdrant.tech/","docs":"https://qdrant.tech/documentation/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
