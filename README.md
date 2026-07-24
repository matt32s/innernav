# Inner Navigation — Web Ecosystem

Next.js 16 · React 19 · TypeScript strict · Tailwind v4 (@theme tokens, no config file) · Geist (bundled) · static-first, no CMS/DB.

## Run
npm install
npm run dev        # local
npm run build      # verify (passes, zero TS errors)

## Deploy (Vercel)
Push this folder to a GitHub repo → import in Vercel → deploy. Nothing else needed.

## Where content lives
- lib/content/episodes.ts — the 10 transmissions. PASTE YOUTUBE IDs into `youtubeId`
  as episodes publish; the page switches from channel-link to in-place embed automatically.
  Flip `status` from "incoming" to "live" per episode.
- lib/content/site.ts — socials, nav, disclaimer.
- app/contact/page.tsx — set the real CONTACT_EMAIL.

## BEFORE LAUNCH (blocking)
1. Set NEXT_PUBLIC_FORM_ENDPOINT (Formspree/Buttondown) before launch or emails
   are not stored. RewireForm POSTs { email, listTag } JSON; listTags in use:
   general, sessions, episodes. Without the env var, success is simulated.
2. [SET REAL EMAIL before deploy] — app/contact/page.tsx CONTACT_EMAIL is a
   visible placeholder. Do not ship it.

## TODO before EP08 (per plan)
1. Done: EP01–06 YouTube IDs + thumbnails (/public/episodes/[slug].png).
   EP07 on publish: set youtubeId, flip status to "live", add thumb.
2. Drop the 3 free PDFs into /public/resources/ and swap the resource cards
   from NOTIFY ON ARRIVAL back to real DOWNLOAD PDF links.
3. Optional: /deck.html (INAV Deck app) into /public for the tracker at inner-nav.com/deck.html.
4. og.png is a copy of EP06 art; replace with a dedicated 1200x630 card when one exists.

## Design system (locked)
Tokens in app/globals.css @theme. Amber Rule enforced: amber only on indicator dots,
social icons (small), hover states. .in-btn-signal exists, reserved, unused.
Film grain: components/FilmGrain.tsx (feTurbulence, .07, mix-blend overlay, z-100).
