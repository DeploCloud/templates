import type { TemplateRaw } from "../../schemas";

export default {
  name: "Passbolt",
  shortDescription: "Open-source password manager for teams, built to share and collaborate on credentials and secrets securely.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"passbolt","url":"https://github.com/passbolt"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/passbolt/passbolt_api","website":"https://www.passbolt.com/","docs":"https://www.passbolt.com/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
