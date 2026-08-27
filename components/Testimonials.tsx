"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "La pulpa de mora es ridículamente buena. La uso para todo — batidos, postres, hasta para el arroz con leche de mi abuela.",
    author: "Carolina M.",
    role: "Mamá y cocinera",
    location: "Quito",
  },
  {
    text: "Como restaurant, buscábamos una pulpa sin químicos para nuestros cócteles. FRUTPULP cambió el juego. El sabor de naranjilla es otro nivel.",
    author: "Andrés P.",
    role: "Chef de bar",
    location: "Quito",
  },
  {
    text: "Mi hija no come fruta, pero con las pulpas de FRUTPULP se toma un batido todos los días. Y yo sé que es pura fruta.",
    author: "Mónica R.",
    role: "Mamá de 2 hijos",
    location: "Cumbayá",
  },
  {
    text: "Pedí la de tamarindo sin mucha expectativa y me voló la cabeza. Es como tener la fruta recién pelada en la mano.",
    author: "Diego F.",
    role: "Fitness coach",
    location: "Quito",
  },
  {
    text: "Llevo meses usando la de guanábana para mis smoothies bowls. La consistencia y el sabor son perfectos, cada vez.",
    author: "Valentina S.",
    role: "Nutricionista",
    location: "Quito",
  },
  {
    text: "Pedí para una fiesta y todos quedaron locos con la de piña. Ahora todos me piden el contacto de FRUTPULP.",
    author: "Jean P.",
    role: "Event planner",
    location: "Cumbayá",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    const ctx = gsap.context(() => {
      const totalScroll = track.scrollWidth - track.parentElement!.offsetWidth;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: () => `+=${totalScroll}`,
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <section ref={sectionRef} className="relative bg-[#173b2b] py-12 md:py-28">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "24px 24px",
      }} />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 md:px-12 md:pb-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-[#e6b85c]">Opiniones</p>
            <h2 className="text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-white md:text-5xl">
              Quienes prueban,
              <br />
              <span className="text-white/15">repiten.</span>
            </h2>
          </div>
          <p className="hidden text-xs text-white/25 md:block">Desliza →</p>
        </div>
      </div>

      {isDesktop ? (
        <div className="overflow-hidden">
          <div ref={trackRef} className="flex gap-5 px-6 md:px-12">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="w-[380px] shrink-0 rounded-2xl border border-white/8 bg-white/[0.03] p-7"
              >
                <div className="mb-4 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-3.5 w-3.5 text-[#e6b85c]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-5 text-sm leading-6 text-white/60">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e6b85c]/10 text-xs font-bold text-[#e6b85c]">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/90">{t.author}</p>
                    <p className="text-[11px] text-white/30">{t.role} · {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="w-[85vw] max-w-[340px] shrink-0 snap-center rounded-2xl border border-white/8 bg-white/[0.03] p-7"
              >
                <div className="mb-4 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-3.5 w-3.5 text-[#e6b85c]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-5 text-sm leading-6 text-white/60">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e6b85c]/10 text-xs font-bold text-[#e6b85c]">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/90">{t.author}</p>
                    <p className="text-[11px] text-white/30">{t.role} · {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mb-2 text-center text-xs text-white/25 md:hidden">Desliza para ver más →</p>
        </div>
      )}
    </section>
  );
}
