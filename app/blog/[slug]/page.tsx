import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { CursorFollower } from "@/components/cursor-follower"
import { ArticleContent } from "@/components/blog/article-content"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return { title: "Articol negăsit" }

  return {
    title: `${post.title} | Bianca Lupu Psihoterapeut`,
    description: post.excerpt,
  }
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <SmoothScroll>
      <CursorFollower />
      <Navigation />
      <main className="min-h-screen bg-[#F1DEDE]">
        <ArticleContent post={post} />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
