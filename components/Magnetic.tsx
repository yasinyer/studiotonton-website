'use client';

import { useEffect } from 'react';

/** Knoppen die in een straal van 48px licht naar de muis toe trekken (zoals op yasinyer.be). */
const SELECTOR =
  '.btn, .chipbtn, .tlink, .slider__btn, .band-pause, .quick a, .dock__nav a, .dock__cta, .gr-link, .slider__more';
const RANGE = 48;

export function Magnetic() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const pulled = new Set<HTMLElement>();
    let raf = 0;

    const onMove = (ev: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
          const r = el.getBoundingClientRect();
          if (!r.width || r.width > 360 || r.height > 120 || r.bottom < 0 || r.top > innerHeight) return;
          const dx = ev.clientX - (r.left + r.width / 2);
          const dy = ev.clientY - (r.top + r.height / 2);
          // Afstand tot de rand van de knop (0 als de muis erop staat)
          const d = Math.hypot(Math.max(0, Math.abs(dx) - r.width / 2), Math.max(0, Math.abs(dy) - r.height / 2));
          if (d < RANGE) {
            if (!el.dataset.mag) {
              el.dataset.mag = '1';
              const t = getComputedStyle(el).transition;
              el.style.transition = [t && t !== 'all 0s ease 0s' ? t : '', 'transform .5s cubic-bezier(0.22,1,0.36,1)'].filter(Boolean).join(',');
            }
            const k = 1 - d / RANGE;
            el.style.transform = `translate(${(0.18 * dx * k).toFixed(1)}px,${(0.22 * dy * k).toFixed(1)}px)`;
            pulled.add(el);
          } else if (pulled.has(el)) {
            el.style.transform = '';
            pulled.delete(el);
          }
        });
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      pulled.forEach((el) => (el.style.transform = ''));
    };
  }, []);

  return null;
}
