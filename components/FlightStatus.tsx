import AmberPulse from "@/components/motion/AmberPulse";

/**
 * Departure-board status badge: breathing amber dot + uppercase label.
 * Amber Rule: the dot is the only amber. Text stays haze.
 */
export default function FlightStatus({
  status,
  detail,
  className = "",
}: {
  status: string;
  detail?: string;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`.trim()}>
      <AmberPulse />
      <span className="in-label text-haze">
        {status}
        {detail ? ` · ${detail}` : ""}
      </span>
    </span>
  );
}
