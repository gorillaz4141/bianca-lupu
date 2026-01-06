"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { RevealSection } from "./reveal-section"
import { MagneticButton } from "./magnetic-button"
import { Phone, MapPin, Calendar } from "lucide-react"

export function CTASection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#011936]" />

      {/* Background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-20">
        <Image src="/images/poza4.jpeg" alt="" fill className="object-cover" sizes="100vw" />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#011936] via-[#011936]/90 to-[#011936]/80" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#CB7C89]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#603140]/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <RevealSection>
              <span className="font-mono text-sm tracking-[0.2em] uppercase text-[#CB7C89] mb-4 block">
                Fă Primul Pas
              </span>
              <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-[#F1DEDE] mb-6">
                Ești pregătit să începi <span className="text-[#CB7C89]">călătoria</span> spre vindecare?
              </h2>
              <p className="font-mono text-[#F1DEDE]/70 leading-relaxed mb-10 max-w-xl">
                Cel mai greu pas este primul. Te invit la o ședință introductivă de 15 minute, gratuită și fără
                obligații, în care putem discuta despre nevoile tale și despre cum te pot ajuta.
              </p>
            </RevealSection>

            <RevealSection delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <MagneticButton
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#CB7C89] to-[#603140] text-[#F1DEDE] font-mono text-sm tracking-wider rounded-full shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <Calendar className="w-4 h-4" />
                  Programează Acum
                </MagneticButton>
                <MagneticButton
                  href="tel:0765844042"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#CB7C89]/50 text-[#F1DEDE] font-mono text-sm tracking-wider rounded-full hover:bg-[#CB7C89]/10 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Sună Acum
                </MagneticButton>
              </div>
            </RevealSection>

            {/* Contact info */}
            <RevealSection delay={0.3}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#CB7C89]/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#CB7C89]" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-[#F1DEDE]/50 uppercase tracking-wider">Telefon</p>
                    <a
                      href="tel:0765844042"
                      className="font-sans text-[#F1DEDE] hover:text-[#CB7C89] transition-colors"
                    >
                      0765 844 042
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#CB7C89]/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#CB7C89]" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-[#F1DEDE]/50 uppercase tracking-wider">Locație</p>
                    <p className="font-sans text-[#F1DEDE]">București & Online</p>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>

          {/* Decorative image card */}
          <RevealSection direction="right">
            <div className="relative max-w-md mx-auto">
              <motion.div
                whileHover={{ scale: 1.02, rotate: -2 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/poza5.jpeg"
                  alt="Bianca Lupu - Psihoterapeut"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#603140]/50 via-transparent to-transparent" />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
              >
                <p className="font-sans text-2xl font-bold text-[#011936]">15 min</p>
                <p className="font-mono text-xs text-[#603140]">Ședință gratuită</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#CB7C89] to-[#603140] rounded-2xl p-4 shadow-xl"
              >
                <p className="font-sans text-lg font-bold text-[#F1DEDE]">100%</p>
                <p className="font-mono text-xs text-[#F1DEDE]/80">Confidențial</p>
              </motion.div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  )
}
