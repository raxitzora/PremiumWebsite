"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Camera,
  Play,
} from "lucide-react";

export default function Visit() {
  return (
    <section className="relative overflow-hidden bg-[#090706]" id="visit">
      
      {/* Cinematic Background */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute left-1/2 top-1/2 h-[55rem] w-[55rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5a3823]/10 blur-3xl" />

        {/* Warm Lighting */}
        <div className="absolute left-0 top-0 h-[30rem] w-[30rem] bg-[#c08b5c]/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] bg-[#8b5a36]/5 blur-3xl" />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.55))]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        
        {/* MAIN VISIT SECTION */}
        <div
          className="
            grid
            grid-cols-1
            gap-20
            py-28

            lg:grid-cols-[0.85fr_1.15fr]
            lg:items-center
            lg:gap-28
            lg:py-36
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            {/* Label */}
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c08b5c]">
              Jaipur • Rajasthan
            </p>

            {/* Heading */}
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
              Visit the Brewery
            </h2>

            {/* Description */}
            <p
              className="
                mt-8
                max-w-md
                text-base
                leading-relaxed
                text-[#bfae9e]/75
              "
            >
              A handcrafted sanctuary where specialty coffee,
              slow conversations, and intentional living
              meet in the heart of Jaipur.
            </p>

            {/* Info Blocks */}
            <div className="mt-14 space-y-12">
              
              {/* Location */}
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#c08b5c]">
                  Location
                </p>

                <p className="text-lg leading-relaxed text-[#f5ece3]/90">
                  12B, Civil Lines,
                  <br />
                  Jaipur, Rajasthan
                </p>
              </div>

              {/* Hours */}
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#c08b5c]">
                  Hours
                </p>

                <div className="space-y-2 text-lg text-[#f5ece3]/90">
                  <p>Mon – Fri: 09:00am – 11:00pm</p>
                  <p>Tuesday , Wednesday – Sun: 09:00am – 11:00pm (Hours might differ)</p>
                </div>
              </div>

              {/* Inquiries */}
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#c08b5c]">
                  Inquiries
                </p>

                <div className="space-y-2 text-lg text-[#f5ece3]/90">
                  <p>hello@rangoonbrewery.in</p>
                  <p>+91 09529777778</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="https://maps.google.com"
              target="_blank"
              className="
                group
                mt-14
                inline-flex
                items-center
                gap-4
                overflow-hidden
                rounded-full
                border
                border-[#c08b5c]/20
                bg-[#c08b5c]
                px-8
                py-5

                text-xs
                uppercase
                tracking-[0.28em]
                text-[#120d0b]

                transition-all
                duration-500

                hover:-translate-y-1
                hover:shadow-[0_20px_60px_rgba(192,139,92,0.35)]
              "
            >
              <span>Get Directions</span>

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>
          </motion.div>

          {/* RIGHT MAP PANEL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Frame */}
            <div
              className="
                absolute
                -left-6
                -top-6
                h-full
                w-full
                border
                border-[#3b2a22]/70
              "
            />

            {/* Map Container */}
            <div
              className="
                group
                relative
                aspect-[1.1/1]
                overflow-hidden
                rounded-[2.5rem]
                border
                border-white/10
                bg-[#0f0b09]

                shadow-[0_30px_120px_rgba(0,0,0,0.45)]
              "
            >
              {/* Fake Luxury Map */}
              <div className="absolute inset-0">
                
                {/* Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

                {/* Roads */}
                <div className="absolute left-[10%] top-[20%] h-px w-[60%] rotate-[20deg] bg-white/10" />

                <div className="absolute left-[25%] top-[50%] h-px w-[50%] rotate-[-12deg] bg-white/10" />

                <div className="absolute right-[15%] top-[25%] h-[55%] w-px bg-white/10" />

                <div className="absolute left-[50%] top-[10%] h-[70%] w-px rotate-[8deg] bg-white/10" />

                {/* Location Glow */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-6
                    w-6
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#c08b5c]

                    shadow-[0_0_40px_rgba(192,139,92,0.7)]

                    transition-all
                    duration-700

                    group-hover:scale-110
                    group-hover:shadow-[0_0_60px_rgba(192,139,92,0.9)]
                  "
                />

                {/* Pulse */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-16
                    w-16
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    border
                    border-[#c08b5c]/20
                    animate-ping
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.75))]" />
              </div>

              {/* Floating Label */}
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
                  Rangoon Coffee Brewery
                </p>

                <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#bfae9e]/75">
                 Govt Hostel Chauraha, 5 , Ajmer Rd, near Kalyan Jwellers, Gopalbari, Jaipur, Rajasthan 302001
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FOOTER */}
        <footer
          className="
            border-t
            border-white/10
            py-20
          "
        >
          <div
            className="
              flex
              flex-col
              gap-16

              lg:flex-row
              lg:items-start
              lg:justify-between
            "
          >
            {/* Left */}
            <div>
              <h3
                className="
                  font-serif
                  text-6xl
                  italic
                  text-[#f5ece3]
                "
              >
                Rangoon
              </h3>

              <p
                className="
                  mt-8
                  max-w-sm
                  text-sm
                  uppercase
                  leading-relaxed
                  tracking-[0.18em]
                  text-[#bfae9e]/70
                "
              >
                © 2026 Rangoon Coffee Brewery.
                <br />
                Defining the art of stillness.
              </p>
            </div>

            {/* Right Links */}
            <div
              className="
                grid
                grid-cols-2
                gap-16
              "
            >
              {/* Connect */}
              <div>
                <p className="mb-6 text-xs uppercase tracking-[0.28em] text-[#c08b5c]">
                  Connect
                </p>

                <div className="space-y-5">
                  
                  <Link
                    href="#"
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      text-[#f5ece3]/80
                      transition-colors
                      duration-300
                      hover:text-[#f5ece3]
                    "
                  >
<Camera size={16} />                 
   <span>Instagram</span>
                  </Link>

                  <Link
                    href="#"
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      text-[#f5ece3]/80
                      transition-colors
                      duration-300
                      hover:text-[#f5ece3]
                    "
                  >
<Play size={16} />                    <span>YouTube</span>
                  </Link>

                  <Link
                    href="#"
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      text-[#f5ece3]/80
                      transition-colors
                      duration-300
                      hover:text-[#f5ece3]
                    "
                  >
                    <Mail size={16} />
                    <span>Newsletter</span>
                  </Link>
                </div>
              </div>

              {/* Explore */}
              <div>
                <p className="mb-6 text-xs uppercase tracking-[0.28em] text-[#c08b5c]">
                  Explore
                </p>

                <div className="space-y-5">
                  
                  {[
                    "Journal",
                    "Wholesale",
                    "Private Bookings",
                    "Accessibility",
                  ].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="
                        block
                        text-[#f5ece3]/80
                        transition-all
                        duration-300

                        hover:translate-x-1
                        hover:text-[#f5ece3]
                      "
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}