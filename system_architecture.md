# Save state — Inner Navigation site
- Content pattern: typed .ts files in lib/content; pages import, never hardcode episode data.
- Design tokens: Tailwind v4 @theme in app/globals.css → utilities bg-ink/text-cloud/border-frequency etc.
- Component classes (.in-btn, .in-card, .in-label, .in-display, .in-input) live in globals.css, not Tailwind plugins.
- Episode player logic: live+youtubeId → embed; live w/o id → channel CTA; incoming → banner state. All in app/transmission/[slug]/page.tsx.
- Font: geist npm package (NOT next/font/google — blocked fetch + slower). Variable: --font-geist-sans.
- params are Promise<> in Next 16 dynamic routes — always await.
