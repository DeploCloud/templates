import type { TemplateRaw } from "../../schemas";

export default {
  name: "Cloudflared",
  shortDescription: "Daemon that securely exposes local services to the internet through a Cloudflare Tunnel, no open ports needed.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"cloudflare","url":"https://github.com/cloudflare"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/cloudflare/cloudflared","website":"https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/","docs":"https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/get-started/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
