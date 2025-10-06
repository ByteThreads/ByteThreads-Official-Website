'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { strings } from '@/utils/content';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center space-x-3 cursor-pointer">
            <Image
              src="/logos/logo.svg"
              alt={strings.header.logoAlt}
              width={150}
              height={30}
              priority
              className="h-11 w-auto"
            />
            <span className="hidden lg:block text-2xl font-bold text-black">
              {strings.header.brandName}
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-2 h-full items-center">
            <Link
              href="/"
              className="relative px-4 h-full flex items-center text-gray-700 transition-all duration-300 overflow-hidden group"
            >
              <span className="absolute inset-0 bg-black transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
              <span className="relative z-10 group-hover:text-white group-hover:font-bold transition-all duration-300">{strings.header.nav.home}</span>
            </Link>
            <a
              href="/contact"
              className="relative px-4 h-full flex items-center text-gray-700 transition-all duration-300 overflow-hidden group"
            >
              <span className="absolute inset-0 bg-black transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
              <span className="relative z-10 group-hover:text-white group-hover:font-bold transition-all duration-300">{strings.header.nav.contact}</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {strings.header.nav.home}
            </Link>
            <a
              href="/contact"
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {strings.header.nav.contact}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}