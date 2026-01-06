"use client"

import { motion } from "framer-motion"
import { RevealSection } from "@/components/reveal-section"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "Am ajuns la Bianca într-un moment în care nu mai vedeam lumină. Anxietatea mă copleșea zilnic. După 6 luni de terapie, am învățat să îmi înțeleg emoțiile și să le gestionez. Acum trăiesc, nu doar supraviețuiesc.",
    author: "Alexandra M.",
    age: "32 ani",
    issue: "Anxietate",
    rating: 5,
    featured: true,
  },
  {
    id: 2,
    content:
      "Nu credeam în terapie până nu am încercat. Bianca are un mod unic de a te face să te simți înțeles, fără să te judece. Am descoperit lucruri despre mine pe care nu știam că le port de ani de zile.",
    author: "Mihai T.",
    age: "45 ani",
    issue: "Depresie",
    rating: 5,
    featured: false,
  },
  {
    id: 3,
    content:
      "Relația noastră era pe marginea prăpastiei. Ședințele de cuplu cu Bianca ne-au ajutat să comunicăm din nou, să ne înțelegem și să ne reconectăm. Mulțumim din suflet!",
    author: "Elena și Andrei",
    age: "Cuplu",
    issue: "Terapie de cuplu",
    rating: 5,
    featured: false,
  },
  {
    id: 4,
    content:
      "Burnout-ul m-a lovit când nu mă așteptam. Bianca m-a ajutat să înțeleg de ce am ajuns acolo și cum să nu mai repet greșelile. Am învățat să pun limite și să mă respect.",
    author: "Cristina D.",
    age: "38 ani",
    issue: "Burnout",
    rating: 5,
    featured: true,
  },
  {
    id: 5,
    content:
      "Ca cineva care întotdeauna a avut grijă de alții și niciodată de sine, terapia a fost un cadou pe care mi l-am făcut. Bianca m-a învățat că a avea grijă de mine nu e egoism.",
    author: "Maria P.",
    age: "52 ani",
    issue: "Stimă de sine",
    rating: 5,
    featured: false,
  },
  {
    id: 6,
    content:
      "Primul pas a fost cel mai greu. Dar din prima ședință am știut că am ales bine. Bianca creează un spațiu sigur în care poți fi vulnerabil fără teamă. O recomand tuturor.",
    author: "Radu B.",
    age: "29 ani",
    issue: "Anxietate socială",
    rating: 5,
    featured: false,
  },
]

export function TestimonialsGrid() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F1DEDE] via-[#e8d0d0] to-[#F1DEDE]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <RevealSection>
          <div className="text-center mb-16">
            <span className="font-mono text-sm text-[#CB7C89] tracking-wider uppercase">Experiențe Reale</span>
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-[#011936] mt-4">Ce Spun Clienții</h2>
          </div>
        </RevealSection>

        {/* Masonry-style grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <RevealSection key={testimonial.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className={`relative p-8 rounded-3xl transition-all duration-500 ${
                  testimonial.featured
                    ? "bg-gradient-to-br from-[#011936] to-[#603140] text-[#F1DEDE] md:row-span-2"
                    : "bg-white/80 backdrop-blur-sm text-[#011936]"
                }`}
              >
                {/* Quote icon */}
                <Quote
                  className={`w-10 h-10 mb-6 ${testimonial.featured ? "text-[#CB7C89]" : "text-[#CB7C89]/30"}`}
                  fill="currentColor"
                />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#CB7C89]" fill="currentColor" />
                  ))}
                </div>

                {/* Content */}
                <p
                  className={`font-mono text-sm leading-relaxed mb-6 ${
                    testimonial.featured ? "text-[#F1DEDE]/90" : "text-[#011936]/80"
                  }`}
                >
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-sans font-bold ${
                      testimonial.featured
                        ? "bg-[#CB7C89] text-[#011936]"
                        : "bg-gradient-to-br from-[#CB7C89] to-[#603140] text-white"
                    }`}
                  >
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p
                      className={`font-sans font-semibold ${testimonial.featured ? "text-[#F1DEDE]" : "text-[#011936]"}`}
                    >
                      {testimonial.author}
                    </p>
                    <p
                      className={`font-mono text-xs ${
                        testimonial.featured ? "text-[#F1DEDE]/60" : "text-[#011936]/50"
                      }`}
                    >
                      {testimonial.age} • {testimonial.issue}
                    </p>
                  </div>
                </div>

                {/* Decorative corner */}
                {testimonial.featured && (
                  <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden rounded-tr-3xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#CB7C89]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  </div>
                )}
              </motion.div>
            </RevealSection>
          ))}
        </div>

        {/* Trust indicators */}
        <RevealSection delay={0.6}>
          <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <p className="font-sans text-5xl font-bold text-[#011936]">98%</p>
              <p className="font-mono text-sm text-[#011936]/60 mt-2">Clienți mulțumiți</p>
            </div>
            <div className="p-6">
              <p className="font-sans text-5xl font-bold text-[#011936]">500+</p>
              <p className="font-mono text-sm text-[#011936]/60 mt-2">Ședințe efectuate</p>
            </div>
            <div className="p-6">
              <p className="font-sans text-5xl font-bold text-[#011936]">5 ani</p>
              <p className="font-mono text-sm text-[#011936]/60 mt-2">Experiență clinică</p>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
