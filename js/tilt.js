/* ==========================================================================
   TapX AI — 3D-наклон карточек.
   Идея: WHD Studio tilt card (linear interpolation, preserve-3d, glare).
   Реализация написана заново под карточки TapX AI, работает только на
   устройствах с точным указателем и не мешает сенсорному скроллу.
   ========================================================================== */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)");
  var instances = new WeakMap();

  function motionOn() {
    return !document.documentElement.classList.contains("motion-off") && !reduce.matches;
  }

  function Card(item) {
    this.item = item;
    this.face = item.querySelector(".pcard-face");
    this.glare = item.querySelector(".pcard-glare");
    this.max = 11;
    this.bounds = null;
    this.hover = false;
    this.raf = 0;
    this.cx = 0; this.cy = 0; this.tx = 0; this.ty = 0;
    this.lerp = 0.11;
    this.bind();
  }

  Card.prototype.bind = function () {
    var self = this;
    this.onEnter = function () {
      if (!fine.matches || !motionOn()) return;
      self.bounds = self.item.getBoundingClientRect();
      self.hover = true;
      self.start();
    };
    this.onMove = function (e) {
      if (!fine.matches || !motionOn()) return;
      if (!self.bounds) self.bounds = self.item.getBoundingClientRect();
      self.process(e.clientX, e.clientY);
      self.start();
    };
    this.onLeave = function () {
      self.hover = false;
      self.tx = 0;
      self.ty = 0;
      if (self.glare) self.glare.style.opacity = "";
      self.start();
    };
    this.onScroll = function () { self.bounds = null; };
    this.item.addEventListener("pointerenter", this.onEnter);
    this.item.addEventListener("pointermove", this.onMove, { passive: true });
    this.item.addEventListener("pointerleave", this.onLeave);
    window.addEventListener("scroll", this.onScroll, { passive: true });
    window.addEventListener("resize", this.onScroll);
    window.addEventListener("tapx:motion", function () {
      if (!motionOn()) {
        self.tx = 0; self.ty = 0; self.cx = 0; self.cy = 0;
        if (self.face) self.face.style.transform = "";
        if (self.raf) { cancelAnimationFrame(self.raf); self.raf = 0; }
      }
    });
  };

  Card.prototype.process = function (clientX, clientY) {
    var b = this.bounds;
    if (!b) return;
    var nx = (clientX - b.left) / b.width;
    var ny = (clientY - b.top) / b.height;
    nx = Math.max(0, Math.min(1, nx));
    ny = Math.max(0, Math.min(1, ny));
    this.tx = -(ny * 2 - 1) * this.max;
    this.ty = (nx * 2 - 1) * this.max;
    if (this.glare) {
      this.glare.style.setProperty("--mx", (nx * 100).toFixed(1) + "%");
      this.glare.style.setProperty("--my", (ny * 100).toFixed(1) + "%");
    }
  };

  Card.prototype.start = function () {
    if (this.raf) return;
    if (!motionOn()) return;
    var self = this;
    this.raf = requestAnimationFrame(function loop() {
      self.raf = 0;
      self.cx += (self.tx - self.cx) * self.lerp;
      self.cy += (self.ty - self.cy) * self.lerp;
      if (self.face) {
        self.face.style.transform = "rotateX(" + self.cx.toFixed(2) + "deg) rotateY(" + self.cy.toFixed(2) + "deg)";
      }
      var settled = Math.abs(self.tx - self.cx) < 0.01 && Math.abs(self.ty - self.cy) < 0.01;
      if (self.hover || !settled) {
        self.raf = requestAnimationFrame(loop);
      } else {
        self.cx = 0; self.cy = 0;
        if (self.face) self.face.style.transform = "";
      }
    });
  };

  function attach(item) {
    if (!item || instances.has(item)) return;
    instances.set(item, new Card(item));
  }
  function scan(scope) {
    (scope || document).querySelectorAll(".project-item").forEach(attach);
  }

  window.TapxTilt = { attach: attach, scan: scan };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { scan(document); });
  } else {
    scan(document);
  }
})();
