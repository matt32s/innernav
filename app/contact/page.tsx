import type { Metadata } from "next";
import { Eyebrow } from "@/components/Footer";
import SignalScan from "@/components/motion/SignalScan";
import TuneIn from "@/components/motion/TuneIn";
import { SOCIALS } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Inner Navigation. Session inquiries and collaboration.",
};

const CONTACT_EMAIL = "contact@inner-nav.com";

export default function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24">
      <SignalScan className="text-center">
        <Eyebrow>SIGNAL IN</Eyebrow>
        <TuneIn as="h1" className="in-display text-3xl text-cloud md:text-4xl">
          CONTACT
        </TuneIn>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-haze">
          One inbox. Read personally, answered between flights.
        </p>
      </SignalScan>

      <SignalScan
        className="mt-16 grid gap-6 sm:grid-cols-2"
        itemClassName="h-full"
      >
        <div className="in-card h-full p-8">
          <p className="in-label text-lift">EMAIL</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 block break-all text-sm text-cloud in-hover-signal"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-4 text-xs leading-relaxed text-haze">
            For session inquiries: one paragraph on the pattern you want to
            examine.
          </p>
        </div>
        <div className="in-card h-full p-8">
          <p className="in-label text-lift">SURFACES</p>
          <div className="mt-4 space-y-3">
            <a
              href={SOCIALS.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="in-label block text-haze in-hover-signal"
            >
              YOUTUBE · {SOCIALS.youtube.handle}
            </a>
            <a
              href={SOCIALS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="in-label block text-haze in-hover-signal"
            >
              INSTAGRAM · {SOCIALS.instagram.handle}
            </a>
          </div>
        </div>
      </SignalScan>
    </section>
  );
}
