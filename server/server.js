// server/server.js

import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import cors from "cors"
import path from "path"
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 3000;

const USER = process.env.USER_EMAIL;
const PASSWORD = process.env.USER_PASSWORD;

// Middleware to parse JSON body
app.use(bodyParser.json());
app.use(cors())

// app.use(express.static(path.join(__dirname, "../dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

// Email configuration (use your email provider settings)
const transporter = nodemailer.createTransport({
  service: "Gmail", 
  auth: {
    user: USER,
    pass: PASSWORD, 
  },
});

// API route to handle form submission
app.post("/api/send-inquiry", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: `Booking Prospect <${email}>`,
      to: USER,
      replyTo: email,
      subject: `Inquiry from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
