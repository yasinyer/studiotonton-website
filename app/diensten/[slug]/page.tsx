import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Faq } from '@/components/Faq';
import { Footer, Header } from '@/components/Chrome';
import { CaseCards } from '@/components/CaseCards';
import { Arrow, Check } from '@/components/Icons';
import { Reveal } from '@/components/Reveal';
import { WhatsAppButton } from '@/components/WhatsApp';
import { servicePages } from '@/lib/pages';
import { euro, services, site, steps } from '@/lib/site';

export function generateStaticParams() {
  return servicePages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/diensten/${page.slug}` },
    openGraph: { title: `${page.metaTitle} · studio tonton`, description: page.metaDescription, url: `/diensten/${page.slug}` },
  };
}

export default async function DienstPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = servicePages.find((p) => p.slug === slug);
  const service = page && services.find((s) => s.key === page.key);
  if (!page || !service) notFound();

  const others = servicePages.filter((p) => p.slug !== page.slug);
  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      serviceType: service.title,
      description: page.metaDescription,
      url: `${site.url}/diensten/${page.slug}`,
      provider: { '@type': 'ProfessionalService', name: 'studio tonton', url: site.url },
      areaServed: ['Hasselt', 'Limburg', 'Vlaanderen'],
      ...(service.from && {
        offers: {
          '@type': 'Offer',
          priceCurrency: 'EUR',
          priceSpecification: { '@type': 'PriceSpecification', minPrice: service.from, priceCurrency: 'EUR', valueAddedTaxIncluded: false },
        },
      }),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'studio tonton', item: site.url },
        { '@type': 'ListItem', position: 2, name: service.title, item: `${site.url}/diensten/${page.slug}` },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main id="main">
        <section className="hero">
          <div className="wrap">
            <nav className="label crumbs" aria-label="Kruimelpad">
              <Link href="/">studio tonton</Link> <span aria-hidden="true">/</span> <Link href="/#diensten">Diensten</Link>{' '}
              <span aria-hidden="true">/</span> <span>{service.title}</span>
            </nav>
            <h1 className="t-hero hero__title" style={{ fontSize: 'clamp(44px, 8vw, 112px)' }}>
              {page.h1}
            </h1>
            <div className="hero__grid">
              <div>
                <p className="t-lead">{page.lead}</p>
                <div className="hero__cta">
                  <Link href={`/offerte?dienst=${service.key}`} className="btn btn--lg" data-cta={`dienst-${service.key}-hero`}>
                    Vraag je gratis offerte aan
                    <Arrow />
                  </Link>
                  <WhatsAppButton
                    location={`dienst-${service.key}`}
                    className="chipbtn chipbtn--lg"
                    message={`Hallo studio tonton, ik heb interesse in ${service.title.toLowerCase()}. `}
                  />
                </div>
                <ul className="trust">
                  <li>
                    <Check /> Vrijblijvend
                  </li>
                  <li>
                    <Check /> Antwoord {site.responseTime}
                  </li>
                  <li>
                    <Check /> Vaste prijs vooraf
                  </li>
                </ul>
              </div>
              <div className="price price--big">
                <span className="price__from">Vanaf</span>
                <span className="price__n">{service.from ? euro(service.from) : 'Op maat'}</span>
                <span className="price__vat">excl. btw · vaste prijs na een kort gesprek</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 24 }}>
          <div className="wrap twocol">
            <div className="prose prose--lead rv">
              {page.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="rv">
              <span className="label">Wat je krijgt</span>
              <ul className="svc__list" style={{ marginTop: 14 }}>
                {service.includes.map((x) => (
                  <li key={x}>
                    <Check />
                    {x}
                  </li>
                ))}
              </ul>
              <span className="label" style={{ marginTop: 36, display: 'flex' }}>
                Voor jou als
              </span>
              <ul className="svc__list" style={{ marginTop: 14 }}>
                {page.forWho.map((x) => (
                  <li key={x}>
                    <Check />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="werk" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="shead rv">
              <div>
                <span className="label">Voorbeelden</span>
                <h2 className="t-h2">Werk van studio tonton.</h2>
              </div>
            </div>
            <CaseCards refs={page.cases} />
          </div>
        </section>

        <section className="section" style={{ background: 'var(--surface-sunk)' }}>
          <div className="wrap">
            <div className="shead rv">
              <div>
                <span className="label">Werkwijze</span>
                <h2 className="t-h2">Zo werken we samen.</h2>
              </div>
            </div>
            <ol className="proc">
              {steps.map((s, i) => (
                <li key={s.title} className="rv">
                  <span className="proc__n">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="proc__t">{s.title}</h3>
                  <p className="proc__x">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="wrap faqgrid">
            <div className="rv" style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
              <span className="label">Veelgestelde vragen</span>
              <h2 className="t-h2">{service.title}: goed om te weten.</h2>
              <Link href={`/offerte?dienst=${service.key}`} className="btn" style={{ marginTop: 8 }} data-cta={`dienst-${service.key}-faq`}>
                Vraag je gratis offerte aan
                <Arrow />
              </Link>
            </div>
            <Faq items={page.faq} />
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <span className="label">Andere diensten</span>
            <ul className="morelinks">
              {others.map((o) => {
                const s = services.find((x) => x.key === o.key)!;
                return (
                  <li key={o.slug}>
                    <Link href={`/diensten/${o.slug}`}>
                      <span>{s.title}</span>
                      <span className="muted">vanaf {s.from ? euro(s.from) : 'op maat'}</span>
                      <Arrow className="" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
