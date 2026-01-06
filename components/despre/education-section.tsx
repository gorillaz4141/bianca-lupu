"use client"

import { RevealSection } from "@/components/reveal-section"
import { GraduationCap, Award, Briefcase as Certificate, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

const education = [
  {
    icon: GraduationCap,
    title: "Licență în Psihologie",
    institution: "Universitatea din București",
    description: "Fundamentele psihologiei și înțelegerea complexității comportamentului uman",
  },
  {
    icon: Certificate,
    title: "Master în Psihoterapie Cognitiv-Comportamentală",
    institution: "Academia de Studii Psihoterapeutice",
    description: "Specializare avansată în CBT și tehnici de intervenție validate științific",
  },
  {
    icon: Award,
    title: "Certificare Schema Therapy",
    institution: "International Society of Schema Therapy",
    description: "Formare intensivă în lucrul cu scheme emoționale profunde și vindecare trauma",
  },
  {
    icon: BookOpen,
    title: "Formare Continuă",
    institution: "Workshop-uri internaționale",
    description: "Particip constant la conferințe și training-uri pentru a rămâne la curent cu cele mai noi dezvoltări",
  },
]

const certifications = [
  "Membru Colegiul Psihologilor din România",
  "Certificat de practică independentă",
  "Supervizare continuă",
  "Formare în etică profesională",
]

export function EducationSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8d0d0] to-[#F1DEDE]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <RevealSection className="text-center mb-20">
          <span className="font-mono text-sm tracking-[0.2em] uppercase text-[#CB7C89] mb-4 block">
            Pregătire Profesională
          </span>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-[#011936] mb-6">
            Educație și Acreditări
          </h2>
          <p className="font-mono text-[#011936]/70 max-w-2xl mx-auto">
            Calitatea serviciilor pe care le ofer este susținută de ani de studiu intens și formare continuă.
          </p>
        </RevealSection>

        {/* Education timeline */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {education.map((item, index) => (
            <RevealSection key={item.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ x: 10 }}
                className="flex gap-6 bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#CB7C89] to-[#603140] flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-[#F1DEDE]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-sans text-lg font-bold text-[#011936] mb-1">{item.title}</h3>
                  <p className="font-mono text-xs text-[#CB7C89] mb-3">{item.institution}</p>
                  <p className="font-mono text-sm text-[#011936]/70 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            </RevealSection>
          ))}
        </div>

        {/* Certifications */}
        <RevealSection>
          <div className="bg-[#011936] rounded-[3rem] p-12 text-center">
            <h3 className="font-sans text-2xl font-bold text-[#F1DEDE] mb-8">Acreditări & Certificări</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#CB7C89] to-[#603140] flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#F1DEDE]" />
                  </div>
                  <p className="font-mono text-sm text-[#F1DEDE]/80 text-center">{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
