import Image from 'next/image';
import Link from 'next/link';
import { Faq } from '@/components/Faq';
import { Footer } from '@/components/Chrome';
import { ClientBand, Reviews, ServiceList, WorkStrip, type SvcItem } from '@/components/Home';
import { Arrow, ArrowDiag } from '@/components/Icons';
import { Logo } from '@/components/Logo';
import { WhatsAppButton } from '@/components/WhatsApp';
import { Reveal } from '@/components/Reveal';
import { CountUp } from '@/components/CountUp';
import { caseStudyFor, servicePageFor } from '@/lib/pages';
import { cases, clients, euro, faq, modes, owner, services, site, stats, steps, testimonials } from '@/lib/site';

/** Afbeelding die meewisselt in de dienstenlijst. */
const serviceImage: Record<string, string> = {
  website: '/img/cases/egy.webp',
  branding: '/img/cases/shanti-3.webp',
  motion: '/img/cases/nws.webp',
  ai: '/img/cases/ai.webp',
  app: '/img/cases/surprisepay.webp',
};

const caseHref = (title: string) => {
  const study = caseStudyFor(title);
  return study ? `/werk/${study.slug}` : undefined;
};

export default function Home() {
  const svcItems: SvcItem[] = services.map((s) => ({
    key: s.key,
    title: s.title,
    pitch: s.pitch,
    includes: s.includes,
    from: s.from ? euro(s.from) : 'Op maat',
    image: serviceImage[s.key] ?? cases[0].image,
    pageHref: servicePageFor(s.key) ? `/diensten/${servicePageFor(s.key)!.slug}` : undefined,
    examples: s.examples.map((title) => {
      const c = cases.find((x) => x.title === title || x.client === title);
      return { title, href: c ? caseHref(c.title) : undefined, logo: c?.logo };
    }),
  }));

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <main id="main">
        {/* ───── Hero met groot woordmerk ───── */}
        <header className="wrap sthead">
          <span className="label">Designstudio uit {site.city}</span>
          <div className="sthead__title">
            <h1 className="sthead__logo">
              <span className="sr-only">studio tonton, designstudio uit {site.city}</span>
              <Logo />
            </h1>
            <a href="#diensten" className="badge" aria-label="Naar de diensten">
              <svg viewBox="0 0 200 200" className="badge__ring" aria-hidden="true">
                <defs>
                  <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
                </defs>
                <text>
                  <textPath href="#badge-circle" textLength="488">
                    Websites · Branding · Motion · AI · UX/UI ·
                  </textPath>
                </text>
              </svg>
              <svg viewBox="0 0 24 24" className="badge__arrow" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" aria-hidden="true">
                <path d="M12 4v15M6 13l6 6 6-6" />
              </svg>
            </a>
          </div>
          <div className="sthead__row">
            <p className="sthead__lead">
              Websites, huisstijlen, video en AI voor ondernemers die willen groeien. Ontworpen en gebouwd onder één dak, van de eerste
              schets tot oplevering, met een vaste prijs vooraf.
            </p>
            <div className="sthead__cta">
              <Link href="/offerte" className="btn btn--lg" data-cta="hero">
                Vraag je gratis offerte aan
                <Arrow />
              </Link>
              <WhatsAppButton location="hero" className="chipbtn chipbtn--lg" />
              <Link href="#werk" className="tlink tlink--lg">
                Bekijk werk
              </Link>
              <span className="label is-on avail">
                <span className="dot" aria-hidden="true" />
                Nieuwe projecten welkom · antwoord {site.responseTime}
              </span>
            </div>
          </div>
        </header>

        {/* ───── Kerncijfers ───── */}
        <section className="stats" aria-label="Waarom studio tonton">
          <dl className="wrap stats__in">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <dt className="stat__n">
                  <CountUp to={Number(s.n)} />
                  {s.suf && <span className="stat__suf">{s.suf}</span>}
                </dt>
                <dd className="stat__d">{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <ClientBand logos={clients} />

        {/* ───── Diensten ───── */}
        <section className="wrap stsvc" id="diensten" aria-labelledby="svc-title">
          <div className="shead">
            <h2 id="svc-title" className="t-h2">
              Wat studio tonton maakt
            </h2>
            <p className="t-body" style={{ maxWidth: '40ch' }}>
              Vanaf-prijzen excl. btw. Na een kort gesprek krijg je een vaste prijs op maat.
            </p>
          </div>
          <ServiceList items={svcItems} />
        </section>

        {/* ───── Geselecteerd werk ───── */}
        <section className="strip" id="werk" aria-labelledby="werk-title">
          <div className="wrap shead">
            <h2 id="werk-title" className="t-h2">
              Geselecteerd werk
            </h2>
            <Link href="/offerte" className="chipbtn" data-cta="work">
              Ook zoiets voor jouw zaak? <ArrowDiag className="arr-sm" />
            </Link>
          </div>
          <WorkStrip items={cases.map((c) => ({ title: c.title, client: c.client, image: c.image, logo: c.logo, href: caseHref(c.title) }))} />
        </section>

        {/* ───── Werkwijze ───── */}
        <section className="wrap sthow" id="werkwijze" aria-labelledby="how-title">
          <div className="shead">
            <h2 id="how-title" className="t-h2">
              Werkwijze
            </h2>
          </div>
          <ol className="howlist">
            {steps.map((s, i) => (
              <li key={s.title} className="rv" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="howlist__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───── Achter studio tonton ───── */}
        <section className="wrap stme-sec" aria-labelledby="behind-title">
          <div className="stme rv">
            <span className="frame stme__img">
              <Image src={owner.photo} alt={owner.name} fill sizes="112px" />
            </span>
            <div className="stme__text">
              <h2 id="behind-title" className="label">
                Achter studio tonton
              </h2>
              <p className="stme__p">
                studio tonton is de designstudio van {owner.name}, {owner.role} uit {site.city}. Je werkt altijd rechtstreeks met Yasin, van
                het eerste gesprek tot de oplevering.
              </p>
              <a className="chipbtn" href={owner.url} target="_blank" rel="noreferrer">
                Meer over Yasin <ArrowDiag className="arr-sm" />
              </a>
            </div>
          </div>
        </section>

        {/* ───── Samenwerken + reviews ───── */}
        <section className="wrap rec">
          <div className="rv">
            <span className="label">Samenwerken</span>
            <div className="modes">
              {modes.map((m) => (
                <div key={m.title} className="mode">
                  <b>{m.title}</b>
                  <span>{m.text}</span>
                </div>
              ))}
            </div>
            <div className="hero__cta" style={{ marginTop: 28 }}>
              <Link href="/offerte" className="btn" data-cta="samenwerken">
                Vraag je gratis offerte aan
                <Arrow />
              </Link>
            </div>
          </div>
          <div className="rv">
            <span className="label">In hun woorden</span>
            <Reviews items={testimonials} moreHref={owner.recommendations || undefined} />
            {site.googleReviewsUrl && (
              <a href={site.googleReviewsUrl} target="_blank" rel="noreferrer" className="label gr-link" data-cta="google-reviews">
                Bekijk of schrijf een review op Google <ArrowDiag className="arr-xs" />
              </a>
            )}
          </div>
        </section>

        {/* ───── FAQ ───── */}
        <section className="section" id="faq" style={{ paddingTop: 0 }}>
          <div className="wrap faqgrid">
            <div className="rv" style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
              <span className="label">Veelgestelde vragen</span>
              <h2 className="t-h2">Goed om te weten.</h2>
              <p className="t-body" style={{ maxWidth: '36ch' }}>
                Staat je vraag er niet bij? Mail naar{' '}
                <a className="inline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>{' '}
                of vraag meteen een offerte aan.
              </p>
              <Link href="/offerte" className="btn" style={{ marginTop: 8 }} data-cta="faq">
                Vraag je gratis offerte aan
                <Arrow />
              </Link>
            </div>
            <Faq items={faq} />
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        </section>
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
