import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Lightweight self-hosted password manager server with persistent encrypted vault data.",
  category: {
    name: "Security",
    icon: "shield",
    description:
      "Identity providers, single sign-on, password vaults and secret management.",
  },
  developedBy: { label: "Vaultwarden", url: "https://github.com/dani-garcia" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/dani-garcia/vaultwarden",
    docs: ["https://github.com/dani-garcia/vaultwarden/wiki"],
  },
  lastUpdate: new Date("2026-08-25T00:00:00.000Z"),
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
