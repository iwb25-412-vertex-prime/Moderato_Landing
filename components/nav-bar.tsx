"use client"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const MENU_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Product", href: "#product" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
  { label: "About Us", href: "#about" },
] as const

interface NavMenuItemsProps {
  className?: string
}

const NavMenuItems = ({ className }: NavMenuItemsProps) => (
  <div className={`flex flex-col gap-1 md:flex-row md:gap-8 ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <Link key={label} href={href}>
        <Button
          variant="ghost"
          className="w-full md:w-auto text-gray-600 hover:text-black font-normal px-0 hover:bg-gray-100/80 md:hover:bg-transparent transition-all duration-200 rounded-md hover:scale-105"
        >
          {label}
        </Button>
      </Link>
    ))}
  </div>
)

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <nav className="py-6 relative">
      <div className="container mx-auto flex items-center justify-between px-1">
        <Link href="/" className="text-2xl font-bold" style={{ color: "#ff9900" }}>
        MODERATO
        </Link>

        <div className="hidden md:flex">
          <NavMenuItems />
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="#login">
            <Button variant="ghost" className="text-gray-600 hover:text-black font-normal hover:bg-transparent">
              Login
            </Button>
          </Link>
          <Link href="#signup">
            <Button
              className="text-white px-6 py-2 rounded-lg"
              style={{ backgroundColor: "#ff9900" }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#e68a00")}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#ff9900")}
            >
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className="flex size-9 items-center justify-center md:hidden text-black"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 bg-white/95 backdrop-blur-sm border border-gray-200 shadow-lg z-50 md:hidden rounded-lg min-w-48 hover:bg-white/98 transition-all duration-200">
            <div className="px-4 py-4">
              <NavMenuItems className="mb-4" />
              <div className="flex flex-col gap-2">
                <Link href="#login">
                  <Button variant="ghost" className="w-full text-gray-600 hover:text-black hover:bg-gray-100/80 transition-all duration-200 rounded-md">
                    Login
                  </Button>
                </Link>
                <Link href="#signup">
                  <Button 
                    className="w-full text-white transition-all duration-200 hover:scale-105 hover:shadow-md rounded-md" 
                    style={{ backgroundColor: "#ff9900" }}
                    onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#e68a00")}
                    onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.backgroundColor = "#ff9900")}
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
