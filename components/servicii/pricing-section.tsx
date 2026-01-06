"use client"

import { motion } from "framer-motion"
import { RevealSection } from "@/components/reveal-section"
import { MagneticButton } from "@/components/magnetic-button"
import { Check, Star } from "lucide-react"

const packages = [
  {
    name: "Ședință Unică",
    price: "250",
    period: "RON / ședință",
    description: "Pentru cei care doresc să încerce o ședință înainte de a se angaja la un pachet.",
    features: ["50 minute", "Cabinet sau online", "Fără angajament", "Plată după ședință"],
    highlighted: false,
  },
  {
    name: "Pachet Standard",
    price: "900",
    period: "RON / 4 ședințe",
    description: "Cel mai popular pachet. Economisești și ai siguranța continuității.",
    features: [
      "4 ședințe x 50 minute",
      "Economisești 100 RON",
      "Flexibilitate în programare",
      "Suport între ședințe",
      "Materiale de lucru",
    ],
    highlighted: true,
  },
  {
    name: "Terapie Intensivă",
    price: "1.600",
    period: "RON / 8 ședințe",
    description: "Pentru cei care doresc un progres accelerat și o transformare profundă.",
    features: [
      "8 ședințe x 50 minute",
      "Economisești 400 RON",
      "Prioritate în programare",
      "Suport WhatsApp între ședințe",
      "Materiale personalizate",
      "Evaluare progress",
    ],
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F1DEDE] to-[#e8d0d0]" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#CB7C89]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#603140]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <RevealSection className="text-center mb-20">
          <span className="font-mono text-sm tracking-[0.2em] uppercase text-[#CB7C89] mb-4 block">Investiția</span>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-[#011936] mb-6">
            Tarife și Pachete
          </h2>
          <p className="font-mono text-[#011936]/70 max-w-2xl mx-auto">
            Investiția în sănătatea ta mintală este cea mai importantă investiție pe care o poți face.
          </p>
        </RevealSection>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <RevealSection key={pkg.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className={`relative h-full rounded-3xl overflow-hidden ${
                  pkg.highlighted
                    ? "bg-gradient-to-br from-[#603140] to-[#CB7C89] text-[#F1DEDE] shadow-2xl scale-105"
                    : "bg-white/70 backdrop-blur-sm text-[#011936] shadow-lg"
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#F1DEDE]/20">
                      <Star className="w-3 h-3 text-[#F1DEDE]" />
                      <span className="font-mono text-xs text-[#F1DEDE]">Popular</span>
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <h3
                    className={`font-sans text-xl font-bold mb-2 ${pkg.highlighted ? "text-[#F1DEDE]" : "text-[#011936]"}`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`font-mono text-sm mb-6 ${pkg.highlighted ? "text-[#F1DEDE]/70" : "text-[#011936]/60"}`}
                  >
                    {pkg.description}
                  </p>

                  <div className="mb-8">
                    <span
                      className={`font-sans text-5xl font-bold ${pkg.highlighted ? "text-[#F1DEDE]" : "text-[#011936]"}`}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className={`font-mono text-sm ${pkg.highlighted ? "text-[#F1DEDE]/70" : "text-[#011936]/60"}`}
                    >
                      {" "}
                      {pkg.period}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                            pkg.highlighted ? "bg-[#F1DEDE]/20" : "bg-[#CB7C89]/20"
                          }`}
                        >
                          <Check className={`w-3 h-3 ${pkg.highlighted ? "text-[#F1DEDE]" : "text-[#CB7C89]"}`} />
                        </div>
                        <span
                          className={`font-mono text-sm ${pkg.highlighted ? "text-[#F1DEDE]/90" : "text-[#011936]/70"}`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <MagneticButton
                    href="/contact"
                    className={`w-full py-4 rounded-full font-mono text-sm tracking-wider transition-all ${
                      pkg.highlighted
                        ? "bg-[#F1DEDE] text-[#603140] hover:bg-white"
                        : "bg-gradient-to-r from-[#603140] to-[#CB7C89] text-[#F1DEDE] hover:opacity-90"
                    }`}
                  >
                    Programează Acum
                  </MagneticButton>
                </div>
              </motion.div>
            </RevealSection>
          ))}
        </div>

        {/* Additional info */}
        <RevealSection>
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <p className="font-mono text-sm text-[#011936]/70 mb-4">
              <strong className="text-[#603140]">Ședința introductivă de 15 minute este gratuită.</strong> Nu sunt
              costuri ascunse.
            </p>
            <p className="font-mono text-sm text-[#011936]/70">
              Tarifele pentru terapia de cuplu și evaluări psihologice diferă. Te rog să mă contactezi pentru detalii
              personalizate.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
