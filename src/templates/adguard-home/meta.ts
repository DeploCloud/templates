import type { TemplateRaw } from "../../schemas";

export default {
  name: "AdGuard Home",
  shortDescription: "Network-wide DNS server that blocks ads and trackers across every device, with parental controls.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"AdguardTeam","url":"https://github.com/AdguardTeam"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/AdguardTeam/AdGuardHome","website":"https://adguard.com","docs":"https://github.com/AdguardTeam/AdGuardHome/wiki"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
