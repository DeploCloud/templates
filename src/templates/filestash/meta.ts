import type { TemplateRaw } from "../../schemas";

export default {
  name: "Filestash",
  shortDescription: "Web file manager that connects your storage backends to your identity provider with fine-grained access control.",
  category: {"name":"Storage","icon":"hard-drive","description":"Object storage, file sync, backups and the shares and drives behind them."},
  developedBy: {"label":"mickael-kerjean","url":"https://github.com/mickael-kerjean"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/mickael-kerjean/filestash","website":"https://www.filestash.app/","docs":"https://www.filestash.app/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
