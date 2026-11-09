import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Phone, CheckCircle2, Ruler, Layers, Sparkles, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { EmptyState } from '../components/ui/EmptyState';
import { Product3DViewer } from '../components/ui/Product3DViewer';
import { ProductQuickHighlights } from '../components/ui/ProductQuickHighlights';
import { cn } from '../lib/utils';

export function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const found = products.find(p => 
      p.id === productId || 
      (productId === 'brown-kraft-paper-roll' && p.id === 'tar-felt-roll') ||
      ((productId === 'puf-sheet-30mm' || productId === 'puf-sheet-40mm') && p.id === 'puff-panel-sheets-40mm') ||
      (productId === 'puf-sheet-50mm' && p.id === 'puff-panel-sheets-50mm') ||
      (productId === 'gp-square-pipe' && p.id === 'gi-steel-pipe') ||
      (productId === 'mild-steel-rectangular-pipe' && p.id === 'ms-steel-pipe')
    );
    setProduct(found);
    if (found?.availableSizes && found.availableSizes.length > 0) {
      setSelectedSize(found.availableSizes[0]);
    } else {
      setSelectedSize(null);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [productId]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20">
        <EmptyState 
          title="Product Not Found"
          message="The product you are looking for does not exist or has been removed."
          action={
            <Link 
              to="/products"
              className="bg-industrial-900 text-white px-6 py-2 rounded-md font-semibold hover:bg-industrial-800 transition-colors"
            >
              Back to Catalogue
            </Link>
          }
        />
      </div>
    );
  }

  // Helper to extract thickness values across any product specification format
  const thicknessList = (() => {
    if (!product) return [];
    const specs = product.specifications || {};
    if (specs.thickness && Array.isArray(specs.thickness) && specs.thickness.length > 0) return specs.thickness;
    if (specs.wallThickness && Array.isArray(specs.wallThickness) && specs.wallThickness.length > 0) return specs.wallThickness;
    if (specs.panelThickness && Array.isArray(specs.panelThickness) && specs.panelThickness.length > 0) return specs.panelThickness;
    if (specs.gauge && Array.isArray(specs.gauge) && specs.gauge.length > 0) return specs.gauge;
    const match = product.name.match(/\b\d+(\.\d+)?\s*(mm|gauge|G)\b/i);
    return match ? [match[0]] : [];
  })();

  // Short and sweet description helper
  const shortDescription = (() => {
    if (!product?.description) return '';
    const sentences = product.description.split(/(?<=[.!?])\s+/);
    if (sentences.length > 2) {
      return sentences.slice(0, 2).join(' ');
    }
    return product.description;
  })();

  const whatsappMessage = encodeURIComponent(
    `Hello A.V.G. Arunagiri Nadar Sons, I am interested in:\n` +
    `Product: ${product.name}\n` +
    `Category: ${product.category}\n` +
    (selectedSize ? `Required Size: ${selectedSize}\n` : '') +
    (product.tallyName ? `Tally Ref: ${product.tallyName}\n` : '') +
    `\nPlease provide price quotation and stock availability. Thank you.`
  );

  return (
    <div className="bg-white min-h-screen pt-[80px] sm:pt-[90px] pb-14 sm:pb-20 relative z-0">
      {/* Breadcrumb & Back */}
      <div className="bg-industrial-50 border-b border-industrial-100 py-3 sm:py-4">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-industrial-600 hover:text-industrial-900 transition-colors font-semibold text-sm"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <div className="text-sm text-industrial-500 hidden sm:block truncate ml-4">
            <Link to="/products" className="hover:text-accent-600 transition-colors">Products</Link>
            <span className="mx-2">/</span>
            <Link to={`/products/${products.find(p=>p.id===productId)?.category ? 'all' : ''}`} className="hover:text-accent-600 transition-colors">{product.category}</Link>
            <span className="mx-2">/</span>
            <span className="text-industrial-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-6 sm:pt-10">
        
        {/* Mobile Header: Brand, Title, Price Note (Visible on mobile only, above the product image) */}
        <div className="lg:hidden mb-5">
          {product.brand && (
            <div className="inline-block bg-industrial-100 text-industrial-800 font-bold px-3 py-1 rounded text-xs uppercase tracking-wider w-max mb-2">
              {product.brand}
            </div>
          )}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-industrial-900 mb-1 leading-tight">{product.name}</h1>
          <div className="text-xs text-industrial-500 font-medium italic">
            * Enquire for price and details
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          
          {/* Left Column: Interactive 3D Product Sheet Viewer */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col gap-6"
          >
            <Product3DViewer product={product} />

            {/* Desktop Only: Quick Highlights in left column */}
            <div className="hidden lg:block">
              <ProductQuickHighlights product={product} />
            </div>
          </motion.div>

          {/* Right Column: Key Details, Sizes, Suitable For, Description, CTAs, Specifications */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col"
          >
            {/* Desktop Header */}
            <div className="hidden lg:block mb-6">
              {product.brand && (
                <div className="inline-block bg-industrial-100 text-industrial-800 font-bold px-3 py-1 rounded text-xs uppercase tracking-wider w-max mb-3">
                  {product.brand}
                </div>
              )}
              <h1 className="text-3xl md:text-4xl font-extrabold text-industrial-900 mb-2 leading-tight">{product.name}</h1>
              <div className="text-sm text-industrial-500 font-medium italic">
                * Enquire for price and details
              </div>
            </div>

            {/* 1. Unified Product Specifications Card */}
            {(thicknessList.length > 0 || (product.availableSizes && product.availableSizes.length > 0) || product.specifications) && (
              <div className="mb-6 p-4 sm:p-5 bg-gradient-to-br from-industrial-50 to-white rounded-2xl border border-industrial-200/90 shadow-xs space-y-4">
                {/* Available Thickness Row */}
                {thicknessList.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-industrial-800 uppercase tracking-wide">
                        <Layers size={15} className="text-amber-600" />
                        <span>Available Thickness:</span>
                      </div>
                      <span className="text-[11px] font-semibold text-industrial-500">
                        Certified Gauge
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {thicknessList.map((th, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500/10 text-amber-900 border border-amber-300/80 shadow-xs"
                        >
                          ⚡ {th}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Available Feet Sizes Selector */}
                {product.availableSizes && product.availableSizes.length > 0 && (
                  <div className={thicknessList.length > 0 ? "pt-3.5 border-t border-industrial-200/80" : ""}>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-industrial-800 uppercase tracking-wide">
                        <Ruler size={16} className="text-accent-600" />
                        <span>Available Feet Sizes & Lengths:</span>
                      </div>
                      <span className="text-[11px] font-bold text-industrial-700 bg-white px-2.5 py-0.5 rounded-full border border-industrial-200 shadow-xs">
                        {product.availableSizes.length} {product.availableSizes.length === 1 ? 'Size' : 'Sizes'}
                      </span>
                    </div>

                    <p className="text-[11px] sm:text-xs text-industrial-500 mb-2.5 font-medium">
                      Tap your required feet size to check availability & instant quotation:
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {product.availableSizes.map((size) => {
                        const isSelected = selectedSize === size;
                        return (
                          <button
                            key={size}
                            type="button"
                            onClick={() => setSelectedSize(size)}
                            className={cn(
                              "px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer",
                              isSelected
                                ? "bg-industrial-900 text-white ring-2 ring-accent-500 shadow-sm scale-[1.02]"
                                : "bg-white text-industrial-800 border border-industrial-200 hover:border-accent-500 hover:bg-industrial-100/70"
                            )}
                          >
                            <span className={isSelected ? "text-accent-400 font-bold" : "text-industrial-400"}>📏</span>
                            <span>{size}</span>
                          </button>
                        );
                      })}
                    </div>

                    {selectedSize && (
                      <div className="mt-3 text-xs text-industrial-700 bg-white p-2.5 rounded-lg border border-industrial-200 flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                        <span>Selected Size: <strong className="text-industrial-900 font-bold">{selectedSize}</strong> (included in your WhatsApp quote)</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Standard Width (if available) */}
                {product.specifications?.width && (
                  <div className="pt-3.5 border-t border-industrial-200/80 flex items-center justify-between text-xs">
                    <span className="font-bold text-industrial-800 uppercase tracking-wide">Standard Width:</span>
                    <span className="font-semibold text-industrial-900 bg-white px-3 py-1 rounded-md border border-industrial-200">
                      {product.specifications.width.join(', ')}
                    </span>
                  </div>
                )}

                {/* Available Colors Row */}
                {product.specifications?.colors && product.specifications.colors.length > 0 && (
                  <div className="pt-3.5 border-t border-industrial-200/80">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-industrial-800 uppercase tracking-wide">
                        <Palette size={15} className="text-blue-600" />
                        <span>Available Colors:</span>
                      </div>
                      <span className="text-[11px] font-semibold text-industrial-500">
                        {product.specifications.colors.length} Shades
                      </span>
                    </div>
                    
                    <div className="container-items pt-1 pb-2 px-1">
                      {product.specifications.colors.map(color => {
                        const colorMap = {
                          "Blue": "#3b82f6",
                          "Red": "#e11d48",
                          "Green": "#10b981",
                          "White": "#f8fafc",
                          "Clear": "#e2e8f0", 
                          "Bronze": "#b45309",
                          "Grey": "#64748b",
                          "Brown": "#78350f"
                        };
                        const hex = colorMap[color] || "#0ea5e9";
                        
                        return (
                          <button
                            key={color}
                            className="item-color"
                            style={{ "--color": hex }}
                            aria-color={color}
                            title={color}
                          ></button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 2. Suitable For (Placed below Thickness & Feet Sizes) */}
            {product.applications && product.applications.length > 0 && (
              <div className="mb-6">
                <h3 className="text-base sm:text-lg font-bold text-industrial-900 mb-3 flex items-center gap-2">
                  <span>Suitable For</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span 
                      key={app} 
                      className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-emerald-200/80 shadow-xs"
                    >
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Short & Sweet Description (Reduced contents, crisp and attractive) */}
            {shortDescription && (
              <div className="mb-6 p-4 rounded-xl bg-industrial-50/70 border border-industrial-200/70">
                <span className="block text-[11px] font-bold text-industrial-500 uppercase tracking-wider mb-1">
                  Product Overview
                </span>
                <p className="text-industrial-700 text-sm sm:text-base leading-relaxed font-medium">
                  {shortDescription}
                </p>
              </div>
            )}

            {/* 4. Action CTAs (Enquire on WhatsApp & Call Now) */}
            <div className="pt-2 pb-6 border-b border-industrial-100 flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
              <a 
                href={`https://wa.me/919842874256?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 sm:py-4 px-4 sm:px-6 rounded-md font-bold text-base sm:text-lg transition-all shadow-md hover:shadow-lg text-center"
              >
                <MessageCircle size={20} />
                Enquire on WhatsApp
              </a>
              <a 
                href="tel:+919842874256"
                className="flex items-center justify-center gap-2 bg-industrial-900 hover:bg-industrial-800 text-white py-3.5 sm:py-4 px-4 sm:px-6 rounded-md font-bold text-base sm:text-lg transition-colors sm:w-auto text-center"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>

            {/* Mobile Only: Quick Highlights at bottom */}
            <div className="lg:hidden mt-4">
              <ProductQuickHighlights product={product} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
