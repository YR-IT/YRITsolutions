import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

const requiredEnvVars = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "CONTACT_TO"];

const createTransporter = () => {
  const missing = requiredEnvVars.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing contact email configuration: ${missing.join(", ")}`);
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

router.post("/", async (req, res) => {
  const { name, email, phone, company, service, message } = req.body;

  if (!name?.trim() || !email?.trim()) {
    return res.status(400).json({ message: "Name and email are required." });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.trim())) {
    return res.status(400).json({ message: "Please provide a valid email address." });
  }

  if (phone && !/^\+?[1-9]\d{1,14}$/.test(phone.trim())) {
    return res.status(400).json({ message: "Please provide a valid phone number." });
  }

  try {
    const transporter = createTransporter();
    const safeName = name.trim();
    const safeEmail = email.trim().toLowerCase();
    const subject = `New contact request from ${safeName}`;

    await transporter.sendMail({
      from: `Website Contact Form <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: safeEmail,
      subject,
      text: [
        `Name: ${safeName}`,
        `Email: ${safeEmail}`,
        `Phone: ${phone?.trim() || "Not provided"}`,
        `Company: ${company?.trim() || "Not provided"}`,
        `Service: ${service?.trim() || "Not specified"}`,
        "",
        "Message:",
        message?.trim() || "No message provided",
      ].join("\n"),
    });

    res.status(201).json({ message: "Contact request sent successfully." });
  } catch (error) {
    console.error("❌ Contact email failed:", error.message);
    res.status(500).json({ message: "Unable to send your request right now." });
  }
});

export default router;
