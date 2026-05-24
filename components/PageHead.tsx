import Link from 'next/link';

type Crumb = { href?: string; label: string };

export function PageHead({
  crumbs,
  chip,
  title,
  subtitle,
  children,
}: {
  crumbs: Crumb[];
  chip?: string;
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-head">
      <div className="wrap">
        <div className="page-crumbs">
          {crumbs.map((c, i) => (
            <span key={i} style={{ display: 'contents' }}>
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
              {i < crumbs.length - 1 && <span className="sep">/</span>}
            </span>
          ))}
        </div>
        {chip && <span className="chip chip-purple">● {chip}</span>}
        <h1>
          {title}
          {subtitle && <em>{subtitle}</em>}
        </h1>
        {children}
      </div>
    </section>
  );
}
