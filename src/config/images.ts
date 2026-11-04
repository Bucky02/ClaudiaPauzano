/**
 * Immagini del sito. Tutte le immagini vivono in questo file.
 * Placeholder Pexels: sostituire le URL con file in /public/images (es. "/images/hero.jpg") quando disponibili.
 * Ogni voce ha un alt in italiano: descrivere il contenuto reale quando si sostituisce la foto.
 */

export type ImageAsset = {
  src: string; // URL dell'immagine (oppure percorso in /public/images).
  alt: string; // Testo alternativo in italiano, letto dai lettori di schermo.
};

export const images = {
  /**
   * Usata in: hero, immagine grande a destra.
   * Dimensione consigliata: 1600 x 2000 px (rapporto 4:5), file JPG sotto 400 KB.
   */
  hero: {
    src: "/images/1.png",
    alt: "Ritratto di Claudia Pauzano",
  } satisfies ImageAsset,

  /**
   * Usata in: sezione Chi sono, foto profilo.
   * Dimensione consigliata: 1000 x 1250 px (rapporto 4:5), file JPG sotto 300 KB.
   */
  profile: {
    src: "https://images.pexels.com/photos/5186398/pexels-photo-5186398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Ritratto di Claudia Pauzano, sorridente",
  } satisfies ImageAsset,

  /**
   * Usata in: sezione Contatti, immagine di sfondo decorativa.
   * Dimensione consigliata: 1600 x 1000 px (rapporto 16:10), file JPG sotto 400 KB.
   */
  contact: {
    src: "https://images.pexels.com/photos/6694343/pexels-photo-6694343.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Spazio di lavoro creativo con materiali e bozze",
  } satisfies ImageAsset,
};

/**
 * Immagini dei progetti del portfolio, chiave = id del progetto in portfolio.ts.
 * Il primo elemento è la copertina della card, gli altri sono le immagini della lightbox.
 * Dimensione consigliata: copertina 1200 x 1500 px (4:5) o 1200 x 900 px (4:3), gallery 2000 px di lato lungo.
 */
export const portfolioImages: Record<string, ImageAsset[]> = {
  "progetto-1": [
    {
      src: "https://images.pexels.com/photos/7598016/pexels-photo-7598016.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Documenti di strategia di brand disposti su un tavolo",
    },
    {
      src: "https://images.pexels.com/photos/37471992/pexels-photo-37471992.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Postazione creativa con bozze e moodboard",
    },
  ],
  "progetto-2": [
    {
      src: "https://images.pexels.com/photos/5420989/pexels-photo-5420989.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Mockup di biglietti da visita neri e bianchi su marmo",
    },
    {
      src: "https://images.pexels.com/photos/4466420/pexels-photo-4466420.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Biglietti da visita mockup su sfondo bianco",
    },
    {
      src: "https://images.pexels.com/photos/8490097/pexels-photo-8490097.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Cancelleria di brand su scrivania scura",
    },
  ],
  "progetto-3": [
    {
      src: "https://images.pexels.com/photos/37471949/pexels-photo-37471949.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Spazio di lavoro con accessori in pelle e campioni di tessuto",
    },
    {
      src: "https://images.pexels.com/photos/17789974/pexels-photo-17789974.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Moodboard con elementi grafici e ispirazioni creative",
    },
  ],
  "progetto-4": [
    {
      src: "https://images.pexels.com/photos/35761560/pexels-photo-35761560.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Bambina in abito bianco durante la prima comunione in chiesa",
    },
    {
      src: "https://images.pexels.com/photos/30010819/pexels-photo-30010819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Momento della cerimonia di comunione con il sacerdote",
    },
    {
      src: "https://images.pexels.com/photos/37146802/pexels-photo-37146802.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Bambina con abito bianco davanti all’altare",
    },
  ],
  "progetto-5": [
    {
      src: "https://images.pexels.com/photos/32060316/pexels-photo-32060316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Coppia di sposi che sorride in un momento di festa",
    },
    {
      src: "https://images.pexels.com/photos/29502059/pexels-photo-29502059.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Sposi che si baciano durante la cerimonia",
    },
  ],
  "progetto-6": [
    {
      src: "https://images.pexels.com/photos/19345545/pexels-photo-19345545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Due ospiti in abito elegante durante un evento all’aperto",
    },
    {
      src: "https://images.pexels.com/photos/10782244/pexels-photo-10782244.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Ospiti che conversano durante una festa",
    },
  ],
  "progetto-7": [
    {
      src: "https://images.pexels.com/photos/1188751/pexels-photo-1188751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Timeline di montaggio video su schermo di computer",
    },
    {
      src: "https://images.pexels.com/photos/695730/pexels-photo-695730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Interfaccia di software di montaggio con tracce multiple",
    },
  ],
  "progetto-8": [
    {
      src: "https://images.pexels.com/photos/10395639/pexels-photo-10395639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Telecamera professionale su un set all’aperto",
    },
    {
      src: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Troupe cinematografica al lavoro in città",
    },
  ],
  "progetto-9": [
    {
      src: "https://images.pexels.com/photos/8371391/pexels-photo-8371391.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Creatrice di contenuti che registra un video verticale",
    },
    {
      src: "https://images.pexels.com/photos/29196415/pexels-photo-29196415.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Flat lay con smartphone e tablet per la creazione di contenuti",
    },
    {
      src: "https://images.pexels.com/photos/5208774/pexels-photo-5208774.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Stabilizzatore, smartphone e cavi su superficie neutra",
    },
  ],
};
