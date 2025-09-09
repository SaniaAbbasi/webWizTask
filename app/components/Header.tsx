'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <header className="bg-white shadow-md p-4">
      <nav className="container mx-auto flex justify-center space-x-8">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`font-medium transition-colors ${
              pathname === href
                ? 'text-blue-600'
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
