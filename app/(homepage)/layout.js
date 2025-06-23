import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import React from 'react'

export default function Layout({ children }) {
  return (
      <main className="font-montserrat bg-grad-1">
        <Navbar homepage={true} />
        
        { children }
        <Footer />
    </main>
  );
}
