import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/router"
import clsx from "clsx"

const links = [
  {
    name: "INICIO",
    href: "/",
  },
  {
    name: "MÚSICA",
    href: "/musica",
  },
  {
    name: "TALLERES",
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

  return (
    <div
      className="fixed top-0 z-30 
        w-full border-b border-black bg-white
       backdrop-blur-xl transition-all"
    >
      <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between py-10 xl:mx-auto">
        <Link href="/" className="font-display flex items-center text-2xl">
          <h1 className="font-times text-2xl font-extralight">Nicolas García Médici</h1>
        </Link>
        <div className="flex items-center space-x-8">
          {links.map((link) => (
            <Link href={link.href} key={link.name} legacyBehavior>
              <a
                className={clsx(
                  "text-sm font-medium transition-all",
                  isActive(link.href) ? "text-black" : "text-gray-700 hover:text-black"
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
