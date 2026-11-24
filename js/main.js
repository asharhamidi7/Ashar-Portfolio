(function () {
  "use strict";
  const D = window.PORTFOLIO;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const ICONS = {
    github: '<svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>',
    email: '<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5zM4 7.4V18h16V7.4l-8 5.6zM4.6 6l7.4 5.2L19.4 6z"/></svg>'
  };

  function socials(target) {
    Object.keys(D.socials).forEach((k) => {
      if (!D.socials[k] || !ICONS[k]) return;
      const a = el("a");
      a.href = D.socials[k];
      a.setAttribute("aria-label", k);
      if (k !== "email") { a.target = "_blank"; a.rel = "noopener"; }
      a.innerHTML = ICONS[k];
      target.appendChild(a);
    });
  }

  /* ---------- BASIC ---------- */
  const fullName = D.firstName + " " + D.lastName;
  document.title = fullName + " | Portfolio";
  $("#brandMark").textContent = D.firstName.charAt(0).toUpperCase();
  $("#brandFirst").textContent = D.firstName;
  $("#brandLast").textContent = D.lastName;
  $("#badge").textContent = D.badge;
  $("#nameFirst").textContent = D.firstName;
  $("#nameLast").textContent = D.lastName;
  $("#tagline").textContent = D.tagline;
  $("#heroPhoto").src = D.photo;
  $("#heroPhoto").alt = "Portrait of " + fullName;
  $("#heroBg").style.backgroundImage = "url('" + D.photo + "')";
  $("#cardTitle").textContent = D.cardTitle;
  $("#cardSub").textContent = D.cardSubtitle;
  [["#chipA", D.chips[0]], ["#chipB", D.chips[1]]].forEach(([sel, c]) => {
    if (!c) return;
    $(sel).innerHTML = "";
    $(sel).append(el("b", null, c.icon + " " + c.value), el("small", null, c.label));
  });
  ["#navResume", "#viewResume", "#downloadResume"].forEach((s) => ($(s).href = D.resumeFile));
  socials($("#heroSocials"));
  socials($("#contactSocials"));
  $("#footName").textContent = fullName;
  $("#footYear").textContent = "© " + new Date().getFullYear();

  /* typing role */
  (function typeRoles() {
    const t = $("#roleText");
    if (reduceMotion || D.roles.length < 2) { t.textContent = D.roles[0] || ""; return; }
    let i = 0, j = 0, del = false;
    (function tick() {
      const word = D.roles[i];
      t.textContent = word.slice(0, j);
      if (!del && j === word.length) { del = true; return setTimeout(tick, 1600); }
      if (del && j === 0) { del = false; i = (i + 1) % D.roles.length; }
      j += del ? -1 : 1;
      setTimeout(tick, del ? 35 : 75);
    })();
  })();

  /* ---------- ABOUT ---------- */
  D.about.paragraphs.forEach((p) => $("#aboutParas").appendChild(el("p", null, p)));
  D.about.stats.forEach((s) => {
    const box = el("div", "stat");
    const b = el("b", null, "0");
    b.dataset.to = s.n; b.dataset.suffix = s.suffix || "";
    box.append(b, el("span", null, s.label));
    $("#stats").appendChild(box);
  });
  $("#focusTitle").textContent = D.about.focusTitle;
  $("#focusHead").textContent = D.about.focusHeadline;
  D.about.focusItems.forEach((t) => $("#focusList").appendChild(el("li", null, t)));
  D.about.facts.forEach((f) => {
    const row = el("div");
    row.append(el("dt", null, f.k), el("dd", null, f.v));
    $("#facts").appendChild(row);
  });

  /* ---------- SKILLS ---------- */
  D.skillGroups.forEach((g) => {
    const p = el("div", "panel");
    const head = el("div", "group-head");
    head.append(el("i", null, g.icon), el("span", null, g.title));
    const bars = el("div", "bars");
    g.items.forEach((s) => {
      const item = el("div");
      const top = el("div", "bar-top");
      const name = el("span", null, s.name);
      if (s.tag) name.appendChild(el("small", null, s.tag));
      top.append(name, el("b", null, s.level + "%"));
      const bar = el("div", "bar");
      const fill = el("i"); fill.dataset.w = s.level;
      bar.appendChild(fill);
      item.append(top, bar);
      bars.appendChild(item);
    });
    p.append(head, bars);
    $("#skillGroups").appendChild(p);
  });
  D.skillRings.forEach((r) => {
    const box = el("div", "panel ring");
    const wrap = el("div", "wrap");
    wrap.innerHTML =
      '<svg viewBox="0 0 100 100"><circle class="bg" cx="50" cy="50" r="42"/><circle class="fg" cx="50" cy="50" r="42"/></svg>';
    wrap.querySelector(".fg").dataset.off = String(264 - (264 * r.level) / 100);
    wrap.appendChild(el("span", "val", r.level + "%"));
    box.append(wrap, el("p", null, r.name));
    $("#rings").appendChild(box);
  });

  /* ---------- PROJECTS ---------- */
  const cats = ["All"].concat(Array.from(new Set(D.projects.map((p) => p.category))));
  let activeCat = "All";
  cats.forEach((c) => {
    const b = el("button", c === "All" ? "on" : "", c);
    b.type = "button";
    b.addEventListener("click", () => {
      activeCat = c;
      $$("#filters button").forEach((x) => x.classList.toggle("on", x === b));
      renderProjects();
    });
    $("#filters").appendChild(b);
  });
  function renderProjects() {
    const q = $("#search").value.trim().toLowerCase();
    const box = $("#projects");
    box.innerHTML = "";
    let n = 0;
    D.projects.forEach((p, i) => {
      const hay = (p.title + " " + p.description + " " + p.tags.join(" ")).toLowerCase();
      if ((activeCat !== "All" && p.category !== activeCat) || (q && !hay.includes(q))) return;
      n++;
      const a = el("a", "project rv in");
      a.href = p.link || "#";
      if (p.link && p.link !== "#") { a.target = "_blank"; a.rel = "noopener"; }
      const body = el("div");
      body.append(el("p", "kind", p.category + " — " + p.kind), el("h3", null, p.title), el("p", null, p.description));
      const tags = el("div", "tags");
      p.tags.forEach((t) => tags.appendChild(el("span", null, t)));
      body.appendChild(tags);
      a.append(el("span", "idx", String(i + 1).padStart(2, "0")), body, el("span", "go", p.linkLabel || "View project"));
      box.appendChild(a);
    });
    $("#emptyProjects").hidden = n > 0;
  }
  $("#search").addEventListener("input", renderProjects);
  renderProjects();

  /* ---------- GITHUB ---------- */
  D.github.stats.forEach((s) => {
    const p = el("div", "panel");
    p.append(el("b", null, s.n), el("span", null, s.label));
    $("#ghStats").appendChild(p);
  });
  D.github.languages.forEach((l) => {
    const w = el("div", "lang");
    const top = el("div", "bar-top");
    top.append(el("span", null, l.name), el("b", null, l.pct + "%"));
    const bar = el("div", "bar"), f = el("i");
    f.dataset.w = l.pct; bar.appendChild(f);
    w.append(top, bar);
    $("#ghLangs").appendChild(w);
  });
  $("#ghLink").href = D.socials.github || "#";

  /* ---------- EDUCATION ---------- */
  D.education.forEach((e) => {
    const p = el("article", "panel edu");
    const top = el("div", "top");
    top.append(el("span", "period", e.period), el("span", "status", e.status));
    const tags = el("div", "tags");
    e.tags.forEach((t) => tags.appendChild(el("span", null, t)));
    p.append(top, el("h3", null, e.title), el("p", "meta", e.place + " · " + e.score), tags);
    $("#timeline").appendChild(p);
  });

  /* ---------- CERTIFICATES ---------- */
  D.certificates.forEach((c) => {
    const p = el("article", "panel cert");
    const tags = el("div", "tags");
    c.tags.forEach((t) => tags.appendChild(el("span", null, t)));
    const a = el("a", null, "View credential");
    a.href = c.link || "#";
    if (c.link && c.link !== "#") { a.target = "_blank"; a.rel = "noopener"; }
    p.append(el("span", "badge-s", c.badge), el("h3", null, c.title), el("p", "issuer", c.issuer), tags, a);
    $("#certs").appendChild(p);
  });

  /* ---------- CONTACT ---------- */
  $("#contactHead").textContent = D.contact.heading;
  $("#contactText").textContent = D.contact.text;
  $("#cEmail").textContent = D.email;
  $("#cEmail").href = "mailto:" + D.email;
  $("#cLoc").textContent = D.location;
  $("#form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const f = e.target, note = $("#formNote");
    const name = f.name.value.trim(), email = f.email.value.trim(), msg = f.message.value.trim();
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !msg) {
      note.textContent = "Please fill in your name, a valid email and a message.";
      return;
    }
    if (D.contact.formEndpoint) {
      try {
        const r = await fetch(D.contact.formEndpoint, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify({ name, email, message: msg }) });
        if (!r.ok) throw new Error();
        note.textContent = "Message sent. Thank you!";
        f.reset();
      } catch (_) {
        note.textContent = "Could not send. Please email me directly instead.";
      }
    } else {
      const body = encodeURIComponent(msg + "\n\n— " + name + " (" + email + ")");
      location.href = "mailto:" + D.email + "?subject=" + encodeURIComponent("Message from " + name) + "&body=" + body;
      note.textContent = "Opening your email app…";
    }
  });

  /* ---------- NAV ---------- */
  const nav = $("#nav"), burger = $("#burger"), links = $("#links");
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
  $$("#links a").forEach((a) => a.addEventListener("click", () => { links.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }));
  const bar = $("#progress");
  function onScroll() {
    nav.classList.toggle("solid", scrollY > 30);
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + "%";
  }
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const sections = ["home", "about", "skills", "work", "education", "certificates", "contact"];
  const spy = new IntersectionObserver((es) => {
    es.forEach((e) => {
      if (e.isIntersecting) $$("#links [data-link]").forEach((a) => a.classList.toggle("active", a.dataset.link === e.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((id) => spy.observe($("#" + id)));

  /* ---------- REVEAL + ANIMATED NUMBERS ---------- */
  $$(".panel, .stat, .about-text p, .title, .lead, .timeline > *").forEach((n) => n.classList.add("rv"));
  const seen = new IntersectionObserver((es) => {
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      const n = e.target;
      n.classList.add("in");
      $$("[data-w]", n).forEach((f) => (f.style.width = f.dataset.w + "%"));
      if (n.dataset.w) n.style.width = n.dataset.w + "%";
      if (n.dataset.off) n.style.strokeDashoffset = n.dataset.off;
      $$("[data-off]", n).forEach((c) => (c.style.strokeDashoffset = c.dataset.off));
      $$("[data-to]", n).forEach(count);
      if (n.dataset.to) count(n);
      seen.unobserve(n);
    });
  }, { threshold: 0.18 });
  $$(".rv, .bar i, .ring .fg").forEach((n) => seen.observe(n));
  function count(b) {
    const to = +b.dataset.to, suf = b.dataset.suffix || "";
    if (reduceMotion) { b.textContent = to + suf; return; }
    const t0 = performance.now();
    (function step(t) {
      const k = Math.min(1, (t - t0) / 1200);
      b.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))) + suf;
      if (k < 1) requestAnimationFrame(step);
    })(t0);
  }
  $$(".ring .fg").forEach((c) => seen.observe(c));
  $$(".stat").forEach((s) => seen.observe(s));

  /* ---------- 3D CARD TILT ---------- */
  const wrap = $("#tiltWrap"), card = $("#tiltCard");
  if (!reduceMotion && matchMedia("(hover: hover)").matches) {
    wrap.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      card.style.transform = "rotateY(" + (x - 0.5) * 16 + "deg) rotateX(" + (0.5 - y) * 16 + "deg)";
      card.style.setProperty("--mx", x * 100 + "%");
      card.style.setProperty("--my", y * 100 + "%");
    });
    wrap.addEventListener("mouseleave", () => (card.style.transform = ""));
  }

  /* ---------- PARTICLES ---------- */
  (function particles() {
    if (reduceMotion) return;
    const cv = $("#particles"), ctx = cv.getContext("2d");
    let w, h, pts = [], mouse = { x: -999, y: -999 };
    function size() {
      w = cv.width = innerWidth; h = cv.height = innerHeight;
      pts = Array.from({ length: Math.min(70, Math.floor((w * h) / 22000)) }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25, r: Math.random() * 1.6 + 0.4
      }));
    }
    size();
    addEventListener("resize", size);
    addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
    (function loop() {
      ctx.clearRect(0, 0, w, h);
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const d = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        ctx.fillStyle = d < 140 ? "rgba(255,150,60,.9)" : "rgba(255,122,26,.35)";
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill();
        if (d < 140) { ctx.strokeStyle = "rgba(255,122,26," + (1 - d / 140) * 0.4 + ")"; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
      });
      requestAnimationFrame(loop);
    })();
  })();

  /* ---------- CHAT ASSISTANT (works offline, answers from data.js) ---------- */
  const ask = $("#askBtn"), chat = $("#chat"), log = $("#chatLog");
  $("#askLabel").textContent = D.assistantName;
  $("#chatName").textContent = D.assistantName;
  function say(text, who) {
    const m = el("div", "msg " + who, text);
    log.appendChild(m);
    log.scrollTop = log.scrollHeight;
  }
  function answer(q) {
    q = q.toLowerCase();
    const has = (...w) => w.some((x) => q.includes(x));
    if (has("project", "built", "work", "portfolio"))
      return "Projects: " + D.projects.map((p) => p.title + " (" + p.tags.slice(0, 3).join(", ") + ")").join("; ") + ". See the Work section for details.";
    if (has("skill", "tech", "stack", "language", "tool"))
      return "Main skills: " + D.skillGroups.map((g) => g.items.map((i) => i.name).join(", ")).join(", ") + ".";
    if (has("educat", "study", "college", "university", "school", "degree"))
      return D.education.map((e) => e.title + " at " + e.place + " (" + e.period + ")").join("; ") + ".";
    if (has("certif", "course", "credential"))
      return "Certificates: " + D.certificates.map((c) => c.title).join("; ") + ".";
    if (has("contact", "email", "reach", "touch", "hire", "mail"))
      return "You can email " + D.email + " or use the contact form at the bottom of this page.";
    if (has("github", "code", "repo"))
      return "GitHub: " + (D.socials.github || "not added yet");
    if (has("where", "location", "live", "based"))
      return "Based in " + D.location + ".";
    if (has("who", "about", "yourself", "introduce"))
      return fullName + ". " + D.about.paragraphs[0];
    return "I can answer questions about projects, skills, education, certificates and contact details. Try one of the suggestions below.";
  }
  function ask_(q) {
    q = q.trim();
    if (!q) return;
    say(q, "me");
    setTimeout(() => say(answer(q), "bot"), 350);
  }
  say(D.assistantIntro, "bot");
  D.suggestions.forEach((s) => {
    const b = el("button", null, s);
    b.type = "button";
    b.addEventListener("click", () => ask_(s));
    $("#chatSugg").appendChild(b);
  });
  function toggleChat(open) {
    chat.hidden = !open;
    ask.setAttribute("aria-expanded", open);
    if (open) $("#chatInput").focus();
  }
  ask.addEventListener("click", () => toggleChat(chat.hidden));
  $("#chatClose").addEventListener("click", () => toggleChat(false));
  addEventListener("keydown", (e) => { if (e.key === "Escape") toggleChat(false); });
  $("#chatForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const i = $("#chatInput");
    ask_(i.value);
    i.value = "";
  });
})();
