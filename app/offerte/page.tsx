import type { Metadata } from 'next';
import { Header } from '@/components/Chrome';
import { Check } from '@/components/Icons';
import { QuoteForm } from '@/components/QuoteForm';
import { WhatsAppButton } from '@/components/WhatsApp';
import { quote, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Gratis offerte',
  description: 'Vraag in 2 minuten een vrijblijvende offerte aan voor je website, huisstijl, video of AI-project. Antwoord binnen 1 werkdag.',
  alternates: { canonical: '/offerte' },
};

const allowed = new Set(quote.services.map((s) => s.key));

export default async function Offerte({ searchParams }: { searchParams: Promise<{ dienst?: string }> }) {
  const { dienst } = await searchParams;
  const initial = (dienst ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter((s) => allowed.has(s));

  return (
    <>
      <Header />
      <main id="main" className="qpage">
        <div className="wrap">
          <span className="label is-on">
            <span className="dot" /> Antwoord {site.responseTime}
          </span>
          <h1 className="t-hero" style={{ marginTop: 28 }}>
            Vraag je offerte.
          </h1>
          <div className="qgrid">
            <aside className="qside">
              <div className="qside__block">
                <span className="label label--soft">Wat je krijgt</span>
                <ul className="checks">
                  <li>
                    <Check /> Een persoonlijk antwoord {site.responseTime}
                  </li>
                  <li>
                    <Check /> Een voorstel met aanpak, planning en vaste prijs
                  </li>
                  <li>
                    <Check /> Een vrijblijvend kennismakingsgesprek, ter plaatse of online
                  </li>
                  <li>
                    <Check /> Geen verplichtingen, geen opvolg-spam
                  </li>
                </ul>
              </div>
              <div className="qside__block">
                <span className="label label--soft">Liever geen formulier?</span>
                <div>
                  <WhatsAppButton location="offerte" label="Stuur ons een WhatsApp" />
                </div>
                <span className="label label--soft" style={{ marginTop: 12 }}>
                  Of mail ons
                </span>
                <a className="mail" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                {site.phone && (
                  <a className="t-lead" href={`tel:${site.phone.replace(/\s/g, '')}`}>
                    {site.phone}
                  </a>
                )}
              </div>
              <div className="qside__block">
                <span className="label label--soft">Werkte samen met</span>
                <p className="t-body">KBC, VRT NWS, Torfs, Cyclis, EGY Cleaning, Shanti Beans en meer.</p>
              </div>
            </aside>
            <QuoteForm initialServices={initial} />
          </div>
        </div>
      </main>
    </>
  );
}
