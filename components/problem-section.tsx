"use client";

import { motion } from "framer-motion";
import { RevealSection } from "./reveal-section";
import { TextRevealScroll } from "./text-reveal-scroll";
import {
  Heart,
  Brain,
  CloudRain,
  Flame,
  Users,
  Compass,
  Puzzle,
} from "lucide-react";

const problems = [
  {
    icon: CloudRain,
    title: "Anxietate",
    description:
      "Gândurile care nu se opresc, grija constantă, senzația de neliniște...",
  },
  {
    icon: Brain,
    title: "Stres & Burnout",
    description:
      "Epuizarea care te face să simți că nu mai poți face față zilelor...",
  },
  {
    icon: Heart,
    title: "Relații Dificile",
    description:
      "Conflictele care se repetă, distanța emoțională, neînțelegerile...",
  },
  {
    icon: Flame,
    title: "Depresie",
    description:
      "Lipsa energiei, tristețea prelungită, sentimentul de gol interior...",
  },
];

const shinyKeyframes = `
@keyframes shinyBorder {
  0% {
    background-position: 0% 50%;
    filter: brightness(0.7) drop-shadow(0 0 8px #011936);
  }
  40% {
    filter: brightness(0.75) drop-shadow(0 0 16px #011936);
  }
  100% {
    background-position: 100% 50%;
    filter: brightness(0.8) drop-shadow(0 0 8px #011936);
  }
}
`;

export function ProblemSection() {
  return (
    <>
      <style>{shinyKeyframes}</style>

      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8d0d0] to-[#F1DEDE]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* INTRO */}
          <RevealSection className="text-center mb-14 sm:mb-20">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#CB7C89] block mb-4">
              Înțeleg prin ce treci
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#011936] text-left">
              Te simți copleșit?
            </h2>
          </RevealSection>

          <div className="max-w-4xl mx-auto mb-16 sm:mb-24">
            <TextRevealScroll
              text="Când viața devine prea mult de purtat singur, când gândurile te țin treaz noaptea, când simți că pierzi controlul... e normal. Nu ești slab. Nu ești stricat. Ești uman, și ai nevoie de sprijin."
              className="font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-[#011936] leading-relaxed text-center"
            />
          </div>

          {/* PROBLEM CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {problems.map((problem, index) => (
              <RevealSection key={problem.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl"
                >
                  <div
                    className="absolute inset-0 rounded-3xl pointer-events-none -z-10"
                    style={{
                      background:
                        "linear-gradient(126deg, #60a4ff 0%, #1976d2 30%, #1976d2 70%, #60a4ff 100%)",
                      backgroundSize: "200% 200%",
                      border: "2.5px solid transparent",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "exclude",
                      animation: "shinyBorder 2.5s linear infinite",
                      boxShadow:
                        "0 0 12px 1px #1976d2aa, 0 0 32px 2px #60a4ff44",
                    }}
                  />
                  <div className="absolute inset-[1px] rounded-3xl bg-white/90 -z-10" />

                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#CB7C89]/20 to-[#603140]/20 flex items-center justify-center mb-5">
                    <problem.icon className="w-6 h-6 text-[#603140]" />
                  </div>

                  <h3 className="font-sans text-lg font-semibold text-[#011936] mb-2">
                    {problem.title}
                  </h3>
                  <p className="font-mono text-sm text-[#011936]/60 leading-relaxed">
                    {problem.description}
                  </p>
                </motion.div>
              </RevealSection>
            ))}
          </div>

          {/* HOW I CAN SUPPORT YOU */}
          <RevealSection>
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#011936] mb-12">
              Cum te pot sprijini…
            </h3>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-12">
            {/* PERSONAL */}
            <RevealSection>
              <div>
                <h4 className="flex items-center gap-3 font-semibold text-xl text-[#011936] mb-4">
                  <Heart className="text-[#CB7C89]" />
                  Sfera Personală & Emoțională
                </h4>
                <ul className="space-y-2 font-mono text-sm text-[#011936]/70">
                  <li>Anxietate și atacuri de panică</li>
                  <li>Depresie și apatie</li>
                  <li>Managementul stresului și burnout</li>
                  <li>Stima de sine și criticul interior</li>
                  <li>Traume și evenimente de viață</li>
                </ul>
              </div>
            </RevealSection>

            {/* RELATIONAL */}
            <RevealSection>
              <div>
                <h4 className="flex items-center gap-3 font-semibold text-xl text-[#011936] mb-4">
                  <Users className="text-[#CB7C89]" />
                  Sfera Relațională & de Cuplu
                </h4>
                <ul className="space-y-2 font-mono text-sm text-[#011936]/70">
                  <li>Dificultăți de comunicare</li>
                  <li>Infidelitate și restabilirea încrederii</li>
                  <li>Doliu și pierdere</li>
                  <li>Dinamici familiale și limite sănătoase</li>
                </ul>
              </div>
            </RevealSection>

            {/* DEVELOPMENT */}
            <RevealSection>
              <div>
                <h4 className="flex items-center gap-3 font-semibold text-xl text-[#011936] mb-4">
                  <Compass className="text-[#CB7C89]" />
                  Adaptare & Dezvoltare Personală
                </h4>
                <ul className="space-y-2 font-mono text-sm text-[#011936]/70">
                  <li>Criză de identitate</li>
                  <li>Managementul emoțiilor dificile</li>
                  <li>Tranziții majore de viață</li>
                  <li>Luarea deciziilor importante</li>
                </ul>
              </div>
            </RevealSection>

            {/* SPECIFIC */}
            <RevealSection>
              <div>
                <h4 className="flex items-center gap-3 font-semibold text-xl text-[#011936] mb-4">
                  <Puzzle className="text-[#CB7C89]" />
                  Problematici Specifice
                </h4>
                <ul className="space-y-2 font-mono text-sm text-[#011936]/70">
                  <li>Tulburări alimentare</li>
                  <li>Adicții și dependențe</li>
                  <li>Simptome psihosomatice</li>
                </ul>
              </div>
            </RevealSection>
          </div>

          {/* POETIC LINE */}
          <RevealSection>
            <p className="mt-20 text-center font-sans text-lg italic text-[#011936]/60 max-w-3xl mx-auto">
              Nu toți clienții vin pentru o „problemă”.
              <br />
              Unii vin pentru creștere, claritate și o relație mai bună cu sine.
            </p>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
