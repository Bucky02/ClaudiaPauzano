/**
 * Tutti i testi, link e contatti del sito (lingua: italiano).
 * I componenti leggono solo da qui: modificare i contenuti in questo file.
 * Per una versione inglese, duplicare il file come site.en.ts con gli stessi campi.
 */

export type SocialIconId =
  | "instagram"
  | "behance"
  | "linkedin"
  | "facebook"
  | "weroad";

export type SocialLink = {
  label: string; // Usato in: icone social nel contatto e nel footer (aria-label).
  url: string; // Usato in: icone social (si apre in una nuova scheda).
  icon: SocialIconId; // Usato in: SocialLinks, associa l'icona lucide-react.
};

export type TimelineItem = {
  period: string; // Usato in: Percorso, data o periodo dell'esperienza.
  title: string; // Usato in: Percorso, titolo del corso, ruolo o titolo di studio.
  place: string; // Usato in: Percorso, ente, scuola o azienda.
  description?: string; // Usato in: Percorso, breve descrizione opzionale.
};

export type ServiceItem = {
  icon: "palette" | "camera" | "film" | "megaphone" | "plane"; // Usato in: Cosa faccio, icona della card.
  title: string; // Usato in: Cosa faccio, titolo della card.
  text: string; // Usato in: Cosa faccio, descrizione della card.
};

// TODO: inserire contatti reali (telefono, email e link WhatsApp si generano da qui).
const phoneDisplay = "000 0000000";
const phoneCountryCode = "39";
const email = "email@example.com";
const phoneDigits = phoneDisplay.replace(/\D/g, "");

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    url: "https://www.instagram.com/__clah__photography__",
    icon: "instagram",
  },
  {
    label: "Behance",
    url: "https://www.behance.net/ClaudiaPauzano",
    icon: "behance",
  },
  {
    label: "LinkedIn",
    url: "https://it.linkedin.com/in/claudia-pauzano-1b93031a6",
    icon: "linkedin",
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/claudiapauzanoph/",
    icon: "facebook",
  },
  {
    label: "WeRoad",
    url: "https://www.weroad.it/coordinatori/claudia-pauzano",
    icon: "weroad",
  },
];

