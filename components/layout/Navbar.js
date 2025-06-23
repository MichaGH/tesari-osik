'use client'
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ homepage = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    {
        title: 'Zaměření',
        url: '/#zamereni'
    },
    {
        title: 'O Nás',
        url: '/o-nas'
    },
    {
        title: 'Galerie',
        url: '/galerie'
    },
    {
        title: 'Kontakt',
        url: '/kontakt'
    }
  ]

  return (
    <nav 
    className={`
    px-4 lg:px-16 
    ${
        homepage 
        ? "absolute z-50 left-0 right-0 bg-black/45 border-cyan-700/70 backdrop-blur-xs"
        : "relative w-full border-cyan-700 bg-gray-800"
    }
    border-b-2 shadow-xl font-montserrat
       `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between items-center h-18">
          
          {/* Logo */}
          <Link href="/" className="flex" >
            <span className="text-cyan-600  text-shadow-xs text-shadow-white/95 font-extrabold text-4xl font-croissant">

            Tesaři Osík
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 text font-semibold">
            {
                links.map((link, index) => (
                    <Link href={link.url} className={`navbar-link ${link.url == '/kontakt' ? 'font-bold' : ''}`} key={`pc${index}`}>
                        {link.title}
                    </Link>
                ))
            }
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-600"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden text-white text-xl px-4 pb-4 space-y-3 shadow-md">
          {
                links.map((link, index) => (
                    <Link href={link.url} className="block  hover:text-cyan-700 font-semibold transition" onClick={() => setIsOpen(false)} key={`m${index}`}>
                        {link.title}
                    </Link>
                ))
            }
        </div>
      )}
    </nav>
  );
}
