"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export let lenis;

export default function SmoothScroll() {
  useEffect(() => {
    lenis = new Lenis({
      duration: 1.4,

      smoothWheel: true,
      smoothTouch: false,

      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,

      infinite: false,

      lerp: 0.08,
    });

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}