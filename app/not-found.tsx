import Link from 'next/link';
import { Header } from '@/components/Chrome';
import { Arrow } from '@/components/Icons';

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="qpage">
        <div className="wrap">
          <span className="label">404</span>
          <h1 className="t-hero" style={{ margin: '28px 0 40px' }}>
            Deze pagina bestaat niet.
          </h1>
          <div className="hero__cta">
            <Link href="/" className="btn btn--lg">
              Naar de homepage
              <Arrow />
            </Link>
            <Link href="/offerte" className="btn btn--lg btn--ghost">
              Vraag een offerte
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
