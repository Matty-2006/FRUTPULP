"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FrutaInteractiva from "@/components/FrutaInteractiva";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Stagger the title words with clip-path reveal
      gsap.set(".hero-line", { clipPath: "inset(0 100% 0 0)" });
      gsap.set(".hero-word", { clipPath: "inset(0 100% 0 0)" });
      gsap.set(".hero-sub", { opacity: 0, y: 20 });
      gsap.set(".hero-btn", { opacity: 0, y: 15 });
      gsap.set(".hero-stat-item", { opacity: 0, y: 15 });
      gsap.set(".hero-bg-gradient", { scale: 1.3, opacity: 0 });

      tl
        // Background gradient emerges
        .to(".hero-bg-gradient", { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" })
        // Title lines reveal one by one
        .to(".hero-word", { clipPath: "inset(0% 0 0 0)", duration: 0.6, stagger: 0.08 }, "-=0.8")
        // Decorative line
        .to(".hero-line", { clipPath: "inset(0% 0 0 0)", duration: 0.5 }, "-=0.3")
        // Subtitle
        .to(".hero-sub", { opacity: 1, y: 0, duration: 0.5 }, "-=0.2")
        // Buttons
        .to(".hero-btn", { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 }, "-=0.2")
        // Stats
        .to(".hero-stat-item", { opacity: 1, y: 0, duration: 0.3, stagger: 0.06 }, "-=0.1");

      // Parallax
      gsap.to(".hero-visual-col", {
        yPercent: -6,
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 2 },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#173b2b] text-white"
    >
      {/* Animated gradient bg */}
      <div className="hero-bg-gradient absolute inset-0" style={{
        background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(230,184,92,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(181,45,45,0.08) 0%, transparent 60%)",
      }} />

      {/* Grid dots */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-28 pb-16 md:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-8">

          {/* TEXT COLUMN */}
          <div className="relative z-10 mx-auto w-full max-w-xl text-center lg:max-w-none lg:text-left">
            <div className="hero-float-badge mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e6b85c]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#e6b85c]">
                Quito, Ecuador
              </span>
            </div>

            <h1 className="text-[2.9rem] font-bold leading-[0.9] tracking-[-0.05em] sm:text-7xl md:text-7xl lg:text-[6.5rem]">
              <span className="hero-word block">El sabor</span>
              <span className="hero-word block">de la fruta</span>
              <span className="hero-word block text-[#e6b85c]">de verdad.</span>
            </h1>

            <div className="hero-line my-6 mx-auto h-px w-16 bg-gradient-to-r from-[#e6b85c] to-transparent lg:mx-0" />

            <p className="hero-sub max-w-md text-[15px] leading-relaxed text-white/45 md:text-base">
              100% fruta. Sin conservantes. Directo del campo ecuatoriano a tu cocina.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="#sabores"
                className="hero-btn group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#173b2b] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]"
              >
                Descubrir sabores
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="https://wa.me/593984629133?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20FRUTPULP."
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm text-white/60 transition-all duration-300 hover:border-white/30 hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          {/* VISUAL COLUMN — Interactive fruit protagonist (no white box) */}
          <div className="hero-visual-col relative flex items-center justify-center py-8 lg:py-0">
            <FrutaInteractiva />
          </div>
        </div>

        {/* Stats row — centered below the fruit for symmetry */}
        <div className="mx-auto mt-12 flex flex-col items-center justify-center gap-5 md:mt-14 md:flex-row md:gap-x-16 md:gap-y-4">
          {[
            { value: "7", label: "Sabores" },
            { value: "0%", label: "Conservantes" },
            { value: "100%", label: "Fruta pura" },
          ].map((s) => (
            <div key={s.label} className="hero-stat-item flex items-center gap-3">
              <div className="text-3xl font-bold md:text-4xl">{s.value}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/30">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
