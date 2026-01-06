"use client"

import { motion } from "framer-motion"
import { RevealSection } from "@/components/reveal-section"
import { User, Users, Video, ClipboardCheck, Heart, Brain } from "lucide-react"

const services = [
  {
    icon: User,
    title: "Terapie Individuală",
    subtitle: "Spațiu personal de explorare",
    description:
      "Ședințe one-on-one în care lucrăm împreună la înțelegerea și transformarea tiparelor care te împiedică să trăiești viața pe care o dorești.",
    details: [
      "Anxietate și atacuri de panică",
      "Depresie și stări de tristețe",
      "Burnout și stres cronic",
      "Stimă de sine scăzută",
      "Dificultăți în relații",
      "Traume și experiențe dificile",
    ],
    duration: "50 minute",
    frequency: "Săptămânal",
  },
  {
    icon: Users,
    title: "Terapie de Cuplu",
    subtitle: "Reconectare și înțelegere",
    description:
      "Spațiu neutru pentru ambii parteneri, unde putem explora dinamicile relației și găsi căi de comunicare mai bune și mai sănătoase.",
    details: [
      "Conflicte recurente",
      "Probleme de comunicare",
      "Distanță emoțională",
      "Reconstruirea încrederii",
      "Crize de cuplu",
      "Decizia de a rămâne sau de a pleca",
    ],
    duration: "90 minute",
    frequency: "La 2 săptămâni",
  },
  {
    icon: Video,
    title: "Terapie Online",
    subtitle: "Flexibilitate și accesibilitate",
    description:
      "Aceleași servicii de calitate, disponibile de oriunde te-ai afla. Perfect pentru cei cu program încărcat sau care locuiesc în afara Bucureștiului.",
    details: [
      "Platformă securizată video",
      "Flexibilitate în programare",
      "Accesibilă de oriunde",
      "Aceeași calitate ca în cabinet",
      "Perfectă pentru expați",
      "Fără timp pierdut în trafic",
    ],
    duration: "50 minute",
    frequency: "Flexibil",
  },
  {
    icon: ClipboardCheck,
    title: "Evaluare Psihologică",
    subtitle: "Înțelegere completă",
    description:
      "Evaluare complexă pentru a înțelege mai bine profilul tău psihologic, punctele forte și zonele care necesită atenție.",
    details: [
      "Evaluare personalitate",
      "Screening anxietate/depresie",
      "Evaluare cognitivă",
      "Raport scris detaliat",
      "Recomandări personalizate",
      "Discuție feedback",
    ],
    duration: "2-3 ore",
    frequency: "Ședință unică",
  },
  {
    icon: Brain,
    title: "CBT Intensiv",
    subtitle: "Program focalizat pe rezultate",
    description:
      "Program structurat de terapie cognitiv-comportamentală pentru cei care doresc rezultate mai rapide și sunt dispuși să investească mai mult.",
    details: [
      "2 ședințe pe săptămână",
      "Exerciții între ședințe",
      "Monitorizare progres",
      "Tehnici practice",
      "Durată redusă totală",
      "Rezultate accelerate",
    ],
    duration: "50 minute",
    frequency: "Bi-săptămânal",
  },
  {
    icon: Heart,
    title: "Ședință Introductivă",
    subtitle: "Primul pas gratuit",
    description:
      "15 minute de conversație gratuită pentru a ne cunoaște, a-ți răspunde la întrebări și a vedea dacă suntem potriviți să lucrăm împreună.",
    details: [
      "Gratuită",
      "Fără obligații",
      "Online sau telefonic",
      "Răspunsuri la întrebări",
      "Clarificarea așteptărilor",
      "Alegerea informată",
    ],
    duration: "15 minute",
    frequency: "Ședință unică",
  },
]

export function ServicesList() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8d0d0] to-[#F1DEDE]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <RevealSection className="text-center mb-20">
          <span className="font-mono text-sm tracking-[0.2em] uppercase text-[#CB7C89] mb-4 block">Ce Oferim</span>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-[#011936] mb-6">
            Servicii de Psihoterapie
          </h2>
          <p className="font-mono text-[#011936]/70 max-w-2xl mx-auto">
            Fiecare serviciu este creat pentru a-ți oferi exact tipul de suport de care ai nevoie.
          </p>
        </RevealSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <RevealSection key={service.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group h-full bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Header */}
                <div className="relative p-8 bg-gradient-to-br from-[#CB7C89]/10 to-[#603140]/10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#CB7C89] to-[#603140] flex items-center justify-center shadow-lg"
                    >
                      <service.icon className="w-7 h-7 text-[#F1DEDE]" />
                    </motion.div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-[#603140]">{service.duration}</p>
                      <p className="font-mono text-xs text-[#011936]/50">{service.frequency}</p>
                    </div>
                  </div>
                  <h3 className="font-sans text-2xl font-bold text-[#011936] mb-1">{service.title}</h3>
                  <p className="font-mono text-sm text-[#CB7C89]">{service.subtitle}</p>
                </div>

                {/* Content */}
                <div className="p-8 pt-6">
                  <p className="font-mono text-sm text-[#011936]/70 leading-relaxed mb-6">{service.description}</p>

                  <div className="space-y-2">
                    {service.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#CB7C89]" />
                        <span className="font-mono text-xs text-[#011936]/60">{detail}</span>
                      </div>
                    ))}
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
