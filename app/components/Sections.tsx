import type { Link as LinkType, Project, Role } from '@/lib/data';

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide"
      style={{ borderColor: 'var(--line)', color: 'var(--fg-faint)' }}
    >
      {children}
    </span>
  );
}

export function ProjectLinks({ links }: { links: LinkType[] }) {
  if (links.length === 0) return null;
  return (
    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target={l.href.startsWith('http') ? '_blank' : undefined}
          rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
          className="group inline-flex items-center gap-1 text-sm font-medium transition-opacity hover:opacity-70"
          style={{ color: 'var(--accent)' }}
        >
          {l.label}
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-0.5"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      ))}
    </div>
  );
}

export function SectionHeading({ id, label, title }: { id: string; label: string; title: string }) {
  return (
    <div className="mb-10">
      <p
        className="mb-2 font-mono text-xs uppercase tracking-[0.18em]"
        style={{ color: 'var(--accent)' }}
      >
        {label}
      </p>
      <h2 id={id} className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

export function RoleCard({ role }: { role: Role }) {
  return (
    <article
      className="relative pb-10 pl-6 last:pb-0 sm:pl-8"
      style={{ borderLeft: '1px solid var(--line)' }}
    >
      <span
        className="absolute -left-[5px] top-1.5 size-[9px] rounded-full"
        style={{ background: 'var(--accent)' }}
        aria-hidden="true"
      />
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="text-lg font-semibold tracking-tight">{role.company}</h3>
        <span className="text-sm" style={{ color: 'var(--fg-soft)' }}>
          {role.title}
        </span>
      </div>
      <p className="mt-1 font-mono text-xs" style={{ color: 'var(--fg-faint)' }}>
        {role.period} · {role.location}
      </p>
      <p className="mt-3 text-[15px] leading-relaxed" style={{ color: 'var(--fg-soft)' }}>
        {role.blurb}
      </p>
      <ul className="mt-4 space-y-2">
        {role.highlights.map((h) => (
          <li key={h} className="flex gap-3 text-[15px] leading-relaxed">
            <span aria-hidden="true" style={{ color: 'var(--accent)' }}>
              —
            </span>
            <span style={{ color: 'var(--fg-soft)' }}>{h}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {role.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>
    </article>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const featured = project.featured === true;
  return (
    <article
      className={`flex flex-col rounded-xl border p-6 transition-shadow hover:shadow-[var(--shadow)] ${
        featured ? 'sm:col-span-2' : ''
      }`}
      style={{
        borderColor: featured ? 'var(--accent)' : 'var(--line)',
        background: 'var(--raised)',
      }}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        <span className="font-mono text-xs" style={{ color: 'var(--fg-faint)' }}>
          {project.period}
        </span>
      </div>
      <p className="mt-3 text-[15px] leading-relaxed" style={{ color: 'var(--fg-soft)' }}>
        {project.summary}
      </p>
      {project.detail && (
        <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--fg-faint)' }}>
          {project.detail}
        </p>
      )}
      <div className="mt-auto">
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
        <ProjectLinks links={project.links} />
      </div>
    </article>
  );
}

export function GameCard({ game }: { game: Project }) {
  return (
    <article
      className="flex flex-col overflow-hidden rounded-xl border transition-shadow hover:shadow-[var(--shadow)]"
      style={{ borderColor: 'var(--line)', background: 'var(--raised)' }}
    >
      {game.cover && (
        <picture>
          <source type="image/webp" srcSet={`${game.cover}.webp`} />
          <img
            src={`${game.cover}.jpg`}
            alt={game.title}
            width={320}
            height={180}
            loading="lazy"
            decoding="async"
            className="aspect-video w-full object-cover"
            draggable={false}
          />
        </picture>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3">
          <h3 className="text-base font-semibold tracking-tight">{game.title}</h3>
          <span className="font-mono text-xs" style={{ color: 'var(--fg-faint)' }}>
            {game.period}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--fg-soft)' }}>
          {game.summary}
        </p>
        <div className="mt-auto">
          <div className="mt-4 flex flex-wrap gap-1.5">
            {game.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
          <ProjectLinks links={game.links} />
        </div>
      </div>
    </article>
  );
}
