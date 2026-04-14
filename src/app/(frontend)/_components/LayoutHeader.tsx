import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'

export default function LayoutHeader() {
  return (
    <header className="mx-auto px-4 max-w-5xl w-full pt-8">
      <div className="container flex items-center justify-between py-4">
        <Link href="/blogs" className="text-2xl font-bold text-primary">
          <span className="text-yellow-500">Adrian</span>.
          <span className="text-yellow-900">Dev</span>
        </Link>
        <nav className="flex items-center gap-6">
          <div className="group">
            <Link href="/posts" className="group-hover:text-yellow-500">
              Posts
            </Link>
            <div className="pointer-events-none relative top-8 group-hover:top-0 transition-all duration-300 bg-yellow-500 h-1 rounded-md opacity-0 group-hover:opacity-100" />
          </div>

          <div className="group">
            <Link href="/about" className="group-hover:text-yellow-500">
              About
            </Link>
            <div className="pointer-events-none relative top-8 group-hover:top-0 transition-all duration-300 bg-yellow-500 h-1 rounded-md opacity-0 group-hover:opacity-100" />
          </div>
          <div className="group">
            <Link href="/login" className="group-hover:text-yellow-500">
              Login
            </Link>
            <div className="pointer-events-none relative top-8 group-hover:top-0 transition-all duration-300 bg-yellow-500 h-1 rounded-md opacity-0 group-hover:opacity-100" />
          </div>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  )
}
