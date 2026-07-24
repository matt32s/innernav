import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EpisodeBanner } from "@/components/EpisodeCard";
import RewireForm from "@/components/RewireForm";
import Datalink from "@/components/motion/Datalink";
import SignalScan from "@/components/motion/SignalScan";
import TuneIn from "@/components/motion/TuneIn";
import { bySlug, episodes, CHANNEL_URL } from "@/lib/content/episodes";
import { SITE, SOCIALS } from "@/lib/content/site";

export function generateStaticParams() {
  return episodes.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ep = bySlug(slug);
  if (!ep) return { title: "Transmission" };
  return {
    title: `${ep.title} · EP.${String(ep.number).padStart(2, "0")}`,
    description: ep.hook,
  };
}

export default async function EpisodePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ep = bySlug(slug);
  if (!ep) notFound();

  return (
    <article className="mx-auto max-w-4xl px-5 py-24">
      {/* VideoObject schema: live episodes only, SEO for the series */}
      {ep.status === "live" && ep.youtubeId && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: ep.title,
              description: ep.description,
              ...(ep.thumb ? { thumbnailUrl: `${SITE.url}${ep.thumb}` } : {}),
              embedUrl: `https://www.youtube-nocookie.com/embed/${ep.youtubeId}`,
            }),
          }}
        />
      )}
      <SignalScan>
        {/* datalink type-in: one of exactly two surfaces */}
        <p className="in-label mb-4 text-lift">
          <Datalink
            text={`TRANSMISSION · FL370 · EP.${String(ep.number).padStart(2, "0")}`}
          />
        </p>
        <TuneIn as="h1" className="in-display text-3xl text-cloud md:text-4xl">
          {ep.title.toUpperCase()}
        </TuneIn>
        <p className="mt-4 text-sm text-haze">{ep.hook}</p>
      </SignalScan>

      {/* Player: plays in place, never ejects */}
      <div className="mt-12">
        {ep.status === "live" && ep.youtubeId ? (
          <div className="in-card aspect-video overflow-hidden">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${ep.youtubeId}`}
              title={ep.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : ep.status === "live" ? (
          <div className="in-card overflow-hidden">
            <EpisodeBanner episode={ep} tall />
            <div className="p-8 text-center">
              <p className="in-label text-haze">
                THIS TRANSMISSION IS LIVE ON YOUTUBE
              </p>
              <a
                href={CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="in-btn mt-6 inline-block"
              >
                WATCH ON YOUTUBE
              </a>
            </div>
          </div>
        ) : (
          <div className="in-card overflow-hidden">
            <EpisodeBanner episode={ep} tall />
            <div className="p-8 text-center">
              <p className="in-label text-haze">INCOMING TRANSMISSION</p>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-haze">
                This episode is in production. The list receives it on
                arrival.
              </p>
              <div className="mt-8">
                <RewireForm label="NOTIFY ON ARRIVAL" listTag="episodes" />
              </div>
            </div>
          </div>
        )}
      </div>

      <SignalScan className="mt-10">
        <div>
          <h2 className="in-label text-lift">ABOUT THIS TRANSMISSION</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-haze">
            {ep.description}
          </p>
        </div>
      </SignalScan>

      {/* Other surfaces */}
      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
        <a
          href={CHANNEL_URL}
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
      </div>

      {/* Bottom CTA */}
      <div className="in-card mt-16 p-8 text-center">
        <p className="in-label text-lift">GO DEEPER</p>
        <p className="mt-4 text-sm text-haze">Want to do this work 1:1?</p>
        <Link href="/sessions" className="in-btn mt-6 inline-block">
          EXPLORE SESSIONS
        </Link>
      </div>
    </article>
  );
}
