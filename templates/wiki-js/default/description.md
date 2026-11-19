Wiki.js 3 is a wiki and knowledge base with Markdown and visual editors, page history and live
collaboration. This template runs the official image with a PostgreSQL 18 database; pages, uploads
and settings live in the database volume, and the wiki data, disk storage and Git storage
directories each keep their own volume. The first administrator is created from ADMIN_EMAIL and
ADMIN_PASS, and after signing in you should enable "Trust X-Forwarded-* Proxy Headers" under
Administration > Security so client addresses are seen correctly behind the proxy.
