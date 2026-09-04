import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription: "Self-hosted publish-subscribe notification server.",
  category: {
    name: "Communication",
    icon: "message-circle",
    description:
      "Chat, calls, forums and the bots and bridges that connect a team or a community.",
  },
  developedBy: { label: "ntfy", url: "https://ntfy.sh/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/binwiederhier/ntfy",
    website: "https://ntfy.sh/",
    docs: ["https://docs.ntfy.sh/"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
