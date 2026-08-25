export type Link = { label: string; href: string };

export type Project = {
  title: string;
  period: string;
  summary: string;
  stack: string[];
  links: Link[];
  cover?: string;
};

export const profile = {
  name: 'Juan Ortiz',
  role: 'Senior Frontend Engineer',
  tagline:
    'Frontend engineer. Design systems, frontend architecture, and lately AI products.',
  email: 'juanortizte@gmail.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/02900' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/juanortizte/' },
    { label: 'YouTube', href: 'https://www.youtube.com/@IsekaiWorlds-ES' },
    { label: 'CV', href: '/assets/cv.pdf' },
  ] satisfies Link[],
};

export const roles: Project[] = [
  {
    title: 'Compass',
    period: '2026 - present',
    summary:
      'Transaction Management at the largest residential real estate brokerage in the U.S. Work at the seams between applications: extending the existing cross-app infrastructure to carry data across an authentication boundary, behind a feature flag, plus the ongoing React 16 to 18 upgrade.',
    stack: ['React', 'TypeScript', 'Design Systems'],
    links: [{ label: 'compass.com', href: 'https://www.compass.com/' }],
    cover: '/assets/frontend/compass',
  },
  {
    title: 'DD360',
    period: '2023 - 2025',
    summary:
      'Architected a 70+ component design system on Radix and CVA, with jscodeshift codemods that cut breaking-change migrations from days to minutes. Also built a visual website builder and a platform of five micro-frontends.',
    stack: ['Next.js', 'React', 'TypeScript', 'Radix UI', 'Turborepo'],
    links: [{ label: 'dd360.mx', href: 'https://dd360.mx/' }],
    cover: '/assets/frontend/dd360',
  },
  {
    title: 'Kavak',
    period: '2018 - 2023',
    summary:
      'Built the component libraries behind every Kavak product: 120+ components at 100% adoption across four countries. Co-created Androssi, the mixin-based SCSS framework the teams styled with.',
    stack: ['Angular', 'Stencil', 'TypeScript', 'SCSS', 'Nx'],
    links: [{ label: 'kavak.com', href: 'https://www.kavak.com/' }],
    cover: '/assets/frontend/kavak',
  },
];

export const projects: Project[] = [
  {
    title: 'Story Teller Visualizer',
    period: '2024 - present',
    summary:
      'A one-person studio that turns a web novel chapter into a published episode. It runs unattended from chapter to upload, keeps a scheduling calendar reconciled against what each platform actually did, survives restarts without losing work in flight, and picks the cheapest model that still meets the quality bar by measuring cost against results. Everything is mine: the product, the pipeline, the render services, the editor, the publishing tooling and the box it runs on.',
    stack: [
      'Product',
      'Full-stack',
      'AI pipeline',
      'Media rendering',
      'Distributed jobs',
      'Publishing',
      'Infrastructure',
    ],
    links: [{ label: 'Watch the channel', href: 'https://www.youtube.com/@IsekaiWorlds-ES' }],
  },
  {
    title: 'Personal Finance Wallet',
    period: '2025',
    summary:
      'Multi-currency finance tracking with investments, shared expenses and forecasting, on Supabase Postgres with row-level security.',
    stack: ['Next.js', 'React', 'TypeScript', 'Zustand', 'Supabase'],
    links: [{ label: 'Demo', href: 'https://finance-wallet-one.vercel.app' }],
  },
  {
    title: 'Character Creator',
    period: '2025',
    summary:
      'An interactive character creation dashboard with drag-and-drop, theming and data-visualization panels.',
    stack: ['Next.js', 'React', 'TypeScript', 'Zustand'],
    links: [
      { label: 'Demo', href: 'https://character-creator-nine.vercel.app' },
      { label: 'Repository', href: 'https://github.com/02900/character-creator' },
    ],
  },
  {
    title: 'Multiplayer Boggle',
    period: '2025',
    summary:
      'A real-time multiplayer word game with Spanish dictionary validation, two game engines behind a shared interface and state synced over WebSockets.',
    stack: ['Next.js', 'TypeScript', 'Socket.IO', 'Playwright'],
    links: [{ label: 'Repository', href: 'https://github.com/02900/boggle' }],
  },
  {
    title: 'Web Metadata Scraper',
    period: '2024',
    summary:
      'Scrapes and analyses page metadata — meta tags, Open Graph, Twitter Cards, structured data — with HTML reports and both CLI and programmatic use.',
    stack: ['TypeScript', 'Node.js', 'Cheerio'],
    links: [{ label: 'Repository', href: 'https://github.com/02900/Web-Metadata-Scraper' }],
  },
  {
    title: 'Local Storage Transfer',
    period: '2023',
    summary:
      'A Chrome extension that syncs local storage values and cookies between tabs, keeping session state consistent while developing.',
    stack: ['Angular', 'TypeScript', 'Chrome Extension API'],
    links: [{ label: 'Repository', href: 'https://github.com/02900/ce-copy-local-storage' }],
  },
  {
    title: "Yu-Gi-Oh! Deck Builder",
    period: '2022',
    summary:
      'A deck builder exploring reactive programming patterns and Angular architecture, with NgRx state and optimized change detection.',
    stack: ['Angular', 'RxJS', 'NgRx'],
    links: [{ label: 'Try it', href: 'https://02900.github.io/ygo-deck-builder/' }],
    cover: '/assets/frontend/deck-builder',
  },
];

export const games: Project[] = [
  {
    title: 'Crowd Simulation',
    period: '2018 - 2019',
    summary: 'Thesis research into crowd simulation models, and an implementation of one.',
    stack: ['Unity', 'C#'],
    links: [{ label: 'Video', href: 'https://youtu.be/dblzEx7WnDI' }],
    cover: '/assets/vg/crowd-simulation',
  },
  {
    title: 'Duelist of the Roses',
    period: '2018',
    summary: 'A remake of the PlayStation 2 Yu-Gi-Oh! strategy card game.',
    stack: ['Unity', 'C#'],
    links: [{ label: 'Video', href: 'https://youtu.be/uUspAGvrGdE' }],
    cover: '/assets/vg/ygo',
  },
  {
    title: 'Caza a Casa',
    period: '2018',
    summary:
      'A 2D platformer inspired by petroglyphs, figures engraved in stone thousands of years ago.',
    stack: ['Unity', 'C#'],
    links: [],
    cover: '/assets/vg/caza-a-casa',
  },
  {
    title: 'State Machines for NPCs',
    period: '2018',
    summary: 'Finite state machines letting non-player characters decide from the game state.',
    stack: ['Unity', 'C#'],
    links: [{ label: 'Video', href: 'https://www.youtube.com/watch?v=NBQ8Mfu8y_c' }],
    cover: '/assets/vg/ai4vg-3',
  },
  {
    title: 'Goku escape Itachi no Jutsu',
    period: '2018',
    summary: 'A small game written to learn Lua.',
    stack: ['LÖVE 2D', 'Lua'],
    links: [{ label: 'Video', href: 'https://youtu.be/Z_l2B_m0t9A' }],
    cover: '/assets/vg/goku-escape-itachi-no-jutsu',
  },
  {
    title: 'Third-Person Shooter',
    period: '2017',
    summary: 'A multiplayer third-person shooter prototype.',
    stack: ['Unity', 'C#'],
    links: [{ label: 'Video', href: 'https://www.youtube.com/watch?v=3qoVqg6spMU' }],
    cover: '/assets/vg/tps',
  },
];
