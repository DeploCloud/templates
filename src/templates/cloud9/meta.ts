import type { TemplateRaw } from "../../schemas";

export default {
  name: "Cloud9",
  shortDescription: "Cloud-based IDE for writing, building, and debugging applications collaboratively in real time.",
  category: {"name":"Development","icon":"code","description":"Git hosting, CI, registries, API tooling and the rest of a developer's own stack."},
  developedBy: {"label":"c9","url":"https://github.com/c9"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/c9","website":"https://aws.amazon.com/cloud9/","docs":"https://docs.aws.amazon.com/cloud9/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
