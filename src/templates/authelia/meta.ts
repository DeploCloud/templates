import type { TemplateRaw } from "../../schemas";

export default {
  name: "Authelia",
  shortDescription: "Authentication portal that adds single sign-on and two-factor login in front of your web apps.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"authelia","url":"https://github.com/authelia"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/authelia/authelia","website":"https://www.authelia.com/","docs":"https://www.authelia.com/overview/prologue/introduction/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
