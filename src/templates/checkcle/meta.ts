import type { TemplateRaw } from "../../schemas";

export default {
  name: "Checkcle",
  shortDescription: "Monitoring and compliance tool that surfaces insights into system configuration and runtime checks.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"Operacle","url":"https://github.com/Operacle"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/Operacle/checkcle","website":"https://operacle.com/","docs":"https://github.com/Operacle/checkcle#readme"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
