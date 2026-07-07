import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Footer";
import SignalScan from "@/components/motion/SignalScan";
import TuneIn from "@/components/motion/TuneIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mateo. Airline pilot. Documenting one transformation in real time.",
};

export default function About() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24">
      <SignalScan className="text-center">
        <Eyebrow>THE OBSERVER</Eyebrow>
        <TuneIn as="h1" className="in-display text-3xl text-cloud md:text-4xl">
          ABOUT
        </TuneIn>
      </SignalScan>

      <SignalScan className="mt-16 space-y-8 text-sm leading-relaxed text-haze">
        <p>
          I am Mateo. I fly the Airbus A320 for a living. I document my own
          transformation for a reason.
        </p>
        <p>
          I built the life that was supposed to work. Licenses, uniform,
          altitude. It worked on paper. Underneath it, old programs ran the
          show. I decided to examine them on camera instead of after the fact.
        </p>
        <p>
          The Transmission Series is that examination. Ten episodes, recorded
          from inside the process. I take the observer position. I describe
          what was learned. I name my own patterns and leave everyone else out
          of the frame.
        </p>
        <p>
          Everything here is stated as it is: currently transforming, not
          already healed. The method is shadow work, subconscious
          reprogramming, and disciplined observation. The aviation is not a
          metaphor I chose. It is the life I was already living, so it became
          the language.
        </p>
        <p>
          If the work speaks to you, start with the series. It is the center
          of everything.
        </p>
      </SignalScan>

      <div className="mt-14 text-center">
        <Link href="/transmission" className="in-btn">
          WATCH TRANSMISSION
        </Link>
      </div>
    </section>
  );
}
