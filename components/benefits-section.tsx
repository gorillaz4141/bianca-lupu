"use client";

import { motion } from "framer-motion";
import { RevealSection } from "./reveal-section";
import {
  Heart,
  Compass,
  Shield,
  Sun,
  Users,
  Sparkles,
  Brain,
  Leaf,
  Palette,
} from "lucide-react";

const benefits = [
  {
    icon: Compass,
    title: "Claritate în intimitate și relații",
    description:
      "O perspectivă deschisă și profesionistă asupra psihosexologiei, pentru a-ți trăi sexualitatea și relațiile fără tabuuri, vinovăție sau rușine.",
  },
  {
    icon: Heart,
    title: "Iubire de sine și auto-compasiune",
    description:
      "Trecem de la critică la blândețe. Construim o relație de prietenie și respect cu tine însuți.",
  },
  {
    icon: Users,
    title: "Comunicare autentică",
    description:
      "Îți dezvolți capacitatea de a-ți exprima nevoile și limitele clar, blând și asertiv.",
  },
  {
    icon: Palette,
    title: "Lucru experiențial & art-terapie",
    description:
      "Când cuvintele nu sunt suficiente, folosim creativitatea pentru a debloca emoții profunde.",
  },
  {
    icon: Leaf,
    title: "Echilibru minte–corp",
    description:
      "Învățăm să ascultăm corpul, să transformăm tensiunea în relaxare și stresul în prezență.",
  },
  {
    icon: Brain,
    title: "Înțelegerea propriului parcurs",
    description:
      "Rescriem tipare vechi din copilărie care nu îți mai servesc viața de adult.",
  },
  {
    icon: Shield,
    title: "Reziliență emoțională",
    description:
      "Îți construiești propria plasă de siguranță interioară pentru a face față furtunilor vieții.",
  },
  {
    icon: Sun,
    title: "Recuperarea energiei vitale",
    description:
      "Identificăm blocajele care te consumă și redescoperim vitalitatea și entuziasmul.",
  },
  {
    icon: Sparkles,
    title: "Un spațiu de siguranță absolută",
    description:
      "Un cadru fără judecată, rafinat prin studii internaționale și susținut de empatie autentică.",
  },
];

export function BenefitsSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F1DEDE] to-[#e8d0d0]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* HEADER */}
        <RevealSection className="text-center mb-20">
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#CB7C89] block mb-4">
            Beneficii
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#011936] mb-6">
            Ce câștigi lucrând cu mine
          </h2>
          <p className="font-mono text-sm sm:text-base text-[#011936]/70 max-w-3xl mx-auto leading-relaxed">
            Terapia este mai mult decât suport emoțional. Este un proces de
            clarificare, reconectare și transformare profundă — adaptat ritmului
            și nevoilor tale.
          </p>
        </RevealSection>

        {/* BENEFITS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <RevealSection key={benefit.title} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-7 sm:p-8 shadow-lg hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#CB7C89] to-[#603140] flex items-center justify-center mb-5 shadow-md">
                  <benefit.icon className="w-6 h-6 text-[#F1DEDE]" />
                </div>

                <h3 className="font-sans text-lg sm:text-xl font-semibold text-[#011936] mb-3">
                  {benefit.title}
                </h3>
                <p className="font-mono text-sm text-[#011936]/65 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            </RevealSection>
          ))}
        </div>

        {/* CLOSING LINE */}
        <RevealSection>
          <p className="mt-20 text-center font-sans text-lg sm:text-xl italic text-[#011936]/60 max-w-4xl mx-auto">
            Nu este vorba despre a „repara” ceva.
            <br />
            Este despre a-ți aminti cine ești și a trăi în acord cu tine.
          </p>
        </RevealSection>
      </div>
    </section>
  );
}
