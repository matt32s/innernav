import Link from "next/link";
import { Eyebrow, Divider, SocialIcons } from "@/components/Footer";
import RewireForm from "@/components/RewireForm";
import FlightStatus from "@/components/FlightStatus";
import { EpisodeBanner } from "@/components/EpisodeCard";
import FrequencyWave from "@/components/motion/FrequencyWave";
import SignalScan from "@/components/motion/SignalScan";
import TuneIn from "@/components/motion/TuneIn";
import { latestLive, CHANNEL_URL } from "@/lib/content/episodes";
import { COURSE_PRICE, SESSION_PRICE, SOCIALS } from "@/lib/content/site";

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
          <div className="in-card in-episode-card mt-10 overflow-hidden text-left">
            {/* the biggest element on the page is clickable */}
            <Link
              href={`/transmission/${latest.slug}`}
              className="block"
              aria-label={`Open transmission: ${latest.title}`}
            >
              <EpisodeBanner episode={latest} tall />
              <div className="px-8 pt-8">
                <p className="in-label text-lift">EPISODE {latest.numeral}</p>
                <h3 className="mt-3 text-2xl font-extralight tracking-wide text-cloud">
                  {latest.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-haze">
                  {latest.description}
                </p>
              </div>
            </Link>
            <div className="flex flex-wrap items-center gap-4 p-8">
              <Link
                href={`/transmission/${latest.slug}`}
                className="in-btn inline-block"
              >
                OPEN TRANSMISSION
              </Link>
              <a
                href={CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="in-btn in-btn-secondary inline-block"
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
          <Link href="/reprogramming" className="in-card block h-full p-8">
            <p className="in-label text-lift">THE METHOD</p>
            <h3 className="mt-4 text-xl font-extralight tracking-wide text-cloud">
              Subconscious Reprogramming
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-haze">
              Four phases. Awareness, extraction, reprogramming, integration.
              Now taught as a daily practice in Remember the Future — the
              course.
            </p>
          </Link>
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

      {/* DEPARTURES BOARD */}
      <section className="mx-auto max-w-3xl px-5 text-center">
        <SignalScan>
          <Eyebrow>WHAT IS INBOUND</Eyebrow>
          <TuneIn as="h2" className="in-display text-2xl text-cloud md:text-3xl">
            DEPARTURES
          </TuneIn>
          <div className="mt-12 text-left">
            {[
              {
                item: `REMEMBER THE FUTURE · $${COURSE_PRICE}`,
                status: "NOW BOARDING",
                detail: "IMMEDIATE ACCESS",
              },
              {
                item: `1:1 SESSIONS · $${SESSION_PRICE}`,
                status: "BOARDING",
                detail: "SEATS OPEN",
              },
              {
                item: "TRANSMISSION VII",
                status: "INBOUND",
                detail: "ETA AUG",
              },
            ].map((row) => (
              <div
                key={row.item}
                className="flex flex-col justify-between gap-2 border-b border-frequency/20 py-5 first:border-t sm:flex-row sm:items-center"
              >
                <span className="in-label text-cloud">{row.item}</span>
                <FlightStatus status={row.status} detail={row.detail} />
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-haze">
            Everything lands for{" "}
            <a href="#rewire" className="text-cloud in-hover-signal">
              the list
            </a>{" "}
            first.
          </p>
        </SignalScan>
      </section>

      <Divider />

      {/* REWIRE CTA */}
      <section id="rewire" className="mx-auto max-w-3xl px-5 text-center">
        <SignalScan>
          <Eyebrow>EARLY ACCESS</Eyebrow>
          <TuneIn as="h2" className="in-display text-2xl text-cloud md:text-3xl">
            REWIRE NOW
          </TuneIn>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-haze">
            Early access to new transmissions, the tools on arrival, and
            every future release before it lands.
          </p>
          <div className="mt-10">
            <RewireForm />
          </div>
          <p className="in-label mt-6 text-haze/60">
            ONE LIST. NO SPAM. JUST SIGNAL.
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
                <FlightStatus status="INBOUND" detail="ETA AUGUST" />
                <h3 className="mt-5 text-lg font-extralight tracking-wide text-cloud">
                  {r.name}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-haze">
                  {r.text}
                </p>
                <a href="#rewire" className="in-btn mt-8 text-center">
                  NOTIFY ON ARRIVAL
                </a>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-haze">
            The tools are in final approach. The list receives them on landing.
          </p>
        </SignalScan>
      </section>
    </>
  );
}
