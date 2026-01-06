"use client";

import { motion } from "framer-motion";
import { RevealSection } from "./reveal-section";
import { TextRevealScroll } from "./text-reveal-scroll";
import { Heart, Brain, CloudRain, Flame } from "lucide-react";

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

// Add a custom keyframes animation for "shiny border" as inline style here:
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
      {/* Inject shiny border keyframes style */}
      <style>{shinyKeyframes}</style>
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8d0d0] to-[#F1DEDE]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <RevealSection className="text-center mb-12 sm:mb-16 md:mb-20">
            <span className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-[#CB7C89] mb-3 sm:mb-4 block">
              Înțeleg prin ce treci
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#011936] mb-4 sm:mb-6">
              Te simți copleșit?
            </h2>
          </RevealSection>

          <div className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <TextRevealScroll
              text="Când viața devine prea mult de purtat singur, când gândurile te țin treaz noaptea, când simți că pierzi controlul... e normal. Nu ești slab. Nu ești stricat. Ești uman, și ai nevoie de sprijin."
              className="font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-[#011936] leading-relaxed text-center px-2"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {problems.map((problem, index) => (
              <RevealSection key={problem.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  {/* Custom blue shiny animated border */}
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
                      // Sparkle effect on hover
                      boxShadow:
                        "0 0 12px 1px #1976d2aa, 0 0 32px 2px #60a4ff44",
                    }}
                  />
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#CB7C89] to-[#603140] opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-sm" />
                  <div className="absolute inset-[1px] rounded-3xl bg-white/90 -z-10" />

                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#CB7C89]/20 to-[#603140]/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    <problem.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#603140]" />
                  </div>
                  <h3 className="font-sans text-lg sm:text-xl font-semibold text-[#011936] mb-2 sm:mb-3">
                    {problem.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-[#011936]/60 leading-relaxed">
                    {problem.description}
                  </p>
                </motion.div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
