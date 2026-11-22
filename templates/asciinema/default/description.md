Deploys asciinema server, a web platform for uploading, sharing and embedding terminal session recordings and for live streaming terminal sessions, backed by a PostgreSQL database.
Uploaded recordings persist in a named volume and the database in its own volume.
Sign-in uses one-time email links: without SMTP configured, the link is printed to the asciinema service logs on a line containing "url from email".
The first registered account becomes the admin and can open the admin panel at /admin; set SIGN_UP_DISABLED to true to close registration and UPLOAD_AUTH_REQUIRED to true to block uploads from unauthenticated CLIs.
Point the asciinema CLI at your instance with ASCIINEMA_SERVER_URL (CLI 3.x) or ASCIINEMA_API_URL (CLI 2.x).
