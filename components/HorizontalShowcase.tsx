"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { productos } from "@/data/productos";

gsap.registerPlugin(ScrollTrigger);

const fruitColors: Record<string, string> = {
  Frutilla: "#e74c6f",
  Guanábana: "#2ecc71",
  Mora: "#6c3483",
  Naranjilla: "#e67e22",
  Piña: "#f1c40f",
  Tamarindo: "#8d6e63",
  "Tomate de árbol": "#e74c3c",
};

function ProductCard({ producto, index }: { producto: (typeof productos)[0]; index?: number }) {
  return (
    <div className="group relative h-[65vh] w-[80vw] shrink-0 overflow-hidden rounded-[2rem] sm:w-[50vw] md:w-[30vw]">
      <div className="absolute inset-0">
        <Image
          src={producto.imagen}
          alt={`Pulpa de ${producto.nombre}`}
          fill
          sizes="(max-width: 768px) 80vw, 30vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
      </div>

      <div className="absolute left-6 top-6 z-10 text-7xl font-black text-white/[0.06]">
        {String((index ?? 0) + 1).padStart(2, "0")}
      </div>

      <div className="absolute right-6 top-6 z-10">
        <div
          className="h-3 w-3 rounded-full ring-2 ring-white/20"
          style={{ backgroundColor: fruitColors[producto.nombre] || "#e6b85c" }}
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: fruitColors[producto.nombre] || "#e6b85c" }}
          />
          FRUTPULP
        </div>

        <h3 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl">
          {producto.nombre}
        </h3>

        <p className="mb-6 max-w-xs text-sm leading-6 text-white/45">
          {producto.descripcion}
        </p>

        <a
          href={producto.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] text-[#173b2b] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)]"
        >
          Pedir esta pulpa
          <span>→</span>
        </a>
      </div>
    </div>
  );
}

function EndCard() {
  return (
    <div className="flex h-[65vh] w-[60vw] shrink-0 items-center justify-center rounded-[2rem] border border-[#173b2b]/10 bg-white sm:w-[40vw] md:w-[25vw]">
      <div className="text-center">
        <p className="mb-2 text-4xl">🍓🫐🍍</p>
        <p className="mt-4 text-lg font-bold text-[#173b2b]/60">¿Y cuál es el tuyo?</p>
        <a
          href="#contacto"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#173b2b]/20 px-6 py-3 text-xs font-medium text-[#173b2b]/60 transition-all duration-300 hover:border-[#173b2b] hover:text-[#173b2b]"
        >
          Pedir ahora →
        </a>
      </div>
    </div>
  );
}

export default function HorizontalShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useGSAP(
    () => {
      if (!isDesktop) return;
      const track = trackRef.current;
      const container = containerRef.current;
      if (!track || !container) return;

      const totalScroll = track.scrollWidth - container.offsetWidth;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: containerRef, dependencies: [isDesktop] }
  );

  return (
    <section id="sabores" className="relative bg-[#f8f5ed] py-12 md:py-28">
      <div className="px-6 pb-10 md:px-12 md:pb-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#a63b32]">Explora</p>
          <h2 className="text-4xl font-bold leading-[1] tracking-[-0.03em] text-[#173b2b] md:text-6xl">
            Cada sabor,
            <br />
            <span className="text-[#173b2b]/20">una historia.</span>
          </h2>
        </div>
      </div>

      {/* MOBILE: vertical stack (natural scroll) */}
      {!isDesktop && (
        <div className="mx-auto flex max-w-md flex-col items-center gap-6 px-6 md:px-0">
          {productos.map((producto, i) => (
            <ProductCard key={producto.nombre} producto={producto} index={i} />
          ))}
          <EndCard />
        </div>
      )}

      {/* DESKTOP: pinned horizontal scroll */}
      {isDesktop && (
        <div ref={containerRef} className="relative h-screen overflow-hidden">
          <div ref={trackRef} className="flex h-full items-center gap-6 pl-6 pr-40 md:pl-12">
            {productos.map((producto, i) => (
              <ProductCard key={producto.nombre} producto={producto} index={i} />
            ))}
            <EndCard />
          </div>
        </div>
      )}
    </section>
  );
}
