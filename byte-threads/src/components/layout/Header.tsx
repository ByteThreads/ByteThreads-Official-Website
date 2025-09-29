'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { strings } from '@/utils/content';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
          <div className="flex-shrink-0 flex items-center space-x-3">
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
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
              {strings.header.nav.home}
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              {strings.header.nav.about}
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              {strings.header.nav.services}
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">
              {strings.header.nav.portfolio}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              {strings.header.nav.contact}
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600 transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}