'use client';

import { useState } from 'react';

type Props = {
  src: string;
  alt: string;
  caption?: string;
  style?: React.CSSProperties;
};

export function ImageLightbox({ src, alt, caption, style }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <figure style={{ margin: 0, cursor: 'zoom-in' }} onClick={() => setOpen(true)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} style={style} loading="lazy" />
        {caption && (
          <figcaption style={{
            marginTop: 10,
            fontFamily: 'var(--mono)',
            fontSize: 10,
            color: 'var(--mute)',
            letterSpacing: '.1em',
            textTransform: 'uppercase',
          }}>
            {caption} <span style={{ color: 'var(--p1)', marginLeft: 8 }}>klik voor groot ↗</span>
          </figcaption>
        )}
      </figure>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(10,6,28,.92)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            cursor: 'zoom-out',
          }}
        >
          <button
            onClick={() => setOpen(false)}
            style={{
              position: 'absolute',
              top: 20,
              right: 24,
              background: 'rgba(255,255,255,.1)',
              border: 'none',
              color: '#fff',
              fontFamily: 'var(--mono)',
              fontSize: 13,
              padding: '8px 14px',
              borderRadius: 8,
              cursor: 'pointer',
              letterSpacing: '.06em',
            }}
          >
            Sluiten ✕
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '100%',
              maxHeight: '90vh',
              borderRadius: 10,
              boxShadow: '0 30px 80px rgba(0,0,0,.6)',
              objectFit: 'contain',
            }}
          />
        </div>
      )}
    </>
  );
}
