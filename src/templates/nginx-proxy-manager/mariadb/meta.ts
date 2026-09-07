import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "MariaDB",
  shortDescription:
    "Reverse proxy manager backed by MariaDB with persistent certificates and admin data.",
  category: {
    name: "Networking",
    icon: "network",
    description:
      "Proxies, VPNs, DNS, tunnels and the gateways that put your services on the internet.",
  },
  developedBy: {
    label: "Nginx Proxy Manager",
    url: "https://github.com/NginxProxyManager",
  },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/NginxProxyManager/nginx-proxy-manager",
    website: "https://nginxproxymanager.com/",
    docs: ["https://nginxproxymanager.com/setup/"],
  },
  lastUpdate: new Date("2026-08-31T00:00:00.000Z"),
  createdAt: new Date("2026-08-31T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
