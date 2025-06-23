import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Test2() {
  return (
    <section className="relative h-screen w-full">
      {/* Background image */}
      <div className="absolute inset-0 ">
        <Image
          src="/images/hero-section.webp"
          alt="Roubenka v horách"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" /> {/* optional dark overlay for contrast */}
      </div>

      {/* Content centered */}
      <div className="relative z-10 h-full w-full flex items-center justify-center px-6 text-center text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight drop-shadow-md text-shadow-md text-shadow-black/70">
            Roubenky s duší přírody
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 drop-shadow-sm text-shadow-md ">
            Poctivá práce, tradiční řemeslo a láska ke dřevu – vytváříme domovy, které žijí.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
  <Link
    href="/#zamereni"
    className="group inline-flex items-center justify-center bg-cyan-700 text-white px-6 py-3 rounded-lg shadow-xl hover:bg-cyan-600 transition-all duration-300"
  >
    <span className="relative">
      Naše služby
      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
    </span>
  </Link>
  <Link
    href="/galerie"
    className="group inline-flex items-center justify-center text-white/90 hover:text-cyan-300 transition-all duration-300 "
  >
    <span className="relative">
      Naše realizace
      <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-cyan-300 transition-all group-hover:w-full"></span>
    </span>
    <svg
      className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </Link>
</div>
        </div>
      </div>
    </section>

  )
}

export default Test2