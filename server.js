import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const PORT = 3001;

const resend = new Resend('re_WhXqWPTA_3gkt7jkmctEou2VdWSS8YbgH');

app.use(cors());
app.use(express.json());

app.post('/api/send', async (req, res) => {
  const { user_name, user_email, message } = req.body;

  try {
    const response = await resend.emails.send({
      from: 'Your App <onboarding@resend.dev>',
      to: 'mohamed.mohamed2005000@gmail.com',
      subject: `New message from ${user_name}`,
      reply_to: user_email,
      html: `<p><strong>Name:</strong> ${user_name}</p>
             <p><strong>Email:</strong> ${user_email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    res.json({ success: true, data: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Email sending failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
