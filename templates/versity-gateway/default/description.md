Versity Gateway turns a filesystem into an S3-compatible object storage server. This template runs the
POSIX backend with the WebUI on the main domain and the S3 and admin API on the `s3.` subdomain.
Objects, versioned object history and IAM accounts persist on separate volumes. Sign in with the
generated root access key and secret key, then create buckets and additional users from the WebUI.
