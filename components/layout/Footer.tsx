import React from "react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <p className="font-times text-sm">
            &copy; {new Date().getFullYear()} Nicolas García Médici. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
