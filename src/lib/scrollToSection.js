import { lenis } from "@/components/UI/SmoothScroll";

export const scrollToSection = (target) => {
  if (!lenis) return;

  lenis.scrollTo(target, {
    offset: -100,

    duration: 2.2,

    easing: (t) => 1 - Math.pow(1 - t, 4),
  });
};