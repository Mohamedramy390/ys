import { Resend } from 'resend';

const resend = new Resend('re_WhXqWPTA_3gkt7jkmctEou2VdWSS8YbgH');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { user_name, user_email, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Your Name <onboarding@resend.dev>',
      to: 'mohamed.mohamed2005000@email.com',
      subject: 'New contact form submission',
      html: `
        <p><strong>Name:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
