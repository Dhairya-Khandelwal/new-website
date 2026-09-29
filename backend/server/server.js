// backend/server/server.js
// -----------------------------------------------------------------------------
// OPTIONAL Node/Express server that emails contact-form submissions using
// Nodemailer + Gmail. This is NOT required to host or run the website -
// the live site's Contact page (frontend/src/pages/Contact.jsx) submits
// directly to a free third-party service (FormSubmit) instead, which is
// what makes the site work as pure static files on GitHub Pages /
// Cloudflare Pages.
//
// Use this file only if you'd rather send contact-form emails through your
// own Gmail account instead of FormSubmit. See backend/server/readme.txt
// for the Gmail App Password setup steps referenced below.
//
// HOW TO RUN THIS LOCALLY:
//   cd backend/server
//   npm install
//   node server.js
//   (server listens on http://localhost:5000 by default)
//
// HOW TO CONNECT THE FRONTEND TO THIS SERVER:
//   1. Deploy this server somewhere that can run Node.js continuously -
//      GitHub Pages and Cloudflare Pages CANNOT run this file, since they
//      only serve static files. Free options include Render, Railway, or
//      Fly.io.
//   2. Set the frontend's VITE_FORMSPREE_URL environment variable (see
//      frontend/src/pages/Contact.jsx) to point at this server's
//      "/send-email" endpoint, e.g. https://your-server.onrender.com/send-email
//   3. Rebuild and redeploy the frontend.

require("dotenv").config(); // loads settings from a local .env file, if present
const express = require("express");
const cors = require("cors"); // allows the frontend (a different origin) to call this server
const nodemailer = require("nodemailer");

const app = express();

// Lets the server understand incoming JSON request bodies (the contact
// form data sent from the frontend).
app.use(express.json());

// Allows requests from any origin. For production, you may want to
// restrict this to just your website's domain instead of "*".
app.use(cors());

// Nodemailer "transporter" - the object that actually sends emails.
// It's configured to send through Gmail. Before this will work you must:
//   1. Enable 2-Step Verification on the sending Gmail account.
//   2. Generate an "App Password" for that account (Google Account ->
//      Security -> App passwords).
//   3. Put that Gmail address and App Password into a `.env` file in this
//      folder (backend/server/.env) as:
//        GMAIL_USER=your_email@gmail.com
//        GMAIL_APP_PASSWORD=your_app_password
//      (never commit your real .env file or App Password to git).
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// The endpoint the frontend's Contact form posts to. Expects a JSON body
// with the same fields as frontend/src/pages/Contact.jsx's `form` state:
// name, email, phone, product, quantity, address, message.
app.post("/send-email", async (req, res) => {
  const { name, email, phone, product, quantity, address, message } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      // Where the contact-form emails should be delivered to. Change this
      // to your own business inbox.
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Product: ${product}
Quantity: ${quantity}
Address: ${address}

Message:
${message}
      `,
    });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    // Log the real error on the server for debugging, but keep the
    // response generic so we don't leak internal details to the browser.
    console.error("Failed to send email:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
});

// Port the server listens on. Can be overridden with a PORT environment
// variable (most hosting platforms set this automatically).
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Contact form email server running on http://localhost:${PORT}`);
});
