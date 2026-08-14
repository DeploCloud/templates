import type { TemplateRaw } from "../../schemas";

export default {
  name: "Zitadel",
  shortDescription: "Identity and access management platform with multi-tenancy, supporting OpenID Connect, SAML, and OAuth 2.0.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"zitadel","url":"https://github.com/zitadel"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/zitadel/zitadel","website":"https://zitadel.com/","docs":"https://zitadel.com/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
