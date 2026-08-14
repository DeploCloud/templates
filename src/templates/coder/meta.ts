import type { TemplateRaw } from "../../schemas";

export default {
  name: "Coder",
  shortDescription: "Open-source cloud development environment you host yourself, giving teams remote workspaces on your infrastructure.",
  category: {"name":"Development","icon":"code","description":"Git hosting, CI, registries, API tooling and the rest of a developer's own stack."},
  developedBy: {"label":"coder","url":"https://github.com/coder"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/coder/coder","website":"https://coder.com/","docs":"https://coder.com/docs"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
