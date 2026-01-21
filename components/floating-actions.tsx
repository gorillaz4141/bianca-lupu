"use client";

import { Phone, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-[1200] flex flex-col gap-3 sm:gap-3">
      <a
        href="https://wa.me/40765844042"
        target="_blank"
        rel="noreferrer"
        aria-label="Deschide conversație pe WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-2xl hover:shadow-[0_15px_40px_rgba(37,211,102,0.45)] transition-all duration-200"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-200 group-hover:scale-110" />
        <span className="sr-only">WhatsApp</span>
      </a>

      <a
        href="tel:0765844042"
        aria-label="Sună direct 0765 844 042"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#603140] to-[#CB7C89] text-[#F1DEDE] shadow-2xl hover:shadow-[0_15px_40px_rgba(96,49,64,0.35)] transition-all duration-200"
      >
        <Phone className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-200 group-hover:scale-110" />
        <span className="sr-only">Sună 0765 844 042</span>
      </a>
    </div>
  );
}

