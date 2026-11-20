HedgeDoc is a realtime collaborative markdown editor for notes, diagrams and slide decks. This
template runs the official HedgeDoc image with a PostgreSQL database; notes, users and sessions
live in the database volume and images uploaded to notes are kept on a separate uploads volume.
Users sign up with email and password from the start page. Guests cannot create notes and can
only open notes whose permission allows guest access. Turn off CMD_ALLOW_EMAIL_REGISTER once your
accounts exist.
