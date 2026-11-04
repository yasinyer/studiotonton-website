/**
 * Alle content van studiotonton.be op één plek.
 * Pas hier prijzen, cases, contactgegevens en FAQ aan.
 * Let op: "studio tonton" schrijven we altijd in kleine letters.
 */

export const site = {
  name: 'studio tonton',
  url: 'https://www.studiotonton.be',
  email: 'hallo@studiotonton.be',
  phone: '', // bv. '+32 470 00 00 00' — leeg = verborgen
  whatsapp: '32493832540', // nummer voor de WhatsApp-knop, met landcode, zonder + of spaties — leeg = verborgen
  city: 'Hasselt',
  region: 'Limburg',
  instagram: '', // bv. 'https://www.instagram.com/studiotonton' — leeg = verborgen
  linkedin: '', // leeg = verborgen
  responseTime: 'binnen 1 werkdag',
  googleReviewsUrl: 'https://g.page/r/CcG1MXsqgXKXEAE/review', // link naar je reviews op Google — leeg = verborgen
  description:
    'studio tonton is een designstudio uit Hasselt. Websites, branding, motion en AI voor lokale ondernemers, met een vaste prijs vooraf en één aanspreekpunt.',
};

export type ServiceKey = 'website' | 'branding' | 'motion' | 'ai' | 'app';

export type Service = {
  key: ServiceKey;
  title: string;
  pitch: string;
  from: number | null; // vanaf-prijs excl. btw
  unit?: string;
  includes: string[];
  examples: string[];
};

export const services: Service[] = [
  {
    key: 'website',
    title: 'Websites',
    pitch:
      'Een website die draait rond wat je bezoekers moeten doen: bellen, boeken of een offerte vragen. Ontworpen en gebouwd onder één dak.',
    from: 1950,
    includes: [
      'Webdesign op maat, geen template',
      'Snel, mobiel en vindbaar in Google',
      'Zelf teksten en foto’s aanpassen',
      'Contact- en offerteformulieren',
    ],
    examples: ['EGY Cleaning', 'Shanti Beans', 'Torfs'],
  },
  {
    key: 'branding',
    title: 'Branding & huisstijl',
    pitch:
      'Een logo, kleuren en typografie die samen kloppen, en een merk dat doorloopt van je gevel tot je Instagram. Ook voor drukwerk, signalisatie en illustratie: los of bovenop je huisstijl.',
    from: 1250,
    includes: [
      'Logo en beeldmerk',
      'Kleuren, typografie en merkgids',
      'Brochures, flyers en affiches',
      'Werfborden, beachflags en autobestickering',
      'Illustraties op maat',
      'Los drukwerk vanaf €450',
    ],
    examples: ['EGY Cleaning', 'Shanti Beans'],
  },
  {
    key: 'motion',
    title: 'Motion & video',
    pitch:
      'Beweging die uitlegt en opvalt: animaties en korte video’s voor je website, je socials of een scherm in je zaak.',
    from: 850,
    includes: [
      'Explainer- en promovideo’s',
      'Reels en motion voor social',
      'Logo-animatie',
      'Infographics en data in beeld',
    ],
    examples: ['VRT NWS', 'Onder het oppervlak'],
  },
  {
    key: 'ai',
    title: 'AI & automatisatie',
    pitch:
      'Minder tijd kwijt aan herhaalwerk. Een slimme chatbot, automatische offertes of AI-beelden die passen bij je merk.',
    from: 750,
    includes: [
      'Chatbot op je website',
      'Automatische opvolging van leads',
      'AI-beelden in je eigen stijl',
      'Koppelingen met je bestaande tools',
    ],
    examples: ['AI Image generation'],
  },
  {
    key: 'app',
    title: 'Apps & UX/UI',
    pitch:
      'Apps en digitale producten die helder werken, met dezelfde aanpak als bij KBC Mobile: van flow tot klikbaar prototype.',
    from: 2500,
    includes: [
      'User flows en wireframes',
      'UI in light en dark mode',
      'Klikbare prototypes',
      'Toegankelijkheid als vaste stap',
    ],
    examples: ['SurprisePay', 'Cyclis Bike Lease'],
  },
];

export type Case = {
  title: string;
  client: string;
  logo?: string;
  year: number;
  tags: string[];
  image: string;
  blurb: string;
  local?: boolean;
};

