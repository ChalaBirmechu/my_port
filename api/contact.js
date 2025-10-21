// pages/api/contact.js

import mongoose from "mongoose";
import nodemailer from "nodemailer";

// --------------------
// MongoDB Connection
// --------------------
const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  console.warn("⚠️ MONGODB_URI not set.");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// --------------------
// Schema
// --------------------
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

// --------------------
// Email Transport
// --------------------
async function createTransporter() {
  if (process.env.NODE_ENV === "production") {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  } else {
    const testAccount = await nodemailer.createTestAccount();
    return nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  }
}

// --------------------
// API Handler
// --------------------
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, error: "Method Not Allowed" });
  }

  try {
    const { name, email, message } = req.body || {};

    // Validation
    if (!name || name.trim().length < 2)
      return res
        .status(400)
        .json({ success: false, error: "Name must be at least 2 characters" });

    if (!email || !/^\S+@\S+\.\S+$/.test(email))
      return res
        .status(400)
        .json({ success: false, error: "Invalid email address" });

    if (!message || message.trim().length < 10)
      return res.status(400).json({
        success: false,
        error: "Message must be at least 10 characters",
      });

    await connectToDatabase();

    // Save to DB
    await Contact.create({ name, email, message });

    const transporter = await createTransporter();

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER || "noreply@portfolio.com",
      to: "chalabirmechu@gmail.com",
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Auto-reply to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER || "noreply@portfolio.com",
      to: email,
      subject: "Thank you for contacting Chala Birmechu",
      html: `
        <h2>Thank you for your message!</h2>
        <p>Hi ${name},</p>
        <p>Thank you for reaching out! I’ll get back to you soon.</p>
        <p>Best regards,<br/>Chala Birmechu</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (err) {
    console.error("❌ Contact form error:", err);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
}
