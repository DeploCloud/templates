import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Network-wide DNS filtering with persistent configuration and a generated web domain.",
  category: {
    name: "Networking",
    icon: "network",
    description:
      "Proxies, VPNs, DNS, tunnels and the gateways that put your services on the internet.",
  },
  developedBy: { label: "Pi-hole", url: "https://github.com/pi-hole" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/pi-hole/docker-pi-hole",
    website: "https://pi-hole.net/",
    docs: ["https://docs.pi-hole.net/docker/"],
  },
  lastUpdate: new Date("2026-08-31T00:00:00.000Z"),
  createdAt: new Date("2026-08-31T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
