import type { TemplateRaw } from "../../schemas";

export default {
  name: "Casdoor",
  shortDescription: "Identity and access management platform with a web UI for SSO via OAuth2, OIDC, SAML, LDAP, and MFA.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"casdoor","url":"https://github.com/casdoor"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/casdoor/casdoor","website":"https://casdoor.org/","docs":"https://casdoor.org/docs/overview"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
