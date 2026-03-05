import { getPayload } from 'payload'
import config from '@payload-config'

export const getPayloadClient = async () => {
  return getPayload({ config })
}

export type Post = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: unknown
  featuredImage?: {
    url: string
    alt: string
  } | null
  category?: {
    id: string
    name: string
    slug: string
  } | null
  author: string
  status: 'draft' | 'published'
  publishedAt: string
  readTime?: string
  createdAt: string
  updatedAt: string
}

export type Category = {
  id: string
  name: string
  slug: string
  description?: string
}

export async function getPublishedPosts(): Promise<Post[]> {
  const payload = await getPayloadClient()
  
  const { docs } = await payload.find({
    collection: 'posts',
    where: {
      status: {
        equals: 'published',
      },
    },
    sort: '-publishedAt',
    depth: 2,
  })
  
  return docs as unknown as Post[]
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const payload = await getPayloadClient()
  
  const { docs } = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: slug,
      },
      status: {
        equals: 'published',
      },
    },
    depth: 2,
    limit: 1,
  })
  
  return (docs[0] as unknown as Post) || null
}

export async function getCategories(): Promise<Category[]> {
  const payload = await getPayloadClient()
  
  const { docs } = await payload.find({
    collection: 'categories',
    sort: 'name',
  })
  
  return docs as unknown as Category[]
}

export async function getPostsByCategory(categorySlug: string): Promise<Post[]> {
  const payload = await getPayloadClient()
  
  const { docs: categories } = await payload.find({
    collection: 'categories',
    where: {
      slug: {
        equals: categorySlug,
      },
    },
    limit: 1,
  })
  
  if (!categories[0]) return []
  
  const { docs } = await payload.find({
    collection: 'posts',
    where: {
      and: [
        {
          status: {
            equals: 'published',
          },
        },
        {
          category: {
            equals: categories[0].id,
          },
        },
      ],
    },
    sort: '-publishedAt',
    depth: 2,
  })
  
  return docs as unknown as Post[]
}
