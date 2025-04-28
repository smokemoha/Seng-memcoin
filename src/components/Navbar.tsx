"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = ['About', 'Roadmap', 'Nft', 'FAQ', 'Community', 'Tokenomics']

  return (
    <div className="sticky top-0 w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 text-[#0D1F31] shadow-md z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-0">
        <div className="flex items-center space-x-3">
          <Image 
            src="/seng.png" 
            alt="BUIDL" 
            width={50} 
            height={50} 
            className="rounded-full"
          />
          <span className="font-bold text-xl md:text-2xl">Seng Token</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8 font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <Link href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors duration-300">
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button className="bg-[#FF8103] hover:bg-[#e67602] text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            Buy
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#0D1F31] hover:text-white transition-colors" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 pt-16 pb-8 t py-4 px-4 shadow-inner">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link}>
                <Link 
                  href={`#${link.toLowerCase()}`}
                  className="block px-2 py-2 text-[#0D1F31] hover:bg-yellow-200 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <button 
                className="w-full bg-[#FF8103] hover:bg-[#e67602] text-white px-4 py-3 rounded-md transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Buy
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar