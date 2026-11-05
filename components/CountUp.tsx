'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Telt van 0 op naar `to` zodra het getal in beeld scrolt (zoals op yasinyer.be).
 * Server-side en zonder JS staat meteen het eindgetal er; bij reduced motion telt het niet.
 */
export function CountUp({ to, duration = 1600 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    setVal(0);
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(2, -10 * t); // easeOutExpo
          setVal(t === 1 ? to : Math.round(eased * to));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <>
      <span ref={ref} aria-hidden="true">
        {val}
      </span>
      <span className="sr-only">{to}</span>
    </>
  );
}
