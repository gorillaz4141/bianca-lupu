"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface TextRevealScrollProps {
  text: string
  className?: string
}

export function TextRevealScroll({ text, className = "" }: TextRevealScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  })

  const words = text.split(" ")

  return (
    <div ref={ref} className={className}>
      <p className="flex flex-wrap">
        {words.map((word, i) => {
          const start = i / words.length
          const end = start + 1 / words.length
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          )
        })}
      </p>
    </div>
  )
}

interface WordProps {
  children: string
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
  range: [number, number]
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.2, 1])
  const y = useTransform(progress, range, [10, 0])

  return (
    <span className="relative mr-[0.25em] mt-[0.25em]">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity, y }} className="inline-block">
        {children}
      </motion.span>
    </span>
  )
}
