import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'AK Web Solutions — Websites & software voor installateurs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f0a1e 0%, #1a0f33 50%, #4c1d95 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: 'linear-gradient(135deg, #a855f7, #4c1d95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 800,
              fontSize: 20,
            }}
          >
            AK
          </div>
          <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, letterSpacing: 2 }}>
            AKWEBSOLUTIONS.NL
          </span>
        </div>

        {/* Main */}
        <div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 22, marginBottom: 24, letterSpacing: 3 }}>
            VOOR INSTALLATIEBEDRIJVEN IN MIDDEN-NEDERLAND
          </div>
          <div
            style={{
              color: '#fff',
              fontSize: 80,
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: -2,
              textTransform: 'uppercase',
            }}
          >
            Websites &
            <br />
            Software voor
            <br />
            <span style={{ color: '#a855f7' }}>installateurs.</span>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 18 }}>
            Ayoub Elkaoui — Freelance webdeveloper, Baarn
          </div>
          <div
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: 10,
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            Plan strategiegesprek
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
