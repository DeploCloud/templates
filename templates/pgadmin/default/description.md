pgAdmin is the web administration and development platform for PostgreSQL. This template runs the
official pgAdmin 4 container in server mode, keeping its configuration database, saved server
definitions, sessions and uploaded files in a persistent volume at `/var/lib/pgadmin`. The first
login uses the email and generated password from the environment; PostgreSQL servers are added
from the UI after signing in.
