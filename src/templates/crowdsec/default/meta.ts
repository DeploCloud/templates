import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Collaborative security engine with persistent decisions and configuration.",
  category: {
    name: "Security",
    icon: "shield",
    description:
      "Identity providers, single sign-on, password vaults and secret management.",
  },
  developedBy: { label: "CrowdSec", url: "https://www.crowdsec.net/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/crowdsecurity/crowdsec",
    website: "https://www.crowdsec.net/",
    docs: ["https://docs.crowdsec.net/"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
