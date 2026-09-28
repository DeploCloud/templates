Reloop is an open-source email platform for transactional email, campaigns, inbound mail, templates, contacts and delivery analytics.

The stack includes PostgreSQL, Redis, NATS and persistent mail queues. Add DNS records for the main, `link` and `inbound` hostnames, then configure SPF, DKIM, DMARC and MX records in the dashboard before using email delivery. Configure an outbound SMTP server in the deployment environment to send sign-in codes and invitations. Create the first administrator at `/dashboard/setup` using the generated `ADMIN_SETUP_KEY` from the deployment environment.
