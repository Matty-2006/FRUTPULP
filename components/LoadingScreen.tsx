"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 250);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#173b2b] transition-opacity duration-200" style={{ opacity: done ? 0 : 1 }}>
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">FRUTPULP</h1>
        <span className="text-xs font-medium tracking-[0.3em] text-white/50">Cargando...</span>
      </div>
    </div>
  );
}
