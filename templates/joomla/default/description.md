Joomla is an open source content management system for building websites and online applications.
This template runs the official Apache image with a MariaDB database and installs the site
automatically on first start, creating the administrator account from the generated variables.
The Joomla files, extensions and media live in a persistent volume next to the database volume.
Sign in at `/administrator` and configure SMTP in Global Configuration if the site should send mail.
