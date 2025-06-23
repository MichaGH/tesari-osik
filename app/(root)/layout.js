import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import React from 'react'

export default function Layout({ children }) {
  return (
      <main className="font-montserrat">
        <Navbar homepage={false} />
        { children }
        <Footer />
    </main>
  );
}
