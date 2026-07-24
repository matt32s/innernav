import type { Metadata } from "next";
import { Eyebrow, Divider } from "@/components/Footer";
import FlightStatus from "@/components/FlightStatus";
import RewireForm from "@/components/RewireForm";
import SignalScan from "@/components/motion/SignalScan";
import TuneIn from "@/components/motion/TuneIn";

export const metadata: Metadata = {
  title: "Sessions",
  description:
    "1:1 inner navigation sessions. Pattern extraction and subconscious reprogramming, applied to your material.",
};

export default function Sessions() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24">
      <SignalScan className="text-center">
        <Eyebrow>1:1</Eyebrow>
        <TuneIn as="h1" className="in-display text-3xl text-cloud md:text-4xl">
          SESSIONS
        </TuneIn>
        <div className="mt-8">
          <FlightStatus status="HOLDING PATTERN" detail="CURRENT COHORT FULL" />
        </div>
      </SignalScan>

      <SignalScan className="mt-16 space-y-14">
        <div>
          <h2 className="in-label text-lift">WHAT THIS IS</h2>
          <p className="mt-4 text-sm leading-relaxed text-haze">
            One hour. Your pattern on the table. We locate the loop, extract
            the belief underneath it, and install the beginning of a new
            program. The same method running in the Transmission Series,
            applied to your material. This is examination, not advice.
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
          <h2 className="in-label text-lift">WHAT TO EXPECT</h2>
          <p className="mt-4 text-sm leading-relaxed text-haze">
            Direct questions. Slow, precise observation. You will be asked to
            look at things you normally route around. Nothing is forced.
            Everything is named. You leave with the pattern mapped and a
            written protocol to run between sessions.
          </p>
        </div>

        <div>
          <h2 className="in-label text-lift">PRICING</h2>
          <p className="mt-4 text-sm leading-relaxed text-haze">
            $150 to $350 depending on format. The investment is stated in full
            before anything begins. The waitlist receives introductory
            pricing.
          </p>
        </div>

        <div>
          <h2 className="in-label text-lift">NEXT CLEARANCE: SEPTEMBER</h2>
          <p className="mt-4 text-sm leading-relaxed text-haze">
            Sessions open in small cohorts. The current one is closed. Ten
            seats open in September at introductory pricing. The waitlist
            boards first.
          </p>
          <div className="mt-8">
            <RewireForm
              label="JOIN THE WAITLIST"
              successText="YOU ARE IN THE HOLDING PATTERN. YOU BOARD FIRST."
              listTag="sessions"
            />
          </div>
        </div>
      </SignalScan>

      <Divider />

      <p className="text-center text-xs leading-relaxed text-haze/70">
        Sessions are education and self-inquiry. They are not therapy and not
        medical care.
      </p>
    </section>
  );
}
