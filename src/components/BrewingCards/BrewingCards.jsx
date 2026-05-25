"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Coffee,
  FlaskConical,
  Droplets,
  GlassWater,
  CupSoda,
} from "lucide-react";

const brewingMethods = [
  {
    title: "V60 Pour Over",
    description:
      "Clean clarity with layered floral acidity and elegant sweetness.",
    icon: Coffee,
    className: "lg:col-span-3 lg:row-span-2",
  },
  {
    title: "Aeropress",
    description:
      "A rich and expressive brew crafted through pressure and precision.",
    icon: FlaskConical,
    className: "lg:col-span-3",
  },
  {
    title: "Vietnamese Drip",
    description:
      "Deep caramel richness balanced with bold intensity and warmth.",
    icon: Droplets,
    className: "lg:col-span-3",
  },
  {
    title: "24-Hr Cold Brew",
    description:
      "Slow extracted velvet texture with smooth cocoa undertones.",
    icon: GlassWater,
    className: "lg:col-span-3",
  },
  {
    title: "Espresso Fusion",
    description:
      "Concentrated luxury with layered crema and roasted complexity.",
    icon: CupSoda,
    className: "lg:col-span-3",
  },
];

export default function BrewingCards() {
  return (
    <section className="relative overflow-hidden bg-[#0b0807] py-28 lg:py-36" id="process">
      
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Large Glow */}
        <div className="absolute left-1/2 top-1/2 h-[45rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5a3823]/10 blur-3xl" />

        {/* Warm Lighting */}
        <div className="absolute left-0 top-0 h-[30rem] w-[30rem] bg-[#c08b5c]/5 blur-3xl" />

        {/* Floating Particles */}
        <div className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-[#c08b5c]/20 blur-sm animate-pulse" />

        <div className="absolute right-[15%] top-[30%] h-3 w-3 rounded-full bg-[#c08b5c]/10 blur-sm animate-pulse delay-300" />

        <div className="absolute bottom-[20%] left-[40%] h-2 w-2 rounded-full bg-[#c08b5c]/20 blur-sm animate-pulse delay-700" />

        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c08b5c]">
            Brewing Craft
          </p>

          <h2
            className="
              font-serif
              text-5xl
              leading-none
              text-[#f5ece3]

              sm:text-6xl
              lg:text-7xl
            "
          >
            Precision Brewing
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-relaxed
              text-[#bfae9e]/80

              md:text-lg
            "
          >
            Selecting the right method to unlock the hidden
            notes of every bean.
          </p>
        </motion.div>

        {/* Editorial Grid */}
        <div
          className="
            mt-24
            grid
            grid-cols-1
            gap-6

            lg:grid-cols-12
            lg:auto-rows-[260px]
          "
        >
          {/* LEFT CARDS */}
          {brewingMethods.slice(0, 2).map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl

                  transition-all
                  duration-500

                  hover:-translate-y-3
                  hover:scale-[1.015]
                  hover:border-[#c08b5c]/30
                  hover:shadow-[0_25px_80px_rgba(192,139,92,0.12)]

                  ${item.className}
                `}
              >
                {/* Hover Gradient */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    transition-all
                    duration-700
                    group-hover:opacity-100
                    bg-[radial-gradient(circle_at_top_left,rgba(192,139,92,0.18),transparent_55%)]
                  "
                />

                <div className="relative flex h-full flex-col justify-between p-8">
                  
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]

                      transition-all
                      duration-500

                      group-hover:-translate-y-1
                      group-hover:rotate-3
                      group-hover:border-[#c08b5c]/40
                      group-hover:bg-[#c08b5c]/10
                    "
                  >
                    <Icon
                      size={24}
                      className="text-[#d7a36d]"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      className="
                        font-serif
                        text-3xl
                        text-[#f5ece3]
                        transition-all
                        duration-500
                        group-hover:translate-x-1
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-sm
                        text-sm
                        leading-relaxed
                        text-[#bfae9e]/75
                      "
                    >
                      {item.description}
                    </p>

                    {/* Underline */}
                    <div
                      className="
                        mt-6
                        h-px
                        w-0
                        origin-left
                        bg-[#c08b5c]
                        transition-all
                        duration-500
                        group-hover:w-24
                      "
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* CENTER IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              group
              relative
              overflow-hidden
              rounded-[2.5rem]
              border
              border-white/10

              lg:col-span-6
              lg:row-span-2
            "
          >
            <div className="relative h-full min-h-[500px] overflow-hidden">
              
              <Image
                src="/assets/brewing-main.jpg"
                alt="Luxury Coffee Brewing"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="
                  object-cover
                  transition-transform
                  duration-1000
                  ease-out
                  group-hover:scale-110
                  group-hover:rotate-[0.5deg]
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Glow */}
              <div className="absolute inset-0 bg-[#c08b5c]/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </div>

            {/* Floating Label */}
            <div
              className="
                absolute
                bottom-8
                left-8
                rounded-full
                border
                border-white/10
                bg-black/30
                px-5
                py-3
                backdrop-blur-xl

                transition-all
                duration-500

                group-hover:border-[#c08b5c]/30
                group-hover:bg-black/40
              "
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#f5ece3]">
                Handcrafted Process
              </p>
            </div>
          </motion.div>

          {/* RIGHT/BOTTOM CARDS */}
          {brewingMethods.slice(2).map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl

                  transition-all
                  duration-500

                  hover:-translate-y-3
                  hover:scale-[1.015]
                  hover:border-[#c08b5c]/30
                  hover:shadow-[0_25px_80px_rgba(192,139,92,0.12)]

                  ${item.className}
                `}
              >
                {/* Hover Gradient */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    transition-all
                    duration-700
                    group-hover:opacity-100
                    bg-[radial-gradient(circle_at_top_left,rgba(192,139,92,0.18),transparent_55%)]
                  "
                />

                <div className="relative flex h-full flex-col justify-between p-8">
                  
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]

                      transition-all
                      duration-500

                      group-hover:-translate-y-1
                      group-hover:rotate-3
                      group-hover:border-[#c08b5c]/40
                      group-hover:bg-[#c08b5c]/10
                    "
                  >
                    <Icon
                      size={24}
                      className="text-[#d7a36d]"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      className="
                        font-serif
                        text-3xl
                        text-[#f5ece3]
                        transition-all
                        duration-500
                        group-hover:translate-x-1
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-sm
                        text-sm
                        leading-relaxed
                        text-[#bfae9e]/75
                      "
                    >
                      {item.description}
                    </p>

                    {/* Underline */}
                    <div
                      className="
                        mt-6
                        h-px
                        w-0
                        origin-left
                        bg-[#c08b5c]
                        transition-all
                        duration-500
                        group-hover:w-24
                      "
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}