export const cases: Case[] = [
  {
    title: 'EGY Cleaning',
    client: 'EGY Cleaning',
    logo: '/img/logos/egycleaning.png',
    year: 2026,
    tags: ['Website', 'Branding'],
    image: '/img/cases/egy.webp',
    blurb: 'Een schoonmaakbedrijf met een merk en website die meteen vertrouwen wekken.',
    local: true,
  },
  {
    title: 'Shanti Beans',
    client: 'Shanti Beans',
    logo: '/img/logos/shantibeans.png',
    year: 2026,
    tags: ['Website', 'Branding'],
    image: '/img/cases/shanti.webp',
    blurb: 'Een koffiebar die je online al ruikt. Merk en website in één beweging.',
    local: true,
  },
  {
    title: 'SurprisePay',
    client: 'KBC Bank & Verzekeringen',
    logo: '/img/logos/kbc.png',
    year: 2025,
    tags: ['UX/UI'],
    image: '/img/cases/surprisepay.webp',
    blurb: 'Dagelijkse bankzaken hoeven niet saai te zijn. Soms zit de meerwaarde in een klein gebaar.',
  },
  {
    title: 'Reportages voor nwsnwsnws',
    client: 'VRT',
    logo: '/img/logos/vrt-nws.webp',
    year: 2026,
    tags: ['Motion'],
    image: '/img/cases/nws.webp',
    blurb: 'Infographics en motion die nieuws in één oogopslag uitleggen.',
  },
  {
    title: 'Torfs website',
    client: 'Torfs',
    year: 2023,
    tags: ['Website'],
    image: '/img/cases/torfs.webp',
    blurb: 'Een website voor een van de bekendste schoenwinkels van Vlaanderen.',
  },
  {
    title: 'AI Image generation',
    client: 'KBC Bank & Verzekeringen',
    logo: '/img/logos/kbc.png',
    year: 2025,
    tags: ['UX/UI', 'AI'],
    image: '/img/cases/ai.webp',
    blurb: 'AI-features die mensen vertrouwen, ontworpen voor miljoenen gebruikers.',
  },
  {
    title: 'Cyclis Bike Lease',
    client: 'Cyclis',
    year: 2023,
    tags: ['UX/UI', 'Motion'],
    image: '/img/cases/cyclis.webp',
    blurb: 'Een fietslease die je in een paar tikken regelt.',
  },
  {
    title: 'MyHome & MyMobility',
    client: 'KBC Bank & Verzekeringen',
    logo: '/img/logos/kbc.png',
    year: 2024,
    tags: ['UX/UI', 'Motion'],
    image: '/img/cases/myhome.webp',
    blurb: 'Alles rond je huis en je auto overzichtelijk op één plek.',
  },
  {
    title: 'Onder het oppervlak',
    client: 'Eigen concept',
    year: 2026,
    tags: ['Motion', 'AI'],
    image: '/img/cases/onder.webp',
    blurb: 'Een eigen motion- en AI-experiment over wat je niet meteen ziet.',
  },
];

export const clients: { name: string; src: string }[] = [
  { name: 'KBC', src: '/img/logos/kbc.png' },
  { name: 'VRT NWS', src: '/img/logos/vrt-nws.webp' },
  { name: 'nwsnwsnws', src: '/img/logos/nwsnwsnws.png' },
  { name: 'Nitra', src: '/img/logos/nitra.svg' },
  { name: 'Torfs', src: '/img/logos/torfs.png' },
  { name: 'Cyclis', src: '/img/logos/cyclis.png' },
  { name: 'EGY Cleaning', src: '/img/logos/egycleaning.png' },
  { name: 'Shanti Beans', src: '/img/logos/shantibeans.png' },
  { name: 'Appfoundry', src: '/img/logos/appfoundry.webp' },
  { name: 'Springbok Agency', src: '/img/logos/springbok.png' },
  { name: 'De Serre Hasselt', src: '/img/logos/deserre.png' },
  { name: 'Open Summer of Code', src: '/img/logos/osoc.svg' },
];

export const stats = [
  { n: '3', suf: '×', label: 'Keer Best Banking App in the World, met KBC Mobile' },
  { n: '11', label: 'Cases, van bank tot koffiebar' },
  { n: '4', suf: '+', label: 'Jaar ervaring als UI designer, in teams en freelance' },
  { n: '1', label: 'Aanspreekpunt, van eerste schets tot oplevering' },
];

export const steps = [
  {
    title: 'Kennismaking',
    text: 'Een vrijblijvend gesprek, bij jou in de zaak, bij ons of online. Jij vertelt wat je nodig hebt, wij stellen vragen tot het helder is.',
  },
  {
    title: 'Voorstel',
    text: 'Je krijgt een voorstel met aanpak, planning en een vaste prijs, zodat je weet waar je aan toe bent.',
  },
  {
    title: 'Ontwerp en bouw',
    text: 'Korte rondes, met feedback tussendoor. Je ziet het werk groeien, niet alleen het eindresultaat.',
  },
  {
    title: 'Oplevering',
    text: 'Alles wat je nodig hebt: een live website, ontwerpbestanden, assets of video, en uitleg zodat je zelf verder kan.',
  },
];

/** "Achter studio tonton": het gezicht van de studio. */
export const owner = {
  name: 'Yasin Yer',
  role: 'UX/UI-, motion- en AI-designer',
  photo: '/img/portret.webp',
  url: 'https://yasinyer.be',
  recommendations: 'https://www.linkedin.com/in/yasinyer/details/recommendations/', // leeg = verborgen
};

