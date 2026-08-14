import type { TemplateRaw } from "../../schemas";

export default {
  name: "Tailscale Exit nodes",
  shortDescription: "Routes your internet traffic through a chosen device on your Tailscale network, acting as a private VPN gateway.",
  category: {"name":"Networking","icon":"network","description":"Proxies, VPNs, DNS, tunnels and the gateways that put your services on the internet."},
  developedBy: {"label":"tailscale-dev","url":"https://github.com/tailscale-dev"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/tailscale-dev/docker-guide-code-examples","website":"https://tailscale.com/","docs":"https://tailscale.com/kb/1408/quick-guide-exit-nodes"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
