"use client";

import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const sectionTransition = { duration: 0.8, ease: "easeOut" as const };

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, rotate: 2 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
  animate: {
    y: [0, 15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function NightCelebration() {
  return (
    <motion.section
      className="w-[min(1120px,calc(100%-3rem))] mx-auto py-[clamp(3.5rem,6vw,6rem)] max-md:w-[min(1120px,calc(100%-1.4rem))]"
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={sectionTransition}
    >
      <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="flex-1 w-full max-w-[760px]">
          <p className="m-0 mb-3 tracking-[0.16em] uppercase text-[0.78rem] text-[#ffd27a]">
            Fireworks Experience
          </p>

          <h2 className="m-0 text-[clamp(1.7rem,3vw,3rem)] leading-[1.2] text-balance">
            From Selection to Sky — The Perfect Fireworks Journey
          </h2>

          <motion.div
            className="mt-8 grid gap-[0.9rem]"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* STEP 1 */}
            <motion.div
              className="grid grid-cols-[60px_1fr] max-md:grid-cols-[44px_1fr] max-md:gap-3 gap-4 items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              variants={cardVariants}
            >
              <span className="grid place-items-center w-[56px] h-[56px] max-md:w-[44px] max-md:h-[44px] max-md:text-[0.9rem] rounded-full bg-gradient-to-br from-[#ffa32c] to-[#ff5e62] text-[#220700] font-bold shadow-[0_0_15px_rgba(255,163,44,0.4)]">
                01
              </span>
              <p className="m-0 text-[#fff4e3]/90">
                Browse and choose from a wide range of premium crackers,
                sparklers, and combo packs.
              </p>
            </motion.div>

            {/* STEP 2 */}
            <motion.div
              className="grid grid-cols-[60px_1fr] max-md:grid-cols-[44px_1fr] max-md:gap-3 gap-4 items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              variants={cardVariants}
            >
              <span className="grid place-items-center w-[56px] h-[56px] max-md:w-[44px] max-md:h-[44px] max-md:text-[0.9rem] rounded-full bg-gradient-to-br from-[#ffa32c] to-[#ff5e62] text-[#220700] font-bold shadow-[0_0_15px_rgba(255,163,44,0.4)]">
                02
              </span>
              <p className="m-0 text-[#fff4e3]/90">
                Light up safe and certified fireworks designed for all age
                groups and celebrations.
              </p>
            </motion.div>

            {/* STEP 3 */}
            <motion.div
              className="grid grid-cols-[60px_1fr] max-md:grid-cols-[44px_1fr] max-md:gap-3 gap-4 items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              variants={cardVariants}
            >
              <span className="grid place-items-center w-[56px] h-[56px] max-md:w-[44px] max-md:h-[44px] max-md:text-[0.9rem] rounded-full bg-gradient-to-br from-[#ffa32c] to-[#ff5e62] text-[#220700] font-bold shadow-[0_0_15px_rgba(255,163,44,0.4)]">
                03
              </span>
              <p className="m-0 text-[#fff4e3]/90">
                Enjoy stunning sky bursts and colorful displays that make every
                moment unforgettable.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex-1 w-full relative h-[450px] rounded-[24px] overflow-hidden border border-white/10 shadow-[0_15px_50px_rgba(255,94,98,0.15)]"
          variants={imageVariants}
          initial="hidden"
          whileInView="show"
          animate="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/images/crackers/crackers (7).jpeg"
            alt="Fireworks Experience"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020307] via-[#020307]/40 to-transparent opacity-70" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="h-1 w-12 bg-gradient-to-r from-[#ff5e62] to-[#ffa32c] rounded-full mb-3" />
            <h4 className="text-xl font-bold text-white mb-1">
              Light Up Every Moment
            </h4>
            <p className="text-sm text-gray-300">
              Premium fireworks crafted for unforgettable celebrations
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
