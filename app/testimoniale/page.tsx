import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { CursorFollower } from "@/components/cursor-follower"
import { TestimonialsHero } from "@/components/testimoniale/testimonials-hero"
import { TestimonialsGrid } from "@/components/testimoniale/testimonials-grid"
import { TestimonialsMarquee } from "@/components/testimoniale/testimonials-marquee"
import { TestimonialsCta } from "@/components/testimoniale/testimonials-cta"

export const metadata = {
  title: "Testimoniale | Bianca Lupu - Psihoterapeut București",
  description:
    "Citește experiențele clienților mei și descoperă cum psihoterapia le-a schimbat viața. Povești reale de transformare și vindecare.",
}

export default function TestimonialePage() {
  return (
    <SmoothScroll>
      <CursorFollower />
      <Navigation />
      <main className="min-h-screen bg-[#F1DEDE]">
        <TestimonialsHero />
        <TestimonialsMarquee />
        <TestimonialsGrid />
        <TestimonialsCta />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
