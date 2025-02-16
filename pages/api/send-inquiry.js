import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Booking Prospect" <${email}>`,
      to: process.env.USER_EMAIL,
      replyTo: email,
      subject: `Inquiry from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Error sending email" });
  }
}
