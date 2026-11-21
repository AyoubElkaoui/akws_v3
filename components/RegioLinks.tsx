import Link from 'next/link';
import { stadBySlug } from '@/lib/steden';
import { dienstSteden, type DienstLocatie } from '@/lib/dienst-steden';

/** Interne links van een dienstpagina naar de plaatspagina's van die dienst. */
export function RegioLinks({ dienst }: { dienst: DienstLocatie }) {
  return (
    <section className="section over" style={{ paddingTop: 40, paddingBottom: 40 }}>
      <div className="wrap">
        <span className="eyebrow">
          <span className="num">→</span>
          <span className="rule" /> In jouw regio
        </span>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 24 }}>
          {dienstSteden(dienst).map((slug) => {
            const s = stadBySlug(slug);
            if (!s) return null;
            return (
              <Link key={slug} href={`${dienst.base}/${slug}`} className="btn btn-ghost">
                {dienst.h1(s.naam)}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
