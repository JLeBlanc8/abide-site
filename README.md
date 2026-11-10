# Abide website

Plain HTML and CSS, no build step. Four pages: `index.html` (home), `red-dirt.html`, `cactus-club.html`, `owners.html`.
Every outside link (booking buttons, email, Instagram) is set in one place: `site.js`.

Preview on the Mac: `python3 -m http.server 4312` in this folder, then open http://localhost:4312.

## To go live

1. **Buy the domain.** stayabide.com was free on 2026-11-10 (about $10–15 a year at Cloudflare, Namecheap or Squarespace).
2. ~~Airbnb listing links~~ done 2026-11-10 (in `site.js`).
3. **Direct booking (optional, later).** If Uplisting's direct booking site is turned on, paste those links into `redDirtDirect` / `cactusDirect`; they replace the Airbnb links automatically.
4. **Email.** The site says hello@stayabide.com. Set up free forwarding to your inbox (Cloudflare Email Routing does this), or change `contact` in `site.js`.
5. **Host it free.** Cloudflare Pages or Netlify: drag this folder in, then connect the domain.
6. **Mag reads his line** on the owners page before it goes up.

The Instagram link points to @reddirtretreatlbk until Abide has its own page.

## Content rules

- Real photos only. The front of The Cactus Club shows the house number, so it isn't used.
- No money figures except the 20% fee. No guest names, no addresses.
- Every claim is true today: 5.0, Guest Favorite, Superhost, the three bedrooms at Red Dirt. Add reviews only as real quotes copied from Airbnb.
