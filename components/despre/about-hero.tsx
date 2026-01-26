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

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-md mx-auto"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl bg-[#F1DEDE]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/poza1.jpeg"
                  alt="Bianca Lupu - Psihoterapeut"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-contain p-6"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* IMAGE + TEXT FLOW */}
        <ImageBreak src="/bianca-3.jpeg" align="right" />

        <TextSection
          align="right"
          title="Știință și simțire în echilibru"
          text="Masterul în Experiențială (PEU) și formarea în Psihoterapie Integrativă mi-au oferit limbajul prin care mintea și corpul încep să dialogheze. Am ales aceste școli pentru că pun accent pe trăirea de „aici și acum”, transformând terapia dintr-o simplă discuție într-o experiență vie de regăsire."
        />

        <ImageBreak src="/bianca-4.jpeg" align="left" />

        <TextSection
          align="left"
          title="Orizonturi noi asupra profunzimii umane"
          text="Specializarea în Psihosexologie la Sapienza Università di Roma a fost momentul în care am înțeles că sănătatea emoțională este incompletă fără acceptarea identității și a intimității noastre.

Această etapă mi-a rafinat capacitatea de a aborda teme sensibile cu o relaxare caldă, oferindu-ți un spațiu liber de judecată, unde poți fi tu însuți, fără măști."
        />

        <ImageBreak src="/bianca-5.jpeg" align="right" />

        <TextSection
          align="right"
          title="Creativitatea ca resursă de vindecare"
          text="Cred cu tărie că acolo unde cuvintele se opresc, începe vindecarea prin simbol. Prin Art-Terapie, te ghidez să îți exprimi universul interior într-un mod creativ și blând.

Nu este nevoie de talent, ci doar de deschiderea de a lăsa culorile și formele să vorbească despre resursele tale nespuse."
        />

        <ImageBreak src="/bianca-6.jpeg" align="left" />

        <TextSection
          align="left"
          title="Misiunea mea: să te însoțesc spre întregire"
          text="Misiunea mea este să te ajut să îți recapeți liniștea interioară și să îți construiești o reziliență autentică.

Îmi doresc ca la finalul călătoriei noastre, să simți că ai energia și claritatea de a-ți trăi viața cu bucurie. Sunt aici să îți ofer suportul, metoda și prezența de care ai nevoie pentru a deveni propriul tău aliat."
        />

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

/* ---------------- IMAGE BREAK ---------------- */

function ImageBreak({
  src,
  align = "center",
}: {
  src: string;
  align?: "left" | "right" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative max-w-3xl mx-auto ${
        align === "left"
          ? "md:mr-auto md:ml-0"
          : align === "right"
          ? "md:ml-auto md:mr-0"
          : ""
      }`}
    >
      <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-[#F1DEDE]">
        <div className="relative aspect-[4/5]">
          <Image
            src={src}
            alt="Bianca – moment din parcursul profesional"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-contain p-6"
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- TEXT SECTION ---------------- */

function TextSection({
  title,
  text,
  align = "left",
}: {
  title: string;
  text: string;
  align?: "left" | "right";
}) {
  return (
    <div className={`max-w-3xl ${align === "right" ? "ml-auto" : ""}`}>
      <h2 className="font-sans text-3xl font-semibold text-[#011936] mb-6">
        {title}
      </h2>
      <p className="font-mono text-lg text-[#011936]/70 leading-relaxed whitespace-pre-line">
        {text}
      </p>
    </div>
  );
}
