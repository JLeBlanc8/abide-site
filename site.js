// Every outside link on the site lives here, so going live means editing this one file.
// Any element with data-link="key" gets href = LINKS[key]. A key left empty shows the
// "coming soon" fallback text instead of a dead link.
const LINKS = {
  // Paste each house's Airbnb listing link (airbnb.com/rooms/…).
  redDirtBook: "",
  cactusBook: "",
  // Once Uplisting's direct booking site is on, put those links here and they win over Airbnb.
  redDirtDirect: "",
  cactusDirect: "",
  // Where owners and guests reach Abide.
  contact: "mailto:hello@stayabide.com",
  instagram: "https://www.instagram.com/reddirtretreatlbk/",
};

const pick = (key) => {
  if (key === "redDirtBook") return LINKS.redDirtDirect || LINKS.redDirtBook;
  if (key === "cactusBook") return LINKS.cactusDirect || LINKS.cactusBook;
  return LINKS[key];
};

document.querySelectorAll("[data-link]").forEach((a) => {
  const url = pick(a.dataset.link);
  if (url) {
    a.href = url;
    if (/^https?:/.test(url)) { a.target = "_blank"; a.rel = "noopener"; }
  } else {
    a.removeAttribute("href");
    a.classList.add("soon");
    if (a.dataset.soon) a.textContent = a.dataset.soon;
  }
});

document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
