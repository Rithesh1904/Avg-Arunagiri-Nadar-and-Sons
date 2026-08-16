import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import AppMenuBar from './app-menu-bar';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Calculator', path: '/calculator' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
          isScrolled
            ? 'py-3'
            : (isHomePage 
                ? 'py-4 bg-transparent border-b border-white/[0.35]' 
                : 'py-4 border-b border-white/[0.08] shadow-2xl bg-gradient-to-r from-[#030712] via-[#0A101D] to-[#030712]')
        )}
      >
        {/* Removed video background in favor of the royal midnight blue/black solid gradient */}
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className={cn(
            "flex items-center justify-between transition-all duration-500",
            isScrolled 
              ? "bg-white/85 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-4 md:px-6 py-3 rounded-3xl" 
              : "px-0 py-0"
          )}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group relative z-10">
              <span className="text-3xl md:text-4xl font-black text-[#F4B400] tracking-tighter transition-all duration-500 drop-shadow-md">
                AVG
              </span>
              <div className="flex flex-col">
                <span className={cn(
                  "text-xl md:text-2xl font-black leading-none tracking-tighter transition-all duration-500 drop-shadow-sm",
                  isScrolled ? "text-industrial-900" : "text-[#F5F7FA]"
                )}>
                  Arunagiri Nadar Sons
                </span>
                <span className={cn(
                  "text-[0.65rem] md:text-xs font-black tracking-[0.25em] uppercase mt-1",
                  isScrolled ? "text-industrial-500" : "text-[#9CA6B5]"
                )}>
                  Premium Building Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <AppMenuBar isScrolled={isScrolled} />
              
              {!isScrolled && (
                <div className="w-px h-7 bg-white/10 mx-6" />
              )}
              {isScrolled && (
                <div className="border-l border-industrial-200/50 pl-6 ml-2 h-7" />
              )}
              
              <div className="flex items-center gap-4">
                <a
                  href="https://wa.me/919842874256"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center justify-center transition-all duration-300",
                    !isScrolled
                      ? "w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 text-green-500 hover:bg-white/[0.06]" 
                      : "w-11 h-11 rounded-xl bg-green-50 text-green-600 hover:bg-green-100 shadow-sm"
                  )}
                  aria-label="WhatsApp Us"
                >
                  <MessageCircle size={!isScrolled ? 20 : 22} />
                </a>
                <Link
                  to="/quote"
                  className={cn(
                    "font-semibold transition-all duration-300",
                    !isScrolled
                      ? "px-6 py-2.5 rounded-md bg-[#F4B400] text-[#111827] text-[15px] hover:bg-[#E0A800]"
                      : "px-6 py-2.5 rounded-xl bg-industrial-900 text-white text-sm shadow-md hover:shadow-lg"
                  )}
                >
                  Get a Quote
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className={cn(
                "lg:hidden p-2.5 rounded-xl transition-colors",
                !isScrolled ? "text-white bg-white/10" : "text-industrial-800 bg-industrial-50"
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 pb-6 px-4 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 h-full">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={cn(
                        'block text-2xl font-bold py-2 border-b border-industrial-100',
                        location.pathname === link.path
                          ? 'text-accent-600'
                          : 'text-industrial-800'
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8 flex flex-col gap-4">
                <a
                  href="https://wa.me/919842874256"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-50 text-green-700 py-3 rounded-md font-semibold"
                >
                  <MessageCircle size={20} />
                  WhatsApp Us
                </a>
                <a
                  href="tel:+919842874256"
                  className="flex items-center justify-center gap-2 bg-industrial-100 text-industrial-800 py-3 rounded-md font-semibold"
                >
                  <Phone size={20} />
                  Call 9842874256
                </a>
                <Link
                  to="/quote"
                  className="flex items-center justify-center gap-2 bg-accent-500 text-white py-4 rounded-md font-bold text-lg shadow-sm"
                >
                  Get a Quote
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
