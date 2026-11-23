Deploys WsgiDAV, a Python WebDAV server running on the Cheroot WSGI server, which shares one folder with any WebDAV client such as Windows Explorer, macOS Finder or davfs2.
Shared files are stored on a persistent volume mounted at `/var/wsgidav-root`.
The generated `wsgidav.yaml` grants one `admin` user with a random password full read and write access; edit that file to add users, read-only shares or anonymous access.
Locks are kept in memory and reset when the container restarts, and custom (dead) WebDAV properties are disabled, as in the upstream defaults.
