import nodemailer from 'nodemailer';
import formidable from 'formidable';
import fs from 'fs';

// Konfiguracja, aby Vercel nie parsował body (zrobimy to ręcznie dla załączników)
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const form = formidable();

  try {
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    const { first_name, last_name, email, phone, service_type, message, is_company } = fields;

    // KONFIGURACJA SMTP (Dane pobierane z Vercel Environment Variables)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true, // true dla portu 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // --- SZABLON MAILA (ŁADNY HTML) ---
    const htmlTemplate = `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background: #020617; padding: 20px; text-align: center;">
          <h1 style="color: #22d3ee; margin: 0; font-size: 24px;">Anfrage: ${service_type[0]}</h1>
        </div>
        <div style="padding: 30px; background: #ffffff; color: #1e293b;">
          <h2 style="border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">Kundendetails</h2>
          <p><strong>Name:</strong> ${first_name[0]} ${last_name[0]}</p>
          <p>
            <strong>Kundentyp:</strong>
            ${is_company[0] === 'true' ? 'Gewerblich' : 'Privat'}
          </p>
          <p><strong>E-Mail:</strong> <a href="mailto:${email[0]}">${email[0]}</a></p>
          <p>
            <strong>Telefon:</strong>
            <a href="tel:${phone[0]}">${phone[0]}</a>
          </p>
          <p>
            <strong>Datum:</strong>
            new Date().toLocaleString('de-DE', {
              dateStyle: 'full',
              timeStyle: 'medium',
              timeZone: 'Europe/Berlin'
            })
          </p>
          
          <h2 style="border-bottom: 2px solid #f1f5f9; padding-bottom: 10px; margin-top: 30px;">Nachricht</h2>
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; font-style: italic;">
            ${message[0].replace(/\n/g, '<br>')}
          </div>
        </div>
        <div style="background: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #64748b;">
          Gesendet von der Website <strong>akgebaeudeservice.com</strong>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"Website Form" <${process.env.SMTP_USER}>`,
      to: 'info@akgebaeudeservice.com',
      subject: `Neue Anfrage: ${service_type[0]} - ${first_name[0]} ${last_name[0]}`,
      html: htmlTemplate,
      replyTo: email[0],
      attachments: files.attachments ? [{
        filename: files.attachments[0].originalFilename,
        path: files.attachments[0].filepath
      }] : []
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error sending email', error: error.message });
  }
}