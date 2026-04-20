import payloadConfig from '@/payload.config'

import { Media } from '@/payload-types'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import { BlogContent } from '../_components/BlogContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config: payloadConfig })

  const result = await payload.find({
    collection: 'blogs',
    where: { slug: { equals: slug } },
    depth: 1,
  })

  const blog = result.docs[0]
  if (!blog) return {}

  const heroUrl = blog.heroImage ? (blog.heroImage as Media).url : undefined

  return {
    title: blog.title,
    openGraph: {
      title: blog.title,
      ...(heroUrl && { images: [{ url: heroUrl }] }),
    },
  }
}

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const payload = await getPayload({ config: payloadConfig })

  const result = await payload.find({
    collection: 'blogs',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const blog = result.docs[0]

  if (!blog) return notFound()

  return (
    <div>
      <BlogContent blog={blog} />
    </div>
  )
}
