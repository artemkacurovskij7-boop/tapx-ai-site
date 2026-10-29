/* ==========================================================================
   TapX AI — звёздное поле.
   Canvas 2D, без WebGL. Работает только когда нужно: вкладка видима,
   анимации включены, устройство не просит уменьшить движение.
   ========================================================================== */
(function () {
  "use strict";
  var canvas = document.getElementById("stars");
  if (!canvas || !canvas.getContext) return;
  /* На телефоне звёзды уже в WebP-небе; Canvas не запускаем — это экономит батарею и TBT. */
  if (window.matchMedia("(max-width: 760px)").matches) {
    canvas.style.display = "none";
    return;
  }
  var ctx = canvas.getContext("2d", { alpha: true });
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var mobile = window.matchMedia("(max-width: 760px)");
  var dpr = 1, W = 0, H = 0;
  var stars = [];
  var px = 0, py = 0, tx = 0, ty = 0;
  var raf = 0, last = 0;
  var COLORS = [
    [255, 255, 255],
    [190, 235, 255],
    [139, 233, 255],
    [210, 205, 255],
    [255, 220, 170]
  ];

  function motionOn() {
    return !document.documentElement.classList.contains("motion-off") && !reduce.matches;
  }

  function makeStars() {
    var count = Math.round(Math.min(220, Math.max(70, W * H / 9000)));
    stars = [];
    for (var i = 0; i < count; i++) {
      var z = 0.18 + Math.random() * 0.82;
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        z: z,
        r: (Math.random() < 0.08 ? 1.5 : 0.35 + Math.random() * 0.95) * z,
        c: COLORS[Math.floor(Math.random() * COLORS.length)],
        phase: Math.random() * Math.PI * 2,
        speed: 0.25 + Math.random() * 0.85,
        bright: 0.32 + Math.random() * 0.58
      });
    }
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.6);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    makeStars();
    draw(0);
  }

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      var tw = motionOn() ? (0.5 + 0.5 * Math.sin(t * 0.0009 * s.speed + s.phase)) : 0.7;
      var a = s.bright * (0.35 + 0.65 * tw);
      var ox = px * 16 * s.z;
      var oy = py * 12 * s.z;
      ctx.beginPath();
      ctx.fillStyle = "rgba(" + s.c[0] + "," + s.c[1] + "," + s.c[2] + "," + a.toFixed(3) + ")";
      ctx.arc(s.x + ox, s.y + oy, s.r, 0, Math.PI * 2);
      ctx.fill();
      if (s.r > 1.05) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(" + s.c[0] + "," + s.c[1] + "," + s.c[2] + "," + (a * 0.1).toFixed(3) + ")";
        ctx.arc(s.x + ox, s.y + oy, s.r * 4.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  function step(ts) {
    raf = 0;
    if (document.hidden || !motionOn()) return;
    if (ts - last < 33) {
      raf = requestAnimationFrame(step);
      return;
    }
    last = ts;
    px += (tx - px) * 0.04;
    py += (ty - py) * 0.04;
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      s.y -= 0.085 * s.z;
      if (s.y < -3) {
        s.y = H + 3;
        s.x = Math.random() * W;
      }
      if (s.x < -3) s.x = W + 3;
      if (s.x > W + 3) s.x = -3;
    }
    draw(ts);
    raf = requestAnimationFrame(step);
  }

  function start() {
    if (raf) return;
    if (!motionOn() || mobile.matches) {
      draw(0);
      return;
    }
    raf = requestAnimationFrame(step);
  }

  window.addEventListener("resize", function () {
    if (mobile.matches && raf) { cancelAnimationFrame(raf); raf = 0; }
    resize();
    if (!raf) start();
  }, { passive: true });
  window.addEventListener("pointermove", function (e) {
    tx = (e.clientX / window.innerWidth - 0.5) * 2;
    ty = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });
  document.addEventListener("visibilitychange", function () {
    if (!document.hidden) start();
  });
  window.addEventListener("tapx:motion", start);
  if (reduce.addEventListener) {
    reduce.addEventListener("change", function () {
      if (raf) { cancelAnimationFrame(raf); raf = 0; }
      draw(0);
      start();
    });
  }

  resize();
  start();
})();
