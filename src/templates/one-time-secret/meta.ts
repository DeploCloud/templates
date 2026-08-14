import type { TemplateRaw } from "../../schemas";

export default {
  name: "One Time Secret",
  shortDescription: "Secure secret sharing service that creates self-destructing links viewable only once, ideal for passwords and keys.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"onetimesecret","url":"https://github.com/onetimesecret"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/onetimesecret/onetimesecret","website":"https://onetimesecret.com","docs":"https://docs.onetimesecret.com"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