/** Samenwerkingsvormen. */
export const modes = [
  {
    title: 'Project',
    text: 'Een afgebakende vraag met een duidelijke planning en een vaste prijs. Bijvoorbeeld een website, een huisstijl of een reeks video’s.',
  },
  {
    title: 'Doorlopend',
    text: 'Een vaste designpartner voor je zaak of team, een paar dagen per week of per maand, voor een merk of product dat blijft groeien.',
  },
  {
    title: 'Waar',
    text: 'Vanuit Hasselt, voor ondernemers in heel Limburg en Vlaanderen, ter plaatse of online. Je werkt altijd rechtstreeks met Yasin.',
  },
];

/**
 * Reviews. Zet de nieuwste en meest herkenbare (lokale) klant bovenaan.
 * Gebruik enkel echte citaten, met toestemming van de klant. avatar is optioneel.
 */
export const testimonials: { quote: string; name: string; role: string; avatar?: string }[] = [
  {
    quote:
      'Yasin is a young, dynamic and creative designer who not only delivered excellent visual design work for the more “traditional” projects like the KBC Mobile app but also successfully took on more “creative” assignments thanks to his illustration and animation skills. I am confident that Yasin has a bright design career ahead of him.',
    name: 'Davy Rego',
    role: 'Digital Customer Experience at KBC Bank & Verzekeringen',
    avatar: '/img/testimonial-davy.webp',
  },
  {
    quote:
      'Yasin is a talented all-round designer. He has a great eye for detail! Listens well to what the assignment is and comes up with a great concept that fits as a whole. When given a chance you’ll be surprised of what he delivers.',
    name: 'Inti Valderas Caro',
    role: 'User Experience designer at VRT MAX',
    avatar: '/img/testimonial-inti.webp',
  },
];

export const faq = [
  {
    q: 'Wat kost een website?',
    a: 'Een website op maat start vanaf €1.950 excl. btw. Een eenvoudige one-pager kan goedkoper, een site met webshop of koppelingen duurder. Na een kort gesprek krijg je een vaste prijs, zodat je vooraf weet waar je aan toe bent.',
  },
  {
    q: 'Hoe lang duurt het?',
    a: 'Een website staat meestal binnen 3 tot 6 weken live, een huisstijl binnen 2 tot 4 weken. Heb je een harde deadline, zoals een opening? Laat het weten, dan plannen we daarrond.',
  },
  {
    q: 'Kan ik daarna zelf dingen aanpassen?',
    a: 'Ja. Je krijgt een eenvoudig beheer om teksten, foto’s en openingsuren zelf aan te passen, en een korte uitleg erbij. Liever dat wij het doen? Dat kan ook.',
  },
  {
    q: 'Zorgen jullie ook voor hosting en domeinnaam?',
    a: 'We helpen je met alles: domeinnaam, hosting, e-mail en Google Bedrijfsprofiel. Alles staat op jouw naam, zodat je nooit vastzit.',
  },
  {
    q: 'Word ik gevonden in Google?',
    a: 'Elke site wordt snel, mobielvriendelijk en technisch SEO-proof opgeleverd, met aandacht voor lokale zoekopdrachten zoals “kapper Hasselt”. Zo heb je een sterke basis om gevonden te worden.',
  },
  {
    q: 'Werken jullie enkel in Hasselt?',
    a: 'We zitten in Hasselt en werken graag met ondernemers uit Limburg, maar evengoed met zaken uit de rest van Vlaanderen en Brussel. Een kennismaking kan ook online.',
  },
  {
    q: 'Hoe verloopt de betaling?',
    a: 'In schijven: een deel bij de start, een deel na het ontwerp en de rest bij oplevering. Zo betaal je altijd voor wat je al gezien hebt.',
  },
];

export const quote = {
  services: [
    { key: 'website', label: 'Website' },
    { key: 'branding', label: 'Logo, huisstijl & drukwerk' },
    { key: 'motion', label: 'Video & animatie' },
    { key: 'ai', label: 'AI & automatisatie' },
    { key: 'app', label: 'App of digitaal product' },
    { key: 'unsure', label: 'Weet ik nog niet' },
  ],
  sectors: ['Horeca', 'Kapper & beauty', 'Bouw & renovatie', 'Retail & winkel', 'Zorg & welzijn', 'Diensten & advies', 'Iets anders'],
  budgets: ['Minder dan €1.500', '€1.500 – €3.000', '€3.000 – €6.000', 'Meer dan €6.000', 'Weet ik nog niet'],
  timings: ['Zo snel mogelijk', 'Binnen 1 à 3 maanden', 'Later dit jaar', 'Ik verken nog'],
};

export const euro = (n: number) =>
  new Intl.NumberFormat('nl-BE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);
