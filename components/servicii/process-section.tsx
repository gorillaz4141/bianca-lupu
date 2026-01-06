"use client"

import { motion } from "framer-motion"
import { RevealSection } from "@/components/reveal-section"
import { Phone, MessageSquare, CalendarCheck, ArrowRight, Heart, Sparkles } from "lucide-react"

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Contactează-mă",
    description:
      "Sună la 0765 844 042 sau completează formularul de contact. Răspund în maxim 24 de ore în zilele lucrătoare.",
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Ședință Introductivă",
    description:
      "15 minute gratuite de conversație pentru a ne cunoaște și a vedea dacă suntem potriviți să lucrăm împreună.",
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "Prima Ședință",
    description:
      "Stabilim împreună obiectivele și începem călătoria. Vei primi instrucțiuni clare despre ce să aștepți.",
  },
  {
    icon: Heart,
    number: "04",
    title: "Procesul Terapeutic",
    description:
      "Ședințe regulate în care lucrăm la obiectivele tale, cu exerciții practice și suport continuu între ședințe.",
  },
  {
    icon: Sparkles,
    number: "05",
    title: "Transformare",
    description:
      "Pas cu pas, vei observa schimbări pozitive în viața ta. Încheiem când te simți pregătit să mergi mai departe singur.",
  },
]

export function ProcessSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#011936]" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#CB7C89]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#603140]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <RevealSection className="text-center mb-20">
          <span className="font-mono text-sm tracking-[0.2em] uppercase text-[#CB7C89] mb-4 block">Procesul</span>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-[#F1DEDE] mb-6">Cum funcționează</h2>
          <p className="font-mono text-[#F1DEDE]/70 max-w-2xl mx-auto">
            Fiecare pas este gândit pentru a-ți oferi claritate și siguranță în acest proces.
          </p>
        </RevealSection>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CB7C89]/30 to-transparent hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <RevealSection key={step.number} delay={index * 0.1}>
                <motion.div whileHover={{ y: -10 }} className="relative flex flex-col items-center text-center group">
                  {/* Number badge */}
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#CB7C89] to-[#603140] flex items-center justify-center shadow-xl"
                    >
                      <step.icon className="w-8 h-8 text-[#F1DEDE]" />
                    </motion.div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#F1DEDE] flex items-center justify-center">
                      <span className="font-mono text-xs font-bold text-[#603140]">{step.number}</span>
                    </div>
                  </div>

                  <h3 className="font-sans text-xl font-bold text-[#F1DEDE] mb-3">{step.title}</h3>
                  <p className="font-mono text-sm text-[#F1DEDE]/60 leading-relaxed">{step.description}</p>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-10">
                      <ArrowRight className="w-6 h-6 text-[#CB7C89]/30" />
                    </div>
                  )}
                </motion.div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
