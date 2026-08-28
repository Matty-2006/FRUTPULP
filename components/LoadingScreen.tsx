"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const [done, setDone] = useState(false);
  const rafRef = useRef(0);
  const timerRef = useRef(0);

  useEffect(() => {
    // Lock scrolling while the loader is visible so the page can pre-render
    // and all ScrollTriggers can be measured correctly before revealing.
    const prevOverflow = document.body.style.overflow;
    const hadLenis = typeof window.__lenis !== "undefined";
    document.body.style.overflow = "hidden";
    window.__lenis?.stop();

    // Very quick 0 -> 100 countdown so the page feels instant (< 1s total).
    const dur = 550;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        finish();
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    const finish = () => {
      setFading(true);
      timerRef.current = window.setTimeout(() => {
        setDone(true);
        // Unlock scroll now that the page is revealed.
        document.body.style.overflow = prevOverflow;
        if (hadLenis) window.__lenis?.start();
        // Re-measure every ScrollTrigger now that images have loaded and the
        // layout is settled, so no section stays invisible (blank/white).
        window.dispatchEvent(new Event("app:ready"));
        const safeRefresh = () => {
          try {
            ScrollTrigger.refresh();
          } catch {
            /* noop */
          }
        };
        safeRefresh();
        requestAnimationFrame(() => {
          requestAnimationFrame(safeRefresh);
        });
        window.setTimeout(safeRefresh, 350);
      }, 220);
    };

    const onWindowLoad = () => {
      try {
        ScrollTrigger.refresh();
      } catch {
        /* noop */
      }
    };
    window.addEventListener("load", onWindowLoad);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.clearTimeout(timerRef.current);
      window.removeEventListener("load", onWindowLoad);
      document.body.style.overflow = prevOverflow;
      if (hadLenis) window.__lenis?.start();
    };
  }, []);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#173b2b] transition-opacity duration-200 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
          FRUTPULP
        </h1>

        <div className="w-60 md:w-80">
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm font-medium uppercase tracking-[0.35em] text-white/90">
              {progress}%
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/45">
              Cargando sabores
            </span>
          </div>
          <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[#e6b85c] transition-[width] duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
