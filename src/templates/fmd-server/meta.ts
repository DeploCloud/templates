import type { TemplateRaw } from "../../schemas";

export default {
  name: "FMD Server",
  shortDescription: "Backend for the Find My Device Android app, letting you locate, lock, and control your phones remotely.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"fmd-foss","url":"https://github.com/fmd-foss"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://gitlab.com/fmd-foss/fmd-server","website":"https://fmd-foss.org","docs":"https://fmd-foss.org/docs/fmd-server/overview"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
