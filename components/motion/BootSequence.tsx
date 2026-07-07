"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const FLAG = "inav-boot";
const TITLE = "INNER NAVIGATION";

/**
 * Once-per-session boot overlay (~2s, then lifts).
 * Hydration-safe: renders nothing on the server and on first client paint;
 * mounts only after the sessionStorage check inside useEffect.
 * Reduced motion skips the sequence entirely. Flag is set on completion.
 */
export default function BootSequence() {
  const reduced = useReducedMotion();
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (reduced) return;
    try {
      if (sessionStorage.getItem(FLAG)) return;
    } catch {
      return;
    }
    // next frame, not sync in the effect body (react-hooks/set-state-in-effect)
    const raf = requestAnimationFrame(() => setPlay(true));
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  if (!play) return null;

  const finish = () => {
    try {
      sessionStorage.setItem(FLAG, "1");
    } catch {
      /* storage unavailable: boot simply replays next load */
    }
    setPlay(false);
  };

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[200] flex items-center justify-center bg-ink"
      initial={{ y: "0%" }}
      animate={{ y: "-100%" }}
      transition={{ delay: 2.15, duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
      onAnimationComplete={finish}
    >
      {/* grain fades in */}
      <motion.svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ mixBlendMode: "overlay" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.07 }}
        transition={{ duration: 0.35 }}
      >
        <filter id="in-boot-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#in-boot-grain)" />
      </motion.svg>

      <div className="relative flex flex-col items-center">
        <div className="relative flex h-6 w-64 items-center justify-center">
          {/* single amber dot pulses center */}
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-signal"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 1, 0.7, 1], scale: [0.6, 1, 1.25, 1] }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeInOut" }}
          />
          {/* thin frequency line sweeps horizontally through the dot */}
          <motion.span
            className="absolute h-px w-64"
            style={{
              background:
                "linear-gradient(to right, rgba(45,156,140,0), rgba(45,156,140,0.9), rgba(45,156,140,0))",
            }}
            initial={{ x: -160, opacity: 0 }}
            animate={{ x: 160, opacity: [0, 1, 1, 0] }}
            transition={{ delay: 0.85, duration: 0.55, ease: "easeInOut" }}
          />
        </div>

        {/* wordmark resolves letter by letter, tracking settles wide to final */}
        <motion.p
          className="in-display mt-6 text-lg text-cloud sm:text-2xl"
          initial={{ letterSpacing: "0.45em" }}
          animate={{ letterSpacing: "0.25em" }}
          transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
        >
          {TITLE.split("").map((ch, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 + i * 0.035, duration: 0.18 }}
            >
              {ch === " " ? " " : ch}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </motion.div>
  );
}
