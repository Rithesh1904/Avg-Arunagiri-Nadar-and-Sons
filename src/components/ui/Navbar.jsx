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
            ? 'py-2.5 sm:py-3'
            : (isHomePage 
                ? 'py-3 sm:py-3.5 lg:py-4 bg-transparent border-b border-white/10' 
                : 'py-3.5 sm:py-4 border-b border-white/[0.08] shadow-2xl bg-gradient-to-r from-[#030712] via-[#0A101D] to-[#030712]')
        )}
      >
        {/* Container with robust responsive padding */}
        <div className="container mx-auto px-3.5 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className={cn(
            "flex items-center justify-between transition-all duration-500",
            isScrolled 
              ? "bg-white/90 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 rounded-2xl" 
              : "px-0 py-0"
          )}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group relative z-10 shrink-0 min-w-0 max-w-[82%] sm:max-w-none">
              {/* AVG Authentic Roof Peaks Brand Logo Mark */}
              <div className="flex flex-col items-center justify-center shrink-0">
                <img
                  src={isScrolled ? "/assets/avg-logo-dark.png" : "/assets/avg-logo-light.png"}
                  alt="A.V.G. Logo"
                  className="h-7.5 sm:h-9 lg:h-9.5 xl:h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-sm"
                />
                <span className={cn(
                  "text-[6.5px] sm:text-[7.5px] lg:text-[8px] font-black tracking-[0.2em] sm:tracking-[0.22em] uppercase mt-0.5 sm:mt-1 px-1 sm:px-1.5 py-[1px] rounded transition-all duration-500 leading-none whitespace-nowrap",
                  isScrolled 
                    ? "bg-amber-500/10 text-amber-800 border border-amber-500/25" 
                    : "bg-white/10 text-amber-300 border border-amber-400/30 backdrop-blur-sm shadow-sm"
                )}>
                  SINCE 1970
                </span>
              </div>

              {/* Company Wordmark */}
              <div className="flex flex-col min-w-0 justify-center">
                <span className={cn(
                  "text-[15px] sm:text-lg lg:text-xl xl:text-2xl font-black leading-tight sm:leading-none tracking-tight sm:tracking-tighter transition-all duration-500 drop-shadow-sm truncate",
                  isScrolled ? "text-industrial-900" : "text-[#F5F7FA]"
                )}>
                  Arunagiri Nadar Sons
                </span>
                <span className={cn(
                  "text-[0.55rem] sm:text-[0.62rem] lg:text-[0.68rem] xl:text-xs font-bold tracking-[0.14em] sm:tracking-[0.2em] uppercase mt-0.5 sm:mt-1 truncate",
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
                <div className="w-px h-6 bg-white/15 mx-4 xl:mx-6" />
              )}
              {isScrolled && (
                <div className="border-l border-industrial-200/60 pl-4 xl:pl-6 ml-2 h-6" />
              )}
              
              <div className="flex items-center gap-3 xl:gap-4">
                <a
                  href="https://wa.me/919842874256"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center justify-center transition-all duration-300",
                    !isScrolled
                      ? "w-9 h-9 xl:w-10 xl:h-10 rounded-xl bg-white/10 hover:bg-emerald-500/20 text-emerald-400 border border-white/15 hover:border-emerald-500/30 backdrop-blur-md shadow-sm" 
                      : "w-9 h-9 xl:w-10 xl:h-10 rounded-xl bg-green-50 text-green-600 hover:bg-green-100 border border-green-200/60 shadow-xs"
                  )}
                  aria-label="WhatsApp Us"
                >
                  <MessageCircle size={!isScrolled ? 19 : 20} />
                </a>
                <Link
                  to="/quote"
                  className={cn(
                    "font-bold transition-all duration-300 whitespace-nowrap",
                    !isScrolled
                      ? "px-4 xl:px-6 py-2 xl:py-2.5 rounded-lg bg-[#F4B400] text-industrial-950 text-xs xl:text-sm shadow-md hover:bg-[#E0A800] hover:shadow-[#F4B400]/25"
                      : "px-4 xl:px-6 py-2 xl:py-2.5 rounded-xl bg-industrial-900 text-white text-xs xl:text-sm shadow-md hover:bg-industrial-800"
                  )}
                >
                  Get a Quote
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className={cn(
                "lg:hidden p-2 sm:p-2.5 rounded-xl transition-colors shrink-0",
                !isScrolled ? "text-white bg-white/10 hover:bg-white/15" : "text-industrial-800 bg-industrial-50 hover:bg-industrial-100"
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={22} className="sm:w-6 sm:h-6" /> : <Menu size={22} className="sm:w-6 sm:h-6" />}
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
