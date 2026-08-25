import ThemeToggle from './components/ThemeToggle';
import { GameCard, ProjectCard, RoleCard, SectionHeading, Tag } from './components/Sections';
import { games, profile, projects, roles, skills } from '@/lib/data';

const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Games', href: '#games' },
];

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:px-4 focus:py-2"
        style={{ background: 'var(--raised)', color: 'var(--fg)' }}
      >
        Skip to content
      </a>

      <header
        className="sticky top-0 z-40 backdrop-blur"
        style={{ background: 'color-mix(in oklab, var(--bg) 85%, transparent)' }}
      >
        <div
          className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6"
          style={{ borderBottom: '1px solid var(--line)' }}
        >
          <a href="#main" className="font-mono text-sm font-semibold tracking-tight">
            juan<span style={{ color: 'var(--accent)' }}>.</span>ortiz
          </a>
          <div className="flex items-center gap-1">
            <nav aria-label="Sections" className="hidden sm:flex">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-[var(--accent-soft)]"
                  style={{ color: 'var(--fg-soft)' }}
                >
                  {n.label}
                </a>
              ))}
            </nav>
            <span className="mx-1 hidden sm:block" />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-4xl px-6">
        {/* Hero */}
        <section className="rise py-20 sm:py-28">
          <p
            className="mb-4 font-mono text-xs uppercase tracking-[0.18em]"
            style={{ color: 'var(--accent)' }}
          >
            {profile.role}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
            {profile.name}
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl"
            style={{ color: 'var(--fg-soft)' }}
          >
            {profile.tagline}
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed" style={{ color: 'var(--fg-faint)' }}>
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ background: 'var(--accent)' }}
            >
              Get in touch
            </a>
            {profile.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--accent-soft)]"
                style={{ borderColor: 'var(--line)', color: 'var(--fg-soft)' }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </section>

        {/* Work */}
        <section className="scroll-mt-24 py-16" aria-labelledby="work">
          <SectionHeading id="work" label="Experience" title="Where I've worked" />
          <div>
            {roles.map((r) => (
              <RoleCard key={r.company} role={r} />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="scroll-mt-24 py-16" aria-labelledby="projects">
          <SectionHeading id="projects" label="Selected work" title="Things I've built" />
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="scroll-mt-24 py-16" aria-labelledby="skills">
          <SectionHeading id="skills" label="Toolkit" title="What I work with" />
          <dl className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group}>
                <dt className="mb-3 text-sm font-semibold tracking-tight">{s.group}</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {s.items.map((i) => (
                    <Tag key={i}>{i}</Tag>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Games */}
        <section className="scroll-mt-24 py-16" aria-labelledby="games">
          <SectionHeading id="games" label="Before the web" title="Game development" />
          <p className="-mt-6 mb-10 max-w-2xl leading-relaxed" style={{ color: 'var(--fg-faint)' }}>
            I studied computer graphics and spent years building game prototypes in Unity. It is
            where I learned rendering, layout and real-time systems — the same instincts I now
            apply to interfaces.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((g) => (
              <GameCard key={g.title} game={g} />
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-8 max-w-4xl px-6 pb-16">
        <div
          className="flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderTop: '1px solid var(--line)' }}
        >
          <p className="text-sm" style={{ color: 'var(--fg-faint)' }}>
            Built with Next.js, React and Tailwind CSS.{' '}
            <a
              href="https://github.com/02900/portfolio"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:opacity-70"
            >
              Source
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-4">
            {profile.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm transition-opacity hover:opacity-70"
                style={{ color: 'var(--fg-soft)' }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
