import type { Project } from '@/lib/data';

export default function Card({ item }: { item: Project }) {
  return (
    <article
      className="mb-4 flex w-full break-inside-avoid flex-col overflow-hidden rounded-lg transition-colors"
      style={{ background: 'var(--card)' }}
    >
      {item.cover && (
        <div className="relative">
          <picture>
            <source type="image/webp" srcSet={`${item.cover}.webp`} />
            <img
              src={`${item.cover}.jpg`}
              alt={item.title}
              width={640}
              height={360}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="block aspect-video w-full object-cover"
            />
          </picture>
          <span
            className="absolute right-0 top-0 rounded-bl px-1.5 py-0.5 text-xs"
            style={{ background: 'var(--badge)', color: 'var(--badge-ink)' }}
          >
            {item.period}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-baseline justify-between gap-2">
          <h3>{item.title}</h3>
          {!item.cover && (
            <span className="shrink-0 text-xs" style={{ color: 'var(--ink-faint)' }}>
              {item.period}
            </span>
          )}
        </div>

        <p className="text-sm" style={{ color: 'var(--ink-soft)' }}>
          {item.summary}
        </p>

        <div className="mt-auto">
          <p className="mb-0 text-xs" style={{ color: 'var(--ink-faint)' }}>
            {item.stack.join(', ')}
          </p>

          {item.links.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {item.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
