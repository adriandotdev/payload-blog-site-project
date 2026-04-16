import { Blog, Media, User } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'

type BlogListProp = {
  posts: Blog[]
}

export const BlogList = ({ posts }: BlogListProp) => {
  return (
    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        const image = typeof post.heroImage === 'object' ? post.heroImage : null
        const cardImage = image?.sizes?.card?.url ?? image?.url ?? null
        const alt = image?.alt ?? post.title ?? ''
        const profilePhoto = ((post.author as User).profilePhoto as Media).sizes?.profile?.url

        return (
          <li key={post.id} className="group">
            <Link
              href={`/blogs/${post.slug}`}
              className="flex flex-col rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 h-full"
            >
              <div className="relative w-full aspect-3/2 bg-gray-100 ">
                {cardImage ? (
                  <Image
                    src={cardImage}
                    alt={alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 group-hover:bg-black/50"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 group-hover:bg-black/50 group-hover:scale-105 transition-all duration-300">
                  <h1 className="font-semibold text-xl absolute opacity-0 top-full group-hover:top-1/2 left-1/2 -translate-x-1/2 transition-all duration-300 group-hover:opacity-100 text-white">
                    Read More
                  </h1>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-5 gap-4">
                {/* Badge */}
                <div className="px-4 py-[0.5] w-max bg-blck bg-black/80 text-white rounded-lg drop-shadow-2xl border border-gray-100">
                  <span className="text-[12px] font-medium">Learning</span>
                </div>
                <span className="text-[12px]">
                  Published{' '}
                  {new Date(post.publishedAt as string).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                <h2 className="text-lg font-semibold leading-snug group-hover:text-blue-600 transition-colors dark:group-hover:text-yellow-500">
                  {post.title}
                </h2>

                <div className="flex  items-center gap-3 mt-4">
                  {profilePhoto && (
                    <Image
                      src={profilePhoto}
                      alt="profile-photo"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                  )}
                  <p className="text-sm text-gray-500 dark:text-slate-50">
                    {typeof post.author === 'object' && post.author?.email
                      ? post.author.name
                      : 'Unknown Author'}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
