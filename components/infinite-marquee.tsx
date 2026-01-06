"use client"

import { motion } from "framer-motion"

interface InfiniteMarqueeProps {
  items: string[]
  direction?: "left" | "right"
  speed?: number
  className?: string
}

export function InfiniteMarquee({ items, direction = "left", speed = 20, className = "" }: InfiniteMarqueeProps) {
  const duplicatedItems = [...items, ...items, ...items]

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        animate={{
          x: direction === "left" ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          duration: speed,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >
        {duplicatedItems.map((item, index) => (
          <span key={index} className="flex items-center mx-8">
            <span className="font-sans text-xl md:text-2xl font-bold opacity-30">{item}</span>
            <span className="w-2 h-2 rounded-full bg-current opacity-50 ml-8" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
