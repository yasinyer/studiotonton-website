/**
 * Inhoud van de dienstpagina's (/diensten/…) en de uitgewerkte cases (/werk/…).
 * Prijzen en basisinfo per dienst komen uit `services` in lib/site.ts.
 * Let op: "studio tonton" altijd in kleine letters.
 */
import type { ServiceKey } from './site';

export type ServicePage = {
  key: ServiceKey;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  body: string[];
  forWho: string[];
  cases: string[]; // slugs uit caseStudies, of titels uit cases
  faq: { q: string; a: string }[];
};

export const servicePages: ServicePage[] = [
  {
    key: 'website',
    slug: 'webdesign-hasselt',
    metaTitle: 'Webdesign in Hasselt en Limburg',
    metaDescription:
      'Een website op maat voor je zaak in Hasselt of Limburg: ontworpen en gebouwd onder één dak, snel, vindbaar en gericht op meer aanvragen. Vanaf €1.950, vaste prijs vooraf.',
    h1: 'Webdesign in Hasselt dat klanten oplevert.',
    lead:
      'Een website is pas goed als hij iets oplevert: telefoontjes, reservaties of offerte-aanvragen. studio tonton ontwerpt en bouwt websites voor ondernemers in Hasselt en de rest van Limburg, met dat doel voor ogen.',
    body: [
      'We beginnen niet bij kleuren of foto’s, maar bij de vraag wat een bezoeker moet doen. Bellen? Een tafel boeken? Een offerte vragen? Elke pagina wordt rond die ene actie ontworpen, zodat een bezoeker nooit hoeft te zoeken.',
      'Je krijgt geen template dat ook bij honderd andere zaken draait, maar een ontwerp op maat dat past bij jouw merk. We bouwen het zelf, met moderne technologie die snel laadt op elke gsm en die Google graag ziet.',
      'Na de lancering pas je zelf teksten, foto’s en openingsuren aan, zonder technische kennis. Liever dat wij het doen? Dat kan ook.',
    ],
    forWho: [
      'Je hebt nog geen website, of je huidige site is verouderd en levert niets op.',
      'Je wilt dat klanten uit de buurt je vinden in Google.',
      'Je wilt aanvragen of reservaties via je site, niet alleen een visitekaartje.',
      'Je wilt één aanspreekpunt in plaats van een webbureau, een fotograaf en een copywriter apart.',
    ],
    cases: ['egy-cleaning', 'shanti-beans'],
    faq: [
      {
        q: 'Wat kost een website in Hasselt?',
        a: 'Een website op maat start bij studio tonton vanaf €1.950 excl. btw. Een eenvoudige one-pager kan goedkoper, een site met meerdere talen, een webshop of koppelingen duurder. Na een kort gesprek krijg je een vaste prijs.',
      },
      {
        q: 'Hoe lang duurt het om een website te maken?',
        a: 'Meestal staat een website binnen 3 tot 6 weken live. Dat hangt vooral af van hoe snel teksten en foto’s klaar zijn. Heb je een deadline, zoals een opening? Dan plannen we daarrond.',
      },
      {
        q: 'Kan ik mijn website later zelf aanpassen?',
        a: 'Ja. Je krijgt een eenvoudig beheersysteem om teksten, foto’s, openingsuren en nieuws zelf aan te passen, met een korte uitleg erbij.',
      },
      {
        q: 'Zorgen jullie ook voor de vindbaarheid in Google?',
        a: 'Elke website wordt technisch SEO-proof opgeleverd: snel, mobielvriendelijk, met de juiste titels en gestructureerde gegevens. We helpen je ook met je Google-bedrijfsprofiel, belangrijk voor lokale zoekopdrachten.',
      },
    ],
  },
  {
    key: 'branding',
    slug: 'logo-en-huisstijl-limburg',
    metaTitle: 'Logo, huisstijl en drukwerk laten maken in Limburg',
    metaDescription:
      'Logo, huisstijl en drukwerk voor ondernemers in Hasselt en Limburg: brochures, affiches, werfborden, beachflags, autobestickering en illustraties. Huisstijl vanaf €1.250, drukwerk vanaf €450.',
    h1: 'Een logo, huisstijl en drukwerk die bij je zaak passen.',
    lead:
      'Mensen beslissen in een paar seconden of ze je vertrouwen. Een sterke huisstijl zorgt dat je er professioneel uitziet, overal: op je gevel, je website, je bestelwagen, je werfbord en je Instagram.',
    body: [
      'Een huisstijl is meer dan een logo. Het zijn de kleuren, lettertypes en beelden die samen één herkenbaar geheel vormen. We vertrekken van wie je bent en wie je klanten zijn, en vertalen dat naar een merk dat klopt.',
      'Heb je al een logo waar je aan gehecht bent? Dan bouwen we daarop verder, zoals bij Shanti Beans, waar er enkel een logo was en we er een volledige online identiteit rond maakten.',
      'Je krijgt alles wat je nodig hebt: het logo in alle formaten en een merkgids met kleuren en typografie. Zo blijft je merk consistent, ook als iemand anders iets maakt.',
      'Ook voor drukwerk en signalisatie kan je bij ons terecht: van een omkeerbrochure, flyers en affiches tot een werfbord, een beachflag of de bestickering van je bestelwagen. Waar je merk erom vraagt, tekenen we er eigen illustraties bij. Je krijgt drukklare bestanden voor je drukker.',
    ],
    forWho: [
      'Je start een nieuwe zaak en wilt meteen professioneel overkomen.',
      'Je logo is verouderd of past niet meer bij wat je nu doet.',
      'Je merk ziet er op elk kanaal anders uit.',
      'Je wilt een merk dat opvalt tussen de concurrenten in je buurt.',
      'Je hebt een brochure, affiche, werfbord of autobestickering nodig die bij je merk past.',
    ],
    cases: ['egy-cleaning', 'shanti-beans'],
    faq: [
      {
        q: 'Wat kost een logo en huisstijl?',
        a: 'Een volledige huisstijl start vanaf €1.250 excl. btw. Daarin zitten het logo, kleuren, typografie en een merkgids. Extra’s zoals drukwerk of een uitgebreide set social-templates bespreken we vooraf.',
      },
      {
        q: 'Kan ik ook enkel drukwerk laten ontwerpen?',
        a: 'Ja. Een brochure, affiche, flyer, werfbord, beachflag of autobestickering kan ook los, vanaf €450 excl. btw. Heb je al een huisstijl, dan werken we daarmee verder. Je krijgt drukklare bestanden voor je drukker.',
      },
      {
        q: 'Hoeveel voorstellen krijg ik?',
        a: 'We werken in korte rondes: eerst een paar richtingen, daarna werken we de gekozen richting samen verder uit. Zo kom je sneller tot iets dat echt klopt dan met tien losse logo’s.',
      },
      {
        q: 'Wie is eigenaar van het logo?',
        a: 'Jij. Na de oplevering krijg je alle bestanden en de volledige rechten om je logo en huisstijl te gebruiken.',
      },
    ],
  },
  {
    key: 'motion',
    slug: 'video-en-animatie',
    metaTitle: 'Video en animatie voor je bedrijf',
    metaDescription:
      'Explainers, reels, logo-animaties en infographics die uitleggen en opvallen. studio tonton maakt motion design voor bedrijven in Limburg en Vlaanderen. Vanaf €850.',
    h1: 'Video en animatie die uitleggen en opvallen.',
    lead:
      'Beweging trekt de aandacht, in een feed vol stilstaande beelden en op een website waar bezoekers snel scrollen. We maken animaties en korte video’s die je verhaal in een paar seconden duidelijk maken.',
    body: [
      'Voor VRT NWS maken we infographics en motion die nieuws in één oogopslag uitleggen, van het journaal tot Instagram. Diezelfde aanpak gebruiken we voor bedrijven: een ingewikkelde dienst helder uitleggen, of een product laten opvallen.',
      'Denk aan een korte explainer voor je homepage, reels voor je socials, een geanimeerd logo voor je video’s of een scherm in je zaak dat je aanbod toont.',
      'Je krijgt de video in alle formaten die je nodig hebt: liggend voor je website en YouTube, staand voor Instagram en TikTok.',
    ],
    forWho: [
      'Je dienst is moeilijk uit te leggen in tekst.',
      'Je wilt opvallen op Instagram, TikTok of LinkedIn.',
      'Je wilt een scherm in je zaak of op een beurs dat de aandacht trekt.',
      'Je hebt cijfers of resultaten die je visueel wilt tonen.',
    ],
    cases: ['Reportages voor nwsnwsnws', 'Onder het oppervlak'],
    faq: [
      {
        q: 'Wat kost een animatievideo?',
        a: 'Animatie en video starten vanaf €850 excl. btw, bijvoorbeeld voor een korte logo-animatie of een reeks reels. Een explainer van een minuut met eigen illustraties kost meer. Je krijgt vooraf een vaste prijs.',
      },
      {
        q: 'Moet ik zelf beeldmateriaal aanleveren?',
        a: 'Niet noodzakelijk. We werken met illustraties, animatie en eventueel beelden die je al hebt. Is er toch iets nodig, dan zeggen we dat vooraf.',
      },
      {
        q: 'Hoe lang duurt het?',
        a: 'Een logo-animatie of reeks reels is meestal klaar binnen 1 à 2 weken, een explainer binnen 2 à 4 weken, afhankelijk van de lengte en het aantal feedbackrondes.',
      },
    ],
  },
  {
    key: 'ai',
    slug: 'ai-automatisatie-kmo',
    metaTitle: 'AI en automatisatie voor kmo’s',
    metaDescription:
      'Minder tijd kwijt aan herhaalwerk: een chatbot op je website, automatische opvolging van aanvragen of AI-beelden in je eigen stijl. Praktische AI voor kmo’s, vanaf €750.',
    h1: 'AI en automatisatie die je tijd besparen.',
    lead:
      'Als ondernemer heb je weinig tijd voor herhaalwerk. Met slimme automatisatie en AI neem je taken uit handen die nu elke week uren kosten, zonder dat je er zelf iets technisch voor moet kunnen.',
    body: [
      'We bekijken samen waar je tijd verliest: dezelfde vragen beantwoorden, aanvragen overtypen, offertes opmaken of beelden maken voor je socials. Daarna kiezen we de oplossing die het meeste oplevert voor het minste geld.',
      'Dat kan een chatbot op je website zijn die veelgestelde vragen beantwoordt, een automatische opvolging zodat geen enkele aanvraag blijft liggen, of AI-beelden die passen bij je huisstijl.',
      'We ontwierpen mee aan AI-functies voor KBC, die door miljoenen mensen gebruikt worden. Daaruit leerden we vooral dit: AI moet betrouwbaar en eenvoudig zijn, anders gebruikt niemand het.',
    ],
    forWho: [
      'Je beantwoordt elke week dezelfde vragen via mail of telefoon.',
      'Aanvragen en offertes kosten je te veel administratie.',
      'Je wilt sneller beelden of teksten maken voor je socials.',
      'Je bent nieuwsgierig naar AI, maar weet niet waar te beginnen.',
    ],
    cases: ['AI Image generation'],
    faq: [
      {
        q: 'Wat kost een AI-oplossing?',
        a: 'Een eerste automatisatie start vanaf €750 excl. btw. Sommige tools hebben ook een klein maandelijks abonnement; dat bespreken we vooraf, zodat je weet wat het in totaal kost.',
      },
      {
        q: 'Is dat veilig voor de gegevens van mijn klanten?',
        a: 'We kiezen tools die voldoen aan de Europese privacyregels (GDPR) en leggen uit welke gegevens waar terechtkomen.',
      },
      {
        q: 'Moet ik er technisch iets van kennen?',
        a: 'Nee. We zetten alles op, testen het en leggen uit hoe het werkt. Je moet het alleen gebruiken.',
      },
    ],
  },
  {
    key: 'app',
    slug: 'app-design',
    metaTitle: 'App design en UX/UI',
    metaDescription:
      'App- en productdesign met dezelfde aanpak als bij KBC Mobile, drie keer verkozen tot beste bankapp ter wereld: van user flow tot klikbaar prototype. Vanaf €2.500.',
    h1: 'App design met de aanpak van de beste bankapp ter wereld.',
    lead:
      'We werkten mee aan KBC Mobile, drie keer verkozen tot beste bankapp ter wereld. Die ervaring zetten we in voor startups en bedrijven die een app of digitaal product willen bouwen dat mensen graag gebruiken.',
    body: [
      'Een goede app begint bij de gebruiker: wat wil die bereiken, en wat staat daarbij in de weg? We starten met user flows en wireframes, en testen vroeg met een klikbaar prototype, nog voor er een lijn code geschreven is.',
      'Daarna werken we het ontwerp uit tot elk scherm klopt, in light en dark mode, met toegankelijkheid als vaste stap en beweging die uitlegt wat er gebeurt.',
      'Je krijgt een volledig uitgewerkt ontwerp en een design system dat je ontwikkelaars meteen kunnen gebruiken.',
    ],
    forWho: [
      'Je hebt een idee voor een app en wilt het testen voor je het laat bouwen.',
      'Je bestaande app of platform is moeilijk in gebruik.',
      'Je ontwikkelteam heeft een designer nodig voor een project of een paar dagen per week.',
    ],
    cases: ['SurprisePay', 'Cyclis Bike Lease'],
    faq: [
      {
        q: 'Wat kost app design?',
        a: 'App- en productdesign start vanaf €2.500 excl. btw voor een afgebakend traject, zoals een klikbaar prototype van de belangrijkste schermen. Grotere projecten of een vaste samenwerking bespreken we op maat.',
      },
      {
        q: 'Bouwen jullie de app ook?',
        a: 'We focussen op het ontwerp en het prototype. De ontwikkeling gebeurt door je eigen team of door ontwikkelaars naar keuze; we leveren alles aan zodat zij meteen verder kunnen.',
      },
      {
        q: 'Kan ik je ook inhuren binnen mijn team?',
        a: 'Ja. Naast afgebakende projecten kan studio tonton ook een paar dagen per week of voor langere tijd mee in je team werken.',
      },
    ],
  },
];

