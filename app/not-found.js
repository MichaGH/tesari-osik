import Link from 'next/link';
import React from 'react'

function notFound() {
return (
    <div className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-6xl font-bold text-cyan-700 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">
          Stránka nenalezena. Možná byla přesunuta nebo neexistuje.
        </p>
        <Link
          href="/"
          className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded transition"
        >
          Zpět na hlavní stránku
        </Link>
      </div>
    </div>
  );
}

export default notFound