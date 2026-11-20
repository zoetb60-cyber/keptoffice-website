# Kept Office — website design options

Three complete, responsive website options for **Kept Office** (keptoffice.com), built from the business & website brief.

| Option | Look | Highlight |
|---|---|---|
| [Option 1 · White & Blush](option-1-blush/) | White with a dash of light shadow pink, deep-rose accents | Arched hero image, floating task cards, soft pink shadows |
| [Option 2 · Emerald & Coral](option-2-emerald/) | The brief's default palette (#0E7C6B, #FF8A6B, white) | **Interactive hero** — a spotlight lens, glowing dots and parallax photos follow the cursor (gentle auto-drift on phones) |
| [Option 3 · Royal Blue & Gold](option-3-royal/) | The brief's alternative palette, editorial & executive | Navy hero with an animated "weekly brief", overlapping stats bar |

Open `index.html` at the root to compare all three.

## What every option includes (per the brief)

- **One page with a tab menu** — Home, Executive Support, Social Media, Websites, Shop, Contact. Each tab shows only its own content; links are shareable (`#shop`) and the back button works.
- **Home** — "You run the business. We handle the rest.", founding-offer banner, 4 service cards, 3-step how it works, "Hi, I'm Zoe" intro.
- **Executive Support / Social Media** — 3 packages each, prices in USD with rand (≈ R16.80/$), "Good to know" FAQ.
- **Websites** — $500 package, add-ons, sample websites in browser frames (Emerald & Olive links to the live Wix sample; the salon and estate agency show "Coming soon").
- **Shop** — bundles, category filters, and product cards with realistic mock-ups (printed pages, laptops, phones, a tablet and planners on a desk, showing real sample content). Clicking a card opens a larger preview with "What's included", plus a free-download email sign-up. Each product's sample content is its `demo` in `shared/content.js`; the scenes are drawn by `shared/mockups.js` + `shared/mockups.css`.
- **Contact** — 30-minute booking card, message form, hello@keptoffice.com. No phone number.
- DM Serif Display + Plus Jakarta Sans, ZT monogram in header and footer, mobile-first, SEO title/description, cookie notice, privacy and refund policy pop-ups, keyboard and screen-reader friendly, respects "reduce motion".

## Editing content

All prices, packages, FAQs and shop products live in **one file**: [`shared/content.js`](shared/content.js). Change it once and all three options update.

Things to fill in before going live (search for `TODO`):

1. `bookingUrl` — your Google Calendar appointment-schedule link.
2. `formEndpoint` — optional form service (e.g. Formspree). Until set, forms open the visitor's email app addressed to hello@keptoffice.com.
3. Shop "Buy & download" buttons — connect PayFast/Yoco (ZAR) and PayPal (USD).
4. Google Analytics — load it in `shared/app.js` only when a visitor clicks "Allow analytics".
5. Replace stock photos (Unsplash) with your own, including a photo of you for "Hi, I'm Zoe", and swap the sample-site photos for real screenshots.
6. Individual shop prices are placeholders within the brief's $6–$20 range.

> The brief names Wix as the final platform. These coded options are design prototypes to choose a direction from; the chosen design can be rebuilt in Wix, or this code can be hosted directly (e.g. GitHub Pages, Netlify).

## Structure

```
index.html              ← chooser page for the three options
shared/content.js       ← all text, prices and products
shared/app.js           ← tabs, shop filters/preview, forms, cookie notice
shared/base.css         ← shared layout and components
option-1-blush/         ← index.html + styles.css
option-2-emerald/       ← index.html + styles.css + hero.js (cursor effect)
option-3-royal/         ← index.html + styles.css
```

No build step — open any `index.html` in a browser, or serve the folder with any static server.
