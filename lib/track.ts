// Stuurt een gebeurtenis naar Plausible. Doet niets als het script geblokkeerd
// is of nog niet geladen: meten mag nooit een formulier of klik breken.
type Props = Record<string, string>;

export function track(event: string, props?: Props) {
  if (typeof window === 'undefined') return;
  const w = window as unknown as { plausible?: (e: string, o?: { props?: Props }) => void };
  try {
    w.plausible?.(event, props ? { props } : undefined);
  } catch {
    // bewust genegeerd
  }
}
