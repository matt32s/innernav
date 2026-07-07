"use client";

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
 * Like a signal tuning in. The single sanctioned blur pass in the system.
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
  const Tag = TAGS[as];
  const final = { opacity: 1, filter: "blur(0px)", letterSpacing: tracking };

  return (
    <Tag
      className={className}
      initial={
        reduced
          ? final
          : { opacity: 0, filter: "blur(8px)", letterSpacing: "0.45em" }
      }
      whileInView={final}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </Tag>
  );
}
