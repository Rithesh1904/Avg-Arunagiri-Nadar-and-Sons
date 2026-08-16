"use client";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Info,
  Package,
  Calculator,
  Image,
  Phone,
  ChevronDown,
  FolderPlus,
  FileText,
  Settings,
} from "lucide-react";
import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: Info },
  { name: 'Products', path: '/products', icon: Package },
  { name: 'Calculator', path: '/calculator', icon: Calculator },
  { name: 'Gallery', path: '/gallery', icon: Image },
  { name: 'Contact', path: '/contact', icon: Phone },
];

export default function AppMenuBar({ isScrolled = true }) {
  const location = useLocation();
  const [hoveredProduct, setHoveredProduct] = useState(false);

  return (
    <nav className={cn(
      "flex items-center transition-colors duration-500",
      !isScrolled 
        ? "gap-7 lg:gap-9" 
        : "gap-1 p-1.5 rounded-2xl border bg-industrial-50/50 border-industrial-100"
    )}>
      {navLinks.map((link) => {
        const isActive = link.path === '/' 
          ? location.pathname === '/' 
          : location.pathname.startsWith(link.path);

        if (link.name === 'Products') {
          return (
            <div 
              key={link.name} 
              className="relative"
              onMouseEnter={() => setHoveredProduct(true)}
              onMouseLeave={() => setHoveredProduct(false)}
            >
              <Link 
                to={link.path}
                className={cn(
                  "flex items-center transition-all duration-300 relative",
                  !isScrolled 
                    ? cn(
                        "gap-1.5 font-semibold text-[15px] py-2",
                        isActive ? "text-white" : "text-[#C4CBD6] hover:text-white"
                      )
                    : cn(
                        "gap-2 px-4 py-2 rounded-xl text-sm font-semibold",
                        isActive ? "bg-white text-accent-600 shadow-sm" : "text-industrial-600 hover:text-industrial-900 hover:bg-industrial-100/50"
                      )
                )}
              >
                {link.name}
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-300", 
                  hoveredProduct && "rotate-180",
                  !isScrolled && !isActive && "text-[#9CA6B5]"
                )} />
                {/* Active Gold Underline for static state */}
                {!isScrolled && isActive && (
                  <motion.div 
                    layoutId="activeNavLine"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-[#F4B400] rounded-full"
                  />
                )}
              </Link>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {hoveredProduct && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 z-50"
                  >
                    <div className={cn(
                      "rounded-2xl p-2 flex flex-col gap-1",
                      !isScrolled 
                        ? "bg-[#0B1220] border border-white/10 shadow-2xl"
                        : "bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-industrial-100"
                    )}>
                      <Link to="/products" className={cn("flex items-center gap-3 p-3 rounded-xl transition-colors group", !isScrolled ? "hover:bg-white/5" : "hover:bg-industrial-50")}>
                        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110", !isScrolled ? "bg-white/10 text-white" : "bg-accent-50 text-accent-600")}>
                          <Package className="w-5 h-5" />
                        </div>
                        <div>
                          <div className={cn("text-sm font-bold", !isScrolled ? "text-white" : "text-industrial-900")}>All Products</div>
                          <div className={cn("text-xs", !isScrolled ? "text-[#9CA6B5]" : "text-industrial-500")}>View complete catalog</div>
                        </div>
                      </Link>
                      
                      <div className={cn("h-px my-1 mx-2", !isScrolled ? "bg-white/10" : "bg-industrial-100")} />
                      
                      <Link to="/products/roofing" className={cn("flex items-center gap-3 p-3 rounded-xl transition-colors group", !isScrolled ? "hover:bg-white/5" : "hover:bg-industrial-50")}>
                        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110", !isScrolled ? "bg-white/10 text-white" : "bg-blue-50 text-blue-600")}>
                          <FolderPlus className="w-5 h-5" />
                        </div>
                        <div>
                          <div className={cn("text-sm font-bold", !isScrolled ? "text-white" : "text-industrial-900")}>Roofing Sheets</div>
                          <div className={cn("text-xs", !isScrolled ? "text-[#9CA6B5]" : "text-industrial-500")}>Metal & Polycarbonate</div>
                        </div>
                      </Link>

                      <Link to="/products/structural" className={cn("flex items-center gap-3 p-3 rounded-xl transition-colors group", !isScrolled ? "hover:bg-white/5" : "hover:bg-industrial-50")}>
                        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110", !isScrolled ? "bg-white/10 text-white" : "bg-orange-50 text-orange-600")}>
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <div className={cn("text-sm font-bold", !isScrolled ? "text-white" : "text-industrial-900")}>Structural Steel</div>
                          <div className={cn("text-xs", !isScrolled ? "text-[#9CA6B5]" : "text-industrial-500")}>Pipes, Tubes & TMT</div>
                        </div>
                      </Link>
                      
                      <Link to="/products/accessories" className={cn("flex items-center gap-3 p-3 rounded-xl transition-colors group", !isScrolled ? "hover:bg-white/5" : "hover:bg-industrial-50")}>
                        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110", !isScrolled ? "bg-white/10 text-white" : "bg-green-50 text-green-600")}>
                          <Settings className="w-5 h-5" />
                        </div>
                        <div>
                          <div className={cn("text-sm font-bold", !isScrolled ? "text-white" : "text-industrial-900")}>Accessories</div>
                          <div className={cn("text-xs", !isScrolled ? "text-[#9CA6B5]" : "text-industrial-500")}>Fasteners & Fittings</div>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }

        return (
          <Link 
            key={link.name} 
            to={link.path}
            className={cn(
              "transition-all duration-300 relative",
              !isScrolled 
                ? cn(
                    "font-semibold text-[15px] py-2",
                    isActive ? "text-white" : "text-[#C4CBD6] hover:text-white"
                  )
                : cn(
                    "px-4 py-2 rounded-xl text-sm font-semibold",
                    isActive ? "bg-white text-accent-600 shadow-sm" : "text-industrial-600 hover:text-industrial-900 hover:bg-industrial-100/50"
                  )
            )}
          >
            {link.name}
            {/* Active Gold Underline for static state */}
            {!isScrolled && isActive && (
              <motion.div 
                layoutId="activeNavLine"
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-[#F4B400] rounded-full"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
