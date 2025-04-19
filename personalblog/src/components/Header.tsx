import Link from 'next/link'

export default function Header() {
  return (
    <header className="p-4 bg-gray-800 text-white">
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
      </nav>
    </header>
  )
}
