import type { TemplateRaw } from "../../schemas";

export default {
  name: "Garage S3",
  shortDescription: "Distributed S3-compatible object storage built for self-hosting across multiple machines without a single point of failure.",
  category: {"name":"Storage","icon":"hard-drive","description":"Object storage, file sync, backups and the shares and drives behind them."},
  developedBy: {"label":"Deuxfleurs","url":"https://github.com/Deuxfleurs"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://git.deuxfleurs.fr/Deuxfleurs/garage","website":"https://garagehq.deuxfleurs.fr","docs":"https://garagehq.deuxfleurs.fr/documentation/quick-start/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
