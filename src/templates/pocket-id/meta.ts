import type { TemplateRaw } from "../../schemas";

export default {
  name: "Pocket ID",
  shortDescription: "Lightweight OIDC provider that lets users sign in to your services with passkeys instead of passwords.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"pocket-id","url":"https://github.com/pocket-id"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/pocket-id/pocket-id","website":"https://pocket-id.org/","docs":"https://pocket-id.org/docs"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
