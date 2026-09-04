import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Team collaboration server with persistent files and PostgreSQL.",
  category: {
    name: "Communication",
    icon: "message-circle",
    description:
      "Chat, calls, forums and the bots and bridges that connect a team or a community.",
  },
  developedBy: { label: "Mattermost", url: "https://mattermost.com/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/mattermost/mattermost",
    website: "https://mattermost.com/",
    docs: ["https://docs.mattermost.com/"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
