import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Tag, Truck, Sparkles, ShieldCheck, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { brands } from '../data/brands';
import { applications } from '../data/applications';
import { testimonials } from '../data/testimonials';
import { cn } from '../lib/utils';
import ScrollStack, { ScrollStackItem } from '../components/ui/ScrollStack';
import { ProductCard } from '../components/ui/ProductCard';
import { AboutUsSection } from '../components/ui/AboutUsSection';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../components/ui/carousel';

export function Home() {
  const featuredProducts = products.filter(p => p.featured);
  const [showSlide, setShowSlide] = React.useState(false);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    let timeout;
    if (showSlide) {
      // Display the slide for 2.5 seconds to allow time for the 1s transition
      timeout = setTimeout(() => {
        setShowSlide(false);
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }
      }, 3000); // 1s transition in + 2s display time
    }
    return () => clearTimeout(timeout);
  }, [showSlide]);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section - Full video fitted on mobile, cinematic cover on laptop */}
      <section className="relative w-full h-[52vh] min-h-[380px] sm:h-[60vh] sm:min-h-[440px] md:h-[82vh] md:min-h-[600px] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
          {/* On mobile: un-shifted full frame; On laptop: shifted to crop faux top bar */}
          <div className="absolute top-0 md:-top-[115px] left-0 right-0 w-full h-full md:h-[calc(100%+115px)]">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              onEnded={() => setShowSlide(true)}
              className={cn(
                "absolute inset-0 w-full h-full object-contain md:object-cover object-center md:object-center transition-all duration-1000 ease-in-out",
                showSlide ? "opacity-0 scale-95" : "opacity-100 scale-100"
              )}
            >
              <source src="/assets/shop1.mp4" type="video/mp4" />
            </video>
            
            <img
              src="/assets/bk1.png"
              alt="AVG Banner Slide"
              className={cn(
                "absolute inset-0 w-full h-full object-contain md:object-cover object-center md:object-center transition-all duration-1000 ease-in-out",
                showSlide ? "opacity-100 scale-100" : "opacity-0 scale-110 pointer-events-none"
              )}
            />
          </div>

          {/* Top dark gradient overlay under navbar for seamless navbar contrast and zero background bleed */}
          <div className="absolute top-0 left-0 right-0 h-36 sm:h-44 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-10" />
        </div>
      </section>

      {/* 1.5 Floating Luxury Trust & Logistics Highlights Bar - Compact on Mobile, Spacious on Desktop */}
      <section className="relative z-30 -mt-8 sm:-mt-12 md:-mt-16 container mx-auto px-3 sm:px-4 md:px-6 max-w-6xl">
        <div className="bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-3xl shadow-[0_16px_40px_-10px_rgba(0,0,0,0.16)] border border-industrial-100 p-2 sm:p-5 md:p-6 transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-industrial-100">
            
            {/* Feature 1: Heritage & Trust */}
            <Link 
              to="/about"
              className="group flex items-center sm:items-start gap-2.5 sm:gap-4 p-2 sm:p-4 hover:bg-industrial-50/80 rounded-lg sm:rounded-xl transition-all duration-300"
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-600 shadow-sm shrink-0 group-hover:scale-105 group-hover:bg-amber-500/20 transition-all">
                <Award className="w-4 h-4 sm:w-6 sm:h-6 text-amber-600" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[9px] sm:text-[11px] font-black uppercase tracking-wider text-amber-600 flex items-center gap-1.5 mb-0.5">
                  <span>EST. 1970</span>
                  <span className="w-1 h-1 rounded-full bg-amber-500" />
                  <span>54+ YEARS</span>
                </div>
                <div className="text-xs sm:text-lg font-black text-industrial-900 tracking-tight leading-snug group-hover:text-amber-600 transition-colors">
                  54+ Years of Legacy
                </div>
                <div className="text-[10px] sm:text-xs text-industrial-500 mt-0.5 sm:mt-1 leading-tight line-clamp-1 sm:line-clamp-none">
                  Tamil Nadu’s most trusted roofing & steel landmark
                </div>
              </div>
              <ArrowRight size={16} className="text-industrial-300 group-hover:text-amber-600 group-hover:translate-x-1 transition-all shrink-0 mt-2 hidden xl:block" />
            </Link>

            {/* Feature 2: Lorry Transport & Site Delivery */}
            <a 
              href="https://wa.me/919842874256?text=Hello%20A.V.G.%20Arunagiri%20Nadar%20Sons%2C%20I%20would%20like%20to%20enquire%20about%20direct%20site%20lorry%20transportation%20and%20delivery."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center sm:items-start gap-2.5 sm:gap-4 p-2 sm:p-4 hover:bg-industrial-50/80 rounded-lg sm:rounded-xl transition-all duration-300"
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-600 shadow-sm shrink-0 group-hover:scale-105 group-hover:bg-emerald-500/20 transition-all">
                <Truck className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-600" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[9px] sm:text-[11px] font-black uppercase tracking-wider text-emerald-600 flex items-center gap-1.5 mb-0.5">
                  <span>SITE LOGISTICS</span>
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  <span>DIRECT DISPATCH</span>
                </div>
                <div className="text-xs sm:text-lg font-black text-industrial-900 tracking-tight leading-snug group-hover:text-emerald-600 transition-colors">
                  Lorry Service Available
                </div>
                <div className="text-[10px] sm:text-xs text-industrial-500 mt-0.5 sm:mt-1 leading-tight line-clamp-1 sm:line-clamp-none">
                  Dedicated truck delivery straight to your construction site
                </div>
              </div>
              <ArrowRight size={16} className="text-industrial-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all shrink-0 mt-2 hidden xl:block" />
            </a>

            {/* Feature 3: Statewide Network & Certified Mill Stock */}
            <Link 
              to="/quote"
              className="group flex items-center sm:items-start gap-2.5 sm:gap-4 p-2 sm:p-4 hover:bg-industrial-50/80 rounded-lg sm:rounded-xl transition-all duration-300"
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-600 shadow-sm shrink-0 group-hover:scale-105 group-hover:bg-blue-500/20 transition-all">
                <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[9px] sm:text-[11px] font-black uppercase tracking-wider text-blue-600 flex items-center gap-1.5 mb-0.5">
                  <span>100% GENUINE</span>
                  <span className="w-1 h-1 rounded-full bg-blue-500" />
                  <span>CERTIFIED STOCK</span>
                </div>
                <div className="text-xs sm:text-lg font-black text-industrial-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                  Authorized Stockist of Tata, JSW & Georoof
                </div>
                <div className="text-[10px] sm:text-xs text-industrial-500 mt-0.5 sm:mt-1 leading-tight line-clamp-1 sm:line-clamp-none">
                  Factory-certified roofing sheets, steel pipes & structural products
                </div>
              </div>
              <ArrowRight size={16} className="text-industrial-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 mt-2 hidden xl:block" />
            </Link>

          </div>
        </div>
      </section>

      {/* 2. Brands Marquee */}
      <section className="pt-6 sm:pt-14 pb-5 sm:pb-8 border-b border-industrial-200 overflow-hidden relative bg-industrial-50">
        {/* Premium subtle background image */}
        <div 
          className="absolute inset-0 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center opacity-60 pointer-events-none mix-blend-multiply"
        />

        <div className="container mx-auto px-4 md:px-6 text-center mb-2 sm:mb-6 relative z-20">
          <h3 className="inline-block px-4 sm:px-8 py-1 sm:py-2 bg-white/90 backdrop-blur-sm border border-industrial-200 rounded-full text-[10px] sm:text-xs font-bold text-industrial-800 tracking-[0.18em] sm:tracking-[0.2em] uppercase shadow-sm">
            Authorized Stockist Of
          </h3>
        </div>

        <div className="relative flex overflow-x-hidden group mt-1 sm:mt-2 z-10">
          <motion.div
            className="flex items-center gap-12 md:gap-20 whitespace-nowrap px-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {[...brands, ...brands, ...brands, ...brands, ...brands].map((brand, idx) => (
              <div 
                key={`${brand.id}-${idx}`} 
                className="flex items-center justify-center px-4 md:px-6 group/brand cursor-default"
              >
                <div className="w-32 h-16 md:w-48 md:h-20 flex items-center justify-center mix-blend-multiply hover:mix-blend-normal transition-all duration-300">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    loading="lazy"
                    decoding="async"
                    className="max-w-full max-h-full object-contain scale-110 md:scale-125 transition-transform duration-300 drop-shadow-sm group-hover/brand:drop-shadow-md group-hover/brand:scale-[1.35]"
                    onError={(e) => { 
                      e.target.style.display = 'none'; 
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="hidden text-industrial-500 hover:text-accent-500 font-black text-2xl md:text-3xl tracking-widest uppercase transition-colors">{brand.name}</div>
                </div>
              </div>
            ))}
          </motion.div>
          {/* Gradient masks for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>
      </section>

      {/* 3. Product Categories */}
      <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 md:py-20 border-y border-industrial-100 relative z-0">
        <div 
          className="absolute inset-0 -z-10 bg-[url('/images/productbk1.jpg')] bg-cover bg-center bg-fixed opacity-[0.08]"
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading 
            title="Our Product Categories" 
            subtitle="Explore our comprehensive range of high-quality roofing and structural materials."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ duration: 0.3 }}
                className="group w-full overflow-hidden rounded-xl border border-industrial-200 bg-white shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:border-accent-500 hover:-translate-y-1"
              >
                <div className="flex flex-col h-full">
                  <div className="overflow-hidden aspect-[4/3] bg-industrial-50 relative flex items-center justify-center">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-4 sm:p-5 flex flex-col flex-grow">
                    <div className="min-h-0 md:min-h-[44px] flex flex-col justify-start mb-1">
                      <h3 className="text-lg font-semibold tracking-tight text-industrial-900 leading-snug w-full">
                        {category.name}
                      </h3>
                    </div>

                    {category.description && (
                      <p className="text-xs text-industrial-500 leading-relaxed line-clamp-2 mb-2">
                        {category.description}
                      </p>
                    )}

                    <div className="flex items-center gap-1.5 truncate text-industrial-500 mb-2">
                      <Tag className="h-3.5 w-3.5 shrink-0 text-accent-500" />
                      <span className="truncate font-medium text-xs">Product Range &gt; {category.name}</span>
                    </div>

                    <div className="min-h-0 md:min-h-[42px] flex flex-wrap content-start gap-1.5 mb-3">
                      {category.subcategories && category.subcategories.length > 0 && (
                        <>
                          {category.subcategories.slice(0, 3).map((sub, sIdx) => (
                            <span 
                              key={sIdx}
                              className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-industrial-100/80 text-industrial-700"
                            >
                              {sub}
                            </span>
                          ))}
                          {category.subcategories.length > 3 && (
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-semibold text-accent-700 bg-accent-50">
                              +{category.subcategories.length - 3} types
                            </span>
                          )}
                        </>
                      )}
                    </div>

                    <div className="flex gap-2 w-full mt-auto pt-2">
                      <Link 
                        to={`/products/${category.id}`}
                        className="flex-1 text-center py-2.5 bg-industrial-50 hover:bg-industrial-100 text-industrial-900 rounded-md font-bold transition-colors text-sm"
                      >
                        View Products
                      </Link>
                      <a 
                        href={`https://wa.me/919842874256?text=${encodeURIComponent(`Hello A.V.G. Arunagiri Nadar Sons, I am interested in exploring your ${category.name} range.\n\nPlease provide more information.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2.5 bg-[#0f172a] hover:bg-industrial-900 text-white rounded-md font-bold transition-colors text-sm"
                      >
                        Enquire Now
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/products" className="inline-flex items-center justify-center gap-2 bg-industrial-900 hover:bg-industrial-800 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-sm group">
              View All Categories <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Featured Products (Preview) */}
      <section className="py-20 relative z-0 overflow-hidden">
        <div 
          className="absolute inset-0 -z-10 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center md:bg-fixed opacity-[0.10] pointer-events-none"
        />
        {/* Smooth top and bottom gradient fades to prevent any cut-off lines on mobile */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none -z-10" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none -z-10" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-12">
            <SectionHeading 
              title="Featured Products" 
              subtitle="Top choices recommended for quality and durability."
              center
            />
          </div>
          
          <div className="w-full relative px-0 sm:px-10 md:px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-3 sm:-ml-4 md:-ml-6">
                {products.map((product) => (
                  <CarouselItem key={product.id} className="pl-3 sm:pl-4 md:pl-6 basis-[86%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <div className="h-full">
                      <ProductCard product={product} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex absolute -left-6 md:-left-12 top-1/2 animate-bounce-left border-accent-500 text-accent-500 hover:bg-accent-50 shadow-[0_0_15px_rgba(234,179,8,0.5)] ring-2 ring-accent-500/50" />
              <CarouselNext className="hidden sm:flex absolute -right-6 md:-right-12 top-1/2 animate-bounce-right border-accent-500 text-accent-500 hover:bg-accent-50 shadow-[0_0_15px_rgba(234,179,8,0.5)] ring-2 ring-accent-500/50" />
            </Carousel>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Link 
              to="/products"
              className="px-8 py-3 bg-industrial-900 text-white font-semibold rounded-full hover:bg-accent-500 transition-colors shadow-md flex items-center gap-2 group"
            >
              Show All Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. About Us */}
      <div className="relative z-0 overflow-hidden">
        {/* Background Image with Low Opacity */}
        <div 
          className="absolute inset-0 -z-10 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center md:bg-fixed opacity-[0.08] pointer-events-none"
        />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none -z-10" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none -z-10" />
        <AboutUsSection transparentBg={true} hideStats={true} />
      </div>

      {/* 6. Why Choose Us (Elegant Redesign) */}
      <section className="py-24 bg-industrial-900 text-white border-b border-industrial-800 relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-accent-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Left side text */}
            <div className="w-full lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "150px" }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-1 bg-accent-500 rounded-sm" />
                  <span className="text-accent-500 font-bold tracking-[0.2em] uppercase text-sm">Why Choose Us</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Building <span className="text-accent-500 font-light italic">Trust</span> Through Quality.
                </h2>
                <p className="text-industrial-300 text-base sm:text-lg md:text-xl mb-8 leading-relaxed">
                  We don't just supply materials; we provide the foundation for your most important projects with unmatched reliability and expert support.
                </p>
                <button className="flex items-center gap-2 text-white font-bold hover:text-accent-500 transition-colors group">
                  Learn more about our standards
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
                </button>
              </motion.div>
            </div>

            {/* Right side features grid */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {[
                { title: 'Legacy Since 1970', desc: 'Over 54+ years of trusted excellence and reliability, supplying premium building and roofing materials across Tamil Nadu.' },
                { title: 'Lorry Transport Service', desc: 'Dedicated lorry transportation service available for safe, direct on-site delivery to your construction project.' },
                { title: 'Wide Product Range', desc: 'Comprehensive selection of roofing sheets, steel pipes, polycarbonate, and rainwater systems under one roof.' },
                { title: 'Authorized Stockist', desc: 'Direct authorized partner for Tata, JSW, Lotus, Aquastar, Vnext, and industry-leading manufacturers.' }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "150px" }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-industrial-900 border border-white/5 hover:border-accent-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent-500/10 overflow-hidden"
                >
                  {/* Hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 to-accent-500/5 group-hover:to-accent-500/10 transition-colors duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="mb-2">
                      <div className="w-14 h-14 rounded-2xl bg-industrial-800 flex items-center justify-center text-accent-500 mb-8 group-hover:-translate-y-2 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300 shadow-lg border border-white/5">
                        <CheckCircle2 size={26} />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent-400 transition-colors">{feature.title}</h3>
                      <p className="text-industrial-400 leading-relaxed text-lg">{feature.desc}</p>
                    </div>
                    
                    <div className="text-7xl font-black text-white/[0.03] absolute -bottom-6 -right-2 group-hover:-translate-y-4 group-hover:text-white/[0.08] transition-all duration-500 pointer-events-none">
                      0{idx + 1}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* 6. Applications */}
      <section className="bg-white relative">
        <div className="pt-20 pb-0 -mb-4 container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Solutions for Every Application" 
            subtitle="Our materials are suitable for diverse building requirements."
            center
            className="[&_h2]:text-industrial-900 [&_p]:text-industrial-600 relative z-10"
          />
        </div>
        
        <div className="w-full relative max-w-6xl mx-auto px-4 pb-12 sm:pb-16 md:pb-24">
          <ScrollStack>
            {applications.map((app, idx) => (
              <ScrollStackItem key={app.id}>
                <div className="h-[320px] sm:h-[400px] md:h-[500px] w-full rounded-[24px] sm:rounded-[36px] md:rounded-[40px] overflow-hidden relative group">
                  <div className="absolute inset-0 bg-industrial-900 flex items-center justify-center text-industrial-500">
                    <img 
                      src={app.image} 
                      alt={app.title}
                      loading="lazy"
                      decoding="async"
                      className={cn(
                        "absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      )}
                    />
                  </div>
                  {/* Subtle top-down and bottom-up gradients for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 z-10" />
                  
                  {/* Top Badge: Number and Category */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-8 right-4 sm:right-8 flex items-center justify-between z-20">
                    <div className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-bold text-accent-400 tracking-widest uppercase shadow-sm">
                      Application 0{idx + 1}
                    </div>
                    <div className="hidden sm:flex px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white/80 font-medium">
                      AVG Solutions
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute inset-0 p-6 sm:p-8 md:p-12 flex flex-col justify-end z-20">
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 sm:mb-3 tracking-tight">
                      {app.title}
                    </h3>
                    <p className="text-white/85 text-sm sm:text-base md:text-xl max-w-2xl leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </section>

      {/* 8. Call to Action */}
      <section className="py-24 bg-accent-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to start your project?
            </h2>
            <p className="text-accent-50 text-lg mb-10">
              Get an accurate estimate for your roofing and building material requirements. Contact our experts today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/quote"
                className="w-full sm:w-auto text-center bg-industrial-900 hover:bg-industrial-800 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg"
              >
                Request a Quote
              </Link>
              <Link
                to="/calculator"
                className="w-full sm:w-auto text-center bg-white hover:bg-industrial-50 text-industrial-900 px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg"
              >
                Try Roofing Calculator
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
