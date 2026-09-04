import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Modern forum platform for community discussions, mailing lists and real-time chat rooms.",
  category: {
    name: "Communication",
    icon: "message-circle",
    description:
      "Chat, calls, forums and the bots and bridges that connect a team or a community.",
  },
  developedBy: { label: "Discourse", url: "https://github.com/discourse" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/discourse/discourse",
    website: "https://www.discourse.org/",
    docs: ["https://meta.discourse.org/"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
