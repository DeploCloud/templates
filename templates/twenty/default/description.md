Twenty is an open-source CRM for managing companies, people and sales workflows. This template uses
the documented self-hosted layout: an API server, background worker, PostgreSQL database and Redis.
Files are stored on a persistent local volume and the application is exposed through the generated
domain.

After upgrading an existing instance to v2.51.0, run `docker compose exec twenty-server yarn command:prod upgrade:2-51:migrate-rich-text-to-tiptap` once to migrate stored rich-text records.