export type CaseStudy = {
  slug: string;
  title: string; // moet overeenkomen met de titel in `cases` (lib/site.ts)
  client: string;
  sector: string;
  location: string;
  year: number;
  services: string[];
  quote: string;
  metaDescription: string;
  intro: string[];
  highlights: { title: string; text: string }[];
  images: { src: string; alt: string; wide?: boolean; w: number; h: number }[];
  testimonial?: { quote: string; name: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'egy-cleaning',
    title: 'EGY Cleaning',
    client: 'EGY Cleaning',
    sector: 'Schoonmaak',
    location: 'Hasselt, Limburg',
    year: 2026,
    services: ['Branding', 'Design system', 'UX/UI', 'Website'],
    quote: 'Een schoonmaakbedrijf verkoopt vertrouwen. Het merk en de site moeten dat al uitstralen vóór de eerste poetsbeurt.',
    metaDescription:
      'Branding en website voor EGY Cleaning, een schoonmaakbedrijf uit Hasselt: een merk dat vertrouwen uitstraalt en een site die draait rond offerte-aanvragen.',
    intro: [
      'EGY Cleaning is een schoonmaakbedrijf uit Hasselt dat kantoren, horeca, medische praktijken en gemeenschappelijke ruimtes in heel Limburg onderhoudt. studio tonton deed het volledige traject: de branding met logo, kleuren en typografie, een design system, de UX/UI en de website zelf.',
      'Het palet komt rechtstreeks uit het logo: groen voor frisheid, blauw en navy voor vertrouwen, met knoppen die voldoen aan de toegankelijkheidsnorm WCAG AA.',
    ],
    highlights: [
      {
        title: 'Eén doel: een offerte aanvragen',
        text: 'De site draait rond één actie. Een duidelijke hero, diensten per sector en een offerteformulier in drie korte stappen.',
      },
      {
        title: 'Merk en site uit één hand',
        text: 'Logo, kleuren, typografie en design system zijn samen ontworpen met de website, zodat alles meteen klopt.',
      },
      {
        title: 'Gebouwd om gevonden te worden',
        text: 'Gebouwd met Next.js en Sanity als CMS, in het Nederlands, Engels en Frans, met een donkere modus en lokale SEO.',
      },
    ],
    images: [
      { src: '/img/cases/egy-1.webp', alt: 'Het EGY Cleaning-logo in wit op navy', w: 1920, h: 2103 },
      { src: '/img/cases/egy-2.webp', alt: 'De diensten en het offerteformulier in drie stappen op mobiel', w: 1920, h: 2103 },
      { src: '/img/cases/egy-3.webp', alt: 'Merkoverzicht met logo, kleuren en typografie', wide: true, w: 1920, h: 933 },
      { src: '/img/cases/egy-4.webp', alt: 'De dienstenpagina en de offertepagina op desktop', wide: true, w: 1920, h: 933 },
    ],
  },
  {
    slug: 'shanti-beans',
    title: 'Shanti Beans',
    client: 'Shanti Beans',
    sector: 'Horeca, koffiebar',
    location: 'Ridderstraat, Hasselt',
    year: 2026,
    services: ['Online identiteit', 'Illustratie', 'Webdesign', 'Website'],
    quote: 'Geen brave koffiebar met een schoon geweten. De site moest even luid zijn als de bar zelf.',
    metaDescription:
      'Online identiteit en website voor Shanti Beans, een koffiebar in Hasselt: van één logo naar een volledig merk met live openingsuren en een aanvraagformulier voor events.',
    intro: [
      'Shanti Beans is een koffiebar in de Ridderstraat in Hasselt. Er was enkel een logo, verder niets. Daaruit bouwde studio tonton de volledige online identiteit.',
      'Een palet van fel rood, crème en koffiebruin, Teko en Instrument Sans als lettertypes, en speelse illustraties die het geheel aankleden, met de vlam uit het logo als terugkerend beeld.',
    ],
    highlights: [
      {
        title: 'Van één logo naar een merk',
        text: 'Kleuren, typografie en illustraties die vertrekken van het bestaande logo, zodat alles herkenbaar blijft.',
      },
      {
        title: 'Live openingsuren',
        text: 'De site toont live of de bar nu open is, en de kaart heeft elke week een uitschieter.',
      },
      {
        title: 'Aanvragen voor privé-events',
        text: 'Een eigen pagina en een aanvraagformulier voor privé-events, met dezelfde eigenzinnige, speelse toon als de rest van de site.',
      },
    ],
    images: [
      { src: '/img/cases/shanti-1.webp', alt: 'Het bestaande Shanti Beans-logo, het vertrekpunt van de site', w: 1920, h: 2103 },
      { src: '/img/cases/shanti-2.webp', alt: 'De locatie met live openingsuren en de cadeaubonnen op mobiel', w: 1920, h: 2103 },
      { src: '/img/cases/shanti-3.webp', alt: 'Merkoverzicht met logo, kleuren, typografie en illustraties', wide: true, w: 1920, h: 933 },
      { src: '/img/cases/shanti-4.webp', alt: 'De kaart en de pagina voor privé-events op desktop', wide: true, w: 1920, h: 933 },
    ],
  },
];

export const servicePageFor = (key: ServiceKey) => servicePages.find((p) => p.key === key);
export const caseStudyFor = (title: string) => caseStudies.find((c) => c.title === title);
