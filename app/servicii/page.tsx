import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/servicii/services-hero"
import { ServicesList } from "@/components/servicii/services-list"
import { ProcessSection } from "@/components/servicii/process-section"
import { PricingSection } from "@/components/servicii/pricing-section"
import { SmoothScroll } from "@/components/smooth-scroll"
import { CursorFollower } from "@/components/cursor-follower"

export const metadata = {
  title: "Servicii | Bianca Lupu - Psihoterapeut",
  description:
    "Călătoria noastră împreună. Descoperă serviciile de psihoterapie oferite: terapie individuală, de cuplu, online și evaluare psihologică.",
}

export default function ServicesPage() {
  return (
    <SmoothScroll>
      <CursorFollower />
      <div className="grain-overlay" />
      <Navigation />
      <main>
        <ServicesHero />
        <ServicesList />
        <ProcessSection />
        <PricingSection />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
