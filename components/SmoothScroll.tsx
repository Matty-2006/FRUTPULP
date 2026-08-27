"use client";

import { useLayoutEffect } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useLayoutEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const t = window.setTimeout(() => window.scrollTo(0, 0), 100);

    const mq = window.matchMedia("(pointer: fine) and (hover: hover)");
    if (!mq.matches) {
      return () => window.clearTimeout(t);
    }

    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      lerp: 0.08,
    });

    lenis.scrollTo(0, { immediate: true });

    window.__lenis = lenis;

    return () => {
      window.clearTimeout(t);
      delete window.__lenis;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
