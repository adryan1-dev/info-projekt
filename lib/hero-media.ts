export type HeroMedia = {
  id: "notebook" | "laptop" | "tablet";
  src: string;
  alt: string;
  credit: string;
  creditUrl: string;
};

export const HERO_MEDIA: Record<HeroMedia["id"], HeroMedia> = {
  notebook: {
    id: "notebook",
    src: "/hero/notebook.jpg",
    alt: "Pessoa usando um notebook em uma mesa de madeira",
    credit: "Andrew Neel",
    creditUrl: "https://unsplash.com/photos/QLqNalPe0RA",
  },
  laptop: {
    id: "laptop",
    src: "/hero/laptop.jpg",
    alt: "Pessoa digitando em um notebook",
    credit: "Glenn Carstens-Peters",
    creditUrl: "https://unsplash.com/photos/SfP5_F2K2aQ",
  },
  tablet: {
    id: "tablet",
    src: "/hero/tablet.jpg",
    alt: "Pessoas em uma mesa usando tablet e notebook",
    credit: "Brooke Cagle",
    creditUrl: "https://unsplash.com/photos/e12wQLAjQi0",
  },
};

export const HERO_PRIMARY: HeroMedia = HERO_MEDIA.tablet;
