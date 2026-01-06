"use client"

import { motion } from "framer-motion"
import { AnimatedText } from "@/components/animated-text"

export function TestimonialsHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#011936] via-[#011936]/95 to-[#603140]/80" />

      {/* Decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#CB7C89]/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#F1DEDE]/10 blur-3xl"
        />
      </div>

      {/* Floating quote marks */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/4 left-10 md:left-20"
      >
        <span className="text-[200px] md:text-[300px] font-sans text-[#F1DEDE] leading-none">"</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-1/4 right-10 md:right-20 rotate-180"
      >
        <span className="text-[200px] md:text-[300px] font-sans text-[#F1DEDE] leading-none">"</span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-6 py-3 bg-[#CB7C89]/20 backdrop-blur-sm rounded-full font-mono text-sm text-[#F1DEDE] mb-8 border border-[#CB7C89]/30"
        >
          Povești de Transformare
        </motion.span>

        <AnimatedText
          text="Voci care Inspiră"
          className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold text-[#F1DEDE] mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-mono text-lg md:text-xl text-[#F1DEDE]/70 max-w-2xl mx-auto"
        >
          Fiecare călătorie terapeutică este unică. Acestea sunt poveștile celor care au avut curajul să facă primul pas
          spre vindecare.
        </motion.p>

        {/* Small profile images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex items-center justify-center gap-4 mt-12"
        >
          <div className="flex -space-x-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#CB7C89] to-[#603140] border-2 border-[#011936] flex items-center justify-center"
              >
                <span className="font-mono text-xs text-[#F1DEDE]">{i}</span>
              </div>
            ))}
          </div>
          <div className="text-left">
            <p className="font-sans font-bold text-[#F1DEDE]">50+</p>
            <p className="font-mono text-xs text-[#F1DEDE]/60">Clienți mulțumiți</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-[#F1DEDE]/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-3 bg-[#CB7C89] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
