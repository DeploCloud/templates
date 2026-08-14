import type { TemplateRaw } from "../../schemas";

export default {
  name: "Unifi Network",
  shortDescription: "Network management controller for configuring and monitoring UniFi access points, switches, and gateways.",
  category: {"name":"Networking","icon":"network","description":"Proxies, VPNs, DNS, tunnels and the gateways that put your services on the internet."},
  developedBy: {"label":"ubiquiti","url":"https://github.com/ubiquiti"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/ubiquiti","website":"https://www.ui.com/","docs":"https://help.ui.com/hc/en-us/articles/360012282453-Self-Hosting-a-UniFi-Network-Server"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
