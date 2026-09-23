import Link from "next/link"
import { useState } from "react"
import { IoCloseOutline } from "react-icons/io5"
import { RxHamburgerMenu } from "react-icons/rx"

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto"
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden"
      }
      return !status
    })
  }

  const headerNavLinks = [
    {
      title: "BIO",
      href: "/",
    },
    {
      title: "MÚSICA",
      href: "/musica",
    },
    {
      title: "TALLERES",
      href: "/talleres",
    },
    // {
    //   name: "CONTACTO",
    //   href: "/contacto",
    // },
  ]

  return (
    <div className="mr-4 sm:hidden">
      <button type="button" className="ml-1 mr-1 rounded py-1" aria-label="Toggle Menu" onClick={onToggleNav}>
        <RxHamburgerMenu className="h-5 w-5" />
      </button>
      <div
        className={`fixed left-0 top-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ${
          navShow ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button type="button" className="mr-5 mt-11 rounded" aria-label="Toggle Menu" onClick={onToggleNav}>
            <IoCloseOutline className="h-8 w-8" />
          </button>
        </div>
        <nav className="fixed mt-8 h-full">
          {headerNavLinks.map((link) => (
            <div key={link.title} className="px-12 py-4">
              <Link
                href={link.href}
                className="text-xl font-bold tracking-widest text-gray-900 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300"
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
