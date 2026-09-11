import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Supabase Studio interface for a self-hosted Supabase stack.",
  category: {
    name: "Development",
    icon: "code",
    description:
      "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
  },
  developedBy: { label: "Supabase", url: "https://supabase.com/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/supabase/supabase",
    website: "https://supabase.com/",
    docs: ["https://supabase.com/docs/guides/self-hosting"],
  },
  alerts: [
    {
      type: "warning",
      message:
        "The stack needs at least 4 GB RAM; database ports 5432 and 6543 are published on the host.",
    },
  ],
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
