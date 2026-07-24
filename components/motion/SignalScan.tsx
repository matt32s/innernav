"use client";

import { Children, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

/**
 * Section reveal: on first viewport entry a 1px frequency line sweeps
 * top to bottom (~0.6s) while direct children fade + rise (y 16 -> 0)
 * staggered 80ms in its wake. Fires once per element.
 *
 * VISIBLE BY DEFAULT, hiding is the enhancement:
 * - server HTML and first client paint are fully visible (initial={false});
 *   no-JS, slow JS, and any hydration quirk all show content
 * - after mount, and only when motion is allowed and IntersectionObserver
 *   exists, sections not yet seen snap to hidden (duration 0, off-screen)
 *   and reveal when scrolled into view
 * - anything already in view when arming happens stays visible untouched
 * Reduced motion: never arms, everything stays in final state.
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
  const [armed, setArmed] = useState(false);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (reduced || typeof IntersectionObserver === "undefined") return;
    const el = ref.current;
    if (!el) return;
    // hand-rolled observer: deterministic, fires at mount for in-view
    // sections and on scroll for the rest, disconnects after first entry
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          setScanTo(el.offsetHeight);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    // arm one frame after paint so in-view sections report seen first
    const raf = requestAnimationFrame(() => setArmed(true));
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const show = !armed || seen;

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  };
  const item: Variants = {
    // snap: hiding must never be perceivable, it happens off-screen
    hidden: { opacity: 0, y: 16, transition: { duration: 0 } },
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
      initial={false}
      animate={show ? "visible" : "hidden"}
      variants={container}
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
