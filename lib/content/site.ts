export const SITE = {
  name: "Inner Navigation",
  url: "https://inner-nav.com",
  description:
    "Shadow work. Inner transformation. Real time process. An airline pilot's living transformation, documented as it happens.",
};

export const SOCIALS = {
  youtube: { handle: "@Inner-Nav", url: "https://www.youtube.com/@Inner-Nav" },
  instagram: {
    handle: "@mateo.innernav",
    url: "https://instagram.com/mateo.innernav",
  },
};

export const NAV_LINKS = [
  { href: "/", label: "OVERVIEW" },
  { href: "/transmission", label: "TRANSMISSION" },
  { href: "/flight-deck", label: "FLIGHT DECK" },
  { href: "/sessions", label: "SESSIONS" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
] as const;

export const DISCLAIMER =
  "Inner Navigation provides educational content for personal development. This is not a substitute for professional therapy or medical advice. Each individual is responsible for their own process and decisions.";
