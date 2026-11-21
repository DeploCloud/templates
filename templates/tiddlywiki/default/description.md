TiddlyWiki is a non-linear personal notebook built from small linked notes called tiddlers. This
template runs the official TiddlyWiki npm release as a Node.js server, initialises a wiki from the
server edition on first start and saves every tiddler as a file on a persistent volume. The whole
wiki is protected by basic authentication: sign in as `admin` with the password stored in the
`TW_PASSWORD` environment variable.
