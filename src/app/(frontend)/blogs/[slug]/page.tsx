import payloadConfig from '@/payload.config'
import { getPayload } from 'payload'
import { BlogContent } from '../_components/BlogContent'

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  console.log(slug)
  const payload = await getPayload({ config: payloadConfig })

  const result = await payload.find({
    collection: 'blogs',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  console.log(result.docs)
  const blog = result.docs[0]

  return (
    <div>
      <BlogContent blog={blog} />
    </div>
  )
}
