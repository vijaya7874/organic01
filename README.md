# Wellora Origins

A full multi-page e-commerce site for Wellora Origins — organic superfood powders
from Guntur. Built in **Angular 20** with the muted forest-green identity
(`#2E5A44`), Playfair Display headings, and the signature product-card
image-swap (jar → nutritional infographic on hover).

```bash
npm install
npm start          # http://localhost:4200
```

## Pages

- **Home** (`/`) — atmospheric hero, featured best sellers, "Why choose us" value grid, and an "Our story" split preview.
- **Shop** (`/shop`) — all 9 products with a working sort (Recommended / Price low→high / high→low) and product count.
- **Product** (`/product/:slug`) — breadcrumb, thumbnail gallery that swaps the main view (jar / nutrition / benefits / how-to-use), variant selector, quantity stepper, Add to Cart + Buy Now, an accordion (Details / How to Use / Delivery & Return), and a "You might also like" row.
- **About** (`/about`) — "OUR STORY" hero banner, first-person narrative, and the two founders with quotes.
- **Contact** (`/contact`) — inset-shadow form on the left, a 2×2 grid of coloured info cards (office hours, address, reach-us, founder) on the right.

## Global

- **Announcement bar** — cycles through three messages, starting with free-shipping over ₹499.
- **Header** — nav left, centered "Wellora Origins" logo with leaf, account + bag icons on the right. Transparent over content, frosts to glass on scroll; the bag pulses when the count changes.
- **Cart drawer** — slides from the right, opens automatically on add. Live free-shipping progress bar against the ₹499 threshold, quantity controls, savings, and a checkout CTA.
- **Footer** — five columns (Contact, Quick Links, Policy, Follow, Stay Connected with a newsletter input) and a horizontal rule.

## The signature ProductCard

Default state shows the powder jar. On hover the jar fades and scales out while
a bordered **nutritional infographic** fades in — real SVG/CSS, not an image —
with bold comparative stats like "17x Calcium than Milk". On touch devices
(no hover) the infographic is hidden so nothing is stuck half-swapped.

## Products & prices

All 9, matched to the live catalogue:

| Product | Price | Was | Badge |
|---|---|---|---|
| Moringa Powder | ₹199 | — | Best Seller |
| Amla Powder | ₹275.54 | ₹599 | — |
| ABC Powder | ₹499 | ₹599 | Best Seller |
| Beetroot Powder | ₹249 | ₹299 | New Arrival |
| Ashwagandha Powder | ₹259 | ₹349 | — |
| Guntur Chilli Powder | ₹239 | ₹269 | Spices |
| Beetroot + ABC Combo | ₹673.50 | ₹898 | Combo |
| Complete Wellness Trio | ₹939 | ₹1,118 | Best Value |
| ABC + Moringa Duo | ₹878 | ₹1,198 | Combo |

## Design system

- Brand green `#2E5A44`, deep green `#1F3F30`, charcoal `#1C2B24`, cream `#F9FAF7`
- Pastel accents: pink `#F6E4E8`, mint `#E3F0E8`, sand `#F3ECDD`, gold `#C9A24B`
- Playfair Display (headings) + Inter (body/UI)

## Stack

Angular 20, standalone components, signals, zoneless change detection, lazy
routes, `@if` / `@for` / `@switch`. Separate `.ts` / `.html` / `.scss` per
component. No CSS framework — every style is written here.

The brief specified React + Next.js + Framer Motion; this is the Angular
translation. Framer Motion's intent is carried over with Angular equivalents:
route fades (a CSS `route-fade` class on each page), `whileTap` compression (the
`:active` scale on buttons), scroll reveals (an IntersectionObserver
`appReveal` directive), and the auto-opening cart on add.

Animations are **fail-safe**: elements are hidden by a JS-added class, so if JS
fails or is disabled, the whole site renders normally with nothing hidden.
Everything respects `prefers-reduced-motion`.

## Notes

- Product visuals are drawn jars and CSS/SVG infographics. Real photography and
  the actual infographic artwork are the obvious upgrade — the card, gallery,
  and hero all have clear slots for `<img>`.
- Checkout is a stub. The cart is fully functional up to that point (add,
  quantity, remove, variants, persistence, free-shipping meter).
- Cart persists to `localStorage` under `mr_organics_cart`.
