"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { AnimatedText } from "@/components/animated-text";
import { Heart } from "lucide-react";

export function AboutHero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-[#F1DEDE] to-[#e8d0d0]"
    >
      {/* Decorative blobs */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-32 right-10 w-96 h-96 bg-[#CB7C89]/20 rounded-full blur-3xl hidden md:block"
      />
      <motion.div
        style={{ y, opacity }}
        className="absolute bottom-32 left-10 w-96 h-96 bg-[#603140]/10 rounded-full blur-3xl hidden md:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-32 space-y-28">
        {/* HERO INTRO */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-5 h-5 text-[#CB7C89]" />
              <span className="font-mono text-sm tracking-[0.2em] uppercase text-[#603140]">
                Despre mine
              </span>
            </div>

            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-[#011936] leading-tight mb-8">
              <AnimatedText text="Înțelegerea pașilor mici" delay={0.2} />
            </h1>

            <p className="font-mono text-lg text-[#011936]/70 leading-relaxed">
              Călătoria mea a început cu fascinația pentru modul în care ne
              construim ca oameni. Prin experiența din Grecia și lucrul în
              terapia ABA, am învățat să observ detaliile fine ale
              comportamentului și importanța răbdării.
              <br />
              <br />
              Această bază mi-a oferit disciplina de a privi omul cu o atenție
              profundă, înțelegând că fiecare mare schimbare începe cu un pas
              discret, dar sigur.
            </p>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-md mx-auto"
          >
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/poza1.jpeg"
                alt="Bianca Lupu - Psihoterapeut"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#603140]/20 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* SECTION 2 – RIGHT */}
        <div className="max-w-3xl ml-auto">
          <h2 className="font-sans text-3xl font-semibold text-[#011936] mb-6">
            Știință și simțire în echilibru
          </h2>
          <p className="font-mono text-lg text-[#011936]/70 leading-relaxed">
            Masterul în Experiențială (PEU) și formarea în Psihoterapie
            Integrativă mi-au oferit limbajul prin care mintea și corpul încep
            să dialogheze. Am ales aceste școli pentru că pun accent pe trăirea
            de „aici și acum”, transformând terapia dintr-o simplă discuție
            într-o experiență vie de regăsire.
          </p>
        </div>

        {/* SECTION 3 – LEFT */}
        <div className="max-w-3xl">
          <h2 className="font-sans text-3xl font-semibold text-[#011936] mb-6">
            Orizonturi noi asupra profunzimii umane
          </h2>
          <p className="font-mono text-lg text-[#011936]/70 leading-relaxed">
            Specializarea în Psihosexologie la Sapienza Università di Roma a
            fost momentul în care am înțeles că sănătatea emoțională este
            incompletă fără acceptarea identității și a intimității noastre.
            <br />
            <br />
            Această etapă mi-a rafinat capacitatea de a aborda teme sensibile cu
            o relaxare caldă, oferindu-ți un spațiu liber de judecată, unde poți
            fi tu însuți, fără măști.
          </p>
        </div>

        {/* SECTION 4 – RIGHT */}
        <div className="max-w-3xl ml-auto">
          <h2 className="font-sans text-3xl font-semibold text-[#011936] mb-6">
            Creativitatea ca resursă de vindecare
          </h2>
          <p className="font-mono text-lg text-[#011936]/70 leading-relaxed">
            Cred cu tărie că acolo unde cuvintele se opresc, începe vindecarea
            prin simbol. Prin Art-Terapie, te ghidez să îți exprimi universul
            interior într-un mod creativ și blând.
            <br />
            <br />
            Nu este nevoie de talent, ci doar de deschiderea de a lăsa culorile
            și formele să vorbească despre resursele tale nespuse.
          </p>
        </div>

        {/* SECTION 5 – LEFT */}
        <div className="max-w-3xl">
          <h2 className="font-sans text-3xl font-semibold text-[#011936] mb-6">
            Misiunea mea: să te însoțesc spre întregire
          </h2>
          <p className="font-mono text-lg text-[#011936]/70 leading-relaxed">
            Misiunea mea este să te ajut să îți recapeți liniștea interioară și
            să îți construiești o reziliență autentică.
            <br />
            <br />
            Îmi doresc ca la finalul călătoriei noastre, să simți că ai energia
            și claritatea de a-ți trăi viața cu bucurie. Sunt aici să îți ofer
            suportul, metoda și prezența de care ai nevoie pentru a deveni
            propriul tău aliat.
          </p>
        </div>

        {/* FINAL NOTE */}
        <div className="text-center pt-12">
          <p className="font-sans text-lg italic text-[#603140]/80">
            Fiecare etapă a studiilor mele a fost o piesă de puzzle care m-a
            ajutat să înțeleg întregul care ești tu astăzi.
          </p>
        </div>
      </div>
    </section>
  );
}
