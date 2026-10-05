// POST name, email, message (+ optional subject) from the embry.dev contact form.
// Sends one plain-text email to the verified destination with Reply-To set to the visitor.
import { EmailMessage } from 'cloudflare:email';

const ALLOWED = ['https://embry.dev', 'https://www.embry.dev', 'http://localhost:4321', 'http://localhost:4329'];
const FROM = 'form@embry.dev';
const TO = 'jtembryjr@icloud.com';

const oneLine = (s, max) => String(s ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);
const encodeHeader = (s) => (/^[\x20-\x7e]*$/.test(s) ? s : `=?UTF-8?B?${btoa(String.fromCharCode(...new TextEncoder().encode(s)))}?=`);
const b64Body = (s) => btoa(String.fromCharCode(...new TextEncoder().encode(s))).replace(/.{76}/g, '$&\r\n');

export default {
  async fetch(req, env) {
    const origin = req.headers.get('Origin') ?? '';
    const cors = {
      'Access-Control-Allow-Origin': ALLOWED.includes(origin) ? origin : ALLOWED[0],
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      Vary: 'Origin',
    };
    const reply = (body, status = 200) => Response.json(body, { status, headers: cors });

    if (req.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (req.method !== 'POST') return reply({ ok: false, error: 'POST only' }, 405);
    if (!ALLOWED.includes(origin)) return reply({ ok: false, error: 'Forbidden' }, 403);

    let form;
    try { form = await req.formData(); } catch { return reply({ ok: false, error: 'Bad form' }, 400); }

    // Honeypot: real visitors never see this field. Pretend success so bots move on.
    if (form.get('website')) return reply({ ok: true });

    const name = oneLine(form.get('name'), 120);
    const email = oneLine(form.get('email'), 200);
    const subject = oneLine(form.get('subject'), 150) || 'Project inquiry';
    const message = String(form.get('message') ?? '').trim().slice(0, 10000);
    if (!name || !message || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) {
      return reply({ ok: false, error: 'Please fill in your name, a valid email, and a message.' }, 400);
    }

    const page = oneLine(form.get('page'), 300);
    const text = `${message}\n\n--\nFrom: ${name} <${email}>\nPage: ${page || 'unknown'}\nSent via the embry.dev contact form. Reply to answer them directly.\n`;
    const raw = [
      `From: ${encodeHeader('embry.dev contact form')} <${FROM}>`,
      `To: <${TO}>`,
      `Reply-To: ${encodeHeader(name)} <${email}>`,
      `Subject: ${encodeHeader(`${subject} — ${name}`)}`,
      `Date: ${new Date().toUTCString()}`,
      `Message-ID: <${crypto.randomUUID()}@embry.dev>`,
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=utf-8',
      'Content-Transfer-Encoding: base64',
      '',
      b64Body(text),
    ].join('\r\n');

    try {
      await env.MAIL.send(new EmailMessage(FROM, TO, raw));
    } catch (e) {
      console.error('send failed', e?.message);
      return reply({ ok: false, error: 'Could not send right now.' }, 502);
    }
    return reply({ ok: true });
  },
};
