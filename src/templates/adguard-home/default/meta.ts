import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Network-wide DNS filtering with a persistent configuration and web setup interface.",
  category: {
    name: "Networking",
    icon: "network",
    description:
      "Network infrastructure, DNS, routing and service-discovery tools.",
  },
  developedBy: {
    label: "AdGuard Home",
    url: "https://adguard.com/en/adguard-home/overview.html",
  },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/AdguardTeam/AdGuardHome",
    website: "https://adguard.com/en/adguard-home/overview.html",
    docs: ["https://github.com/AdguardTeam/AdGuardHome/wiki/Docker"],
  },
  lastUpdate: new Date("2026-08-29T00:00:00.000Z"),
  createdAt: new Date("2026-08-29T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
