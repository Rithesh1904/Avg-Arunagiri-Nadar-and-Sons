import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Truck, Sparkles, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0B1220] text-[#F5F7FA] pt-16 pb-6 relative overflow-hidden font-sans">
      {/* Subtle Geometric Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-screen" 
        style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Centered Rectangle CTA Box */}
        <div className="mb-14 relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#10192b] via-[#16233b] to-[#10192b] border border-white/10 p-6 sm:p-8 md:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F4B400]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3b82f6]/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/4" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 text-center lg:text-left">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#F4B400] uppercase mb-2">
                <Sparkles size={14} className="text-[#F4B400]" /> Expert Consultation & Best Price Quotes
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                Need the Right Material for Your Project?
              </h3>
              <p className="text-[#9CA6B5] text-sm sm:text-base leading-relaxed">
                Talk to our team about your roofing, steel pipe and building-material requirements. We provide instant estimates and statewide delivery.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 bg-[#F4B400] hover:bg-[#EAA800] text-[#0B1220] font-black text-sm tracking-wider uppercase rounded-lg shadow-lg hover:shadow-[#F4B400]/20 transition-all duration-200"
              >
                GET A QUOTE <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/919842874256"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-sm rounded-lg transition-colors"
              >
                <MessageCircle size={16} className="text-[#25D366]" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Logistics */}
          <div className="flex flex-col">
            {/* Branding */}
            <Link to="/" className="flex items-center gap-3 mb-6 group inline-flex">
              <div className="flex flex-col items-center justify-center shrink-0">
                <img
                  src="/assets/avg-logo-light.png"
                  alt="A.V.G. Logo"
                  className="h-9 md:h-11 w-auto object-contain mb-1 drop-shadow-md"
                />
                <span className="text-[8px] md:text-[8.5px] font-black tracking-[0.2em] uppercase px-1.5 py-[1.5px] rounded bg-amber-500/10 text-amber-300 border border-amber-400/30 whitespace-nowrap">
                  SINCE 1970
                </span>
              </div>
              <div className="flex flex-col min-w-0 justify-center">
                <span className="text-xl md:text-2xl font-black text-[#F5F7FA] tracking-tighter leading-none mb-1">
                  Arunagiri Nadar Sons
                </span>
                <span className="text-[0.65rem] md:text-xs font-bold text-[#9CA6B5] tracking-[0.2em] uppercase">
                  Premium Building Solutions
                </span>
              </div>
            </Link>
            
            <p className="text-[#9CA6B5] text-sm leading-relaxed mb-4">
              Quality roofing, steel and building-material solutions for residential, commercial, industrial and agricultural projects across Tamil Nadu.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-2.5 rounded-md">
              <Truck size={15} className="shrink-0 text-emerald-400" />
              <span>Lorry transportation service available for direct site delivery</span>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-[#9CA6B5] hover:text-[#F4B400] transition-colors duration-200 text-sm font-medium">Home</Link></li>
              <li><Link to="/about" className="text-[#9CA6B5] hover:text-[#F4B400] transition-colors duration-200 text-sm font-medium">About Us</Link></li>
              <li><Link to="/products" className="text-[#9CA6B5] hover:text-[#F4B400] transition-colors duration-200 text-sm font-medium">Products</Link></li>
              <li><Link to="/gallery" className="text-[#9CA6B5] hover:text-[#F4B400] transition-colors duration-200 text-sm font-medium">Gallery</Link></li>
              <li><Link to="/calculator" className="text-[#9CA6B5] hover:text-[#F4B400] transition-colors duration-200 text-sm font-medium">Calculator</Link></li>
              <li><Link to="/contact" className="text-[#9CA6B5] hover:text-[#F4B400] transition-colors duration-200 text-sm font-medium">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Products</h4>
            <ul className="space-y-3">
              <li><Link to="/products/roofing-sheets" className="text-[#9CA6B5] hover:text-[#F4B400] transition-colors duration-200 text-sm font-medium">Roofing Sheets</Link></li>
              <li><Link to="/products/polycarbonate-products" className="text-[#9CA6B5] hover:text-[#F4B400] transition-colors duration-200 text-sm font-medium">Polycarbonate Products</Link></li>
              <li><Link to="/products/steel-pipes" className="text-[#9CA6B5] hover:text-[#F4B400] transition-colors duration-200 text-sm font-medium">Steel Pipes</Link></li>
              <li><Link to="/products/roof-tiles" className="text-[#9CA6B5] hover:text-[#F4B400] transition-colors duration-200 text-sm font-medium">Roof Tiles</Link></li>
              <li><Link to="/products/rainwater-gutters" className="text-[#9CA6B5] hover:text-[#F4B400] transition-colors duration-200 text-sm font-medium">PVC Rain Gutters</Link></li>
              <li><Link to="/products/accessories" className="text-[#9CA6B5] hover:text-[#F4B400] transition-colors duration-200 text-sm font-medium">Roofing Accessories</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Contact</h4>
            <div className="space-y-4 text-sm font-medium">
              <div className="flex items-start gap-3 text-[#9CA6B5]">
                <MapPin size={18} className="text-[#F4B400] shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <span className="text-white font-semibold">A.V.G. Arunagiri Nadar Sons</span>
                  <span>Madurai, Tamil Nadu</span>
                  <span className="text-[#7F8998] text-xs mt-2">Serving Customers Across Tamil Nadu</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#F4B400] shrink-0" />
                <a href="tel:+919842874256" className="text-[#9CA6B5] hover:text-white transition-colors duration-200">9842874256</a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#F4B400] shrink-0" />
                <a href="mailto:avgaraj@gmail.com" className="text-[#9CA6B5] hover:text-white transition-colors duration-200">avgaraj@gmail.com</a>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/919842874256"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-5 py-3 sm:py-2.5 rounded font-semibold text-sm transition-colors duration-200 w-full sm:w-auto"
                >
                  <MessageCircle size={16} className="text-[#25D366]" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
          
        </div>

        {/* Subtle Horizontal Divider */}
        <div className="w-full h-px bg-[rgba(255,255,255,0.08)] mb-6" />

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[#8F99A8]">
          <p>© 2026 A.V.G. Arunagiri Nadar Sons • Building Trust Since 1970. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-6">
            <Link to="/privacy" className="hover:text-[#F4B400] transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#F4B400] transition-colors duration-200">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
