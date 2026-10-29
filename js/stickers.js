/* ==========================================================================
   TapX AI — TGS / Lottie-стикеры.
   Файлы .tgs — это gzip-сжатый Lottie JSON. Библиотека lottie-web грузится
   лениво со своего домена, стикеры играют только в зоне видимости.
   Пока анимация не загрузилась (или при reduced motion), показывается
   статичный WebP-кадр. Без библиотеки сайт остаётся полностью рабочим.
   ========================================================================== */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var mobile = window.matchMedia("(max-width: 760px)");
  var lottiePromise = null;
  var players = new WeakMap();
  var observed = new WeakSet();
  var loaded = new WeakSet();
  var playing = new Set();
  var queue = [];
  var active = 0;
  var MAX_ACTIVE = 2;
  var MAX_PLAYING = 4;
  var activated = false;
  var canLottie = typeof DecompressionStream !== "undefined";
  var saveData = false;
  try {
    var conn = navigator.connection || {};
    saveData = !!conn.saveData || /2g/.test(conn.effectiveType || "");
  } catch (e) {}

  function motionOn() {
    return !document.documentElement.classList.contains("motion-off") && !reduce.matches;
  }
  function base(name) { return "assets/stickers/" + name; }

  function ensureLottie() {
    if (lottiePromise) return lottiePromise;
    lottiePromise = new Promise(function (resolve, reject) {
      if (window.lottie) { resolve(window.lottie); return; }
      var s = document.createElement("script");
      s.src = "js/vendor/lottie_light.min.js";
      s.async = true;
      s.onload = function () { resolve(window.lottie); };
      s.onerror = function () { reject(new Error("lottie load failed")); };
      document.head.appendChild(s);
    });
    return lottiePromise;
  }

  function prepare(node) {
    if (!node || node.dataset.tgsReady === "1") return;
    node.dataset.tgsReady = "1";
    var name = node.dataset.tgs;
    if (!name) return;
    node.setAttribute("aria-hidden", "true");
    var still = document.createElement("img");
    still.className = "tgs-still";
    still.src = base(name) + ".webp";
    still.alt = "";
    still.width = 256;
    still.height = 256;
    still.loading = "lazy";
    still.decoding = "async";
    node.appendChild(still);
    var live = document.createElement("span");
    live.className = "tgs-live";
    node.appendChild(live);
    node.dataset.tgsLive = "0";
  }

  function maxPlaying() { return mobile.matches ? 3 : MAX_PLAYING; }
  function play(node) {
    var player = players.get(node);
    if (!player || !motionOn() || !activated) return;
    if (playing.has(node)) return;
    if (playing.size >= maxPlaying()) return;
    player.play();
    playing.add(node);
    node.classList.add("is-playing");
  }
  function pause(node) {
    var player = players.get(node);
    if (!player) return;
    player.pause();
    playing.delete(node);
    node.classList.remove("is-playing");
  }
  function fillSlots() {
    if (!motionOn() || !activated) return;
    var nodes = document.querySelectorAll("[data-tgs].is-live");
    for (var i = 0; i < nodes.length && playing.size < maxPlaying(); i++) {
      var n = nodes[i];
      if (n.dataset.tgsVisible === "1" && !playing.has(n)) play(n);
    }
  }

  function loadOne(node) {
    if (loaded.has(node) || !motionOn() || !canLottie || saveData) return;
    if (node.dataset.tgsFailed === "1") return;
    loaded.add(node);
    var name = node.dataset.tgs;
    var live = node.querySelector(".tgs-live");
    if (!live) return;

    ensureLottie().then(function (lottie) {
      if (!lottie) throw new Error("no lottie");
      return fetch(base(name) + ".tgs").then(function (res) {
        if (!res.ok) throw new Error("tgs " + res.status);
        return res.arrayBuffer();
      }).then(function (buf) {
        var bytes = new Uint8Array(buf);
        var text;
        if (bytes[0] === 0x1f && bytes[1] === 0x8b) {
          if (!canLottie) throw new Error("no DecompressionStream");
          text = new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"))).text();
        } else {
          text = Promise.resolve(new TextDecoder().decode(bytes));
        }
        return text;
      }).then(function (json) {
        var data = JSON.parse(json);
        live.replaceChildren();
        var anim = lottie.loadAnimation({
          container: live,
          renderer: "svg",
          loop: true,
          autoplay: false,
          animationData: data,
          rendererSettings: { preserveAspectRatio: "xMidYMid meet", progressiveLoad: true }
        });
        players.set(node, anim);
        node.classList.add("is-live");
        node.dataset.tgsLive = "1";
        if (motionOn() && node.dataset.tgsVisible === "1") play(node);
      });
    }).catch(function () {
      node.dataset.tgsFailed = "1";
      loaded.delete(node);
    });
  }

  function pump() {
    while (active < MAX_ACTIVE && queue.length) {
      var node = queue.shift();
      if (!node || !node.isConnected || loaded.has(node)) continue;
      active++;
      loadOne(node);
      // loadOne запускает асинхронную цепочку; отпускаем слот чуть позже,
      // чтобы не открыть одновременно десяток запросов.
      (function (n) {
        var check = setInterval(function () {
          if (n.dataset.tgsLive === "1" || n.dataset.tgsFailed === "1") {
            clearInterval(check);
            active = Math.max(0, active - 1);
            pump();
          }
        }, 120);
        setTimeout(function () {
          if (n.dataset.tgsLive !== "1" && n.dataset.tgsFailed !== "1") {
            clearInterval(check);
            active = Math.max(0, active - 1);
            pump();
          }
        }, 6000);
      })(node);
    }
  }

  function request(node) {
    if (!node || !activated || !motionOn() || !canLottie || saveData) return;
    if (loaded.has(node) || node.dataset.tgsFailed === "1") return;
    if (queue.indexOf(node) === -1) queue.push(node);
    pump();
  }

  function onVisible(entries) {
    entries.forEach(function (e) {
      var node = e.target;
      node.dataset.tgsVisible = e.isIntersecting ? "1" : "0";
      if (e.isIntersecting) {
        if (node.dataset.tgsLive === "1") play(node);
        else request(node);
      } else {
        pause(node);
      }
    });
    fillSlots();
  }

  var io = "IntersectionObserver" in window ? new IntersectionObserver(onVisible, { threshold: 0.12 }) : null;

  function observe(node) {
    prepare(node);
    if (!node || observed.has(node)) return;
    observed.add(node);
    if (io) io.observe(node);
    else {
      node.dataset.tgsVisible = "1";
      request(node);
    }
  }

  function scan(scope) {
    (scope || document).querySelectorAll("[data-tgs]").forEach(observe);
  }

  function refresh() {
    if (!motionOn() || !activated) {
      document.querySelectorAll("[data-tgs]").forEach(function (n) {
        pause(n);
        n.classList.remove("is-playing");
      });
      playing.clear();
      return;
    }
    var nodes = document.querySelectorAll("[data-tgs]");
    nodes.forEach(function (n) {
      if (n.dataset.tgsVisible === "1") {
        if (n.dataset.tgsLive === "1") play(n);
        else request(n);
      }
    });
    fillSlots();
  }

  function activate() {
    if (activated) return;
    activated = true;
    refresh();
  }

  window.TapxStickers = { scan: scan, refresh: refresh };
  window.addEventListener("tapx:motion", refresh);
  if (reduce.addEventListener) reduce.addEventListener("change", refresh);

  window.addEventListener("scroll", activate, { passive: true, once: true });
  document.addEventListener("pointerdown", activate, { passive: true, once: true });
  document.addEventListener("touchstart", activate, { passive: true, once: true });
  document.addEventListener("keydown", activate, { once: true });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      scan(document);
      // Не мешаем первому экрану: Lottie подключается после отрисовки.
      setTimeout(function () { scan(document); }, 900);
    });
  } else {
    scan(document);
    setTimeout(function () { scan(document); }, 900);
  }
})();
