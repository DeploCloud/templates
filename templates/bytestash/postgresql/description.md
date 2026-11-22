ByteStash is a web app for storing, organising and sharing code snippets, with a REST API and a
built-in MCP endpoint at /mcp for AI assistants. This variant runs the official image with a
PostgreSQL 18 database whose tables are created on first start; snippets, users and settings
persist in the database volume, and the /data/snippets volume stays mounted as upstream requires.
Only the first sign-up is allowed while ALLOW_NEW_ACCOUNTS is false, and admin rights are granted
afterwards by running `node src/scripts/admin.js grant <username>` inside the container.
