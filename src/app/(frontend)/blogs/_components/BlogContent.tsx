'use client'

import { Blog, User } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const BlogContent = ({ blog }: { blog: Blog }) => {
  return (
    <div className="blog-content flex justify-center px-8 py-12 ">
      <div className="max-w-2xl">
        <div>
          <h1 className="font-bold text-3xl lg:text-4xl">{blog.title}</h1>
          <div className="flex flex-col-reverse gap-2 my-10 lg:flex-row lg:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-200" />
              <p className="text-sm">{(blog.author as User).email}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">8 min read</span>
              <div className="w-1 h-1 rounded-full bg-gray-500" />
              <span className="text-sm">
                {new Date(blog.publishedAt as string).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
          </div>
        </div>
        <RichText data={blog.Content} className="rich-text" />
      </div>
    </div>
  )
}
