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
  Layers,
  Sun,
  ShieldCheck,
  Droplets,
  Wind,
  Sparkles,
  ArrowRight,
  Hammer
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
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[560px] z-50 pointer-events-auto"
                  >
                    <div className={cn(
                      "rounded-2xl p-3 shadow-2xl border backdrop-blur-xl",
                      !isScrolled 
                        ? "bg-[#0B1220]/95 border-white/10 text-white shadow-black/50" 
                        : "bg-white/95 border-industrial-100 text-industrial-900 shadow-[0_15px_50px_-10px_rgba(0,0,0,0.15)]"
                    )}>
                      {/* Header: All Products */}
                      <Link 
                        to="/products" 
                        onClick={() => setHoveredProduct(false)}
                        className={cn(
                          "flex items-center justify-between p-3 rounded-xl transition-all mb-2 border",
                          !isScrolled 
                            ? "bg-white/5 hover:bg-white/10 border-white/10 text-white" 
                            : "bg-industrial-50 hover:bg-industrial-100/80 border-industrial-200/60 text-industrial-900"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-accent-500 text-white flex items-center justify-center font-bold shadow-sm">
                            <Package className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-bold leading-tight">All Products Catalogue</div>
                            <div className={cn("text-xs", !isScrolled ? "text-[#9CA6B5]" : "text-industrial-500")}>Browse complete collection of roofing & building solutions</div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-accent-500" />
                      </Link>

                      {/* 2-Column Category Grid */}
                      <div className="grid grid-cols-2 gap-1.5">
                        {[
                          { name: "Roofing Sheets", desc: "JSW, Tata, PUFF Panels", path: "/products/roofing-sheets", icon: Layers, color: "text-blue-500 bg-blue-500/10" },
                          { name: "Steel Pipes", desc: "GI, MS & Apollo (Square & Round)", path: "/products/steel-pipes", icon: Hammer, color: "text-amber-500 bg-amber-500/10" },
                          { name: "Polycarbonate", desc: "Multiwall, Compact & Embossed", path: "/products/polycarbonate-sheets", icon: Sun, color: "text-orange-500 bg-orange-500/10" },
                          { name: "Thoranam Designs", desc: "Heritage PVC Eaves Borders", path: "/products/thoranam-designs", icon: Sparkles, color: "text-purple-500 bg-purple-500/10" },
                          { name: "Thermal Insulation", desc: "XLPE Foam & Tar Felt Rolls", path: "/products/thermal-insulation", icon: ShieldCheck, color: "text-emerald-500 bg-emerald-500/10" },
                          { name: "UPVC Rain Gutters", desc: "Aquastar 10ft Rainwater Systems", path: "/products/upvc-rain-gutters", icon: Droplets, color: "text-cyan-500 bg-cyan-500/10" },
                          { name: "Accessories", desc: "Turbo Ventilators & Louvers", path: "/products/accessories", icon: Wind, color: "text-teal-500 bg-teal-500/10" }
                        ].map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => setHoveredProduct(false)}
                              className={cn(
                                "flex items-start gap-2.5 p-2.5 rounded-xl transition-all group",
                                !isScrolled ? "hover:bg-white/5" : "hover:bg-industrial-50"
                              )}
                            >
                              <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-transform group-hover:scale-110", item.color)}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className={cn("text-xs font-bold leading-tight group-hover:text-accent-500 transition-colors truncate", !isScrolled ? "text-white" : "text-industrial-900")}>
                                  {item.name}
                                </div>
                                <div className={cn("text-[11px] truncate mt-0.5", !isScrolled ? "text-[#9CA6B5]" : "text-industrial-500")}>
                                  {item.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
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
