'use client';

import { useEffect } from 'react';
import posthog from 'posthog-js';

/**
 * PostHog-analytics, privacyvriendelijk ingesteld zodat er geen cookiebanner nodig is:
 * - geen cookies of localStorage (persistence: 'memory')
 * - geen sessie-opnames of enquêtes
 * - geen persoonsprofielen
 * - data op de EU-servers van PostHog, verstuurd via /ingest op ons eigen domein
 *
 * Staat pas aan als NEXT_PUBLIC_POSTHOG_KEY in Vercel is ingesteld.
 */
export function Analytics() {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key || posthog.__loaded) return;
    posthog.init(key, {
      api_host: '/ingest',
      ui_host: 'https://eu.posthog.com',
      defaults: '2026-01-30',
      capture_pageview: 'history_change',
      capture_pageleave: true,
      persistence: 'memory',
      person_profiles: 'never',
      disable_session_recording: true,
      disable_surveys: true,
    });
  }, []);
  return null;
}
