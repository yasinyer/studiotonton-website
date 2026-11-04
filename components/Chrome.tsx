import Link from 'next/link';
import { Logo } from './Logo';
import { WhatsAppButton } from './WhatsApp';
import { ArrowDiag } from './Icons';
import { quote, services, site } from '@/lib/site';
import { caseStudies, servicePageFor } from '@/lib/pages';

export function Header() {
  return (
    <header className="top">
      <div className="wrap">
        <Link href="/" className="brand" aria-label="studio tonton, naar home">
          <Logo />
        </Link>
        <span className="label is-on brand__meta">
          <span className="dot" />
          Nieuwe projecten welkom
        </span>
      </div>
    </header>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="foot" id="contact">
      <div className="wrap">
        <div className="foot__cta">
          <span className="label">
            <span className="dot" /> Antwoord {site.responseTime}
          </span>
          <p className="t-lead" style={{ color: '#c7c7c7', maxWidth: '36ch' }}>
            Benieuwd wat we voor jouw zaak kunnen doen? Vertel het ons in 2 minuten, je krijgt een vrijblijvend voorstel.
          </p>
          <Link href="/offerte" className="t-xl foot__big" data-cta="footer">
            Vraag je offerte&nbsp;<ArrowDiag className="" />
          </Link>
          <div className="quick" aria-label="Start meteen met">
            {quote.services
              .filter((s) => s.key !== 'unsure')
              .map((s) => (
                <Link key={s.key} href={`/offerte?dienst=${s.key}`}>
                  {s.label}
                </Link>
              ))}
            <WhatsAppButton location="footer" className="" label="Of stuur een WhatsApp" />
          </div>
        </div>
        <nav className="foot__nav" aria-label="Footer">
          <div>
            <span className="label">Diensten</span>
            <ul>
              {services.map((s) => {
                const pg = servicePageFor(s.key);
                return pg ? (
                  <li key={s.key}>
                    <Link href={`/diensten/${pg.slug}`}>{s.title}</Link>
                  </li>
                ) : null;
              })}
            </ul>
          </div>
          <div>
            <span className="label">Werk</span>
            <ul>
              {caseStudies.map((c) => (
                <li key={c.slug}>
                  <Link href={`/werk/${c.slug}`}>{c.title}</Link>
                </li>
              ))}
              <li>
                <Link href="/#werk">Alle projecten</Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="label">studio tonton</span>
            <ul>
              <li>
                <Link href="/offerte">Gratis offerte</Link>
              </li>
              <li>
                <Link href="/#faq">Veelgestelde vragen</Link>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="foot__bottom">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="foot__brand">
              <Logo />
              <span>Designstudio uit {site.city}. Websites, branding, motion en AI.</span>
            </div>
            <div className="foot__links">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              {site.phone && <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>}
              <span>{site.city}, België</span>
            </div>
          </div>
          <div className="foot__links" style={{ alignSelf: 'flex-end' }}>
            {site.instagram && (
              <a href={site.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            )}
            {site.linkedin && (
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            )}
            <Link href="/privacy">Privacy</Link>
            <span>© {year} studio tonton</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
