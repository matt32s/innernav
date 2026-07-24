"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const TAGS = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
} as const;

/**
 * Headline / eyebrow reveal: resolves from blur(8px) + 0.45em tracking +
 * opacity 0 to the sharp final state over 0.7s, once, on viewport entry.
 * The single sanctioned blur pass in the system.
 *
 * Same fail-safe architecture as SignalScan: server HTML and first paint
 * are the sharp final state; the hidden state is applied post-mount only
 * for not-yet-seen elements when motion is allowed. Nothing can be left
 * blurred or invisible by any storage/media/observer/JS condition.
 * `tracking` must match the element's CSS letter-spacing (0.25em for
 * .in-display and .in-label).
 */
export default function TuneIn({
  as = "h2",
  className,
  tracking = "0.25em",
  children,
}: {
  as?: keyof typeof TAGS;
  className?: string;
  tracking?: string;
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [armed, setArmed] = useState(false);
  const [seen, setSeen] = useState(false);
  const Tag = TAGS[as];

  useEffect(() => {
    if (reduced || typeof IntersectionObserver === "undefined") return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    const raf = requestAnimationFrame(() => setArmed(true));
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const show = !armed || seen;
  const final = { opacity: 1, filter: "blur(0px)", letterSpacing: tracking };
  const hidden = {
    opacity: 0,
    filter: "blur(8px)",
    letterSpacing: "0.45em",
  };

  return (
    <Tag
      // one ref serves every tag in the union; the DOM node is only read
      ref={ref as never}
      className={className}
      initial={false}
      animate={show ? final : hidden}
      transition={show ? { duration: 0.7, ease: "easeOut" } : { duration: 0 }}
    >
      {children}
    </Tag>
  );
}