export const site = {
  // Usato in: header (logo), hero (titolo), footer, contatti.
  name: "Claudia Pauzano",
  // Usato in: hero (etichetta sopra il nome).
  nickname: "Clah",
  // Usato in: logo quadrato dell'header.
  monogram: "CP",
  // Usato in: hero (riga sotto il nome), footer.
  role: "Art Director · Fotografa · Video Editor · Social & Marketing",
  // Usato in: hero (frase sotto il ruolo).
  tagline: "Idee, immagini e storie che comunicano.",
  // Usato in: contatti, footer.
  location: "Campania (Napoli – Salerno)",

  // Usato in: header (menu desktop e mobile). Ogni href punta all'id della sezione.
  nav: [
    { label: "Chi sono", href: "#chi-sono" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Percorso", href: "#percorso" },
    { label: "Contatti", href: "#contatti" },
  ],

  header: {
    // Usato in: header, bottone a destra (porta ai contatti).
    ctaLabel: "Contattami",
    // Usato in: bottone del menu mobile (lettori di schermo).
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
    // Usato in: logo, link di ritorno in cima alla pagina (lettori di schermo).
    homeLabel: "Torna all’inizio",
    // Usato in: link visibile da tastiera per saltare al contenuto.
    skipLink: "Vai al contenuto",
  },

  hero: {
    eyebrow: "Ciao, sono Clah",
    primaryCta: "Guarda i lavori",
    secondaryCta: "Contattami",
    imageCaption: "Campania · Napoli – Salerno",
    servicesLabel: "Cosa so fare",
    languagesLabel: "Lingue",
  },

  about: {
    // Usato in: sezione Chi sono (etichetta e titolo).
    eyebrow: "Chi sono",
    title: "Creativa tra immagini, idee e persone.",
    // Usato in: sezione Chi sono, paragrafi della biografia.
    bio: [
      "Sono Claudia Pauzano, detta Clah, creativa campana tra Napoli e Salerno. Lavoro nella pubblicità come Art Director, dove trasformo strategie e obiettivi in campagne, identità visive e contenuti coerenti.",
      "La fotografia è il mio linguaggio preferito: ho frequentato il corso di Tecnica fotografica e composizione alla SalernoFotografia e oggi racconto eventi, comunioni, matrimoni e cerimonie con uno sguardo attento ai dettagli e alle emozioni.",
      "Ho studiato Design della Comunicazione allo IUAD di Napoli e ho vissuto sei mesi a Valencia con un Erasmus presso l’accademia Barreira Arte y Diseño. Amo viaggiare e le lingue: ho visitato 14 Paesi e oggi accompagno gruppi di viaggiatori come coordinatrice per WeRoad.",
    ],
    // Usato in: sezione Chi sono, fila di numeri evidenziati. TODO: verificare i valori, alcuni sono placeholder.
    stats: [
      { value: "14", label: "Paesi visitati" },
      { value: "4", label: "Lingue parlate" },
      { value: "5", label: "Ambiti creativi" },
      { value: "Art Director", label: "Agenzie e freelance" },
    ],
    // Usato in: sezione Chi sono, titolo dell'elenco strumenti.
    toolsTitle: "Strumenti del mestiere",
    // Usato in: sezione Chi sono, chip degli strumenti. TODO: verificare gli strumenti reali.
    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Lightroom",
      "Adobe Premiere Pro",
      "Canva",
      "Meta Business Suite",
    ],
  },

  services: {
    // Usato in: sezione Cosa faccio (etichetta, titolo e introduzione).
    eyebrow: "Cosa faccio",
    title: "Competenze per comunicare con coerenza.",
    intro:
      "Dal concept alla pubblicazione: seguo ogni fase del progetto, per agenzie, aziende e clienti privati.",
    // Usato in: sezione Cosa faccio, una card per servizio.
    items: [
      {
        icon: "palette",
        title: "Art Direction & Graphic Design",
        text: "Coerenza di marchio, campagne e identità visiva, dal concept alla realizzazione finale.",
      },
      {
        icon: "camera",
        title: "Fotografia",
        text: "Eventi, comunioni, matrimoni e cerimonie: immagini naturali e curate in ogni dettaglio.",
      },
      {
        icon: "film",
        title: "Video Editing",
        text: "Montaggio di video per social, campagne e contenuti aziendali, con cura del ritmo e del colore.",
      },
      {
        icon: "megaphone",
        title: "Social Media & Marketing",
        text: "Gestione delle pagine social e strategia dei contenuti per far crescere la tua presenza online.",
      },
      {
        icon: "plane",
        title: "Travel Coordination",
        text: "Coordinatrice di viaggi di gruppo con WeRoad: organizzazione, accoglienza e cura dei viaggiatori.",
      },
    ] satisfies ServiceItem[],
  },

  languages: {
    // Usato in: sezione Lingue (etichetta, titolo e testo).
    eyebrow: "Lingue",
    title: "Quattro lingue per lavorare con clienti e gruppi.",
    note: "Lavoro con clienti e gruppi internazionali, in italiano, inglese, francese e spagnolo.",
    // Usato in: sezione Lingue, una card per lingua. "dots" è il livello da 1 a 5.
    // TODO: verificare i livelli reali di inglese, francese e spagnolo.
    items: [
      { name: "Italiano", level: "Madrelingua", dots: 5 },
      { name: "Inglese", level: "Fluente", dots: 4 },
      { name: "Francese", level: "Buono", dots: 3 },
      { name: "Spagnolo", level: "Buono", dots: 3 },
    ],
  },

  portfolio: {
    // Usato in: sezione Portfolio (etichetta, titolo e introduzione).
    eyebrow: "Portfolio",
    title: "Lavori selezionati.",
    intro:
      "Una selezione di progetti di art direction, fotografia, video e social media.",
    // Usato in: riquadro sotto il portfolio con il link a Behance.
    behance: {
      title: "Altri progetti su Behance",
      text: "Moodboard, progetti completi e lavori di branding sono raccolti sul mio profilo Behance.",
      cta: "Vai a Behance",
      url: "https://www.behance.net/ClaudiaPauzano",
    },
  },

  timeline: {
    // Usato in: sezione Percorso (etichetta e titolo).
    eyebrow: "Percorso",
    title: "Formazione ed esperienza.",
    // Usato in: sezione Percorso, una voce per riga, in ordine di apparizione.
    // TODO: completare le voci segnate come placeholder (master, corso, anni).
    items: [
      {
        period: "TODO: anno",
        title: "Master in Marketing",
        place: "TODO: nome master, ente, anno",
      },
      {
        period: "TODO: anno",
        title: "Corso / certificazione",
        place: "TODO: nome corso, ente, anno",
      },
      {
        period: "TODO: anno",
        title: "Design della Comunicazione",
        place: "IUAD Napoli",
      },
      {
        period: "TODO: anno",
        title: "Tecnica fotografica e composizione",
        place: "SalernoFotografia",
      },
      {
        period: "Sei mesi",
        title: "Erasmus a Valencia",
        place: "Barreira Arte y Diseño",
        description:
          "Un semestre di studi all’accademia di arte e design di Valencia.",
      },
      {
        period: "TODO: periodo",
        title: "Art Director",
        place: "Agenzie e freelance",
        description:
          "Ideazione di campagne, identità visive e contenuti per brand e agenzie.",
      },
      {
        period: "TODO: periodo",
        title: "Coordinatrice di viaggi",
        place: "WeRoad",
        description:
          "Accompagno gruppi di viaggiatori in tutta la fase del viaggio.",
      },
    ] satisfies TimelineItem[],
  },

  contact: {
    // Usato in: sezione Contatti (etichetta, titolo e testo).
    eyebrow: "Contatti",
    title: "Lavoriamo insieme?",
    text: "Hai un progetto, un evento da raccontare o un brand da far crescere? Scrivimi e raccontami la tua idea.",
    // Usato in: contatti, etichette delle voci.
    labels: { email: "Email", phone: "Telefono", location: "Dove mi trovo" },
    email,
    emailHref: `mailto:${email}`,
    phone: phoneDisplay,
    phoneHref: `tel:+${phoneCountryCode}${phoneDigits}`,
    // Link WhatsApp costruito dal numero di telefono sopra.
    whatsappUrl: `https://wa.me/${phoneCountryCode}${phoneDigits}`,
    // Usato in: contatti, testi dei bottoni di contatto.
    ctaEmail: "Scrivimi una email",
    ctaWhatsapp: "Scrivimi su WhatsApp",
  },

  // Usato in: contatti e footer (icone social, si aprono in una nuova scheda).
  socials: socialLinks,

  footer: {
    // Usato in: footer, testo dopo l'anno.
    rights: "Tutti i diritti riservati.",
    // Usato in: footer, bottone per tornare in cima alla pagina.
    backToTop: "Torna su",
  },

  ui: {
    // Usato in: lightbox, bottone di chiusura e tasto Esc.
    close: "Chiudi",
    // Usato in: lightbox, frecce per scorrere le immagini.
    previous: "Immagine precedente",
    next: "Immagine successiva",
    // Usato in: lightbox, miniature delle immagini.
    thumbnail: "Mostra immagine",
    // Usato in: card del portfolio e lightbox, prefisso accessibile.
    openProject: "Apri il progetto",
    // Usato in: lightbox, link esterno del progetto.
    externalLink: "Apri il link del progetto",
    // Usato in: portfolio, filtri per categoria.
    filtersLabel: "Filtra i progetti per categoria",
  },
};
