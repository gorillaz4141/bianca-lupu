import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/despre/about-hero"
import { JourneySection } from "@/components/despre/journey-section"
import { MethodsSection } from "@/components/despre/methods-section"
import { ValuesSection } from "@/components/despre/values-section"
import { EducationSection } from "@/components/despre/education-section"
import { SmoothScroll } from "@/components/smooth-scroll"
import { CursorFollower } from "@/components/cursor-follower"

export const metadata = {
  title: "Despre Mine | Bianca Lupu - Psihoterapeut",
  description:
    "Omul din spatele terapeutului. Descoperă povestea mea, metodele pe care le folosesc și valorile care îmi ghidează practica.",
}

export default function AboutPage() {
  return (
    <SmoothScroll>
      <CursorFollower />
      <div className="grain-overlay" />
      <Navigation />
      <main>
        <AboutHero />
        <JourneySection />
        <MethodsSection />
        <ValuesSection />
        <EducationSection />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
