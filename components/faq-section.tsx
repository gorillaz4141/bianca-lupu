"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RevealSection } from "./reveal-section"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Cum știu că am nevoie de terapie?",
    answer:
      "Dacă te simți copleșit, anxios, trist sau dacă anumite gânduri sau comportamente îți afectează viața de zi cu zi, terapia poate fi benefică. Nu trebuie să aștepți o criză pentru a cere ajutor.",
  },
  {
    question: "Cât durează o ședință de terapie?",
    answer:
      "O ședință standard durează 50-60 de minute. Frecvența ședințelor este discutată împreună și poate varia în funcție de nevoile tale, de obicei săptămânal sau la două săptămâni.",
  },
  {
    question: "Ce metode de terapie folosești?",
    answer:
      "Folosesc în principal Terapie Cognitiv-Comportamentală (CBT) și Schema Therapy, adaptate nevoilor tale individuale. Aceste abordări sunt validate științific și focalizate pe rezultate concrete.",
  },
  {
    question: "Oferi ședințe online?",
    answer:
      "Da, ofer ședințe atât în cabinet în București, cât și online prin videoconferință. Ședințele online sunt la fel de eficiente și îți oferă flexibilitate.",
  },
  {
    question: "Cât costă o ședință?",
    answer:
      "Tarifele variază în funcție de tipul de ședință (individuală, cuplu, evaluare). Te invit să mă contactezi pentru detalii sau să programezi o ședință introductivă gratuită de 15 minute.",
  },
  {
    question: "Este confidențial ce discutăm în terapie?",
    answer:
      "Da, absolut. Confidențialitatea este un principiu fundamental în terapie. Tot ce discutăm rămâne între noi, cu excepția situațiilor prevăzute de lege (pericol iminent pentru tine sau alții).",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8d0d0] to-[#F1DEDE]" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#CB7C89]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#603140]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
        <RevealSection className="text-center mb-16">
          <span className="font-mono text-sm tracking-[0.2em] uppercase text-[#CB7C89] mb-4 block">
            Întrebări Frecvente
          </span>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-[#011936]">Ai întrebări?</h2>
        </RevealSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <RevealSection key={index} delay={index * 0.05}>
              <motion.div
                initial={false}
                className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg"
              >
                <motion.button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.8)" }}
                >
                  <span className="font-sans text-lg font-semibold text-[#011936] pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#CB7C89] to-[#603140] flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4 text-[#F1DEDE]" />
                  </motion.div>
                </motion.button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-6">
                        <p className="font-mono text-[#011936]/70 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}
