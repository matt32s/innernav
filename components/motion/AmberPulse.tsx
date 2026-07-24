/**
 * The one living element on every page: an amber indicator dot breathing
 * at 4s (scale 1 -> 1.25 -> 1, opacity 0.7 -> 1 -> 0.7).
 * Pure CSS (.in-amber-pulse in globals.css); the prefers-reduced-motion
 * block sets animation: none, which is hydration-safe (identical markup on
 * server and client, the media query does the guarding).
 * Amber Rule: indicator dots only. Never headlines, buttons, wordmarks.
 */
export default function AmberPulse({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`in-amber-pulse inline-block h-1.5 w-1.5 rounded-full bg-signal ${className}`.trim()}
    />
  );
}
