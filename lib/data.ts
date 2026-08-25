export type Link = { label: string; href: string };

export type Project = {
  title: string;
  period: string;
  summary: string;
  detail?: string;
  stack: string[];
  links: Link[];
  cover?: string;
  featured?: boolean;
};

export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  blurb: string;
  highlights: string[];
  stack: string[];
};

export const profile = {
  name: 'Juan Ortiz',
  role: 'Senior Frontend Engineer',
  tagline:
    'I build the layer other teams build on — design systems, frontend architecture, and lately AI products.',
  intro:
    'Seven-plus years shipping frontend at scale: component libraries adopted across four countries, a design system with automated codemod migrations, micro-frontend platforms, and large-scale framework migrations. Currently at Compass, and building an end-to-end AI video platform on the side.',
  email: 'juanortizte@gmail.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/02900' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/juanortizte/' },
    { label: 'YouTube', href: 'https://www.youtube.com/@IsekaiWorlds-ES' },
    { label: 'CV', href: '/assets/cv.pdf' },
  ] satisfies Link[],
};

export const roles: Role[] = [
  {
    company: 'Compass',
    title: 'Senior Frontend Engineer',
    period: 'Jan 2026 — Present',
    location: 'Argentina · Remote',
    blurb:
      'Transaction Management at the largest residential real estate brokerage in the U.S. (NYSE: COMP), on a platform serving a network of 300,000+ agents.',
    highlights: [
      'Built a cross-application bridge that passes data across an authentication boundary into an embedded app, shipped behind a feature flag with no post-release defects.',
      'Extended document templates from personal-only to shareable across a team.',
      'Contributing to the ongoing React 16 → 18 upgrade across mature production applications — the prerequisite for adopting the shared component library.',
    ],
    stack: ['React', 'TypeScript', 'Design Systems', 'Feature Flags'],
  },
  {
    company: 'DD360',
    title: 'Senior Frontend Engineer',
    period: 'Nov 2023 — Dec 2025',
    location: 'Mexico · Remote',
    blurb:
      'Architected the design system and the frontend platform behind a real estate technology suite.',
    highlights: [
      'Design system of 70+ components on Radix UI and CVA, adopted by 5+ applications. Documentation 20% → 100%, coverage 40% → 90%+.',
      'jscodeshift AST codemods that cut breaking-change migrations from 2–3 days to 5–10 minutes. The v2.0.0 run applied 234 transformations across 450 files in 8 seconds.',
      'A modular visual website builder — component tree serialization, JSON rendering engine, extensible registry — taking site creation from 2–3 weeks to 20–30 minutes at PageSpeed 95+.',
      'A platform of 5 micro-frontends and 15+ shared packages on Turborepo, cutting bundle size 60% while holding FCP under 1.5s.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Radix UI', 'Zustand', 'Turborepo', 'jscodeshift'],
  },
  {
    company: 'Kavak',
    title: 'Senior Frontend Engineer',
    period: 'Dec 2018 — Oct 2023',
    location: 'Mexico · Hybrid',
    blurb:
      'Built the shared frontend foundations for an international used-car marketplace.',
    highlights: [
      '120+ components across three libraries, reaching 100% adoption in 4 countries and millions of users, cutting feature development time by 40%.',
      'Chose Stencil with scoped styles over Shadow DOM so components stayed serializable and SSR-safe across both Angular Universal and Next.js consumers.',
      'Co-created Androssi, a mixin-based SCSS framework (45+ mixins) that cut CSS duplication 60% with zero breaking changes after v1.0, supporting per-country theming and RTL.',
      'Established the Core Web Vitals guidelines adopted across all platforms, and mentored junior and mid-level developers.',
    ],
    stack: ['Angular', 'Stencil', 'React', 'TypeScript', 'RxJS', 'SCSS', 'Nx'],
  },
];

