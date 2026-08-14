import type { TemplateRaw } from "../../schemas";

export default {
  name: "CyberChef",
  shortDescription: "Web app from GCHQ for encryption, encoding, compression, and data analysis through chainable operations.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"gchq","url":"https://github.com/gchq"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/gchq/CyberChef","website":"https://gchq.github.io/CyberChef/","docs":"https://github.com/gchq/CyberChef/wiki"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
