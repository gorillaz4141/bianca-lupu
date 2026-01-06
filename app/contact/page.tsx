import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { SmoothScroll } from "@/components/smooth-scroll"
import { CursorFollower } from "@/components/cursor-follower"

export const metadata = {
  title: "Contact | Bianca Lupu - Psihoterapeut",
  description:
    "Fă primul pas către progres. Contactează-mă pentru o ședință introductivă gratuită de 15 minute. București și online.",
}

export default function ContactPage() {
  return (
    <SmoothScroll>
      <CursorFollower />
      <div className="grain-overlay" />
      <Navigation />
      <main>
        <ContactHero />
        <div className="relative bg-gradient-to-b from-[#e8d0d0] to-[#F1DEDE] py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  )
}
