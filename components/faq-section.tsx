"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealSection } from "./reveal-section";
import { Plus } from "lucide-react";

const faqTherapy = [
  {
    question: "Cum știu dacă am nevoie de psihoterapie?",
    answer:
      "Nu există o problemă „prea mică” pentru terapie. Dacă simți că stresul te copleșește, că relațiile tale se repetă în tipare dureroase sau pur și simplu vrei să te cunoști mai bine și să trăiești mai conștient, terapia este spațiul potrivit. Este un act de curaj și iubire de sine, nu un semn de slăbiciune.",
  },
  {
    question: "Cât timp durează un proces terapeutic?",
    answer:
      "Durata este personalizată. Unii clienți lucrează focalizat pe o problemă specifică, alții aleg un proces de profunzime, de un an sau mai mult, pentru o transformare durabilă. Stabilim obiectivele împreună, încă de la început.",
  },
  {
    question: "Ședințele sunt confidențiale?",
    answer:
      "Absolut. Confidențialitatea este baza relației noastre. Tot ceea ce discutăm este protejat de codul etic al profesiei de psihoterapeut.",
  },
  {
    question: "Ce înseamnă că ești psihoterapeut integrativ și experiențial?",
    answer:
      "Înseamnă că adaptez metodele la tine, nu invers. Folosesc tehnici din CBT, art-terapie și psihodinamică, în funcție de nevoile tale. Abordarea experiențială presupune nu doar discuții, ci și exerciții, simboluri și trăiri lucrate «aici și acum».",
  },
  {
    question: "Lucrezi cu probleme ce țin de sexualitate?",
    answer:
      "Da. Specializarea mea în Psihosexologie la Sapienza Università di Roma îmi permite să abordez teme legate de identitate, dorință, disfuncții sexuale sau dificultăți de cuplu într-un cadru sigur, deschis și lipsit de tabuuri.",
  },
  {
    question: "Cum mă poate ajuta Art-Terapia dacă nu am talent artistic?",
    answer:
      "Art-terapia nu este despre estetică, ci despre exprimare. Folosim culoarea, colajul sau modelajul pentru a scoate la suprafață emoții greu de pus în cuvinte. Este un proces profund și eliberator.",
  },
  {
    question: "Experiența ta internațională influențează procesul terapeutic?",
    answer:
      "Da. Experiența profesională din Italia și Grecia mi-a rafinat capacitatea de a lucra fără prejudecăți și cu deschidere față de diversitatea umană. Fiecare persoană are propriul limbaj emoțional, pe care îl descoperim împreună.",
  },
  {
    question: "Ne concentrăm pe trecut sau pe viitor?",
    answer:
      "Privim trecutul pentru a înțelege prezentul, dar lucrăm orientat spre prezent și viitor. Scopul este să îți recapeți energia, claritatea și liniștea interioară pentru viața pe care o trăiești acum.",
  },
  {
    question: "Ce se întâmplă dacă nu reușesc să mă deschid la început?",
    answer:
      "Este perfect normal. Încrederea se construiește în timp. Vom merge în ritmul tău, iar experiența mea în lucrul cu comunicarea non-verbală mă ajută să te susțin chiar și în momentele de tăcere.",
  },
  {
    question: "Pot veni la terapie doar pentru dezvoltare personală?",
    answer:
      "Desigur. Mulți clienți aleg terapia pentru a-și îmbunătăți stima de sine, comunicarea, reziliența sau calitatea vieții. Terapia este o investiție valoroasă în propriul tău echilibru.",
  },
  {
    question: "Cum voi ști că terapia funcționează?",
    answer:
      "Vei observa schimbări subtile, dar semnificative: reacții diferite la stres, mai multă claritate în relații, o voce interioară mai blândă, somn mai odihnitor și mai multă liniște.",
  },
];

const faqSessions = [
  {
    question: "Unde au loc ședințele?",
    answer:
      "Ședințele pot avea loc fizic, în București, într-un cabinet primitor și discret, sau online, prin platforme video securizate (Zoom, Google Meet, Skype). Calitatea procesului rămâne aceeași, indiferent de format.",
  },
  {
    question: "Cât costă o ședință și cum se face plata?",
    answer:
      "Tariful unei ședințe individuale (50 minute) este de [de completat]. Plata se poate face numerar sau prin transfer bancar, după fiecare ședință sau la începutul lunii.",
  },
  {
    question: "Care este programul cabinetului?",
    answer:
      "Lucrez de regulă de luni până vineri, între orele 14:00 – 20:00. Stabilim împreună o zi și o oră fixe, astfel încât terapia să devină un reper stabil în săptămâna ta.",
  },
  {
    question: "Ce se întâmplă dacă trebuie să anulez sau să reprogramez?",
    answer:
      "Te rog să mă anunți cu cel puțin 24 de ore înainte. În cazul anulărilor mai târzii, ședința va fi achitată integral, deoarece intervalul a fost rezervat exclusiv pentru tine.",
  },
  {
    question: "Cât durează o ședință?",
    answer:
      "O ședință standard de psihoterapie individuală durează 50 de minute, un interval optim pentru profunzime și claritate.",
  },
  {
    question: "Putem face terapie online dacă locuiesc în altă țară?",
    answer:
      "Da. Ședințele online sunt o soluție excelentă pentru românii din diaspora, oferind continuitate și suport în limba maternă, indiferent de țara în care te afli.",
  },
  {
    question: "Cum pot face o programare?",
    answer:
      "Îmi poți scrie pe WhatsApp la [număr] sau poți completa formularul de contact de pe site. Îți voi răspunde în cel mai scurt timp.",
  },
  {
    question: "Este prima ședință diferită?",
    answer:
      "Prima întâlnire este una de cunoaștere. Discutăm ce te aduce la terapie, îți explic modul de lucru și vezi dacă te simți confortabil cu stilul meu. Relația terapeutică este cheia succesului.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const renderFAQ = (items: typeof faqTherapy, prefix: string) =>
    items.map((faq, index) => {
      const id = `${prefix}-${index}`;
      return (
        <RevealSection key={id} delay={index * 0.05}>
          <motion.div className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg">
            <motion.button
              onClick={() => setOpenIndex(openIndex === id ? null : id)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="font-sans text-lg font-semibold text-[#011936] pr-4">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === id ? 45 : 0 }}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-[#CB7C89] to-[#603140] flex items-center justify-center"
              >
                <Plus className="w-4 h-4 text-[#F1DEDE]" />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {openIndex === id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <div className="px-6 pb-6">
                    <p className="font-mono text-[#011936]/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </RevealSection>
      );
    });

  return (
    <section className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8d0d0] to-[#F1DEDE]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <RevealSection className="text-center mb-16">
          <span className="font-mono text-sm tracking-widest uppercase text-[#CB7C89] block mb-4">
            Întrebări frecvente
          </span>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#011936]">
            Ai întrebări?
          </h2>
        </RevealSection>

        <div className="space-y-4 mb-20">
          {renderFAQ(faqTherapy, "therapy")}
        </div>

        {/* MINI TITLE */}
        <RevealSection className="text-center mb-10">
          <h3 className="font-sans text-2xl font-semibold text-[#011936]">
            Cum au loc ședințele
          </h3>
        </RevealSection>

        <div className="space-y-4">{renderFAQ(faqSessions, "sessions")}</div>
      </div>
    </section>
  );
}
