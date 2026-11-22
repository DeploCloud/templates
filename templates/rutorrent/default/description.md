ruTorrent is a PHP web front-end for the rTorrent BitTorrent client; this template runs both in one container using a community image, because upstream publishes no container image.
The web UI is protected by HTTP basic auth: sign in as `admin` with the generated password found in the `rutorrent.htpasswd` mount.
rTorrent and ruTorrent settings, sessions and logs persist in `/data`, and downloads in `/downloads` (`temp` while downloading, `complete` when done).
The incoming peer and DHT ports are not published, so downloads rely on outgoing peer connections.
