'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string(),
  message: z.string(),
});

export async function sendEmail(formData: z.infer<typeof formSchema>) {
  const parsedData = formSchema.safeParse(formData);

  if (!parsedData.success) {
    throw new Error('Invalid form data.');
  }

  const { name, email, phone, subject, message } = parsedData.data;

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // This must be a verified domain on Resend
      to: 'procureurjustice44@gmail.com',
      subject: `Nouveau message de contact : ${subject}`,
      html: `
        <h1>Nouveau message depuis votre site web</h1>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || 'Non fourni'}</p>
        <hr />
        <h2>Message :</h2>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error('Failed to send email.');
    }

    return data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email.');
  }
}
