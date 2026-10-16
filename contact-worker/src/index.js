// POST name, email, message (+ optional subject) from the embry.dev contact form.
// Sends one email to the verified destination with Reply-To set to the visitor.
// A consultation request (slotStart and slotEnd) also attaches a calendar file.
import { EmailMessage } from 'cloudflare:email';

const ALLOWED = ['https://embry.dev', 'https://www.embry.dev', 'http://localhost:4321', 'http://localhost:4329'];
const FROM = 'form@embry.dev';
const TO = 'jtembryjr@icloud.com';

const oneLine = (s, max) => String(s ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);
const encodeHeader = (s) => (/^[\x20-\x7e]*$/.test(s) ? s : `=?UTF-8?B?${btoa(String.fromCharCode(...new TextEncoder().encode(s)))}?=`);
const b64Body = (s) => btoa(String.fromCharCode(...new TextEncoder().encode(s))).replace(/.{76}/g, '$&\r\n');
const icsDate = (ms) => new Date(ms).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
const icsEscape = (s) => String(s).replace(/\\/g, '\\\\').replace(/\r?\n/g, '\\n').replace(/[,;]/g, (ch) => `\\${ch}`);

// A consultation request carries slotStart/slotEnd. Anything else stays a plain email.
function consultSlot(form) {
  const start = Date.parse(oneLine(form.get('slotStart'), 40));
  const end = Date.parse(oneLine(form.get('slotEnd'), 40));
  if (!Number.isFinite(start) || !Number.isFinite(end)) return null;
  const minutes = (end - start) / 60000;
  if (minutes < 5 || minutes > 120) return null;
  return { start, end };
}

function consultationIcs({ start, end, name, email, phone, topic }) {
  const desc = icsEscape(`Phone: ${phone}\nTopic: ${topic}\nEmail: ${email}`);
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Embry Development//consultation//EN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${crypto.randomUUID()}@embry.dev`,
    `DTSTAMP:${icsDate(Date.now())}`,
    `DTSTART:${icsDate(start)}`,
    `DTEND:${icsDate(end)}`,
    `SUMMARY:${icsEscape(`Consultation with ${name}`)}`,
    `DESCRIPTION:${desc}`,
    'END:VEVENT',
    'END:VCALENDAR',
    '',
  ].join('\r\n');
}

function rawMessage({ name, email, subject, text, ics }) {
  const headers = [
    `From: ${encodeHeader('embry.dev contact form')} <${FROM}>`,
    `To: <${TO}>`,
    `Reply-To: ${encodeHeader(name)} <${email}>`,
    `Subject: ${encodeHeader(`${subject} — ${name}`)}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${crypto.randomUUID()}@embry.dev>`,
    'MIME-Version: 1.0',
  ];
  if (!ics) {
    return [...headers, 'Content-Type: text/plain; charset=utf-8', 'Content-Transfer-Encoding: base64', '', b64Body(text)].join('\r\n');
  }
  const boundary = `emb-${crypto.randomUUID()}`;
  return [
    ...headers,
    `Content-Type: multipart/mixed; boundary="${boundary}"`,
    '',
    `--${boundary}`,
    'Content-Type: text/plain; charset=utf-8',
    'Content-Transfer-Encoding: base64',
    '',
    b64Body(text),
    `--${boundary}`,
    'Content-Type: text/calendar; charset=utf-8; method=PUBLISH',
    'Content-Transfer-Encoding: base64',
    'Content-Disposition: attachment; filename="consultation.ics"',
    '',
    b64Body(ics),
    `--${boundary}--`,
    '',
  ].join('\r\n');
}

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
    const slot = consultSlot(form);
    const phone = oneLine(form.get('phone'), 40);
    const topic = oneLine(form.get('topic'), 200);
    const ics = slot ? consultationIcs({ ...slot, name, email, phone, topic }) : null;
    const note = ics ? 'A calendar file is attached. Add it only if you accept the call.\n' : '';
    const text = `${message}\n\n--\nFrom: ${name} <${email}>\nPage: ${page || 'unknown'}\n${note}Sent via the embry.dev contact form. Reply to answer them directly.\n`;
    const raw = rawMessage({ name, email, subject, text, ics });

    try {
      await env.MAIL.send(new EmailMessage(FROM, TO, raw));
    } catch (e) {
      console.error('send failed', e?.message);
      return reply({ ok: false, error: 'Could not send right now.' }, 502);
    }
    return reply({ ok: true });
  },
};
