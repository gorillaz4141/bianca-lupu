"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { RevealSection } from "./reveal-section"
import { Check } from "lucide-react"

const solutions = [
  "Gestionarea anxietății și a gândurilor intruzive",
  "Depășirea episoadelor depresive",
  "Îmbunătățirea relațiilor interpersonale",
  "Vindecarea traumelor din trecut",
  "Dezvoltarea stimei de sine",
  "Găsirea echilibrului emoțional",
]

export function SolutionSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#011936]" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#CB7C89]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#603140]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <RevealSection direction="left">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <motion.div style={{ y: imageY }} className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/poza3.jpeg"
                  alt="Bianca Lupu - Spațiu sigur pentru terapie"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011936]/40 via-transparent to-transparent" />
              </motion.div>

              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-[#CB7C89]/30 rounded-3xl -z-10" />
            </div>
          </RevealSection>

          {/* Content */}
          <div>
            <RevealSection direction="right">
              <span className="font-mono text-sm tracking-[0.2em] uppercase text-[#CB7C89] mb-4 block">Soluția</span>
              <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-[#F1DEDE] mb-6">
                Prin terapie, vom lucra <span className="text-[#CB7C89]">împreună</span> la:
              </h2>
              <p className="font-mono text-[#F1DEDE]/70 leading-relaxed mb-10">
                Fiecare persoană este unică, iar terapia pe care o ofer este adaptată nevoilor tale specifice. Folosesc
                metode validate științific pentru rezultate reale și durabile.
              </p>
            </RevealSection>

            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <RevealSection key={solution} delay={index * 0.1} direction="right">
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#CB7C89]/30 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#CB7C89] to-[#603140] flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#F1DEDE]" />
                    </div>
                    <span className="font-mono text-[#F1DEDE]/90">{solution}</span>
                  </motion.div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
