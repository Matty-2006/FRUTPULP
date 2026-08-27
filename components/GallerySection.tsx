"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const uses = [
  {
    title: "Batidos",
    description: "Mezcla con leche, agua o yogur. En 30 segundos tienes un batido con sabor real.",
    gradient: "from-[#b52d2d]/80 to-[#a63b32]/60",
    emoji: "🥤",
  },
  {
    title: "Postres",
    description: "Flan, mousse, helados, cakes — la pulpa reemplaza cualquier saborizante artificial.",
    gradient: "from-[#e6b85c]/80 to-[#d4a545]/60",
    emoji: "🍰",
  },
  {
    title: "Salsas",
    description: "Salsa de mora para carnes, glaseado de tamarindo, coulis de frutilla.",
    gradient: "from-[#173b2b]/80 to-[#24563e]/60",
    emoji: "🍽️",
  },
  {
    title: "Cócteles",
    description: "La base perfecta para cócteles, mocktails y bebidas artesanales con carácter.",
    gradient: "from-[#a63b32]/80 to-[#b52d2d]/60",
    emoji: "🍸",
  },
];

export default function GallerySection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gal-label", {
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
        opacity: 0, y: 30, duration: 0.6,
      });
      gsap.from(".gal-title", {
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
        opacity: 0, y: 50, duration: 0.8, delay: 0.1,
      });
      gsap.from(".gal-card", {
        scrollTrigger: { trigger: ".gal-grid", start: "top 85%" },
        opacity: 0, y: 40, scale: 0.95, duration: 0.7, stagger: 0.1,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative bg-[#f8f5ed] px-6 py-12 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="gal-label mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#a63b32]">Usos</p>
          <h2 className="gal-title text-4xl font-bold leading-[0.95] tracking-[-0.04em] md:text-6xl">
            Una pulpa.
            <br />
            <span className="text-[#173b2b]/25">Mil posibilidades.</span>
          </h2>
        </div>

        <div className="gal-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {uses.map((use) => (
            <div
              key={use.title}
              className="gal-card group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${use.gradient} transition-opacity duration-500`} />
              <div className="relative z-10 flex min-h-[280px] flex-col justify-between">
                <span className="text-5xl">{use.emoji}</span>
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-white">{use.title}</h3>
                  <p className="text-sm leading-6 text-white/70">{use.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PRODUCT ROW - all 7 products */}
        <div className="mt-20 grid grid-cols-4 gap-3 sm:grid-cols-7">
          {[
            { name: "Frutilla", emoji: "🍓" },
            { name: "Guanábana", emoji: "🍈" },
            { name: "Mora", emoji: "🫐" },
            { name: "Naranjilla", emoji: "🟠" },
            { name: "Piña", emoji: "🍍" },
            { name: "Tamarindo", emoji: "🫕" },
            { name: "Tomate", emoji: "🍅" },
          ].map((p) => (
            <a
              key={p.name}
              href="#sabores"
              className="group flex flex-col items-center gap-3 rounded-2xl border border-[#173b2b]/8 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-3xl transition-transform duration-300 group-hover:scale-110">{p.emoji}</span>
              <span className="text-xs font-medium text-[#173b2b]/60">{p.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
