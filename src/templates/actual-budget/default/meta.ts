import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Private budgeting server with a persistent data directory and HTTPS access.",
  category: {
    name: "Finance",
    icon: "wallet-cards",
    description:
      "Personal finance, budgeting, accounting and financial planning applications.",
  },
  developedBy: {
    label: "Actual Budget",
    url: "https://actualbudget.org/",
  },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/actualbudget/actual",
    website: "https://actualbudget.org/",
    docs: ["https://actualbudget.org/docs/install/docker/"],
  },
  lastUpdate: new Date("2026-08-29T00:00:00.000Z"),
  createdAt: new Date("2026-08-29T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
