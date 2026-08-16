import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { cn } from '../../lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="w-10 h-10 bg-white text-industrial-600 rounded-full shadow-md flex items-center justify-center hover:bg-industrial-100 hover:text-industrial-900 transition-colors border border-industrial-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Call Button (Mobile Primary Focus) */}
      <a
        href="tel:+919842874256"
        className="md:hidden flex items-center justify-center w-12 h-12 bg-industrial-900 text-white rounded-full shadow-lg hover:bg-industrial-800 transition-colors"
        aria-label="Call Us"
      >
        <Phone size={24} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919842874256"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp Us"
      >
        <MessageCircle size={28} />
        {/* Optional tool tip */}
        <span className="absolute right-full mr-4 bg-white text-industrial-800 text-xs font-semibold px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap hidden md:block">
          Chat with us
        </span>
      </a>
    </div>
  );
}
