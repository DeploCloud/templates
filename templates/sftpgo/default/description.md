SFTPGo is a file transfer server managed from a web admin panel at `/web/admin`, with a browser file client at `/web/client`, a REST API under `/api/v2` and WebDAV under `/dav`, all on the same domain.
User files and backups persist in the `/srv/sftpgo` volume, while the SQLite database and SSH host keys persist in `/var/lib/sftpgo`.
The first admin is created on the first start from the generated environment variables; sign in with them, then add users and point them at local storage or an S3, GCS or Azure Blob bucket.
