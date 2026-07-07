"use client";

import { useReducedMotion } from "motion/react";

/**
 * The one living element on every page: an amber indicator dot breathing
 * at 4s (scale 1 -> 1.25 -> 1, opacity 0.7 -> 1 -> 0.7). CSS keyframes
 * (.in-amber-pulse in globals.css); static under reduced motion, both here
 * and via the prefers-reduced-motion CSS block.
 * Amber Rule: indicator dots only. Never headlines, buttons, wordmarks.
 */
export default function AmberPulse({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <span
      aria-hidden="true"
      className={`inline-block h-1.5 w-1.5 rounded-full bg-signal ${
        reduced ? "" : "in-amber-pulse"
      } ${className}`.trim()}
    />
  );
}
