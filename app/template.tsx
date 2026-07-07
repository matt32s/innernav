"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * VHS route transition. template.tsx re-mounts per navigation, so the
 * glitch plays on every route entry: ~240ms of horizontal jitter on the
 * page, two ghost tint flashes (frequency / signal, screen-blended, offset
 * +/-3px: the RGB split using only our tokens), and a grain spike
 * 0.07 -> ~0.18 -> 0.07. Entry-only; App Router exit animations are
 * unreliable and we do not fight it. Reduced motion: clean mount.
 */
export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    if (reduced) return;
    // next frame, not sync in the effect body (react-hooks/set-state-in-effect)
    const raf = requestAnimationFrame(() => setGlitch(true));
    const t = setTimeout(() => setGlitch(false), 240);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, [reduced]);

  return (
    <>
      <motion.div
        animate={glitch ? { x: [0, 3, -3, 1, 0] } : { x: 0 }}
        transition={{ duration: 0.18, ease: "linear" }}
      >
        {children}
      </motion.div>

      {glitch && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[90]"
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: "var(--color-frequency)",
              mixBlendMode: "screen",
            }}
            initial={{ opacity: 0, x: -3 }}
            animate={{ opacity: [0, 0.05, 0], x: [-3, -3, 0] }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="absolute inset-0"
            style={{
              background: "var(--color-signal)",
              mixBlendMode: "screen",
            }}
            initial={{ opacity: 0, x: 3 }}
            animate={{ opacity: [0, 0.04, 0], x: [3, 3, 0] }}
            transition={{ duration: 0.2 }}
          />
          {/* grain spike: adds ~0.11 atop the base 0.07 FilmGrain */}
          <motion.svg
            className="absolute inset-0 h-full w-full"
            style={{ mixBlendMode: "overlay" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.11, 0] }}
            transition={{ duration: 0.2 }}
          >
            <filter id="in-glitch-grain">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#in-glitch-grain)" />
          </motion.svg>
        </div>
      )}
    </>
  );
}
