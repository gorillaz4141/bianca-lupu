"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"

const navItems = [
  { href: "/", label: "Acasă" },
  { href: "/despre", label: "Despre Mine" },
  { href: "/servicii", label: "Servicii" },
  { href: "/testimoniale", label: "Testimoniale" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#F1DEDE]/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="group">
              <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col">
                <span className="font-sans text-2xl lg:text-3xl font-bold text-[#011936] tracking-tight">
                  Bianca Lupu
                </span>
                <span className="font-mono text-xs text-[#603140] tracking-[0.2em] uppercase">Psihoterapeut</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="relative font-mono text-sm text-[#011936] hover:text-[#603140] transition-colors group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#CB7C89] to-[#603140] group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="tel:0765844042"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#603140] to-[#CB7C89] text-[#F1DEDE] font-mono text-sm rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                <Phone className="w-4 h-4" />
                <span>Programează</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-[#011936]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-[#F1DEDE]/98 backdrop-blur-lg" />
            <nav className="relative h-full flex flex-col items-center justify-center gap-8 p-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-sans text-3xl text-[#011936] hover:text-[#603140] transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="tel:0765844042"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#603140] to-[#CB7C89] text-[#F1DEDE] font-mono text-lg rounded-full"
              >
                <Phone className="w-5 h-5" />
                <span>0765 844 042</span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
