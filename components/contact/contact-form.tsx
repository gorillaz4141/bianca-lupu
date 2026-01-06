"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { RevealSection } from "@/components/reveal-section"
import { Send, Loader2, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <RevealSection>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-[#CB7C89] to-[#603140] flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-[#F1DEDE]" />
          </motion.div>
          <h3 className="font-sans text-2xl font-bold text-[#011936] mb-4">Mesaj trimis cu succes!</h3>
          <p className="font-mono text-[#011936]/70">
            Îți mulțumesc pentru mesaj. Te voi contacta în cel mult 24 de ore.
          </p>
        </motion.div>
      </RevealSection>
    )
  }

  return (
    <RevealSection>
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl">
        <h2 className="font-sans text-2xl font-bold text-[#011936] mb-2">Trimite un mesaj</h2>
        <p className="font-mono text-sm text-[#011936]/60 mb-8">
          Completează formularul și te contactez în cel mult 24 de ore.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block font-mono text-sm text-[#011936] mb-2">
                Nume complet *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#F1DEDE]/50 border border-[#CB7C89]/30 text-[#011936] font-mono text-sm focus:outline-none focus:border-[#603140] focus:ring-2 focus:ring-[#603140]/20 transition-all"
                placeholder="Numele tău"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-mono text-sm text-[#011936] mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#F1DEDE]/50 border border-[#CB7C89]/30 text-[#011936] font-mono text-sm focus:outline-none focus:border-[#603140] focus:ring-2 focus:ring-[#603140]/20 transition-all"
                placeholder="email@exemplu.ro"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block font-mono text-sm text-[#011936] mb-2">
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 rounded-xl bg-[#F1DEDE]/50 border border-[#CB7C89]/30 text-[#011936] font-mono text-sm focus:outline-none focus:border-[#603140] focus:ring-2 focus:ring-[#603140]/20 transition-all"
              placeholder="07XX XXX XXX"
            />
          </div>

          <div>
            <label htmlFor="service" className="block font-mono text-sm text-[#011936] mb-2">
              Serviciu dorit
            </label>
            <select
              id="service"
              name="service"
              className="w-full px-4 py-3 rounded-xl bg-[#F1DEDE]/50 border border-[#CB7C89]/30 text-[#011936] font-mono text-sm focus:outline-none focus:border-[#603140] focus:ring-2 focus:ring-[#603140]/20 transition-all"
            >
              <option value="">Selectează un serviciu</option>
              <option value="individual">Terapie Individuală</option>
              <option value="couple">Terapie de Cuplu</option>
              <option value="online">Terapie Online</option>
              <option value="evaluation">Evaluare Psihologică</option>
              <option value="intro">Ședință Introductivă (gratuită)</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block font-mono text-sm text-[#011936] mb-2">
              Mesaj *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-[#F1DEDE]/50 border border-[#CB7C89]/30 text-[#011936] font-mono text-sm focus:outline-none focus:border-[#603140] focus:ring-2 focus:ring-[#603140]/20 transition-all resize-none"
              placeholder="Spune-mi pe scurt cu ce te pot ajuta..."
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-[#603140] to-[#CB7C89] text-[#F1DEDE] font-mono text-sm tracking-wider rounded-full shadow-xl hover:shadow-2xl transition-shadow disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Se trimite...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Trimite Mesajul
              </>
            )}
          </motion.button>

          <p className="font-mono text-xs text-[#011936]/50 text-center">
            Prin trimiterea acestui formular, ești de acord cu{" "}
            <a href="/confidentialitate" className="text-[#603140] underline">
              Politica de Confidențialitate
            </a>
            .
          </p>
        </form>
      </div>
    </RevealSection>
  )
}
