import type { Metadata } from "next";
import { Eyebrow, Divider } from "@/components/Footer";
import SignalScan from "@/components/motion/SignalScan";
import TuneIn from "@/components/motion/TuneIn";
import { COURSE_PRICE, courseCheckoutUrl } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Remember the Future",
  description:
    "Subconscious Reprogramming — the daily system for rewiring your own patterns. Analyze the pattern. Extract the belief. Write the script. Saturate the field.",
};

const INCLUDED = [
  {
    label: "THE METHOD",
    name: "The Complete System",
    text: "The method from the Transmission Series, taught as a repeatable daily practice. Awareness to integration. Not a concept. A system you run.",
  },
  {
    label: "THE FRAMEWORK",
    name: "Script Writing",
    text: "How to build a subconscious reprogramming script in your own language. Structure, tense, cadence. Why most affirmations fail and what holds instead.",
  },
  {
    label: "THE PROTOCOL",
    name: "Daily Saturation",
    text: "The listening schedule. Morning, afternoon, night. When the nervous system is open, and how to use those windows until the script stops sounding like a script.",
  },
  {
    label: "THE FIELD NOTES",
    name: "Real Examples",
    text: "Actual scripts, actual patterns, actual revisions from my own practice. Nothing staged. You see the instrument in use before you build your own.",
  },
];

const PRACTICE = [
  {
    n: "01",
    name: "Identify the Pattern",
    text: "Find the loop that keeps producing the same result. Journal it until it has coordinates. Name the belief underneath it.",
  },
  {
    n: "02",
    name: "Write the Script",
    text: "Build the language of the desired future in your own voice. Precise, present tense, yours. The old program is replaced, not argued with.",
  },
  {
    n: "03",
    name: "Saturate the Field",
    text: "Listen morning, afternoon, night. Repetition in elevated state until the old reality is impossible.",
  },
];

/* The Amber Rule: these two instances of the same CTA are the only amber
   buttons on the site. */
function CourseCta() {
  return (
    <a href={courseCheckoutUrl} className="in-btn in-btn-signal">
      GET THE COURSE — ${COURSE_PRICE}
    </a>
  );
}

export default function Reprogramming() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-4xl px-5 pb-24 pt-28 text-center md:pt-36">
        <SignalScan>
          <Eyebrow>THE COURSE</Eyebrow>
          <TuneIn
            as="h1"
            className="in-display text-4xl text-cloud sm:text-5xl md:text-6xl"
          >
            REMEMBER THE FUTURE
          </TuneIn>
          <p className="in-label mt-8 text-haze">SUBCONSCIOUS REPROGRAMMING</p>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-haze">
            The daily system I use to rewire my own patterns. Analyze the
            pattern. Extract the belief. Write the script. Saturate the field
            until the old reality is impossible.
          </p>
          <div className="mt-12">
            <CourseCta />
          </div>
          <p className="mt-6 text-xs text-haze/70">
            Digital course. Immediate access after purchase.
          </p>
        </SignalScan>
      </section>

      <Divider />

      {/* WHAT THIS IS */}
      <section className="mx-auto max-w-3xl px-5 text-center">
        <SignalScan>
          <Eyebrow>WHAT THIS IS</Eyebrow>
          <TuneIn as="h2" className="in-display text-2xl text-cloud md:text-3xl">
            THE METHOD, AS A PRACTICE
          </TuneIn>
          <div className="mx-auto mt-10 max-w-xl space-y-6 text-left">
            <p className="text-sm leading-relaxed text-haze">
              This is the method running in the Transmission Series, taught as
              a repeatable daily practice. Not theory. Not motivation. An
              instrument.
            </p>
            <p className="text-sm leading-relaxed text-haze">
              You journal the desired future until it has coordinates. You
              build a subconscious reprogramming script in your own language.
              You listen on a daily protocol — morning, afternoon, night —
              until the script stops sounding like a script.
            </p>
            <p className="text-sm leading-relaxed text-haze">
              Underneath it all: pattern analysis. You learn to read your own
              loops the way the series reads mine.
            </p>
          </div>
        </SignalScan>
      </section>

      <Divider />

      {/* WHAT YOU GET */}
      <section className="mx-auto max-w-5xl px-5 text-center">
        <SignalScan>
          <Eyebrow>INSIDE</Eyebrow>
          <TuneIn as="h2" className="in-display text-2xl text-cloud md:text-3xl">
            WHAT YOU GET
          </TuneIn>
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-2">
            {INCLUDED.map((item) => (
              <div key={item.label} className="in-card p-8">
                <p className="in-label text-lift">{item.label}</p>
                <h3 className="mt-4 text-xl font-extralight tracking-wide text-cloud">
                  {item.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-haze">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </SignalScan>
      </section>

      <Divider />

      {/* WHO THIS IS FOR */}
      <section className="mx-auto max-w-3xl px-5 text-center">
        <SignalScan>
          <Eyebrow>THE PASSENGER LIST</Eyebrow>
          <TuneIn as="h2" className="in-display text-2xl text-cloud md:text-3xl">
            WHO THIS IS FOR
          </TuneIn>
          <div className="mx-auto mt-10 max-w-xl space-y-6 text-left">
            <p className="text-sm leading-relaxed text-haze">
              People who function at a high level and repeat the same private
              loop. The career works. The pattern persists. You have already
              seen it. Seeing it did not dissolve it.
            </p>
            <p className="text-sm leading-relaxed text-haze">
              People who are done consuming content. You do not need another
              explanation of the subconscious. You need a daily instrument you
              run until the pattern gives.
            </p>
          </div>
        </SignalScan>
      </section>

      <Divider />

      {/* THE PRACTICE */}
      <section className="mx-auto max-w-5xl px-5 text-center">
        <SignalScan>
          <Eyebrow>DAILY</Eyebrow>
          <TuneIn as="h2" className="in-display text-2xl text-cloud md:text-3xl">
            THE PRACTICE
          </TuneIn>
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
            {PRACTICE.map((step) => (
              <div key={step.n} className="in-card p-6">
                <p className="text-3xl font-extralight text-frequency/60">
                  {step.n}
                </p>
                <h3 className="in-label mt-4 text-cloud">
                  {step.name.toUpperCase()}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-haze">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </SignalScan>
      </section>

      <Divider />

      {/* FINAL CTA */}
      <section className="mx-auto max-w-3xl px-5 pb-28 text-center">
        <SignalScan>
          <TuneIn as="h2" className="in-display text-2xl text-cloud md:text-3xl">
            THE FUTURE IS NOT CHASED. IT IS REMEMBERED.
          </TuneIn>
          <div className="mt-12">
            <CourseCta />
          </div>
          <p className="mt-6 text-xs text-haze/70">
            Digital course. Immediate access after purchase.
          </p>
        </SignalScan>
      </section>
    </>
  );
}
