import React, { useState, useMemo, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Search, Filter, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { brands } from '../data/brands';
import { SectionHeading } from '../components/ui/SectionHeading';
import { EmptyState } from '../components/ui/EmptyState';
import { cn } from '../lib/utils';
import { ProductCard } from '../components/ui/ProductCard';

export function Products() {
  const { category: categoryParam } = useParams();
  const navigate = useNavigate();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  // Sync state with URL if it changes
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('all');
    }
  }, [categoryParam]);

  const handleCategoryChange = (val) => {
    if (val === 'all') {
      navigate('/products');
    } else {
      navigate(`/products/${val}`);
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== categories.find(c => c.id === selectedCategory)?.name) {
        return false;
      }
      
      // Brand filter
      if (selectedBrand !== 'all' && product.brand !== brands.find(b => b.id === selectedBrand)?.name) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return (
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          (product.subcategory && product.subcategory.toLowerCase().includes(query)) ||
          (product.brand && product.brand.toLowerCase().includes(query))
        );
      }

      return true;
    });
  }, [selectedCategory, selectedBrand, searchQuery]);

  return (
    <div className="bg-industrial-50 min-h-screen pt-[90px] pb-12 relative z-0">
      {/* Background Image with Higher Brightness/Opacity */}
      <div 
        className="absolute inset-0 -z-10 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center bg-fixed opacity-40"
      />
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Search Bar Area */}
        <div className="mt-12 md:mt-16 mb-8 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight text-industrial-900 uppercase">
                <span className="text-accent-600 font-light italic">Premium</span> Collections
              </h1>
              <p className="text-industrial-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                Discover our curated selection of high-grade structural and roofing materials. Excellence built for tomorrow.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-full max-w-3xl text-industrial-900"
            >
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-industrial-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-16 pr-8 py-5 border-2 border-industrial-200/60 rounded-full leading-5 bg-white/80 backdrop-blur-md placeholder-industrial-400 focus:outline-none focus:border-accent-500 focus:ring-4 focus:ring-accent-500/20 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] text-lg font-medium"
                placeholder="Search premium products, categories, brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between bg-white/80 backdrop-blur-md p-4 rounded-md shadow-sm border border-industrial-200">
            <span className="font-semibold text-industrial-800">Filters</span>
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-industrial-600 hover:text-industrial-900"
            >
              <Filter size={20} />
              {isFilterOpen ? 'Hide' : 'Show'}
            </button>
          </div>

          {/* Sidebar Filters */}
          <AnimatePresence>
            {(isFilterOpen || window.innerWidth >= 1024) && (
              <motion.aside
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className={cn(
                  "lg:w-1/4 flex-shrink-0 lg:block overflow-hidden lg:overflow-visible",
                  !isFilterOpen && "hidden"
                )}
              >
                <div className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-sm border border-white/50 sticky top-24 space-y-8">
                  {/* Category Filter */}
                  <div>
                    <h3 className="text-lg font-bold text-industrial-900 mb-4 border-b border-industrial-100 pb-2">Category</h3>
                    <div className="space-y-3">
                      <label className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="category"
                          value="all"
                          checked={selectedCategory === 'all'}
                          onChange={() => handleCategoryChange('all')}
                          className="w-4 h-4 text-accent-600 border-industrial-300 focus:ring-accent-500"
                        />
                        <span className="ml-3 text-industrial-700 group-hover:text-industrial-900 transition-colors">All Categories</span>
                      </label>
                      {categories.map((cat) => (
                        <label key={cat.id} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="category"
                            value={cat.id}
                            checked={selectedCategory === cat.id}
                            onChange={() => handleCategoryChange(cat.id)}
                            className="w-4 h-4 text-accent-600 border-industrial-300 focus:ring-accent-500"
                          />
                          <span className="ml-3 text-industrial-700 group-hover:text-industrial-900 transition-colors">{cat.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Brand Filter */}
                  <div>
                    <h3 className="text-lg font-bold text-industrial-900 mb-4 border-b border-industrial-100 pb-2">Brand</h3>
                    <div className="space-y-3">
                      <label className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="brand"
                          value="all"
                          checked={selectedBrand === 'all'}
                          onChange={(e) => setSelectedBrand(e.target.value)}
                          className="w-4 h-4 text-accent-600 border-industrial-300 focus:ring-accent-500"
                        />
                        <span className="ml-3 text-industrial-700 group-hover:text-industrial-900 transition-colors">All Brands</span>
                      </label>
                      {brands.map((brand) => (
                        <label key={brand.id} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="brand"
                            value={brand.id}
                            checked={selectedBrand === brand.id}
                            onChange={(e) => setSelectedBrand(e.target.value)}
                            className="w-4 h-4 text-accent-600 border-industrial-300 focus:ring-accent-500"
                          />
                          <span className="ml-3 text-industrial-700 group-hover:text-industrial-900 transition-colors">{brand.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Reset Filters */}
                  {(selectedCategory !== 'all' || selectedBrand !== 'all' || searchQuery !== '') && (
                    <button
                      onClick={() => {
                        handleCategoryChange('all');
                        setSelectedBrand('all');
                        setSearchQuery('');
                      }}
                      className="w-full flex items-center justify-center gap-2 py-2 text-industrial-500 hover:text-industrial-900 bg-industrial-50 hover:bg-industrial-100 rounded transition-colors"
                    >
                      <X size={16} />
                      Clear Filters
                    </button>
                  )}
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="mb-4 text-industrial-500 text-sm">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <EmptyState 
                title="No products found" 
                message="We couldn't find any products matching your current filters and search query."
                action={
                  <button
                    onClick={() => {
                      handleCategoryChange('all');
                      setSelectedBrand('all');
                      setSearchQuery('');
                    }}
                    className="bg-industrial-900 text-white px-6 py-2 rounded-md font-semibold hover:bg-industrial-800 transition-colors"
                  >
                    Clear All Filters
                  </button>
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
