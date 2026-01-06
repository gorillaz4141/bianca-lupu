"use client"

import { motion } from "framer-motion"
import { AnimatedText } from "@/components/animated-text"
import { Send } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F1DEDE] to-[#e8d0d0]" />

      {/* Decorative elements - hidden on mobile */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-40 right-20 w-80 h-80 bg-[#CB7C89]/20 rounded-full blur-3xl hidden sm:block"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-0 left-10 w-96 h-96 bg-[#603140]/10 rounded-full blur-3xl hidden sm:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-4 sm:mb-6"
        >
          <Send className="w-4 h-4 sm:w-5 sm:h-5 text-[#CB7C89]" />
          <span className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-[#603140]">Contact</span>
        </motion.div>

        <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#011936] leading-[1.15] sm:leading-[1.1] mb-6 sm:mb-8">
          <AnimatedText text="Fă primul pas" delay={0.2} />
          <br className="hidden sm:block" />
          <span className="text-gradient block sm:inline">
            <AnimatedText text="către progres" delay={0.5} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-mono text-base sm:text-lg text-[#011936]/70 leading-relaxed max-w-2xl mx-auto px-2"
        >
          Cel mai greu pas este primul. Completează formularul sau sună-mă direct. Te aștept cu o ședință introductivă
          gratuită de 15 minute.
        </motion.p>
      </div>
    </section>
  )
}
