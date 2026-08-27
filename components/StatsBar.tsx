"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "100%", label: "Fruta natural", icon: "🍊" },
  { value: "7", label: "Sabores únicos", icon: "✨" },
  { value: "0", label: "Conservantes", icon: "🚫" },
  { value: "Quito", label: "Hecho en Ecuador", icon: "🇪🇨" },
];

export default function StatsBar() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative bg-[#173b2b] py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="stat-item text-center">
              <span className="mb-3 block text-2xl">{s.icon}</span>
              <div className="text-3xl font-bold tracking-tight text-white md:text-4xl">{s.value}</div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/35">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
