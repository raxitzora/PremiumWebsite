"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-[#0f0b09] py-24 md:py-32" id="thestory">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3b2416]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-10 lg:grid-cols-2 lg:gap-24 lg:px-16">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="group relative"
        >
          {/* Border Frame */}
          <div className="absolute -left-6 -top-6 h-full w-full border border-[#3b2a22]/70" />

          {/* Image Wrapper */}
          <div className="relative overflow-hidden bg-[#1a1411]">
            <div className="relative aspect-[4/5] w-full">
             <Image
  src="/assets/story.png"
  alt="Coffee Brewing"
  fill
  priority
  sizes="(max-width: 1024px) 100vw, 50vw"
  className="
    object-contain
    transition-transform
    duration-700
    ease-out
    group-hover:scale-105
  "
/>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          {/* Label */}
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c79a63]">
            Our Story
          </p>

          {/* Heading */}
          <h2
            className="
              max-w-xl
              font-serif
              text-4xl
              leading-tight
              text-[#f5ece3]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Crafting Stillness in the Heart of Jaipur.
          </h2>

          {/* Paragraphs */}
          <div className="mt-8 space-y-8">
            <p
              className="
                text-base
                leading-relaxed
                text-[#d4c3b5]/85
                md:text-lg
              "
            >
              At our Coffee Brewery, we believe coffee is the punctuation mark
              of the day. Our brewery is a sanctuary where the
              ancient craft of slow-brewing meets the vibrant soul
              of modern Jaipur.
            </p>

            <p
              className="
                text-base
                leading-relaxed
                text-[#bfae9e]/75
                md:text-lg
              "
            >
              We source single-origin beans with a relentless focus
              on transparency and terroir. Every cup is a curated
              narrative of the land it came from, roasted to
              perfection and served in an environment designed for
              intentional living.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="#process"
            className="
              group
              mt-10
              inline-flex
              items-center
              gap-4
              text-sm
              uppercase
              tracking-[0.25em]
              text-[#d7a36d]
              transition-colors
              duration-300
              hover:text-[#f0c18f]
            "
          >
            <span>Discover Our Process</span>

            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#3b2a22]
                bg-[#1a1411]
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:border-[#c79a63]/40
                group-hover:bg-[#241914]
              "
            >
              <ArrowRight size={16} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}