"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

interface ImageRevealProps {
  src: string
  alt: string
  className?: string
}

export function ImageReveal({ src, alt, className = "" }: ImageRevealProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const clipPath = useTransform(scrollYProgress, [0, 0.5], ["inset(100% 0 0 0)", "inset(0% 0 0 0)"])

  const scale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1])
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <motion.div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ clipPath }} className="absolute inset-0">
        <motion.div style={{ scale, y }} className="absolute inset-0">
          <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
