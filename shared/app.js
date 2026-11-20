/* =========================================================
   Kept Office — shared behaviour
   Tabs, rendering from content.js, shop filters + preview,
   forms, cookie notice, scroll reveals.
   ========================================================= */
(function () {
  "use strict";
  const K = window.KEPT;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const zar = (usd) => "≈ R" + Math.round(usd * K.brand.zarRate).toLocaleString("en-ZA").replace(/\s/g, ",");
  const usd = (n) => "$" + n.toLocaleString("en-US");
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  };
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let io; // IntersectionObserver for scroll reveals (created lazily)

  /* ---------- Product preview pictures (SVG mock-ups) ---------- */
  function preview(kind, label) {
    const A = "var(--pv-a,#0E7C6B)", B = "var(--pv-b,#FF8A6B)", BG = "var(--pv-bg,#F4F7F6)", L = "var(--pv-line,#D9E2E0)", P = "var(--pv-paper,#fff)";
    let body = "";
    const r = (x, y, w, h, f, rx = 4) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" style="fill:${f}"/>`;
    if (kind === "calendar") {
      body += r(40, 26, 220, 160, P, 10) + r(40, 26, 220, 30, A, 10) + r(40, 46, 220, 10, A, 0);
      for (let row = 0; row < 4; row++) for (let c = 0; c < 7; c++) {
        const hot = (row * 7 + c) % 5 === 2;
        body += r(50 + c * 29.5, 66 + row * 28, 24, 22, hot ? B : L, 4);
      }
    } else if (kind === "post") {
      for (let i = 0; i < 9; i++) {
        const x = 60 + (i % 3) * 62, y = 18 + Math.floor(i / 3) * 62;
        body += r(x, y, 56, 56, [A, B, L][i % 3], 6);
      }
    } else if (kind === "story") {
      body += r(108, 12, 84, 176, "#1d1d1f", 14) + r(113, 20, 74, 160, A, 9);
      body += r(121, 120, 58, 12, P, 6) + r(121, 138, 40, 8, B, 4) + `<circle cx="150" cy="70" r="20" style="fill:${B}"/>`;
      body += r(40, 40, 52, 120, L, 10) + r(208, 40, 52, 120, L, 10);
    } else if (kind === "sheet") {
      body += r(36, 22, 228, 166, P, 8) + r(36, 22, 228, 26, A, 8) + r(36, 38, 228, 10, A, 0);
      for (let row = 0; row < 6; row++) for (let c = 0; c < 4; c++) body += r(46 + c * 54, 58 + row * 20, 46, 12, row === 5 && c === 3 ? B : L, 3);
    } else if (kind === "planner") {
      body += r(30, 22, 118, 166, P, 6) + r(152, 22, 118, 166, P, 6);
      body += r(42, 34, 60, 10, A, 3) + r(164, 34, 60, 10, B, 3);
      for (let i = 0; i < 7; i++) {
        body += r(42, 56 + i * 18, 8, 8, i < 3 ? A : L, 2) + r(56, 58 + i * 18, 80, 4, L, 2);
        body += r(164, 58 + i * 18, 94, 4, L, 2);
      }
    } else if (kind === "dashboard") {
      body += r(26, 22, 248, 166, P, 10) + r(26, 22, 58, 166, A, 10) + r(74, 22, 10, 166, A, 0);
      for (let i = 0; i < 5; i++) body += r(36, 40 + i * 18, 38, 6, "rgba(255,255,255,.55)", 3);
      body += r(96, 36, 76, 54, L, 8) + r(182, 36, 80, 54, B, 8) + r(96, 100, 166, 76, L, 8);
      body += `<polyline points="106,160 136,140 166,150 196,122 226,132 252,112" style="fill:none;stroke:${A};stroke-width:4;stroke-linecap:round;stroke-linejoin:round"/>`;
    } else { // doc
      body += r(70, 14, 160, 182, P, 6) + r(86, 32, 90, 12, A, 3);
      for (let i = 0; i < 8; i++) body += r(86, 56 + i * 15, i % 3 === 2 ? 90 : 128, 5, L, 2);
      body += r(86, 178, 50, 8, B, 3);
    }
    return `<svg viewBox="0 0 300 210" role="img" aria-label="Preview of ${esc(label)}" preserveAspectRatio="xMidYMid slice"><rect width="300" height="210" style="fill:${BG}"/>${body}</svg>`;
  }
  window.KEPT_PREVIEW = preview;
  // Realistic mock-up (shared/mockups.js) when available, simple SVG otherwise.
  const pic = (p, opts) => (window.KEPT_MOCK && window.KEPT_MOCK(p, opts)) || preview(p.kind, p.name);

  /* ---------- Renderers ---------- */
  const R = {
    services(el) {
      el.innerHTML = K.services.map((s, i) => `
        <a class="svc" href="#${s.tab}" data-tab-link="${s.tab}" data-reveal style="--d:${i * 80}ms">
          <div class="svc__img"><img src="${K.img[s.img]}" alt="" loading="lazy"></div>
          <div class="svc__body">
            <h3 class="svc__title">${esc(s.title)}</h3>
            <p class="svc__text">${esc(s.text)}</p>
            <span class="svc__from">From ${usd(s.from)}${s.unit}</span>
            <span class="svc__arrow" aria-hidden="true">→</span>
          </div>
        </a>`).join("");
    },
    steps(el) {
      el.innerHTML = K.steps.map((s, i) => `
        <li class="step" data-reveal style="--d:${i * 100}ms">
          <span class="step__n">${s.n}</span>
          <h3 class="step__title">${esc(s.title)}</h3>
          <p class="step__text">${esc(s.text)}</p>
        </li>`).join("");
    },
    packages(el) {
      const svc = el.dataset.service;
      const label = { executive: "Executive Support", social: "Social Media", websites: "Website" }[svc];
      el.innerHTML = K.packages[svc].map((p, i) => `
        <article class="pkg${p.featured ? " pkg--featured" : ""}" data-reveal style="--d:${i * 90}ms">
          ${p.featured ? `<span class="pkg__badge">${p.once ? "Live in 14 days" : "Most popular"}</span>` : ""}
          <h3 class="pkg__name">${esc(p.name)}</h3>
          <p class="pkg__price"><span class="pkg__amt">${usd(p.price)}</span><span class="pkg__per">${p.once ? " once-off" : "/mo"}</span></p>
          <p class="pkg__zar">${zar(p.price)}${p.once ? "" : " per month"}</p>
          <ul class="pkg__list">${p.items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          <a class="btn ${p.featured ? "btn--primary" : "btn--ghost"} pkg__cta" href="#contact" data-tab-link="contact" data-topic="${esc(label + " — " + p.name)}">${p.once ? "Start my website" : "Choose " + esc(p.name)}</a>
        </article>`).join("");
    },
    faq(el) {
      el.innerHTML = K.faq[el.dataset.service].map(([q, a]) => `
        <details class="faq__item">
          <summary><span>${esc(q)}</span><i class="faq__icon" aria-hidden="true"></i></summary>
          <div class="faq__a"><p>${esc(a)}</p></div>
        </details>`).join("");
    },
    addons(el) {
      el.innerHTML = K.addons.map((a) => `
        <li class="addon"><span class="addon__name">${esc(a.name)}</span><span class="addon__price">${esc(a.price)}</span><small class="addon__zar">${zar(a.zar)}</small></li>`).join("");
    },
    samples(el) {
      el.innerHTML = K.samples.map((s, i) => {
        const tag = s.url ? "a" : "div";
        const attrs = s.url ? `href="${s.url}" target="_blank" rel="noopener"` : `aria-disabled="true"`;
        return `
        <${tag} class="sample${s.url ? "" : " sample--soon"}" ${attrs} data-reveal style="--d:${i * 90}ms">
          <div class="browser">
            <div class="browser__bar"><i></i><i></i><i></i><span class="browser__url">${esc(s.domain)}</span></div>
            <div class="browser__view">
              <img src="${K.img[s.img]}" alt="Screenshot of the ${esc(s.name)} sample website" loading="lazy">
              <div class="browser__mock">
                <div class="browser__nav"><b>${esc(s.name)}</b><span>Menu · About · Book</span></div>
                <p class="browser__head">${esc(s.type === "Restaurant" ? "Seasonal plates, Cape Town" : s.type === "Beauty salon" ? "Skin, brows & calm" : "Homes on the Atlantic seaboard")}</p>
              </div>
            </div>
          </div>
          <div class="sample__meta">
            <h3>${esc(s.name)}</h3>
            <p>${esc(s.type)} · sample site for a fictional business</p>
            <span class="sample__cta">${s.url ? "View the live sample ↗" : "Coming soon"}</span>
          </div>
        </${tag}>`;
      }).join("");
    },
    bundles(el) {
      el.innerHTML = K.bundles.map((b, i) => `
        <article class="bundle${b.featured ? " bundle--featured" : ""}" data-reveal style="--d:${i * 90}ms">
          <div class="bundle__preview">${pic(b)}</div>
          <div class="bundle__body">
            ${b.featured ? `<span class="pkg__badge">Best value</span>` : ""}
            <h3 class="bundle__name">${esc(b.name)}</h3>
            <p class="bundle__price"><strong>${usd(b.price)}</strong> <s>${usd(b.was)}</s></p>
            <ul class="bundle__list">${b.items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
            <button class="btn ${b.featured ? "btn--primary" : "btn--ghost"}" data-open-product="bundle:${i}">Preview bundle</button>
          </div>
        </article>`).join("");
    },
    filters(el) {
      const cats = ["All", ...new Set(K.products.map((p) => p.cat))];
      el.setAttribute("role", "group");
      el.setAttribute("aria-label", "Filter templates by category");
      el.innerHTML = cats.map((c, i) => `<button class="chip${i === 0 ? " is-active" : ""}" aria-pressed="${i === 0}" data-filter="${esc(c)}">${esc(c)}</button>`).join("");
      el.addEventListener("click", (e) => {
        const b = e.target.closest("[data-filter]");
        if (!b) return;
        $$(".chip", el).forEach((c) => { c.classList.toggle("is-active", c === b); c.setAttribute("aria-pressed", c === b); });
        const f = b.dataset.filter;
        $$(".prod").forEach((p) => {
          const show = f === "All" || p.dataset.cat === f;
          p.hidden = !show;
          if (show) { p.classList.remove("is-visible"); requestAnimationFrame(() => p.classList.add("is-visible")); }
        });
      });
    },
    products(el) {
      el.innerHTML = K.products.map((p, i) => `
        <button class="prod" data-cat="${esc(p.cat)}" data-open-product="product:${i}" data-reveal style="--d:${(i % 6) * 60}ms">
          <span class="prod__preview">${pic(p, { badge: false })}</span>
          <span class="prod__body">
            <span class="prod__cat">${esc(p.cat)}</span>
            <span class="prod__name">${esc(p.name)}</span>
            ${p.fmt ? `<span class="prod__fmt">${esc(p.fmt)} · instant download</span>` : ""}
            <span class="prod__foot"><span class="prod__price">${usd(p.price)} <small>${zar(p.price)}</small></span><span class="prod__view">Preview</span></span>
          </span>
        </button>`).join("");
    },
    topics(el) {
      const opts = ["A free 30-minute discovery call"];
      ["executive", "social"].forEach((s) => K.packages[s].forEach((p) => opts.push(({ executive: "Executive Support", social: "Social Media" })[s] + " — " + p.name)));
      opts.push("Website — Business Website", "Template shop question", "Something else");
      el.innerHTML = opts.map((o) => `<option>${esc(o)}</option>`).join("");
    }
  };
  $$("[data-render]").forEach((el) => R[el.dataset.render] && R[el.dataset.render](el));
  $$("[data-offer]").forEach((el) => (el.textContent = K.brand.offer));
  $$("[data-email]").forEach((el) => { el.textContent = K.brand.email; if (el.tagName === "A") el.href = "mailto:" + K.brand.email; });
  $$("[data-booking]").forEach((el) => { el.href = K.brand.bookingUrl; el.target = "_blank"; el.rel = "noopener"; });
  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

  /* ---------- Tabs (one page, each tab shows only its own content) ---------- */
  const panels = $$("[data-panel]");
  const names = panels.map((p) => p.dataset.panel);
  const baseTitle = document.title;
  const header = $(".header");
  function show(name, opts = {}) {
    if (!names.includes(name)) name = "home";
    panels.forEach((p) => {
      const on = p.dataset.panel === name;
      p.hidden = !on;
      p.classList.toggle("is-active", on);
    });
    $$(".nav [data-tab-link], .tabs [data-tab-link]").forEach((a) => {
      const on = a.dataset.tabLink === name;
      a.classList.toggle("is-active", on);
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    const panel = panels.find((p) => p.dataset.panel === name);
    const label = panel && panel.dataset.title;
    document.title = name === "home" ? baseTitle : (label || name) + " — Kept Office";
    document.body.dataset.tab = name;
    document.body.classList.remove("nav-open");
    const toggle = $(".nav-toggle");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    if (opts.push) history.pushState({ tab: name }, "", "#" + name);
    if (opts.scroll !== false) window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    if (opts.focus && panel) {
      const h = $("h1, h2", panel);
      if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
    }
    observeReveals();
    document.dispatchEvent(new CustomEvent("tabchange", { detail: name }));
  }
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-tab-link]");
    if (!a) return;
    e.preventDefault();
    if (a.dataset.topic) {
      const sel = $("select[name=topic]");
      if (sel) sel.value = a.dataset.topic;
    }
    show(a.dataset.tabLink, { push: true, focus: true });
  });
  window.addEventListener("popstate", () => show(location.hash.slice(1) || "home", { scroll: false }));
  show(location.hash.slice(1) || "home", { scroll: false });

  const toggle = $(".nav-toggle");
  if (toggle) toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", open);
  });

  /* ---------- Header state on scroll ---------- */
  const onScroll = () => header && header.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Scroll reveals ---------- */
  function observeReveals() {
    if (reduceMotion || !("IntersectionObserver" in window)) { $$("[data-reveal]").forEach((el) => el.classList.add("is-visible")); return; }
    if (!io) io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
    }), { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    $$("[data-reveal]:not(.is-visible)").forEach((el) => io.observe(el));
  }
  observeReveals();

  /* ---------- Count-up numbers ---------- */
  $$("[data-count]").forEach((el) => {
    const end = +el.dataset.count, pre = el.dataset.prefix || "", suf = el.dataset.suffix || "";
    if (reduceMotion) { el.textContent = pre + end.toLocaleString() + suf; return; }
    const run = () => {
      const t0 = performance.now(), dur = 1400;
      const tick = (t) => {
        const k = Math.min(1, (t - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - k, 3)));
        el.textContent = pre + v.toLocaleString() + suf;
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    new IntersectionObserver((en, o) => { if (en[0].isIntersecting) { run(); o.disconnect(); } }).observe(el);
  });

  /* ---------- Modal (product preview + policies) ---------- */
  const modal = document.createElement("dialog");
  modal.className = "modal";
  modal.innerHTML = `<div class="modal__inner"><button class="modal__close" aria-label="Close">×</button><div class="modal__content"></div></div>`;
  document.body.appendChild(modal);
  const mContent = $(".modal__content", modal);
  const openModal = (html) => {
    mContent.innerHTML = html;
    if (modal.showModal) modal.showModal(); else modal.setAttribute("open", "");
    document.body.classList.add("modal-open");
  };
  const closeModal = () => { if (modal.close) modal.close(); else modal.removeAttribute("open"); };
  modal.addEventListener("close", () => document.body.classList.remove("modal-open"));
  $(".modal__close", modal).addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-open-product]");
    if (b) {
      const [type, i] = b.dataset.openProduct.split(":");
      const p = type === "bundle" ? K.bundles[i] : K.products[i];
      openModal(`
        <div class="pmodal">
          <div class="pmodal__preview">${pic(p)}</div>
          <div class="pmodal__info">
            <span class="prod__cat">${type === "bundle" ? "Bundle" : esc(p.cat)} · instant download${p.fmt ? " · " + esc(p.fmt) : ""}</span>
            <h2 class="pmodal__name">${esc(p.name)}</h2>
            <p class="pmodal__price">${usd(p.price)} <small>${zar(p.price)}</small></p>
            <h3 class="pmodal__h">What's included</h3>
            <ul class="pkg__list">${p.items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
            <button class="btn btn--primary pmodal__buy" data-buy>Buy &amp; download</button>
            <p class="pmodal__note" hidden>Secure checkout with PayFast, Yoco or PayPal is being connected. Your download link is emailed instantly after payment.</p>
          </div>
        </div>`);
      return;
    }
    if (e.target.closest("[data-buy]")) { const n = $(".pmodal__note", modal); if (n) n.hidden = false; return; }
    const pol = e.target.closest("[data-policy]");
    if (pol) {
      e.preventDefault();
      const t = {
        privacy: ["Privacy policy", "Kept Office collects only the details you choose to send (such as your name and email) to reply to you, deliver purchases and provide services. Your information is never sold. Client account access is used only for agreed work and removed when you ask. Email " + K.brand.email + " to see or delete your data."],
        refund: ["Refund policy", "Monthly packages are paid upfront and can be cancelled before the next month starts. Because templates are instant digital downloads, they are non-refundable — but if a file is faulty, email " + K.brand.email + " and it will be fixed or replaced."]
      }[pol.dataset.policy];
      openModal(`<div class="policy"><h2>${t[0]}</h2><p>${esc(t[1])}</p><p class="policy__small">Last updated ${new Date().toLocaleDateString("en-ZA", { month: "long", year: "numeric" })}.</p></div>`);
    }
  });

  /* ---------- Forms ---------- */
  $$("form[data-form]").forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const status = $(".form__status", form);
      const data = new FormData(form);
      const say = (msg, ok) => { if (status) { status.textContent = msg; status.dataset.state = ok ? "ok" : "err"; } };
      if (K.brand.formEndpoint) {
        try {
          const res = await fetch(K.brand.formEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
          if (!res.ok) throw new Error();
          form.reset();
          say(form.dataset.form === "lead" ? "Thank you! Your free download is on its way to your inbox." : "Thank you — I'll reply within one business day.", true);
        } catch (err) { say("Sorry, that didn't send. Please email " + K.brand.email + ".", false); }
        return;
      }
      const subject = form.dataset.form === "lead" ? "Free content calendar" : (data.get("topic") || "Enquiry");
      const body = form.dataset.form === "lead"
        ? "Please send me the free content calendar.\n\nEmail: " + data.get("email")
        : `Hi Zoe,\n\n${data.get("message") || ""}\n\n— ${data.get("name") || ""}\n${data.get("email") || ""}${data.get("company") ? "\n" + data.get("company") : ""}`;
      window.location.href = `mailto:${K.brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      say("Opening your email app… If nothing happens, email " + K.brand.email + ".", true);
    });
  });

  /* ---------- Cookie notice ---------- */
  if (!store.get("kept-cookies")) {
    const c = document.createElement("div");
    c.className = "cookie";
    c.setAttribute("role", "region");
    c.setAttribute("aria-label", "Cookie notice");
    c.innerHTML = `<p>We use essential cookies, plus analytics only if you allow them. <a href="#" data-policy="privacy">Privacy policy</a></p>
      <div class="cookie__btns"><button class="btn btn--ghost btn--sm" data-cookie="essential">Essential only</button><button class="btn btn--primary btn--sm" data-cookie="all">Allow analytics</button></div>`;
    document.body.appendChild(c);
    requestAnimationFrame(() => c.classList.add("is-in"));
    c.addEventListener("click", (e) => {
      const b = e.target.closest("[data-cookie]");
      if (!b) return;
      store.set("kept-cookies", b.dataset.cookie);
      // TODO: load Google Analytics here only when b.dataset.cookie === "all"
      c.classList.remove("is-in");
      setTimeout(() => c.remove(), 400);
    });
  }
})();
