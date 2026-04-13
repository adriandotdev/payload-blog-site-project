'use client'

import { Blog, Media, User } from '@/payload-types'
import { JSXConverter } from '@/utils/JSXConverter'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const BlogContent = ({ blog }: { blog: Blog }) => {
  if (!blog || !blog?.slug || !blog?.title || !blog?.author)
    return (
      <div className="w-full h-dvh flex flex-col items-center justify-start pt-10">
        <h1 className="font-bold text-2xl">Please provide necessary details</h1>
        <p>Waiting for preview...</p>
      </div>
    )
  return (
    <div className="blog-content flex justify-center px-8 py-12 flex-col items-center">
      {blog?.heroImage && (
        <img
          src={
            (blog.heroImage as Media).sizes?.hero?.url ?? ((blog.heroImage as Media).url as string)
          }
          className="w-full max-w-4xl"
        />
      )}
      <div className="max-w-2xl mt-8">
        <div>
          {blog?.title && (
            <h1 className="font-bold text-3xl lg:text-4xl wrap-break-word leading-14 text-slate-900 dark:text-white">
              {blog.title}
            </h1>
          )}
          <div className="flex flex-col-reverse gap-2 my-10 lg:flex-row lg:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-200" />
              {blog?.author && <p className="text-sm">{(blog.author as User).email}</p>}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">8 min read</span>
              <div className="w-1 h-1 rounded-full bg-gray-500" />
              {blog?.publishedAt ? (
                <span className="text-sm">
                  {new Date(blog.publishedAt as string).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              ) : (
                <span className="text-sm font-semibold">Draft</span>
              )}
            </div>
          </div>
        </div>
        {blog?.Content && (
          <RichText data={blog.Content} className="rich-text" converters={JSXConverter} />
        )}
      </div>
    </div>
  )
}
