import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'info@akwebsolutions.nl';
const RESEND_FROM = process.env.RESEND_FROM ?? 'noreply@akwebsolutions.nl';
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;

async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!RECAPTCHA_SECRET) return true;
  if (!token) {
    console.warn('[recaptcha] lege token ontvangen');
    return false;
  }
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${RECAPTCHA_SECRET}&response=${token}`,
  });
  const data = await res.json() as { success: boolean; score: number; 'error-codes'?: string[] };
  console.log('[recaptcha] response:', JSON.stringify(data));
  return data.success && data.score >= 0.5;
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { company, name, phone, email, branche, message, recaptchaToken } = data;

    if (!name || (!phone && !email)) {
      return NextResponse.json(
        { error: 'Naam en telefoonnummer of e-mailadres zijn verplicht.' },
        { status: 400 },
      );
    }

    const human = await verifyRecaptcha(recaptchaToken ?? '');
    if (!human) {
      console.warn('[contact] reCAPTCHA check mislukt — formulier toch verwerkt');
    }

    const timestamp = new Date().toLocaleString('nl-NL', {
      timeZone: 'Europe/Amsterdam',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    const subject = `[AKWS] Nieuwe aanvraag — ${name}${company ? ` van ${company}` : ''}`;

    const textBody = `Nieuwe aanvraag via akwebsolutions.nl

Naam: ${name}
Bedrijf: ${company || '—'}
Type bedrijf: ${branche || '—'}
Contact: ${phone || email || '—'}

Vraag of toelichting:
${message || '(geen toelichting ingevuld)'}

---
Verzonden via contactformulier op ${timestamp}`;

    const htmlBody = `
<div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;color:#14101c">
  <div style="background:#7c3aed;padding:24px 32px;border-radius:12px 12px 0 0">
    <div style="color:#fff;font-size:11px;letter-spacing:.12em;text-transform:uppercase;opacity:.7">AK Web Solutions</div>
    <div style="color:#fff;font-size:22px;font-weight:700;margin-top:6px">Nieuwe aanvraag via akwebsolutions.nl</div>
  </div>
  <div style="background:#fff;border:1px solid #e8e4f0;border-top:none;padding:28px 32px;border-radius:0 0 12px 12px">
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:10px 0;color:#6a6075;font-size:12px;letter-spacing:.06em;text-transform:uppercase;width:130px;vertical-align:top">Naam</td><td style="padding:10px 0;font-weight:600">${name}</td></tr>
      <tr style="border-top:1px solid #f0ecf8"><td style="padding:10px 0;color:#6a6075;font-size:12px;letter-spacing:.06em;text-transform:uppercase;vertical-align:top">Bedrijf</td><td style="padding:10px 0">${company || '—'}</td></tr>
      <tr style="border-top:1px solid #f0ecf8"><td style="padding:10px 0;color:#6a6075;font-size:12px;letter-spacing:.06em;text-transform:uppercase;vertical-align:top">Type bedrijf</td><td style="padding:10px 0">${branche || '—'}</td></tr>
      <tr style="border-top:1px solid #f0ecf8"><td style="padding:10px 0;color:#6a6075;font-size:12px;letter-spacing:.06em;text-transform:uppercase;vertical-align:top">Contact</td><td style="padding:10px 0">${phone ? `<a href="tel:${phone.replace(/\s/g, '')}" style="color:#7c3aed">${phone}</a>` : ''}${phone && email ? ' · ' : ''}${email ? `<a href="mailto:${email}" style="color:#7c3aed">${email}</a>` : ''}</td></tr>
      ${message ? `<tr style="border-top:1px solid #f0ecf8"><td style="padding:10px 0;color:#6a6075;font-size:12px;letter-spacing:.06em;text-transform:uppercase;vertical-align:top">Toelichting</td><td style="padding:10px 0;line-height:1.6">${message.replace(/\n/g, '<br>')}</td></tr>` : ''}
    </table>
    <div style="margin-top:24px;padding-top:20px;border-top:1px solid #f0ecf8;font-size:12px;color:#9490a0">
      Verzonden via contactformulier op ${timestamp}
    </div>
  </div>
</div>`;

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      // Notificatie naar Ayoub
      await resend.emails.send({
        from: RESEND_FROM,
        to: CONTACT_EMAIL,
        replyTo: email || undefined,
        subject,
        text: textBody,
        html: htmlBody,
      });

      // Bevestiging naar klant (alleen als e-mailadres is ingevuld)
      if (email) {
        const confirmHtml = `
<div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;color:#14101c">
  <div style="background:#7c3aed;padding:24px 32px;border-radius:12px 12px 0 0">
    <div style="color:#fff;font-size:11px;letter-spacing:.12em;text-transform:uppercase;opacity:.7">AK Web Solutions</div>
    <div style="color:#fff;font-size:22px;font-weight:700;margin-top:6px">Bedankt voor je aanvraag, ${name.split(' ')[0]}.</div>
  </div>
  <div style="background:#fff;border:1px solid #e8e4f0;border-top:none;padding:32px;border-radius:0 0 12px 12px">
    <p style="margin:0 0 20px;font-size:16px;line-height:1.6;color:#3d3550">
      We hebben je aanvraag ontvangen en nemen <strong>binnen 24 uur</strong> contact met je op via
      ${phone ? `<strong>${phone}</strong>` : `<strong>${email}</strong>`}.
    </p>
    ${message ? `
    <div style="background:#f8f6ff;border-radius:10px;padding:16px 20px;margin-bottom:20px">
      <div style="font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#9490a0;margin-bottom:6px">Jouw bericht</div>
      <p style="margin:0;font-size:14px;line-height:1.6;color:#3d3550">${message.replace(/\n/g, '<br>')}</p>
    </div>` : ''}
    <p style="margin:0 0 8px;font-size:15px;line-height:1.6;color:#3d3550">
      Heb je een dringende vraag? Bel of app gerust:
    </p>
    <a href="tel:+31685722387" style="display:inline-block;background:#7c3aed;color:#fff;text-decoration:none;padding:12px 24px;border-radius:8px;font-weight:600;font-size:15px;margin-bottom:24px">
      06 — 85 72 23 87
    </a>
    <div style="padding-top:20px;border-top:1px solid #f0ecf8;font-size:12px;color:#9490a0">
      AK Web Solutions · Baarn · <a href="https://akwebsolutions.nl" style="color:#7c3aed">akwebsolutions.nl</a>
    </div>
  </div>
</div>`;

        const confirmText = `Hoi ${name.split(' ')[0]},

Bedankt voor je aanvraag via akwebsolutions.nl. We nemen binnen 24 uur contact met je op.

Dringende vraag? Bel of app: 06 — 85 72 23 87

Met vriendelijke groet,
Ayoub Elkaoui
AK Web Solutions
akwebsolutions.nl`;

        await resend.emails.send({
          from: RESEND_FROM,
          to: email,
          replyTo: CONTACT_EMAIL,
          subject: `Bedankt voor je aanvraag, ${name.split(' ')[0]}!`,
          text: confirmText,
          html: confirmHtml,
        });
      }
    } else {
      console.log('[contact form] RESEND_API_KEY niet ingesteld. Formulierdata:', {
        name, company, phone, email, branche, message,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact form] error:', err);
    return NextResponse.json(
      { error: 'Er is iets misgegaan. Probeer het opnieuw of bel direct.' },
      { status: 500 },
    );
  }
}
