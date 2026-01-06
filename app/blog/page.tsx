import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"
import { SmoothScroll } from "@/components/smooth-scroll"
import { CursorFollower } from "@/components/cursor-follower"

export const metadata = {
  title: "Blog | Bianca Lupu - Psihoterapeut",
  description:
    "Articole despre sănătate mintală, anxietate, depresie, relații și dezvoltare personală. Resurse gratuite de la psihoterapeut.",
}

export default function BlogPage() {
  return (
    <SmoothScroll>
      <CursorFollower />
      <div className="grain-overlay" />
      <Navigation />
      <main>
        <BlogHero />
        <BlogGrid />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
