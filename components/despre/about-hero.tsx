"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { AnimatedText } from "@/components/animated-text"
import { Heart } from "lucide-react"

export function AboutHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.95])

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden flex items-center" style={{ minHeight: '100dvh' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F1DEDE] via-[#F1DEDE] to-[#e8d0d0]" />

      {/* Decorative elements - hidden on mobile for performance */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-40 right-20 w-80 h-80 bg-[#CB7C89]/20 rounded-full blur-3xl hidden sm:block"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]), opacity }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-[#603140]/10 rounded-full blur-3xl hidden sm:block"
      />

      <motion.div style={{ scale, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-28 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <Heart className="w-5 h-5 text-[#CB7C89]" />
              <span className="font-mono text-sm tracking-[0.2em] uppercase text-[#603140]">Despre Mine</span>
            </motion.div>

            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#011936] leading-[1.15] sm:leading-[1.1] mb-6 sm:mb-8">
              <AnimatedText text="Omul din spatele" delay={0.2} />
              <br className="hidden sm:block" />
              <span className="text-gradient block sm:inline">
                <AnimatedText text="terapeutului" delay={0.5} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="font-mono text-base sm:text-lg text-[#011936]/70 leading-relaxed mb-4 sm:mb-6"
            >
              Sunt Bianca Lupu, și înainte de toate, sunt un om care înțelege că fiecare dintre noi poartă povești
              nevăzute, lupte interioare și speranțe nebănuite.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="font-mono text-base sm:text-lg text-[#011936]/70 leading-relaxed"
            >
              Călătoria mea în psihoterapie a început din dorința profundă de a înțelege sufletul uman în toată
              complexitatea lui - nu doar ca specialist, ci ca om care crede cu tărie în puterea vindecării și a
              transformării.
            </motion.p>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-sm sm:max-w-md md:max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 border border-[#CB7C89]/30 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] rotate-3" />
              <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 border border-[#603140]/20 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] -rotate-3" />

              {/* Main image */}
              <div className="relative h-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/poza1.jpeg"
                  alt="Bianca Lupu - Psihoterapeut București"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#603140]/20 via-transparent to-transparent" />
              </div>

              {/* Quote overlay - responsive positioning */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -left-4 sm:-left-6 md:-left-8 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl max-w-[calc(100%+2rem)] sm:max-w-sm"
              >
                <p className="font-sans text-sm sm:text-base text-[#011936] italic leading-relaxed mb-2 sm:mb-3">
                  &ldquo;Vindecarea nu înseamnă că durerea nu a existat niciodată. Înseamnă că nu mai controlează viața ta.&rdquo;
                </p>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#CB7C89] to-[#603140]" />
                  <div>
                    <p className="font-sans text-xs sm:text-sm font-semibold text-[#011936]">Bianca Lupu</p>
                    <p className="font-mono text-[10px] sm:text-xs text-[#011936]/60">Psihoterapeut</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
