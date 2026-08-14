import type { TemplateRaw } from "../../schemas";

export default {
  name: "WG-Easy",
  shortDescription: "WireGuard VPN server with a simple web UI for creating clients, sharing QR configs, and managing connections.",
  category: {"name":"Networking","icon":"network","description":"Proxies, VPNs, DNS, tunnels and the gateways that put your services on the internet."},
  developedBy: {"label":"wg-easy","url":"https://github.com/wg-easy"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/wg-easy/wg-easy","website":"https://wg-easy.github.io/","docs":"https://github.com/wg-easy/wg-easy/wiki"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
