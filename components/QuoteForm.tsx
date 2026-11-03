'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Arrow, ArrowLeft, Check } from './Icons';
import { quote, site } from '@/lib/site';
import { track } from '@/lib/track';

export type Lead = {
  services: string[];
  company: string;
  sector: string;
  website: string;
  budget: string;
  timing: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};

const empty: Lead = {
  services: [],
  company: '',
  sector: '',
  website: '',
  budget: '',
  timing: '',
  name: '',
  email: '',
  phone: '',
  message: '',
};

const STORAGE = 'tt-offerte-draft';
const steps = ['Wat', 'Jouw zaak', 'Budget', 'Contact'];
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

export function QuoteForm({ initialServices = [] }: { initialServices?: string[] }) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [lead, setLead] = useState<Lead>({ ...empty, services: initialServices });
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const [gotcha, setGotcha] = useState('');
  const headRef = useRef<HTMLHeadingElement>(null);
  const started = useRef(false);

  // Concept bewaren zodat niemand opnieuw moet beginnen
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (raw) {
        const saved = JSON.parse(raw) as Partial<Lead>;
        setLead((l) => ({ ...l, ...saved, services: initialServices.length ? initialServices : saved.services ?? [] }));
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE, JSON.stringify(lead));
    } catch {}
  }, [lead]);

  const set = <K extends keyof Lead>(k: K, v: Lead[K]) => {
    if (!started.current) {
      started.current = true;
      track('quote_start');
    }
    setLead((l) => ({ ...l, [k]: v }));
  };

  const toggleService = (key: string) => {
    const has = lead.services.includes(key);
    let next = has ? lead.services.filter((s) => s !== key) : [...lead.services, key];
    if (key === 'unsure' && !has) next = ['unsure'];
    else if (key !== 'unsure') next = next.filter((s) => s !== 'unsure');
    set('services', next);
  };

  const valid = [
    lead.services.length > 0,
    lead.company.trim().length > 1,
    !!lead.budget && !!lead.timing,
    lead.name.trim().length > 1 && emailOk(lead.email),
  ];

  const go = (n: number) => {
    setStep(n);
    setTouched(false);
    track('quote_step', { step: n + 1 });
    requestAnimationFrame(() => headRef.current?.focus({ preventScroll: true }));
    const top = document.getElementById('formtop');
    if (top && top.getBoundingClientRect().top < 0) top.scrollIntoView({ behavior: 'smooth' });
  };

  const next = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid[step]) {
      setTouched(true);
      return;
    }
    if (step < steps.length - 1) return go(step + 1);

    setStatus('sending');
    try {
      const res = await fetch('/api/offerte', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...lead, _gotcha: gotcha }),
      });
      if (!res.ok) throw new Error(String(res.status));
      track('generate_lead', { services: lead.services.join(','), budget: lead.budget });
      try {
        localStorage.removeItem(STORAGE);
      } catch {}
      router.push(`/bedankt?naam=${encodeURIComponent(lead.name.split(' ')[0])}`);
    } catch {
      setStatus('error');
    }
  };

  const err = touched && !valid[step];

  return (
    <form className="qform" onSubmit={next} noValidate id="formtop">
      <div className="progress" aria-hidden="true">
        <div className="progress__steps">
          <span className="label">
            Stap {step + 1} van {steps.length}
          </span>
          <span className="label label--soft">{steps[step]}</span>
        </div>
        <div className="progress__bar">
          <span style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
        </div>
      </div>

      {step === 0 && (
        <div className="qstep" key="s0">
          <h2 ref={headRef} tabIndex={-1}>
            Waarmee kunnen we je helpen?
          </h2>
          <fieldset className="field">
            <legend>Kies wat van toepassing is</legend>
            <div className="chips">
              {quote.services.map((s) => {
                const on = lead.services.includes(s.key);
                return (
                  <button type="button" key={s.key} className="chip" aria-pressed={on} onClick={() => toggleService(s.key)}>
                    {on && <Check />}
                    {s.label}
                  </button>
                );
              })}
            </div>
            {err && <span className="ferr">Kies minstens één optie.</span>}
          </fieldset>
        </div>
      )}

      {step === 1 && (
        <div className="qstep" key="s1">
          <h2 ref={headRef} tabIndex={-1}>
            Vertel iets over je zaak.
          </h2>
          <div className="field">
            <label htmlFor="q-company">Naam van je zaak</label>
            <input
              id="q-company"
              value={lead.company}
              onChange={(e) => set('company', e.target.value)}
              autoComplete="organization"
              aria-invalid={err && !valid[1]}
              autoFocus
            />
            {err && <span className="ferr">Hoe heet je zaak?</span>}
          </div>
          <fieldset className="field">
            <legend>
              Sector <span className="opt">(optioneel)</span>
            </legend>
            <div className="chips" role="radiogroup">
              {quote.sectors.map((s) => (
                <button type="button" role="radio" key={s} className="chip" aria-checked={lead.sector === s} onClick={() => set('sector', lead.sector === s ? '' : s)}>
                  {s}
                </button>
              ))}
            </div>
          </fieldset>
          <div className="field">
            <label htmlFor="q-web">
              Huidige website <span className="opt">(optioneel)</span>
            </label>
            <input id="q-web" value={lead.website} onChange={(e) => set('website', e.target.value)} placeholder="www.jouwzaak.be" inputMode="url" autoComplete="url" />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="qstep" key="s2">
          <h2 ref={headRef} tabIndex={-1}>
            Budget en timing.
          </h2>
          <p className="t-body" style={{ marginTop: -12 }}>
            Een indicatie helpt ons om een voorstel te maken dat past. Geen idee? Ook goed.
          </p>
          <fieldset className="field">
            <legend>Budget (excl. btw)</legend>
            <div className="chips" role="radiogroup">
              {quote.budgets.map((s) => (
                <button type="button" role="radio" key={s} className="chip" aria-checked={lead.budget === s} onClick={() => set('budget', s)}>
                  {s}
                </button>
              ))}
            </div>
            {err && !lead.budget && <span className="ferr">Kies een budget, of ‘Weet ik nog niet’.</span>}
          </fieldset>
          <fieldset className="field">
            <legend>Wanneer wil je starten?</legend>
            <div className="chips" role="radiogroup">
              {quote.timings.map((s) => (
                <button type="button" role="radio" key={s} className="chip" aria-checked={lead.timing === s} onClick={() => set('timing', s)}>
                  {s}
                </button>
              ))}
            </div>
            {err && !lead.timing && <span className="ferr">Kies een timing.</span>}
          </fieldset>
        </div>
      )}

      {step === 3 && (
        <div className="qstep" key="s3">
          <h2 ref={headRef} tabIndex={-1}>
            Waar mogen we je voorstel naartoe sturen?
          </h2>
          <div className="row2">
            <div className="field">
              <label htmlFor="q-name">Naam</label>
              <input id="q-name" value={lead.name} onChange={(e) => set('name', e.target.value)} autoComplete="name" aria-invalid={err && lead.name.trim().length < 2} autoFocus />
              {err && lead.name.trim().length < 2 && <span className="ferr">Vul je naam in.</span>}
            </div>
            <div className="field">
              <label htmlFor="q-email">E-mail</label>
              <input id="q-email" type="email" value={lead.email} onChange={(e) => set('email', e.target.value)} autoComplete="email" inputMode="email" aria-invalid={err && !emailOk(lead.email)} />
              {err && !emailOk(lead.email) && <span className="ferr">Vul een geldig e-mailadres in.</span>}
            </div>
          </div>
          <div className="field">
            <label htmlFor="q-phone">
              Telefoon <span className="opt">(optioneel, als je liever gebeld wordt)</span>
            </label>
            <input id="q-phone" type="tel" value={lead.phone} onChange={(e) => set('phone', e.target.value)} autoComplete="tel" inputMode="tel" />
          </div>
          <div className="field">
            <label htmlFor="q-msg">
              Nog iets dat we moeten weten? <span className="opt">(optioneel)</span>
            </label>
            <textarea id="q-msg" rows={4} value={lead.message} onChange={(e) => set('message', e.target.value)} placeholder="Bv. we openen in maart een tweede vestiging en willen dat online klanten ons vinden." />
          </div>
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" value={gotcha} onChange={(e) => setGotcha(e.target.value)} />
          <p className="qnote">
            We gebruiken je gegevens enkel om je aanvraag te beantwoorden. Lees ons{' '}
            <Link href="/privacy" className="inline">
              privacybeleid
            </Link>
            .
          </p>
          {status === 'error' && (
            <div className="alert" role="alert">
              Er ging iets mis bij het versturen. Probeer opnieuw of mail ons rechtstreeks op{' '}
              <a className="inline" href={`mailto:${site.email}?subject=Offerte-aanvraag ${encodeURIComponent(lead.company)}`}>
                {site.email}
              </a>
              .
            </div>
          )}
        </div>
      )}

      <div className="qnav">
        {step > 0 ? (
          <button type="button" className="qnav__back" onClick={() => go(step - 1)}>
            <ArrowLeft /> Terug
          </button>
        ) : (
          <span className="qnote">Duurt ongeveer 2 minuten</span>
        )}
        <button type="submit" className="btn btn--lg" disabled={status === 'sending'}>
          {step < steps.length - 1 ? 'Volgende' : status === 'sending' ? 'Versturen…' : 'Verstuur aanvraag'}
          <Arrow />
        </button>
      </div>
    </form>
  );
}
