"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { scrollToSection } from "@/lib/scrollToSection";

const navLinks = [
  {
    name: "The Story",
    href: "#thestory",
  },

  {
    name: "Brewing",
    href: "#brewing",
  },

  {
    name: "Precision",
    href: "#process",
  },

  {
    name: "The Menu",
    href: "#themenu",
  },

  {
    name: "Experience",
    href: "#moments",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLiquidScroll = (
    e,
    targetSection
  ) => {
    const target = e.currentTarget;

    target.classList.add("nav-coffee-active");

    setTimeout(() => {
      scrollToSection(targetSection);
    }, 850);

    setTimeout(() => {
      target.classList.remove(
        "nav-coffee-active"
      );
    }, 1200);
  };

  return (
    <header
      className="
        fixed
        left-0
        top-0
        z-50
        w-full

        border-b
        border-[#3b2a22]/40

        bg-[#120d0b]/82

        backdrop-blur-2xl
      "
    >
      <nav
        className="
          mx-auto
          flex
          h-[90px]
          max-w-[1550px]
          items-center
          justify-between

          px-5

          sm:px-8
          lg:px-14
        "
      >
        {/* Logo */}
        <button
          onClick={() =>
            scrollToSection("body")
          }
          className="
            group
            relative
            flex
            shrink-0
            items-center
          "
        >
          <div className="relative overflow-hidden rounded-md">
            <Image
              src="/assets/logo.png"
              alt="Rangoon Coffee Brewery"
              width={100}
              height={100}
              priority
              className="
                transition-transform
                duration-700

                group-hover:scale-[1.02]
              "
            />

            {/* Glow */}
            <div
              className="
                absolute
                inset-0

                bg-[#c08b5c]/0

                transition-all
                duration-700

                group-hover:bg-[#c08b5c]/5
              "
            />
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center lg:flex">
          {/* Links */}
          <div className="flex items-center gap-1">
            {navLinks.map((item) => (
              <button
                key={item.name}
                onClick={(e) =>
                  handleLiquidScroll(
                    e,
                    item.href
                  )
                }
                className="
                  group
                  relative
                  overflow-hidden

                  rounded-full

                  px-6
                  py-3

                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.32em]

                  text-[#f3e7da]/75

                  transition-all
                  duration-500

                  hover:text-[#ddb28a]
                "
              >
                {/* REAL LIQUID */}
                <span className="nav-liquid" />

                {/* Text */}
                <span className="relative z-10">
                  {item.name}
                </span>

                {/* Underline */}
                <span
                  className="
                    absolute
                    bottom-1
                    left-1/2

                    h-px
                    w-0

                    -translate-x-1/2

                    bg-[#c08b5c]

                    transition-all
                    duration-700

                    group-hover:w-[65%]
                  "
                />

                {/* Ambient Glow */}
                <span
                  className="
                    absolute
                    inset-0

                    rounded-full

                    bg-[#c08b5c]/0

                    transition-all
                    duration-700

                    group-hover:bg-[#c08b5c]/5
                  "
                />
              </button>
            ))}
          </div>

          {/* Visit Button */}
          <button
            onClick={(e) =>
              handleLiquidScroll(
                e,
                "#visit"
              )
            }
            className="
              group
              relative
              ml-6

              overflow-hidden

              rounded-sm

              border
              border-[#c08b5c]/30

              bg-[#c08b5c]

              px-8
              py-3

              text-[11px]
              font-bold
              uppercase
              tracking-[0.3em]

              text-[#120d0b]

              transition-all
              duration-500

              hover:-translate-y-[1px]

              hover:bg-[#ddb28a]

              hover:shadow-[0_0_40px_rgba(192,139,92,0.25)]
            "
          >
            {/* LIQUID */}
            <span className="nav-liquid" />

            {/* Text */}
            <span className="relative z-10">
              Visit
            </span>

            {/* Shine */}
            <span
              className="
                absolute
                inset-y-0
                left-[-120%]

                w-[120%]

                bg-gradient-to-r
                from-transparent
                via-white/30
                to-transparent

                transition-all
                duration-1000

                group-hover:left-[120%]
              "
            />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() =>
            setIsOpen(!isOpen)
          }
          aria-label="Toggle Menu"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-full

            border
            border-[#3b2a22]

            bg-[#1a1310]

            text-[#f3e7da]

            transition-all
            duration-300

            hover:border-[#c08b5c]/40
            hover:text-[#ddb28a]

            lg:hidden
          "
        >
          {isOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              border-t
              border-[#3b2a22]/40

              bg-[#120d0b]/98

              backdrop-blur-xl

              lg:hidden
            "
          >
            <div className="flex flex-col px-6 py-5">
              {navLinks.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setIsOpen(false);

                    setTimeout(() => {
                      scrollToSection(
                        item.href
                      );
                    }, 250);
                  }}
                  className="
                    border-b
                    border-[#2b1d17]

                    py-5

                    text-left
                    text-sm
                    uppercase
                    tracking-[0.25em]

                    text-[#f3e7da]/80

                    transition-all
                    duration-300

                    hover:pl-2
                    hover:text-[#ddb28a]
                  "
                >
                  {item.name}
                </button>
              ))}

              {/* Mobile Visit */}
              <button
                onClick={() => {
                  setIsOpen(false);

                  setTimeout(() => {
                    scrollToSection(
                      "#visit"
                    );
                  }, 250);
                }}
                className="
                  mt-6
                  rounded-sm

                  bg-[#c08b5c]

                  px-6
                  py-4

                  text-center
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]

                  text-[#120d0b]

                  transition-all
                  duration-300

                  hover:bg-[#ddb28a]
                "
              >
                Visit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}