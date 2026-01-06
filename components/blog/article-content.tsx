"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { RevealSection } from "@/components/reveal-section"
import { AnimatedText } from "@/components/animated-text"
import { MagneticButton } from "@/components/magnetic-button"
import type { BlogPost } from "@/lib/blog-data"
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react"

export function ArticleContent({ post }: { post: BlogPost }) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#011936] via-[#011936]/50 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-12 pb-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#F1DEDE]/80 font-mono text-sm mb-8 hover:text-[#F1DEDE] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Înapoi la Blog
          </Link>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-[#CB7C89] rounded-full font-mono text-sm text-white mb-6"
          >
            {post.category}
          </motion.span>

          <AnimatedText
            text={post.title}
            className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-[#F1DEDE] mb-6"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 text-[#F1DEDE]/70 font-mono text-sm"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-20 bg-[#F1DEDE]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <RevealSection>
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-sans prose-headings:text-[#011936]
                prose-p:font-mono prose-p:text-[#011936]/80 prose-p:leading-relaxed
                prose-a:text-[#CB7C89] prose-a:no-underline hover:prose-a:underline
                prose-strong:text-[#603140]
                prose-blockquote:border-l-[#CB7C89] prose-blockquote:bg-white/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic
                prose-ul:font-mono prose-ol:font-mono
                prose-li:text-[#011936]/80
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </RevealSection>

          {/* Share */}
          <RevealSection delay={0.2}>
            <div className="mt-16 pt-8 border-t border-[#011936]/10">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <p className="font-mono text-[#011936]/60 text-sm">Ți-a plăcut acest articol? Distribuie-l!</p>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#011936] text-[#F1DEDE] rounded-full font-mono text-sm hover:bg-[#603140] transition-colors">
                  <Share2 className="w-4 h-4" />
                  Distribuie
                </button>
              </div>
            </div>
          </RevealSection>

          {/* CTA */}
          <RevealSection delay={0.3}>
            <div className="mt-16 p-8 bg-gradient-to-br from-[#603140] to-[#011936] rounded-3xl text-center">
              <h3 className="font-sans text-2xl md:text-3xl font-bold text-[#F1DEDE] mb-4">
                Ai nevoie de ajutor profesional?
              </h3>
              <p className="font-mono text-[#F1DEDE]/70 mb-8 max-w-md mx-auto">
                Programează o consultație și hai să discutăm despre cum te pot ajuta.
              </p>
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-[#F1DEDE] text-[#011936] rounded-full font-mono font-medium hover:bg-white transition-colors"
                >
                  Programează acum
                </Link>
              </MagneticButton>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
