'use client';

import { useId, useState } from 'react';
import { Plus } from './Icons';

/**
 * Veelgestelde vragen als uitklaplijst. Schuift in elke browser vloeiend open en dicht
 * (grid-rows 0fr → 1fr); de antwoorden staan altijd in de HTML, ook als ze dicht zijn.
 */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const base = useId();
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));
  const toggle = (i: number) =>
    setOpen((cur) => {
      const next = new Set(cur);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className="faq rv">
      {items.map((f, i) => {
        const on = open.has(i);
        const id = `${base}-${i}`;
        return (
          <div key={f.q} className={`faq__item${on ? ' is-open' : ''}`}>
            <h3 className="faq__h">
              <button type="button" className="faq__q" id={`${id}-q`} aria-expanded={on} aria-controls={`${id}-a`} onClick={() => toggle(i)}>
                {f.q}
                <Plus />
              </button>
            </h3>
            <div id={`${id}-a`} className="faq__panel" role="region" aria-labelledby={`${id}-q`} inert={!on}>
              <div className="faq__inner">
                <p>{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
