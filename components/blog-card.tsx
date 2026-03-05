import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Clock } from "lucide-react"

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  author: string
  publishedAt: string
  readTime: string
}

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-shadow duration-300">
      <Link href={`/blog/${post.slug}`}>
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-6">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {post.category}
          </span>
          <h3 className="mt-3 font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="mt-2 text-muted-foreground text-sm line-clamp-2">
            {post.excerpt}
          </p>
          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              <span>{post.publishedAt}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
