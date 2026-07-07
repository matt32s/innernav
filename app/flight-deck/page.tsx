import type { Metadata } from "next";
import { Eyebrow } from "@/components/Footer";
import { SOCIALS } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Flight Deck",
  description:
    "Aviation, cockpit life, circadian discipline, and the daily process. Short-form transmissions.",
};

const CARDS = [
  {
    label: "COCKPIT",
    title: "Aviation Reels",
    text: "Flight decks, sunrises at altitude, the machine that funds the mission.",
    href: SOCIALS.instagram.url,
    surface: "INSTAGRAM",
  },
  {
    label: "THE BODY CLOCK",
    title: "Circadian & Sleep",
    text: "Sleep as infrastructure. Night duty recovery, timezone discipline, the pilot's protocol.",
    href: SOCIALS.instagram.url,
    surface: "INSTAGRAM",
  },
  {
    label: "SHORT TRANSMISSIONS",
    title: "Series Shorts",
    text: "Cuts from the Transmission Series. The signal, condensed.",
    href: SOCIALS.youtube.url,
    surface: "YOUTUBE",
  },
  {
    label: "THE PROCESS",
    title: "Daily Life",
    text: "Nha Trang mornings, training, layovers, the build between flights.",
    href: SOCIALS.instagram.url,
    surface: "INSTAGRAM",
  },
];

export default function FlightDeck() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <div className="text-center">
        <Eyebrow>AVIATION · LIFESTYLE</Eyebrow>
        <h1 className="in-display text-3xl text-cloud md:text-4xl">
          FLIGHT DECK
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-haze">
          The visible life around the inner work. A pilot&apos;s world, kept
          honest. Short form lives on the surfaces below.
        </p>
      </div>
      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {CARDS.map((c) => (
          <a
            key={c.title}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="in-card block p-8"
          >
            <p className="in-label text-lift">{c.label}</p>
            <h2 className="mt-4 text-xl font-extralight tracking-wide text-cloud">
              {c.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-haze">{c.text}</p>
            <p className="in-label mt-8 text-haze in-hover-signal">
              OPEN ON {c.surface} →
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
