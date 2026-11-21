import { LOSSE_PRIJZEN } from '@/lib/data';

/** Overzicht van losse prijzen (excl. btw). Bedragen staan centraal in lib/data.ts. */
export function TariefTabel({ filter }: { filter?: 'website' | 'software' }) {
  const rijen = filter ? LOSSE_PRIJZEN.filter((r) => r.soort === filter || r.soort === 'beide') : LOSSE_PRIJZEN;
  return (
    <div style={{ display: 'grid', maxWidth: 920, background: '#fff', border: '1px solid var(--rule)', borderRadius: 16, overflow: 'hidden' }}>
      {rijen.map((r, i) => (
        <div
          key={r.wat}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            gap: 16,
            flexWrap: 'wrap',
            padding: '18px 24px',
            borderTop: i === 0 ? 'none' : '1px solid var(--rule)',
          }}
        >
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <div style={{ fontFamily: 'var(--cond)', fontWeight: 700, fontSize: 18, color: 'var(--ink)' }}>{r.wat}</div>
            <div style={{ fontSize: 14, color: 'var(--mute)', lineHeight: 1.5, marginTop: 4 }}>{r.uitleg}</div>
          </div>
          <div style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 19, color: 'var(--p1)', whiteSpace: 'nowrap' }}>{r.prijs}</div>
        </div>
      ))}
    </div>
  );
}
