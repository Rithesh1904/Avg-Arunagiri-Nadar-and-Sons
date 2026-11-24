import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  Home, 
  Package, 
  Calculator, 
  Image, 
  Award, 
  MapPin, 
  ChevronRight, 
  ArrowRight,
  Layers,
  Sun,
  Hammer,
  Droplets,
  Truck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import AppMenuBar from './app-menu-bar';

const mobileNavLinks = [
  { 
    name: 'Home', 
    path: '/', 
    icon: Home, 
    tagline: 'Store overview & featured solutions',
    iconColor: 'bg-amber-500/10 text-amber-600 border-amber-500/25'
  },
  { 
    name: 'Products', 
    path: '/products', 
    icon: Package, 
    tagline: 'Roofing sheets, pipes, gutters & panels',
    badge: '50+ Items',
    iconColor: 'bg-blue-500/10 text-blue-600 border-blue-500/25'
  },
  { 
    name: 'Roofing Calculator', 
    path: '/calculator', 
    icon: Calculator, 
    tagline: 'Instant material & sheet area estimator',
    badge: 'Smart Tool',
    iconColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/25'
  },
  { 
    name: 'Project Gallery', 
    path: '/gallery', 
    icon: Image, 
    tagline: 'Real completed site installations',
    iconColor: 'bg-purple-500/10 text-purple-600 border-purple-500/25'
  },
  { 
    name: 'About Us', 
    path: '/about', 
    icon: Award, 
    tagline: '54+ years of trusted heritage since 1970',
    iconColor: 'bg-orange-500/10 text-orange-600 border-orange-500/25'
  },
  { 
    name: 'Contact & Location', 
    path: '/contact', 
    icon: MapPin, 
    tagline: 'Store directions, phone & support',
    iconColor: 'bg-rose-500/10 text-rose-600 border-rose-500/25'
  },
];

