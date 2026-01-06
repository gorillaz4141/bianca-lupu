"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { RevealSection } from "@/components/reveal-section"
import { MagneticButton } from "@/components/magnetic-button"
import { ArrowRight } from "lucide-react"

export function TestimonialsCta() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#603140] via-[#011936] to-[#011936]" />

      {/* Decorative image */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
        <Image src="/images/poza3.jpeg" alt="" fill className="object-cover object-left" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#011936] to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        <RevealSection>
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-3 bg-[#CB7C89]/20 backdrop-blur-sm rounded-full font-mono text-sm text-[#F1DEDE] mb-8 border border-[#CB7C89]/30"
            >
              Următoarea Poveste Poate Fi a Ta
            </motion.span>

            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-[#F1DEDE] mb-6 text-balance">
              Ești Gata să Scrii
              <span className="block text-[#CB7C89]">Propria Poveste?</span>
            </h2>

            <p className="font-mono text-lg text-[#F1DEDE]/70 max-w-2xl mx-auto mb-12">
              Nu trebuie să fii în criză pentru a începe terapia. Fiecare pas mic către înțelegerea de sine este o
              victorie. Sunt aici să te însoțesc.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#F1DEDE] text-[#011936] rounded-full font-mono font-medium hover:bg-white transition-colors"
                >
                  Programează o ședință
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="/servicii"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#F1DEDE]/30 text-[#F1DEDE] rounded-full font-mono font-medium hover:bg-[#F1DEDE]/10 transition-colors"
                >
                  Descoperă serviciile
                </Link>
              </MagneticButton>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
