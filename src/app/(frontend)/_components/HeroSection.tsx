import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="mx-auto px-4 max-w-5xl w-full py-24 flex flex-col items-center text-center gap-6">
      <span className="text-sm font-semibold uppercase tracking-widest text-yellow-500">
        Welcome to my blog
      </span>

      <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
        Hi, I&apos;m <span className="text-yellow-500">Adrian</span>
        <span className="text-yellow-900">.</span>
      </h1>

      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
        I write about web development, software engineering, and the things I learn along the way.
        Dive in and explore my latest posts.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
        <Link
          href="/blogs"
          className="px-6 py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-colors duration-200"
        >
          Read the Blog
        </Link>
        <Link
          href="/about"
          className="px-6 py-3 rounded-lg border border-yellow-500 text-yellow-500 font-semibold hover:bg-yellow-500 hover:text-black transition-colors duration-200"
        >
          About Me
        </Link>
      </div>
    </section>
  )
}
