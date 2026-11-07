import Link from "next/link";
import { DISCLAIMER, NAV_LINKS, SOCIALS } from "@/lib/content/site";
import AmberPulse from "@/components/motion/AmberPulse";
import TuneIn from "@/components/motion/TuneIn";

/* Small inline icons. Amber at rest per the Amber Rule (small scale only).
   Only surfaces that exist: YouTube and Instagram. No dead links. */
export function SocialIcons({ size = 16 }: { size?: number }) {
  const cls = "text-signal in-hover-signal";
  const common = {
    width: size,
    height: size,
    fill: "currentColor",
    "aria-hidden": true as const,
  };
  return (
    <div className="flex items-center gap-5">
      <a
        href={SOCIALS.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Instagram ${SOCIALS.instagram.handle}`}
        className={cls}
      >
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 8.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Zm0-2.1a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm6.8-.3a1.24 1.24 0 1 1-2.5 0 1.24 1.24 0 0 1 2.5 0ZM12 4.2c-2.6 0-2.9 0-4 .1-1 0-1.6.2-2 .4-.5.2-.9.4-1.2.8-.4.3-.6.7-.8 1.2-.2.4-.3 1-.4 2-.1 1.1-.1 1.4-.1 4s0 2.9.1 4c0 1 .2 1.6.4 2 .2.5.4.9.8 1.2.3.4.7.6 1.2.8.4.2 1 .3 2 .4 1.1.1 1.4.1 4 .1s2.9 0 4-.1c1 0 1.6-.2 2-.4.5-.2.9-.4 1.2-.8.4-.3.6-.7.8-1.2.2-.4.3-1 .4-2 .1-1.1.1-1.4.1-4s0-2.9-.1-4c0-1-.2-1.6-.4-2a3.1 3.1 0 0 0-.8-1.2 3.1 3.1 0 0 0-1.2-.8c-.4-.2-1-.3-2-.4-1.1-.1-1.4-.1-4-.1Z" />
        </svg>
      </a>
      <a
        href={SOCIALS.youtube.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`YouTube ${SOCIALS.youtube.handle}`}
        className={cls}
      >
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12c0 1.6.1 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8c1.5.4 7.8.4 7.8.4s6.3 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.3-1.6.4-3.2.4-4.8 0-1.6-.1-3.2-.4-4.8ZM10 15.2V8.8L15.2 12 10 15.2Z" />
        </svg>
      </a>
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <TuneIn as="p" className="in-label mb-4 text-lift">
      {children}
    </TuneIn>
  );
}

/* Section divider: thin frequency line, amber centerpoint. */
export function Divider() {
  return (
    <div className="relative mx-auto my-24 max-w-4xl px-5" aria-hidden="true">
      <div className="h-px w-full bg-frequency/30" />
      {/* outer span keeps the translate; AmberPulse animates scale inside it */}
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <AmberPulse className="block" />
      </span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-frequency/20">
      <div className="mx-auto max-w-6xl px-5 py-16 text-center">
        <p className="in-display text-lg text-cloud">INNER NAVIGATION</p>
        <div className="mx-auto mt-6 h-px w-40 bg-frequency/30" />
        <nav
          aria-label="Footer"
          className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="in-label text-haze in-hover-signal"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="in-label text-haze in-hover-signal">
            CONTACT
          </Link>
        </nav>
        <div className="mt-10 flex justify-center">
          <SocialIcons />
        </div>
        <p className="mx-auto mt-10 max-w-xl text-xs leading-relaxed text-haze/80">
          {DISCLAIMER}
        </p>
        <p className="in-label mt-8 text-haze/60">
          © 2026 INNER NAVIGATION. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