const quickCategories = [
  { name: 'Roofing Sheets', path: '/products/roofing-sheets', icon: Layers },
  { name: 'Polycarbonate', path: '/products/polycarbonate-products', icon: Sun },
  { name: 'Steel Pipes', path: '/products/steel-pipes', icon: Hammer },
  { name: 'uPVC Gutters', path: '/products/rainwater-gutters', icon: Droplets },
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

  // Lock body scroll and pause smooth scroll while mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      if (window.lenis) window.lenis.stop();
    } else {
      document.body.style.overflow = '';
      if (window.lenis) window.lenis.start();
    }
    return () => {
      document.body.style.overflow = '';
      if (window.lenis) window.lenis.start();
    };
  }, [mobileMenuOpen]);

  // Close mobile menu automatically on route change
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
              ? "bg-white/95 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 rounded-2xl" 
              : "px-0 py-0"
          )}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group relative z-10 shrink-0 min-w-0 max-w-[82%] sm:max-w-none">
              {/* AVG Authentic Roof Peaks Brand Logo Mark */}
              <div className="flex flex-col items-center justify-center shrink-0">
                <img
                  src={isScrolled ? "/assets/avg-logo-dark.png" : "/assets/avg-logo-light.png"}
                  alt="A.V.G. Logo"
                  className="h-8 sm:h-9 lg:h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-sm"
                />
                <span className={cn(
                  "text-[7px] sm:text-[7.5px] lg:text-[8px] font-black tracking-[0.2em] sm:tracking-[0.22em] uppercase mt-0.5 sm:mt-1 px-1 sm:px-1.5 py-[1px] rounded transition-all duration-500 leading-none whitespace-nowrap",
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
                  href={`https://wa.me/918489421954?text=${encodeURIComponent('*A.V.G. ARUNAGIRI NADAR SONS – QUICK ENQUIRY*\n───────────────────────────────\nHello, I would like to enquire about your roofing and building solutions.\n\nThank you!')}`}
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

            {/* Mobile Menu Toggle Button */}
            <button
              className={cn(
                "lg:hidden p-2 sm:p-2.5 rounded-xl transition-all duration-300 shrink-0 flex items-center justify-center shadow-xs active:scale-95",
                !isScrolled 
                  ? "text-white bg-white/15 hover:bg-white/20 border border-white/20 backdrop-blur-md" 
                  : "text-industrial-900 bg-industrial-100 hover:bg-industrial-200 border border-industrial-200"
              )}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={22} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Redesigned High-End Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[60] lg:hidden flex flex-col">
            {/* Backdrop Dimmer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Main Menu Panel */}
            <motion.div
              initial={{ y: "-100%", opacity: 0.8 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0.8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full max-h-screen bg-white flex flex-col shadow-2xl overflow-hidden"
            >
              {/* 1. Dedicated High-Contrast Drawer Header */}
              <div className="px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between border-b border-industrial-100 bg-white/95 backdrop-blur-xl shrink-0 z-10 shadow-xs">
                <Link 
                  to="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5"
                >
                  <img
                    src="/assets/avg-logo-dark.png"
                    alt="A.V.G. Logo"
                    className="h-8 sm:h-9 w-auto object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="text-base sm:text-lg font-black text-industrial-950 leading-tight tracking-tight">
                      Arunagiri Nadar Sons
                    </span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[7.5px] font-black tracking-widest text-amber-700 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/25 uppercase">
                        EST. 1970 • MADURAI
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Prominent Close Button */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-industrial-100 hover:bg-industrial-200 text-industrial-800 flex items-center justify-center transition-colors shadow-xs active:scale-90"
                  aria-label="Close menu"
                >
                  <X size={20} className="sm:w-5 sm:h-5 text-industrial-900" />
                </button>
              </div>

              {/* 2. Scrollable Navigation Body */}
              <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-4">
                {/* Quick Category Discovery Pills */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-industrial-400 mb-2 px-1">
                    Quick Categories
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {quickCategories.map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <Link
                          key={cat.path}
                          to={cat.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-industrial-50 hover:bg-amber-50 hover:border-amber-400/50 border border-industrial-150 transition-all text-xs font-semibold text-industrial-800 hover:text-amber-700 shadow-xs"
                        >
                          <Icon size={14} className="text-amber-600 shrink-0" />
                          <span className="truncate">{cat.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Main Interactive Navigation Cards */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-industrial-400 mb-2 px-1">
                    Navigation
                  </div>
                  <nav className="flex flex-col gap-2">
                    {mobileNavLinks.map((link) => {
                      const Icon = link.icon;
                      const isActive = link.path === '/' 
                        ? location.pathname === '/' 
                        : location.pathname.startsWith(link.path);

                      return (
                        <Link
                          key={link.name}
                          to={link.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "group flex items-center justify-between p-3 sm:p-3.5 rounded-2xl border transition-all duration-200 shadow-xs active:scale-[0.99]",
                            isActive 
                              ? "bg-amber-50/70 border-amber-400/70 shadow-sm" 
                              : "bg-white border-industrial-200/80 hover:border-amber-400/50 hover:bg-industrial-50/50"
                          )}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            {/* Icon Badge */}
                            <div className={cn(
                              "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-200 group-hover:scale-105",
                              link.iconColor
                            )}>
                              <Icon size={19} />
                            </div>

                            {/* Label & Description */}
                            <div className="flex flex-col min-w-0">
                              <div className="flex items-center gap-2">
                                <span className={cn(
                                  "font-bold text-sm sm:text-base leading-snug tracking-tight",
                                  isActive ? "text-industrial-950 font-extrabold" : "text-industrial-800"
                                )}>
                                  {link.name}
                                </span>
                                {link.badge && (
                                  <span className="px-1.5 py-0.5 rounded-md bg-amber-500/15 text-amber-800 text-[10px] font-extrabold tracking-wide">
                                    {link.badge}
                                  </span>
                                )}
                              </div>
                              <span className="text-xs text-industrial-500 truncate leading-normal">
                                {link.tagline}
                              </span>
                            </div>
                          </div>

                          {/* Right Chevron Indicator */}
                          <div className={cn(
                            "w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all",
                            isActive 
                              ? "bg-amber-500 text-white shadow-xs" 
                              : "text-industrial-300 group-hover:text-amber-600 group-hover:translate-x-0.5"
                          )}>
                            <ChevronRight size={16} />
                          </div>
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                {/* Logistics Highlight Pill */}
                <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-50 via-emerald-50/50 to-emerald-50/20 border border-emerald-200/70 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-600 shrink-0">
                    <Truck size={17} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-emerald-950">Site Lorry Transportation Available</div>
                    <div className="text-[11px] text-emerald-700/90 leading-tight truncate">Direct delivery across Madurai & all Tamil Nadu</div>
                  </div>
                </div>
              </div>

              {/* 3. High-Converting Action Dock (Bottom Fixed) */}
              <div className="p-4 sm:p-5 bg-white border-t border-industrial-100 shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.05)] space-y-2.5 shrink-0 z-10">
                {/* 2-Column WhatsApp & Phone Buttons */}
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={`https://wa.me/918489421954?text=${encodeURIComponent('*A.V.G. ARUNAGIRI NADAR SONS – QUICK ENQUIRY*\n───────────────────────────────\nHello, I would like to enquire about your roofing and building solutions.\n\nThank you!')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-md shadow-[#25D366]/20 active:scale-[0.98] transition-transform"
                  >
                    <MessageCircle size={17} />
                    <span>WhatsApp</span>
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </a>

                  <a
                    href="tel:+919842174256"
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-industrial-900 text-white font-bold text-xs shadow-md active:scale-[0.98] transition-transform"
                  >
                    <Phone size={16} />
                    <span>Call Store</span>
                  </a>
                </div>

                {/* Full-Width Get a Quote Primary CTA */}
                <Link
                  to="/quote"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#F4B400] hover:bg-[#E0A800] text-industrial-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#F4B400]/25 active:scale-[0.98] transition-transform tracking-tight"
                >
                  <span>Request a Free Quote</span>
                  <ArrowRight size={17} />
                </Link>

                {/* Footer Brand Landmark Footnote */}
                <div className="text-center pt-1">
                  <span className="text-[10px] text-industrial-400 font-medium">
                    A.V.G. Arunagiri Nadar Sons • Since 1970 • Madurai
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
