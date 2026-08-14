import type { TemplateRaw } from "../../schemas";

export default {
  name: "Supabase",
  shortDescription: "Open-source Firebase alternative giving you a dedicated Postgres database with auth, storage, and APIs for your apps.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"supabase","url":"https://github.com/supabase"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/supabase/supabase","website":"https://supabase.com/","docs":"https://supabase.com/docs/guides/self-hosting"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
