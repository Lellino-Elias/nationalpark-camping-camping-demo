import type { CampsiteConfig } from "../types";

/**
 * Nationalpark Camping – Almcasino · Heiligenblut am Großglockner, Kärnten.
 * Alle Texte/Fakten belegt aus nationalpark-camping.at (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene Fotos des Platzes bzw. der eigenen
 * Heiligenblut-/Almcasino-Seiten (Region Nationalpark Hohe Tauern) in
 * /public/campsites/nationalpark-camping/.
 *
 * EHRLICH:
 * - KEIN See am Platz → `see` wird ausgelassen; reines Berg-/Nationalpark-Camping.
 * - Sommer- UND Wintercamping (Quelle: Startseite & /camping) → ganzjährig.
 * - Reale Preise aus der /camping-Preisliste (Pro-Person + Stellplatz-Modell);
 *   Buchungs-Richtpreise sind arithmetisch daraus abgeleitet (2 Pers., Sommer)
 *   und im priceNote vollständig offengelegt. pricesArePlaceholder: false.
 * - Höhen-/Stellplatz-/Sitzplatz-Zahlen widersprechen sich zwischen den Quell-
 *   Unterseiten (Seehöhe 618/696/1288 m, Stellplätze 48/150, Sitzplätze 58/80)
 *   → KEINE dieser Zahlen wird als Fakt behauptet (siehe REPORT.md).
 * - Pension (lt. NL-Unterseite ~10 Betten) NICHT abgebildet: keine eigenen
 *   Zimmerfotos & keine deutsche Quelle → `mobilheime` ausgelassen.
 * - Award-/Club-Logos (ADAC, ACSI, ÖCC …) liegen vor, aber ohne ausdrücklichen
 *   Auszeichnungstext → `awards: []` (im REPORT für den Kunden vermerkt).
 */
const IMG = "/campsites/nationalpark-camping";

