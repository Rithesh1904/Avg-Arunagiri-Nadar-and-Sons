import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Phone, CheckCircle2, Ruler } from 'lucide-react';
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

      <div className="container mx-auto px-4 md:px-6 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Interactive 3D Product Sheet Viewer with Free Drag & Spin & Quick Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col gap-6"
          >
            <Product3DViewer product={product} />
            <ProductQuickHighlights product={product} />
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            {product.brand && (
              <div className="inline-block bg-industrial-100 text-industrial-800 font-bold px-3 py-1 rounded text-xs uppercase tracking-wider w-max mb-4">
                {product.brand}
              </div>
            )}
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-industrial-900 mb-2">{product.name}</h1>
            
            {/* Price removed as per request */}
            <div className="text-sm text-industrial-500 font-medium italic mb-4 sm:mb-6 mt-1">
              * Enquire for price and details
            </div>
            
            <p className="text-industrial-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Available Feet Sizes / Dimensions Section */}
            {product.availableSizes && product.availableSizes.length > 0 && (
              <div className="mb-8 p-5 bg-industrial-50 rounded-xl border border-industrial-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Ruler className="text-accent-600" size={18} />
                    <h3 className="text-base font-bold text-industrial-900 uppercase tracking-wide">
                      Available Feet Sizes & Dimensions
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-industrial-700 bg-white px-2.5 py-1 rounded-full border border-industrial-200 shadow-sm">
                    {product.availableSizes.length} {product.availableSizes.length === 1 ? 'Size' : 'Sizes'} Available
                  </span>
                </div>
                
                <p className="text-xs text-industrial-500 mb-3">
                  Choose your required size to check instant availability & pricing:
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {product.availableSizes.map((size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "px-3.5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer",
                          isSelected
                            ? "bg-industrial-900 text-white ring-2 ring-accent-500 shadow-md scale-[1.02]"
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
                  <div className="mt-3.5 text-xs text-industrial-700 bg-white p-2.5 rounded-lg border border-industrial-200 flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                    <span>Selected Size: <strong className="text-industrial-900 font-bold text-sm">{selectedSize}</strong> (will be automatically included in your enquiry)</span>
                  </div>
                )}
              </div>
            )}

            {/* Specifications */}
            {product.specifications && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-industrial-900 mb-4 border-b border-industrial-100 pb-2">Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => {
                    if (key === 'colors' || !value || value.length === 0) return null;
                    const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                    return (
                      <div key={key} className="bg-industrial-50 p-4 rounded-lg border border-industrial-100">
                        <span className="block text-xs font-semibold text-industrial-500 uppercase tracking-wider mb-1">{formattedKey}</span>
                        <span className="text-industrial-900 font-medium">{value.join(', ')}</span>
                      </div>
                    );
                  })}
                  {product.specifications.colors?.length > 0 && (
                    <div className="bg-industrial-50 p-4 rounded-lg border border-industrial-100 sm:col-span-2">
                      <span className="block text-xs font-semibold text-industrial-500 uppercase tracking-wider mb-3">Available Colors</span>
                      
                      <div className="container-items pt-2 pb-4 px-2">
                        {product.specifications.colors.map(color => {
                          // Simple mapping to get a reasonable hex for common colors
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
                          const hex = colorMap[color] || "#0ea5e9"; // fallback
                          
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
              </div>
            )}

            {/* Applications */}
            {product.applications?.length > 0 && (
              <div className="mb-10">
                <h3 className="text-lg font-bold text-industrial-900 mb-4 border-b border-industrial-100 pb-2">Suitable For</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map(app => (
                    <span key={app} className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-sm font-semibold border border-green-100">
                      <CheckCircle2 size={14} />
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTAs */}
            <div className="mt-auto pt-6 sm:pt-8 border-t border-industrial-100 flex flex-col sm:flex-row gap-3 sm:gap-4">
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}
