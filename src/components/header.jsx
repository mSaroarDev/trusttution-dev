"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, GraduationCap, User } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Tutors", href: "/tutors" },
    { name: "Become a Tutor", href: "/become-tutor" },
    { name: "About", href: "/about" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ]

  return (
    <header className="backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 py-3 shadow-sm bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <span className="font-heading font-bold text-2xl text-white bg-clip-text">
              TrustTuition
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-blue-600 px-3 py-2 text-md font-medium transition-colors duration-200 hover:bg-blue-50 rounded-lg"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <User className="h-4 w-4" />
              Login
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border border-slate-200 rounded-lg mt-2 shadow-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-blue-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/login"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white block px-3 py-3 rounded-lg text-base font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 mt-4 text-center flex items-center justify-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-4 w-4" />
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}