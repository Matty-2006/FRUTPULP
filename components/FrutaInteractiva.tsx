"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

// High-quality realistic fruit SVG illustrations using gradients + highlights.
function FruitIcon({ name }: { name: string }) {
  switch (name) {
    case "fresa":
      return (
        <svg viewBox="0 0 64 64">
          <defs>
            <radialGradient id="g-fresa" cx="0.35" cy="0.3" r="0.9">
              <stop offset="0%" stopColor="#ff7a8f" />
              <stop offset="55%" stopColor="#e8405c" />
              <stop offset="100%" stopColor="#a8193a" />
            </radialGradient>
            <linearGradient id="l-fresa" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5aa24f" />
              <stop offset="100%" stopColor="#2f7136" />
            </linearGradient>
          </defs>
          <path d="M32 24 Q20 24 17 36 Q15 48 24 54 Q32 60 40 54 Q49 48 47 36 Q44 24 32 24 Z"
            fill="url(#g-fresa)" />
          <ellipse cx="26" cy="38" rx="5" ry="8" fill="#ffffff" opacity="0.18" transform="rotate(-20 26 38)" />
          <circle cx="25" cy="42" r="1.7" fill="#7a0f24" />
          <circle cx="35" cy="36" r="1.7" fill="#7a0f24" />
          <circle cx="30" cy="50" r="1.7" fill="#7a0f24" />
          <circle cx="40" cy="46" r="1.7" fill="#7a0f24" />
          <path d="M32 24 L25 12 M32 24 L32 10 M32 24 L39 12" stroke="url(#l-fresa)" strokeWidth="2.6" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "piña":
      return (
        <svg viewBox="0 0 64 64">
          <defs>
            <linearGradient id="g-pina" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f7c14d" />
              <stop offset="100%" stopColor="#e0921f" />
            </linearGradient>
            <linearGradient id="l-hoja" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4c9e45" />
              <stop offset="100%" stopColor="#2f7a3a" />
            </linearGradient>
          </defs>
          <path d="M32 26 L27 10 M32 26 L32 8 M32 26 L38 10 M32 26 L35 6 M32 26 L42 8"
            stroke="url(#l-hoja)" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M17 36 Q17 21 32 21 Q47 21 47 36 L44 52 Q32 60 20 52 Z" fill="url(#g-pina)" />
          <ellipse cx="27" cy="40" rx="5" ry="10" fill="#ffffff" opacity="0.22" transform="rotate(-18 27 40)" />
          <path d="M23 27 Q32 31 41 27" stroke="#c9791a" strokeWidth="2" fill="none" opacity="0.7" />
          <path d="M24 37 Q32 41 40 37" stroke="#c9791a" strokeWidth="2" fill="none" opacity="0.7" />
          <path d="M25 47 Q32 50 39 47" stroke="#c9791a" strokeWidth="2" fill="none" opacity="0.7" />
        </svg>
      );
    case "mora":
      return (
        <svg viewBox="0 0 64 64">
          <defs>
            <radialGradient id="g-mora" cx="0.4" cy="0.35" r="0.9">
              <stop offset="0%" stopColor="#a06bc9" />
              <stop offset="60%" stopColor="#6c2f96" />
              <stop offset="100%" stopColor="#3c1462" />
            </radialGradient>
            <linearGradient id="l-mora" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4c9e45" />
              <stop offset="100%" stopColor="#2f7a3a" />
            </linearGradient>
          </defs>
          {[ [28,30],[38,27],[34,38],[25,39],[40,37] ].map(([cx,cy],i)=>(
            <circle key={i} cx={cx} cy={cy} r="9.5" fill="url(#g-mora)" />
          ))}
          <circle cx="28" cy="30" r="3" fill="#ffffff" opacity="0.25" />
          <circle cx="38" cy="27" r="3" fill="#ffffff" opacity="0.18" />
          <path d="M29 20 L25 12 M34 20 L40 10 M36 21 L44 13" stroke="url(#l-mora)" strokeWidth="2.4" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "naranja":
      return (
        <svg viewBox="0 0 64 64">
          <defs>
            <radialGradient id="g-naranja" cx="0.38" cy="0.32" r="0.9">
              <stop offset="0%" stopColor="#ffc35e" />
              <stop offset="55%" stopColor="#f5911d" />
              <stop offset="100%" stopColor="#d26a0a" />
            </radialGradient>
            <linearGradient id="l-naranja" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4c9e45" />
              <stop offset="100%" stopColor="#2f7a3a" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="36" r="20" fill="url(#g-naranja)" />
          <circle cx="26" cy="29" r="5" fill="#ffffff" opacity="0.3" />
          <path d="M29 26 L41 12 M29 24 L36 9 M28 27 L26 10" stroke="url(#l-naranja)" strokeWidth="2.6" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "arandano":
      return (
        <svg viewBox="0 0 64 64">
          <defs>
            <radialGradient id="g-arand" cx="0.4" cy="0.3" r="0.9">
              <stop offset="0%" stopColor="#7a8de0" />
              <stop offset="55%" stopColor="#4050a8" />
              <stop offset="100%" stopColor="#232a72" />
            </radialGradient>
            <linearGradient id="l-arand" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4c9e45" />
              <stop offset="100%" stopColor="#2f7a3a" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="35" r="19" fill="url(#g-arand)" />
          <circle cx="26" cy="28" r="5" fill="#ffffff" opacity="0.28" />
          <path d="M30 17 L28 9 M34 17 L36 9" stroke="url(#l-arand)" strokeWidth="2.4" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "tamarindo":
      return (
        <svg viewBox="0 0 64 64">
          <defs>
            <linearGradient id="g-tamar" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#c08a4f" />
              <stop offset="55%" stopColor="#a9743f" />
              <stop offset="100%" stopColor="#7c5230" />
            </linearGradient>
          </defs>
          <path d="M19 36 Q15 22 30 16 Q45 14 43 23 Q41 31 34 36 Q28 41 19 36 Z"
            fill="url(#g-tamar)" stroke="#6b4a2c" strokeWidth="1.5" />
          <ellipse cx="25" cy="24" rx="4" ry="6" fill="#ffffff" opacity="0.2" transform="rotate(-15 25 24)" />
          <rect x="30" y="33" width="4" height="15" rx="2" fill="#7c5230" transform="rotate(10 32 40)" />
          <path d="M25 13 Q29 7 34 11" stroke="#5d4226" strokeWidth="2.6" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "guanabana":
      return (
        <svg viewBox="0 0 64 64">
          <defs>
            <radialGradient id="g-guan" cx="0.4" cy="0.3" r="0.9">
              <stop offset="0%" stopColor="#a5db7d" />
              <stop offset="55%" stopColor="#6daf45" />
              <stop offset="100%" stopColor="#3f7f2f" />
            </radialGradient>
            <linearGradient id="l-guan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4c9e45" />
              <stop offset="100%" stopColor="#2f7a3a" />
            </linearGradient>
          </defs>
          <ellipse cx="32" cy="39" rx="21" ry="24" fill="url(#g-guan)" />
          {[ [26,28],[36,23],[30,45],[39,42],[24,40] ].map(([cx,cy],i)=>(
            <path key={i} d={`M${cx} ${cy} q2 9 4 3`} stroke="#4d8f36" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.8" />
          ))}
          <ellipse cx="26" cy="30" rx="5" ry="8" fill="#ffffff" opacity="0.18" transform="rotate(-20 26 30)" />
          <path d="M32 16 L28 8 M32 16 L36 8" stroke="url(#l-guan)" strokeWidth="2.6" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "tomate":
      return (
        <svg viewBox="0 0 64 64">
          <defs>
            <radialGradient id="g-tomate" cx="0.37" cy="0.3" r="0.9">
              <stop offset="0%" stopColor="#ff6d5c" />
              <stop offset="55%" stopColor="#dd3a32" />
              <stop offset="100%" stopColor="#a01f1f" />
            </radialGradient>
            <linearGradient id="l-tomate" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5aa24f" />
              <stop offset="100%" stopColor="#2f7136" />
            </linearGradient>
          </defs>
          <ellipse cx="32" cy="41" rx="20" ry="21" fill="url(#g-tomate)" />
          <ellipse cx="26" cy="34" rx="6" ry="9" fill="#ffffff" opacity="0.18" transform="rotate(-18 26 34)" />
          <path d="M32 22 L26 13 M32 22 L32 11 M32 22 L38 13" stroke="url(#l-tomate)" strokeWidth="2.6" strokeLinecap="round" fill="none" />
        </svg>
      );
    default:
      return null;
  }
}

// Smaller overall region (~460px), 5 visible rings with orbiting fruits.
const rings = [
  { radius: 210, size: 46, duration: 42, direction: 1, name: "fresa" },
  { radius: 175, size: 40, duration: 34, direction: -1, name: "piña" },
  { radius: 140, size: 38, duration: 28, direction: 1, name: "mora" },
  { radius: 105, size: 34, duration: 22, direction: -1, name: "guanabana" },
  { radius: 70, size: 32, duration: 16, direction: 1, name: "naranja" },
];

const extras: Record<number, string[]> = {
  0: ["naranja", "arandano", "tomate"],
  1: ["tamarindo", "arandano"],
  2: ["naranja", "tomate"],
  3: ["arandano", "fresa"],
  4: ["mora", "tamarindo"],
};

export default function FrutaInteractiva() {
  const regionRef = useRef<HTMLDivElement>(null);

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!reducedMotion) {
        rings.forEach((ring, i) => {
          gsap.to(`.orbit-${i}`, {
            rotation: 360 * ring.direction,
            duration: ring.duration,
            repeat: -1,
            ease: "none",
          });
        });
        gsap.to(".fruta-logo-img", {
          scale: 1.06,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, regionRef);
    return () => ctx.revert();
  }, [reducedMotion]);

  const renderOrbit = (index: number) => {
    const ring = rings[index];
    const fruits = [ring.name, ...(extras[index] || [])];
    return (
      <div
        key={ring.radius}
        className={`orbit-${index} absolute left-1/2 top-1/2`}
        style={{ width: 0, height: 0 }}
      >
        {/* Visible ring line */}
        <div
          className="absolute rounded-full border border-white/[0.12]"
          style={{
            width: ring.radius * 2,
            height: ring.radius * 2,
            left: -ring.radius,
            top: -ring.radius,
          }}
        />
        {fruits.map((name, i) => {
          const angle = (i / fruits.length) * (2 * Math.PI);
          const x = Math.round((Math.cos(angle) * ring.radius - ring.size / 2) * 100) / 100;
          const y = Math.round((Math.sin(angle) * ring.radius - ring.size / 2) * 100) / 100;
          return (
            <div
              key={`${name}-${i}`}
              className="absolute left-1/2 top-1/2"
              style={{
                width: ring.size,
                height: ring.size,
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <FruitIcon name={name} />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="relative h-[308px] w-[308px] sm:h-[420px] sm:w-[420px] md:h-[560px] md:w-[560px]">
      <div
        ref={regionRef}
        className="fruta-region absolute left-0 top-0 origin-top-left scale-[0.55] sm:scale-[0.75] md:scale-100"
        style={{ width: 560, height: 560 }}
      >
        {/* Center logo */}
        <div className="fruta-logo-img absolute left-1/2 top-1/2 z-20 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 md:h-[340px] md:w-[340px]">
          <Image
            src="/images/logo_sin_fondo.png"
            alt="FRUTPULP"
            fill
            sizes="(max-width: 768px) 240px, 340px"
            className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)]"
            priority
          />
        </div>

        {/* 5 orbit rings */}
        {rings.map((_, i) => renderOrbit(i))}
      </div>
    </div>
  );
}
