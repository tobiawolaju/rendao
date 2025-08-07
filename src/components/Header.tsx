'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { WalletConnect } from './WalletConnect';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/benefactors', label: 'Benefactors' },
    { href: '/testimonials', label: 'Testimonials' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-nouns-black bg-nouns-white text-nouns-black">
      <div className="container mx-auto h-16 flex items-center justify-between px-4">
        <Link href="/" className="text-3xl font-extrabold uppercase tracking-tighter">
          RenDAO
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-lg font-bold">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-nouns-red transition-colors duration-200">
              {link.label}
            </Link>
          ))}
          <WalletConnect />
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 border-2 border-nouns-black shadow-nouns-sm bg-nouns-white">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-nouns-white border-b-4 border-nouns-black shadow-lg">
          <nav className="flex flex-col items-center space-y-4 p-4 text-xl font-bold">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="w-full text-center py-3 hover:bg-nouns-black hover:text-nouns-white transition-colors duration-200">
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <WalletConnect />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};