export const nationalparkCamping: CampsiteConfig = {
  name: "Nationalpark Camping Großglockner",
  shortName: "Nationalpark Camping",
  slug: "nationalpark-camping",
  ort: "Heiligenblut am Großglockner",
  region: "Kärnten",
  brandKind: "Camping & Restaurant Almcasino",
  regionLong: "Nationalpark Hohe Tauern · Heiligenblut am Großglockner · Kärnten",

  claim: "Camping macht glücklich — am Fuße des Großglockners",
  claimEmphasis: "am Fuße des Großglockners",
  intro:
    "Sommer- und Wintercamping mitten im Herzen des Nationalpark Hohe Tauern — weiträumig, ruhig und mit herrlichem Blick auf den Großglockner, den höchsten Berg Österreichs.",

  logo: { src: `${IMG}/logo-almcasino.png`, alt: "Nationalpark Camping Großglockner – Almcasino Heiligenblut Logo" },

  statement: {
    text: "Mitten im Herzen des Nationalpark Hohe Tauern bieten wir Ihnen das ganze Jahr über jenes Maß an Ruhe und Erholung, das Sie sich in Ihrem Urlaub wünschen.",
    emphasis: "Ruhe und Erholung",
  },

  pillars: [
    {
      title: "Mitten im Nationalpark Hohe Tauern",
      text: "Weiträumiges Areal in absoluter Ruhelage — und trotzdem zentrumsnaher Ausgangspunkt vieler Wanderrouten.",
      image: { src: `${IMG}/camping-nationalpark.webp`, alt: "Luftaufnahme des Nationalpark Campings im grünen Tal vor verschneiten Bergen" },
    },
    {
      title: "Der Großglockner im Blick",
      text: "Herrlicher Blick auf den Großglockner, mit 3.798 m der höchste Berg Österreichs — direkt vor der Zelttür.",
      image: { src: `${IMG}/grossglockner-vollmond.webp`, alt: "Der Gipfel des Großglockners im Abendlicht mit aufgehendem Vollmond" },
    },
    {
      title: "Restaurant & Café Almcasino",
      text: "Unser hauseigenes Restaurant Almcasino verwöhnt Sie mit regionalen wie überregionalen Köstlichkeiten — Frühstück sowie warme und kalte Speisen am Abend.",
      image: { src: `${IMG}/almcasino-lammkarree.webp`, alt: "Fein angerichtetes Lammkarree mit Gemüse im Restaurant Almcasino" },
    },
  ],

  usps: [
    "Mitten im Nationalpark Hohe Tauern",
    "Sommer- & Wintercamping",
    "Restaurant Almcasino am Platz",
    "Hundefreundlich",
    "Komfortable Sanitäranlagen",
    "Stromanschluss & Kiosk",
    "Langlaufloipen & Gratis-Skibus",
    "Kinderspielplatz, Liegewiese & Tischtennis",
  ],

  trust: {
    heading: "Worauf Sie sich bei uns verlassen können",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführtes Sommer- und Wintercamping mit komfortablen Sanitäranlagen, Stromanschluss und Kiosk, hauseigenem Restaurant Almcasino und einer Lage mitten im Nationalpark Hohe Tauern — ruhig, weiträumig und das ganze Jahr geöffnet.",
  },

  // Auf der Quelle prominente Club-/Führer-Logos (ADAC, ACSI, ÖCC …), aber kein
  // ausdrücklicher Auszeichnungstext → ehrlich leer (Band zeigt nur USP-Pills).
  awards: [],

  saison: { von: "Sommer", bis: "Winter" },

  hero: {
    aerial: { src: `${IMG}/hero-camping.webp`, alt: "Nationalpark Camping: Wohnmobile auf grüner Wiese, umrahmt von bewaldeten Bergen bei Heiligenblut" },
  },

  camping: {
    heading: "Sommer- & Wintercamping",
    intro:
      "Mitten in der großartigen Bergwelt Kärntens: weiträumig, ruhig gelegen und das ganze Jahr geöffnet — unbeschwertes, naturnahes Campingvergnügen im Sommer wie im Winter.",
    features: [
      {
        title: "Stellplätze mitten in der Natur",
        text: "Naturnahe Plätze für Zelt, Wohnwagen und Wohnmobil auf weitläufigem Wiesengelände — rundum Wald, Wiesen und Berge.",
        image: { src: `${IMG}/camping-stellplaetze.webp`, alt: "Stellplätze mit Wohnwagen und Zelten auf der Campingwiese vor den Bergen" },
      },
      {
        title: "Weiträumig & ruhig gelegen",
        text: "Großzügiges Areal in absoluter Ruhelage, trotzdem zentrumsnah als Ausgangspunkt vieler Wanderrouten.",
        image: { src: `${IMG}/camping-luftbild.webp`, alt: "Luftaufnahme des weitläufigen Campingareals im grünen Talboden" },
      },
      {
        title: "Komfort & Versorgung",
        text: "Komfortable Sanitäranlagen, Stromanschluss, Kiosk und Platzbeleuchtung — alles direkt am Platz. Kreditkarten werden akzeptiert.",
        image: { src: `${IMG}/camping-rezeption.webp`, alt: "Empfangs- und Servicegebäude des Nationalpark Campings" },
      },
      {
        title: "Wintercamping mit Bergblick",
        text: "Auch im Winter unbeschwertes Campingvergnügen im tief verschneiten Tal — den Großglockner stets im Blick.",
        image: { src: `${IMG}/camping-winter-stellplatz.webp`, alt: "Verschneiter Wohnwagen am Campingplatz vor verschneiten Gipfeln" },
      },
      {
        title: "Langlaufloipen & Gratis-Skibus",
        text: "Im Winter direkt an den Langlaufloipen gelegen, mit kostenlosem Skibus ins Skigebiet Großglockner/Heiligenblut.",
        image: { src: `${IMG}/camping-winter-ort.webp`, alt: "Verschneiter Campingplatz mit Blick auf Heiligenblut" },
      },
      {
        title: "Familienfreundlich & hundefreundlich",
        text: "Kinderspielplatz, Liegewiese, Tischtennis und Motorradcamping — und der Vierbeiner ist herzlich willkommen.",
        image: { src: `${IMG}/camping-winter-pavillon.webp`, alt: "Verschneiter Pavillon und Spielplatzbereich am Campingplatz" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Aktiv in und rund um Heiligenblut",
    intro:
      "Dass Ruhe und Erholung nicht Langeweile bedeuten, beweisen die vielen Aktivitäten — im Sommer wie im Winter — die Sie in und rund um Heiligenblut am Großglockner erwarten.",
    items: [
      {
        title: "Wandern im Nationalpark",
        text: "Die schönsten Wanderungen und aussichtsreichsten Touren im Nationalpark Hohe Tauern starten direkt vor der Tür.",
        image: { src: `${IMG}/wandern-nationalpark.webp`, alt: "Wandergruppe auf einem grünen Bergrücken mit dem Großglockner-Massiv im Hintergrund" },
      },
      {
        title: "Großglockner & Gipfelsiege",
        text: "Bergsteigen und Gipfelsiege auf den höchsten Bergen des Landes — rund um den Großglockner, den höchsten Berg Österreichs.",
        image: { src: `${IMG}/grossglockner-gipfel.webp`, alt: "Bergsteiger am Gipfelkreuz des Großglockners im Sonnenaufgang" },
      },
      {
        title: "Großglockner Hochalpenstraße",
        text: "Eine echte Besonderheit, die sich beeindruckend durch den Nationalpark Hohe Tauern schlängelt — bis zur Kaiser-Franz-Josefs-Höhe.",
        image: { src: `${IMG}/grossglockner-hochalpenstrasse.webp`, alt: "Die Großglockner Hochalpenstraße mit Motorrädern vor dem verschneiten Großglockner" },
      },
      {
        title: "Skigebiet Großglockner/Heiligenblut",
        text: "Im Angesicht des höchsten Berges Österreichs: 55 Pistenkilometer, 5 Skirouten und 12 moderne Anlagen warten im Skigebiet.",
        image: { src: `${IMG}/skifahren-heiligenblut.webp`, alt: "Zwei Skifahrer auf einer Piste im Skigebiet Großglockner/Heiligenblut" },
      },
      {
        title: "Freeride-Arena",
        text: "1.500 Hektar Freeride-Arena für Powder-Dreams im Angesicht des Großglockners — Freeride-Life-Style pur.",
        image: { src: `${IMG}/freeride-arena.webp`, alt: "Freerider im Tiefschnee mit Bergpanorama und Bergbahnen" },
      },
      {
        title: "Langlaufen & Winterwandern",
        text: "Loipen, Schneeschuhtouren durch den Pulverschnee, Rodelbahn und Eislaufplatz — Winterspaß für die ganze Familie.",
        image: { src: `${IMG}/langlaufen-heiligenblut.webp`, alt: "Langläufer vor der verschneiten Wallfahrtskirche von Heiligenblut" },
      },
    ],
  },

  anreise: {
    heading: "So finden Sie uns",
    modes: [
      { title: "Mit dem Auto", text: "Nach Heiligenblut am Großglockner, Hadergasse 11 — mitten im Nationalpark Hohe Tauern, erreichbar über die Großglockner Hochalpenstraße oder das Mölltal." },
      { title: "Mit Bahn & Bus", text: "Anreise über Kärnten bzw. Osttirol, weiter mit dem öffentlichen Bus nach Heiligenblut am Großglockner." },
      { title: "Vor Ort & im Winter", text: "Im Winter bringt Sie der kostenlose Skibus ins Skigebiet; das Ortszentrum von Heiligenblut ist bequem erreichbar." },
    ],
  },

  galerie: {
    heading: "Das schönste Ende der Welt",
    headingEmphasis: "schönste",
    intro:
      "Ein paar Eindrücke vom Platz, vom Almcasino und aus der grandiosen Bergwelt rund um Heiligenblut am Großglockner.",
    tag: "Sommer & Winter",
    images: [
      { src: `${IMG}/heiligenblut-panorama.webp`, alt: "Luftpanorama von Heiligenblut mit seiner Wallfahrtskirche im grünen Tal" },
      { src: `${IMG}/wintercamping-panorama.webp`, alt: "Verschneiter Campingplatz im Winter mit Pavillon und tief verschneiten Bäumen" },
      { src: `${IMG}/steinboecke-nationalpark.webp`, alt: "Steinböcke auf einer Bergwiese im Nationalpark Hohe Tauern" },
      { src: `${IMG}/almcasino-dessert.webp`, alt: "Fein angerichtetes Dessert mit frischen Früchten im Restaurant Almcasino" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wählen Sie Zeitraum, Stellplatz und Personen — wir melden uns mit Ihrer persönlichen Verfügbarkeit für Heiligenblut am Großglockner.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreis Sommer für 2 Personen inkl. Stellplatzeinheit (Wohnmobil € 15 · Wohnwagen/Zelt € 10). Zzgl. Auto € 5, Strom € 6/Tag, Müll € 1 p. P./Nacht und Ortstaxe € 2,15/Tag (ab 16 J.). Im Winter € 12 statt € 11 pro Person sowie Strom € 9,20/Tag. Alle Beträge laut Platz-Preisliste — bitte bei der Buchung bestätigen.",
    highlight: {
      title: "Ganzjährig geöffnet",
      text: "Sommer- und Wintercamping mitten im Nationalpark Hohe Tauern — mit Restaurant Almcasino direkt am Platz.",
    },
    categories: [
      // Abgeleitet aus realer /camping-Preisliste: € 11 p. P. (Sommer) + Stellplatzeinheit; perExtraGuest = € 11.
      { id: "wohnmobil", label: "Wohnmobil", perNight: 37, perExtraGuest: 11 },
      { id: "wohnwagen", label: "Wohnwagen / Caravan", perNight: 32, perExtraGuest: 11 },
      { id: "zelt", label: "Zelt", perNight: 32, perExtraGuest: 11 },
    ],
  },

  kontakt: {
    tel: "+43 4824 2048",
    telHref: "tel:+4348242048",
    mail: "nationalpark-camping@heiligenblut.at",
    adresse: "Hadergasse 11 · 9844 Heiligenblut am Großglockner · Kärnten",
    coords: { lat: 47.0371757, lng: 12.8384581 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Komfort & Versorgung", href: "#camping" },
        { label: "Wintercamping", href: "#camping" },
      ],
    },
    {
      label: "Almcasino",
      href: "#galerie",
      children: [
        { label: "Restaurant & Café", href: "#galerie" },
        { label: "Eindrücke", href: "#galerie" },
      ],
    },
    {
      label: "Aktiv",
      href: "#aktivitaeten",
      children: [
        { label: "Wandern & Großglockner", href: "#aktivitaeten" },
        { label: "Skigebiet & Freeride", href: "#aktivitaeten" },
        { label: "Winter & Loipen", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default nationalparkCamping;
