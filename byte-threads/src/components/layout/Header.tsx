'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-xl shadow-2xl shadow-blue-500/10 border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center space-x-3 cursor-pointer group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-500/40 transition-all duration-300" />
              <Image
                src="/logos/logo.svg"
                alt={strings.header.logoAlt}
                width={150}
                height={30}
                priority
                className="h-12 w-auto relative z-10"
              />
            </motion.div>
            <motion.span
              className={`hidden lg:block text-2xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {strings.header.brandName}
            </motion.span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Link href="/">
              <motion.div
                className={`relative px-6 py-2.5 rounded-full overflow-hidden group cursor-pointer ${
                  isScrolled ? 'text-gray-300' : 'text-white/90'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute inset-0 bg-white/5 backdrop-blur-sm group-hover:bg-transparent transition-all duration-300" />
                <span className="relative z-10 font-medium group-hover:text-white transition-colors duration-300">
                  {strings.header.nav.home}
                </span>
              </motion.div>
            </Link>
            <a href="/contact">
              <motion.div
                className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium overflow-hidden group cursor-pointer shadow-lg shadow-blue-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  {strings.header.nav.contact}
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
              </motion.div>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-white bg-white/10' : 'text-white bg-white/5'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
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
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden border-t border-white/10"
        >
          <nav className="px-4 py-6 space-y-3 bg-black/50 backdrop-blur-xl">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <motion.div
                className="block py-3 px-4 rounded-lg text-white bg-white/5 hover:bg-blue-600/50 transition-colors"
                whileHover={{ x: 5 }}
              >
                {strings.header.nav.home}
              </motion.div>
            </Link>
            <a
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <motion.div
                className="block py-3 px-4 rounded-lg text-white bg-gradient-to-r from-blue-600 to-cyan-600"
                whileHover={{ x: 5 }}
              >
                {strings.header.nav.contact}
              </motion.div>
            </a>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}