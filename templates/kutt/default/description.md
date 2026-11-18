Deploys the Kutt URL shortener as a single container using SQLite, which is enough for most personal and small-team setups.
The SQLite database and the custom theme folder (/kutt/custom) persist in named volumes.
On the first visit Kutt asks you to create the admin account; public sign-up and anonymous links are disabled by default, and the admin can add users from the admin page.
Password reset, email verification and public sign-up need SMTP: set MAIL_ENABLED=true with the MAIL_* variables, plus DISALLOW_REGISTRATION=false to open sign-up.
