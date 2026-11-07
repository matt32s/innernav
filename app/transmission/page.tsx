import type { Metadata } from "next";
import EpisodeCard from "@/components/EpisodeCard";
import { Eyebrow } from "@/components/Footer";
import SignalScan from "@/components/motion/SignalScan";
import TuneIn from "@/components/motion/TuneIn";
import { episodes, publishedEpisodes } from "@/lib/content/episodes";

export const metadata: Metadata = {
  title: "Transmission",
  description:
    "The Transmission Series documents one man's transformation in real time.",
};

export default function TransmissionIndex() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <SignalScan className="text-center">
        <Eyebrow>THE MASTERPIECE</Eyebrow>
        <TuneIn as="h1" className="in-display text-3xl text-cloud md:text-4xl">
          TRANSMISSION SERIES
        </TuneIn>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-haze">
          {publishedEpisodes.length} transmissions released. The architecture of
          a transformation, recorded from inside it. Currently transforming. Not
          already healed.
        </p>
      </SignalScan>
      <SignalScan
        className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        itemClassName="h-full"
      >
        {episodes.map((e) => (
          <EpisodeCard key={e.slug} episode={e} />
        ))}
      </SignalScan>
    </section>
  );
}
