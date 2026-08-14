import type { TemplateRaw } from "../../schemas";

export default {
  name: "OpenResty Manager",
  shortDescription: "Web UI for OpenResty and Nginx that simplifies reverse proxying with access control, free SSL, and flood protection.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"Safe3","url":"https://github.com/Safe3"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/Safe3/openresty-manager","website":"https://om.uusec.com/","docs":"https://github.com/Safe3/openresty-manager"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
