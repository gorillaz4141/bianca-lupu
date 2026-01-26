"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { AnimatedText } from "@/components/animated-text"
import { Compass } from "lucide-react"

export function ServicesHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.95])

  return (
    <section ref={ref} className="relative min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] overflow-hidden flex items-center" style={{ minHeight: '80dvh' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F1DEDE] via-[#F1DEDE] to-[#e8d0d0]" />

      {/* Decorative elements - hidden on mobile for performance */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-40 left-20 w-80 h-80 bg-[#CB7C89]/20 rounded-full blur-3xl hidden sm:block"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]), opacity }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#603140]/10 rounded-full blur-3xl hidden sm:block"
      />

      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20"
      >
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <Compass className="w-5 h-5 text-[#CB7C89]" />
              <span className="font-mono text-sm tracking-[0.2em] uppercase text-[#603140]">Servicii</span>
            </motion.div>

            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#011936] leading-[1.15] sm:leading-[1.1] mb-6 sm:mb-8">
              <AnimatedText text="Călătoria noastră" delay={0.2} />
              <br className="hidden sm:block" />
              <span className="text-gradient block sm:inline">
                <AnimatedText text="împreună" delay={0.5} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="font-mono text-base sm:text-lg text-[#011936]/70 leading-relaxed"
            >
              Fiecare persoană are nevoie de un tip diferit de sprijin. Ofer servicii de PSIHOterapie adaptate nevoilor
              tale, fie că preferi întâlniri față-în-față în București, fie ședințe online din confortul casei tale.
            </motion.p>
          </div>

          {/* Decorative Image Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
              {/* Main image */}
              <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/poza3.jpeg"
                  alt="Servicii de psihoterapie"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#603140]/30 via-transparent to-transparent" />
              </div>

              {/* Secondary image */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F1DEDE]"
              >
                <Image
                  src="/bianca-1.jpeg"
                  alt="Ședințe online disponibile"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-6 shadow-xl z-10"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#CB7C89] to-[#603140] flex items-center justify-center">
                  <span className="font-sans text-xl font-bold text-[#F1DEDE]">+</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
