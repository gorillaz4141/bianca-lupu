"use client"

import { motion } from "framer-motion"
import { RevealSection } from "@/components/reveal-section"
import { MagneticButton } from "@/components/magnetic-button"

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
            Tarife și Modalități de Plată
          </h2>
          <p className="font-mono text-[#011936]/70 max-w-2xl mx-auto">
            Investiția în echilibrul tău este o alegere practică: claritate, consecvență și un proces construit pe
            măsura ta.
          </p>
        </RevealSection>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <RevealSection>
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <h3 className="font-sans text-2xl font-bold text-[#011936] mb-4">Tarife</h3>
              <p className="font-mono text-[#011936]/70 leading-relaxed">
                Investiția în echilibrul tău este de <strong className="text-[#603140]">???? RON</strong> / ședință{" "}
                <span className="text-[#011936]/70">(50 minute)</span>.
              </p>
              <p className="font-mono text-[#011936]/70 leading-relaxed mt-4">
                Pentru confortul tău, poți alege una dintre următoarele variante:
              </p>
              <ul className="mt-5 space-y-3">
                <li className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CB7C89] flex-shrink-0" />
                  <span className="font-mono text-sm text-[#011936]/80">
                    <strong className="text-[#011936]">Plată per ședință</strong>: se efectuează la finalul fiecărei
                    întâlniri (numerar sau transfer).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CB7C89] flex-shrink-0" />
                  <span className="font-mono text-sm text-[#011936]/80">
                    <strong className="text-[#011936]">Abonament lunar</strong>: plata se face integral la începutul
                    lunii pentru toate ședințele programate.
                  </span>
                </li>
              </ul>
            </div>
          </RevealSection>

          <RevealSection delay={0.1}>
            <div className="bg-[#011936] rounded-3xl p-8 shadow-2xl">
              <h3 className="font-sans text-2xl font-bold text-[#F1DEDE] mb-4">De ce abonament lunar?</h3>
              <p className="font-mono text-[#F1DEDE]/70 leading-relaxed">
                Recomand plata la începutul lunii deoarece reprezintă un angajament ferm față de propriul proces de
                schimbare.
              </p>
              <ul className="mt-5 space-y-3">
                <li className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CB7C89] flex-shrink-0" />
                  <span className="font-mono text-sm text-[#F1DEDE]/80">
                    <strong className="text-[#F1DEDE]">Prioritizare</strong>: îți rezervi prioritar intervalul orar
                    preferat în agenda mea.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CB7C89] flex-shrink-0" />
                  <span className="font-mono text-sm text-[#F1DEDE]/80">
                    <strong className="text-[#F1DEDE]">Consecvență</strong>: te ajută să rămâi motivat și să eviți
                    amânările care încetinesc progresul.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CB7C89] flex-shrink-0" />
                  <span className="font-mono text-sm text-[#F1DEDE]/80">
                    <strong className="text-[#F1DEDE]">Simplitate</strong>: scapi de grija plății după fiecare întâlnire
                    și rămâi în experiență.
                  </span>
                </li>
              </ul>
            </div>
          </RevealSection>
        </div>

        {/* Additional info */}
        <RevealSection>
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <p className="font-mono text-sm text-[#011936]/70 mb-3">
              <strong className="text-[#603140]">Ședința introductivă de 15 minute este gratuită.</strong> Este un spațiu
              scurt de cunoaștere, ca să vezi dacă te simți în siguranță și dacă stilul meu ți se potrivește.
            </p>
            <p className="font-mono text-sm text-[#011936]/70 mb-3">
              <strong className="text-[#603140]">Anulare/Reprogramare:</strong> cu minimum 24 de ore înainte; în caz
              contrar ședința va fi considerată efectuată și va fi achitată.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <MagneticButton
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#603140] to-[#CB7C89] text-[#F1DEDE] font-mono text-sm tracking-wider rounded-full shadow-xl hover:shadow-2xl transition-shadow w-full sm:w-auto"
              >
                Programează o Ședință
              </MagneticButton>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:0765844042"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#603140] text-[#603140] font-mono text-sm tracking-wider rounded-full hover:bg-[#603140] hover:text-[#F1DEDE] transition-colors w-full sm:w-auto"
              >
                Sună-mă direct
              </motion.a>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
