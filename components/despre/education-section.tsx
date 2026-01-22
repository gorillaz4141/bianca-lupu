"use client"

import { RevealSection } from "@/components/reveal-section"
import {
  GraduationCap,
  Award,
  Briefcase,
  BookOpen,
  Globe,
  Phone,
  Mail
} from "lucide-react"
import { motion } from "framer-motion"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "biancalupu27@yahoo.com",
    href: "mailto:biancalupu27@yahoo.com"
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+40 765 844 042",
    href: "tel:+40765844042"
  }
]

const education = [
  {
    icon: GraduationCap,
    title: "Master – Învățare, Inovare și Coaching în Educație (IICE)",
    institution: "Universitatea din București",
    period: "10/2025 – În curs",
    site: "https://unibuc.ro/"
  },
  {
    icon: BookOpen,
    title: "Formare Psihoterapie Integrativă",
    institution: "Institutul Român de Psihoterapie Integrativă (IRPI)",
    period: "10/2023 – 11/2025",
    site: "https://irpi.ro/"
  },
  {
    icon: GraduationCap,
    title: "Master – Psihodiagnoză și Psihoterapie Experiențială (PEU)",
    institution: "Universitatea din București",
    period: "10/2023 – 07/2025",
    site: "https://fpse.unibuc.ro/"
  },
  {
    icon: BookOpen,
    title: "Master Erasmus – Clinical Psychosexology",
    institution: "Sapienza Università di Roma",
    period: "02/2024 – 09/2024",
    site: "https://www.uniroma1.it/"
  },
  {
    icon: GraduationCap,
    title: "Licență în Psihopedagogie Specială",
    institution: "Universitatea din București",
    period: "10/2020 – 07/2023",
    site: "https://unibuc.ro/"
  }
]

const experience = [
  {
    title: "Terapeut ABA",
    place: "Autism Step by Step, București",
    period: "09/2021 – 06/2025"
  },
  {
    title: "Terapeut ABA",
    place: "ABA Masters, București",
    period: "07/2022 – 09/2022"
  },
  {
    title: "Voluntar HR & Digital Media Designer",
    place: "Erasmus Life Athens, Grecia",
    period: "10/2022 – 02/2023"
  }
]

const certifications = [
  "Membru Colegiul Psihologilor din România",
  "Certificat de practică în supervizare",
  "Supervizare profesională continuă",
  "Formare în etică profesională"
]

const languages = [
  { language: "Română", level: "Limba maternă" },
  { language: "Engleză", level: "B2" }
]

export function EducationSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8d0d0] to-[#F1DEDE]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* HEADER */}
        <RevealSection className="mb-16">
          <h2 className="text-3xl font-bold text-[#011936] mb-4">
            Bianca Georgiana Lupu
          </h2>

          <div className="flex flex-col sm:flex-row gap-6">
            {contactDetails.map(item => (
              <div
                key={item.label}
                className="flex items-center gap-2"
              >
                <item.icon className="w-4 h-4 text-[#CB7C89]" />
                <a
                  href={item.href}
                  className="text-[#011936] hover:underline"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* EDUCAȚIE */}
        <RevealSection className="mb-16">
          <h3 className="text-2xl font-bold text-[#CB7C89] mb-6 text-center">
            Studii & Formare
          </h3>

          <div className="space-y-5">
            {education.map(item => (
              <motion.div
                key={`${item.title}-${item.period}`}
                whileHover={{ x: 8 }}
                className="flex gap-5 bg-white/60 rounded-2xl p-6 shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#CB7C89] to-[#603140] flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between gap-2">
                    <h4 className="font-semibold text-[#011936]">
                      {item.title}
                    </h4>
                    <span className="text-xs text-[#CB7C89]">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs text-[#603140]">
                    {item.institution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealSection>

        {/* EXPERIENȚĂ */}
        <RevealSection className="mb-16">
          <h3 className="text-2xl font-bold text-[#CB7C89] mb-6 text-center">
            Experiență profesională
          </h3>

          <div className="space-y-5">
            {experience.map(item => (
              <motion.div
                key={`${item.title}-${item.place}-${item.period}`}
                whileHover={{ x: 8 }}
                className="flex gap-5 bg-white/60 rounded-2xl p-6 shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-[#CB7C89]/30 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-[#011936]" />
                </div>

                <div>
                  <h4 className="font-semibold text-[#011936]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#603140]">
                    {item.place} • {item.period}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealSection>

        {/* CERTIFICĂRI & LIMBI */}
        <RevealSection>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-[#011936] rounded-2xl p-8">
              <h4 className="text-lg font-bold text-white mb-4">
                Certificări
              </h4>

              <ul className="space-y-2">
                {certifications.map(cert => (
                  <li
                    key={cert}
                    className="flex gap-2 text-sm text-white/90"
                  >
                    <Award className="w-4 h-4 text-[#CB7C89]" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/60 rounded-2xl p-8">
              <h4 className="text-lg font-bold text-[#011936] mb-4">
                Limbi străine
              </h4>

              {languages.map(lang => (
                <p
                  key={lang.language}
                  className="text-sm text-[#603140]"
                >
                  <strong>{lang.language}</strong> – {lang.level}
                </p>
              ))}
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
