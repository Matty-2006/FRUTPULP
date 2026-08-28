"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const uses = [
  {
    title: "Batidos",
    description: "Cremoso y listo en 30 segundos.",
    gradient: "from-[#b52d2d] to-[#a63b32]",
    accent: "#ff6d5c",
    imagen: "/images/batidos.png",
    emoji: "🥤",
  },
  {
    title: "Postres",
    description: "Ese toque que enamora.",
    gradient: "from-[#d9992a] to-[#e6b85c]",
    accent: "#ffe9a8",
    imagen: "/images/postres.png",
    emoji: "🍰",
    imgFilter: "saturate-[0.8]",
  },
  {
    title: "Salsas",
    description: "Sabor real en cada gota.",
    gradient: "from-[#173b2b] to-[#24563e]",
    accent: "#8fd9a8",
    imagen: "/images/salsas.png",
    emoji: "🍽️",
  },
  {
    title: "Cócteles",
    description: "Carácter sin atajos.",
    gradient: "from-[#a63b32] to-[#b52d2d]",
    accent: "#ff9b8f",
    imagen: "/images/cocteles.png",
    emoji: "🍸",
  },
];

export default function GallerySection() {
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
    <section ref={ref} className="relative bg-[#f8f5ed] px-6 py-12 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p
            className={`mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#a63b32] transition-all duration-700 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Usos
          </p>
          <h2
            className={`text-4xl font-bold leading-[0.95] tracking-[-0.04em] transition-all duration-700 md:text-6xl ${
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Una pulpa.
            <br />
            <span className="text-[#173b2b]/25">Mil posibilidades.</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {uses.map((use, i) => (
            <div
              key={use.title}
              style={{ transitionDelay: `${i * 90}ms` }}
              className={`group relative overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(23,59,43,0.25)] ${
                inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {/* colored gradient card */}
              <div className={`absolute inset-0 bg-gradient-to-br ${use.gradient}`} />

              {/* subtle texture/dots */}
              <div className="absolute inset-0 opacity-[0.06]" style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
                backgroundSize: "18px 18px",
              }} />

              <div className="relative z-10 flex flex-col">
                {/* top row: emoji + title side by side */}
                <div className="flex items-center gap-3">
                  <span className="text-4xl drop-shadow">{use.emoji}</span>
                  <h3 className="text-2xl font-bold tracking-tight text-white">{use.title}</h3>
                </div>

                {/* centered circular photo with rotating gradient rings */}
                <div className="relative mt-7 flex h-44 w-full items-center justify-center">
                  {/* rotating gradient halo */}
                  <div className="animate-spin-slow absolute h-40 w-40 rounded-full opacity-60 blur-[1px]"
                    style={{ background: `conic-gradient(from 0deg, transparent 0%, ${use.accent} 25%, transparent 50%, ${use.accent} 75%, transparent 100%)` }}
                  />
                  {/* inner soft glow */}
                  <div className="absolute h-28 w-28 rounded-full"
                    style={{ background: `radial-gradient(circle, ${use.accent}cc, transparent 70%)` }}
                  />
                  {/* photo circle */}
                  <div className="group relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-2 ring-white/60 shadow-2xl transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src={use.imagen}
                      alt={use.title}
                      fill
                      sizes="96px"
                      loading="lazy"
                      className={`object-cover ${use.imgFilter ?? ""}`}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                </div>

                {/* text below */}
                <p className="mt-5 text-center text-sm leading-6 text-white/80">{use.description}</p>
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
