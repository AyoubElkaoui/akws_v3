import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Cta } from '@/components/Cta';
import { TocClient } from '@/components/TocClient';
import { BLOG_POSTS, type BlogBlock } from '@/lib/data';

type Params = { slug: string };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

// Posts die noindex krijgen omdat de content nog dunner is dan 600 woorden
// TODO: Ayoub — breid deze posts uit of vervang ze door betere content
const NOINDEX_SLUGS = new Set([
  'ad-loodgieter-meer-aanvragen-google-ads',
  '5-fouten-op-installateur-websites',
  'snelstart-koppelen-met-werkbon-app',
  'google-ads-installateur-beginnen',
  'avg-voor-installateurs',
  'geen-uurtjes-factuurtjes',
]);

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.titel,
    description: post.excerpt,
    robots: NOINDEX_SLUGS.has(slug) ? { index: false, follow: false } : { index: true, follow: true },
  };
}

// Render markdown-lite: **bold** → <strong>
function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith('**') && p.endsWith('**') ? <strong key={i}>{p.slice(2, -2)}</strong> : p,
  );
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.kind) {
    case 'p':
      return <p>{renderInline(block.text)}</p>;
    case 'h2':
      return <h2 id={block.id}>{block.text}</h2>;
    case 'h3':
      return <h3>{block.text}</h3>;
    case 'ul':
      return (
        <ul>
          {block.items.map((it, i) => (
            <li key={i}>{renderInline(it)}</li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol>
          {block.items.map((it, i) => (
            <li key={i}>{renderInline(it)}</li>
          ))}
        </ol>
      );
    case 'quote':
      return (
        <blockquote>
          {block.text}
          <span className="cite">— {block.cite}</span>
        </blockquote>
      );
    case 'figure':
      return (
        <figure>
          <div className="ph">{block.label}</div>
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
    case 'callout':
      return (
        <div className="callout">
          <div className="ico">{block.ico}</div>
          <div>
            <div className="t">{block.titel}</div>
            <p>{block.body}</p>
          </div>
        </div>
      );
  }
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const headings = (post.content ?? []).filter(
    (b): b is Extract<BlogBlock, { kind: 'h2' }> => b.kind === 'h2',
  );
  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <SiteNav active="/blog" />

      {/* Article hero */}
      <section className="article-hero">
        <div className="wrap-narrow">
          <div className="page-crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/blog">Blog</Link>
            <span className="sep">/</span>
            <span>{post.cat}</span>
          </div>
          <div className="meta" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            fontFamily: 'var(--mono)',
            fontSize: 11,
            color: 'var(--mute)',
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}>
            <span style={{ color: 'var(--p1)', fontWeight: 600 }}>{post.cat}</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>{post.date}</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>{post.readMin} min lezen</span>
          </div>
          <h1>{post.titel}</h1>
          <p className="deck">{post.excerpt}</p>

          <div className="author-row">
            <div className="ar">
              <div className="avatar">{post.authorAv}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{post.author}</div>
                <div style={{ fontSize: 12, color: 'var(--mute)' }}>Oprichter, AKWS</div>
              </div>
            </div>
            <div className="meta-extra">
              <span>↳ Deel:</span>
              <a href="#">LinkedIn</a>
              <a href="#">Mail</a>
              <a href="#">X</a>
            </div>
          </div>
        </div>
      </section>

      {/* Cover */}
      <div className="wrap article-cover">
        <div
          className="article-cover-img"
          style={{
            backgroundImage: `repeating-linear-gradient(135deg, rgba(0,0,0,.05) 0, rgba(0,0,0,.05) 1px, transparent 1px, transparent 14px), ${post.gradient}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(255,255,255,.55)',
            fontFamily: 'var(--mono)',
            fontSize: 12,
            letterSpacing: '.1em',
            textTransform: 'uppercase',
          }}
        >
          foto · cover voor {post.cat.toLowerCase()}
        </div>
      </div>

      {/* Article body */}
      <section className="article">
        <div className="wrap">
          <div className="article-layout">
            <TocClient headings={headings.map((h) => ({ id: h.id ?? '', text: h.text }))} />

            <article className="article-body">
              {(post.content ?? []).map((block, i) => (
                <Block block={block} key={i} />
              ))}
            </article>

            <aside className="article-share">
              <div className="lbl">Deel artikel</div>
              <a href="#">
                <span style={{ fontSize: 14 }}>in</span> LinkedIn
              </a>
              <a href="#">
                <span style={{ fontSize: 14 }}>𝕏</span> X / Twitter
              </a>
              <a href="#">
                <span style={{ fontSize: 14 }}>✉</span> E-mail
              </a>
              <a href="#">
                <span style={{ fontSize: 14 }}>⌘</span> Kopieer link
              </a>
            </aside>
          </div>

          {/* Author bio */}
          <div className="author-bio">
            <div className="av">{post.authorAv}</div>
            <div>
              <div className="lbl">Geschreven door</div>
              <div className="n">{post.author}</div>
              <p>
                Oprichter van AKWS. Twaalf jaar in de installatiebranche. Bouwt software die monteurs daadwerkelijk gebruiken.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn btn-purple"
              style={{ padding: '12px 18px', fontSize: 13 }}
            >
              Plan gesprek <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="related">
        <div className="wrap">
          <div className="related-head">
            <h2>Verder lezen.</h2>
            <Link href="/blog" className="btn btn-ghost" style={{ padding: '12px 18px', fontSize: 13 }}>
              Alle artikelen →
            </Link>
          </div>
          <div className="related-grid">
            {related.map((p) => (
              <Link href={`/blog/${p.slug}`} className="post" key={p.slug}>
                <div
                  className="img"
                  style={{
                    height: 200,
                    backgroundImage: p.gradient,
                    position: 'relative',
                  }}
                >
                  <span className="cat chip chip-dark">{p.cat}</span>
                </div>
                <div className="body">
                  <div className="meta">
                    {p.date} · {p.readMin} min
                  </div>
                  <h3>{p.titel}</h3>
                  <p className="excerpt">{p.excerpt}</p>
                  <div className="read">
                    <span>Lees →</span>
                    <span style={{ color: 'var(--mute)' }}>{p.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Cta
        eyebrow="Klaar voor de volgende stap?"
        title="Plan een gesprek."
        subtitle="30 minuten · vrijblijvend"
      />

      <SiteFooter />
    </>
  );
}
