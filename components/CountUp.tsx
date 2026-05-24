'use client';

import { useEffect, useRef, useState } from 'react';

type Props = { value: string; className?: string };

// Pakt het numerieke deel uit een string zoals "50+", "4 wkn", "5.0/5", "24 uur"
function parseNum(val: string): { prefix: string; num: number; suffix: string } | null {
  const m = val.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!m) return null;
  return { prefix: m[1], num: parseFloat(m[2]), suffix: m[3] };
}

export function CountUp({ value, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parsed = parseNum(value);
    if (!parsed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const { prefix, num, suffix } = parsed;
          const duration = 1400;
          const steps = 40;
          const stepVal = num / steps;
          let current = 0;
          const interval = setInterval(() => {
            current = Math.min(current + stepVal, num);
            const display = Number.isInteger(num)
              ? Math.round(current).toString()
              : current.toFixed(1);
            setDisplay(prefix + display + suffix);
            if (current >= num) clearInterval(interval);
          }, duration / steps);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className={className}>
      {display}
    </div>
  );
}
