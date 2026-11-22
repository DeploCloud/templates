LMS (Lightweight Music Server) streams your self-hosted music library through a web player and a Subsonic/OpenSubsonic API for mobile and desktop clients.
The SQLite database (users, settings, playlists, scan results) and downloaded podcast episodes persist in the `lms-data` volume, and the music library lives in the `lms-music` volume mounted at `/music`.
On first launch a setup assistant creates the admin account; afterwards add `/music` as a library and start a scan from the administration settings.
A small `lms.conf` is mounted so LMS trusts the reverse proxy and sees real client IPs for login throttling.
