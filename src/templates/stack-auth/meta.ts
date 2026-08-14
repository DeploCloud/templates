import type { TemplateRaw } from "../../schemas";

export default {
  name: "Stack Auth",
  shortDescription: "Open-source authentication platform and Auth0/Clerk alternative for adding user sign-in and management to your apps.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"stack-auth","url":"https://github.com/stack-auth"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/stack-auth/stack-auth","website":"https://stack-auth.com/","docs":"https://docs.stack-auth.com/next/overview"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
