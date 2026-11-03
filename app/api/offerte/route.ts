import { NextResponse } from 'next/server';
import { quote, site } from '@/lib/site';

export const runtime = 'nodejs';

type Body = Record<string, unknown>;

const str = (v: unknown, max = 2000) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const labelFor = (k: string) => quote.services.find((s) => s.key === k)?.label ?? k;

// Eenvoudige rate limit per IP (per serverless-instantie)
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const list = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  list.push(now);
  hits.set(ip, list);
  return list.length > 5;
}

async function sendResend(payload: { to: string; subject: string; html: string; reply_to?: string }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL || `studio tonton <offerte@studiotonton.be>`,
      ...payload,
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  // Honeypot: bots vullen dit veld in. Doe alsof alles goed ging.
  if (str(body._gotcha)) return NextResponse.json({ ok: true });

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (limited(ip)) return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 });

  const lead = {
    services: Array.isArray(body.services) ? body.services.filter((s): s is string => typeof s === 'string').slice(0, 10) : [],
    company: str(body.company, 200),
    sector: str(body.sector, 100),
    website: str(body.website, 300),
    budget: str(body.budget, 100),
    timing: str(body.timing, 100),
    name: str(body.name, 200),
    email: str(body.email, 200),
    phone: str(body.phone, 50),
    message: str(body.message, 5000),
  };

  if (!lead.services.length || lead.company.length < 2 || lead.name.length < 2 || !emailOk(lead.email) || !lead.budget || !lead.timing) {
    return NextResponse.json({ ok: false, error: 'validation' }, { status: 422 });
  }

  const rows: [string, string][] = [
    ['Diensten', lead.services.map(labelFor).join(', ')],
    ['Zaak', lead.company],
    ['Sector', lead.sector || '—'],
    ['Website', lead.website || '—'],
    ['Budget', lead.budget],
    ['Timing', lead.timing],
    ['Naam', lead.name],
    ['E-mail', lead.email],
    ['Telefoon', lead.phone || '—'],
    ['Bericht', lead.message || '—'],
  ];
  const html = `<div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;font-size:15px;color:#161616">
    <h2 style="font-weight:500;letter-spacing:-.02em">Nieuwe offerte-aanvraag: ${esc(lead.company)}</h2>
    <table cellpadding="8" style="border-collapse:collapse">${rows
      .map(([k, v]) => `<tr><td style="color:#6b6b6b;vertical-align:top;border-bottom:1px solid #eee">${k}</td><td style="border-bottom:1px solid #eee;white-space:pre-wrap">${esc(v)}</td></tr>`)
      .join('')}</table></div>`;

  const hasResend = !!process.env.RESEND_API_KEY;
  const webhook = process.env.LEAD_WEBHOOK_URL;

  if (!hasResend && !webhook) {
    if (process.env.NODE_ENV !== 'production') {
      console.log('[offerte] (geen RESEND_API_KEY / LEAD_WEBHOOK_URL ingesteld)\n', lead);
      return NextResponse.json({ ok: true, dev: true });
    }
    console.error('[offerte] Geen verzendmethode geconfigureerd, lead niet verstuurd:', lead.email);
    return NextResponse.json({ ok: false, error: 'not_configured' }, { status: 503 });
  }

  try {
    const jobs: Promise<unknown>[] = [];
    if (hasResend) {
      jobs.push(
        sendResend({
          to: process.env.LEAD_TO_EMAIL || site.email,
          subject: `Offerte: ${lead.company} · ${lead.services.map(labelFor).join(', ')}`,
          html,
          reply_to: lead.email,
        }),
      );
    }
    if (webhook) {
      jobs.push(
        fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...lead, receivedAt: new Date().toISOString(), source: 'studiotonton.be/offerte' }),
        }).then((r) => {
          if (!r.ok) throw new Error(`Webhook ${r.status}`);
        }),
      );
    }
    const results = await Promise.allSettled(jobs);
    if (results.every((r) => r.status === 'rejected')) throw (results[0] as PromiseRejectedResult).reason;
    results.forEach((r) => r.status === 'rejected' && console.error('[offerte]', r.reason));

    // Bevestiging naar de aanvrager (best effort)
    if (hasResend) {
      const first = esc(lead.name.split(' ')[0]);
      sendResend({
        to: lead.email,
        subject: 'We hebben je aanvraag goed ontvangen · studio tonton',
        html: `<div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.55;color:#161616">
          <p>Dag ${first},</p>
          <p>Bedankt voor je aanvraag voor <b>${esc(lead.company)}</b>. We bekijken ze en je hoort van ons ${site.responseTime}, met een eerste voorstel of een paar vragen.</p>
          <p>Tot snel,<br/>studio tonton</p>
          <p style="color:#6b6b6b;font-size:13px">${site.url.replace('https://', '')} · ${site.city}</p></div>`,
      }).catch((e) => console.error('[offerte] bevestiging', e));
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('[offerte] verzenden mislukt', e);
    return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 });
  }
}
