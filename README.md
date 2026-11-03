# studiotonton.be

Website van **studio tonton**: designstudio uit Hasselt (websites, branding, motion, AI) voor lokale KMO's en zelfstandigen.
Stijl gebaseerd op yasinyer.be. Doel: bezoekers omzetten in offerte-aanvragen.

> Schrijfwijze: **studio tonton** altijd in kleine letters, ook aan het begin van een zin.

## Stack

- Next.js 15 (App Router) + TypeScript, plain CSS (`app/globals.css`)
- Hanken Grotesk via `next/font`
- Gehost op Vercel

## Lokaal draaien

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # productie-build
```

## Content aanpassen

Alle teksten, **vanaf-prijzen**, cases, FAQ, contactgegevens en formulieropties staan in **`lib/site.ts`**.

### Dienstpagina's en cases

- **Dienstpagina's** (`/diensten/…`, bv. `/diensten/webdesign-hasselt`) en **uitgewerkte cases** (`/werk/…`) staan in
  **`lib/pages.ts`**. Een nieuwe case: voeg ze toe aan `caseStudies` (de `title` moet gelijk zijn aan die in `cases` in
  `lib/site.ts`) en zet de afbeeldingen in `public/img/cases/`. Sitemap, footer en de caselijst op de homepage
  pikken nieuwe pagina's automatisch op.
- **Reviews** staan in `testimonials` in `lib/site.ts` (enkel echte citaten, met toestemming). Een review bij één
  case zet je in `testimonial` van die case in `lib/pages.ts`. Vul `googleReviewsUrl` in zodra je Google-bedrijfsprofiel
  reviews heeft, dan verschijnt er een link naar je reviews.

## Offerte-aanvragen (leads)

Het formulier op `/offerte` (4 stappen) post naar `app/api/offerte/route.ts`. Stel in Vercel deze environment variables in
(zie `.env.example`):

| Variabele          | Doel                                                                 |
| ------------------ | -------------------------------------------------------------------- |
| `RESEND_API_KEY`   | Verstuurt elke lead per mail via [Resend](https://resend.com), plus een bevestiging naar de klant |
| `LEAD_TO_EMAIL`    | Ontvanger van de leads (standaard `hallo@studiotonton.be`)            |
| `LEAD_FROM_EMAIL`  | Afzender, op een domein dat in Resend geverifieerd is                 |
| `LEAD_WEBHOOK_URL` | Optioneel: stuurt elke lead als JSON naar Make/Zapier/n8n/Slack/CRM   |

Zonder `RESEND_API_KEY` én zonder `LEAD_WEBHOOK_URL` geeft de API in productie een fout (503). De bezoeker ziet dan
een melding om te mailen. Zo gaat er nooit stilletjes een lead verloren.

## Analytics (PostHog)

PostHog meet bezoeken en conversies **zonder cookies** (geen cookiebanner nodig): `persistence: 'memory'`, geen
persoonsprofielen, geen sessie-opnames. Data gaat naar PostHog EU via `/ingest` op ons eigen domein (rewrite in
`next.config.mjs`), zodat adblockers de metingen niet tegenhouden.

Eigen bezoeken uitsluiten: open `https://www.studiotonton.be/?intern=aan` één keer op elk toestel dat je gebruikt
(`?intern=uit` zet het terug). Een IP-filter werkt niet, want het PostHog-project anonimiseert IP-adressen.

Zet in Vercel `NEXT_PUBLIC_POSTHOG_KEY` (projectsleutel `phc_…` uit PostHog EU) en redeploy. Zonder sleutel staat
analytics uit.

Events (`lib/track.ts`), naast automatische pageviews en klikken:

- `cta_click`: klik op de offerteknop in de dock
- `quote_start`, `quote_step` (`step` 1–4): begin en voortgang in het offerteformulier
- `generate_lead`: verstuurde aanvraag (met `services` en `budget`)

Knoppen hebben een `data-cta`-attribuut, zodat je ze in PostHog als actie kunt gebruiken.
