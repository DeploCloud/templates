import type { TemplateRaw } from "../../schemas";

export default {
  name: "Keycloak",
  shortDescription: "Identity and access management server providing single sign-on, OAuth2, and OpenID Connect for your apps.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"keycloak","url":"https://github.com/keycloak"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/keycloak/keycloak","website":"https://www.keycloak.org/","docs":"https://www.keycloak.org/documentation"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
