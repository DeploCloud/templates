import type { TemplateRaw } from "../../schemas";

export default {
  name: "SeaweedFS",
  shortDescription: "Fast distributed storage for blobs, objects, and files, with an S3-compatible API, FUSE mount, and WebDAV support.",
  category: {"name":"Storage","icon":"hard-drive","description":"Object storage, file sync, backups and the shares and drives behind them."},
  developedBy: {"label":"seaweedfs","url":"https://github.com/seaweedfs"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/seaweedfs/seaweedfs","website":"https://seaweedfs.com/","docs":"https://github.com/seaweedfs/seaweedfs/wiki"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
