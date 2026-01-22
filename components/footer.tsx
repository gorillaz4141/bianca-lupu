"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#F1DEDE] to-[#e8d0d0] pt-24 pb-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#CB7C89] to-transparent" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#CB7C89]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#603140]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-sans text-3xl font-bold text-[#011936] mb-2">
                Bianca Lupu
              </h3>
              <p className="font-mono text-sm text-[#603140] tracking-[0.2em] uppercase mb-6">
                Psihoterapeut
              </p>
              <p className="font-mono text-[#011936]/70 leading-relaxed max-w-md mb-8">
                Un spațiu sigur pentru gândurile tale cele mai vulnerabile.
                Terapia începe cu o relație, vindecarea începe cu încredere.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Facebook, href: "#" },
                  { icon: Linkedin, href: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-[#011936]/5 flex items-center justify-center text-[#603140] hover:bg-gradient-to-r hover:from-[#603140] hover:to-[#CB7C89] hover:text-[#F1DEDE] transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-sans text-lg font-semibold text-[#011936] mb-6">
              Navigare
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Acasă", href: "/" },
                { label: "Despre Mine", href: "/despre" },
                { label: "Servicii", href: "/servicii" },
                
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-sm text-[#011936]/70 hover:text-[#603140] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-sans text-lg font-semibold text-[#011936] mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0765844042"
                  className="flex items-center gap-3 font-mono text-sm text-[#011936]/70 hover:text-[#603140] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#CB7C89]" />
                  0765 844 042
                </a>
              </li>

              <li>
                <span className="flex items-start gap-3 font-mono text-sm text-[#011936]/70">
                  <MapPin className="w-4 h-4 text-[#CB7C89] mt-0.5" />
                  București, România
                  <br />+ Online
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#CB7C89]/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-xs text-[#011936]/50">
              © {new Date().getFullYear()} Bianca Lupu. Toate drepturile
              rezervate.
            </p>
            <div className="flex gap-6">
              <Link
                href="/confidentialitate"
                className="font-mono text-xs text-[#011936]/50 hover:text-[#603140] transition-colors"
              >
                Politica de Confidențialitate
              </Link>
              <Link
                href="/termeni"
                className="font-mono text-xs text-[#011936]/50 hover:text-[#603140] transition-colors"
              >
                Termeni și Condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
