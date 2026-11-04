import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Footer, Header } from '@/components/Chrome';
import { CaseCards } from '@/components/CaseCards';
import { Arrow } from '@/components/Icons';
import { Reveal } from '@/components/Reveal';
import { caseStudies } from '@/lib/pages';
import { cases, site } from '@/lib/site';

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) return {};
  const cover = cases.find((x) => x.title === c.title)?.image;
  return {
    title: `${c.title}: ${c.services.slice(0, 2).join(' en ').toLowerCase()}`,
    description: c.metaDescription,
    alternates: { canonical: `/werk/${c.slug}` },
    openGraph: {
      title: `${c.title} · studio tonton`,
      description: c.metaDescription,
      url: `/werk/${c.slug}`,
      type: 'article',
      ...(cover && { images: [{ url: cover }] }),
    },
  };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((x) => x.slug === slug);
  const base = study && cases.find((x) => x.title === study.title);
  if (!study || !base) notFound();

  const next = caseStudies[(caseStudies.indexOf(study) + 1) % caseStudies.length];
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${study.title} · ${study.services.join(', ')}`,
    description: study.metaDescription,
    creator: { '@type': 'ProfessionalService', name: 'studio tonton', url: site.url },
    dateCreated: String(study.year),
    url: `${site.url}/werk/${study.slug}`,
    image: `${site.url}${base.image}`,
  };

  return (
    <>
      <Header />
      <main id="main">
        <section className="hero" style={{ paddingBottom: 40 }}>
          <div className="wrap">
            <nav className="label crumbs" aria-label="Kruimelpad">
              <Link href="/">studio tonton</Link> <span aria-hidden="true">/</span> <Link href="/#werk">Werk</Link>{' '}
              <span aria-hidden="true">/</span> <span>{study.title}</span>
            </nav>
            <h1 className="t-hero hero__title">{study.title}</h1>
            <dl className="facts">
              <div>
                <dt className="label label--soft">Klant</dt>
                <dd>{study.client}</dd>
              </div>
              <div>
                <dt className="label label--soft">Sector</dt>
                <dd>{study.sector}</dd>
              </div>
              <div>
                <dt className="label label--soft">Locatie</dt>
                <dd>{study.location}</dd>
              </div>
              <div>
                <dt className="label label--soft">Jaar</dt>
                <dd>{study.year}</dd>
              </div>
              <div className="facts__wide">
                <dt className="label label--soft">Wat we deden</dt>
                <dd>{study.services.join(' · ')}</dd>
              </div>
            </dl>
          </div>
        </section>

        <div className="case-cover">
          <Image src={base.image} alt={`${study.title}: overzicht van het project`} fill priority sizes="100vw" />
        </div>

        <section className="section">
          <div className="wrap twocol">
            <blockquote className="case-quote rv">“{study.quote}”</blockquote>
            <div className="prose prose--lead rv">
              {study.intro.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <ul className="highlights">
              {study.highlights.map((h, i) => (
                <li key={h.title} className="rv">
                  <span className="proc__n">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="proc__t">{h.title}</h2>
                  <p className="proc__x">{h.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap gallery">
            {study.images.map((img) => (
              <figure key={img.src} className={`rv${img.wide ? ' gallery__wide' : ''}`}>
                <Image src={img.src} alt={img.alt} width={img.w} height={img.h} sizes={img.wide ? '100vw' : '(min-width: 720px) 50vw, 100vw'} />
                <figcaption>{img.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {study.testimonial && (
          <section className="section" style={{ paddingTop: 0 }}>
            <div className="wrap">
              <figure className="tcard" style={{ maxWidth: 820 }}>
                <blockquote>“{study.testimonial.quote}”</blockquote>
                <figcaption>
                  <div>
                    <b>{study.testimonial.name}</b>
                    <span>{study.testimonial.role}</span>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        )}

        {next.slug !== study.slug && (
          <section className="section nextcase" aria-labelledby="next-case-title">
            <div className="wrap">
              <h2 id="next-case-title" className="label">
                Volgende case
              </h2>
              <div style={{ marginTop: 20 }}>
                <CaseCards refs={[next.slug]} />
              </div>
            </div>
          </section>
        )}

        <section className="section" style={{ background: 'var(--surface-sunk)' }}>
          <div className="wrap casecta">
            <div className="casecta__text">
              <span className="label">Jouw project</span>
              <h2 className="t-h2">Ook zo’n project voor jouw zaak?</h2>
              <p className="t-body">Vertel in 2 minuten wat je zoekt. Je krijgt {site.responseTime} een antwoord, met een vaste prijs.</p>
            </div>
            <Link href="/offerte" className="btn btn--lg" data-cta={`case-${study.slug}`}>
              Vraag je gratis offerte aan
              <Arrow />
            </Link>
          </div>
        </section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
