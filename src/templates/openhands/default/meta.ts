import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "OpenHands Agent Canvas with authenticated access and persistent projects, settings and conversations.",
  category: {
    name: "AI",
    icon: "sparkles",
    description:
      "Local language models, chat interfaces, vector stores and the tooling built around them.",
  },
  developedBy: { label: "OpenHands", url: "https://openhands.dev/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/OpenHands/OpenHands",
    website: "https://openhands.dev/",
    docs: [
      "https://github.com/OpenHands/OpenHands/blob/v1.28.1/docs/SELF_HOSTING.md",
    ],
  },
  alerts: [
    {
      type: "info",
      message:
        "Open /canvas and enter LOCAL_BACKEND_API_KEY from the template environment. Configure an LLM provider before starting an agent.",
    },
    {
      type: "warning",
      message:
        "Agents can modify the mounted project and state volumes. Share this instance only with trusted users. Legacy OpenHands data is not migrated automatically.",
    },
  ],
  lastUpdate: new Date("2026-10-20T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
