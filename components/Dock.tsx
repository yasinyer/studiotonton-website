'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Arrow, Home, Moon, Sun } from './Icons';
import { track } from '@/lib/track';

const links = [
  { href: '/#werk', id: 'werk', label: 'Werk' },
  { href: '/#diensten', id: 'diensten', label: 'Diensten' },
  { href: '/#faq', id: 'faq', label: 'FAQ', hideSm: true },
];

/** Zwevende navigatie onderaan, zoals op yasinyer.be, met een vaste offerte-knop. */
export function Dock() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const onQuote = pathname?.startsWith('/offerte');

  // Verberg de dock op het einde van de pagina (de grote CTA neemt dan over)
  useEffect(() => {
    const foot = document.getElementById('contact');
    if (!foot) return;
    const io = new IntersectionObserver(([e]) => setHidden(e.isIntersecting), { threshold: 0.25 });
    io.observe(foot);
    return () => io.disconnect();
  }, [pathname]);

  // Actieve sectie markeren
  useEffect(() => {
    if (pathname !== '/') return setActive(null);
    const els = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {}
  };

  return (
    <nav className={`dock${hidden ? ' is-hidden' : ''}`} aria-label="Hoofdnavigatie">
      <div className="dock__in">
        <div className="dock__nav">
          <Link href="/" className="dock__home" aria-label="Home" aria-current={pathname === '/' && !active ? 'true' : undefined}>
            <Home />
          </Link>
          {links.map((l) => (
            <Link key={l.id} href={l.href} className={l.hideSm ? 'dock__hide-sm' : undefined} aria-current={active === l.id ? 'true' : undefined}>
              {l.label}
            </Link>
          ))}
        </div>
        {!onQuote && (
          <Link href="/offerte" className="btn dock__cta" onClick={() => track('cta_click', { location: 'dock' })}>
            Gratis offerte
            <Arrow />
          </Link>
        )}
        <button type="button" className="dock__theme" onClick={toggleTheme} aria-label="Wissel licht/donker">
          <Sun className="theme-ico--sun" />
          <Moon className="theme-ico--moon" />
        </button>
      </div>
    </nav>
  );
}
