import type { TemplateRaw } from "../../schemas";

export default {
  name: "Cloudflare DDNS",
  shortDescription: "Lightweight Cloudflare DDNS updater that keeps your DNS records pointed at a changing IP address.",
  category: {"name":"Development","icon":"code","description":"Git hosting, CI, registries, API tooling and the rest of a developer's own stack."},
  developedBy: {"label":"favonia","url":"https://github.com/favonia"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/favonia/cloudflare-ddns","website":"https://github.com/favonia/cloudflare-ddns","docs":"https://github.com/favonia/cloudflare-ddns"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
