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

## TODO before EP08 (per plan)
1. Paste EP01–06 YouTube IDs (+ EP07 on publish).
2. Real thumbnail stills: add to /public/episodes/[slug].jpg and swap EpisodeBanner
   background for next/image (ask Claude; 5-minute change).
3. Wire RewireForm (components/RewireForm.tsx) to email provider — handler is isolated.
4. Drop the 3 free PDFs into /public/resources/ and point the resource card links at them.
5. Optional: /deck.html (INAV Deck app) into /public for the tracker at inner-nav.com/deck.html.

## Design system (locked)
Tokens in app/globals.css @theme. Amber Rule enforced: amber only on indicator dots,
social icons (small), hover states. .in-btn-signal exists, reserved, unused.
Film grain: components/FilmGrain.tsx (feTurbulence, .07, mix-blend overlay, z-100).
