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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
