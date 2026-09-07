import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Docker management UI with persistent data and the host socket required for administration.",
  category: {
    name: "Development",
    icon: "code",
    description:
      "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
  },
  developedBy: { label: "Portainer", url: "https://github.com/portainer" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/portainer/portainer",
    website: "https://www.portainer.io/",
    docs: ["https://docs.portainer.io/start/install-ce/server/docker/linux"],
  },
  lastUpdate: new Date("2026-08-31T00:00:00.000Z"),
  createdAt: new Date("2026-08-31T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
