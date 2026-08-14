import type { TemplateRaw } from "../../schemas";

export default {
  name: "Minio",
  shortDescription: "High-performance, S3-compatible object storage server you can run on your own infrastructure.",
  category: {"name":"Storage","icon":"hard-drive","description":"Object storage, file sync, backups and the shares and drives behind them."},
  developedBy: {"label":"minio","url":"https://github.com/minio"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/minio/minio","website":"https://minio.io/","docs":"https://docs.minio.io/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
