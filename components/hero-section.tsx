"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";
import { AnimatedText } from "./animated-text";
import { MagneticButton } from "./magnetic-button";

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scroll animations
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.9]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden"
      style={{ minHeight: "100dvh" }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F1DEDE] via-[#F1DEDE] to-[#e8d0d0]" />

      {/* Decorative blur elements — LARGE SCREENS ONLY */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-20 right-10 w-72 h-72 bg-[#CB7C89]/20 rounded-full blur-3xl hidden lg:block"
      />
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]),
          opacity,
        }}
        className="absolute bottom-40 left-10 w-96 h-96 bg-[#603140]/10 rounded-full blur-3xl hidden lg:block"
      />

      {/* Content */}
      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20"
      >
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center min-h-[calc(100dvh-160px)]">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full relative lg:max-w-lg mx-auto"
          >
            <div className="relative aspect-[3/4] max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              <div className="absolute -inset-4 border-2 border-[#CB7C89]/30 rounded-3xl rotate-3" />
              <div className="absolute -inset-4 border-2 border-[#603140]/20 rounded-3xl -rotate-3" />

              {/* Image container */}
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/poza2.jpeg"
                  alt="Bianca Lupu - Psihoterapeut"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#603140]/30 via-transparent to-transparent" />
              </div>

              {/* Floating badge — NO BLUR ON MOBILE */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -right-4 -bottom-4 bg-white/90 rounded-2xl p-4 shadow-xl lg:backdrop-blur-sm"
              >
                <p className="font-mono text-xs text-[#603140] uppercase tracking-wider mb-1">
                  Disponibil
                </p>
                <p className="font-sans text-lg font-semibold text-[#011936]">
                  București & Online
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <Sparkles className="w-5 h-5 text-[#CB7C89]" />
              <span className="font-mono text-sm tracking-[0.2em] uppercase text-[#603140]">
                Psihoterapie Integrativă
              </span>
            </motion.div>

            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#011936] leading-[1.15] mb-6 sm:mb-8">
              <AnimatedText
                text="Locul unde te poți auzi pe tine,"
                delay={0.2}
              />
              <br className="hidden sm:block" />
              <span className="text-[#011936] block sm:inline">
                <AnimatedText text="fără zgomotul din jur." delay={0.6} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="font-mono text-base sm:text-lg text-[#011936]/70 leading-relaxed mb-8 sm:mb-10 max-w-xl"
            >
              Nu trebuie să treci prin asta singur. Sunt Bianca Lupu,
              psihoterapeut în București, și sunt aici să te ascult și să te
              ghidez către echilibrul emoțional pe care îl meriți.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <MagneticButton
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#603140] to-[#CB7C89] text-[#F1DEDE] font-mono text-xs sm:text-sm tracking-wider rounded-full shadow-xl hover:shadow-2xl transition-shadow animate-pulse-glow"
              >
                Programează o Ședință
              </MagneticButton>

              <MagneticButton
                href="/despre"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#603140] text-[#603140] font-mono text-xs sm:text-sm tracking-wider rounded-full hover:bg-[#603140] hover:text-[#F1DEDE] transition-colors"
              >
                Descoperă Povestea Mea
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-[#011936]/50 tracking-wider">
            Descoperă mai mult
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-[#CB7C89]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
