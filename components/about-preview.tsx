"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { RevealSection } from "./reveal-section";
import { MagneticButton } from "./magnetic-button";

export function AboutPreview() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F1DEDE] to-[#e8d0d0]" />

      {/* Decorative blur */}
      <div className="absolute top-32 right-0 w-[420px] h-[420px] bg-[#CB7C89]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* TOP — APPROACH / MANIFEST */}
        <RevealSection>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="font-sans text-lg sm:text-xl md:text-2xl text-[#011936] leading-relaxed mb-6">
              Nu cred în trasee universale.
            </p>

            <p className="font-mono text-sm sm:text-base text-[#011936]/70 leading-relaxed mb-6">
              Formarea mea integrativă îmi permite să combin tehnici din
              diferite școli de terapie — cognitiv-comportamentală, umanistă sau
              dinamică — pentru a crea un plan de lucru adaptat stilului tău
              unic de personalitate.
            </p>

            <p className="font-mono text-sm sm:text-base text-[#011936]/70 leading-relaxed mb-6">
              Privesc omul ca pe un întreg — minte, corp și spirit — și urmăresc
              unificarea acestor părți pentru o viață trăită cu sens și
              autenticitate.
            </p>

            <p className="font-mono text-sm sm:text-base text-[#011936]/70 leading-relaxed">
              În cabinetul meu, terapia nu este doar o discuție, ci o experiență
              de regăsire. Explorăm împreună nu doar dificultățile, ci și
              resursele tale creative de vindecare.
            </p>
          </div>
        </RevealSection>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* TEXT */}
          <div>
            <RevealSection>
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#CB7C89] mb-4 block">
                Despre mine
              </span>

              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#011936] mb-6">
                Dincolo de etichete, te văd pe tine.
              </h3>

              <div className="space-y-5 font-mono text-sm sm:text-base text-[#011936]/70 leading-relaxed">
                <p>
                  Cred că fiecare om este o poveste care merită citită cu
                  răbdare și fără judecată. Drumul meu profesional nu a început
                  doar în sălile de curs, ci în momentele de conexiune autentică
                  trăite alături de minți și inimi diverse.
                </p>

                <p>
                  Am învățat despre puritate și structură lucrând cu copii care
                  văd lumea diferit, despre curaj alături de tineri care își
                  caută locul și despre reziliență ascultând persoanele mature
                  care navighează prin schimbările vieții.
                </p>

                <p>
                  În cabinetul meu, nu ești un diagnostic, ci un întreg care
                  caută să se reîntregească. Sunt aici să te însoțesc cu
                  blândețe și profesionalism, într-un spațiu sigur.
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={0.15}>
              <h4 className="font-sans text-xl font-semibold text-[#011936] mt-12 mb-4">
                Un spațiu pentru tine, așa cum ești
              </h4>

              <div className="space-y-5 font-mono text-sm sm:text-base text-[#011936]/70 leading-relaxed">
                <p>
                  Simte-te confortabil. Respiră. În universul agitat de zi cu
                  zi, cabinetul meu este locul unde timpul încetinește.
                </p>

                <p>
                  Vindecarea începe acolo unde se termină nevoia de a purta
                  măști. Te invit într-un parteneriat bazat pe încredere
                  reciprocă, unde nu trebuie să parcurgi acest drum singur.
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={0.3}>
              <p className="font-mono text-sm sm:text-base text-[#011936]/70 leading-relaxed mt-10">
                Formarea mea m-a purtat de la rigoarea academică din București
                la experiențe internaționale în Atena și Roma. Sunt terapeut
                format în Psihoterapie Integrativă, cu studii în psihoterapie
                experiențială unificatoare și psihosexologie.
              </p>

              <p className="font-mono text-sm sm:text-base text-[#011936]/70 leading-relaxed mt-4">
                Terapia, pentru mine, este un proces viu — unde neuroștiința,
                mindfulness-ul și prezența autentică se întâlnesc într-un spațiu
                sigur, rafinat prin studiu și îmbogățit prin empatie.
              </p>
            </RevealSection>

            <RevealSection delay={0.45}>
              <MagneticButton
                href="/despre"
                className="inline-flex items-center gap-2 mt-10 font-mono text-sm text-[#603140] group"
              >
                <span className="border-b-2 border-[#603140] group-hover:border-[#CB7C89] transition-colors">
                  Citește povestea completă
                </span>
                <span className="group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </MagneticButton>
            </RevealSection>
          </div>

          {/* IMAGE */}
          <RevealSection direction="right">
            <div className="relative max-w-md mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-8 border border-dashed border-[#CB7C89]/30 rounded-full"
              />

              <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/images/poza1.jpeg"
                  alt="Bianca Lupu - Psihoterapeut"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 40vw"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl max-w-[240px]">
                <p className="font-sans text-sm italic text-[#011936] leading-relaxed">
                  „Terapia începe cu o relație. Vindecarea începe cu încredere.”
                </p>
                <span className="block mt-3 font-mono text-xs text-[#011936]/60">
                  Bianca Lupu
                </span>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
