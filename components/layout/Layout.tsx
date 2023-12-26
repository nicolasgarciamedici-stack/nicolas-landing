import React from "react"
import { Toaster } from "react-hot-toast"
import Footer from "./Footer"
import Navbar from "./Navbar"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Toaster
        toastOptions={{
          duration: 5000,
          position: "top-right",
        }}
      />
    </div>
  )
}

export default Layout
