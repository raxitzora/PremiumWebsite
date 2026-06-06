"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "/assets/gallery-1.png",
    title: "Crafted Slowly",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/assets/gallery-2.jpg",
    title: "Warm Conversations",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/assets/two.png",
    title: "The Art of Brewing",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    src: "/assets/four.png",
    title: "Moments Over Coffee",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    src: "/assets/three.png",
    title: "Where Stories Begin",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/assets/gallery-5.jpg",
    title: "Brewed with Intention",
    className: "md:col-span-2 md:row-span-2",
  },
];

export default function CaptureMoments() {
  return (
    <section className="relative overflow-hidden bg-[#090706] py-28 lg:py-36" id="moments">
      
      {/* Cinematic Background */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Warm Ambient Glow */}
        <div className="absolute left-1/2 top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5a3823]/10 blur-3xl" />

        {/* Side Lighting */}
        <div className="absolute left-0 top-0 h-[30rem] w-[30rem] bg-[#c08b5c]/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[25rem] w-[25rem] bg-[#a36f45]/5 blur-3xl" />

        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c08b5c]">
            Our Atmosphere
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
            Capture the Moment
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-relaxed
              text-[#bfae9e]/75

              md:text-lg
            "
          >
            Every corner tells a story. Every frame
            holds an experience.
          </p>
        </motion.div>

        {/* Editorial Masonry Grid */}
        <div
          className="
            mt-24
            grid
            grid-cols-1
            gap-6

            md:grid-cols-4
            md:auto-rows-[260px]
          "
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{
                opacity: 0,
                y: 40,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className={`
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10

                shadow-[0_20px_80px_rgba(0,0,0,0.35)]

                ${image.className}
              `}
            >
              {/* Image */}
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="
                    object-cover
                    transition-transform
                    duration-[2000ms]
                    ease-out

                    group-hover:scale-110
                  "
                />

                {/* Cinematic Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/10
                    to-transparent
                  "
                />

                {/* Warm Hover Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-700

                    group-hover:opacity-100

                    bg-[radial-gradient(circle_at_center,rgba(192,139,92,0.15),transparent_70%)]
                  "
                />

                {/* Cinematic Vignette */}
                <div className="absolute inset-0 shadow-[inset_0_-120px_120px_rgba(0,0,0,0.55)]" />

                {/* Floating Caption */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    translate-y-8
                    px-7
                    pb-7
                    opacity-0

                    transition-all
                    duration-700

                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <p
                    className="
                      font-serif
                      text-2xl
                      text-[#f5ece3]

                      drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]
                    "
                  >
                    {image.title}
                  </p>

                  <div
                    className="
                      mt-4
                      h-px
                      w-0
                      bg-[#c08b5c]

                      transition-all
                      duration-700

                      group-hover:w-24
                    "
                  />
                </div>

                {/* Subtle Border Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-[2rem]
                    border
                    border-transparent

                    transition-all
                    duration-700

                    group-hover:border-[#c08b5c]/30
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Editorial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mt-28 max-w-4xl text-center"
        >
          <p
            className="
              font-serif
              text-3xl
              leading-relaxed
              text-[#f5ece3]

              sm:text-4xl
              lg:text-5xl
            "
          >
            “More than coffee — a collection of slow,
            warm moments crafted inside our Coffee Brewery.”
          </p>

          <div className="mx-auto mt-8 h-px w-24 bg-[#c08b5c]/50" />
        </motion.div>
      </div>
    </section>
  );
}