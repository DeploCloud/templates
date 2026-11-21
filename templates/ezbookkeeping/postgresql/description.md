ezBookkeeping is a self-hosted personal finance app for recording transactions, importing bank
exports and analyzing spending across accounts and currencies. This variant stores its data in a
bundled PostgreSQL database, the setup upstream recommends for regular use, and keeps uploaded
files (avatars, custom icons, transaction pictures) on a named volume. Self-registration is open by
default: create your account, then set `EBK_USER_ENABLE_REGISTER` to `false` and redeploy.
