import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { PageHead } from '@/components/PageHead';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Praktische artikelen voor installatiebedrijven — over websites, software, marketing en wat we onderweg leerden.',
};

export default function BlogPage() {
  const featured = BLOG_POSTS.find((p) => p.featured);
  const rest = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <>
      <SiteNav active="/blog" />

      <PageHead
        crumbs={[
          { href: '/', label: 'Home' },
          { label: 'Blog' },
        ]}
        chip={`${BLOG_POSTS.length} artikelen · bijgewerkt wekelijks`}
        title="Het kennisblok."
        subtitle="Praktische artikelen voor installatiebedrijven — over websites, software, marketing en wat we onderweg leerden."
      />

      {/* Featured */}
      {featured && (
        <section className="blog-bg">
          <div className="wrap">
            <div className="blog-feature">
              <Link
                href={`/blog/${featured.slug}`}
                className="card"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1fr',
                  gap: 0,
                  background: '#fff',
                  borderRadius: 20,
                  overflow: 'hidden',
                  border: '1px solid var(--rule)',
                  boxShadow: '0 30px 60px -40px rgba(20,16,28,.15)',
                }}
              >
                <div
                  className="img"
                  style={{
                    backgroundImage: `repeating-linear-gradient(135deg, rgba(0,0,0,.05) 0, rgba(0,0,0,.05) 1px, transparent 1px, transparent 14px), ${featured.gradient}`,
                    minHeight: 480,
                    position: 'relative',
                  }}
                >
                  <div style={{ position: 'absolute', left: 32, top: 32, display: 'flex', gap: 8 }}>
                    <span className="chip chip-dark">★ Uitgelicht</span>
                    <span className="chip chip-dark">{featured.cat}</span>
                  </div>
                  <div style={{ position: 'absolute', left: 32, bottom: 32, right: 32 }}>
                    <div
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: 11,
                        color: 'rgba(255,255,255,.6)',
                        letterSpacing: '.1em',
                        textTransform: 'uppercase',
                        marginBottom: 14,
                      }}
                    >
                      ↳ leestijd · {featured.readMin} min
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--cond)',
                        fontSize: 80,
                        lineHeight: 0.9,
                        fontWeight: 900,
                        color: '#fff',
                        textTransform: 'uppercase',
                        letterSpacing: '-.02em',
                      }}
                    >
                      10
                      <br />
                      <span
                        style={{
                          fontSize: '.3em',
                          letterSpacing: '.06em',
                          fontWeight: 500,
                        }}
                      >
                        seconden
                      </span>
                    </div>
                  </div>
                </div>
                <div className="body">
                  <div className="meta">
                    <span style={{ color: 'var(--p1)', fontWeight: 600 }}>{featured.cat}</span>
                    <span style={{ opacity: 0.4 }}>·</span>
                    <span>{featured.date}</span>
                    <span style={{ opacity: 0.4 }}>·</span>
                    <span>{featured.readMin} min lezen</span>
                  </div>
                  <h2>{featured.titel}</h2>
                  <p className="excerpt">{featured.excerpt}</p>
                  <div className="author">
                    <div className="avatar">{featured.authorAv}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>{featured.author}</div>
                      <div style={{ fontSize: 12, color: 'var(--mute)' }}>Oprichter, AKWS</div>
                    </div>
                    <div
                      style={{
                        marginLeft: 'auto',
                        fontFamily: 'var(--mono)',
                        fontSize: 11,
                        color: 'var(--p1)',
                        letterSpacing: '.06em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Lees verder →
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Filter */}
            <div className="blog-filter">
              {BLOG_CATEGORIES.map((c, i) => (
                <span key={c} className={`filt${i === 0 ? ' active' : ''}`}>
                  {c}
                </span>
              ))}
              <span className="count">{rest.length} artikelen</span>
            </div>

            {/* Posts grid */}
            <div className="posts">
              {rest.map((p) => (
                <Link href={`/blog/${p.slug}`} className="post" key={p.slug}>
                  <div
                    className="img"
                    style={
                      p.cover
                        ? {
                            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.05) 0%, rgba(0,0,0,.4) 100%), url(${p.cover})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }
                        : { backgroundImage: p.gradient }
                    }
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
                      <span style={{ color: 'var(--mute)' }}>{p.author.split(' ')[0]} {p.author.split(' ')[1]?.[0]}.</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </>
  );
}