export const projects: Project[] = [
  {
    title: 'Story Teller Visualizer',
    period: '2024 — Present',
    summary:
      'An end-to-end platform that turns web novels into AI-generated video episodes: LLM analysis, multi-voice TTS, image and video generation, forced-aligned subtitles, and final export.',
    detail:
      'The frontend is a Next.js 16 App Router application of 55 pages and 266 components, migrated in full over two months. It includes a hand-built non-linear video editor — multi-track timeline, waveforms decoded client-side with the Web Audio API, word-by-word karaoke subtitles — plus a Multi-Zones architecture with native SSE streaming proxies, real-time state on useSyncExternalStore, and cost/performance dashboards whose charts are built by hand in SVG with no charting library. 838 unit tests and 73 Playwright E2E tests run in CI.',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind 4', 'SSE', 'Playwright', 'Prisma'],
    links: [{ label: 'Watch the output', href: 'https://www.youtube.com/@IsekaiWorlds-ES' }],
    featured: true,
  },
  {
    title: 'Personal Finance Wallet',
    period: '2025',
    summary:
      'Multi-currency finance management: transaction tracking, investments, shared expenses and forecasting, on Supabase Postgres with row-level security and a 51-file internal design system.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Zustand', 'Supabase', 'Tailwind'],
    links: [{ label: 'Live', href: 'https://finance-wallet-one.vercel.app' }],
  },
  {
    title: 'Character Creator',
    period: '2025',
    summary:
      'An interactive character creation dashboard with modular architecture, drag-and-drop, theming and data-visualization panels.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Zustand', 'Tailwind 4', 'DND Kit'],
    links: [
      { label: 'Live', href: 'https://character-creator-nine.vercel.app' },
      { label: 'Repository', href: 'https://github.com/02900/character-creator' },
    ],
  },
  {
    title: 'Real-Time Multiplayer Boggle',
    period: '2025',
    summary:
      'A real-time multiplayer word game with Spanish dictionary validation and a persistent scoreboard. Two independent game engines behind a shared interface, state synchronized over WebSockets, 32 test files plus a Playwright E2E suite.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Socket.IO', 'Vitest', 'Playwright'],
    links: [],
  },
  {
    title: 'Clay on the PlayStation 3',
    period: '2026',
    summary:
      'Ported Clay, an immediate-mode UI layout engine, to the PlayStation 3 — including directional gamepad focus navigation. Layout, focus management and directional traversal with no DOM underneath.',
    stack: ['C', 'PSL1GHT', 'RSXGL'],
    links: [{ label: 'Repository', href: 'https://github.com/02900/clay-ps3' }],
  },
  {
    title: 'PS3 Homebrew Toolchain',
    period: '2026',
    summary:
      'A Dockerized cross-compiler toolchain for PlayStation 3 homebrew with three renderer backends, template repositories, CI and PKG packaging — plus the hard-won platform patterns packaged as reusable Claude Code skills.',
    stack: ['C', 'C++', 'Docker', 'PSL1GHT'],
    links: [
      { label: 'Skills', href: 'https://github.com/02900/ps3-homebrew-skills' },
      { label: 'Toolchain', href: 'https://github.com/02900/ps3-toolchain' },
    ],
  },
  {
    title: 'Web Metadata Scraper',
    period: '2024',
    summary:
      'A TypeScript tool for scraping and analyzing page metadata — meta tags, Open Graph, Twitter Cards and structured data — with HTML report generation and both CLI and programmatic use.',
    stack: ['TypeScript', 'Node.js', 'Jest', 'Cheerio'],
    links: [{ label: 'Repository', href: 'https://github.com/02900/Web-Metadata-Scraper' }],
    cover: '/assets/frontend/screenshot-ce',
  },
  {
    title: 'Local Storage Transfer Extension',
    period: '2023',
    summary:
      'A Chrome extension that syncs local storage values and cookies between browser tabs, keeping session state consistent while developing and testing.',
    stack: ['Angular', 'TypeScript', 'Chrome Extension API', 'RxJS'],
    links: [{ label: 'Repository', href: 'https://github.com/02900/ce-copy-local-storage' }],
  },
];

export const games: Project[] = [
  {
    title: 'Crowd Simulation',
    period: '2018 — 2019',
    summary: 'Thesis research into crowd simulation models, and an implementation of one.',
    stack: ['Unity', 'C#'],
    links: [{ label: 'Video', href: 'https://youtu.be/dblzEx7WnDI' }],
    cover: '/assets/vg/crowd-simulation',
  },
  {
    title: 'Yu-Gi-Oh! Duelist of the Roses',
    period: '2018',
    summary: 'A remake of the PlayStation 2 strategy card game.',
    stack: ['Unity', 'C#'],
    links: [{ label: 'Video', href: 'https://youtu.be/uUspAGvrGdE' }],
    cover: '/assets/vg/ygo',
  },
  {
    title: 'Caza a Casa',
    period: '2018',
    summary:
      'A 2D platformer inspired by petroglyphs — figures engraved in stone thousands of years ago.',
    stack: ['Unity', 'C#'],
    links: [{ label: 'Video', href: 'https://www.youtube.com/watch?v=K7vWXWfpdD0' }],
    cover: '/assets/vg/caza-a-casa',
  },
  {
    title: 'State Machines for NPCs',
    period: '2018',
    summary:
      'Finite state machines letting non-player characters make decisions from the game state.',
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
    title: 'Third-Person Shooter Prototype',
    period: '2017',
    summary: 'A multiplayer third-person shooter prototype.',
    stack: ['Unity', 'C#'],
    links: [],
    cover: '/assets/vg/tps',
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Core',
    items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS'],
  },
  {
    group: 'Frameworks',
    items: ['React', 'Next.js (App Router)', 'Angular', 'Astro', 'Stencil'],
  },
  {
    group: 'State & Data',
    items: ['Zustand', 'Redux', 'NgRx', 'RxJS', 'useSyncExternalStore', 'Server-Sent Events'],
  },
  {
    group: 'Design Systems',
    items: ['Radix UI', 'CVA', 'Design Tokens', 'Storybook', 'Tailwind CSS', 'Web Components'],
  },
  {
    group: 'Architecture',
    items: ['Micro-frontends', 'Multi-Zones', 'Monorepos', 'Codemods', 'ADRs'],
  },
  {
    group: 'Performance',
    items: ['Core Web Vitals', 'Code Splitting', 'Bundle Optimization', 'SSR / SSG', 'Caching'],
  },
  {
    group: 'AI',
    items: ['LLM Integration', 'Model Context Protocol', 'Streaming UIs', 'Job Queues'],
  },
  {
    group: 'Testing & Tooling',
    items: ['Vitest', 'Jest', 'Playwright', 'Testing Library', 'Chromatic', 'CI/CD'],
  },
];
