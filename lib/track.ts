/**
 * Lichtgewicht conversie-tracking. Duwt events naar window.dataLayer (Google Tag Manager / GA4)
 * en, indien aanwezig, naar Plausible. Zonder analytics-script doet dit niets.
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
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...props });
    window.plausible?.(event, { props });
  } catch {}
}
