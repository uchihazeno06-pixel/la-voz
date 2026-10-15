export const siteConfig = {
  // ── Identity ──────────────────────────────
  name: 'La Voz',
  tagline: '#World_Peace',   // literal, exactly as written
  description: 'A voice for world peace. World events, personal thoughts, and questions worth sitting with.',
  author: 'Zeno',
  authorByline: 'By Zeno',
  penNameNote: '',

  // ── Contact ───────────────────────────────
  email: 'uchihazeno06@gmail.com',  // change anytime, no code hunt needed

  // ── URLs ──────────────────────────────────
  url: 'https://lavoz.vercel.app',

  // ── Social (leave blank to hide) ──────────
  social: {
    x: '',
    instagram: '',
    github: '',
  },

  // ── Default theme (reader can override) ───
  // Options: 'bw-orange' | 'slate' | 'navy-cream' | 'forest' | 'stone'
  defaultTheme: 'bw-orange',

  // ── Newsletter (Buttondown) ───────────────
  // Paste your Buttondown username once you make an account. Leave blank to hide the box.
  buttondownUsername: '',

  // ── Nav ───────────────────────────────────
  nav: [
    { label: 'Trending', href: '/' },
    { label: 'Earth Daily', href: '/earth-daily' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};

export type SiteConfig = typeof siteConfig;