import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription: "Jitsi Meet web frontend with persistent configuration.",
  category: {
    name: "Communication",
    icon: "message-circle",
    description:
      "Chat, calls, forums and the bots and bridges that connect a team or a community.",
  },
  developedBy: { label: "Jitsi Meet", url: "https://jitsi.org/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/jitsi/docker-jitsi-meet",
    website: "https://jitsi.org/",
    docs: [
      "https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-docker/",
    ],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
