/* =========================================================
   Kept Office — realistic shop mock-ups
   Turns each product's `demo` content (content.js) into a
   styled scene: printed pages, laptops, phones, a tablet and
   planners on a desk. Sizes use container units, so a mock-up
   scales from a small shop card to the large preview pop-up.
   ========================================================= */
(function () {
  "use strict";
  const K = window.KEPT;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const photo = (key) => (K.img[key] || K.img.heroDesk).replace(/w=\d+/, "w=520");
  const at = (l, t, extra = "") => `style="left:${l}%;top:${t}%;${extra}"`;

  /* ---- desk props ---- */
  const cup = (l, t) => `<i class="mk-cup" ${at(l, t)} aria-hidden="true"></i>`;
  const pen = (l, t, r) => `<i class="mk-pen" ${at(l, t, `transform:rotate(${r}deg)`)} aria-hidden="true"></i>`;
  const note = (l, t, txt) => `<i class="mk-note" ${at(l, t, "transform:rotate(6deg)")} aria-hidden="true">${esc(txt)}</i>`;
  const pencil = (l, t, r) => `<i class="mk-pencil" ${at(l, t, `transform:rotate(${r}deg)`)} aria-hidden="true"></i>`;

  /* ---- reusable pieces ---- */
  function laptop(file, inner) {
    return `<div class="mk-laptop"><div class="mk-laptop__screen"><div class="mk-laptop__view">
      <div class="mk-bar"><i></i><i></i><i></i><span>${esc(file)}</span></div>${inner}</div></div><div class="mk-laptop__base"></div></div>`;
  }
  function slideHTML(s) {
    const bg = s.photo ? `<img src="${photo(s.photo)}" alt="" loading="lazy"><span class="mk-shade"></span>` : "";
    const cls = s.photo ? "mk-sq--photo" : "mk-sq--" + (s.tone || "soft");
    const main = s.quote ? `<b class="mk-sq__quote">${esc(s.quote)}</b>` : `<b class="mk-sq__text">${esc(s.text)}</b>`;
    return `<div class="mk-sq__in ${cls}">${bg}<span class="mk-sq__body">${main}<small>${esc(s.small || "")}</small></span></div>`;
  }
  function screenHTML(s) {
    const bg = s.photo ? `<img src="${photo(s.photo)}" alt="" loading="lazy">` : "";
    let body = "";
    if (s.poll) body = `<span class="mk-poll"><b>${esc(s.poll[0])}</b><span><i>${esc(s.poll[1])}</i><i>${esc(s.poll[2])}</i></span></span>`;
    else if (s.ask) body = `<span class="mk-ask"><b>${esc(s.ask)}</b><i>Type something…</i></span>`;
    else body = `<span class="mk-story__cta"><b>${esc(s.text)}</b><small>${esc(s.small || "")}</small></span>`;
    return `<span class="mk-story ${s.photo ? "" : "mk-story--" + (s.tone || "accent")}">${bg}
      <span class="mk-story__top"><i></i><i></i><i></i></span>
      <span class="mk-story__who"><i></i>yourbusiness</span>${body}</span>`;
  }

  /* ---- scenes ---- */
  const scenes = {
    doc(d) {
      let body = "";
      if (d.blocks) body = d.blocks.map(([h, t]) => `<b class="mk-doc__h">${esc(h)}</b><p class="mk-doc__p">${esc(t)}</p>`).join("");
      if (d.list) {
        const tag = d.check ? "ul" : "ol";
        body += `<${tag} class="${d.check ? "mk-check" : ""}">${d.list.map((x, i) => `<li${d.check && i < (d.done == null ? d.list.length : d.done) ? ' class="on"' : ""}>${esc(x)}</li>`).join("")}</${tag}>`;
      }
      return `${cup(70, 56)}${pen(1, 84, -18)}
        <div class="mk-paper mk-doc mk-doc--back" ${at(33, 11, "transform:rotate(6deg)")}></div>
        <div class="mk-paper mk-doc" ${at(25, 6, "transform:rotate(-3deg)")}>
          <span class="mk-brand">YOUR BUSINESS</span>
          <b class="mk-doc__title">${esc(d.title)}</b>
          <span class="mk-doc__sub">${esc(d.sub || "")}</span>${body}</div>`;
    },
    sheet(d) {
      const n = d.cols.length;
      const letters = "ABCDEF".slice(0, n).split("");
      const head = `<tr class="mk-grid__abc"><th></th>${letters.map((l) => `<th>${l}</th>`).join("")}</tr>`;
      const hdr = `<tr class="mk-grid__hd"><th>1</th>${d.cols.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`;
      const rows = d.rows.map((r, i) => `<tr><th>${i + 2}</th>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("");
      const tot = d.total ? `<tr class="mk-grid__tot"><th>${d.rows.length + 2}</th>${d.total.map((c) => `<td>${esc(c)}</td>`).join("")}${d.total.length < n ? "<td></td>".repeat(n - d.total.length) : ""}</tr>` : "";
      let chart = "";
      if (d.chart) {
        const max = Math.max(...d.chart);
        chart = `<div class="mk-chart"><b>Profit by month</b><div class="mk-chart__bars">${d.chart.map((v, i) => `<span style="height:${Math.round((v / max) * 100)}%"><i>${esc(d.rows[i][0])}</i></span>`).join("")}</div></div>`;
      }
      const inner = `<div class="mk-ribbon"><i></i><i></i><i></i><i></i><i></i></div>
        <div class="mk-sheet${d.chart ? " mk-sheet--chart" : ""}"><table class="mk-grid">${head}${hdr}${rows}${tot}</table>${chart}</div>
        <div class="mk-tabsbar"><span class="on">Sheet 1</span><span>Summary</span><span>Settings</span></div>`;
      return `${cup(-5, 58)}${pen(70, 84, 18)}${laptop(d.file, inner)}`;
    },
    dashboard(d) {
      const side = ["Home", "Tasks", "Clients", "Content", "Finance", "Templates"];
      const inner = `<div class="mk-app"><div class="mk-side"><b>Workspace</b>${side.map((s, i) => `<span${i === 1 ? ' class="on"' : ""}>${s}</span>`).join("")}</div>
        <div class="mk-main"><b class="mk-main__title">${esc(d.title)}</b>
        <div class="mk-kanban">${d.cols.map(([h, cards], ci) => `<div class="mk-col"><span class="mk-col__h"><i class="t${ci}"></i>${esc(h)} <em>${cards.length}</em></span>${cards.map((c) => `<span class="mk-card">${esc(c)}<i class="t${ci}"></i></span>`).join("")}</div>`).join("")}</div></div></div>`;
      return `${cup(86, 66)}${note(1, 66, "Plan Q2!")}${laptop(d.file, inner)}`;
    },
    inbox(d) {
      const inner = `<div class="mk-app"><div class="mk-side mk-side--mail"><span class="mk-compose">Compose</span>${d.folders.map(([f, c], i) => `<span${i === 0 ? ' class="on"' : ""}>${esc(f)}<em>${esc(c)}</em></span>`).join("")}</div>
        <div class="mk-main mk-main--mail"><span class="mk-zero">Inbox zero — you're all caught up ✓</span>
        ${d.msgs.map(([who, sub, tag]) => `<span class="mk-msg"><b>${esc(who)}</b><span>${esc(sub)}</span><i class="mk-tag mk-tag--${esc(tag.toLowerCase())}">${esc(tag)}</i></span>`).join("")}</div></div>`;
      return `${cup(86, 66)}${pen(2, 84, -14)}${laptop("Mail", inner)}`;
    },
    calendar(d) {
      const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      let cells = "";
      for (let i = 0; i < 35; i++) {
        const n = i - d.start + 1;
        const ok = n >= 1 && n <= 30;
        const tag = ok && d.tags[n];
        cells += `<span class="${ok ? "" : "off"}">${ok ? `<em>${n}</em>` : ""}${tag ? `<i class="mk-pill mk-pill--${(n % 3)}">${esc(tag)}</i>` : ""}</span>`;
      }
      return `${pen(62, 88, 12)}${note(86, 64, "Film Reels Thurs")}
        <div class="mk-paper mk-cal" ${at(9, 7, "transform:rotate(-1.5deg)")}>
          <div class="mk-cal__head"><b>${esc(d.month)}</b><span>CONTENT CALENDAR</span></div>
          <div class="mk-cal__days">${days.map((x) => `<span>${x}</span>`).join("")}</div>
          <div class="mk-cal__grid">${cells}</div></div>`;
    },
    post(d) {
      const pos = [[2, 22, -6], [34, 12, 0], [66, 22, 6]];
      return d.slides.map((s, i) => `<div class="mk-sq" ${at(pos[i][0], pos[i][1], `transform:rotate(${pos[i][2]}deg);z-index:${i === 1 ? 3 : 1}`)}>${slideHTML(s)}</div>`).join("");
    },
    story(d) {
      const pos = [[14, 14, -5, ""], [38.5, 6, 0, " mk-phone--lg"], [65, 14, 5, ""]];
      return d.screens.map((s, i) => `<div class="mk-phone${pos[i][3]}" ${at(pos[i][0], pos[i][1], `transform:rotate(${pos[i][2]}deg);z-index:${i === 1 ? 3 : 1}`)}><div class="mk-phone__screen">${screenHTML(s)}</div></div>`).join("");
    },
    planner(d) {
      const day = ([name, items]) => `<div class="mk-day"><b>${esc(name)}</b>${items.map((x) => `<span class="mk-hand">${esc(x)}</span>`).join("")}<span></span></div>`;
      const habits = ["Water", "Move", "Read"].map((h, r) => `<div class="mk-habit"><span>${h}</span>${Array.from({ length: 7 }, (_, i) => `<i${(i + r) % 3 !== 2 && i < 5 ? ' class="on"' : ""}></i>`).join("")}</div>`).join("");
      return `${cup(80, 66)}${pen(2, 82, -12)}
        <div class="mk-spread" ${at(12, 7)}>
          <div class="mk-page"><span class="mk-brand">WEEK OF</span><span class="mk-hand mk-hand--lg">${esc(d.week)}</span>${d.days.map(day).join("")}</div>
          <div class="mk-rings" aria-hidden="true"></div>
          <div class="mk-page"><span class="mk-brand">TOP 3 PRIORITIES</span>${d.top.map((x, i) => `<div class="mk-line"><em>${i + 1}</em><span class="mk-hand">${esc(x)}</span></div>`).join("")}
            <span class="mk-brand mk-brand--gap">HABITS</span>${habits}
            <span class="mk-brand mk-brand--gap">NOTES</span><div class="mk-lines"></div></div>
        </div>`;
    },
    goals(d) {
      return `${cup(72, 50)}${pencil(4, 74, -20)}
        <div class="mk-paper mk-doc mk-doc--back" ${at(34, 12, "transform:rotate(5deg)")}></div>
        <div class="mk-paper mk-doc" ${at(27, 6, "transform:rotate(-2deg)")}>
          <span class="mk-brand">QUARTER 2</span><b class="mk-doc__title">90-Day Plan</b><span class="mk-doc__sub">Goals · weekly check-ins · review</span>
          ${d.goals.map(([g, p]) => `<div class="mk-goal"><span><b>${esc(g)}</b><em>${p}%</em></span><i><s style="width:${p}%"></s></i></div>`).join("")}
          <span class="mk-brand mk-brand--gap">WEEKLY CHECK-IN</span>
          <div class="mk-weeks">${Array.from({ length: 12 }, (_, i) => `<i${i < d.weeks ? ' class="on"' : ""}>${i + 1}</i>`).join("")}</div>
        </div>`;
    },
    tablet(d) {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
      return `${cup(86, 58)}${pencil(60, 88, -10)}
        <div class="mk-tablet" ${at(10, 7)}><div class="mk-tablet__view">
          <div class="mk-daily">
            <div class="mk-daily__col"><span class="mk-brand">${esc(d.day.toUpperCase())}</span><b class="mk-daily__date">${esc(d.date)}</b>
              ${d.plan.map(([t, x]) => `<div class="mk-slot"><em>${esc(t)}</em><span class="mk-hand">${esc(x)}</span></div>`).join("")}</div>
            <div class="mk-daily__col"><span class="mk-brand">TO DO</span>
              <ul class="mk-check">${d.todo.map((x, i) => `<li${i < d.done ? ' class="on"' : ""}><span class="mk-hand">${esc(x)}</span></li>`).join("")}</ul>
              <span class="mk-brand mk-brand--gap">NOTES</span><div class="mk-lines"></div></div>
          </div>
          <div class="mk-mtabs">${months.map((m, i) => `<span${i === 3 ? ' class="on"' : ""}>${m}</span>`).join("")}</div>
        </div></div>`;
    },
    invoice(d) {
      return `${cup(73, 56)}${pen(3, 72, -22)}
        <div class="mk-paper mk-doc mk-inv" ${at(26, 5, "transform:rotate(-2deg)")}>
          <div class="mk-inv__top"><span class="mk-logo">YOUR<br>LOGO</span><b class="mk-doc__title">Invoice</b></div>
          <div class="mk-inv__meta"><span><em>Bill to</em>${esc(d.to)}</span><span><em>Invoice</em>#${esc(d.no)}<br><em>Due</em>30 April</span></div>
          <div class="mk-inv__row mk-inv__row--hd"><span>Description</span><span>Amount</span></div>
          ${d.lines.map(([a, b]) => `<div class="mk-inv__row"><span>${esc(a)}</span><span>${esc(b)}</span></div>`).join("")}
          <div class="mk-inv__sum"><span>Subtotal</span><span>${esc(d.sub)}</span><span>VAT 15%</span><span>${esc(d.vat)}</span><b>Total due</b><b>${esc(d.total)}</b></div>
          <span class="mk-inv__thanks">Thank you for your business!</span>
        </div>`;
    }
  };

  window.KEPT_MOCK = function (p, opts = {}) {
    const fn = scenes[p.kind];
    if (!fn || !p.demo) return null;
    return `<span class="mk mk--${p.kind}" role="img" aria-label="Preview of ${esc(p.name)}">${fn(p.demo)}${opts.badge !== false && p.fmt ? `<span class="mk-badge">${esc(p.fmt)}</span>` : ""}</span>`;
  };
})();
