'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Case } from '@/lib/site';

/** Genummerde caselijst met sticky preview op desktop, zoals "Geselecteerd werk" op yasinyer.be. */
export function WorkList({ items }: { items: Case[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="work">
      <ol className="wlist">
        {items.map((c, i) => (
          <li
            key={c.title}
            className={`wrow${i === active ? ' is-active' : ''}`}
            onMouseEnter={() => setActive(i)}
          >
            <span className="wrow__n">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="wrow__t">{c.title}</h3>
            <span className="wrow__y">{c.year}</span>
            <div className="wrow__meta">
              <span className="wrow__client">
                {c.logo && <Image src={c.logo} alt="" width={16} height={16} />}
                {c.client}
              </span>
              {c.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="wrow__img">
              <Image src={c.image} alt={`${c.title} voor ${c.client}`} width={960} height={600} sizes="100vw" loading="lazy" />
            </div>
          </li>
        ))}
      </ol>
      <div className="wpreview" aria-hidden="true">
        <div className="wpreview__frame">
          {items.map((c, i) => (
            <Image
              key={c.title}
              src={c.image}
              alt=""
              fill
              sizes="(min-width: 1000px) 45vw, 0px"
              className={i === active ? 'is-active' : undefined}
              priority={i === 0}
            />
          ))}
        </div>
        <p className="wpreview__cap">{items[active]?.blurb}</p>
      </div>
    </div>
  );
}
