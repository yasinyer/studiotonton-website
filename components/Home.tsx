'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Arrow, ArrowDiag, ArrowLeft, Check } from './Icons';
import { track } from '@/lib/track';

/* ───────── Pauzeknop (gedeeld door logoband en werkstrook) ───────── */
function PauseButton({ paused, onToggle, label }: { paused: boolean; onToggle: () => void; label: string }) {
  return (
    <button type="button" className="band-pause" onClick={onToggle} aria-pressed={paused} aria-label={paused ? `${label} afspelen` : `${label} pauzeren`}>
      {paused ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M7 5v14l12-7z" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <rect x="6" y="5" width="4" height="14" rx="1" />
          <rect x="14" y="5" width="4" height="14" rx="1" />
        </svg>
      )}
    </button>
  );
}

/* ───────── Logoband ───────── */
export function ClientBand({ logos }: { logos: { name: string; src: string }[] }) {
  const [paused, setPaused] = useState(false);
  const row = (hidden: boolean) => (
    <div className="marq__row" aria-hidden={hidden || undefined}>
      {logos.map((l) => (
        <span key={l.name} className="mlogo" title={hidden ? undefined : l.name}>
          <Image src={l.src} alt={hidden ? '' : l.name} width={120} height={40} loading="eager" className="mlogo__img" />
        </span>
      ))}
    </div>
  );
  return (
    <section className="clients" aria-labelledby="clients-title">
      <div className="wrap band-head">
        <h2 id="clients-title" className="label">
          Werkte samen met
        </h2>
        <PauseButton paused={paused} onToggle={() => setPaused(!paused)} label="Logoband" />
      </div>
      <div className="marq-clip">
        <div className={`marq__track${paused ? ' is-paused' : ''}`}>
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}

/* ───────── Diensten als uitklaplijst, met meewisselende afbeelding ───────── */
export type SvcItem = {
  key: string;
  title: string;
  pitch: string;
  includes: string[];
  from: string;
  image: string;
  pageHref?: string;
  examples: { title: string; href?: string; logo?: string }[];
};

export function ServiceList({ items }: { items: SvcItem[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="svl">
      <div className="svl__rows">
        {items.map((s, i) => {
          const on = open === i;
          return (
            <div key={s.key} className={`svl__row${on ? ' is-on' : ''}`} id={`dienst-${s.key}`}>
              <h3>
                <button type="button" className="svl__head" aria-expanded={on} aria-controls={`svc-${s.key}`} onClick={() => setOpen(on ? -1 : i)}>
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="svl__t">{s.title}</span>
                  <span className="svl__plus" aria-hidden="true" />
                </button>
              </h3>
              <div id={`svc-${s.key}`} className="svl__body" role="region" aria-label={s.title} hidden={!on}>
                <p className="svl__d">{s.pitch}</p>
                <ul className="svl__list">
                  {s.includes.map((x) => (
                    <li key={x}>
                      <Check />
                      {x}
                    </li>
                  ))}
                </ul>
                {s.examples.length > 0 && (
                  <div className="svl__cases">
                    <span className="label label--soft">Bijvoorbeeld</span>
                    {s.examples.map((e) => {
                      const inner = (
                        <>
                          {e.logo && (
                            <span className="logo-tile" aria-hidden="true">
                              <Image src={e.logo} alt="" width={14} height={14} />
                            </span>
                          )}
                          {e.title}
                          {e.href && <ArrowDiag className="arr-sm" />}
                        </>
                      );
                      return e.href ? (
                        <Link key={e.title} href={e.href} className="chipbtn svl__case">
                          {inner}
                        </Link>
                      ) : (
                        <span key={e.title} className="chipbtn svl__case is-static">
                          {inner}
                        </span>
                      );
                    })}
                  </div>
                )}
                <div className="svl__foot">
                  <div className="price">
                    <span className="price__from">Vanaf</span>
                    <span className="price__n">{s.from}</span>
                    <span className="price__vat">excl. btw</span>
                  </div>
                  <div className="svl__actions">
                    <Link href={`/offerte?dienst=${s.key}`} className="btn" data-cta={`service-${s.key}`}>
                      Offerte aanvragen
                      <Arrow />
                    </Link>
                    {s.pageHref && (
                      <Link href={s.pageHref} className="chipbtn">
                        Meer over {s.title.toLowerCase()}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="svl__prev" aria-hidden="true">
        <div className="frame preview__img">
          {items.map((s, i) => (
            <Image key={s.key} src={s.image} alt="" fill sizes="(min-width: 1100px) 34vw, 0px" className={i === Math.max(open, 0) ? 'is-on' : undefined} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───────── Geselecteerd werk als lopende strook ───────── */
export function WorkStrip({ items }: { items: { title: string; client: string; image: string; logo?: string; href?: string }[] }) {
  const [paused, setPaused] = useState(false);
  const row = (hidden: boolean) => (
    <div className="marq__row" aria-hidden={hidden || undefined}>
      {items.map((c) => {
        const inner = (
          <>
            <span className="frame">
              <Image src={c.image} alt={hidden ? '' : `${c.title} voor ${c.client}`} fill sizes="(min-width: 900px) 30vw, 80vw" />
            </span>
            <span className="strip__cap">
              {c.logo && (
                <span className="logo-tile" aria-hidden="true">
                  <Image src={c.logo} alt="" width={14} height={14} />
                </span>
              )}
              {c.title}
              {c.href && <span className="strip__more">Bekijk case</span>}
            </span>
          </>
        );
        return c.href ? (
          <Link key={c.title} href={c.href} className="strip__item" tabIndex={hidden ? -1 : undefined} draggable={false}>
            {inner}
          </Link>
        ) : (
          <div key={c.title} className="strip__item">
            {inner}
          </div>
        );
      })}
    </div>
  );
  return (
    <>
      <div className="strip__clip">
        <div className={`marq__track marq__track--slow${paused ? ' is-paused' : ''}`}>
          {row(false)}
          {row(true)}
        </div>
      </div>
      <div className="wrap strip__foot">
        <PauseButton paused={paused} onToggle={() => setPaused(!paused)} label="Werkstrook" />
      </div>
    </>
  );
}

/* ───────── Reviews-slider ───────── */
export function Reviews({ items, moreHref }: { items: { quote: string; name: string; role: string; avatar?: string }[]; moreHref?: string }) {
  const [i, setI] = useState(0);
  const t = items[i];
  const go = (d: number) => {
    setI((i + d + items.length) % items.length);
    track('review_slide');
  };
  return (
    <div className="reviews">
      <figure className="tcard" aria-live="polite">
        <blockquote>“{t.quote}”</blockquote>
        <figcaption>
          {t.avatar && <Image src={t.avatar} alt="" width={44} height={44} />}
          <div>
            <b>{t.name}</b>
            <span>{t.role}</span>
          </div>
        </figcaption>
      </figure>
      <div className="slider">
        {items.length > 1 && (
          <>
            <button type="button" className="slider__btn" onClick={() => go(-1)} aria-label="Vorige review">
              <ArrowLeft />
            </button>
            <button type="button" className="slider__btn" onClick={() => go(1)} aria-label="Volgende review">
              <Arrow className="" />
            </button>
            <span className="label label--soft slider__n">
              {String(i + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </span>
          </>
        )}
        {moreHref && (
          <a href={moreHref} target="_blank" rel="noreferrer" className="label slider__more">
            Alle aanbevelingen op LinkedIn <ArrowDiag className="arr-xs" />
          </a>
        )}
      </div>
    </div>
  );
}
