"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo(0, 0)

    // Also after a small delay to handle any async rendering
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0)
    }, 50)

    return () => clearTimeout(timeout)
  }, [pathname])

  return null
}
