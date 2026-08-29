import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "SQLite",
  shortDescription:
    "Lightweight Paperless-ngx deployment using SQLite, Valkey and persistent document volumes.",
  category: {
    name: "Other",
    icon: "files",
    description:
      "Useful self-hosted services that do not fit the more specific catalog categories.",
  },
  developedBy: {
    label: "Paperless-ngx",
    url: "https://github.com/paperless-ngx/paperless-ngx",
  },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/paperless-ngx/paperless-ngx",
    website: "https://docs.paperless-ngx.com/",
    docs: ["https://docs.paperless-ngx.com/setup/"],
  },
  lastUpdate: new Date("2026-08-29T00:00:00.000Z"),
  createdAt: new Date("2026-08-29T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
