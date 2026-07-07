export default function FilmGrain() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 h-full w-full"
      style={{ opacity: 0.07, mixBlendMode: "overlay", zIndex: 100 }}
    >
      <filter id="in-grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#in-grain)" />
    </svg>
  );
}
