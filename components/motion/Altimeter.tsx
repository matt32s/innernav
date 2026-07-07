"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

const MAX_FL = 370;
const TRACK = 192; // px

/**
 * Fixed right-edge flight-level tape: the site's scroll progress bar in
 * the pilot's language. FL000 at page top, FL370 at page bottom.
 * Desktop only (hidden below lg). rAF-throttled; position is scroll-linked
 * (user-driven, not time-based), so it stays functional under reduced
 * motion; only the 80ms smoothing transition is dropped there.
 */
export default function Altimeter() {
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const raf = useRef(0);

  useEffect(() => {
    const update = () => {
      raf.current = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    const onScroll = () => {
      if (!raf.current) raf.current = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  const label = `FL${String(Math.round(progress * MAX_FL)).padStart(3, "0")}`;

  return (
    <div
      aria-hidden="true"
      className="fixed right-3 top-1/2 z-40 hidden w-12 -translate-y-1/2 select-none justify-end lg:flex"
    >
      <div className="relative" style={{ height: TRACK }}>
        {/* tape */}
        <div className="absolute right-0 top-0 h-full w-px bg-haze/20" />
        {[0, 0.25, 0.5, 0.75, 1].map((t) => (
          <div
            key={t}
            className="absolute right-0 h-px w-1.5 bg-haze/30"
            style={{ top: t * (TRACK - 1) }}
          />
        ))}
        {/* current tick + readout, transform-only movement */}
        <div
          className="absolute right-0 top-0 flex items-center gap-1.5"
          style={{
            transform: `translateY(calc(${progress * TRACK}px - 50%))`,
            transition: reduced ? undefined : "transform 80ms linear",
          }}
        >
          <span
            className="text-haze/60"
            style={{
              fontSize: "0.5625rem",
              letterSpacing: "0.15em",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {label}
          </span>
          <span className="block h-px w-3 bg-frequency" />
        </div>
      </div>
    </div>
  );
}
