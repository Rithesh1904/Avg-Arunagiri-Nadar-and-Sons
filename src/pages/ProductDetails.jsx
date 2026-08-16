import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { EmptyState } from '../components/ui/EmptyState';
import { cn } from '../lib/utils';

export function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = products.find(p => p.id === productId);
    setProduct(found);
    window.scrollTo(0, 0);
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

  const whatsappMessage = encodeURIComponent(`Hello A.V.G. Arunagiri Nadar Sons, I am interested in:\nProduct: ${product.name}\nCategory: ${product.category}\n\nPlease provide the best price and availability. Thank you.`);

  return (
    <div className="bg-white min-h-screen pt-[90px] pb-20 relative z-0">
      {/* Breadcrumb & Back */}
      <div className="bg-industrial-50 border-b border-industrial-100 py-4">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-industrial-600 hover:text-industrial-900 transition-colors font-semibold text-sm"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <div className="text-sm text-industrial-500 hidden sm:block">
            <Link to="/products" className="hover:text-accent-600 transition-colors">Products</Link>
            <span className="mx-2">/</span>
            <Link to={`/products/${products.find(p=>p.id===productId)?.category ? 'all' : ''}`} className="hover:text-accent-600 transition-colors">{product.category}</Link>
            <span className="mx-2">/</span>
            <span className="text-industrial-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Product Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-industrial-50 border border-industrial-200 rounded-xl aspect-[4/3] relative flex items-center justify-center text-industrial-400 overflow-hidden"
          >
            <span className="font-semibold text-lg">Product Image Placeholder</span>
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
            
            <h1 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-2">{product.name}</h1>
            
            {product.price && (
              <div className="text-2xl font-bold text-black mb-6">
                {product.price}
              </div>
            )}
            
            <p className="text-industrial-600 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

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
            <div className="mt-auto pt-8 border-t border-industrial-100 flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://wa.me/919842874256?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-6 rounded-md font-bold text-lg transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle size={22} />
                Get Best Price on WhatsApp
              </a>
              <a 
                href="tel:+919842874256"
                className="flex items-center justify-center gap-2 bg-industrial-900 hover:bg-industrial-800 text-white py-4 px-6 rounded-md font-bold text-lg transition-colors sm:w-auto"
              >
                <Phone size={22} />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
