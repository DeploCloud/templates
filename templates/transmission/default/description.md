Transmission is a lightweight BitTorrent client; this template runs its daemon with the built-in web interface behind the generated domain, using the LinuxServer.io image because upstream publishes no container image.
Sign in with the username `admin` and the generated `TRANSMISSION_PASS`.
Settings live in `/config`, finished and incomplete downloads in `/downloads`, and `.torrent` files dropped into `/watch` are added automatically; all three are persistent volumes.
The incoming peer port is not published, so downloads rely on outgoing peer connections.
