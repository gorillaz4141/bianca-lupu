"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { RevealSection } from "./reveal-section"
import { MagneticButton } from "./magnetic-button"
import { Award, BookOpen, Users } from "lucide-react"

const credentials = [
  { icon: Award, value: "5+", label: "Ani experiență" },
  { icon: Users, value: "200+", label: "Clienți ajutați" },
  { icon: BookOpen, value: "CBT", label: "Schema Therapy" },
]

export function AboutPreview() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F1DEDE] to-[#e8d0d0]" />

      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-[#CB7C89]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <RevealSection>
              <span className="font-mono text-sm tracking-[0.2em] uppercase text-[#CB7C89] mb-4 block">
                Despre Mine
              </span>
              <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-[#011936] mb-6">
                Omul din spatele <span className="text-gradient">terapeutului</span>
              </h2>
              <p className="font-mono text-[#011936]/70 leading-relaxed mb-6">
                Sunt Bianca Lupu, psihoterapeut cu o pasiune profundă pentru înțelegerea sufletului uman. Cred că
                fiecare persoană poartă în ea capacitatea de a se vindeca și de a crește.
              </p>
              <p className="font-mono text-[#011936]/70 leading-relaxed mb-10">
                Specializată în Terapie Cognitiv-Comportamentală (CBT) și Schema Therapy, ofer un spațiu sigur, lipsit
                de judecată, unde poți explora, înțelege și transforma.
              </p>
            </RevealSection>

            {/* Credentials */}
            <RevealSection delay={0.2}>
              <div className="grid grid-cols-3 gap-4 mb-10">
                {credentials.map((cred, index) => (
                  <motion.div
                    key={cred.label}
                    whileHover={{ y: -5 }}
                    className="text-center p-4 rounded-2xl bg-white/50 backdrop-blur-sm"
                  >
                    <cred.icon className="w-6 h-6 text-[#CB7C89] mx-auto mb-2" />
                    <div className="font-sans text-2xl font-bold text-[#011936]">{cred.value}</div>
                    <div className="font-mono text-xs text-[#011936]/60">{cred.label}</div>
                  </motion.div>
                ))}
              </div>

              <MagneticButton
                href="/despre"
                className="inline-flex items-center gap-2 font-mono text-sm text-[#603140] group"
              >
                <span className="border-b-2 border-[#603140] group-hover:border-[#CB7C89] transition-colors">
                  Citește povestea completă
                </span>
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </MagneticButton>
            </RevealSection>
          </div>

          {/* Image */}
          <RevealSection direction="right">
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -inset-8 border border-dashed border-[#CB7C89]/30 rounded-full"
                />

                <div className="relative h-full rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src="/images/poza1.jpeg"
                    alt="Bianca Lupu - Psihoterapeut"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Quote badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl max-w-[250px]"
                >
                  <p className="font-sans text-sm text-[#011936] italic leading-relaxed">
                    "Terapia începe cu o relație. Vindecarea începe cu încredere."
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#CB7C89] to-[#603140]" />
                    <span className="font-mono text-xs text-[#011936]/60">Bianca Lupu</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  )
}
