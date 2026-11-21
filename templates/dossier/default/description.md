Deploys Dossier, a single-user job search app that turns one career profile into tailored resumes and cover letters and tracks each application, together with a PostgreSQL 18 database.
The database and the /data volume, which holds nightly backups and export files, persist across redeploys.
Sign in with the generated DOSSIER_LOGIN_PASSWORD from the environment settings; the container hashes it on every start, so a restart signs you out.
After signing in, choose an AI provider under Settings to enable drafting, and optionally a job source under Settings, Job search.
