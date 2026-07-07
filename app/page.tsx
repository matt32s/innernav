import Link from "next/link";
import { Eyebrow, Divider, SocialIcons } from "@/components/Footer";
import RewireForm from "@/components/RewireForm";
import { EpisodeBanner } from "@/components/EpisodeCard";
import FrequencyWave from "@/components/motion/FrequencyWave";
import SignalScan from "@/components/motion/SignalScan";
import TuneIn from "@/components/motion/TuneIn";
import { latestLive, CHANNEL_URL } from "@/lib/content/episodes";
import { SOCIALS } from "@/lib/content/site";

const METHOD = [
  {
    n: "01",
    name: "Awareness",
    text: "The pattern is observed while it runs. Not judged. Not fixed. Seen. Nothing changes until it is witnessed in daylight.",
  },
  {
    n: "02",
    name: "Extraction",
    text: "The belief underneath the pattern is located and named. Where it was installed. What it was built to protect. The forensic layer.",
  },
  {
    n: "03",
    name: "Reprogramming",
    text: "New language is placed where the old program lived. Repetition, elevated state, and the nervous system does the rest.",
  },
  {
    n: "04",
    name: "Integration",
    text: "The new pattern is lived until it is boring. Tested in real conditions. This is where transformation stops being an event and becomes a baseline.",
  },
];

const RESOURCES = [
  {
    name: "Shadow Work Journal Template",
    text: "The exact page structure used in the series. Observe, extract, reframe.",
  },
  {
    name: "Subconscious Reprogramming Starter Guide",
    text: "The method in four phases, condensed to one document you can run tonight.",
  },
  {
    name: "Nightly Ritual Checklist",
    text: "A pre-sleep sequence for planting new programs while the logical mind stands down.",
  },
];

