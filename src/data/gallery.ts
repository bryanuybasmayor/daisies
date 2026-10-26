// DEMO IMAGERY — every photo below is free commercial-use stock (Pexels licence),
// not a photo of the real store. To swap in real Daisies photos: drop new files
// into src/assets/images/ with the same names, or update the imports here.
// Credits for each file live in images-credits.md.

import freshMixedBouquet from '../assets/images/fresh-floral-mixed-bouquet.jpg';
import freshRedBouquet from '../assets/images/fresh-floral-red-bouquet.jpg';
import silkPampas from '../assets/images/silk-botanical-pampas.jpg';
import silkDriedArrangement from '../assets/images/silk-botanical-dried-arrangement.jpg';
import weddingBouquet from '../assets/images/wedding-bouquet.jpg';
import weddingReceptionTable from '../assets/images/wedding-reception-table.jpg';
import bereavementWhiteLilies from '../assets/images/bereavement-white-lilies.jpg';
import homeDecorDaisyPillows from '../assets/images/home-decor-daisy-pillows.jpg';
import homeDecorCandles from '../assets/images/home-decor-candles.jpg';

export interface GalleryImage {
  src: ImageMetadata;
  alt: string;
  caption: string;
}

export interface GalleryCategory {
  slug: string;
  name: string;
  images: GalleryImage[];
  /** Optional short editorial line shown under the category heading. */
  note?: string;
}

export const galleryCategories: GalleryCategory[] = [
  {
    slug: 'fresh-floral',
    name: 'Fresh Floral',
    images: [
      {
        src: freshMixedBouquet,
        alt: 'A colourful bouquet of roses, lilies and greenery in a pale pink vase',
        caption: 'A mixed bouquet for a birthday',
      },
      {
        src: freshRedBouquet,
        alt: 'A tall glass vase of red, blue and orange flowers on a white table',
        caption: 'Something bright for no reason at all',
      },
    ],
  },
  {
    slug: 'silk-botanical',
    name: 'Silk / Botanical',
    images: [
      {
        src: silkPampas,
        alt: 'Dried pampas grass and feathery stems in a small pale vase on a side table',
        caption: 'Permanent botanicals for a quiet corner',
      },
      {
        src: silkDriedArrangement,
        alt: 'A dried arrangement of grasses and seed heads in a cream vase in warm light',
        caption: 'Dried grasses, designed in store',
      },
    ],
  },
  {
    slug: 'wedding',
    name: 'Wedding',
    images: [
      {
        src: weddingBouquet,
        alt: 'A blush and white bridal bouquet with trailing ribbon resting on a wooden table',
        caption: 'A blush bouquet, ribbon and all',
      },
      {
        src: weddingReceptionTable,
        alt: 'A wedding reception table set with white and green flowers, glassware and candles',
        caption: 'Centrepieces for the reception',
      },
    ],
  },
  {
    slug: 'bereavement',
    name: 'Bereavement',
    note: 'We keep this work quiet and personal. If you would like to talk through an arrangement before you order, call the store and ask for us.',
    images: [
      {
        src: bereavementWhiteLilies,
        alt: 'White lilies and cream roses in a glass vase beside a soft curtain',
        caption: 'White lilies, for a family service',
      },
    ],
  },
  {
    slug: 'home-decor',
    name: 'Home Decor',
    images: [
      {
        src: homeDecorDaisyPillows,
        alt: 'A cushion with embroidered daisies beside a vintage radio and a small vase of flowers',
        caption: 'Daisy cushions and a little nostalgia',
      },
      {
        src: homeDecorCandles,
        alt: 'Candles glowing on a wooden table with dried grasses in a woven basket behind',
        caption: 'Candles for the dinner table',
      },
    ],
  },
];

/** A short, deliberately mixed-height preview for the home page. */
export const homePreview: GalleryImage[] = [
  galleryCategories[0].images[0],
  galleryCategories[3].images[0],
  galleryCategories[2].images[1],
  galleryCategories[4].images[0],
];
