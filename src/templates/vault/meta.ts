import type { TemplateRaw } from "../../schemas";

export default {
  name: "Vault",
  shortDescription: "Secrets manager that stores and tightly controls access to API keys, passwords, and certificates with audit logging.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"hashicorp","url":"https://github.com/hashicorp"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/hashicorp/vault","website":"https://www.vaultproject.io/","docs":"https://developer.hashicorp.com/vault/docs"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
