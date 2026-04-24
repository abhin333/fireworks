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

const crackers = [
  {
    id: 1,
    src: "/images/crackers/carckers  (1).jpeg",
    name: "Premium Sparklers",
  },
  {
    id: 2,
    src: "/images/crackers/carckers  (2).jpeg",
    name: "Color Fountains",
  },
  { id: 3, src: "/images/crackers/carckers  (3).jpeg", name: "Sky Shots" },
  { id: 4, src: "/images/crackers/carckers  (4).jpeg", name: "Night Rockets" },
];

export default function CrackersSection() {
  return (
    <motion.section
      className="w-[min(1120px,calc(100%-3rem))] mx-auto py-[clamp(3.5rem,6vw,6rem)] max-md:w-[min(1120px,calc(100%-1.4rem))] border-t border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent relative z-10"
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={sectionTransition}
    >
      <div className="max-w-[760px] mb-12">
        <p className="m-0 mb-3 tracking-[0.16em] uppercase text-[0.78rem] text-[#ffd27a]">
          Our Premium Collection
        </p>
        <h2 className="m-0 text-[clamp(1.7rem,3vw,3rem)] leading-[1.2] text-balance font-extrabold text-white">
          Explosive Joy in Every Box
        </h2>
      </div>

      <motion.div
        className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {crackers.map((cracker) => (
          <motion.article
            key={cracker.id}
            variants={cardVariants}
            className="relative group rounded-2xl overflow-hidden bg-[#14141e]/40 border border-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-2 hover:shadow-[0_15px_45px_rgba(255,163,44,0.25)] transition-all duration-500 cursor-pointer"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <img
                src={cracker.src}
                alt={cracker.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            </div>

            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ffd27a] transition-colors duration-300">
                {cracker.name}
              </h3>
              <div className="h-1 w-12 bg-gradient-to-r from-[#ffd27a] to-[#ffa32c] rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
