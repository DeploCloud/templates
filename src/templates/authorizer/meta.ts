import type { TemplateRaw } from "../../schemas";

export default {
  name: "Authorizer",
  shortDescription: "Developer-focused auth solution providing user login, sign-up, and access control via a low-code setup.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"authorizerdev","url":"https://github.com/authorizerdev"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/authorizerdev/authorizer","website":"https://authorizer.dev","docs":"https://docs.authorizer.dev/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