export default function Home() {
  const latest = latestLive();

  return (
    <>
      {/* HERO */}
      <section className="relative mx-auto max-w-6xl overflow-hidden px-5 pb-24 pt-28 text-center md:pt-36">
        {/* wave sits above body bg, below text */}
        <FrequencyWave />
        <SignalScan className="relative">
          <Eyebrow>
            TRANSMISSION SERIES · EPISODE {latest.numeral} LIVE
          </Eyebrow>
          <TuneIn
            as="h1"
            className="in-display text-4xl text-cloud sm:text-6xl md:text-7xl"
          >
            INNER NAVIGATION
          </TuneIn>
          <p className="in-label mx-auto mt-8 max-w-2xl leading-loose text-haze">
            SHADOW WORK. INNER TRANSFORMATION. REAL TIME PROCESS. NOT AFTER IT
            IS FIGURED OUT.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-haze">
            An airline pilot&apos;s living transformation, documented in real
            time. Ten transmissions. One masterpiece. The work that everything
            else points back to.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/transmission" className="in-btn">
              WATCH TRANSMISSION
            </Link>
            <a href="#latest" className="in-btn in-btn-secondary">
              LATEST EPISODE ↓
            </a>
          </div>
        </SignalScan>
      </section>

      <Divider />

      {/* LATEST TRANSMISSION */}
      <section id="latest" className="mx-auto max-w-4xl px-5 text-center">
        <SignalScan>
          <Eyebrow>THE TRANSMISSION SERIES</Eyebrow>
          <TuneIn as="h2" className="in-display text-2xl text-cloud md:text-3xl">
            LATEST TRANSMISSION
          </TuneIn>
          <div className="in-card mt-10 overflow-hidden text-left">
            <EpisodeBanner episode={latest} tall />
            <div className="p-8">
              <p className="in-label text-lift">EPISODE {latest.numeral}</p>
              <h3 className="mt-3 text-2xl font-extralight tracking-wide text-cloud">
                {latest.title}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-haze">
                {latest.description}
              </p>
              <a
                href={CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="in-btn mt-8 inline-block"
              >
                WATCH ON YOUTUBE
              </a>
            </div>
          </div>
        </SignalScan>
      </section>

      <Divider />

      {/* WHAT IS AVAILABLE */}
      <section className="mx-auto max-w-6xl px-5">
        <SignalScan className="grid gap-6 md:grid-cols-3" itemClassName="h-full">
          <Link href="/transmission" className="in-card block h-full p-8">
            <p className="in-label text-lift">THE MASTERPIECE</p>
            <h3 className="mt-4 text-xl font-extralight tracking-wide text-cloud">
              Transmission Series
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-haze">
              Ten episodes. The complete architecture of one man&apos;s
              transformation, documented as it happens. Not after it is
              resolved. This is the work everything else points back to.
            </p>
          </Link>
          <div className="in-card h-full p-8">
            <p className="in-label text-lift">THE METHOD</p>
            <h3 className="mt-4 text-xl font-extralight tracking-wide text-cloud">
              Subconscious Reprogramming
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-haze">
              Four phases. Awareness, extraction, reprogramming, integration.
              The same protocol running in the series, offered as a method you
              can run on your own patterns.
            </p>
          </div>
          <a href="#resources" className="in-card block h-full p-8">
            <p className="in-label text-lift">THE TOOLS</p>
            <h3 className="mt-4 text-xl font-extralight tracking-wide text-cloud">
              Free Resources
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-haze">
              Templates and starter guides from inside the process. Free.
              Built to be used, not collected.
            </p>
          </a>
        </SignalScan>
      </section>

      <Divider />

      {/* METHOD */}
      <section className="mx-auto max-w-5xl px-5 text-center">
        <SignalScan>
          <Eyebrow>THE METHOD</Eyebrow>
          <TuneIn as="h2" className="in-display text-2xl text-cloud md:text-3xl">
            SUBCONSCIOUS REPROGRAMMING
          </TuneIn>
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
            {METHOD.map((m) => (
              <div key={m.n} className="in-card p-6">
                <p className="text-3xl font-extralight text-frequency/60">
                  {m.n}
                </p>
                <h3 className="in-label mt-4 text-cloud">
                  {m.name.toUpperCase()}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-haze">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </SignalScan>
      </section>

      <Divider />

      {/* REWIRE CTA */}
      <section className="mx-auto max-w-3xl px-5 text-center">
        <SignalScan>
          <Eyebrow>EARLY ACCESS</Eyebrow>
          <TuneIn as="h2" className="in-display text-2xl text-cloud md:text-3xl">
            REWIRE NOW
          </TuneIn>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-haze">
            Be the first to access new transmissions and the Inner Navigation
            method.
          </p>
          <div className="mt-10">
            <RewireForm />
          </div>
          <p className="in-label mt-6 text-haze/60">
            EARLY ACCESS. NO SPAM. JUST SIGNAL.
          </p>
        </SignalScan>
      </section>

      <Divider />

      {/* NETWORK */}
      <section className="mx-auto max-w-3xl px-5 text-center">
        <SignalScan>
          <Eyebrow>FIND THE SIGNAL</Eyebrow>
          <TuneIn as="h2" className="in-display text-2xl text-cloud md:text-3xl">
            NETWORK
          </TuneIn>
          <p className="mt-6 text-sm text-haze">One signal, many surfaces.</p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href={SOCIALS.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="in-label text-haze in-hover-signal"
            >
              YOUTUBE · {SOCIALS.youtube.handle}
            </a>
            <a
              href={SOCIALS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="in-label text-haze in-hover-signal"
            >
              INSTAGRAM · {SOCIALS.instagram.handle}
            </a>
            <div className="mt-4">
              <SocialIcons size={14} />
            </div>
          </div>
        </SignalScan>
      </section>

      <Divider />

      {/* FREE RESOURCES */}
      <section id="resources" className="mx-auto max-w-6xl px-5 pb-28">
        <SignalScan>
          <div className="text-center">
            <Eyebrow>THE TOOLS</Eyebrow>
            <TuneIn
              as="h2"
              className="in-display text-2xl text-cloud md:text-3xl"
            >
              FREE RESOURCES
            </TuneIn>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {RESOURCES.map((r) => (
              <div key={r.name} className="in-card flex flex-col p-8">
                <h3 className="text-lg font-extralight tracking-wide text-cloud">
                  {r.name}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-haze">
                  {r.text}
                </p>
                {/* TODO: point at real PDFs in /public/resources */}
                <a href="#resources" className="in-btn mt-8 text-center">
                  DOWNLOAD PDF
                </a>
              </div>
            ))}
          </div>
        </SignalScan>
      </section>
    </>
  );
}
