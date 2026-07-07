import type { Metadata } from "next";
import EpisodeCard from "@/components/EpisodeCard";
import { Eyebrow } from "@/components/Footer";
import { episodes } from "@/lib/content/episodes";

export const metadata: Metadata = {
  title: "Transmission",
  description:
    "The Transmission Series. Ten episodes documenting one man's transformation in real time.",
};

export default function TransmissionIndex() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <div className="text-center">
        <Eyebrow>THE MASTERPIECE</Eyebrow>
        <h1 className="in-display text-3xl text-cloud md:text-4xl">
          TRANSMISSION SERIES
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-haze">
          Ten transmissions. The complete architecture of a transformation,
          recorded from inside it. Currently transforming. Not already healed.
        </p>
      </div>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {episodes.map((e) => (
          <EpisodeCard key={e.slug} episode={e} />
        ))}
      </div>
    </section>
  );
}
