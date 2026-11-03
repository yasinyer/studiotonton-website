import Image from 'next/image';
import Link from 'next/link';
import { Footer, Header } from '@/components/Chrome';
import { Arrow, Check, Plus } from '@/components/Icons';
import { Reveal } from '@/components/Reveal';
import { WorkList } from '@/components/WorkList';
import { caseStudyFor, servicePageFor } from '@/lib/pages';
import { cases, clientNames, clients, euro, faq, reasons, services, site, stats, steps, testimonials } from '@/lib/site';

export default function Home() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <Header />
      <main id="main">
        {/* ───── Hero ───── */}
        <section className="hero">
          <div className="wrap">
            <span className="label">studio tonton · designstudio uit {site.city}</span>
            <h1 className="t-hero hero__title">
              Design dat klanten
              <br /> binnenbrengt.
            </h1>

            <div className="hero__grid">
              <div>
                <p className="t-lead">
                  Websites, branding, motion en AI voor ondernemers die willen groeien. Eén studio, één aanspreekpunt en een
                  vaste prijs vooraf.
                </p>
                <div className="hero__cta">
                  <Link href="/offerte" className="btn btn--lg" data-cta="hero">
                    Vraag je gratis offerte
                    <Arrow />
                  </Link>
                  <Link href="#werk" className="btn btn--lg btn--ghost">
                    Bekijk werk
                  </Link>
                </div>
                <ul className="trust">
                  <li>
                    <Check /> Vrijblijvend
                  </li>
                  <li>
                    <Check /> Antwoord {site.responseTime}
                  </li>
                  <li>
                    <Check /> Vaste prijs, geen verrassingen
                  </li>
                </ul>
              </div>
              <dl className="stats">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="stat__n">{s.n}</dt>
                    <dd className="stat__l">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <div className="hero__visual">
          <div className="collage">
            {[cases[0], cases[1], cases[2]].map((c, i) => (
              <div key={c.title}>
                <Image src={c.image} alt={`${c.title}, ${c.client}`} fill sizes="(min-width: 720px) 33vw, 50vw" priority={i < 2} style={{ objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>

        {/* ───── Klanten ───── */}
        <section className="clients" aria-label="Werkte samen met">
          <div className="wrap clients__head">
            <span className="label label--soft">Werkte samen met</span>
          </div>
          <div className="marquee">
            <div className="marquee__track">
              {[0, 1].map((k) => (
                <div key={k} style={{ display: 'flex', gap: 64, alignItems: 'center' }} aria-hidden={k === 1}>
                  {clients.map((c) => (
                    <span key={c.name} className="mlogo">
                      <Image src={c.src} alt={k === 0 ? c.name : ''} width={120} height={40} loading="eager" style={{ width: 'auto', height: 40 }} />
                    </span>
                  ))}
                  {clientNames.map((n) => (
                    <span key={n} className="mlogo">
                      <span>{n}</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── Werk ───── */}
        <section className="section" id="werk">
          <div className="wrap">
            <div className="shead rv">
              <div>
                <span className="label">Geselecteerd werk</span>
                <h2 className="t-h2">Van koffiebar tot de beste bankapp ter wereld.</h2>
              </div>
            </div>
            <WorkList items={cases.map((c) => ({ ...c, href: caseStudyFor(c.title) ? `/werk/${caseStudyFor(c.title)!.slug}` : undefined }))} />
            <div className="work__cta rv">
              <Link href="/offerte" className="btn" data-cta="work">
                Ook zoiets voor jouw zaak?
                <Arrow />
              </Link>
              <span className="muted" style={{ fontSize: '0.9375rem' }}>
                Vertel ons in 2 minuten wat je zoekt.
              </span>
            </div>
          </div>
        </section>

        {/* ───── Diensten ───── */}
        <section className="section" id="diensten" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="shead rv">
              <div>
                <span className="label">Wat studio tonton maakt</span>
                <h2 className="t-h2">Alles onder één dak, zodat je merk overal klopt.</h2>
              </div>
              <p className="t-body" style={{ maxWidth: '40ch' }}>
                Alle prijzen zijn vanaf-prijzen, excl. btw. Na een kort gesprek krijg je een vaste prijs op maat.
              </p>
            </div>
            <div className="services">
              {services.map((s, i) => (
                <article key={s.key} className="svc rv" id={`dienst-${s.key}`}>
                  <span className="svc__n">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="svc__title">{s.title}</h3>
                    <p className="svc__pitch">{s.pitch}</p>
                    {servicePageFor(s.key) && (
                      <Link href={`/diensten/${servicePageFor(s.key)!.slug}`} className="svc__more">
                        Meer over {s.title.toLowerCase()} <Arrow className="" />
                      </Link>
                    )}
                    <div className="svc__ex">
                      <span className="tag" style={{ background: 'transparent', paddingLeft: 0 }}>
                        Bijvoorbeeld
                      </span>
                      {s.examples.map((e) => (
                        <span key={e} className="tag">
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ul className="svc__list">
                    {s.includes.map((x) => (
                      <li key={x}>
                        <Check />
                        {x}
                      </li>
                    ))}
                  </ul>
                  <div className="svc__price">
                    <div className="price">
                      <span className="price__from">Vanaf</span>
                      <span className="price__n">{s.from ? euro(s.from) : 'Op maat'}</span>
                      <span className="price__vat">excl. btw</span>
                    </div>
                    <Link href={`/offerte?dienst=${s.key}`} className="btn btn--sm" data-cta={`service-${s.key}`}>
                      Offerte aanvragen
                      <Arrow />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="band rv" style={{ marginTop: 56 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <span className="label">Pakket op maat</span>
                <h3 className="t-h2">Website én huisstijl nodig? Dan combineren we, en dat merk je aan de prijs.</h3>
                <p className="t-body">
                  Starten, vernieuwen of groeien: we kijken samen wat je nu echt nodig hebt. Zo investeer je enkel in wat iets
                  oplevert.
                </p>
                <div>
                  <Link href="/offerte?dienst=website,branding" className="btn btn--lg" data-cta="bundle">
                    Stel je pakket samen
                    <Arrow />
                  </Link>
                </div>
              </div>
              <ul className="band__list">
                {services.map((s) => (
                  <li key={s.key}>
                    <span>{s.title}</span>
                    <b>vanaf {s.from ? euro(s.from) : 'op maat'}</b>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ───── Werkwijze ───── */}
        <section className="section" id="werkwijze" style={{ background: 'var(--surface-sunk)' }}>
          <div className="wrap">
            <div className="shead rv">
              <div>
                <span className="label">Werkwijze</span>
                <h2 className="t-h2">Van eerste gesprek tot live, in vier stappen.</h2>
              </div>
            </div>
            <ol className="proc">
              {steps.map((s, i) => (
                <li key={s.title} className="rv" style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="proc__n">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="proc__t">{s.title}</h3>
                  <p className="proc__x">{s.text}</p>
                </li>
              ))}
            </ol>
            <div className="strip rv">
              {[
                ['/img/proces-schets.webp', 'Schetsen & flows'],
                ['/img/proces-scherm.webp', 'Ontwerp in light & dark'],
                ['/img/proces-motion.webp', 'Motion & prototype'],
              ].map(([src, cap], i) => (
                <figure key={src}>
                  <div className="ph">
                    <Image src={src} alt={cap} width={960} height={600} sizes="(min-width: 720px) 33vw, 100vw" />
                  </div>
                  <figcaption>
                    <span>0{i + 1}</span>
                    <b>{cap}</b>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ───── Waarom ───── */}
        <section className="section" id="waarom">
          <div className="wrap why">
            <div className="rv">
              <span className="label">Waarom studio tonton</span>
              <h2 className="t-h2" style={{ margin: '14px 0 32px' }}>
                Het niveau van de grote merken, op maat van jouw zaak.
              </h2>
              <ul className="reasons">
                {reasons.map((r) => (
                  <li key={r.title}>
                    <b>{r.title}</b>
                    <p>{r.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rv">
              <span className="label">In hun woorden</span>
              <div className="tgrid">
                {testimonials.map((t) => (
                  <figure key={t.name} className="tcard">
                    <blockquote>“{t.quote}”</blockquote>
                    <figcaption>
                      {t.avatar && <Image src={t.avatar} alt="" width={44} height={44} />}
                      <div>
                        <b>{t.name}</b>
                        <span>{t.role}</span>
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </div>
              {site.googleReviewsUrl && (
                <a href={site.googleReviewsUrl} target="_blank" rel="noreferrer" className="svc__more">
                  Lees alle reviews op Google <Arrow className="" />
                </a>
              )}
              <div className="awards">
                <div className="award">
                  <b>Best Banking App in the World</b>
                  <time>2024, 2025 & 2026</time>
                  <span>KBC Mobile · uitgereikt door Sia Partners</span>
                </div>
                <div className="award">
                  <b>C-Mine Cribs Award</b>
                  <time>2021</time>
                  <span>Masterthesis “Beraber” · LUCA School of Arts</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── FAQ ───── */}
        <section className="section" id="faq" style={{ paddingTop: 0 }}>
          <div className="wrap faqgrid">
            <div className="rv" style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
              <span className="label">Veelgestelde vragen</span>
              <h2 className="t-h2">Goed om te weten.</h2>
              <p className="t-body" style={{ maxWidth: '36ch' }}>
                Staat je vraag er niet bij? Stuur een mailtje naar{' '}
                <a className="inline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>{' '}
                of vraag meteen een offerte aan.
              </p>
              <Link href="/offerte" className="btn" style={{ marginTop: 8 }} data-cta="faq">
                Vraag je gratis offerte
                <Arrow />
              </Link>
            </div>
            <div className="faq rv">
              {faq.map((f, i) => (
                <details key={f.q} open={i === 0}>
                  <summary>
                    {f.q}
                    <Plus />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        </section>
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
