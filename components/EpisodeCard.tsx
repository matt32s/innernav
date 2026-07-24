import Link from "next/link";
import Image from "next/image";
import type { Episode } from "@/lib/content/episodes";
import StaticShimmer from "@/components/motion/StaticShimmer";

/* Banner: real still when episode.thumb exists, atmospheric gradient
   otherwise. The art has baked-in typography, so with a thumb the slot is
   always 16:9 (native fit, no crop); 21/9 tall exists only for the
   no-thumb atmospheric state. Numeral appears only without a thumb (the
   art carries its own title block). Incoming keeps the dead-signal
   shimmer ON TOP of the art: the transmission exists, no signal yet. */
export function EpisodeBanner({
  episode,
  tall = false,
}: {
  episode: Episode;
  tall?: boolean;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden ${tall && !episode.thumb ? "aspect-[21/9]" : "aspect-video"}`}
      style={{
        background:
          "radial-gradient(120% 90% at 70% 0%, rgba(20,48,44,.9) 0%, rgba(7,15,13,1) 70%)",
      }}
      aria-hidden="true"
    >
      {episode.thumb && (
        <>
          <Image
            src={episode.thumb}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
          />
          {/* ink scrims: bottom-left for the callsign, top-right for the numeral */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(7,15,13,0.65) 0%, rgba(7,15,13,0) 38%), linear-gradient(to bottom left, rgba(7,15,13,0.55) 0%, rgba(7,15,13,0) 42%)",
            }}
          />
        </>
      )}
      {!episode.thumb && (
        <span className="in-episode-numeral absolute right-4 top-4 text-5xl font-extralight text-frequency/25">
          {episode.numeral}
        </span>
      )}
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
      {/* dead signal: incoming transmissions have no signal yet */}
      {episode.status === "incoming" && <StaticShimmer />}
    </div>
  );
}

export default function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <Link
      href={`/transmission/${episode.slug}`}
      className="in-card in-episode-card block h-full overflow-hidden"
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
