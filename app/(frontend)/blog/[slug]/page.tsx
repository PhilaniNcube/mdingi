import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react"
import { getPostBySlug, getPublishedPosts } from "@/lib/payload"
import { RichText } from "@payloadcms/richtext-lexical/react"
import type {
  SerializedEditorState,
  SerializedLexicalNode,
} from "@payloadcms/richtext-lexical/lexical"

type Props = {
  params: Promise<{ slug: string }>
}

async function getPost(slug: string) {
  const cmsPost = await getPostBySlug(slug)

  if (!cmsPost) return null

  return {
    id: String(cmsPost.id),
    slug: cmsPost.slug,
    title: cmsPost.title,
    excerpt: cmsPost.excerpt,
    image:
      cmsPost.featuredImage?.url ||
      "/placeholder.svg",
    category: cmsPost.category?.name || "General",
    author: cmsPost.author,
    publishedAt: cmsPost.publishedAt
      ? new Date(cmsPost.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "Recently published",
    readTime: cmsPost.readTime || "5 min read",
    content: cmsPost.content,
  }
}

export async function generateStaticParams() {
  const posts = await getPublishedPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: "Post Not Found | Mdingi Midwifery Services",
    }
  }

  return {
    title: `${post.title} | Mdingi Midwifery Services`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Image */}
        <div className="relative h-[40vh] lg:h-[50vh] bg-muted">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        </div>

        {/* Article Content */}
        <article className="mx-auto max-w-3xl px-4 lg:px-8 -mt-32 relative z-10">
          <div className="bg-card rounded-2xl p-6 lg:p-10 shadow-lg border border-border">
            <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2">
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {post.category}
            </span>

            <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
              {post.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                <span>{post.publishedAt}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div
              className="mt-8 prose prose-lg max-w-none
                prose-headings:font-serif prose-headings:font-semibold prose-headings:text-foreground
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-li:text-muted-foreground
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground"
            >
              <RichText
                data={
                  post.content as SerializedEditorState<SerializedLexicalNode>
                }
              />
            </div>

            {/* CTA */}
            <div className="mt-12 p-6 rounded-xl bg-secondary/50 border border-border text-center">
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Have Questions?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Our team is here to help. Book a consultation to discuss your
                needs.
              </p>
              <Button className="mt-4" asChild>
                <Link href="/contact">Book an Appointment</Link>
              </Button>
            </div>
          </div>
        </article>

        {/* Spacing */}
        <div className="h-16 lg:h-24" />
      </main>
    </div>
  )
}
