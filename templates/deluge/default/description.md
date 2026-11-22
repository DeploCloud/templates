Deluge is a lightweight BitTorrent client; this template runs its daemon and web UI together, using the LinuxServer.io image because upstream publishes no container image.
On the first start the web UI password is set to the generated `DELUGE_WEB_PASSWORD`; after signing in, connect to the local daemon in the Connection Manager.
Settings, plugins and session state live in `/config` and downloads in `/downloads`, both on persistent volumes.
The incoming peer port is not published, so downloads rely on outgoing peer connections.
