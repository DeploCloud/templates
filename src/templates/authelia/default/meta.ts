import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Authentication portal providing single sign-on and two-factor protection for web applications.",
  category: {
    name: "Security",
    icon: "shield",
    description:
      "Identity providers, single sign-on, password vaults and secret management.",
  },
  developedBy: { label: "Authelia", url: "https://github.com/authelia" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/authelia/authelia",
    website: "https://www.authelia.com/",
    docs: ["https://www.authelia.com/integration/deployment/docker/"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
