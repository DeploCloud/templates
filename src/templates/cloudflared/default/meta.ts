import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Cloudflare Tunnel connector for publishing private services.",
  category: {
    name: "Networking",
    icon: "network",
    description:
      "Proxies, VPNs, DNS, tunnels and the gateways that put your services on the internet.",
  },
  developedBy: {
    label: "Cloudflared",
    url: "https://www.cloudflare.com/products/tunnel/",
  },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/cloudflare/cloudflared",
    website: "https://www.cloudflare.com/products/tunnel/",
    docs: [
      "https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/",
    ],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
