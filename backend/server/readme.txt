# backend/server/readme.txt
# -----------------------------------------------------------------------------
# NOTE: This backend is OPTIONAL and is not used by the live website - see
# the "backend/server" section of the root README.md for the full picture.
# These are just the setup steps for the Gmail account used by server.js.

node server.js
run this for backend, and also run the frontend using: npm run dev

For email we use Nodemailer. To send from your own HPCL/Gmail address,
enable 2-step verification and generate an App Password:

Gmail Setup:
   - Enable 2FA (2-Step Verification) on the Gmail account
   - Generate an App Password (Google Account -> Security -> App passwords)
   - Put the Gmail address and App Password into a ".env" file in this
     folder (see .env.example) as GMAIL_USER and GMAIL_APP_PASSWORD -
     do NOT hardcode them directly into server.js.
