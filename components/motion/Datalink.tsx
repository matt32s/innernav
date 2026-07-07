"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Datalink type-in: characters resolve at ~30ms each, once, followed by a
 * frequency cursor block that blinks twice (.in-cursor-blink) and vanishes.
 * Two surfaces only by design: the episode-page eyebrow and the RewireForm
 * success state. Server renders the full text (SEO, no-JS); screen readers
 * get the complete string via sr-only. Reduced motion: full text instantly.
 */
export default function Datalink({
  text,
  className = "",
  speed = 30,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const reduced = useReducedMotion();
  const [count, setCount] = useState(text.length);
  const [cursor, setCursor] = useState<"typing" | "blink" | "off">("off");
  // reduced motion renders the full text without touching state
  const shownCount = reduced ? text.length : count;
  const shownCursor = reduced ? "off" : cursor;

  useEffect(() => {
    if (reduced) return;
    let interval: ReturnType<typeof setInterval> | undefined;
    let i = 0;
    // kick off async, not sync in the effect body (react-hooks/set-state-in-effect)
    const start = setTimeout(() => {
      setCount(0);
      setCursor("typing");
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) {
          clearInterval(interval);
          setCursor("blink");
        }
      }, speed);
    }, 0);
    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, [reduced, text, speed]);

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.slice(0, shownCount)}
        {shownCursor !== "off" && (
          <span
            className={`ml-1 inline-block h-[0.9em] w-[0.55em] translate-y-[0.12em] bg-frequency ${
              shownCursor === "blink" ? "in-cursor-blink" : ""
            }`.trim()}
            onAnimationEnd={() => setCursor("off")}
          />
        )}
      </span>
    </span>
  );
}
