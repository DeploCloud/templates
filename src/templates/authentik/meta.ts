import type { TemplateRaw } from "../../schemas";

export default {
  name: "Authentik",
  shortDescription: "Open-source identity provider offering SSO, SAML, OAuth2, and OIDC for centralized user authentication.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"goauthentik","url":"https://github.com/goauthentik"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/goauthentik/authentik","website":"https://goauthentik.io/","docs":"https://goauthentik.io/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
