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

const imageAnimate1: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1 },
  },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

const imageAnimate2: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: 0.2 },
  },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: 1,
    },
  },
};

const imageAnimate3: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: 0.4 },
  },
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: 2,
    },
  },
};

export default function VisualStory() {
  return (
    <motion.section
      className="w-[min(1120px,calc(100%-3rem))] mx-auto py-[clamp(3.5rem,6vw,6rem)] max-md:w-[min(1120px,calc(100%-1.4rem))] pb-12"
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={sectionTransition}
    >
      <div className="max-w-[760px] mb-8">
        <p className="m-0 mb-3 tracking-[0.16em] uppercase text-[0.78rem] text-[#ffd27a]">
          Visual Story
        </p>
        <h2 className="m-0 text-[clamp(1.7rem,3vw,3rem)] leading-[1.2] text-balance">
          Space Ready For Your Website Messaging
        </h2>
      </div>

      <motion.div
        className="mt-[1.8rem] grid gap-4 grid-cols-[2fr_1fr_1fr] max-md:grid-cols-1"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="relative min-h-[380px] rounded-[24px] border border-white/10 overflow-hidden shadow-[0_15px_50px_rgba(255,163,44,0.15)] group"
          variants={imageAnimate1}
          animate="animate"
        >
          <img
            src="/images/crackers/carckers  (1).jpeg"
            alt="Hero Visual Area"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

        <motion.div
          className="relative min-h-[200px] md:min-h-[380px] rounded-[24px] border border-white/10 overflow-hidden shadow-[0_10px_30px_rgba(255,94,98,0.15)] group"
          variants={imageAnimate2}
          animate="animate"
        >
          <img
            src="/images/crackers/carckers  (2).jpeg"
            alt="Spark Detail"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </motion.div>

        <motion.div
          className="relative min-h-[200px] md:min-h-[380px] rounded-[24px] border border-white/10 overflow-hidden shadow-[0_10px_30px_rgba(255,163,44,0.15)] group"
          variants={imageAnimate3}
          animate="animate"
        >
          <img
            src="/images/crackers/crackers (5).jpeg"
            alt="Firework Burst"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
