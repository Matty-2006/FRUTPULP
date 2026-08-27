"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "Sin conservantes",
    description: "Congelación natural que preserva el sabor real. Nada artificial.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
  {
    title: "Sabor auténtico",
    description: "Cada bocado sabe exactamente como la fruta que conoces.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: "Fresca del día",
    description: "Procesamos la fruta el mismo día que llega del campo.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Versátil",
    description: "Batidos, salsas, postres, bowls, cocteles — tu cocina es el límite.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: "Artesanal",
    description: "Producción pequeña, cuidado grande. No somos una fábrica.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Ecuatoriana",
    description: "Frutas de los campos del Ecuador, elaboradas en Quito.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function QualityGrid() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".qg-label", {
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
        opacity: 0, y: 30, duration: 0.6,
      });
      gsap.from(".qg-title", {
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
        opacity: 0, y: 50, duration: 0.8, delay: 0.1,
      });
      gsap.from(".qg-card", {
        scrollTrigger: { trigger: ".qg-grid", start: "top 85%" },
        opacity: 0, y: 30, duration: 0.6, stagger: 0.08,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="calidad" className="relative bg-[#eef1e7] px-6 py-12 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl md:mb-16">
          <p className="qg-label mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#a63b32]">Nuestros valores</p>
          <h2 className="qg-title text-4xl font-bold leading-[0.95] tracking-[-0.04em] md:text-6xl">
            Lo que nos define
            <br />
            <span className="text-[#173b2b]/25">es lo que no ponemos.</span>
          </h2>
        </div>

        <div className="qg-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="qg-card group rounded-2xl border border-[#173b2b]/8 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(23,59,43,0.06)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#173b2b]/5 text-[#173b2b] transition-colors duration-300 group-hover:bg-[#173b2b] group-hover:text-white">
                {item.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold text-[#173b2b]">{item.title}</h3>
              <p className="text-sm leading-6 text-[#173b2b]/50">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
