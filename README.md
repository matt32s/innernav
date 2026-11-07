# Inner Navigation — Web Ecosystem

Next.js 16 · React 19 · TypeScript strict · Tailwind v4 (@theme tokens, no config file) · Geist (bundled) · static-first, no CMS/DB.

## Run
npm install
npm run dev        # local
npm run build      # verify (passes, zero TS errors)

## Deploy (Vercel)
Review the local changes and get Mateo's approval before deploying to production.
Production is hosted on Vercel. The GitHub repository is `matt32s/innernav`, with `main` as its default branch.

## Where content lives
- `lib/content/episodes.ts` holds episode records.
- `lib/content/site.ts` holds socials, navigation, and the disclaimer.
- `app/contact/page.tsx` shows the official social links.

## Publish an episode
1. Add or update the record in `lib/content/episodes.ts`. Keep the slug for an existing episode URL.
2. Add the approved artwork to `public/episodes/`, set `thumb`, and enter the verified YouTube video ID in `youtubeId`.
3. Set `status` to `"live"` once the video is public. The gallery removes the Incoming label, the sitemap includes the episode, and the highest published episode number becomes the homepage feature.
4. Run `npm run lint` and `npm run build`, then review the homepage, gallery, and new player locally.

## Future sections
- Reprogramming, Sessions, and Flight Deck page code is retained. Temporary redirects in `next.config.ts` hide those routes while the sections are unavailable.
- Restore resource download links when the PDFs are ready. Enable newsletter signup only after a working signup endpoint is configured and verified.
- The original plan also tracks a Flight Deck app at `/deck.html` and a dedicated 1200×630 share card.

## Design system (locked)
Tokens in app/globals.css @theme. Amber Rule enforced: amber only on indicator dots,
social icons (small), hover states. .in-btn-signal exists, reserved, unused.
Film grain: components/FilmGrain.tsx (feTurbulence, .07, mix-blend overlay, z-100).
