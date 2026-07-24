export type EpisodeStatus = "live" | "incoming";

export interface Episode {
  slug: string;
  number: number;
  numeral: string;
  title: string;
  hook: string;
  description: string;
  /** YouTube video ID. Empty string = link out to channel until ID is added. */
  youtubeId: string;
  status: EpisodeStatus;
  /** Path under /public. Absent = atmospheric banner (incoming episodes). */
  thumb?: string;
}

export const CHANNEL_URL = "https://www.youtube.com/@Inner-Nav";

export const episodes: Episode[] = [
  {
    slug: "the-collapse",
    number: 1,
    numeral: "I",
    title: "The Collapse",
    hook: "The moment the structure stopped holding.",
    description:
      "The point where the old identity stopped working. Recorded from inside the collapse, not narrated after it. This is where the series begins because this is where the work began.",
    youtubeId: "X1WVnHLZCLk",
    status: "live",
    thumb: "/episodes/the-collapse.png",
  },
  {
    slug: "the-numbing-mechanisms",
    number: 2,
    numeral: "II",
    title: "The Numbing Mechanisms",
    hook: "Every escape route, examined in daylight.",
    description:
      "A forensic inventory of the mechanisms one man used to avoid feeling. Work, stimulation, approval, motion. Named plainly, without shame, so they lose their cover.",
    youtubeId: "BMovwv_aDVU",
    status: "live",
    thumb: "/episodes/the-numbing-mechanisms.png",
  },
  {
    slug: "religion-and-childhood",
    number: 3,
    numeral: "III",
    title: "Religion & Childhood",
    hook: "The first programs, installed before consent.",
    description:
      "Where the earliest beliefs came from and what they were built to protect. An examination of inherited structure. What was learned is described. No one is blamed.",
    youtubeId: "1s4oriGe5TE",
    status: "live",
    thumb: "/episodes/religion-and-childhood.png",
  },
  {
    slug: "the-victim-consciousness",
    number: 4,
    numeral: "IV",
    title: "The Victim Consciousness",
    hook: "The most comfortable prison in the psyche.",
    description:
      "How the victim position forms, what it pays, and what it costs. Observed in real time in one man's patterns. The exit begins the moment the pattern is seen generating itself.",
    youtubeId: "5HtzBf8aVqE",
    status: "live",
    thumb: "/episodes/the-victim-consciousness.png",
  },
  {
    slug: "the-shadow-loops",
    number: 5,
    numeral: "V",
    title: "The Shadow Loops",
    hook: "The same scene, replayed with new actors.",
    description:
      "Repeating situations are not coincidence. They are loops running unfinished material. This transmission maps the loops as they appear, mid-cycle, currently transforming.",
    youtubeId: "6k9XjwXwvZU",
    status: "live",
    thumb: "/episodes/the-shadow-loops.png",
  },
  {
    slug: "humans-as-matrix-generators",
    number: 6,
    numeral: "VI",
    title: "Humans as Matrix Generators",
    hook: "You are not inside the matrix. You are running it.",
    description:
      "We examine how human beings are not passive recipients of reality but active generators of it. The matrix you experience is the one you are running. Recorded in real time, not narrated after the fact.",
    youtubeId: "DtAoIv0qKSU",
    status: "live",
    thumb: "/episodes/humans-as-matrix-generators.png",
  },
  {
    slug: "the-endless-vessel",
    number: 7,
    numeral: "VII",
    title: "The Endless Vessel",
    hook: "What the soul actually is, examined from inside one.",
    description:
      "The soul's true nature approached as a live question. A vessel built to receive without end, and what happens when it remembers that. Incoming. ETA August 2026.",
    youtubeId: "",
    status: "incoming",
    thumb: "/episodes/the-endless-vessel.png",
  },
  {
    slug: "transmission-viii",
    number: 8,
    numeral: "VIII",
    title: "Transmission VIII",
    hook: "The mirror principle and the collective shadow.",
    description: "Recorded. In post-production. Incoming.",
    youtubeId: "",
    status: "incoming",
    thumb: "/episodes/transmission-viii.png",
  },
  {
    slug: "transmission-ix",
    number: 9,
    numeral: "IX",
    title: "Transmission IX",
    hook: "The integration protocol.",
    description: "A daily operating system for the work. Incoming.",
    youtubeId: "",
    status: "incoming",
    thumb: "/episodes/transmission-ix.png",
  },
  {
    slug: "transmission-x",
    number: 10,
    numeral: "X",
    title: "Transmission X",
    hook: "The season closes.",
    description: "Alchemy. The energetic operating system. Soul remembrance. Incoming.",
    youtubeId: "",
    status: "incoming",
    thumb: "/episodes/transmission-x.png",
  },
];

export const latestLive = (): Episode =>
  [...episodes].reverse().find((e) => e.status === "live") ?? episodes[0];

export const bySlug = (slug: string): Episode | undefined =>
  episodes.find((e) => e.slug === slug);
