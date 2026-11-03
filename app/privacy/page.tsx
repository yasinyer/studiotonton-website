import type { Metadata } from 'next';
import { Footer, Header } from '@/components/Chrome';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy',
  alternates: { canonical: '/privacy' },
};

export default function Privacy() {
  return (
    <>
      <Header />
      <main id="main" className="section" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <span className="label">Privacybeleid</span>
          <h1 className="t-hero" style={{ margin: '28px 0 48px' }}>
            Privacy.
          </h1>
          <div className="prose">
            <p>
              studio tonton ({site.city}, België) respecteert je privacy en verwerkt persoonsgegevens volgens de Algemene
              Verordening Gegevensbescherming (AVG/GDPR).
            </p>
            <h2>Welke gegevens</h2>
            <p>
              Wanneer je een offerte aanvraagt, bewaren we wat je zelf invult: je naam, e-mailadres, eventueel je
              telefoonnummer, de naam en website van je zaak en de info over je project.
            </p>
            <h2>Waarvoor</h2>
            <p>
              Enkel om je aanvraag te beantwoorden, je een voorstel te bezorgen en, als we samenwerken, het project uit te
              voeren. We verkopen of delen je gegevens nooit voor marketingdoeleinden.
            </p>
            <h2>Hoe lang</h2>
            <p>
              Aanvragen die niet tot een samenwerking leiden, verwijderen we na uiterlijk 12 maanden. Klantgegevens bewaren we
              zolang de wet dat vraagt (bv. voor facturatie).
            </p>
            <h2>Verwerkers</h2>
            <p>
              Voor het versturen van e-mails en het hosten van deze website gebruiken we betrouwbare partners (zoals Vercel en
              Resend) die je gegevens enkel in onze opdracht verwerken.
            </p>
            <h2>Cookies</h2>
            <p>
              Deze website gebruikt geen tracking-cookies zonder je toestemming. Je voorkeur voor licht of donker thema en een
              half ingevulde offerte worden enkel lokaal in je browser bewaard.
            </p>
            <h2>Je rechten</h2>
            <p>
              Je kan je gegevens altijd inkijken, laten aanpassen of laten verwijderen. Mail naar{' '}
              <a className="inline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              . Je kan ook klacht indienen bij de Gegevensbeschermingsautoriteit (gegevensbeschermingsautoriteit.be).
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
