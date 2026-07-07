"use client";

import { motion, useReducedMotion } from "motion/react";

/* horizon -> frequency -> lift, fading out at both ends so the tile loops clean */
const WAVE =
  "linear-gradient(to bottom, rgba(20,48,44,0) 0%, rgba(20,48,44,0.85) 20%, rgba(45,156,140,0.8) 42%, rgba(111,168,201,0.7) 58%, rgba(20,48,44,0.85) 80%, rgba(20,48,44,0) 100%)";

/**
 * Slow vertical gradient wave behind the home hero text only.
 * Oversized layer (200% tall, tile = 50%) drifts upward via translateY,
 * so -50% is exactly one period and the 12s loop is seamless.
 * Decorative: pointer-events-none, opacity 0.15, transform-only.
 */
export default function FrequencyWave() {
  const reduced = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ opacity: 0.15 }}
    >
      <motion.div
        className="absolute inset-x-0 top-0"
        style={{
          height: "200%",
          backgroundImage: WAVE,
          backgroundSize: "100% 50%",
          backgroundRepeat: "repeat-y",
        }}
        animate={reduced ? undefined : { y: ["0%", "-50%"] }}
        transition={{ duration: 12, ease: "linear", repeat: Infinity }}
      />
    </div>
  );
}
