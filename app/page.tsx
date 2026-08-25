import Card from './components/Card';
import ThemeToggle from './components/ThemeToggle';
import { games, profile, projects, roles } from '@/lib/data';

function Section({
  id,
  title,
  children,
  items,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  items: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-14 scroll-mt-20">
      <div className="mx-auto mb-8 max-w-[960px] px-4">
        <h2 className="text-center">{title}</h2>
        {children}
      </div>
      {/*
        Multi-column rather than grid: the number of columns follows the
        available width on its own, and cards of different heights pack
        without leaving holes. CSS grid cannot do this yet — `masonry` is
        still not shippable — and a flex-wrap row leaves a gap under every
        card shorter than the tallest one in its row.
      */}
      <div className="mx-auto max-w-[1200px] columns-[17rem] gap-4 px-4">{items}</div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2"
      >
        Skip to content
      </a>

      <nav
        className="flex flex-wrap justify-center gap-x-6 gap-y-1 px-4 py-4 text-sm"
        style={{ borderBottom: '1px solid var(--line)' }}
        aria-label="Links"
      >
        {profile.links.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
            {l.label}
          </a>
        ))}
        <ThemeToggle />
      </nav>

      <main id="main" className="mx-auto max-w-[1440px] pt-12">
        <div className="mx-auto mb-14 max-w-[960px] px-4">
          <h1 className="text-center">{profile.name}</h1>
          <p>
            Welcome. I am a frontend engineer, currently at Compass. I have spent the last seven
            years building the layer other teams build on — component libraries, design systems and
            frontend architecture — and lately I have been building AI products on the side.
          </p>
          <p>
            Below you will find the work I am most proud of, and further down the game prototypes I
            built before moving to the web. I keep adding to this as I go.
          </p>
        </div>

        <Section
          id="work"
          title="Where I've worked"
          items={roles.map((r) => (
            <Card key={r.title} item={r} />
          ))}
        >
          <p>
            I like working close to other engineers, on the pieces everyone else depends on: shared
            components, the rules a codebase follows, and the seams between applications. Most of my
            work has been making that layer good enough that nobody has to think about it — and
            every so often, taking something on directly for a client, start to finish.
          </p>
        </Section>

        <Section
          id="projects"
          title="Things I've built"
          items={projects.map((p) => (
            <Card key={p.title} item={p} />
          ))}
        >
          <p>
            Things I build outside work, usually because I want to find out whether they can be
            built at all. The largest is Story Teller Visualizer, a platform that takes a web novel
            and returns a finished, published video episode.
          </p>
        </Section>

        <Section
          id="games"
          title="Game development"
          items={games.map((g) => (
            <Card key={g.title} item={g} />
          ))}
        >
          <p>
            I studied computer graphics and spent years building prototypes in Unity. It is where I
            learned rendering, layout and real-time systems — the same instincts I now apply to
            interfaces.
          </p>
        </Section>
      </main>

      <footer
        className="mt-4 px-4 py-8 text-center text-xs"
        style={{ borderTop: '1px solid var(--line)', color: 'var(--ink-faint)' }}
      >
        <p className="mb-0">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          {' · '}
          <a href="https://github.com/02900/portfolio" target="_blank" rel="noreferrer">
            Source
          </a>
        </p>
      </footer>
    </>
  );
}
