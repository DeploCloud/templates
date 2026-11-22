Deploys the official Directory Lister image, which serves a browsable listing of the files in its `/data` directory with search, file hashes, README rendering and zip downloads.
The shared files persist on a named volume; the application cache stays in the container so an image update starts with a clean cache.
The listing starts empty: copy your files into the files volume after deployment, and keep private data out of it because the listing has no authentication.
