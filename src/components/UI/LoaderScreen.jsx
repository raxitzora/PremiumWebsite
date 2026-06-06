"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

export default function LoaderScreen() {
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            fixed
            inset-0
            z-[999999]

            overflow-hidden

            bg-[#090706]
          "
        >
          {/* ------------------------------------------------ */}
          {/* CINEMATIC BACKGROUND */}
          {/* ------------------------------------------------ */}

          <motion.div
            animate={{
              scale: [1, 1.03, 1],
              opacity: [0.92, 1, 0.92],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              inset-0

              bg-[radial-gradient(circle_at_center,#241712_0%,#120d0b_45%,#090706_100%)]
            "
          />

          {/* Grain */}
          <div
            className="
              absolute
              inset-0

              opacity-[0.03]

              mix-blend-soft-light

              bg-[url('/assets/noise.png')]
            "
          />

          {/* Ambient Glow */}
          <motion.div
            animate={{
              opacity: [0.18, 0.35, 0.18],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-1/2

              h-[750px]
              w-[750px]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              bg-[#c08b5c]/10

              blur-3xl
            "
          />

          {/* ------------------------------------------------ */}
          {/* PARTICLES */}
          {/* ------------------------------------------------ */}

          <div className="absolute inset-0">
            {[...Array(22)].map((_, i) => (
              <motion.span
                key={i}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 0.28, 0],
                }}
                transition={{
                  duration:
                    4 + Math.random() * 3,

                  repeat: Infinity,

                  delay: i * 0.18,
                }}
                className="
                  absolute

                  h-[2px]
                  w-[2px]

                  rounded-full

                  bg-[#c08b5c]/35

                  blur-[1px]
                "
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* ------------------------------------------------ */}
          {/* MAIN CONTENT */}
          {/* ------------------------------------------------ */}

          <div
            className="
              relative
              z-20

              flex
              h-full
              flex-col
              items-center
              justify-center

              px-6
            "
          >
            {/* ------------------------------------------------ */}
            {/* COFFEE POUR */}
            {/* ------------------------------------------------ */}

            <div className="relative">
              {/* Steam */}
              <div
                className="
                  absolute
                  -top-20
                  left-1/2

                  flex

                  -translate-x-1/2

                  gap-3
                "
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -26, -52],
                      x: [0, 5, -4],
                      opacity: [0, 0.22, 0],
                      scale: [0.8, 1.1, 1.5],
                    }}
                    transition={{
                      duration:
                        3 + Math.random(),

                      repeat: Infinity,

                      delay: i * 0.35,

                      ease: "easeOut",
                    }}
                    className="
                      h-16
                      w-5

                      rounded-full

                      bg-white/10

                      blur-xl
                    "
                  />
                ))}
              </div>

              {/* Coffee Stream */}
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: 120,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  left-1/2
                  top-[-120px]

                  w-[10px]

                  -translate-x-1/2

                  rounded-full

                  bg-gradient-to-b
                  from-[#e0ba93]
                  via-[#8b5a36]
                  to-[#2a1710]

                  shadow-[0_0_18px_rgba(192,139,92,0.28)]
                "
              >
                {/* Liquid Shine */}
                <motion.div
                  animate={{
                    y: ["-100%", "220%"],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    left-0
                    top-0

                    h-16
                    w-full

                    bg-gradient-to-b
                    from-white/40
                    to-transparent

                    blur-sm
                  "
                />
              </motion.div>

              {/* Cup */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.25,
                }}
                className="
                  relative

                  h-32
                  w-44

                  overflow-hidden

                  rounded-b-[3rem]

                  border
                  border-[#c08b5c]/20

                  bg-[#120d0b]/75

                  backdrop-blur-xl

                  shadow-[0_0_70px_rgba(192,139,92,0.10)]
                "
              >
                {/* Coffee Fill */}
                <motion.div
                  initial={{
                    height: 0,
                  }}
                  animate={{
                    height: "100%",
                  }}
                  transition={{
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-full

                    bg-gradient-to-t
                    from-[#2a1710]
                    via-[#6f4326]
                    to-[#d6a77a]
                  "
                />

                {/* Reflection */}
                <div
                  className="
                    absolute
                    inset-y-0
                    left-5

                    w-[1px]

                    bg-white/10
                  "
                />
              </motion.div>

              {/* Cup Handle */}
              <div
                className="
                  absolute
                  right-[-22px]
                  top-9

                  h-14
                  w-9

                  rounded-r-full

                  border
                  border-l-0
                  border-[#c08b5c]/20
                "
              />
            </div>

            {/* ------------------------------------------------ */}
            {/* BRAND */}
            {/* ------------------------------------------------ */}

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
                filter: "blur(12px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-16
                text-center
              "
            >
              <p
                className="
                  mb-5

                  text-[11px]
                  uppercase
                  tracking-[0.45em]

                  text-[#c08b5c]
                "
              >
                Welcome To
              </p>

              <h1
                className="
                  font-serif

                  text-5xl
                  leading-none

                  text-[#f5ece3]

                  sm:text-6xl
                  md:text-7xl
                "
              >
                Coffee
              </h1>

              <h2
                className="
                  mt-4

                  text-[11px]
                  uppercase
                  tracking-[0.55em]

                  text-[#e0ba93]/75
                "
              >
                Coffee Brewery
              </h2>
            </motion.div>

            {/* ------------------------------------------------ */}
            {/* SIGNATURE TEXT */}
            {/* ------------------------------------------------ */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1,
                delay: 1.3,
              }}
              className="
                mt-14

                max-w-3xl

                text-center
              "
            >
              <h3
                className="
                  font-serif

                  text-2xl
                  leading-relaxed

                  text-[#f3e7da]

                  sm:text-3xl
                  md:text-4xl
                "
              >
                Specialty coffee is not
                just a drink.
              </h3>

              <p
                className="
                  mt-4

                  text-lg
                  italic

                  tracking-[0.08em]

                  text-[#c08b5c]

                  sm:text-xl
                "
              >
                It’s an experience.
              </p>
            </motion.div>
          </div>

          {/* ------------------------------------------------ */}
          {/* ATMOSPHERIC DISSOLVE */}
          {/* ------------------------------------------------ */}

          <motion.div
            initial={{
              opacity: 1,
              backdropFilter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(20px)",
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              inset-0

              bg-gradient-to-b
              from-[#120d0b]/40
              via-transparent
              to-black/60
            "
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}