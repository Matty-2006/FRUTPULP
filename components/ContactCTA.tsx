"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { productos } from "@/data/productos";

export default function ContactCTA() {
  const ref = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState(productos[0]);
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
    <section
      ref={ref}
      id="contacto"
      className="relative overflow-hidden bg-[#e6b85c] px-6 pb-12 pt-12 text-[#173b2b] md:px-12 md:pb-20 md:pt-24"
    >
      {/* BG pattern */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #173b2b 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />
      {/* Decorative blob */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#173b2b]/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className={`cta-title mb-5 inline-flex items-center gap-2 rounded-full border border-[#173b2b]/20 bg-white/40 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#173b2b]/70 transition-all duration-700 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <span className="text-sm font-normal normal-case tracking-normal">👇</span>
            Elige tu sabor
          </p>
          <h2
            className={`text-4xl font-bold leading-[0.95] tracking-[-0.04em] transition-all duration-700 md:text-6xl ${
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            ¿Cuál te
            <span className="font-light italic"> antoja?</span>
          </h2>
          <p
            className={`mx-auto mt-5 max-w-lg text-base leading-7 text-[#173b2b]/60 transition-all duration-700 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Escoge tu pulpa favorita y escribe a WhatsApp para hacer tu pedido. Te respondemos en minutos.
          </p>
        </div>

        {/* Interactive flavor picker */}
        <div
          className={`mt-12 grid grid-cols-2 gap-3 transition-all duration-700 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {productos.map((p) => {
            const active = p.nombre === selected.nombre;
            return (
              <button
                key={p.nombre}
                type="button"
                onClick={() => setSelected(p)}
                aria-pressed={active}
                aria-label={`Seleccionar ${p.nombre}`}
                className={`group flex flex-col items-center gap-3 rounded-2xl border px-3 py-5 transition-all duration-300 ${
                  active
                    ? "border-[#173b2b] bg-white/70 shadow-lg"
                    : "border-white/50 bg-white/30 hover:border-white hover:bg-white/60"
                }`}
              >
                <span
                  className={`relative h-16 w-16 overflow-hidden rounded-full transition-transform duration-300 ${
                    active ? "scale-110 ring-2 ring-[#173b2b] ring-offset-2 ring-offset-[#e6b85c]" : "group-hover:scale-105"
                  }`}
                  style={{ backgroundColor: "#24563e" }}
                >
                  <Image
                    src={p.imagen}
                    alt={p.nombre}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </span>
                <span className="text-center text-[11px] font-bold leading-tight text-[#173b2b]/80">
                  {p.nombre}
                </span>
              </button>
            );
          })}
        </div>

        {/* Action area */}
        <div
          className={`mt-12 flex flex-col items-center gap-6 rounded-3xl border border-[#173b2b]/10 bg-white/40 px-6 py-8 backdrop-blur-sm transition-all duration-700 md:flex-row md:justify-between md:px-10 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="text-center md:text-left">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#173b2b]/40">
              Mi pedido
            </div>
            <div className="mt-1 text-2xl font-bold text-[#173b2b]">{selected.nombre}</div>
            <p className="mt-1 max-w-sm text-sm font-medium text-[#173b2b]/50">
              {selected.descripcion}
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <a
              href={selected.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[#173b2b] px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(23,59,43,0.3)]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Pedir {selected.nombre}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs font-medium text-[#173b2b]/60 md:justify-end">
              <span>📍 Quito · El Recreo</span>
              <span>🕐 Lun - Dom · 8am - 10pm</span>
              <span>📦 Envíos en Quito</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
