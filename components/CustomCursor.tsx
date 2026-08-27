"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

const fruits = ["🍓", "🫐", "🍍", "🍈", "🍊", "🍅", "🍇"];

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const fruitIndexRef = useRef(0);
  const fruitLabelRef = useRef<HTMLSpanElement>(null);

  const cycleFruit = useCallback(() => {
    fruitIndexRef.current = (fruitIndexRef.current + 1) % fruits.length;
    if (fruitLabelRef.current) {
      fruitLabelRef.current.textContent = fruits[fruitIndexRef.current];
    }
    if (cursorRef.current) {
      gsap.fromTo(cursorRef.current,
        { scale: 1.8 },
        { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.4)" }
      );
    }
  }, []);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasFinePointer) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.12,
        ease: "power2.out",
        overwrite: true,
      });
    };

    const onEnter = () => gsap.to(cursor, { scale: 1.5, duration: 0.2 });
    const onLeave = () => gsap.to(cursor, { scale: 1, duration: 0.2 });

    document.addEventListener("mousemove", onMove);
    document.addEventListener("click", cycleFruit);

    const refreshInteractives = () => {
      const els = document.querySelectorAll("a, button, [data-cursor]");
      els.forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
      return els;
    };

    const els = refreshInteractives();

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("click", cycleFruit);
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [cycleFruit]);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden -translate-x-1/2 -translate-y-1/2 text-3xl select-none md:block"
      style={{ willChange: "transform" }}
    >
      <span ref={fruitLabelRef}>{fruits[0]}</span>
    </div>
  );
}
