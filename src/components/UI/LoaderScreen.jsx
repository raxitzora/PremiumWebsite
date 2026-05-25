"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoaderScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -80,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            fixed
            inset-0
            z-[99999]
            flex
            items-center
            justify-center
            overflow-hidden
            bg-[#090706]
          "
        >
          {/* Background Glow */}
          <div
            className="
              absolute
              h-[500px]
              w-[500px]
              rounded-full
              bg-[#c08b5c]/10
              blur-3xl
            "
          />

          {/* Noise */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('/assets/noise.png')]" />

          {/* Content */}
          <div className="relative flex flex-col items-center">
            {/* Cup */}
            <div className="relative">
              {/* Steam */}
              <div className="absolute -top-16 left-1/2 flex -translate-x-1/2 gap-3">
                {[...Array(3)].map((_, i) => (
                  <motion.span
                    key={i}
                    animate={{
                      y: [-4, -18, -4],
                      opacity: [0.15, 0.4, 0.15],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    className="
                      h-12
                      w-3
                      rounded-full
                      bg-white/20
                      blur-md
                    "
                  />
                ))}
              </div>

              {/* Pouring Coffee */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 90 }}
                transition={{
                  duration: 1.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  left-1/2
                  top-[-90px]
                  w-[6px]
                  -translate-x-1/2

                  rounded-full

                  bg-gradient-to-b
                  from-[#d6a77a]
                  via-[#8b5a36]
                  to-[#4a2b1a]
                "
              />

              {/* Cup */}
              <div
                className="
                  relative
                  h-28
                  w-36
                  overflow-hidden

                  rounded-b-[3rem]
                  border
                  border-[#c08b5c]/30

                  bg-[#120d0b]/80
                  backdrop-blur-xl

                  shadow-[0_0_60px_rgba(192,139,92,0.12)]
                "
              >
                {/* Liquid Fill */}
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  transition={{
                    duration: 2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-full

                    bg-gradient-to-t
                    from-[#4a2b1a]
                    via-[#8b5a36]
                    to-[#c08b5c]
                  "
                />

                {/* Shine */}
                <div
                  className="
                    absolute
                    inset-y-0
                    left-4
                    w-[1px]
                    bg-white/10
                  "
                />
              </div>

              {/* Cup Handle */}
              <div
                className="
                  absolute
                  right-[-18px]
                  top-8

                  h-12
                  w-8

                  rounded-r-full
                  border
                  border-l-0
                  border-[#c08b5c]/25
                "
              />
            </div>

            {/* Brand */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 1,
              }}
              className="mt-12 text-center"
            >
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.45em]
                  text-[#c08b5c]
                "
              >
                Rangoon Coffee Brewery
              </p>

              <h2
                className="
                  mt-4
                  font-serif
                  text-3xl
                  text-[#f5ece3]

                  md:text-4xl
                "
              >
                Crafted Slowly.
              </h2>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}