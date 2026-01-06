import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { AboutPreview } from "@/components/about-preview"
import { BenefitsSection } from "@/components/benefits-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { SmoothScroll } from "@/components/smooth-scroll"
import { CursorFollower } from "@/components/cursor-follower"
import { FloatingElements } from "@/components/floating-elements"
import { HorizontalScrollSection } from "@/components/horizontal-scroll-section"

export default function HomePage() {
  return (
    <SmoothScroll>
      <CursorFollower />
      <FloatingElements />
      <div className="grain-overlay" />
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HorizontalScrollSection />
        <AboutPreview />
        <BenefitsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
