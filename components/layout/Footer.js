import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 py-12 px-6 sm:px-20 text-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center space-y-8 md:space-y-0">

        {/* Left links */}
        <nav className="flex space-x-8 justify-center md:justify-start">
          <Link
            href="/podminky"
            className="text-cyan-600 hover:text-cyan-800 font-medium transition"
          >
            Podmínky
          </Link>
          <Link
            href="/referencni-list"
            className="text-cyan-600 hover:text-cyan-800 font-medium transition"
          >
            Referenční list
          </Link>
          <Link
            href="/kontakt"
            className="text-cyan-600 hover:text-cyan-800 font-medium transition"
          >
            Kontakt
          </Link>
        </nav>

        {/* Center social icons */}
        <div className="flex space-x-6 justify-center">
          <Link
            href="https://instagram.com/tesariosik"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-cyan-600 hover:text-cyan-800 transition"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5C19.44 2 22 4.56 22 7.75v8.5c0 3.19-2.56 5.75-5.75 5.75h-8.5C4.56 22 2 19.44 2 16.25v-8.5C2 4.56 4.56 2 7.75 2zM12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5zm0 7.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4.5-8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
            </svg>
          </Link>
          <Link
            href="https://facebook.com/tesariosik"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-cyan-600 hover:text-cyan-800 transition"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.89h-2.3v6.99C18.34 21.12 22 16.99 22 12z" />
            </svg>
          </Link>
        </div>

        {/* Right company info */}
        <div className="text-center md:text-right text-sm space-y-1 text-gray-500">
          <p className="font-semibold text-cyan-700">Tesari Osik s.r.o.</p>
          <p>© {new Date().getFullYear()} Všechna práva vyhrazena.</p>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
