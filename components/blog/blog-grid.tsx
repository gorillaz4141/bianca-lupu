"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { RevealSection } from "@/components/reveal-section"
import { getAllBlogPosts } from "@/lib/blog-data"
import { Clock, ArrowUpRight } from "lucide-react"

export function BlogGrid() {
  const posts = getAllBlogPosts()

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8d0d0] to-[#F1DEDE]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <RevealSection key={post.slug} delay={index * 0.1}>
              <Link href={`/blog/${post.slug}`} className="block group h-full">
                <motion.article
                  whileHover={{ y: -10 }}
                  className="h-full bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#011936]/50 via-transparent to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#F1DEDE]/90 backdrop-blur-sm rounded-full font-mono text-xs text-[#603140]">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1 text-[#011936]/50">
                        <Clock className="w-3 h-3" />
                        <span className="font-mono text-xs">{post.readTime}</span>
                      </div>
                      <span className="font-mono text-xs text-[#011936]/50">{post.date}</span>
                    </div>

                    <h2 className="font-sans text-xl font-bold text-[#011936] mb-3 line-clamp-2 group-hover:text-[#603140] transition-colors">
                      {post.title}
                    </h2>

                    <p className="font-mono text-sm text-[#011936]/70 line-clamp-3 mb-4">{post.excerpt}</p>

                    <div className="flex items-center gap-2 text-[#CB7C89] font-mono text-sm">
                      <span>Citește</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </motion.article>
              </Link>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}
