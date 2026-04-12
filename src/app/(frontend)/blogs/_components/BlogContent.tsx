'use client'

import { Blog } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const BlogContent = ({ blog }: { blog: Blog }) => {
  return (
    <div className="blog-content">
      <h1>{blog.title}</h1>
      <RichText data={blog.Content} />
    </div>
  )
}
