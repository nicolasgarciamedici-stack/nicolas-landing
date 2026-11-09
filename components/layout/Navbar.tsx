import { FaBars, FaTimes } from "react-icons/fa"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState } from "react"
import MobileNav from "./MobileNav"

const links = [
  {
    name: "BIO",
    href: "/",
  },
  {
    name: "MÚSICA",
    href: "/musica",
  },
  {
    name: "TALLER",
    href: "/talleres",
  },
  // {
  //   name: "CONTACTO",
  //   href: "/contacto",
  // },
]

const Navbar = () => {
  const router = useRouter()
  const isActive = (href: string) => router.pathname === href
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div
      className="sticky top-0 z-30 
        flex w-full items-center justify-between border-b border-black bg-white transition-all"
    >
      <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between py-10 xl:mx-auto">
        <Link href="/" className="font-display flex items-center text-2xl">
          <h1 className="font-times text-[1rem] font-extralight md:text-2xl">Nicolas García Médici</h1>
        </Link>
        <div className="hidden items-center space-x-2 sm:flex md:space-x-8">
          {links.map((link) => (
            <Link href={link.href} key={link.name} legacyBehavior>
              <a
                className={clsx(
                  "text-xs font-medium transition-all md:text-sm",
                  isActive(link.href) ? "text-black" : "text-gray-700 hover:text-black"
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
      <MobileNav />
    </div>
  )
}

export default Navbar
