"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "Coffee Mocktails",
  "Specials",
  "Specialty Coffee",
];

const menuData = {
  "Coffee Mocktails": [
    {
      name: "Vietnamese Cold Brew",
      desc: "Bold vietnamese drip layered with cold brew clarity.",
      price: "₹200",
    },
    {
      name: "Cranberry Espresso",
      desc: "Cranberry brightness balanced with espresso depth.",
      price: "₹200",
    },
    {
      name: "Orange Espresso",
      desc: "Citrus-forward espresso with sparkling finish.",
      price: "₹200",
    },
    {
      name: "Tonic Espresso",
      desc: "Espresso fusion with crisp tonic bitterness.",
      price: "₹200",
    },
    {
      name: "Ginger Ale Espresso",
      desc: "Warm spice layered into sparkling espresso.",
      price: "₹200",
    },
  ],

  Specials: [
    {
      name: "Cold Brew",
      desc: "24-hour steeped smooth specialty roast.",
      price: "₹160",
    },
    {
      name: "Hot Chocolate",
      desc: "Dark cocoa with silky steamed milk.",
      price: "₹180",
    },
    {
      name: "Bumble Bee",
      desc: "Honey espresso layered with citrus complexity.",
      price: "₹200",
    },
    {
      name: "Coconut Iced Coffee",
      desc: "Tropical coconut cream with chilled espresso.",
      price: "₹200",
    },
    {
      name: "Nutella Iced Latte",
      desc: "Chocolate hazelnut indulgence over espresso.",
      price: "₹200",
    },
  ],

  "Specialty Coffee": [
    {
      name: "V60 Pour Over",
      desc: "Clean floral acidity with elegant sweetness.",
      price: "₹200",
    },
    {
      name: "Aeropress",
      desc: "Rich pressure-brewed texture with clarity.",
      price: "₹200",
    },
    {
      name: "Vietnamese Drip Coffee",
      desc: "Deep caramel richness with bold finish.",
      price: "₹200",
    },
  ],
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState(
    "Coffee Mocktails"
  );

  return (
    <section className="relative overflow-hidden bg-[#0b0807] py-24 lg:py-32" id="themenu">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-[45rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5a3823]/10 blur-3xl" />

        {/* Warm Lighting */}
        <div className="absolute right-0 top-0 h-[30rem] w-[30rem] bg-[#c08b5c]/5 blur-3xl" />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c08b5c]">
            Handcrafted & Seasonal
          </p>

          <h2
            className="
              font-serif
              text-5xl
              text-[#f5ece3]

              sm:text-6xl
              lg:text-7xl
            "
          >
            The Menu
          </h2>
        </motion.div>

        {/* Split Layout */}
        <div
          className="
            mt-20
            grid
            grid-cols-1
            gap-16

            lg:grid-cols-[1fr_0.95fr]
            lg:items-start
            lg:gap-24
          "
        >
          {/* LEFT MENU */}
          <div>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3">
              {categories.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    rounded-full
                    border
                    px-5
                    py-3
                    text-[11px]
                    uppercase
                    tracking-[0.28em]

                    transition-all
                    duration-300

                    ${
                      activeTab === tab
                        ? "border-[#c08b5c]/40 bg-[#c08b5c]/10 text-[#f5ece3] shadow-[0_0_30px_rgba(192,139,92,0.12)]"
                        : "border-white/10 bg-white/[0.02] text-[#bfae9e]/70 hover:border-[#c08b5c]/30 hover:text-[#f5ece3]"
                    }
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Menu Items */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="mt-14 space-y-8"
              >
                {menuData[activeTab].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.04,
                    }}
                    className="
                      group
                      relative
                      border-b
                      border-white/10
                      pb-8
                    "
                  >
                    {/* Hover Glow */}
                    <div
                      className="
                        absolute
                        inset-0
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                        bg-[radial-gradient(circle_at_left,rgba(192,139,92,0.08),transparent_65%)]
                      "
                    />

                    <div className="relative flex items-start justify-between gap-6">
                      
                      {/* Left */}
                      <div>
                        <div className="flex items-center gap-4">
                          
                          {/* Number */}
                          <span
                            className="
                              text-xs
                              tracking-[0.25em]
                              text-[#c08b5c]/50
                            "
                          >
                            {(index + 1)
                              .toString()
                              .padStart(2, "0")}
                          </span>

                          {/* Title */}
                          <h3
                            className="
                              font-serif
                              text-2xl
                              text-[#f5ece3]

                              transition-all
                              duration-300

                              group-hover:translate-x-1
                            "
                          >
                            {item.name}
                          </h3>
                        </div>

                        {/* Description */}
                        <p
                          className="
                            mt-4
                            max-w-md
                            pl-9
                            text-sm
                            leading-relaxed
                            text-[#bfae9e]/75
                          "
                        >
                          {item.desc}
                        </p>

                        {/* Animated Underline */}
                        <div
                          className="
                            ml-9
                            mt-5
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

                      {/* Price */}
                      <span
                        className="
                          whitespace-nowrap
                          font-serif
                          text-xl
                          text-[#d7a36d]
                        "
                      >
                        {item.price}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT FEATURE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Frame */}
            <div
              className="
                absolute
                -left-5
                -top-5
                h-full
                w-full
                border
                border-[#3b2a22]/70
              "
            />

            {/* Main Image */}
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[2.5rem]
                border
                border-white/10
                bg-[#1a1411]
                shadow-[0_25px_80px_rgba(0,0,0,0.45)]
              "
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                
                <Image
                  src="/assets/two.png"
                  alt="Luxury Coffee"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="
                    object-cover
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Warm Glow */}
                <div className="absolute inset-0 bg-[#c08b5c]/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </div>

              {/* Floating Card */}
              <div
                className="
                  absolute
                  bottom-8
                  left-8
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/40
                  px-6
                  py-5
                  backdrop-blur-xl
                "
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#c08b5c]">
                  Signature Roast
                </p>

                <h3 className="mt-3 font-serif text-2xl text-[#f5ece3]">
                  We Reserve
                </h3>

                <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#bfae9e]/75">
                  Slow roasted specialty beans with caramel,
                  cocoa and floral finish.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Brewing Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            mt-24
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            bg-[#7a5437]
            px-8
            py-10
            text-center
          "
        >
          <h3
            className="
              font-serif
              text-4xl
              text-[#f5ece3]
            "
          >
            Specialty Coffee
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-[#eadccf]/80">
            Featuring curated single-origin brews crafted
            through V60, Aeropress and Vietnamese drip methods.
          </p>
        </motion.div>
      </div>
    </section>
  );
}