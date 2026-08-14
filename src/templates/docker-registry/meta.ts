import type { TemplateRaw } from "../../schemas";

export default {
  name: "Docker Registry",
  shortDescription: "Reference implementation of the Docker Registry for storing, versioning, and distributing container images and OCI artifacts.",
  category: {"name":"Development","icon":"code","description":"Git hosting, CI, registries, API tooling and the rest of a developer's own stack."},
  developedBy: {"label":"distribution","url":"https://github.com/distribution"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/distribution/distribution","website":"https://hub.docker.com/_/registry","docs":"https://distribution.github.io/distribution/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
