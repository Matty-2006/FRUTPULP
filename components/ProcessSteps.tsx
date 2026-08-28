"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Seleccionamos",
    description: "Solo la fruta en su punto ideal de maduración entra a nuestro proceso. nada forzado.",
    emoji: "🫒",
    color: "#e6b85c",
  },
  {
    num: "02",
    title: "Preparamos",
    description: "Pelamos, cortamos y procesamos el mismo día. En cocina, con cuidado artesanal.",
    emoji: "🔪",
    color: "#b52d2d",
  },
  {
    num: "03",
    title: "Conservamos",
    description: "Congelamos inmediatamente. Sin conservantes, sin colorantes, sin saborizantes.",
    emoji: "❄️",
    color: "#24563e",
  },
  {
    num: "04",
    title: "Disfrutas",
    description: "Batidos, salsas, postres, bowls, cocteles — el sabor real de la fruta fresca.",
    emoji: "🍹",
    color: "#173b2b",
  },
];

export default function ProcessSteps() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="proceso" className="relative bg-[#173b2b] px-6 py-12 text-white md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl md:mb-16">
          <p
            className={`mb-3 text-xs font-medium uppercase tracking-[0.35em] text-[#e6b85c] transition-all duration-700 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Cómo funciona
          </p>
          <h2
            className={`text-4xl font-bold leading-[0.95] tracking-[-0.04em] transition-all duration-700 md:text-6xl ${
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            De la fruta a tu mesa.
            <br />
            <span className="text-white/20">Sin vueltas.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{ transitionDelay: `${i * 90}ms` }}
              className={`group transition-all duration-500 ${
                inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-2xl transition-transform duration-300 group-hover:scale-110"
              >
                {step.emoji}
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/25">
                PASO {step.num}
              </span>
              <h3 className="mt-2 text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/40">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
