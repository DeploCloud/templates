import type { TemplateRaw } from "../../schemas";

export default {
  name: "Home Assistant",
  shortDescription: "Open-source home automation hub that controls smart devices locally, putting privacy and offline control first.",
  category: {"name":"Development","icon":"code","description":"Git hosting, CI, registries, API tooling and the rest of a developer's own stack."},
  developedBy: {"label":"home-assistant","url":"https://github.com/home-assistant"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/home-assistant/core","website":"https://www.home-assistant.io/","docs":"https://www.home-assistant.io/getting-started/onboarding/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
