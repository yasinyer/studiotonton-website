'use client';

import { site } from '@/lib/site';
import { track } from '@/lib/track';

/** Knop die een WhatsApp-gesprek opent met een voorbereid bericht. Verborgen als site.whatsapp leeg is. */
export function WhatsAppButton({
  message = 'Hallo studio tonton, ik heb een vraag over ',
  location,
  className = 'chipbtn',
  label = 'Stuur een WhatsApp',
}: {
  message?: string;
  location: string;
  className?: string;
  label?: string;
}) {
  if (!site.whatsapp) return null;
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`wa ${className}`}
      onClick={() => track('whatsapp_click', { location })}
      data-cta={`whatsapp-${location}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5z" />
        <path d="M9 9.5c.3 1.8 1.7 3.6 3.6 4.6l1.2-1.1 1.7.8c-.2.9-1 1.6-1.9 1.5-2.9-.4-5.6-3.1-6-6-.1-.9.6-1.7 1.5-1.9l.8 1.7z" />
      </svg>
      {label}
    </a>
  );
}
