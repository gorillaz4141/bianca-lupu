"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { RevealSection } from "./reveal-section"
import { Sparkles, Heart, Compass, Shield, Sun, Users } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Liniște Interioară",
    description: "Eliberează-te de anxietate și găsește pacea pe care o cauți.",
  },
  {
    icon: Compass,
    title: "Claritate",
    description: "Înțelege-te mai bine și ia decizii aliniate cu valorile tale.",
  },
  {
    icon: Shield,
    title: "Reziliență",
    description: "Dezvoltă capacitatea de a face față provocărilor vieții.",
  },
  {
    icon: Sun,
    title: "Energie",
    description: "Redescoperă bucuria și motivația în viața de zi cu zi.",
  },
  {
    icon: Users,
    title: "Relații Mai Bune",
    description: "Construiește conexiuni mai profunde și autentice.",
  },
  {
    icon: Sparkles,
    title: "Autenticitate",
    description: "Trăiește în acord cu cine ești cu adevărat.",
  },
]

export function BenefitsSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Animated background */}
      <motion.div
        style={{
          background: `linear-gradient(135deg, #F1DEDE 0%, #e8d0d0 50%, #F1DEDE 100%)`,
          backgroundSize: "400% 400%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute inset-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <RevealSection className="text-center mb-20">
          <span className="font-mono text-sm tracking-[0.2em] uppercase text-[#CB7C89] mb-4 block">Beneficii</span>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-[#011936] mb-6">Ce vei câștiga</h2>
          <p className="font-mono text-[#011936]/70 max-w-2xl mx-auto">
            Terapia nu este doar despre a rezolva probleme. Este despre a construi o viață mai împlinită și mai
            autentică.
          </p>
        </RevealSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <RevealSection key={benefit.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#CB7C89]/10 to-[#603140]/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#CB7C89] to-[#603140] flex items-center justify-center mb-6 shadow-lg"
                >
                  <benefit.icon className="w-8 h-8 text-[#F1DEDE]" />
                </motion.div>

                <h3 className="relative font-sans text-xl font-semibold text-[#011936] mb-3">{benefit.title}</h3>
                <p className="relative font-mono text-sm text-[#011936]/60 leading-relaxed">{benefit.description}</p>
              </motion.div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}
