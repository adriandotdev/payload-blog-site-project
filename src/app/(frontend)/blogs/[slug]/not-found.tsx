'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-24 flex flex-col items-center text-center gap-6">
      <p className="text-8xl font-bold text-yellow-500">404</p>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">Post not found</h1>
      <p className="text-slate-500 dark:text-slate-400 max-w-md">
        The blog post you&apos;re looking for doesn&apos;t exist or may have been removed.
      </p>
      <Link
        href="/blogs"
        className="mt-2 px-6 py-2.5 rounded-full bg-yellow-500 text-white font-semibold hover:bg-yellow-400 transition-colors"
      >
        Back to blogs
      </Link>
    </div>
  )
}
