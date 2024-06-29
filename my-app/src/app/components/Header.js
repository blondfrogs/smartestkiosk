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
            className="text-gray-800 font-bold text-4xl italic">
              easy2u
            </Link>
          </div>
          <nav className="flex-grow flex justify-center items-center gap-8 text-gray-800 font-semibold relative">
            <Link href="/" className="relative">
              Home
              {pathname === '/' && <span className="absolute left-0 bottom-[-12px] w-full h-[2px] bg-red-500"></span>}
            </Link>
            <Link href="/about" className="relative">
              About us
              {pathname === '/about' && <span className="absolute left-0 bottom-[-12px] w-full h-[2px] bg-red-500"></span>}
            </Link>
            <Link href="/product" className="relative">
              Our Product
              {pathname === '/product' && <span className="absolute left-0 bottom-[-12px] w-full h-[2px] bg-red-500"></span>}
            </Link>
            <Link href="/solutions" className="relative">
              Market Solutions
              {pathname === '/solutions' && <span className="absolute left-0 bottom-[-12px] w-full h-[2px] bg-red-500"></span>}
            </Link>
          </nav>
          <div className="ml-auto">
            <Link href="/#contact" className="relative">
              Contact us
              {pathname === '/#contact' && <span className="absolute left-0 bottom-[-12px] w-full h-[2px] bg-red-500"></span>}
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
