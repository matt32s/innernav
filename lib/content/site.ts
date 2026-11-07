export const SITE = {
  name: "Inner Navigation",
  url: "https://www.inner-nav.com",
  description:
    "Shadow work. Inner transformation. Real time process. An airline pilot's living transformation, documented as it happens.",
};

export const SOCIALS = {
  youtube: { handle: "@Inner-Nav", url: "https://www.youtube.com/@Inner-Nav" },
  instagram: {
    handle: "@mateo.innernav",
    url: "https://www.instagram.com/mateo.innernav/",
  },
};

export const NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/transmission", label: "EPISODES" },
  { href: "/about", label: "ABOUT" },
  { href: SOCIALS.instagram.url, label: "INSTAGRAM" },
] as const;

/* Pre-launch switch: false hides every price and purchase CTA sitewide and
   routes conversion to the email list. Flip to true to go live - no other
   edits required. */
export const OFFERINGS_LIVE: boolean = false;

/* Pricing and checkout live here so they are edited in one place. */
export const courseCheckoutUrl = "#checkout"; // placeholder until checkout exists
export const COURSE_PRICE = 47;
export const SESSION_PRICE = 150;

export const DISCLAIMER =
  "Inner Navigation provides educational content for personal development. This is not a substitute for professional therapy or medical advice. Each individual is responsible for their own process and decisions.";
