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

## Conversie-tracking

`lib/track.ts` duwt events naar `window.dataLayer` (GTM/GA4) en Plausible, als die aanwezig zijn:

- `cta_click`: klik op de offerteknop in de dock
- `quote_start`, `quote_step`: begin en voortgang in het formulier
- `generate_lead`: verstuurde aanvraag (de bezoeker landt daarna op `/bedankt`)

Extra knoppen hebben een `data-cta`-attribuut, zodat je ze in GTM als trigger kunt gebruiken.
