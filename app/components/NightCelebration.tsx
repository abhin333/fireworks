"use client";

import { motion, type Variants } from "framer-motion";

const reveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const sectionTransition = {
  duration: 0.8,
  ease: "easeOut" as const,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, rotate: -2 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: "easeOut" as const,
    },
  },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export default function FestivalHighlights() {
  return (
    <motion.section
      className="w-[min(1120px,calc(100%-3rem))] mx-auto py-[clamp(3.5rem,6vw,6rem)] max-md:w-[min(1120px,calc(100%-1.4rem))] border-y border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent"
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={sectionTransition}
    >
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="flex-1 w-full max-w-[760px]">
          <p className="m-0 mb-3 tracking-[0.16em] uppercase text-[0.78rem] text-[#ffd27a]">
            Fireworks Collection
          </p>

          <h2 className="m-0 text-[clamp(1.7rem,3vw,3rem)] leading-[1.2] text-balance">
            Premium Crackers for Every Celebration
          </h2>

          <motion.div
            className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.article
              variants={cardVariants}
              className="relative bg-[#14141e]/40 border border-white/10 rounded-[20px] py-[1.8rem] px-[1.5rem] backdrop-blur-md overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-1 hover:-translate-y-3 hover:scale-105 hover:border-[#ffa32c]/60 hover:shadow-[0_15px_45px_rgba(255,94,98,0.25),inset_0_0_20px_rgba(255,163,44,0.15)] group before:content-[''] before:absolute before:top-0 before:-left-[150%] before:w-1/2 before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent before:-skew-x-[25deg] before:transition-all before:duration-600 before:-z-10 hover:before:left-[200%]"
            >
              <h3 className="m-0 text-[1.3rem] bg-gradient-to-br from-[#ffd27a] to-[#ffa32c] bg-clip-text text-transparent font-bold">
                Wide Variety
              </h3>
              <p className="mt-[0.7rem] text-[#fff1db]/85 leading-[1.65]">
                Explore a huge collection of sparklers, fountains, rockets, and
                gift boxes designed for all age groups.
              </p>
            </motion.article>

            <motion.article variants={cardVariants} className="...same styles">
              <h3 className="m-0 text-[1.3rem] ...">Safe & Certified</h3>
              <p className="mt-[0.7rem] text-[#fff1db]/85 leading-[1.65]">
                All our fireworks are quality-tested and safety-certified,
                ensuring a secure and enjoyable celebration.
              </p>
            </motion.article>

            <motion.article
              variants={cardVariants}
              className="...same styles md:col-span-2"
            >
              <h3 className="m-0 text-[1.3rem] ...">Festival Combos</h3>
              <p className="mt-[0.7rem] text-[#fff1db]/85 leading-[1.65]">
                Special combo packs curated for festivals with exciting
                varieties at the best prices.
              </p>
            </motion.article>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex-1 w-full relative h-[450px] rounded-[24px] overflow-hidden border border-white/10 shadow-[0_15px_50px_rgba(255,163,44,0.15)]"
          variants={imageVariants}
          initial="hidden"
          whileInView="show"
          animate="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/images/crackers/carckers  (3).jpeg"
            alt="Fireworks Celebration"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
