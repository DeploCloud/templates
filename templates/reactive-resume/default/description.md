Reactive Resume is an open-source resume builder with templates, PDF export, public resume links and job application tracking.
This template runs the official image with a bundled PostgreSQL database; accounts and resumes persist in the database volume and uploads (profile pictures, application files) in the `/app/data` volume.
Sign-ups are open after deployment, so create your account and then set `FLAG_DISABLE_SIGNUPS` to `true` if the instance is private.
Email verification and password reset need SMTP settings, and AI features accept personal API keys out of the box.
