import type { TemplateRaw } from "../../schemas";

export default {
  name: "RustFS",
  shortDescription: "S3-compatible distributed object storage written in Rust, offering high-throughput file storage as a MinIO alternative.",
  category: {"name":"Storage","icon":"hard-drive","description":"Object storage, file sync, backups and the shares and drives behind them."},
  developedBy: {"label":"rustfs","url":"https://github.com/rustfs"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/rustfs/rustfs","website":"https://rustfs.com/","docs":"https://docs.rustfs.com/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
