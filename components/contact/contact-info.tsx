"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { RevealSection } from "@/components/reveal-section";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Telefon",
    value: "0765 844 042",
    href: "tel:0765844042",
    description: "Luni - Vineri, 9:00 - 18:00",
  },

  {
    icon: MapPin,
    label: "Locație",
    value: "București, România",
    href: "#",
    description: "Cabinet + Ședințe Online",
  },
  {
    icon: Clock,
    label: "Program",
    value: "Luni - Vineri",
    href: "#",
    description: "9:00 - 20:00",
  },
];

export function ContactInfo() {
  return (
    <RevealSection direction="right">
      <div className="space-y-8">
        {/* Image card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative rounded-3xl overflow-hidden shadow-xl"
        >
          <div className="aspect-[4/3]">
            <Image
              src="/images/poza2.jpeg"
              alt="Bianca Lupu - Cabinet Psihoterapie București"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011936]/60 via-transparent to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8">
            <p className="font-sans text-2xl font-bold text-[#F1DEDE] mb-2">
              Bianca Lupu
            </p>
            <p className="font-mono text-sm text-[#F1DEDE]/80">
              Psihoterapeut • București & Online
            </p>
          </div>
        </motion.div>

        {/* Contact details */}
        <div className="grid grid-cols-2 gap-4">
          {contactDetails.map((detail, index) => (
            <motion.a
              key={detail.label}
              href={detail.href}
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#CB7C89]/20 to-[#603140]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <detail.icon className="w-6 h-6 text-[#603140]" />
              </div>
              <p className="font-mono text-xs text-[#CB7C89] uppercase tracking-wider mb-1">
                {detail.label}
              </p>
              <p className="font-sans text-lg font-semibold text-[#011936] mb-1">
                {detail.value}
              </p>
              <p className="font-mono text-xs text-[#011936]/50">
                {detail.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Social links */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <p className="font-mono text-sm text-[#011936] mb-4">
            Urmărește-mă pe social media:
          </p>
          <div className="flex gap-3">
            {[
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Facebook, href: "#", label: "Facebook" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl bg-[#011936]/5 flex items-center justify-center text-[#603140] hover:bg-gradient-to-r hover:from-[#603140] hover:to-[#CB7C89] hover:text-[#F1DEDE] transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#011936] rounded-2xl p-8 text-center"
        >
          <p className="font-sans text-xl font-bold text-[#F1DEDE] mb-2">
            Preferi să vorbim la telefon?
          </p>
          <p className="font-mono text-sm text-[#F1DEDE]/70 mb-6">
            Sună-mă direct pentru a programa o ședință sau pentru orice
            întrebare. Dacă nu răspund, sunt în ședință. Voi reveni eu cu un
            apel către tine în cel mai scurt timp.
          </p>
          <motion.a
            href="tel:0765844042"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#CB7C89] to-[#603140] text-[#F1DEDE] font-mono text-sm tracking-wider rounded-full shadow-xl"
          >
            <Phone className="w-4 h-4" />
            0765 844 042
          </motion.a>
        </motion.div>
      </div>
    </RevealSection>
  );
}
