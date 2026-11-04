import { portfolioImages, type ImageAsset } from '@/config/images';

export type ProjectCategory = 'art-direction' | 'fotografia' | 'video' | 'social';

export type PortfolioCategory = {
  id: ProjectCategory | 'tutti'; // Usato in: filtri del portfolio.
  label: string; // Usato in: filtri del portfolio e tag sulle card.
};

export type Project = {
  id: string; // Chiave delle immagini in images.ts (portfolioImages).
  title: string; // Usato in: card e lightbox.
  category: ProjectCategory; // Usato in: filtri e tag della card.
  year: string; // Usato in: tag della card e lightbox.
  ratio: 'portrait' | 'landscape'; // Usato in: forma della card nel masonry (4:5 o 4:3).
  description: string; // Usato in: lightbox, testo del progetto.
  link?: string; // Usato in: lightbox, link esterno opzionale (si apre in una nuova scheda).
  cover: ImageAsset; // Usato in: copertina della card.
  images: ImageAsset[]; // Usato in: lightbox, galleria (la prima è la copertina).
};

export const portfolioCategories: PortfolioCategory[] = [
  { id: 'tutti', label: 'Tutti' },
  { id: 'art-direction', label: 'Art Direction' },
  { id: 'fotografia', label: 'Fotografia' },
  { id: 'video', label: 'Video' },
  { id: 'social', label: 'Social' },
];

export const getCategoryLabel = (id: ProjectCategory): string =>
  portfolioCategories.find((category) => category.id === id)?.label ?? id;

// TODO: sostituire con progetti reali (titoli, anni, descrizioni e immagini).
export const projects: Project[] = [
  {
    id: 'progetto-1',
    title: 'Progetto di esempio 1',
    category: 'art-direction',
    year: '2025',
    ratio: 'portrait',
    description: 'Descrizione del progetto di esempio: sostituire con il racconto reale del lavoro.',
    cover: portfolioImages['progetto-1'][0],
    images: portfolioImages['progetto-1'],
  },
  {
    id: 'progetto-2',
    title: 'Progetto di esempio 2',
    category: 'art-direction',
    year: '2025',
    ratio: 'portrait',
    description: 'Descrizione del progetto di esempio: sostituire con il racconto reale del lavoro.',
    cover: portfolioImages['progetto-2'][0],
    images: portfolioImages['progetto-2'],
  },
  {
    id: 'progetto-3',
    title: 'Progetto di esempio 3',
    category: 'art-direction',
    year: '2024',
    ratio: 'landscape',
    description: 'Descrizione del progetto di esempio: sostituire con il racconto reale del lavoro.',
    cover: portfolioImages['progetto-3'][0],
    images: portfolioImages['progetto-3'],
  },
  {
    id: 'progetto-4',
    title: 'Progetto di esempio 4',
    category: 'fotografia',
    year: '2025',
    ratio: 'portrait',
    description: 'Descrizione del progetto di esempio: sostituire con il racconto reale del lavoro.',
    cover: portfolioImages['progetto-4'][0],
    images: portfolioImages['progetto-4'],
  },
  {
    id: 'progetto-5',
    title: 'Progetto di esempio 5',
    category: 'fotografia',
    year: '2024',
    ratio: 'portrait',
    description: 'Descrizione del progetto di esempio: sostituire con il racconto reale del lavoro.',
    cover: portfolioImages['progetto-5'][0],
    images: portfolioImages['progetto-5'],
  },
  {
    id: 'progetto-6',
    title: 'Progetto di esempio 6',
    category: 'fotografia',
    year: '2024',
    ratio: 'landscape',
    description: 'Descrizione del progetto di esempio: sostituire con il racconto reale del lavoro.',
    cover: portfolioImages['progetto-6'][0],
    images: portfolioImages['progetto-6'],
  },
  {
    id: 'progetto-7',
    title: 'Progetto di esempio 7',
    category: 'video',
    year: '2025',
    ratio: 'landscape',
    description: 'Descrizione del progetto di esempio: sostituire con il racconto reale del lavoro.',
    cover: portfolioImages['progetto-7'][0],
    images: portfolioImages['progetto-7'],
  },
  {
    id: 'progetto-8',
    title: 'Progetto di esempio 8',
    category: 'video',
    year: '2024',
    ratio: 'landscape',
    description: 'Descrizione del progetto di esempio: sostituire con il racconto reale del lavoro.',
    cover: portfolioImages['progetto-8'][0],
    images: portfolioImages['progetto-8'],
  },
  {
    id: 'progetto-9',
    title: 'Progetto di esempio 9',
    category: 'social',
    year: '2025',
    ratio: 'portrait',
    description: 'Descrizione del progetto di esempio: sostituire con il racconto reale del lavoro.',
    cover: portfolioImages['progetto-9'][0],
    images: portfolioImages['progetto-9'],
  },
];
