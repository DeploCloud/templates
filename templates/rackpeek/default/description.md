RackPeek is a web UI and CLI for documenting the hardware, systems, services and connections of a
home lab or small IT environment. The whole inventory, its automatic backups and the session keys
live as YAML files in the persistent /app/config volume. The inventory API and the MCP endpoint at
/mcp are enabled with the generated RPK_API_KEY, sent by clients in the X-Api-Key header. The web
UI has no built-in login, so keep the domain private or protect it yourself.
