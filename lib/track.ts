import posthog from 'posthog-js';

/**
 * Conversie-tracking. Stuurt events naar PostHog (als die actief is) en duwt ze ook naar
 * window.dataLayer (GTM/GA4) en Plausible, mocht je die later toevoegen.
 *
 * Events: cta_click, quote_start, quote_step (step 1–4), generate_lead.
 */
type Props = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    plausible?: (event: string, opts?: { props?: Props }) => void;
  }
}

export function track(event: string, props: Props = {}) {
  if (typeof window === 'undefined') return;
  try {
    if (posthog.__loaded) posthog.capture(event, props);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...props });
    window.plausible?.(event, { props });
  } catch {}
}
