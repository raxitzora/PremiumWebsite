"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Hitesh Khatri",
    role: "Coffee Explorer",
    initials: "HK",
    review:
      "Visited Rangoon Café in Jaipur recently and had a really good experience. The food was genuinely delicious — well-balanced flavors, nicely plated, and everything tasted fresh. From the mains to the coffee, it was satisfying without trying too hard.",
    className:
      "lg:translate-y-20 lg:rotate-[-1deg]",
  },

  {
    name: "Anna",
    role: "Travel Creator",
    initials: "AN",
    review:
      "I love this cafe :) they have so much good food, especially the bagels are a blessing! The coconut coffee is exactly like in Vietnam and trust me TRY THE CHEESECAKES omg they are insanely good!!! Been here for hours working and it’s also a beautiful coworking space.",
    className:
      "lg:-translate-y-8 lg:rotate-[1deg]",
  },

  {
    name: "Shivam Khandelwal",
    role: "Designer",
    initials: "SK",
    review:
      "Visited Rangoon Coffee Brewery and spent around 4 hours here while waiting for our train — and it turned out to be a great choice! The café has a simple yet aesthetically pleasing vibe, cozy seating, and a calm atmosphere that makes you want to linger.",
    className:
      "lg:translate-y-10 lg:rotate-[0.5deg]",
  },

  {
    name: "Jatin Jangid",
    role: "Coffee Enthusiast",
    initials: "JJ",
    review:
      "The café has a warm and cozy ambiance that makes it perfect for relaxing or working. The coffee is rich in flavor and always freshly brewed. Their desserts are simply delightful.",
    className:
      "lg:-translate-y-12 lg:rotate-[-1deg]",
  },
];

export default function Rating() {
  return (
    <section className="relative overflow-hidden bg-[#090706] py-28 lg:py-36">
      
      {/* Cinematic Background */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute left-1/2 top-1/2 h-[55rem] w-[55rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5a3823]/10 blur-3xl" />

        {/* Warm Lights */}
        <div className="absolute left-0 top-0 h-[28rem] w-[28rem] bg-[#c08b5c]/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] bg-[#8b5a36]/5 blur-3xl" />

        {/* Cinematic Grain */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

        {/* Floating Particles */}
        <div className="absolute left-[15%] top-[20%] h-2 w-2 rounded-full bg-[#c08b5c]/20 blur-sm animate-pulse" />

        <div className="absolute right-[20%] top-[35%] h-3 w-3 rounded-full bg-[#c08b5c]/10 blur-sm animate-pulse delay-300" />

        <div className="absolute bottom-[20%] left-[40%] h-2 w-2 rounded-full bg-[#c08b5c]/20 blur-sm animate-pulse delay-700" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        
        {/* Top Layout */}
        <div
          className="
            flex
            flex-col
            gap-12

            lg:flex-row
            lg:items-start
            lg:justify-between
          "
        >
          {/* LEFT TRUST BLOCK */}
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
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c08b5c]">
              Guest Impressions
            </p>

            {/* Stars */}
            <div className="mb-6 flex items-center gap-2">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  fill="#d7a36d"
                  className="text-[#d7a36d]"
                />
              ))}
            </div>

            {/* Heading */}
            <h2
              className="
                font-serif
                text-5xl
                leading-none
                text-[#f5ece3]

                sm:text-6xl
              "
            >
              4.7 Rating
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                text-lg
                leading-relaxed
                text-[#bfae9e]/75
              "
            >
              Loved by coffee lovers in Jaipur.
            </p>

            <p
              className="
                mt-3
                text-sm
                uppercase
                tracking-[0.28em]
                text-[#c08b5c]/70
              "
            >
              1,200+ Guest Experiences
            </p>

            {/* Editorial Heading */}
            <h3
              className="
                mt-14
                max-w-md
                font-serif
                text-4xl
                leading-tight
                text-[#f5ece3]

                lg:text-5xl
              "
            >
              More than coffee.
              <br />
              A feeling people remember.
            </h3>
          </motion.div>

          {/* Floating Quote */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <p
              className="
                font-serif
                text-5xl
                italic
                text-[#f5ece3]/15
              "
            >
              “The art of being still.”
            </p>
          </motion.div>
        </div>

        {/* Floating Review Layout */}
        <div
          className="
            relative
            mt-24
            grid
            grid-cols-1
            gap-8

            lg:grid-cols-12
            lg:gap-10
          "
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{
                opacity: 0,
                y: 40,
                filter: "blur(12px)",
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
                bg-white/[0.03]
                backdrop-blur-xl

                shadow-[0_25px_80px_rgba(0,0,0,0.35)]

                transition-all
                duration-700

                hover:-translate-y-3
                hover:scale-[1.015]
                hover:border-[#c08b5c]/30
                hover:shadow-[0_30px_120px_rgba(192,139,92,0.12)]

                lg:col-span-3

                ${review.className}
              `}
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-700

                  group-hover:opacity-100

                  bg-[radial-gradient(circle_at_top_left,rgba(192,139,92,0.12),transparent_60%)]
                "
              />

              {/* Content */}
              <div className="relative p-8">
                
                {/* Quote */}
                <div className="absolute right-6 top-5">
                  <span
                    className="
                      font-serif
                      text-7xl
                      leading-none
                      text-[#c08b5c]/20
                    "
                  >
                    ”
                  </span>
                </div>

                {/* Review */}
                <p
                  className="
                    relative
                    z-10
                    font-serif
                    text-lg
                    leading-relaxed
                    text-[#f5ece3]/90
                  "
                >
                  “{review.review}”
                </p>

                {/* Bottom */}
                <div className="mt-10 flex items-center gap-4">
                  
                  {/* Avatar */}
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.04]

                      text-sm
                      font-medium
                      text-[#f5ece3]

                      transition-all
                      duration-500

                      group-hover:border-[#c08b5c]/30
                      group-hover:bg-[#c08b5c]/10
                    "
                  >
                    {review.initials}
                  </div>

                  {/* Meta */}
                  <div>
                    <h4 className="text-lg text-[#f5ece3]">
                      {review.name}
                    </h4>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        uppercase
                        tracking-[0.25em]
                        text-[#c08b5c]/70
                      "
                    >
                      {review.role}
                    </p>
                  </div>
                </div>

                {/* Underline */}
                <div
                  className="
                    mt-8
                    h-px
                    w-0
                    bg-[#c08b5c]

                    transition-all
                    duration-700

                    group-hover:w-24
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}