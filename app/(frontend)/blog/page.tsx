import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogCard, BlogPost } from "@/components/blog-card"
import { getPublishedPosts } from "@/lib/payload"

export const metadata: Metadata = {
  title: "Blog | Mdingi Midwifery Services",
  description: "Read our latest articles on pregnancy, maternal health, baby care, and family wellness. Expert advice from our experienced midwifery team.",
}

// Placeholder blog posts - shown when CMS has no posts
const placeholderPosts: BlogPost[] = [
  {
    id: "1",
    slug: "preparing-for-your-first-pregnancy",
    title: "Preparing for Your First Pregnancy: A Complete Guide",
    excerpt: "Everything you need to know about preparing your body and mind for the beautiful journey of pregnancy.",
    image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=800&h=500&fit=crop&q=80",
    category: "Pregnancy",
    author: "Dr. Mdingi",
    publishedAt: "March 1, 2026",
    readTime: "5 min read",
  },
  {
    id: "2",
    slug: "benefits-of-breastfeeding",
    title: "The Amazing Benefits of Breastfeeding for Mother and Baby",
    excerpt: "Discover how breastfeeding nurtures both mother and child, creating lasting health benefits and a special bond.",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=500&fit=crop&q=80",
    category: "Postnatal",
    author: "Dr. Mdingi",
    publishedAt: "February 25, 2026",
    readTime: "4 min read",
  },
  {
    id: "3",
    slug: "baby-immunization-schedule",
    title: "Understanding Your Baby's Immunization Schedule",
    excerpt: "A comprehensive guide to childhood vaccinations and why they are essential for your baby's health.",
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=800&h=500&fit=crop&q=80",
    category: "Baby Wellness",
    author: "Dr. Mdingi",
    publishedAt: "February 18, 2026",
    readTime: "6 min read",
  },
  {
    id: "4",
    slug: "natural-birth-what-to-expect",
    title: "Natural Birth: What to Expect and How to Prepare",
    excerpt: "Learn about the natural birth process, pain management techniques, and how to create your ideal birth plan.",
    image: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=800&h=500&fit=crop&q=80",
    category: "Birth",
    author: "Dr. Mdingi",
    publishedAt: "February 10, 2026",
    readTime: "7 min read",
  },
  {
    id: "5",
    slug: "postpartum-recovery-tips",
    title: "Essential Postpartum Recovery Tips for New Mothers",
    excerpt: "Practical advice for healing and thriving in the weeks after giving birth, from nutrition to emotional support.",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=500&fit=crop&q=80",
    category: "Postnatal",
    author: "Dr. Mdingi",
    publishedAt: "February 3, 2026",
    readTime: "5 min read",
  },
  {
    id: "6",
    slug: "family-planning-options",
    title: "Exploring Your Family Planning Options",
    excerpt: "An overview of contraception methods and fertility awareness to help you make informed decisions.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=500&fit=crop&q=80",
    category: "Family Planning",
    author: "Dr. Mdingi",
    publishedAt: "January 28, 2026",
    readTime: "6 min read",
  },
]

async function getBlogPosts(): Promise<{ posts: BlogPost[]; isFromCMS: boolean }> {
  try {
    const cmsPosts = await getPublishedPosts()
    
    if (cmsPosts.length > 0) {
      const formattedPosts: BlogPost[] = cmsPosts.map((post) => ({
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        image: post.featuredImage?.url || "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=800&h=500&fit=crop&q=80",
        category: post.category?.name || "General",
        author: post.author,
        publishedAt: post.publishedAt 
          ? new Date(post.publishedAt).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })
          : "Recently published",
        readTime: post.readTime || "5 min read",
      }))
      return { posts: formattedPosts, isFromCMS: true }
    }
    
    return { posts: placeholderPosts, isFromCMS: false }
  } catch {
    // If Payload CMS is not configured yet, use placeholder data
    return { posts: placeholderPosts, isFromCMS: false }
  }
}

export default async function BlogPage() {
  const { posts, isFromCMS } = await getBlogPosts()

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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {/* CMS Status Notice */}
            {!isFromCMS && (
              <div className="mt-16 text-center p-8 rounded-2xl bg-muted/50 border border-border">
                <p className="text-muted-foreground">
                  These are sample posts. Access <a href="/admin" className="text-primary hover:underline">/admin</a> to create your first user and start adding blog content through Payload CMS.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
 
    </div>
  )
}
