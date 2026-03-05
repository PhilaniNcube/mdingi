import { Metadata } from "next"
import Link from "next/link"
import { BlogCard, BlogPost } from "@/components/blog-card"
import { getPublishedPosts } from "@/lib/payload"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Blog | Mdingi Midwifery Services",
  description: "Read our latest articles on pregnancy, maternal health, baby care, and family wellness. Expert advice from our experienced midwifery team.",
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const cmsPosts = await getPublishedPosts()

  return cmsPosts.map((post) => ({
    id: String(post.id),
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    image:
      post.featuredImage?.url ||
      "/placeholder.svg",
    category: post.category?.name || "General",
    author: post.author,
    publishedAt: post.publishedAt
      ? new Date(post.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "Recently published",
    readTime: post.readTime || "5 min read",
  }))
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary/50 to-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Our Blog
            </span>
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
              Health Tips and Insights
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert advice and helpful resources on pregnancy, maternal health,
              baby care, and family wellness from our experienced team.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="rounded-full bg-muted p-6 mb-6">
                  <FileText className="h-12 w-12 text-muted-foreground" />
                </div>
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  No articles yet
                </h2>
                <p className="mt-2 text-muted-foreground max-w-md">
                  We&apos;re working on new content. Check back soon for expert
                  advice on pregnancy, maternal health, and family wellness.
                </p>
                <Button className="mt-6" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
