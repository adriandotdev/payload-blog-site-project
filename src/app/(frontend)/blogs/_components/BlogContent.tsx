'use client'

import { Blog } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const BlogContent = ({ blog }: { blog: Blog }) => {
  return (
    <div className="blog-content flex justify-center px-8">
      <div className="">
        <h1 className="font-bold text-2xl lg:text-4xl">{blog.title}</h1>
        <RichText data={blog.Content} className="rich-text" />
      </div>
    </div>
  )
}
