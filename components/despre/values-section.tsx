"use client"

import { motion } from "framer-motion"
import { RevealSection } from "@/components/reveal-section"
import { Shield, Heart, Eye, Sparkles, Users, Compass } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Confidențialitate",
    description: "Tot ce împărtășești rămâne între noi. Spațiul terapeutic este sacru și protejat.",
  },
  {
    icon: Heart,
    title: "Empatie",
    description: "Te ascult fără judecată, cu înțelegere și compasiune autentică pentru experiența ta.",
  },
  {
    icon: Eye,
    title: "Autenticitate",
    description: "Sunt prezentă cu tine ca om întreg, nu doar ca profesionist. Realitatea este baza încrederii.",
  },
  {
    icon: Sparkles,
    title: "Transformare",
    description: "Cred cu tărie că fiecare persoană poate evolua și poate crea o viață mai împlinită.",
  },
  {
    icon: Users,
    title: "Respect",
    description: "Valorizez unicitatea ta și respect ritmul tău de lucru și limitele personale.",
  },
  {
    icon: Compass,
    title: "Orientare",
    description: "Te ghidez cu experiență și cunoștințe, dar tu ești cel care decide direcția călătoriei.",
  },
]

export function ValuesSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F1DEDE] to-[#e8d0d0]" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#CB7C89]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#603140]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <RevealSection className="text-center mb-20">
          <span className="font-mono text-sm tracking-[0.2em] uppercase text-[#CB7C89] mb-4 block">Valorile Mele</span>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-[#011936] mb-6">
            Pe ce mă bazez în terapie
          </h2>
          <p className="font-mono text-[#011936]/70 max-w-2xl mx-auto">
            Aceste principii ghidează fiecare ședință și fiecare interacțiune cu clienții mei.
          </p>
        </RevealSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <RevealSection key={value.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#CB7C89] to-[#603140] opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-sm" />
                <div className="absolute inset-[1px] rounded-3xl bg-white/90 -z-10" />

                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#CB7C89]/20 to-[#603140]/20 flex items-center justify-center mb-6"
                >
                  <value.icon className="w-8 h-8 text-[#603140]" />
                </motion.div>

                <h3 className="font-sans text-xl font-bold text-[#011936] mb-3">{value.title}</h3>
                <p className="font-mono text-sm text-[#011936]/70 leading-relaxed">{value.description}</p>
              </motion.div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}
