Deploys the Kutt URL shortener with a PostgreSQL database and a Redis cache, following the upstream PostgreSQL setup.
Database migrations run automatically at every start; the PostgreSQL data, the Redis data and the custom theme folder (/kutt/custom) persist in named volumes.
On the first visit Kutt asks you to create the admin account; public sign-up and anonymous links are disabled by default, and the admin can add users from the admin page.
Password reset, email verification and public sign-up need SMTP: set MAIL_ENABLED=true with the MAIL_* variables, plus DISALLOW_REGISTRATION=false to open sign-up.
