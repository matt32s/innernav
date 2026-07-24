# Implementation Plan — Inner Navigation Web Ecosystem
Spec: user BUILD brief (approved, executing).

[NEW] app/globals.css — @theme tokens (ink/horizon/frequency/lift/cloud/haze/signal), base, .in-btn family (.in-btn-signal reserved unused), .in-label, reduced-motion.
[NEW] lib/content/episodes.ts — typed Episode[], EP01–07 titled (thumbnails), EP08–10 incoming.
[NEW] lib/content/site.ts — socials, nav, disclaimer.
[NEW] components/FilmGrain.tsx — SVG feTurbulence, opacity .07, fixed, mix-blend overlay, z-100.
[NEW] components/Nav.tsx — client, mobile menu, amber active dot, lift underline.
[NEW] components/Footer.tsx — wordmark, nav, amber social icons, disclaimer.
[NEW] components/Eyebrow.tsx, Divider.tsx (amber centerpoint), EpisodeCard.tsx, RewireForm.tsx (client, static-first).
[MODIFY] app/layout.tsx — Geist 200/300/400/500/700, metadata, grain+nav+footer shell.
[MODIFY] app/page.tsx — hero, latest transmission, 3 cards, method 4 phases, rewire, network, resources.
[NEW] app/transmission/page.tsx, app/transmission/[slug]/page.tsx (embed in place, incoming state, sessions CTA).
[NEW] app/flight-deck/page.tsx, app/sessions/page.tsx ($150 flat, includes custom script + 30-day review; course $47 at /reprogramming), app/about/page.tsx, app/contact/page.tsx.
[NEW] app/sitemap.ts, app/robots.ts, app/icon.svg.
Verify: npm run build, zero TS errors. Deliver zip.
