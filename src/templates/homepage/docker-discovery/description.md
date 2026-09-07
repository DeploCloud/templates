Homepage is a configurable dashboard for bookmarks, service links, status checks and API widgets. This variant adds a restricted Docker socket proxy so containers carrying Homepage labels can be discovered automatically.

The proxy allows read-only container, service and task inspection. The Homepage configuration remains in a persistent volume.

On first start, Homepage creates example cards whose links point to `http://localhost/`. These are placeholders; replace them in `services.yaml` with the real URLs of your services.
