import Link from "next/link";
import type { Episode } from "@/lib/content/episodes";

/* Banner thumbnail: pure design-system atmosphere until real stills are added.
   Callsign strip bottom-left per editorial rule. */
export function EpisodeBanner({
  episode,
  tall = false,
}: {
  episode: Episode;
  tall?: boolean;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden ${tall ? "aspect-[21/9]" : "aspect-video"}`}
      style={{
        background:
          "radial-gradient(120% 90% at 70% 0%, rgba(20,48,44,.9) 0%, rgba(7,15,13,1) 70%)",
      }}
      aria-hidden="true"
    >
      <span className="absolute right-4 top-4 text-5xl font-extralight text-frequency/25">
        {episode.numeral}
      </span>
      <span
        className="in-label absolute bottom-3 left-4 text-cloud"
        style={{ opacity: 0.7 }}
      >
        FL370 · EP.{String(episode.number).padStart(2, "0")}
      </span>
      {episode.status === "incoming" && (
        <span className="in-label absolute bottom-3 right-4 text-haze/70">
          INCOMING
        </span>
      )}
    </div>
  );
}

export default function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <Link
      href={`/transmission/${episode.slug}`}
      className="in-card block overflow-hidden"
    >
      <EpisodeBanner episode={episode} />
      <div className="p-6">
        <p className="in-label text-lift">
          EPISODE {episode.numeral}
          {episode.status === "incoming" ? " · INCOMING" : ""}
        </p>
        <h3 className="mt-3 text-xl font-extralight tracking-wide text-cloud">
          {episode.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-haze">{episode.hook}</p>
      </div>
    </Link>
  );
}
