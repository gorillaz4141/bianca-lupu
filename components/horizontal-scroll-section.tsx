"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { MagneticButton } from "./magnetic-button"

const services = [
  {
    title: "Anxietate",
    description: "Înțelege și gestionează anxietatea prin tehnici validate științific.",
    image: "/placeholder.svg?height=400&width=300",
    href: "/servicii",
  },
  {
    title: "Depresie",
    description: "Regăsește lumina și speranța prin terapie personalizată.",
    image: "/placeholder.svg?height=400&width=300",
    href: "/servicii",
  },
  {
    title: "Burnout",
    description: "Recuperează-ți energia și pasiunea pentru viață.",
    image: "/placeholder.svg?height=400&width=300",
    href: "/servicii",
  },
  {
    title: "Relații",
    description: "Construiește conexiuni mai profunde și mai sănătoase.",
    image: "/placeholder.svg?height=400&width=300",
    href: "/servicii",
  },
]

export function HorizontalScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#011936]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Header */}
        <div className="absolute top-20 left-6 lg:left-12 z-10">
          <span className="font-mono text-sm text-[#CB7C89] tracking-wider uppercase">Domeniile Mele</span>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-[#F1DEDE] mt-2">Specializări</h2>
        </div>

        {/* Horizontal scroll content */}
        <motion.div style={{ x }} className="flex gap-8 pl-6 lg:pl-12 pt-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative w-[300px] md:w-[400px] flex-shrink-0"
            >
              <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden group">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011936] via-[#011936]/50 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-sans text-2xl md:text-3xl font-bold text-[#F1DEDE] mb-2">{service.title}</h3>
                  <p className="font-mono text-sm text-[#F1DEDE]/70 mb-4">{service.description}</p>
                  <MagneticButton>
                    <Link
                      href={service.href}
                      className="inline-block px-6 py-2 bg-[#CB7C89] text-[#011936] rounded-full font-mono text-sm hover:bg-[#F1DEDE] transition-colors"
                    >
                      Află mai mult
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <div className="relative w-[300px] md:w-[400px] flex-shrink-0 h-[400px] md:h-[500px] rounded-3xl bg-gradient-to-br from-[#CB7C89] to-[#603140] flex flex-col items-center justify-center p-8 text-center">
            <h3 className="font-sans text-2xl md:text-3xl font-bold text-[#F1DEDE] mb-4">Gata să începem?</h3>
            <p className="font-mono text-sm text-[#F1DEDE]/80 mb-8">Fiecare călătorie începe cu primul pas.</p>
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-[#F1DEDE] text-[#011936] rounded-full font-mono font-medium hover:bg-white transition-colors"
              >
                Programează acum
              </Link>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
