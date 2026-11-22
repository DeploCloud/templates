Bugsink is a self-hosted error tracker that accepts events from the standard Sentry SDKs and shows
stacktraces, local variables and request context. This template runs the official Bugsink image with
a PostgreSQL database; issues, events and accounts persist in the database volume. A superuser is
created on first start from ADMIN_EMAIL and the generated ADMIN_PASSWORD, after which you create a
project and point your SDK at its DSN.
