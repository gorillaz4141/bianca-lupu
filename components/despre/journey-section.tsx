"use client"

import { RevealSection } from "@/components/reveal-section"
import { TextRevealScroll } from "@/components/text-reveal-scroll"
import { Compass, BookHeart, Sparkles, Palette, Globe } from "lucide-react"

const milestones = [
  {
    icon: Sparkles,
    year: "Începutul",
    title: "Înțelegerea pașilor mici",
    description:
      "Călătoria mea a început cu fascinația pentru modul în care ne construim ca oameni. Prin experiența în Grecia și lucrul în terapia ABA, am învățat să observ detaliile fine ale comportamentului și importanța răbdării. Fiecare mare schimbare începe cu un pas discret, dar sigur.",
  },
  {
    icon: BookHeart,
    year: "Formarea",
    title: "Știință și simțire în echilibru",
    description:
      "Masterul în Experiențială (PEU) și formarea în Psihoterapie Integrativă mi-au oferit limbajul prin care mintea și corpul încep să dialogheze. Aleg aceste școli pentru că pun preț pe trăirea de „aici și acum”, transformând PSIHOterapia din discuție în experiență vie de regăsire.",
  },
  {
    icon: Globe,
    year: "Roma",
    title: "Orizonturi noi asupra profunzimii umane",
    description:
      "Specializarea în Psihosexologie la Sapienza Università di Roma a fost momentul în care am înțeles că sănătatea emoțională e incompletă fără acceptarea identității și a intimității noastre. Abordez teme sensibile cu deschidere și profesionalism, într-un spațiu fără tabuuri și fără judecată.",
  },
  {
    icon: Palette,
    year: "Arta ca punte",
    title: "Creativitatea ca resursă de vindecare",
    description:
      "Cred cu tărie că acolo unde cuvintele se opresc, începe vindecarea prin simbol. Prin Art-Terapie, culoare și metaforă, scoatem la lumină emoții pe care mintea le ține închise. Nu e nevoie de talent — doar de curajul de a simți.",
  },
  {
    icon: Compass,
    year: "Misiunea",
    title: "Să te însoțesc spre întregire",
    description:
      "Misiunea mea este să te ajut să îți recapeți liniștea interioară și să îți construiești o reziliență autentică. La final, îmi doresc să simți că ai energie, claritate și instrumente reale pentru o viață trăită cu sens.",
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
            text="Dincolo de etichete, te văd pe tine. Nu am ales PSIHOterapia doar ca profesie, ci ca o formă de prezență: un spațiu în care durerea poate fi ținută în siguranță, iar schimbarea poate prinde rădăcini."
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

        <RevealSection delay={0.4}>
          <p className="mt-16 text-center font-sans text-base md:text-lg italic text-[#011936]/70 max-w-3xl mx-auto">
            Fiecare etapă a studiilor mele a fost o piesă de puzzle care m-a ajutat să înțeleg întregul care ești tu
            astăzi.
          </p>
        </RevealSection>
      </div>
    </section>
  )
}
