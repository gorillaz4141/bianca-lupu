"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { AnimatedText } from "@/components/animated-text"
import { BookOpen } from "lucide-react"

export function BlogHero() {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F1DEDE] to-[#e8d0d0]" />

      {/* Decorative elements - hidden on mobile */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-40 left-20 w-80 h-80 bg-[#CB7C89]/20 rounded-full blur-3xl hidden sm:block"
      />

      {/* Background image - hidden on mobile for performance */}
      <div className="absolute top-20 right-0 w-1/3 h-full opacity-20 hidden md:block">
        <Image src="/images/poza5.jpeg" alt="" fill className="object-cover object-left" sizes="33vw" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#F1DEDE]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-4 sm:mb-6"
        >
          <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#CB7C89]" />
          <span className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-[#603140]">Blog</span>
        </motion.div>

        <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#011936] leading-[1.15] sm:leading-[1.1] mb-6 sm:mb-8">
          <AnimatedText text="Resurse pentru" delay={0.2} />
          <br className="hidden sm:block" />
          <span className="text-gradient block sm:inline">
            <AnimatedText text="sănătatea ta mintală" delay={0.5} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-mono text-base sm:text-lg text-[#011936]/70 leading-relaxed max-w-2xl"
        >
          Articole, ghiduri și perspective despre anxietate, depresie, relații și dezvoltare personală. Informații
          validate științific, prezentate accesibil.
        </motion.p>
      </div>
    </section>
  )
}
