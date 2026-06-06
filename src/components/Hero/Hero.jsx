"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { scrollToSection } from "@/lib/scrollToSection";
export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/assets/herovid.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          
          {/* Top Label */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-xs font-light uppercase tracking-[0.3em] text-[#c8a27a] sm:text-sm"
          >
             Coffee Brewery 
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-4xl
              font-serif
              text-4xl
              italic
              leading-tight
              text-[#f5ece3]
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Specialty Coffee is not just a drink.
            <br className="hidden sm:block" />
            It’s an experience.
          </motion.h1>

          {/* Buttons */}
        {/* Buttons */}
<motion.div
  initial={{ opacity: 0, y: 28 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.9,
    delay: 0.2,
  }}
  className="
    mt-10
    flex
    w-full
    max-w-md
    flex-col
    gap-4

    sm:flex-row
    sm:justify-center
  "
>
  {/* Explore Menu */}
  <button
  id="menu-btn"
  onClick={() => {
    const button = document.getElementById("menu-btn");

    button?.classList.add("coffee-fill-active");

    setTimeout(() => {
      scrollToSection("#themenu");

      button?.classList.remove("coffee-fill-active");
    }, 850);
  }}
  className="
    coffee-fill-btn
    group
    relative
    flex-1
    overflow-hidden

    border
    border-[#d2b08c]

    bg-[#e6d2bf]

    px-6
    py-4

    text-center
    text-xs
    font-medium
    uppercase
    tracking-widest

    text-[#1a120d]

    transition-all
    duration-500

    hover:shadow-[0_10px_40px_rgba(210,176,140,0.25)]
  "
>
  {/* Coffee Fill */}
  <span className="coffee-fill" />

  {/* Text */}
  <span
    className="
      relative
      z-10

      transition-all
      duration-300

      group-hover:tracking-[0.2em]
    "
  >
    Explore Menu
  </span>
</button>

  {/* Visit */}
  <button
  id="visit-btn"
  onClick={() => {
    const button = document.getElementById("visit-btn");

    button?.classList.add("coffee-fill-active");

    setTimeout(() => {
      scrollToSection("#visit");

      button?.classList.remove("coffee-fill-active");
    }, 850);
  }}
  className="
    coffee-fill-btn-dark
    group
    relative
    flex-1
    overflow-hidden

    border
    border-white/20

    bg-white/5

    px-6
    py-4

    text-center
    text-xs
    font-medium
    uppercase
    tracking-widest

    text-white

    backdrop-blur-sm

    transition-all
    duration-500

    hover:border-[#c8a27a]/50
    hover:bg-white/10
  "
>
  {/* Coffee Fill */}
  <span className="coffee-fill-dark" />

  {/* Text */}
  <span
    className="
      relative
      z-10

      transition-all
      duration-300

      group-hover:tracking-[0.2em]
    "
  >
    Visit Cafe
  </span>
</button>
</motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 1,
            }}
            className="absolute bottom-8 flex flex-col items-center"
          >
            <span className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#c8a27a]/70">
              Scroll
            </span>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
            >
              <ChevronDown
                size={18}
                className="text-[#c8a27a]/70"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}