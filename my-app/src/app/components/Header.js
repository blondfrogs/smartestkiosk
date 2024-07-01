'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Header() {
  const pathname = usePathname();

  return (
    <div className='fixed top-2 left-0 right-0 z-50'>
      <div className='max-w-6xl mx-auto'>
        <header className="overflow-hidden bg-white border border-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg rounded-3xl px-5 p-1 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" //style={{ WebkitTextStroke: '0.5px #EF4444', textStroke: '0.5px #EF4444' }} 
            className="text-gray-900 font-bold text-2xl ">
              easy2u
            </Link>
          </div>
          <nav className="flex-grow flex justify-center items-center gap-8 text-gray-800 font-semibold relative">
          <Link href="/" className={`relative ${pathname === '/' ? 'text-red-900' : ''}`}>
    Home
  </Link>
  <Link href="/about" className={`relative ${pathname === '/about' ? 'text-red-900' : ''}`}>
    About us
  </Link>
  <Link href="/product" className={`relative ${pathname === '/product' ? 'text-red-900' : ''}`}>
    Our Product
  </Link>
  <Link href="/solutions" className={`relative ${pathname.includes('/solutions') ? 'text-red-900' : ''}`}>
    Market Solutions
  </Link>
          </nav>
          <div className="ml-auto text-gray-800 font-semibold">
    <Link href="/contact" className={`relative ${pathname === '/contact' ? 'text-red-900' : ''}`}>
      Contact us
    </Link>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
