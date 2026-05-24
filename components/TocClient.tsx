'use client';

import { useEffect, useState } from 'react';

type Heading = { id: string; text: string };

export function TocClient({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>(headings[0]?.id ?? '');

  useEffect(() => {
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Neem het eerste heading dat visible is
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-80px 0px -70% 0px',
        threshold: 0,
      },
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <aside className="toc">
      <div className="toc-label">In dit artikel</div>
      {headings.map((h, i) => (
        <a
          key={h.id}
          href={`#${h.id}`}
          className={activeId === h.id ? 'active' : undefined}
        >
          {String(i + 1).padStart(2, '0')} · {h.text}
        </a>
      ))}
    </aside>
  );
}
