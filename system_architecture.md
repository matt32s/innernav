# Save state — Inner Navigation site
- Content pattern: typed .ts files in lib/content; pages import, never hardcode episode data.
- Design tokens: Tailwind v4 @theme in app/globals.css → utilities bg-ink/text-cloud/border-frequency etc.
- Component classes (.in-btn, .in-card, .in-label, .in-display, .in-input) live in globals.css, not Tailwind plugins.
- Episode player logic: live+youtubeId → embed; live w/o id → channel CTA; incoming → banner state. All in app/transmission/[slug]/page.tsx.
- The gallery shows all episode records with an Incoming label for unpublished ones. The sitemap and homepage feature use live records with a YouTube ID, ordered by episode number.
- Font: geist npm package (NOT next/font/google — blocked fetch + slower). Variable: --font-geist-sans.
- params are Promise<> in Next 16 dynamic routes — always await.

## Motion system (motion@12, import from "motion/react")
Rule: all motion is transform/opacity only (one sanctioned 0.7s blur pass in TuneIn,
letter-spacing in TuneIn/boot by spec) and every component guards useReducedMotion():
reduced renders final state instantly, mounts nothing animated, skips the boot.
CSS loops (.in-amber-pulse, .in-static-shimmer, .in-cursor-blink) are also killed in
the prefers-reduced-motion block in globals.css. Reveals fire once (viewport once:true).

Inventory (components/motion/ unless noted):
- BootSequence — once-per-session overlay in layout; sessionStorage flag "inav-boot",
  set on completion. Renders null on server and until the useEffect flag check.
- FrequencyWave — hero-only vertical gradient drift (horizon/frequency/lift), 12s loop.
- SignalScan — section reveal wrapper: 1px frequency line sweeps, children stagger 80ms.
  Pass grid classes via className to stagger cards; itemClassName styles wrappers.
- TuneIn — h1/h2/eyebrow resolve from blur + wide tracking; Eyebrow (Footer.tsx) uses it.
- AmberPulse — breathing amber dot (nav + divider centerpoints), CSS keyframes.
- app/template.tsx — VHS route glitch, entry-only, <250ms: jitter + frequency/signal
  tint flashes + grain spike. Ghosts are tint overlays, not DOM copies (by choice).
- Altimeter — fixed right-edge FL000-FL370 scroll tape, lg+ only, rAF-throttled (layout).
- StaticShimmer — dead-signal flicker on incoming EpisodeBanner only; live stays still.
- Datalink — type-in, exactly two surfaces: episode-page eyebrow + RewireForm success.
Card lift is pure CSS: .in-episode-card / .in-episode-numeral in globals.css.
