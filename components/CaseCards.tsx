import Image from 'next/image';
import Link from 'next/link';
import { cases } from '@/lib/site';
import { caseStudies } from '@/lib/pages';
import { Arrow } from './Icons';

/** Rij met case-kaarten. Cases met een uitgewerkte pagina linken naar /werk/[slug]. */
export function CaseCards({ refs }: { refs: string[] }) {
  const items = refs
    .map((ref) => {
      const study = caseStudies.find((c) => c.slug === ref || c.title === ref);
      const c = cases.find((x) => x.title === (study?.title ?? ref));
      return c ? { c, href: study ? `/werk/${study.slug}` : null } : null;
    })
    .filter(Boolean) as { c: (typeof cases)[number]; href: string | null }[];

  if (!items.length) return null;

  return (
    <div className="ccards">
      {items.map(({ c, href }) => {
        const inner = (
          <>
            <div className="ccard__img">
              <Image src={c.image} alt={`${c.title} voor ${c.client}`} fill sizes="(min-width: 900px) 50vw, 100vw" />
            </div>
            <div className="ccard__meta">
              <div>
                <h3 className="ccard__t">{c.title}</h3>
                <p className="ccard__x">{c.blurb}</p>
              </div>
              {href && (
                <span className="ccard__more">
                  Bekijk case <Arrow />
                </span>
              )}
            </div>
          </>
        );
        return href ? (
          <Link key={c.title} href={href} className="ccard ccard--link">
            {inner}
          </Link>
        ) : (
          <div key={c.title} className="ccard">
            {inner}
          </div>
        );
      })}
    </div>
  );
}
