// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  console.log('hit', process.env.EMAIL_PASS)
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Configure the email transport
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Or another service provider
      auth: {
        user: process.env.EMAIL_USER,  // Your email
        pass: process.env.EMAIL_PASS,  // Your email password
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.RECIPIENT_EMAIL, // Your email
        subject: `New message from ${name}: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br>${message}</p>
        `,
      });

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
