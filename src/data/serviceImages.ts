import type { ImageMetadata } from 'astro';

import fresh from '../assets/images/fresh-floral-mixed-bouquet.jpg';
import silk from '../assets/images/silk-botanical-pampas.jpg';
import homeDecor from '../assets/images/home-decor-candles.jpg';
import giftware from '../assets/images/giftware-candles-linen.jpg';
import bereavement from '../assets/images/bereavement-white-lilies.jpg';
import wedding from '../assets/images/wedding-bouquet.jpg';

export const serviceImages: Record<string, ImageMetadata> = {
  'fresh-floral-mixed-bouquet.jpg': fresh,
  'silk-botanical-pampas.jpg': silk,
  'home-decor-candles.jpg': homeDecor,
  'giftware-candles-linen.jpg': giftware,
  'bereavement-white-lilies.jpg': bereavement,
  'wedding-bouquet.jpg': wedding,
};
