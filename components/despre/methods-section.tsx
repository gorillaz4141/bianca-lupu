"use client";

import { motion } from "framer-motion";
import { RevealSection } from "@/components/reveal-section";
import { Brain, Sparkles, HeartHandshake, Shield } from "lucide-react";

export function MethodsSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#011936]" />

      {/* Decorative blur */}
      <div className="absolute top-24 left-10 w-72 h-72 bg-[#CB7C89]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-24 right-10 w-96 h-96 bg-[#603140]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* INTRO */}
        <RevealSection className="text-center mb-20">
          <span className="font-mono text-sm tracking-[0.2em] uppercase text-[#CB7C89] block mb-4">
            Metodologie
          </span>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-[#F1DEDE] mb-6">
            Cum lucrăm împreună
          </h2>
          <p className="font-mono text-[#F1DEDE]/70 max-w-2xl mx-auto">
            Abordarea mea este un mix personalizat de tehnici validate
            științific și metode creative, adaptate ritmului tău unic.
          </p>
        </RevealSection>

        {/* METHODS CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "Psihoterapie Integrativă",
              content: [
                "Nu aplic o singură rețetă, ci combin strategii din mai multe școli de terapie.",
                "Primești un plan flexibil, construit special pentru structura ta emoțională.",
              ],
            },
            {
              title: "Psihoterapie Experiențială Unificatoare",
              content: [
                "Lucrăm „aici și acum” prin exerciții practice, joc de rol și metaforă.",
                "Schimbarea este simțită în corp și emoții, nu doar în gânduri.",
              ],
            },
            {
              title: "Psihosexologie & Art-Terapie",
              content: [
                "Abordăm intimitatea, identitatea și emoțiile profunde prin dialog și expresie simbolică.",
                "Eliberarea emoțiilor grele într-un mod blând, dincolo de cuvinte.",
              ],
            },
          ].map((item, i) => (
            <RevealSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 h-full"
              >
                <h3 className="font-sans text-xl font-bold text-[#F1DEDE] mb-4">
                  {item.title}
                </h3>
                <ul className="space-y-4">
                  {item.content.map((text, idx) => (
                    <li
                      key={idx}
                      className="font-mono text-sm text-[#F1DEDE]/75 leading-relaxed"
                    >
                      • {text}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </RevealSection>
          ))}
        </div>

        {/* BENEFITS */}
        <RevealSection className="mb-24">
          <div className="bg-white/5 rounded-3xl p-10 border border-white/10 max-w-5xl mx-auto">
            <h3 className="font-sans text-2xl font-bold text-[#F1DEDE] mb-6 text-center">
              Beneficiile cheie
            </h3>
            <ul className="grid md:grid-cols-3 gap-6">
              {[
                "Flexibilitate totală – intervenția este construită special pentru tine.",
                "Abordare holistică – minte, corp și spirit, privite ca un întreg.",
                "Relație terapeutică sigură – vindecarea are loc prin conexiune.",
              ].map((b, i) => (
                <li
                  key={i}
                  className="font-mono text-sm text-[#F1DEDE]/80 leading-relaxed"
                >
                  • {b}
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        {/* THEORETICAL PILLARS */}
        <RevealSection className="mb-24">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Abordarea Umanistă",
                process: "Respect, bunătate și relație de egalitate.",
                benefit: "Te simți acceptat necondiționat și în siguranță.",
              },
              {
                title: "Teorii Psihanalitice",
                process: "Explorarea rădăcinilor profunde și a trecutului.",
                benefit: "Înțelegi «de ce-urile» comportamentelor tale.",
              },
              {
                title: "Cognitiv-Comportamental",
                process: "Tehnici concrete pentru schimbarea gândurilor.",
                benefit: "Instrumente clare pentru stres și anxietate.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-3xl p-8 border border-white/10"
              >
                <h4 className="font-sans text-lg font-bold text-[#F1DEDE] mb-3">
                  {p.title}
                </h4>
                <p className="font-mono text-sm text-[#F1DEDE]/70 mb-2">
                  <span className="text-[#CB7C89]">Ce aduce:</span> {p.process}
                </p>
                <p className="font-mono text-sm text-[#F1DEDE]/80">
                  <span className="text-[#CB7C89]">Beneficiul tău:</span>{" "}
                  {p.benefit}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* VALUES */}
        <RevealSection>
          <h3 className="text-center font-sans text-2xl font-bold text-[#F1DEDE] mb-10">
            Valorile pe care clădim schimbarea
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Confidențialitate",
                text: "Tot ce împărtășești rămâne între noi. Spațiul terapeutic este un sanctuar.",
              },
              {
                icon: HeartHandshake,
                title: "Empatie și Acceptare",
                text: "Te ascult fără judecată, cu compasiune autentică.",
              },
              {
                icon: Brain,
                title: "Parteneriat",
                text: "Nu suntem expert și pacient, ci o echipă.",
              },
              {
                icon: Sparkles,
                title: "Personalizare",
                text: "Integrez știința și creativitatea pentru nevoile tale.",
              },
              {
                icon: HeartHandshake,
                title: "Siguranță Emoțională",
                text: "Un spațiu stabil unde vulnerabilitatea devine putere.",
              },
            ].map((v, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-3xl p-6 border border-white/10"
              >
                <v.icon className="w-6 h-6 text-[#CB7C89] mb-4" />
                <h4 className="font-sans text-lg font-semibold text-[#F1DEDE] mb-2">
                  {v.title}
                </h4>
                <p className="font-mono text-sm text-[#F1DEDE]/75">{v.text}</p>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
