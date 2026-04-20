import Link from 'next/link'

export type HeroBlockProps = {
  blockType: 'hero'
  heading: string
  subheading?: string | null
  ctaLabel?: string | null
  ctaHref?: string | null
}

export function HeroBlockComponent({ heading, subheading, ctaLabel, ctaHref }: HeroBlockProps) {
  return (
    <section className="mx-auto px-4 max-w-5xl w-full py-24 flex flex-col items-center text-center gap-6">
      <h1 className="text-5xl sm:text-6xl font-bold leading-tight">{heading}</h1>

      {subheading && (
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
          {subheading}
        </p>
      )}

      {ctaLabel && ctaHref && (
        <Link
          href={ctaHref}
          className="mt-2 px-6 py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-colors duration-200"
        >
          {ctaLabel}
        </Link>
      )}
    </section>
  )
}
