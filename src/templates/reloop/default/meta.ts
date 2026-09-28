import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Self-hosted email platform for transactional mail, campaigns, inbound email and delivery analytics.",
  category: {
    name: "Email",
    icon: "mail",
    description:
      "Mail servers, transactional senders, newsletters and the inboxes to read them in.",
  },
  developedBy: { label: "Reloop Labs", url: "https://github.com/reloop-labs" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/reloop-labs/reloop",
    website: "https://reloop.sh",
    docs: ["https://reloop.sh/docs/self-host"],
  },
  alerts: [
    {
      type: "warning",
      message:
        "Before sending or receiving mail, point link and inbound subdomains to this server and configure the required SPF, DKIM, DMARC and MX records. SMTP also requires ports 25, 465 and 587 to be reachable.",
    },
    {
      type: "info",
      message:
        "After deployment, create the first administrator at /dashboard/setup using the generated ADMIN_SETUP_KEY from the deployment environment.",
    },
    {
      type: "info",
      message:
        "Configure SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD and SMTP_SECURE, or set RELOOP_API_KEY and a verified RELOOP_SENDER_DOMAIN to send sign-in codes and invitations.",
    },
  ],
  lastUpdate: new Date("2026-09-28T00:00:00.000Z"),
  createdAt: new Date("2026-09-28T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
