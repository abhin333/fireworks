"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import frames from "./frames.json";
import CrackersSection from "./components/CrackersSection";
import FestivalHighlights from "./components/FestivalHighlights";
import NightCelebration from "./components/NightCelebration";
import VisualStory from "./components/VisualStory";

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
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, frames.length - 1],
  );
  const [currentFrame, setCurrentFrame] = useState(0);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    setCurrentFrame(Math.round(latest));
  });

  useEffect(() => {
    for (let i = 1; i <= 5; i++) {
      if (currentFrame + i < frames.length) {
        const img = new Image();
        img.src = `/images/Hero/${frames[currentFrame + i]}`;
      }
    }
  }, [currentFrame]);

  const textOpacity = useTransform(scrollYProgress, [0, 0.05, 1], [1, 0, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.05, 1], [1, 1.1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 0.05, 1], [0, -50, -50]);

  return (
    <main
      className="min-h-screen relative"
      style={{
        background:
          "radial-gradient(circle at 85% 15%, rgba(41, 200, 255, 0.28), transparent 30%), radial-gradient(circle at 20% 20%, rgba(255, 70, 184, 0.25), transparent 32%), linear-gradient(180deg, #060814 0%, #03050b 60%, #020307 100%)",
      }}
    >
      <section ref={targetRef} className="relative w-full h-[300vh] bg-black">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#02040d]">
          {frames.length > 0 && (
            <img
              src={`/images/Hero/${frames[currentFrame]}`}
              className="absolute inset-0 w-full h-full object-cover"
              alt="Hero fireworks animation"
            />
          )}
          <div className="absolute inset-0 bg-black/40" />

          <motion.div
            style={{ opacity: textOpacity, scale: textScale, y: textY }}
            className="relative z-10 text-center max-w-5xl px-6 flex flex-col items-center justify-center"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-rose-500">
                KK Fireworks
              </span>
            </h1>
            <p className="text-xl md:text-3xl lg:text-4xl text-gray-200 font-medium drop-shadow-lg leading-relaxed max-w-4xl">
              Here you will get the high quality crackers, and enjoy the
              festival.
            </p>
          </motion.div>
        </div>
      </section>

      <CrackersSection />

      <FestivalHighlights />

      <NightCelebration />

      <VisualStory />

      <motion.section
        className="w-[min(1120px,calc(100%-3rem))] mx-auto py-[clamp(3.5rem,6vw,6rem)] max-md:w-[min(1120px,calc(100%-1.4rem))] pt-10 pb-20 text-center"
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={sectionTransition}
      >
        <h2 className="m-0 text-[clamp(1.7rem,3vw,3rem)] leading-[1.2] text-balance">
          Bring This Festive Landing Page To Your Brand
        </h2>
        <p className="max-w-[62ch] mx-auto my-[1rem_1.8rem] text-[#fff1db]/85 leading-[1.65] mb-7">
          Crafted for 4K-style storytelling with soft depth, warm tones, and
          smooth motion as visitors scroll.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-full py-[0.85rem] px-[1.45rem] no-underline font-semibold text-[0.94rem] transition-all duration-220 hover:-translate-y-0.5 max-md:w-full bg-gradient-to-br from-[#ffa32c] to-[#ff5e62] text-[#1b0602] shadow-[0_10px_30px_rgba(255,107,70,0.35)]"
        >
          Start Your Celebration
        </a>
      </motion.section>
    </main>
  );
}
