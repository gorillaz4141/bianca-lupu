"use client"

import { motion } from "framer-motion"
import { RevealSection } from "@/components/reveal-section"
import { Brain, Target, Heart, Lightbulb } from "lucide-react"

const methods = [
  {
    icon: Brain,
    name: "CBT",
    fullName: "Terapie Cognitiv-Comportamentală",
    description:
      "O abordare structurată și bazată pe dovezi care te ajută să identifici și să modifici tiparele de gândire negative care îți afectează emoțiile și comportamentul.",
    benefits: ["Eficientă pentru anxietate și depresie", "Rezultate vizibile în 8-12 ședințe", "Tehnici practice"],
  },
  {
    icon: Target,
    name: "Schema Therapy",
    fullName: "Terapia Schemelor",
    description:
      "O metodă integrativă care lucrează cu tiparele emoționale profunde formate în copilărie, ajutându-te să înțelegi rădăcinile comportamentelor actuale.",
    benefits: [
      "Perfectă pentru relații dificile",
      "Vindecarea traumelor din copilărie",
      "Transformare profundă și durabilă",
    ],
  },
  {
    icon: Heart,
    name: "Psihanaliză",
    fullName: "Abordare Psihoanalitică",
    description:
      "Explorăm împreună dimensiunile inconștiente ale experienței tale, pentru a înțelege mai bine motivațiile și conflictele interne care te influențează.",
    benefits: ["Autoînțelegere profundă", "Explorarea inconștientului", "Insight-uri transformatoare"],
  },
  {
    icon: Lightbulb,
    name: "Integrativ",
    fullName: "Abordare Integrativă",
    description:
      "Fiecare persoană este unică, așa că adapt metodele în funcție de nevoile tale specifice, combinând cele mai eficiente tehnici pentru situația ta.",
    benefits: ["Personalizat pentru tine", "Flexibil și adaptat", "Rezultate optime"],
  },
]

export function MethodsSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#011936]" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#CB7C89]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#603140]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <RevealSection className="text-center mb-20">
          <span className="font-mono text-sm tracking-[0.2em] uppercase text-[#CB7C89] mb-4 block">Metodologie</span>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-[#F1DEDE] mb-6">
            Cum lucrăm împreună
          </h2>
          <p className="font-mono text-[#F1DEDE]/70 max-w-2xl mx-auto">
            Folosesc metode validate științific, adaptate nevoilor tale unice, pentru a-ți oferi cel mai bun suport
            posibil.
          </p>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-8">
          {methods.map((method, index) => (
            <RevealSection key={method.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-[#CB7C89]/30 transition-all duration-500 h-full"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#CB7C89]/5 to-[#603140]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#CB7C89] to-[#603140] flex items-center justify-center shadow-lg">
                      <method.icon className="w-7 h-7 text-[#F1DEDE]" />
                    </div>
                    <div>
                      <h3 className="font-sans text-2xl font-bold text-[#F1DEDE]">{method.name}</h3>
                      <p className="font-mono text-xs text-[#CB7C89]">{method.fullName}</p>
                    </div>
                  </div>

                  <p className="font-mono text-[#F1DEDE]/70 leading-relaxed mb-6">{method.description}</p>

                  <div className="space-y-3">
                    <p className="font-mono text-xs text-[#CB7C89] uppercase tracking-wider">Beneficii:</p>
                    <ul className="space-y-2">
                      {method.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#CB7C89]" />
                          <span className="font-mono text-sm text-[#F1DEDE]/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}
