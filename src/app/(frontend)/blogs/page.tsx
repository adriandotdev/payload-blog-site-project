import { Blog } from '@/payload-types'
import config from '@/payload.config'
import { getPayload } from 'payload'
import { BlogList } from './_components/BlogList'

export default async function BlogsPage() {
  const payload = await getPayload({ config })

  const { docs: posts } = await payload.find({
    collection: 'blogs',
    where: { _status: { equals: 'published' } },
    sort: '-createdAt',
    limit: 10,
    depth: 2,
    select: {
      title: true,
      slug: true,
      author: true,
      createdAt: true,
      heroImage: true,
      publishedAt: true,
    },
  })

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50">Latest Posts</h1>
        <div className="h-2 w-16 rounded-md bg-yellow-500 mb-10" />
      </div>
      {posts.length === 0 && <p className="text-gray-500">No posts found.</p>}
      <BlogList posts={posts as Blog[]} />
    </main>
  )
}
