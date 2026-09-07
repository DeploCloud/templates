import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "PostgreSQL",
  shortDescription:
    "Firefly III with PostgreSQL, scheduled tasks and persistent financial data.",
  category: {
    name: "Finance",
    icon: "wallet-cards",
    description:
      "Personal finance, budgeting, accounting and financial planning applications.",
  },
  developedBy: { label: "Firefly III", url: "https://firefly-iii.org/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/firefly-iii/firefly-iii",
    website: "https://firefly-iii.org/",
    docs: [
      "https://www.mintlify.com/firefly-iii/firefly-iii/installation/docker",
    ],
  },
  lastUpdate: new Date("2026-08-29T00:00:00.000Z"),
  createdAt: new Date("2026-08-29T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
