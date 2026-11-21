ezBookkeeping is a self-hosted personal finance app for recording transactions, importing bank
exports and analyzing spending across accounts and currencies. This variant runs the single
official container with its built-in SQLite database; the database and uploaded files (avatars,
custom icons, transaction pictures) persist on named volumes. Upstream recommends SQLite only for
testing and MySQL or PostgreSQL for regular use, which the PostgreSQL variant
provides. Self-registration is open by default: create your account, then set
`EBK_USER_ENABLE_REGISTER` to `false` and redeploy.
