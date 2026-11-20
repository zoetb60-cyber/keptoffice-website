/* =========================================================
   Option 2 — interactive hero
   · a spotlight "lens" follows the cursor and reveals an inverted
     emerald version of the headline
   · dots light up and a soft coral glow trails the cursor
   · photo cards and chips drift in parallax at different depths
   Touch screens get a gentle automatic drift instead.
   ========================================================= */
(function () {
  "use strict";
  const hx = document.getElementById("hx");
  if (!hx) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  // Build the lens copy of the hero text (decorative, hidden from assistive tech and keyboard)
  const slot = hx.querySelector("[data-lens-slot]");
  const clone = hx.querySelector(".hx__content").cloneNode(true);
  clone.querySelectorAll("a").forEach((a) => { a.removeAttribute("href"); a.removeAttribute("data-tab-link"); a.setAttribute("tabindex", "-1"); });
  slot.appendChild(clone);
  const lens = hx.querySelector(".hx__lens");
  lens.setAttribute("inert", "");

  const movers = Array.from(hx.querySelectorAll("[data-depth]"));
  const hint = hx.querySelector(".hx__hint");

  let w = 0, h = 0;
  const measure = () => { const r = hx.getBoundingClientRect(); w = r.width; h = r.height; };
  measure();
  window.addEventListener("resize", measure);

  const target = { x: w * 0.3, y: h * 0.45, r: 0 };
  const cur = { x: target.x, y: target.y, r: 0 };
  const R = () => Math.max(110, Math.min(170, w * 0.11));
  let inside = false, auto = !canHover, t0 = performance.now(), running = false, moved = false;

  if (reduce) {
    // Static, still-beautiful state: no lens, cards in place.
    hx.style.setProperty("--r", "0px");
    if (hint) hint.hidden = true;
    return;
  }

  hx.addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;
    const r = hx.getBoundingClientRect();
    target.x = e.clientX - r.left;
    target.y = e.clientY - r.top;
    target.r = R();
    inside = true; auto = false;
    if (!moved && hint) { moved = true; hint.classList.add("is-gone"); }
  });
  hx.addEventListener("pointerleave", () => { inside = false; target.r = 0; });
  // Lens grows a touch over the headline / buttons for a nice "magnify" feel
  hx.querySelectorAll(".hx__title, .hx__btns").forEach((el) => {
    el.addEventListener("pointerenter", () => { if (inside) hx.classList.add("is-focus"); });
    el.addEventListener("pointerleave", () => hx.classList.remove("is-focus"));
  });

  function frame(now) {
    if (!running) return;
    if (auto) {
      // gentle figure-of-eight drift for touch devices
      const t = (now - t0) / 1000;
      target.x = w * (0.42 + 0.3 * Math.sin(t * 0.45));
      target.y = h * (0.5 + 0.22 * Math.sin(t * 0.9));
      target.r = Math.max(80, w * 0.16);
    }
    const ease = 0.14;
    const rT = target.r * (hx.classList.contains("is-focus") ? 1.25 : 1);
    cur.x += (target.x - cur.x) * ease;
    cur.y += (target.y - cur.y) * ease;
    cur.r += (rT - cur.r) * 0.12;
    hx.style.setProperty("--x", cur.x.toFixed(1) + "px");
    hx.style.setProperty("--y", cur.y.toFixed(1) + "px");
    hx.style.setProperty("--r", cur.r.toFixed(1) + "px");

    // Parallax: -1..1 from the centre
    const nx = (cur.x / (w || 1)) * 2 - 1, ny = (cur.y / (h || 1)) * 2 - 1;
    for (const m of movers) {
      const d = +m.dataset.depth;
      m.style.transform = `translate3d(${(-nx * d).toFixed(2)}px, ${(-ny * d).toFixed(2)}px, 0) rotate(${(nx * d * 0.06).toFixed(2)}deg)`;
    }
    requestAnimationFrame(frame);
  }

  // Only animate while the hero is on screen and the Home tab is open
  const start = () => { if (!running) { running = true; requestAnimationFrame(frame); } };
  const stop = () => { running = false; };
  const io = new IntersectionObserver((en) => (en[0].isIntersecting ? start() : stop()));
  io.observe(hx);
  document.addEventListener("tabchange", (e) => { if (e.detail === "home") { measure(); start(); } else stop(); });
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
})();
