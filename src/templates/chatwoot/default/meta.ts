import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Complete Chatwoot production stack with Rails, Sidekiq, PostgreSQL and Redis.",
  category: {
    name: "Communication",
    icon: "message-circle",
    description:
      "Messaging, chat, collaboration and communication services for teams and communities.",
  },
  developedBy: { label: "Chatwoot", url: "https://www.chatwoot.com/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/chatwoot/chatwoot",
    website: "https://www.chatwoot.com/",
    docs: ["https://developers.chatwoot.com/self-hosted/deployment/docker"],
  },
  lastUpdate: new Date("2026-08-29T00:00:00.000Z"),
  createdAt: new Date("2026-08-29T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
