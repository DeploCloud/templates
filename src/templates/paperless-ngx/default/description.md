Paperless-ngx turns scanned documents into an indexed online archive. This recommended deployment
uses PostgreSQL for metadata, Valkey as the task broker and persistent data, media, export and
consume directories. The webserver is kept private to the stack and exposed through HTTPS.
