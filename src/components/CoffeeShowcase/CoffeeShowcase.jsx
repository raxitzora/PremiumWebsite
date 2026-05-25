"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    image: "/assets/one.png",
    title: "Handcrafted Brewing",
  },
  {
    image: "/assets/two.png",
    title: "Fresh Roasted Beans",
  },
  {
    image: "/assets/three.png",
    title: "Luxury Coffee Experience",
  },
  {
    image: "/assets/four.png",
    title: "The Taste of Jaipur",
  },
];

export default function CoffeeShowcase() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const totalScroll =
        trackRef.current.scrollWidth -
        window.innerWidth;

      // MAIN HORIZONTAL SCROLL
      gsap.to(trackRef.current, {
        x: -totalScroll,
        ease: "none",

        scrollTrigger: {
          trigger: containerRef.current,

          start: "top top",

          end: () => `+=${totalScroll}`,

          pin: true,

          pinSpacing: true,

          scrub: 1,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      // CARD ENTRANCE ANIMATION
      gsap.from(".coffee-card", {
        opacity: 0,
        y: 60,
        scale: 0.96,

        stagger: 0.12,

        duration: 1,

        ease: "power3.out",

        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="
        relative
        h-screen
        overflow-hidden
        bg-[#120d0b]
      "
      id="brewing"
    >
      {/* Horizontal Track */}
      <div
        ref={trackRef}
        className="
          flex
          h-full
          items-center
          gap-6
          px-[8vw]
          will-change-transform
        "
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="
              coffee-card
              group
              relative
              flex-shrink-0
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-[#1a1411]

              shadow-[0_20px_80px_rgba(0,0,0,0.45)]

              w-[85vw]
              sm:w-[70vw]
              md:w-[55vw]
              lg:w-[42vw]
              xl:w-[32vw]
            "
          >
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-6 sm:p-8 md:p-10">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#c79a63]">
                Rangoon Coffee
              </p>

              <h2
                className="
                  max-w-md
                  font-serif
                  text-3xl
                  leading-tight
                  text-[#f5ece3]

                  sm:text-4xl
                  lg:text-5xl
                "
              >
                {card.title}
              </h2>
            </div>

            {/* Hover Glow */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[#c79a63]/5
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}