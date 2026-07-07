"use client";

import { Children, useRef, useState } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

/**
 * Section reveal: on first viewport entry a 1px frequency line sweeps
 * top to bottom (~0.6s) while direct children fade + rise (y 16 -> 0)
 * staggered 80ms in its wake. Fires once per element.
 * Reduced motion: children render in final state instantly, no line.
 *
 * Pass grid classes via className to stagger grid items directly;
 * itemClassName (e.g. "h-full") styles the per-child wrappers.
 */
export default function SignalScan({
  children,
  className = "",
  itemClassName = "",
}: {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [scanTo, setScanTo] = useState(0);

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  };
  const item: Variants = {
    hidden: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`.trim()}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      onViewportEnter={() => {
        if (!reduced && ref.current) setScanTo(ref.current.offsetHeight);
      }}
    >
      {/* scan line: mounted client-side only, after first viewport entry */}
      {scanTo > 0 && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-frequency"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: scanTo, opacity: [0, 0.6, 0.6, 0] }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      )}
      {Children.map(children, (child) =>
        child == null || typeof child === "boolean" ? (
          child
        ) : (
          <motion.div className={itemClassName || undefined} variants={item}>
            {child}
          </motion.div>
        ),
      )}
    </motion.div>
  );
}
