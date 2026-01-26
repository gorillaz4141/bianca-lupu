"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { AnimatedText } from "./animated-text";
import { MagneticButton } from "./magnetic-button";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ minHeight: "100dvh" }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F1DEDE] via-[#F1DEDE] to-[#e8d0d0]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative w-52 sm:w-60 md:w-72 aspect-[3/4]">
              <div className="absolute -inset-3 border-2 border-[#CB7C89]/30 rounded-3xl rotate-2" />
              <div className="absolute -inset-3 border-2 border-[#603140]/20 rounded-3xl -rotate-2" />

              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/bianca-2.jpeg"
                  alt="Bianca Lupu - Psihoterapeut"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 65vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#603140]/25 via-transparent to-transparent" />
              </div>

              {/* Availability badge */}
              <div className="absolute -right-3 -bottom-3 bg-white rounded-xl px-3 py-2 shadow-lg">
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#603140]">
                  Disponibil
                </p>
                <p className="font-sans text-sm font-semibold text-[#011936]">
                  București & Online
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-3"
            >
              <Sparkles className="w-4 h-4 text-[#CB7C89]" />
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#603140]">
                Psihoterapie Integrativă
              </span>
            </motion.div>

            {/* SMALLER TITLE */}
            <h1 className="font-sans text-2xl sm:text-3xl lg:text-5xl font-bold text-[#011936] leading-snug mb-3">
              <AnimatedText text="Un spațiu sigur" delay={0.1} />
              <br />
              <AnimatedText text="pentru tine." delay={0.35} />
            </h1>

            {/* TIGHTER TEXT */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="font-mono text-sm text-[#011936]/70 max-w-md mx-auto lg:mx-0 mb-5"
            >
              Sunt Bianca Lupu, psihoterapeut în București. Te susțin să îți
              înțelegi emoțiile și să îți regăsești echilibrul interior.
            </motion.p>

            {/* BUTTONS — GUARANTEED SPACING */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start"
            >
              <MagneticButton
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-[#603140] to-[#CB7C89] text-[#F1DEDE] font-mono text-xs tracking-wider rounded-full shadow-lg"
              >
                Programează o Ședință
              </MagneticButton>

              <MagneticButton
                href="/despre"
                className="px-6 py-3 border-2 border-[#603140] text-[#603140] font-mono text-xs tracking-wider rounded-full hover:bg-[#603140] hover:text-[#F1DEDE] transition-colors"
              >
                Despre mine
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
