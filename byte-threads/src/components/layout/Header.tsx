'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { strings } from '@/utils/content';

const navItems = [
  { label: strings.header.nav.services, href: '/#services' },
  { label: strings.header.nav.work, href: '/#work' },
  { label: strings.header.nav.about, href: '/#about' },
  { label: strings.header.nav.process, href: '/#process' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-navy/95 backdrop-blur-xl border-b border-foreground/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center space-x-3 group">
            <Image
              src="/logos/logo.svg"
              alt={strings.header.logoAlt}
              width={150}
              height={30}
              priority
              className="h-10 w-auto"
            />
            <span className="hidden lg:block text-xl font-serif text-foreground tracking-tight">
              {strings.header.brandName}
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm text-foreground/60 hover:text-copper transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 text-sm font-medium text-navy bg-copper hover:bg-copper-light transition-colors duration-300 rounded-full"
            >
              {strings.header.nav.contact}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground/70 hover:text-foreground transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <nav className="px-2 py-6 space-y-1 bg-navy-light/90 backdrop-blur-xl rounded-xl mb-4 border border-foreground/5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left py-3 px-4 text-foreground/70 hover:text-copper hover:bg-foreground/5 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 px-4 text-center text-navy bg-copper hover:bg-copper-light rounded-lg font-medium transition-colors"
            >
              {strings.header.nav.contact}
            </Link>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}
