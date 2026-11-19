Evolution API is a REST API for sending and receiving WhatsApp messages, either through a WhatsApp
Web session or the official Cloud API, with webhooks and chatbot integrations. This template runs
the official image with PostgreSQL for instances, credentials, messages and contacts, and Redis with
append-only persistence for the WhatsApp session keys; both are kept on volumes, as is the
/evolution/instances directory. After deploying, open /manager, sign in with the generated
AUTHENTICATION_API_KEY and create an instance to link a phone by QR code.
