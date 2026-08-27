"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { label: "Sabores", href: "#sabores" },
  { label: "Nosotros", href: "#proceso" },
  { label: "Calidad", href: "#calidad" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const st = ScrollTrigger.create({
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      onLeave: () => setScrolled(true),
      onEnterBack: () => setScrolled(false),
    });
    return () => st.kill();
  }, []);

  useEffect(() => {
    if (menuRef.current && overlayRef.current) {
      tlRef.current = gsap.timeline({ paused: true });
      tlRef.current
        .to(overlayRef.current, { opacity: 1, duration: 0.3, ease: "power2.out" })
        .to(menuRef.current, { x: 0, duration: 0.4, ease: "power3.out" }, "<")
        .from(
          menuRef.current.querySelectorAll(".menu-link"),
          { opacity: 0, y: 20, duration: 0.3, stagger: 0.06, ease: "power2.out" },
          "-=0.2"
        );
    }
    return () => { tlRef.current?.kill(); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (menuOpen) tlRef.current?.play();
    else tlRef.current?.reverse();
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const goTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href) as HTMLElement | null;
    if (!target) return;
    const lenis = window.__lenis;
    if (lenis) {
      lenis.scrollTo(target, { offset: -10, duration: 0.9 });
    } else {
      const top = target.getBoundingClientRect().top + window.scrollY - 10;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const navBg = scrolled ? "bg-[#f8f5ed]/90 shadow-[0_1px_0_rgba(23,59,43,0.06)] backdrop-blur-xl" : "bg-transparent";
  const linkColor = scrolled ? "text-[#173b2b]/70 hover:text-[#173b2b]" : "text-white/70 hover:text-white";
  const btnStyle = scrolled ? "bg-[#173b2b] text-white" : "bg-white text-[#173b2b]";
  const iconColor = scrolled ? "bg-[#173b2b]" : "bg-white";
  const hamburgerBorder = scrolled ? "border-[#173b2b]/20" : "border-white/20";

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${navBg}`}
      >
        <div className={`mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 transition-all duration-500 ${scrolled ? "py-3" : "py-4"}`}>
          <a href="#" onClick={(e) => goTo(e, "#hero")} className="relative z-10 h-10 w-28 md:h-12 md:w-36">
            <Image
              src="/images/logo_sin_fondo.png"
              alt="FRUTPULP"
              fill
              className="object-contain"
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 text-[13px] font-medium md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => goTo(e, link.href)}
                className={`relative transition-colors duration-300 ${linkColor}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/593984629133"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${btnStyle}`}
            >
              Pedir ahora
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`relative z-[60] flex h-10 w-10 items-center justify-center rounded-full border md:hidden ${hamburgerBorder}`}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <div className={`flex flex-col gap-[5px] ${menuOpen ? "bg-transparent" : ""}`}>
              <span className={`block h-[1.5px] transition-all duration-300 ${iconColor} ${menuOpen ? "w-5 translate-y-[7px] rotate-45" : "w-5"}`} />
              <span className={`block h-[1.5px] transition-all duration-200 ${iconColor} ${menuOpen ? "w-0 opacity-0" : "w-3.5"}`} />
              <span className={`block h-[1.5px] transition-all duration-300 ${iconColor} ${menuOpen ? "w-5 -translate-y-[7px] -rotate-45" : "w-5"}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        ref={overlayRef}
        className="pointer-events-none fixed inset-0 z-50 bg-[#f8f5ed]/0"
        style={{ opacity: 0 }}
      >
        <div
          ref={menuRef}
          className="pointer-events-auto flex h-full w-full flex-col items-center justify-center gap-8 bg-[#f8f5ed]"
          style={{ transform: "translateX(100%)" }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => goTo(e, link.href)}
              className="menu-link text-3xl font-bold text-[#173b2b] transition-colors duration-300 hover:text-[#b52d2d]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/593984629133"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="menu-link mt-4 rounded-full bg-[#173b2b] px-8 py-4 text-white transition-all duration-300 hover:bg-[#24563e]"
          >
            Pedir ahora
          </a>
        </div>
      </div>
    </>
  );
}
