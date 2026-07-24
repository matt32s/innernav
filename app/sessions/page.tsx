import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Divider } from "@/components/Footer";
import SignalScan from "@/components/motion/SignalScan";
import TuneIn from "@/components/motion/TuneIn";
import {
  COURSE_PRICE,
  OFFERINGS_LIVE,
  SESSION_PRICE,
} from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Sessions",
  description:
    "1:1 inner navigation sessions. One hour, your pattern on the table, a custom subconscious reprogramming script, and a 30-day review.",
};

export default function Sessions() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24">
      <SignalScan className="text-center">
        <Eyebrow>1:1</Eyebrow>
        <TuneIn as="h1" className="in-display text-3xl text-cloud md:text-4xl">
          SESSIONS
        </TuneIn>
        <p className="in-label mt-8 leading-loose text-haze">
          {OFFERINGS_LIVE
            ? `$${SESSION_PRICE} · ONE HOUR · INCLUDES YOUR CUSTOM SCRIPT + 30-DAY REVIEW`
            : "ONE HOUR · CUSTOM SCRIPT · 30-DAY REVIEW"}
        </p>
        {!OFFERINGS_LIVE && (
          <p className="in-label mt-4 text-lift">COMING SOON</p>
        )}
      </SignalScan>

      <SignalScan className="mt-16 space-y-14">
        <div>
          <h2 className="in-label text-lift">WHAT THIS IS</h2>
          <p className="mt-4 text-sm leading-relaxed text-haze">
            One hour. Your pattern on the table. We locate the loop, extract
            the belief underneath it, and map exactly what has been running
            you. The same method running in the Transmission Series, applied
            to your material. This is examination, not advice.
          </p>
        </div>

        <div>
          <h2 className="in-label text-lift">FIND THE DESIRE</h2>
          <p className="mt-4 text-sm leading-relaxed text-haze">
            Most people do not know what they want. Part of this session is
            finding it — the actual desire underneath the noise, before any
            reprogramming begins. A script written toward a borrowed goal
            reprograms nothing.
          </p>
        </div>

        <div>
          <h2 className="in-label text-lift">WHAT YOU LEAVE WITH</h2>
          <p className="mt-4 text-sm leading-relaxed text-haze">
            A custom subconscious reprogramming script, written for you after
            the session — built from your pattern, your belief, your language.
            It arrives with exact instructions: morning, afternoon, night.
            Not a template. An instrument made for one person.
          </p>
        </div>

        <div>
          <h2 className="in-label text-lift">THE 30-DAY REVIEW</h2>
          <p className="mt-4 text-sm leading-relaxed text-haze">
            One month later, a 30-minute follow-up. Included. We review what
            shifted, what resisted, and adjust the script against what
            actually happened. The protocol is corrected, not abandoned.
          </p>
        </div>

        <div>
          <h2 className="in-label text-lift">WHO IT IS FOR</h2>
          <p className="mt-4 text-sm leading-relaxed text-haze">
            People who built the external life and found it silent inside.
            Professionals who succeed on paper and repeat the same private
            loop. You already function at a high level. The work here is
            underneath that.
          </p>
        </div>

        <div>
          <h2 className="in-label text-lift">PRICING</h2>
          <p className="mt-4 text-sm leading-relaxed text-haze">
            {OFFERINGS_LIVE
              ? `$${SESSION_PRICE}. One hour, the custom script, and the 30-day review. Everything included, stated in full before anything begins.`
              : "Pricing announced at launch."}
          </p>
          <div className="mt-8">
            {OFFERINGS_LIVE ? (
              <Link href="/contact" className="in-btn inline-block">
                REQUEST A SESSION
              </Link>
            ) : (
              <Link href="/#rewire" className="in-btn inline-block">
                JOIN THE LIST
              </Link>
            )}
          </div>
        </div>
      </SignalScan>

      <Divider />

      <SignalScan>
        <Link href="/reprogramming" className="in-card block p-8">
          <p className="in-label text-lift">THE COURSE</p>
          <h3 className="mt-4 text-xl font-extralight tracking-wide text-cloud">
            Not ready for 1:1? Start with the course.
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-haze">
            Remember the Future — the same method as a daily practice you run
            on your own.{OFFERINGS_LIVE && ` $${COURSE_PRICE}.`}
          </p>
        </Link>
      </SignalScan>

      <Divider />

      <p className="text-center text-xs leading-relaxed text-haze/70">
        Sessions are education and self-inquiry. They are not therapy and not
        medical care.
      </p>
    </section>
  );
}
