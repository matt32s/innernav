"use client";

import { useEffect, useId, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Dead-signal interference for "incoming" transmissions only: barely
 * visible static at ~0.05 opacity, 2s flicker loop (.in-static-shimmer
 * keyframes in globals.css). Live episodes stay perfectly still.
 * Client-only mount (null on server and first paint) so server and client
 * markup always match; reduced motion mounts nothing.
 */
export default function StaticShimmer() {
  const reduced = useReducedMotion();
  const [on, setOn] = useState(false);
  const id = `in-static-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;

  useEffect(() => {
    if (reduced) return;
    const raf = requestAnimationFrame(() => setOn(true));
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  if (!on || reduced) return null;

  return (
    <svg
      aria-hidden="true"
      className="in-static-shimmer pointer-events-none absolute inset-0 h-full w-full"
      style={{ mixBlendMode: "screen", opacity: 0.05 }}
    >
      <filter id={id}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves="2"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${id})`} />
    </svg>
  );
}
