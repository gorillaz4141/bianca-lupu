"use client"

import { motion } from "framer-motion"

const words = [
  "Încredere",
  "Vindecare",
  "Transformare",
  "Speranță",
  "Claritate",
  "Liniște",
  "Curaj",
  "Acceptare",
  "Creștere",
  "Libertate",
]

export function TestimonialsMarquee() {
  return (
    <section className="relative py-8 overflow-hidden bg-[#011936]">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...words, ...words, ...words].map((word, index) => (
          <span key={index} className="flex items-center gap-8">
            <span className="font-sans text-2xl md:text-3xl font-bold text-[#F1DEDE]/20">{word}</span>
            <span className="w-2 h-2 rounded-full bg-[#CB7C89]" />
          </span>
        ))}
      </motion.div>
    </section>
  )
}
