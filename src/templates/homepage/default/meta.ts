import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Customizable self-hosted dashboard for links, bookmarks, service status and widgets without host access.",
  category: {
    name: "Other",
    icon: "package",
    description:
      "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
  },
  developedBy: { label: "Homepage", url: "https://github.com/gethomepage" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/gethomepage/homepage",
    website: "https://gethomepage.dev/",
    docs: ["https://gethomepage.dev/installation/"],
  },
  lastUpdate: new Date("2026-08-29T00:00:00.000Z"),
  createdAt: new Date("2026-08-29T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
