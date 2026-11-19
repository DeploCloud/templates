Koel is a self-hosted music streaming server with a web player, playlists, podcasts and radio. This
template runs the official Koel image with a PostgreSQL database; the music library, uploaded
images, search indexes and database live on persistent volumes. On first start Koel migrates the
database and creates the admin account `admin@koel.dev` with password `KoelIsCool`, which you
should change immediately. Songs uploaded in the web interface are added to the library right
away; files placed in the music volume by other means are picked up with Scan under Manage >
Settings.
