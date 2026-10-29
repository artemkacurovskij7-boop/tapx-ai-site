import { useEffect, useState } from "react";
import Globe from "./components/originkit/ui/globe";
import "./index.css";

const DOTS = { color: "#6df7c1", size: 4.2, density: 7, allDots: false };
const MARKERS = { markers: [], color: "#ffc857", size: 40 };
const GLOBE_STYLE = { width: "100%", height: "100%" };

export default function App() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [compact, setCompact] = useState(
    () => window.matchMedia("(max-width: 600px)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 600px)");
    const onChange = (e: MediaQueryListEvent) => setCompact(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return (
    <main className="globe-stage" aria-label="Интерактивный 3D-глобус TapX AI">
      <p className="sr-only">
        Интерактивный 3D-глобус: точки суши, координатная сетка и медленное
        вращение. Перетаскивание мышью или пальцем вращает глобус; при
        уменьшении движения вращение остановлено.
      </p>
      <div className="globe-wrap">
        <Globe
          fill="dots"
          fillColor="#6df7c1"
          dots={DOTS}
          markerConfig={MARKERS}
          oceanColor="#030807"
          outlineColor="#2d6b56"
          outlineWidth={1}
          showOutline
          graticuleColor="#12352a"
          showGrid
          scale={compact ? 6.4 : 8}
          speed={reduced ? 0 : 1.4}
          smoothing={8}
          direction="left"
          stopOnHover
          initialLatitude={23}
          initialLongitude={-23}
          detail={5}
          dragSpeed={6}
          style={GLOBE_STYLE}
        />
      </div>
      <span className="globe__brand" aria-hidden="true">TAPX / ORBITAL GLOBE</span>
      <span className="globe__hint" aria-hidden="true">drag to rotate</span>
    </main>
  );
}
