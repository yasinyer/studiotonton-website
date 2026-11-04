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
  images: { src: string; alt: string; wide?: boolean; w: number; h: number; href?: string }[]; // href: bv. een video op YouTube
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
  {
    slug: 'surprisepay',
    title: 'SurprisePay',
    client: 'KBC Bank & Verzekeringen',
    sector: 'Bank en verzekeringen',
    location: 'KBC Mobile, België',
    year: 2025,
    services: ['UI design', 'Illustratie', 'Animatie'],
    quote: 'Dagelijkse bankzaken hoeven niet saai te zijn. Soms zit de meerwaarde net in een klein gebaar.',
    metaDescription:
      'SurprisePay in KBC Mobile: een overschrijving met een thema, een persoonlijk bericht of een foto. Volledig herontworpen, in light en dark mode en met toegankelijkheid als vaste stap.',
    intro: [
      'SurprisePay is een functie in KBC Mobile waarmee je bij een overschrijving een thema meestuurt, eventueel met een persoonlijk bericht of een foto.',
      'Als UI designer herontwierp Yasin de volledige ervaring: van een gedateerde flow naar een frisse, hedendaagse interface, met eigen illustraties en animaties.',
    ],
    highlights: [
      {
        title: 'Van gedateerd naar fris',
        text: 'De volledige flow opnieuw ontworpen, van het kiezen van een thema tot het moment dat de ontvanger het opent.',
      },
      {
        title: 'Light en dark mode',
        text: 'Elk scherm uitgewerkt in beide modi, zodat de thema’s in elke situatie even goed tot hun recht komen.',
      },
      {
        title: 'Toegankelijk vanaf de eerste schets',
        text: 'Toegankelijkheid (A11Y) was een vaste stap in het ontwerpproces, geen controle achteraf.',
      },
    ],
    images: [
      { src: '/img/cases/surprisepay-1.webp', alt: 'Raster van SurprisePay-schermen met verschillende thema’s', wide: true, w: 1920, h: 1080 },
      { src: '/img/cases/surprisepay-2.webp', alt: 'Drie SurprisePay-schermen met het thema “Proficiat met jullie huwelijk”', wide: true, w: 1920, h: 1080 },
    ],
  },
  {
    slug: 'nwsnwsnws',
    title: 'Reportages voor nwsnwsnws',
    client: 'VRT',
    sector: 'Media, nieuws voor jongeren',
    location: 'YouTube en sociale media',
    year: 2026,
    services: ['Grafiek', 'Motion design', 'Infographics', 'Thumbnails'],
    quote: 'Grafiek en beweging die de reportage helpen vertellen.',
    metaDescription:
      'Grafiek en motion design voor nwsnwsnws, het jongerenmerk van VRT NWS: titels, infographics, animaties en thumbnails voor reportages op YouTube en sociale media.',
    intro: [
      'nwsnwsnws is het merk van VRT NWS voor jongeren op YouTube en sociale media.',
      'Voor hun reportages werkt Yasin de volledige grafiek en het motion design uit, van titels en infographics tot alle animaties. Ook de thumbnails zijn van zijn hand. Hieronder vier reportages.',
    ],
    highlights: [
      {
        title: 'Grafiek die mee vertelt',
        text: 'Titels en infographics die de reportage ondersteunen in plaats van ze te versieren.',
      },
      {
        title: 'Alle animaties',
        text: 'Elke beweging in beeld, van de openingstitel tot de laatste grafiek, in dezelfde stijl.',
      },
      {
        title: 'Thumbnails die opvallen',
        text: 'Op YouTube beslist de thumbnail of iemand klikt. Ook die zijn deel van het werk.',
      },
    ],
    images: [
      { src: '/img/cases/nws-1.webp', alt: 'Waarom zijn Franse scholieren zo boos?', w: 1280, h: 720, href: 'https://www.youtube.com/watch?v=xoaCDx75daA' },
      { src: '/img/cases/nws-2.webp', alt: 'Waarom Trump en Poetin plots besties zijn', w: 1280, h: 720, href: 'https://www.youtube.com/watch?v=KVsM6srypoU' },
      { src: '/img/cases/nws-3.webp', alt: 'Kan TikTok de zaak Lindsay Clancy oplossen?', w: 1280, h: 720, href: 'https://www.youtube.com/watch?v=R65dL-j_WG0' },
      { src: '/img/cases/nws-4.webp', alt: 'Krijgen we te veel seksuele opvoeding op school?', w: 1280, h: 720, href: 'https://www.youtube.com/watch?v=l_CisTtJz_8' },
    ],
  },
  {
    slug: 'torfs-website',
    title: 'Torfs website',
    client: 'Torfs',
    sector: 'Retail, schoenen',
    location: 'België',
    year: 2023,
    services: ['Informatiearchitectuur', 'UX', 'UI design'],
    quote: 'Hun warme, menselijke service vertaald naar een digitale ervaring waarin eenvoud, overzicht en merkbeleving centraal staan.',
    metaDescription:
      'Een nieuwe website voor Torfs, Belgische schoenenretailer: herwerkte informatiearchitectuur en flows om producten sneller te vinden, en een warme, consistente UI voor desktop en mobiel.',
    intro: [
      'Torfs is een Belgische schoenenretailer met een sterke focus op service, vertrouwen en beleving.',
      'Als UX/UI designer stak Yasin de website in een nieuw jasje. Hij herwerkte de informatiearchitectuur en de user flows om producten sneller vindbaar te maken en keuzestress te verminderen, en vertaalde de warme merkidentiteit naar een moderne, consistente UI voor desktop en mobiel.',
    ],
    highlights: [
      {
        title: 'Sneller het juiste paar',
        text: 'Een herwerkte informatiearchitectuur en nieuwe flows, zodat producten sneller vindbaar zijn.',
      },
      {
        title: 'Minder keuzestress',
        text: 'Overzicht in een groot aanbod, zonder de bezoeker te overspoelen.',
      },
      {
        title: 'Het merk, ook online',
        text: 'De warme identiteit van Torfs vertaald naar een moderne UI die op desktop en mobiel hetzelfde aanvoelt.',
      },
    ],
    images: [],
  },
  {
    slug: 'ai-image-generation',
    title: 'AI Image generation',
    client: 'KBC Bank & Verzekeringen',
    sector: 'Bank en verzekeringen',
    location: 'KBC Mobile, België',
    year: 2025,
    services: ['UI design', 'AI', 'Motion design'],
    quote: 'Personalisatie wordt pas waardevol wanneer ze intuïtief, veilig en moeiteloos aanvoelt.',
    metaDescription:
      'AI Image Generation in KBC Mobile: klanten maken met AI een eigen beeld voor hun profielfoto, bankkaart of rekening. Flow, interface en motion design.',
    intro: [
      'AI Image Generation in KBC Mobile is een personalisatiefunctie waarmee klanten hun profielfoto, bankkaart en rekeningafbeelding een eigen beeld geven, vertrekkend van een bestaande foto of een prompt.',
      'Als UI designer ontwierp Yasin de volledige flow en interface, met de focus op eenvoud, merkconsistentie en vertrouwen. Daarnaast verzorgde hij het motion design: subtiele animaties en vloeiende overgangen voor een speelse maar premium beleving.',
    ],
    highlights: [
      {
        title: 'AI die je vertrouwt',
        text: 'Een bank en AI-beelden: de flow moest vooral veilig en voorspelbaar aanvoelen.',
      },
      {
        title: 'Vanaf een foto of een prompt',
        text: 'Twee vertrekpunten in één eenvoudige flow, voor profielfoto, bankkaart en rekening.',
      },
      {
        title: 'Speels maar premium',
        text: 'Subtiele animaties en vloeiende overgangen die het wachten op een beeld aangenaam maken.',
      },
    ],
    images: [{ src: '/img/cases/ai-1.webp', alt: 'Flow om met AI een afbeelding voor je kaart of rekening te maken', wide: true, w: 1920, h: 1080 }],
  },
  {
    slug: 'cyclis-bike-lease',
    title: 'Cyclis Bike Lease',
    client: 'Cyclis',
    sector: 'Fietsleasing',
    location: 'België',
    year: 2023,
    services: ['Designworkshops', 'UX', 'UI design', 'Illustratie', 'Motion design'],
    quote: 'Een complex leasingecosysteem vertaald naar heldere, schaalbare digitale flows.',
    metaDescription:
      'Redesign van de website en het klantenplatform van Cyclis Bike Lease: van designworkshops en informatiearchitectuur tot UI, illustratie, motion en responsieve uitwerking.',
    intro: [
      'Cyclis is een toonaangevende speler in fietsleasing, met een complex digitaal ecosysteem voor werknemers, werkgevers, zelfstandigen en dealers.',
      'Via designworkshops bracht Yasin samen met de stakeholders de belangrijkste pijnpunten in kaart. Dat vormde de basis voor een volledige redesign van de website en het klantenplatform: van wireframes, informatiearchitectuur en UX-flows tot UI-design, illustratie, motion design en de responsieve uitwerking.',
    ],
    highlights: [
      {
        title: 'Vier soorten gebruikers',
        text: 'Werknemers, werkgevers, zelfstandigen en dealers, elk met een eigen weg door hetzelfde platform.',
      },
      {
        title: 'Workshops als vertrekpunt',
        text: 'De pijnpunten samen met de stakeholders in kaart gebracht, vóór er één scherm getekend werd.',
      },
      {
        title: 'Van wireframe tot motion',
        text: 'Informatiearchitectuur, flows, UI, illustraties en animaties uit één hand, responsief uitgewerkt.',
      },
    ],
    images: [{ src: '/img/cases/cyclis-1.webp', alt: 'Schermen van de Cyclis-website en het klantenplatform', wide: true, w: 1920, h: 1080 }],
  },
  {
    slug: 'myhome-en-mymobility',
    title: 'MyHome & MyMobility',
    client: 'KBC Bank & Verzekeringen',
    sector: 'Bank en verzekeringen',
    location: 'KBC Mobile, België',
    year: 2024,
    services: ['UI design', 'Motion design'],
    quote: 'Wonen en mobiliteit zijn geen features, maar leefcontexten. Door die context als uitgangspunt te nemen, verhoog je adoptie en relevantie.',
    metaDescription:
      'MyHome en MyMobility in KBC Mobile: alles rond wonen en mobiliteit op één plek. UI en motion design voor thematische modules die nieuwe diensten makkelijker vindbaar maken.',
    intro: [
      'KBC Mobile introduceerde thematische modules om complexe diensten toegankelijker te maken. MyHome brengt alles rond wonen samen (renovaties, energie, verzekeringen), MyMobility alles rond mobiliteit (fiets, wagen, openbaar vervoer).',
      'Door diensten rond een context te organiseren, werd ontdekken eenvoudiger, werden transacties korter en werd de drempel om nieuwe diensten te gebruiken lager.',
    ],
    highlights: [
      {
        title: 'Rond je leven, niet rond producten',
        text: 'Diensten gegroepeerd rond wonen en mobiliteit, zoals mensen er zelf aan denken.',
      },
      {
        title: 'Makkelijker ontdekken',
        text: 'Wie iets zoekt rond zijn huis of zijn auto, vindt het op één plek.',
      },
      {
        title: 'Kortere transacties',
        text: 'Minder stappen en een lagere drempel om een nieuwe dienst uit te proberen.',
      },
    ],
    images: [{ src: '/img/cases/myhome-1.webp', alt: 'Schermen van MyHome en MyMobility in KBC Mobile', wide: true, w: 1920, h: 1080 }],
  },
  {
    slug: 'onder-het-oppervlak',
    title: 'Onder het oppervlak',
    client: 'Eigen concept',
    sector: 'Parfum, fictieve campagne',
    location: 'Eigen werk',
    year: 2026,
    services: ['Concept', 'Art direction', 'AI-video'],
    quote: 'Een geur bestaat uit lagen die je nooit tegelijk ziet. Onder het oppervlak maakt zichtbaar wat je normaal enkel ruikt.',
    metaDescription:
      'Onder het oppervlak: een fictieve campagnevideo voor YSL Y, gemaakt met AI. Concept, art direction en een node-based workflow in Figma Weave met Gemini en Kling.',
    intro: [
      'Onder het oppervlak is een fictieve campagnevideo voor YSL Y, een eigen concept. Een camera duikt door de hals van de flacon, reist ononderbroken door de top-, hart- en basisnoten en zoomt uiteindelijk terug uit naar het moment van gebruik.',
      'De video is opgebouwd in Figma Weave als node-based workflow met vastgelegde stijlvariabelen, zodat elk van de vijf shots dezelfde visuele taal spreekt. Beelden zijn gegenereerd met Gemini 3 (Nano Banana Pro), de video met Kling 3, afgewerkt met een geluidsontwerp op maat.',
    ],
    highlights: [
      {
        title: 'Eén ononderbroken shot',
        text: 'Van de flacon door de top-, hart- en basisnoten en terug naar het moment van gebruik.',
      },
      {
        title: 'Een vaste stijl over vijf shots',
        text: 'Vastgelegde stijlvariabelen in de workflow, zodat elk shot dezelfde visuele taal spreekt.',
      },
      {
        title: 'AI als gereedschap',
        text: 'Beelden met Gemini, video met Kling en geluid op maat, samengebracht in één node-based workflow.',
      },
    ],
    images: [
      { src: '/img/cases/onder-1.webp', alt: 'Overzicht van de node-based workflow in Figma Weave', wide: true, w: 1920, h: 772 },
      { src: '/img/cases/onder-2.webp', alt: 'Moodboard met citrus- en parfumbeelden als stijlreferentie', w: 1605, h: 1149 },
      { src: '/img/cases/onder-6.webp', alt: 'Laatste shots en overgangen in de workflow', w: 1920, h: 1086 },
      { src: '/img/cases/onder-3.webp', alt: 'Vastgelegde stijlvariabelen in Figma Weave', w: 1558, h: 661 },
      { src: '/img/cases/onder-4.webp', alt: 'Nodes voor het slotbeeld en de video-export', w: 1578, h: 554 },
      { src: '/img/cases/onder-5.webp', alt: 'Shots van de top- en hartnoten, gegenereerd vanuit prompts', wide: true, w: 1920, h: 867 },
    ],
  },
];

export const servicePageFor = (key: ServiceKey) => servicePages.find((p) => p.key === key);
export const caseStudyFor = (title: string) => caseStudies.find((c) => c.title === title);
