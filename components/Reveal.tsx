'use client';

import { useEffect } from 'react';

/** Voegt .is-in toe aan elk .rv-element zodra het in beeld scrolt. */
export function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.rv:not(.is-in)');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
