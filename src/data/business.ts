// All business facts live here so the owner can update the site in one place.
// Every value below comes from the brief's "Verified business facts" or is
// marked as needing confirmation.

export interface BusinessHours {
  day: string;
  display: string;
  opens?: string;
  closes?: string;
  closed?: boolean;
}

const address = {
  street: '506 Main St',
  city: 'Melfort',
  region: 'SK',
  regionName: 'Saskatchewan',
  postal: 'S0E 1A0',
  country: 'CA',
};

export const fullAddress = `${address.street}, ${address.city}, ${address.region} ${address.postal}`;

export const business = {
  name: 'Daisies Dreams and Decor',
  tagline: 'Florals, home decor and gifts in Melfort, Saskatchewan',
  foundedBy: 'Kyla',
  phone: {
    display: '(306) 752-2340',
    href: 'tel:+13067522340',
  },
  address,
  // A plain search link rather than an embedded map, so no API key is invented.
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Daisies%20Dreams%20and%20Decor%2C%20506%20Main%20St%2C%20Melfort%2C%20SK',
  hours: [
    { day: 'Monday', display: '9:00 a.m. – 5:30 p.m.', opens: '09:00', closes: '17:30' },
    { day: 'Tuesday', display: '9:00 a.m. – 5:30 p.m.', opens: '09:00', closes: '17:30' },
    { day: 'Wednesday', display: '9:00 a.m. – 5:30 p.m.', opens: '09:00', closes: '17:30' },
    { day: 'Thursday', display: '9:00 a.m. – 5:30 p.m.', opens: '09:00', closes: '17:30' },
    { day: 'Friday', display: '9:00 a.m. – 5:30 p.m.', opens: '09:00', closes: '17:30' },
    { day: 'Saturday', display: '9:00 a.m. – 5:00 p.m.', opens: '09:00', closes: '17:00' },
    { day: 'Sunday', display: 'Closed', closed: true },
  ] satisfies BusinessHours[],
  hoursSummary: 'Mon–Fri 9–5:30 · Sat 9–5 · Closed Sunday',
  // Email is still unpublished. Social accounts are taken from the live site
  // (daisiesdreamsdecor.com) and are the same pages linked there.
  email: '',
  socialLinks: [
    { label: 'Facebook', href: 'https://www.facebook.com/daisiesdreamsanddecor/' },
    { label: 'Instagram', href: 'https://www.instagram.com/daisies_dreams_and_decor/' },
  ] as { label: string; href: string }[],
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
] as const;

export interface Service {
  slug: string;
  name: string;
  short: string;
  summary: string;
  notes: string[];
  image?: string;
  imageAlt?: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export const services: Service[] = [
  {
    slug: 'fresh-floral',
    name: 'Fresh Floral Arrangements',
    short: 'Flowers for the moments that matter — made fresh, made for the occasion.',
    summary:
      'Sometimes there are no words, and flowers say it for you. We build fresh arrangements for the occasions that come up in a life: a small thinking-of-you posy, an anniversary, a birthday, a new baby, a retirement, or just because it is Tuesday and someone needs a lift. Tell us who it is for and we will make it with care.',
    notes: [
      'Small posies to generous showpieces',
      'Seasonal stems, chosen fresh each week',
      'Tell us the occasion and we will take it from there',
    ],
    image: 'fresh-floral-mixed-bouquet.jpg',
    imageAlt: 'A colourful mixed bouquet of roses, lilies and greenery in a pale pink vase',
  },
  {
    slug: 'silk-botanical',
    name: 'Silk / Permanent Botanical Arrangements',
    short: 'Arrangements that keep their colour, season after season.',
    summary:
      'Not every arrangement needs water. Our permanent botanicals look near to real and last, which makes them a good fit for a home, an office, a reception desk, or a corner where fresh flowers would not get the attention they need. Bring us a photo, a colour palette, or a spot that needs something, and we will design to it.',
    notes: [
      'Designed in store to your colours and space',
      'No watering, no wilting',
      'Past work is in the Gallery',
    ],
    image: 'silk-botanical-pampas.jpg',
    imageAlt: 'Dried pampas grass and feathery stems arranged in a small pale vase on a side table',
    secondaryCta: { label: 'See past arrangements in the Gallery', href: '/gallery' },
  },
  {
    slug: 'home-decor',
    name: 'Home Decor',
    short: 'Pillows, wall canvas, lamps and candles — a shop that keeps changing.',
    summary:
      'Our decor side changes with the seasons and with whatever we have fallen in love with: pillows, wall canvas, lamps, candles, and the small pieces that finish a room. If you see something in a colour that will not work in your space, ask — we can often order a different size or shade in for you.',
    notes: [
      'New pieces arriving regularly',
      'Custom ordering when the item is not in store',
      'Ask us to help you match a room',
    ],
    image: 'home-decor-candles.jpg',
    imageAlt: 'Warm candlelight on a wooden table with dried grasses in a basket',
  },
  {
    slug: 'gift-ware',
    name: 'Gift-ware',
    short: 'Journals, throws, dish cloths and gifts with a little meaning.',
    summary:
      'For the person who has everything, or the one you would like to spoil: journals, pillows, throws, dish cloths, Christian giftware, and specialty pieces. Many of our gifts come from local artisans and craftsmen, and we are always glad to add more. If you make something by hand, bring it in and show us.',
    notes: [
      'Pieces from local artisans and craftsmen',
      'Christian giftware and specialty items',
      'Local makers welcome — call to arrange a time',
    ],
    image: 'giftware-candles-linen.jpg',
    imageAlt: 'Candles, stoneware cups and eucalyptus arranged on linen and a wooden tray',
  },
  {
    slug: 'bereavement',
    name: 'Bereavement',
    short: 'Quiet, genuine care when someone you love has died.',
    summary:
      'This is the part of the work we take most seriously. We will listen, ask about the person — their favourite colours, their garden, the team they never missed a game for — and build an arrangement that feels like them. A tractor, a sports jersey, a certain shade of yellow: if it matters to your family, tell us and we will find a way to include it.',
    notes: [
      'Arrangements for visitations, services and families',
      'Personal touches where they are wanted',
      'We will work with the funeral home on timing',
    ],
    image: 'bereavement-white-lilies.jpg',
    imageAlt: 'White lilies and cream roses in a glass vase beside a soft curtain',
  },
  {
    slug: 'wedding',
    name: 'Wedding',
    short: 'Flowers built around your story, your colours, your day.',
    summary:
      'Wedding flowers start with a conversation, not a catalogue. We will ask how you met, what the day looks like, and the colours you keep coming back to, then design the bouquets, boutonnieres, corsages, centrepieces and the pieces that fill out the room around that. No pressure and no online booking form: call us and we will set up a time to sit down.',
    notes: [
      'A free consultation, booked by phone',
      'Bouquets, boutonnieres, corsages and centrepieces',
      'Flowers matched to your theme and colours',
    ],
    image: 'wedding-bouquet.jpg',
    imageAlt: 'A blush and white bridal bouquet with trailing ribbon resting on a wooden table',
    cta: { label: 'Book a free wedding consultation', href: 'tel:+13067522340' },
  },
];

export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug);
