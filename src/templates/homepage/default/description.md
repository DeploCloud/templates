Homepage is a configurable dashboard for bookmarks, service links, status checks and API widgets. This default variant keeps its configuration in a persistent volume and does not require access to the server Docker socket.

On first start, Homepage creates example cards whose links point to `http://localhost/`. These are placeholders; replace them in `services.yaml` with the real URLs of your services.
