import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "MySQL",
  shortDescription: "Keycloak with mysql persistence and proxy-aware defaults.",
  category: {
    name: "Security",
    icon: "shield",
    description:
      "Identity providers, single sign-on, password vaults and secret management.",
  },
  developedBy: { label: "Keycloak", url: "https://www.keycloak.org/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/keycloak/keycloak",
    website: "https://www.keycloak.org/",
    docs: ["https://www.keycloak.org/documentation"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
