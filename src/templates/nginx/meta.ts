import type { TemplateRaw } from "../../schemas";

export default {
  name: "Nginx",
  shortDescription: "High-performance web server and reverse proxy widely used for serving static content and load balancing.",
  category: {"name":"Other","icon":"package","description":"Everything else worth self-hosting: games, utilities and the odd one-off tool."},
  developedBy: {"label":"nginx","url":"https://github.com/nginx"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/nginx/nginx","website":"https://nginx.org/","docs":"https://nginx.org/en/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
