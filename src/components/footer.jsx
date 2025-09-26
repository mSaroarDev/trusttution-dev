import Link from "next/link"
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Find Tutors", href: "/tutors" },
    { name: "Become a Tutor", href: "/become-tutor" },
  ]

  const supportLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQs", href: "/faqs" },
    { name: "Blog", href: "/blog" },
  ]

  const subjects = ["Mathematics", "English", "Science", "History", "Languages", "Computer Science"]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="font-heading font-bold text-xl bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                TrustTuition
              </span>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed">
              Professional online tutoring with expert tutors. No contracts, no hidden fees.
              Just quality education from £20/hour.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-blue-300 hover:text-white cursor-pointer transition-colors hover:scale-110" />
              <Twitter className="h-5 w-5 text-blue-300 hover:text-white cursor-pointer transition-colors hover:scale-110" />
              <Instagram className="h-5 w-5 text-blue-300 hover:text-white cursor-pointer transition-colors hover:scale-110" />
              <Linkedin className="h-5 w-5 text-blue-300 hover:text-white cursor-pointer transition-colors hover:scale-110" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-blue-800/50 rounded-lg group-hover:bg-blue-700/50 transition-colors">
                  <Mail className="h-4 w-4 text-blue-300" />
                </div>
                <span className="text-blue-200 text-sm group-hover:text-white transition-colors">
                  hello@trusttuition.com
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-blue-800/50 rounded-lg group-hover:bg-blue-700/50 transition-colors">
                  <Phone className="h-4 w-4 text-blue-300" />
                </div>
                <span className="text-blue-200 text-sm group-hover:text-white transition-colors">
                  +44 20 1234 5678
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-blue-800/50 rounded-lg group-hover:bg-blue-700/50 transition-colors">
                  <MapPin className="h-4 w-4 text-blue-300" />
                </div>
                <span className="text-blue-200 text-sm group-hover:text-white transition-colors">
                  London, United Kingdom
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm">© 2024 TrustTuition. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-blue-300 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-blue-300 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-blue-300 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}