import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "WireGuard management UI with persistent peer configuration.",
  category: {
    name: "Networking",
    icon: "network",
    description:
      "Proxies, VPNs, DNS, tunnels and the gateways that put your services on the internet.",
  },
  developedBy: { label: "WG-Easy", url: "https://wg-easy.github.io/wg-easy/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/wg-easy/wg-easy",
    website: "https://wg-easy.github.io/wg-easy/",
    docs: ["https://wg-easy.github.io/wg-easy/"],
  },
  alerts: [
    {
      type: "destructive",
      message:
        "The host must provide WireGuard kernel support and the required network capabilities.",
    },
    {
      type: "warning",
      message: "Set and change the admin password before exposing the UI.",
    },
  ],
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
