/* ==========================================================================
   TapX AI — приложение.
   Строит карточки из js/data/projects.js, открывает кейсы, управляет
   фильтрами, навигацией, видео, параллаксом и настройкой движения.
   Без фреймворков, без сетевых запросов кроме собственных файлов.
   ========================================================================== */
(function () {
  "use strict";

  var SITE = window.TAPX_SITE || {};
  var PROJECTS = (window.TAPX_PROJECTS || []).slice().sort(function (a, b) {
    return (a.order || 0) - (b.order || 0);
  });
  var root = document.documentElement;
  root.classList.add("js");

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)");
  var mobile = window.matchMedia("(max-width: 760px)");
  var conn = navigator.connection || {};
  var saveData = !!conn.saveData || /2g/.test(conn.effectiveType || "");
  var weak = (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) ||
             (navigator.deviceMemory && navigator.deviceMemory <= 2);
  var MOTION_KEY = "tapx-motion";

  var LAYOUTS = {
    "ai-secretary": "is-wide",
    "linkcut": "is-tall",
    "emoji-bot-converter": "is-third",
    "premium-emoji-catalog": "is-third",
    "moderation-bot": "is-third",
    "youtube-thumbnails": "is-third",
    "motion-by-code": "is-third",
    "orbital-globe": "is-third"
  };
  var TONES = {
    cyan: "#6df7c1",
    mint: "#6df7c1",
    violet: "#ff8a66",
    amber: "#ffd166",
    light: "#e8f4ee",
    red: "#ff7a6b",
    chrome: "#d8f5e6",
    blue: "#5fe0d0"
  };

  function $(sel, scope) { return (scope || document).querySelector(sel); }
  function $$(sel, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(sel)); }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function icon(name, cls) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", cls || "icon");
    svg.setAttribute("aria-hidden", "true");
    var use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", "#i-" + name);
    svg.appendChild(use);
    return svg;
  }
  function pad(n) { return String(n).padStart(2, "0"); }
  function fmtDate(v) {
    if (!v) return "";
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v);
    return m ? m[3] + "." + m[2] + "." + m[1] : v;
  }
  function safeHttp(v) {
    try {
      var u = new URL(v, window.location.href);
      return (u.protocol === "https:" || u.protocol === "http:") &&
        (u.origin === window.location.origin || /^https?:\/\//i.test(v));
    } catch (e) { return false; }
  }
  function motionOn() {
    return !root.classList.contains("motion-off") && !reduce.matches;
  }

  /* ---------- Настройка движения ---------- */
  function readMotion() {
    var v = null;
    try { v = localStorage.getItem(MOTION_KEY); } catch (e) {}
    if (v === "off") return false;
    if (v === "on") return true;
    return !reduce.matches;
  }
  function setMotion(on, save) {
    root.classList.toggle("motion-off", !on);
    if (save) {
      try { localStorage.setItem(MOTION_KEY, on ? "on" : "off"); } catch (e) {}
    }
    var box = document.getElementById("motion-toggle");
    if (box) box.checked = on;
    window.dispatchEvent(new CustomEvent("tapx:motion", { detail: { on: on } }));
  }
  function initMotionSwitch() {
    setMotion(readMotion(), false);
    var box = document.getElementById("motion-toggle");
    if (box) {
      box.addEventListener("change", function () { setMotion(box.checked, true); });
    }
    if (reduce.addEventListener) {
      reduce.addEventListener("change", function () {
        if (reduce.matches) {
          root.classList.add("motion-off");
          var b = document.getElementById("motion-toggle");
          if (b) b.checked = false;
          window.dispatchEvent(new CustomEvent("tapx:motion", { detail: { on: false } }));
        }
      });
    }
  }

  /* ---------- Контакты ---------- */
  function buildContacts() {
    var box = document.getElementById("contact-links");
    if (!box) return;
    (SITE.contacts || []).forEach(function (c) {
      if (!c.url || !safeHttp(c.url)) return;
      var a = el("a", "contact__link");
      a.href = c.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      var top = el("span", "contact__link-top");
      top.appendChild(icon(c.icon || "arrow", "icon"));
      top.appendChild(icon("arrow", "icon contact__link-arrow"));
      a.appendChild(top);
      a.appendChild(el("b", null, c.label));
      a.appendChild(el("span", null, c.handle || ""));
      if (c.hint) a.appendChild(el("span", "contact__link-hint", c.hint));
      box.appendChild(a);
    });
  }

  /* ---------- Обложки карточек ---------- */
  var ART = {
    ai:
      '<img class="art-ai__chrome" src="assets/media/chrome-still.webp" alt="" width="1600" height="900" loading="lazy" decoding="async"><span class="art-ai__grid"></span>' +
      '<span class="art-ai__cap">VOICE / TEXT<br>CONTEXT ENGINE</span>' +
      '<span class="art-ai__pulse"></span>' +
      '<span class="art-ai__word">A<em>I</em></span>' +
      '<span class="art-ai__wave" aria-hidden="true">' +
      '<i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>' +
      '</span>',
    linkcut:
      '<span class="art-linkcut__paper"></span><span class="art-linkcut__cut"></span>' +
      '<span class="art-linkcut__meta">READ LESS<br>KNOW MORE</span>' +
      '<span class="art-linkcut__word">LINK<em>CUT</em></span>' +
      '<span class="art-linkcut__stamp">TELEGRAM BOT</span>',
    emoji:
      '<span class="art-emoji__glow"></span><span class="art-emoji__word">EMOJI</span>' +
      '<span class="art-emoji__sub">BOT CONVERTER</span>' +
      '<span class="art-emoji__tiles" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>',
    catalog:
      '<span class="art-catalog__browser"><span class="art-catalog__bar"><i></i><i></i><i></i></span>' +
      '<img src="assets/media/catalog-shot.webp" alt="" width="1440" height="900" loading="lazy" decoding="async">' +
      '</span><span class="art-catalog__chip">503 emoji · 19 категорий</span>',
    moderation:
      '<svg class="art-moderation__shield" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5 4.5 5.6v5.7c0 4.5 3 8.2 7.5 10.2 4.5-2 7.5-5.7 7.5-10.2V5.6L12 2.5Z" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="m8.3 12 2.4 2.4 5-5.1" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      '<span class="art-moderation__rules"><span class="art-moderation__rule"><i></i>СПАМ / ССЫЛКИ</span><span class="art-moderation__rule"><i></i>ТОКСИЧНОСТЬ</span><span class="art-moderation__rule"><i></i>ФЛУД</span></span>' +
      '<span class="art-moderation__flow">WATCH → FILTER → LOG</span><span class="art-moderation__code">RULESET / 001</span>',
    youtube:
      '<span class="art-youtube__cap">THUMBNAIL LAB / FLOW</span>' +
      '<span class="art-youtube__stack">' +
      '<span class="art-youtube__img art-youtube__img--back"></span>' +
      '<span class="art-youtube__img art-youtube__img--front"><img src="assets/media/flow-ui.webp" alt="" width="540" height="510" loading="lazy" decoding="async">' +
      '<span class="art-youtube__play"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor"/></svg></span></span>' +
      '</span>',
    motion:
      '<img class="art-motion__bg" src="assets/media/chrome-still.webp" alt="" width="1600" height="900" loading="lazy" decoding="async"><span class="art-motion__scan"></span>' +
      '<span class="art-motion__line"></span><span class="art-motion__line"></span><span class="art-motion__line"></span>' +
      '<span class="art-motion__word">MOTION</span><span class="art-motion__code">BY CODE / 10 WORDS</span>',
    globe:
      '<img class="art-globe__img" src="assets/media/globe-preview.webp" alt="" width="1440" height="900" loading="lazy" decoding="async">' +
      '<span class="art-globe__ring"></span><span class="art-globe__cap">THREE.JS / D3-GEO</span>' +
      '<span class="art-globe__label">ORBITAL GLOBE</span>'
  };
  function buildArt(p) {
    var type = ART[p.art] ? p.art : "motion";
    var node = el("div", "pcard-art art-" + type);
    node.setAttribute("aria-hidden", "true");
    node.innerHTML = ART[type];
    return node;
  }

  /* ---------- Карточка ---------- */
  function statusOf(p) {
    return SITE.statuses && SITE.statuses[p.status]
      ? SITE.statuses[p.status]
      : { ru: p.status || "Проект", en: String(p.status || "project").toUpperCase(), tone: "concept" };
  }
  function badgeOf(p) {
    var st = statusOf(p);
    var uncertain = p.statusConfirmed === false;
    var b = el("span", "badge" + (uncertain ? " badge--uncertain" : ""), st.en + (uncertain ? " · ?" : ""));
    b.dataset.tone = st.tone;
    b.title = st.ru + (uncertain ? " · уточняется" : "");
    b.setAttribute("aria-label", "Статус: " + st.ru + (uncertain ? ", уточняется" : ""));
    return b;
  }
  function buildCard(p, i) {
    var li = el("li", "project-item " + (LAYOUTS[p.id] || "is-third"));
    li.dataset.category = p.category;
    li.dataset.id = p.id;
    li.style.setProperty("--tone", TONES[p.theme] || TONES.cyan);
    li.style.setProperty("--d", (i * 55) + "ms");

    var card = el("article", "pcard" + (i === 0 ? " pcard--featured" : ""));
    card.appendChild(el("span", "pcard-glow")).setAttribute("aria-hidden", "true");

    var face = el("div", "pcard-face");

    var glare = el("span", "pcard-glare");
    glare.setAttribute("aria-hidden", "true");
    face.appendChild(glare);

    var head = el("div", "pcard-head");
    var num = el("span", "pcard-num");
    num.innerHTML = "<b>" + pad(i + 1) + "</b> / " + pad(PROJECTS.length);
    head.appendChild(num);
    head.appendChild(badgeOf(p));
    face.appendChild(head);

    face.appendChild(buildArt(p));

    var body = el("div", "pcard-body");
    var cat = el("p", "pcard-cat", (SITE.categories && SITE.categories[p.category] ? SITE.categories[p.category] : "") + " · " + (p.tech && p.tech[0] ? p.tech[0] : "TapX AI"));
    body.appendChild(cat);
    var h3 = el("h3", "pcard-title", p.title || "Проект");
    body.appendChild(h3);
    body.appendChild(el("p", "pcard-sum", p.summary || ""));
    if (p.updated) body.appendChild(el("p", "pcard-date", "Обновлено " + fmtDate(p.updated)));
    face.appendChild(body);

    var foot = el("div", "pcard-foot");
    foot.appendChild(el("span", "pcard-tech", (p.tech && p.tech.length ? p.tech.slice(0, 2).join(" · ") : "TAPX AI")));
    var cta = el("span", "pcard-cta");
    cta.appendChild(el("span", null, "Кейс"));
    cta.appendChild(icon("arrow"));
    foot.appendChild(cta);
    face.appendChild(foot);

    card.appendChild(face);
    li.appendChild(card);

    var link = el("a", "pcard-link");
    link.href = "#case-" + p.id;
    link.dataset.case = p.id;
    var sr = el("span", "sr-only", "Открыть кейс: " + (p.title || "проект"));
    link.appendChild(sr);
    li.appendChild(link);

    var sticker = el("span", "pcard-sticker");
    sticker.dataset.tgs = p.sticker || "water";
    sticker.setAttribute("aria-hidden", "true");
    li.appendChild(sticker);

    if (window.TapxTilt) window.TapxTilt.attach(li);
    return li;
  }

  /* ---------- Проекты: фильтры и сетка ---------- */
  var activeFilter = "all";
  var grid, filtersBox, emptyNote, countNote;

  function renderProjects() {
    if (!grid) return;
    var list = PROJECTS.filter(function (p) { return activeFilter === "all" || p.category === activeFilter; });
    grid.replaceChildren();
    list.forEach(function (p, i) { grid.appendChild(buildCard(p, i)); });
    if (emptyNote) emptyNote.hidden = list.length > 0;
    if (countNote) countNote.textContent = pad(list.length) + " / " + pad(PROJECTS.length);
    if (window.TapxStickers) window.TapxStickers.scan(grid);
    if (window.TapxTilt) window.TapxTilt.scan(grid);
  }
  function buildFilters() {
    if (!filtersBox) return;
    var used = {};
    PROJECTS.forEach(function (p) { used[p.category] = (used[p.category] || 0) + 1; });
    var cats = Object.keys(SITE.categories || {}).filter(function (k) { return used[k]; });

    function add(key, label, count) {
      var b = el("button", "filter");
      b.type = "button";
      b.dataset.filter = key;
      b.setAttribute("aria-pressed", String(activeFilter === key));
      b.appendChild(el("span", null, label));
      var n = el("b", null, pad(count));
      b.appendChild(n);
      b.addEventListener("click", function () {
        if (activeFilter === key) return;
        activeFilter = key;
        $$(".filter", filtersBox).forEach(function (x) {
          x.setAttribute("aria-pressed", String(x.dataset.filter === key));
        });
        renderProjects();
      });
      filtersBox.appendChild(b);
    }
    add("all", "Все", PROJECTS.length);
    cats.forEach(function (k) { add(k, SITE.categories[k], used[k]); });
  }

  /* ---------- Кейс ---------- */
  var dialog, caseScroll, lastFocus = null, currentCase = null;
  function fillList(ul, items, emptyText) {
    ul.replaceChildren();
    if (!items || !items.length) {
      if (emptyText) ul.appendChild(el("li", "is-empty", emptyText));
      return;
    }
    items.forEach(function (t) { ul.appendChild(el("li", null, t)); });
  }
  function fillCaseMedia(p) {
    var media = document.getElementById("case-media");
    if (!media) return;
    media.className = "case__media";
    media.replaceChildren();
    var art = buildArt(p);
    art.classList.add("case__art");
    media.appendChild(art);
    var note = el("span", "case__media-note", "TapX AI / Case");
    media.appendChild(note);
  }
  function openCase(id, trigger, push) {
    if (!dialog) return;
    var p = PROJECTS.find(function (x) { return x.id === id; });
    if (!p) return;
    currentCase = id;
    lastFocus = trigger || document.activeElement;
    var idx = PROJECTS.indexOf(p);

    document.getElementById("case-index").textContent = pad(idx + 1) + " / " + pad(PROJECTS.length);
    document.getElementById("case-cat").textContent = (SITE.categories[p.category] || "Проект") + " · " + (p.tech && p.tech[0] ? p.tech[0] : "TapX AI");
    document.getElementById("case-title").textContent = p.title || "Проект";

    var statusBox = document.getElementById("case-status");
    statusBox.replaceChildren();
    statusBox.appendChild(badgeOf(p));

    var note = document.getElementById("case-note");
    note.textContent = p.statusNote || "";
    note.hidden = !p.statusNote;

    var meta = document.getElementById("case-meta");
    var metaParts = [];
    if (p.updated) metaParts.push("Обновлено " + fmtDate(p.updated));
    if (p.linkChecked && ((p.demoUrl && p.demoUrl.length) || (p.links && p.links.length))) {
      metaParts.push("Ссылка проверена " + fmtDate(p.linkChecked));
    }
    meta.textContent = metaParts.join(" · ");
    meta.hidden = metaParts.length === 0;

    document.getElementById("case-task").textContent = p.task || "";
    fillList(document.getElementById("case-features"), p.features || [], "Подтверждённых возможностей пока нет — проект ещё собирается.");

    var planned = p.plannedFeatures || [];
    document.getElementById("case-planned-wrap").hidden = planned.length === 0;
    fillList(document.getElementById("case-planned"), planned, "");

    var techBox = document.getElementById("case-tech");
    techBox.replaceChildren();
    (p.tech || []).forEach(function (t) { techBox.appendChild(el("li", null, t)); });
    techBox.closest(".case__block").hidden = !(p.tech && p.tech.length);

    fillCaseMedia(p);

    var actions = document.getElementById("case-actions");
    actions.replaceChildren();
    if (p.demoUrl && safeHttp(p.demoUrl)) {
      var demo = el("a", "btn btn--primary");
      demo.href = p.demoUrl;
      demo.target = "_blank";
      demo.rel = "noopener noreferrer";
      demo.appendChild(el("span", null, p.ctaLabel || "Открыть демо"));
      demo.appendChild(icon("arrow"));
      actions.appendChild(demo);
    }
    (p.links || []).forEach(function (l) {
      if (!l || !l.url || !safeHttp(l.url)) return;
      var a = el("a", "btn btn--ghost");
      a.href = l.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.appendChild(el("span", null, l.label || "Подробнее"));
      a.appendChild(icon("arrow"));
      actions.appendChild(a);
    });
    if (!actions.children.length) actions.appendChild(el("p", "is-empty", "Публичной демонстрации пока нет."));

    var gallery = (p.media && p.media.gallery) || [];
    var galleryBox = document.getElementById("case-gallery");
    galleryBox.replaceChildren();
    var showGallery = gallery.length > 0;
    galleryBox.hidden = !showGallery;
    if (showGallery) {
      galleryBox.appendChild(el("h3", "case__gallery-title", "Материалы"));
      gallery.forEach(function (m) {
        if (!m || !m.src) return;
        var fig = el("figure", "case__figure");
        if (m.type === "video") {
          var v = document.createElement("video");
          v.src = m.src;
          if (m.poster) v.poster = m.poster;
          v.controls = true;
          v.preload = "none";
          v.playsInline = true;
          fig.appendChild(v);
        } else {
          var im = document.createElement("img");
          im.src = m.src;
          im.alt = m.alt || "";
          im.loading = "lazy";
          im.decoding = "async";
          fig.appendChild(im);
        }
        fig.appendChild(el("figcaption", null, m.alt || "Материал проекта"));
        galleryBox.appendChild(fig);
      });
    }

    var next = PROJECTS[(idx + 1) % PROJECTS.length];
    document.getElementById("case-next-title").textContent = next ? next.title : "К первому кейсу";
    var nextArt = document.getElementById("case-next-art");
    nextArt.replaceChildren();
    if (next) nextArt.appendChild(buildArt(next));

    if (!dialog.open) dialog.showModal();
    root.classList.add("is-locked");
    if (caseScroll) caseScroll.scrollTop = 0;
    if (push && location.hash !== "#case-" + id) history.pushState({ case: id }, "", "#case-" + id);
  }
  function closeCase() {
    if (dialog && dialog.open) dialog.close();
  }
  function initCase() {
    dialog = document.getElementById("case-dialog");
    if (!dialog) return;
    caseScroll = $(".case__scroll", dialog);
    $(".case__close", dialog).addEventListener("click", closeCase);
    dialog.addEventListener("click", function (e) { if (e.target === dialog) closeCase(); });
    dialog.addEventListener("close", function () {
      root.classList.remove("is-locked");
      if (location.hash.indexOf("#case-") === 0) history.replaceState(null, "", "#projects");
      if (lastFocus && document.contains(lastFocus)) {
        lastFocus.focus({ preventScroll: true });
      }
      lastFocus = null;
      currentCase = null;
    });
    document.getElementById("case-next").addEventListener("click", function () {
      if (!currentCase) return;
      var i = PROJECTS.findIndex(function (p) { return p.id === currentCase; });
      var next = PROJECTS[(i + 1) % PROJECTS.length];
      if (next) openCase(next.id, null, true);
    });
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("[data-case]");
      if (!a) return;
      e.preventDefault();
      openCase(a.dataset.case, a, true);
    });
    window.addEventListener("popstate", function () {
      var m = /^#case-(.+)$/.exec(location.hash);
      if (m) openCase(decodeURIComponent(m[1]), null, false);
      else if (dialog.open) closeCase();
    });
    var initial = /^#case-(.+)$/.exec(location.hash);
    if (initial) setTimeout(function () { openCase(decodeURIComponent(initial[1]), null, false); }, 200);
  }

  /* ---------- Навигация, шапка, линия ---------- */
  function initScrollUI() {
    var head = $(".head");
    var railDot = document.getElementById("rail-dot");
    var sections = $$("main section[id]");
    var ticking = false;

    function update() {
      ticking = false;
      var y = window.scrollY || 0;
      if (head) head.classList.toggle("is-scrolled", y > 18);
      var probe = y + window.innerHeight * 0.42;
      var current = "home";
      sections.forEach(function (s) { if (s.offsetTop <= probe) current = s.id; });
      $$("[data-nav]").forEach(function (a) {
        var on = a.dataset.nav === current;
        a.classList.toggle("is-active", on);
        if (on) a.setAttribute("aria-current", "page");
        else a.removeAttribute("aria-current");
      });
      if (railDot) {
        var doc = document.documentElement.scrollHeight - window.innerHeight;
        var p = doc > 0 ? Math.min(1, Math.max(0, y / doc)) : 0;
        railDot.style.top = (p * 100).toFixed(2) + "%";
      }
    }
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
  }

  /* ---------- Видео ---------- */
  function initChromeVideo() {
    var video = document.getElementById("chrome-video");
    var cfg = SITE.chrome;
    if (!video || !cfg) return;
    var loaded = false;
    function setup() {
      if (loaded || !motionOn() || saveData || weak || mobile.matches) return;
      loaded = true;
      if (cfg.poster) video.poster = cfg.poster;
      (cfg.sources || []).forEach(function (s) {
        var source = document.createElement("source");
        source.src = s.src;
        source.type = s.type;
        video.appendChild(source);
      });
      video.load();
      video.addEventListener("canplay", function () {
        var p = video.play();
        if (p && p.catch) p.catch(function () {});
      }, { once: true });
    }
    function apply() {
      if (!motionOn()) { video.pause(); return; }
      setup();
      if (video.readyState >= 2) {
        var p = video.play();
        if (p && p.catch) p.catch(function () {});
      }
    }
    var scene = document.getElementById("hero-scene");
    if (scene && "IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!motionOn()) return;
          if (e.isIntersecting) apply(); else video.pause();
        });
      }, { threshold: 0.1 }).observe(scene);
    }
    window.addEventListener("tapx:motion", apply);
    setTimeout(setup, 1100);
  }

  /* ---------- Параллакс сцены и орба ---------- */
  function initHeroParallax() {
    var scene = document.getElementById("hero-scene");
    var hero = document.querySelector(".hero");
    if (!scene || !hero || !fine.matches) return;
    var tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
    function tick() {
      cx += (tx - cx) * 0.075;
      cy += (ty - cy) * 0.075;
      scene.style.setProperty("--px", cx.toFixed(4));
      scene.style.setProperty("--py", cy.toFixed(4));
      if (Math.abs(tx - cx) > 0.0008 || Math.abs(ty - cy) > 0.0008) raf = requestAnimationFrame(tick);
      else raf = 0;
    }
    function start() { if (!raf) raf = requestAnimationFrame(tick); }
    hero.addEventListener("pointermove", function (e) {
      if (!motionOn()) return;
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
      start();
    }, { passive: true });
    hero.addEventListener("pointerleave", function () { tx = 0; ty = 0; start(); }, { passive: true });
    window.addEventListener("tapx:motion", function () {
      if (!motionOn()) { tx = 0; ty = 0; start(); }
    });
  }
  function initOrb() {
    var orb = document.getElementById("orb");
    var wrap = document.querySelector(".contact__orb-wrap");
    if (!orb || !wrap || !fine.matches) return;
    wrap.addEventListener("pointermove", function (e) {
      if (!motionOn()) return;
      var r = wrap.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      orb.style.setProperty("--eye-x", (x * 16).toFixed(1) + "px");
      orb.style.setProperty("--eye-y", (y * 12).toFixed(1) + "px");
    }, { passive: true });
    wrap.addEventListener("pointerleave", function () {
      orb.style.setProperty("--eye-x", "0px");
      orb.style.setProperty("--eye-y", "0px");
    });
  }

  /* ---------- Появление блоков ---------- */
  function initReveal() {
    var nodes = $$(".section__head,.dossier__side,.panel,.contact__copy,.contact__orb-wrap,.contact__links,.projects__foot,.foot__top");
    if (!nodes.length) return;
    if (!motionOn() || !("IntersectionObserver" in window)) {
      nodes.forEach(function (n) { n.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
    nodes.forEach(function (n, i) {
      n.setAttribute("data-reveal", "");
      n.style.setProperty("--d", ((i % 5) * 40) + "ms");
      io.observe(n);
    });
    window.addEventListener("tapx:motion", function () {
      if (!motionOn()) nodes.forEach(function (n) { n.classList.add("is-in"); });
    });
  }

  /* ---------- Старт ---------- */
  function init() {
    var y = document.getElementById("year");
    if (y) y.textContent = String((SITE && SITE.year) || new Date().getFullYear());
    $$("[data-project-count]").forEach(function (n) { n.textContent = pad(PROJECTS.length); });

    initMotionSwitch();
    initScrollUI();
    buildContacts();
    initChromeVideo();
    initHeroParallax();
    initOrb();
    initCase();

    grid = document.getElementById("project-grid");
    filtersBox = document.getElementById("filters");
    emptyNote = document.getElementById("projects-empty");
    countNote = document.getElementById("projects-count");
    buildFilters();
    renderProjects();
    initReveal();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
