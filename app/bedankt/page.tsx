import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Chrome';
import { Arrow } from '@/components/Icons';
import { CaseCards } from '@/components/CaseCards';
import { caseStudies } from '@/lib/pages';
import { site, steps } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Bedankt',
  robots: { index: false, follow: false },
};

export default async function Bedankt({ searchParams }: { searchParams: Promise<{ naam?: string }> }) {
  const { naam } = await searchParams;
  const first = (naam ?? '').slice(0, 40);

  return (
    <>
      <Header />
      <main id="main" className="qpage">
        <div className="wrap">
          <span className="label is-on">
            <span className="dot" /> Aanvraag ontvangen
          </span>
          <h1 className="t-hero" style={{ marginTop: 28 }}>
            Bedankt{first ? `, ${first}` : ''}.
          </h1>
          <div className="qgrid">
            <div className="qside">
              <p className="t-lead">
                We hebben je aanvraag goed ontvangen en je hoort van ons {site.responseTime}. Check ook even je spam als je
                niets ziet.
              </p>
              <div>
                <Link href="/#werk" className="btn btn--lg btn--ghost">
                  Bekijk intussen ons werk
                  <Arrow />
                </Link>
              </div>
            </div>
            <div>
              <span className="label label--soft">Wat er nu gebeurt</span>
              <ol className="proc" style={{ gridTemplateColumns: '1fr', marginTop: 14 }}>
                {steps.slice(0, 3).map((s, i) => (
                  <li key={s.title} style={{ paddingRight: 0, borderTop: '1px solid var(--border-default)', paddingBottom: 24 }}>
                    <span className="proc__n">0{i + 1}</span>
                    <h2 className="proc__t">{s.title}</h2>
                    <p className="proc__x">{s.text}</p>
                  </li>
                ))}
              </ol>
              <div style={{ marginTop: 32 }}>
                <span className="label label--soft">Intussen even kijken?</span>
                <div style={{ marginTop: 14 }}>
                  <CaseCards refs={caseStudies.map((c) => c.slug)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
