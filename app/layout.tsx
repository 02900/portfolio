import type { Metadata } from 'next';
import './globals.css';
import { profile } from '@/lib/data';

export const metadata: Metadata = {
  metadataBase: new URL('https://02900.github.io'),
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  authors: [{ name: profile.name, url: 'https://github.com/02900' }],
  keywords: [
    'Juan Ortiz',
    'Frontend Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'Design Systems',
    'Micro-frontends',
  ],
  openGraph: {
    type: 'website',
    url: 'https://02900.github.io',
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    siteName: `${profile.name} · Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
  },
  icons: { icon: '/favicon.ico' },
};

const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      document.documentElement.setAttribute('data-theme', stored);
    }
  } catch (e) {}
})();
`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  url: 'https://02900.github.io',
  sameAs: [
    'https://github.com/02900',
    'https://www.linkedin.com/in/juanortizte/',
    'https://www.youtube.com/@IsekaiWorlds-ES',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
