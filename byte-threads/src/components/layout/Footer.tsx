'use client';

import Link from 'next/link';
import Image from 'next/image';
import { strings } from '@/utils/content';

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-navy border-t border-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logos/logo.svg"
                alt={strings.header.logoAlt}
                width={120}
                height={24}
                className="h-8 w-auto"
              />
              <span className="font-serif text-lg text-foreground">ByteThreads</span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              {strings.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-mono text-copper uppercase tracking-[0.2em] mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {Object.entries(strings.footer.nav).map(([key, label]) => (
                <li key={key}>
                  <button
                    onClick={() => handleNavClick(`#${key}`)}
                    className="text-sm text-foreground/70 hover:text-copper transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-foreground/70 hover:text-copper transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Projects */}
          <div>
            <h4 className="text-xs font-mono text-copper uppercase tracking-[0.2em] mb-4">
              Get In Touch
            </h4>
            <div className="space-y-2 mb-6">
              <a
                href={`mailto:${strings.footer.contact.email}`}
                className="block text-sm text-foreground/70 hover:text-copper transition-colors"
              >
                {strings.footer.contact.email}
              </a>
              <p className="text-sm text-foreground/60">{strings.footer.contact.location}</p>
            </div>

            <h4 className="text-xs font-mono text-copper uppercase tracking-[0.2em] mb-4">
              Projects
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={strings.footer.external.openStudioFlow.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-copper transition-colors"
                >
                  {strings.footer.external.openStudioFlow.label} &rarr;
                </a>
              </li>
              <li>
                <a
                  href={strings.footer.external.smartPropertyCheck.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-copper transition-colors"
                >
                  {strings.footer.external.smartPropertyCheck.label} &rarr;
                </a>
              </li>
              <li>
                <a
                  href={strings.footer.external.showly.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-copper transition-colors"
                >
                  {strings.footer.external.showly.label} &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-foreground/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/50 text-xs">
              &copy; {new Date().getFullYear()} {strings.footer.copyright}
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-foreground/50 hover:text-foreground/70 text-xs transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-foreground/50 hover:text-foreground/70 text-xs transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
