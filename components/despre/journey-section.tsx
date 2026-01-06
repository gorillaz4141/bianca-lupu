"use client"

import { RevealSection } from "@/components/reveal-section"
import { TextRevealScroll } from "@/components/text-reveal-scroll"
import { Compass, Users, BookHeart, Sparkles } from "lucide-react"

const milestones = [
  {
    icon: Sparkles,
    year: "Începuturile",
    title: "Fascinația pentru psihologia umană",
    description:
      "Încă din adolescență am fost fascinată de complexitatea minții umane și de modul în care trăirile noastre interioare ne modelează viața.",
  },
  {
    icon: BookHeart,
    year: "Formarea",
    title: "Studii și specializări intensive",
    description:
      "Am dedicat ani de studiu pentru a înțelege profund mecanismele psihice și a învăța metode validate științific de intervenție terapeutică.",
  },
  {
    icon: Users,
    year: "Practica",
    title: "Peste 200 de clienți ajutați",
    description:
      "Fiecare persoană cu care am lucrat m-a învățat ceva nou despre reziliența umană și despre puterea transformării.",
  },
  {
    icon: Compass,
    year: "Misiunea",
    title: "Ghidarea către echilibru",
    description:
      "Astăzi, misiunea mea este să creez un spațiu sigur unde fiecare persoană să se poată regăsi pe sine și să își descopere puterea interioară.",
  },
]

export function JourneySection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8d0d0] to-[#F1DEDE]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <RevealSection className="text-center mb-20">
          <span className="font-mono text-sm tracking-[0.2em] uppercase text-[#CB7C89] mb-4 block">Călătoria Mea</span>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-[#011936] mb-8">
            Cum am ajuns aici
          </h2>
        </RevealSection>

        <div className="max-w-4xl mx-auto mb-20">
          <TextRevealScroll
            text="Nu am ales psihoterapia doar ca profesie. Am ales-o ca mod de viață, ca vocație care îmi permite să fiu martor la cele mai profunde transformări umane. Fiecare zi în acest domeniu îmi confirmă că vindecarea este posibilă și că nu trebuie să trecem prin viață singuri."
            className="font-sans text-xl md:text-2xl lg:text-3xl font-medium text-[#011936] leading-relaxed text-center"
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#CB7C89] via-[#603140] to-[#CB7C89] hidden md:block" />

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <RevealSection key={milestone.title} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
                <div
                  className={`relative flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <milestone.icon className="w-6 h-6 text-[#CB7C89]" />
                        <span className="font-mono text-sm tracking-wider text-[#603140]">{milestone.year}</span>
                      </div>
                      <h3 className="font-sans text-2xl font-bold text-[#011936] mb-3">{milestone.title}</h3>
                      <p className="font-mono text-[#011936]/70 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#CB7C89] to-[#603140] flex items-center justify-center shadow-xl">
                      <div className="w-8 h-8 rounded-full bg-[#F1DEDE]" />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
