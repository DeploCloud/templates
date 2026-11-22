ByteStash is a web app for storing, organising and sharing code snippets, with a REST API and a
built-in MCP endpoint at /mcp for AI assistants. This variant runs the official image with its
default SQLite database, which persists in the /data/snippets volume; the JWT signing secret is
generated at deploy time. Only the first sign-up is allowed while ALLOW_NEW_ACCOUNTS is false, and
admin rights are granted afterwards by running `node src/scripts/admin.js grant <username>` inside
the container.
