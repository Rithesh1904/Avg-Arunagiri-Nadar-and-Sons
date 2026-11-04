import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { gallery } from '../data/gallery';
import { EmptyState } from '../components/ui/EmptyState';
import { motion, AnimatePresence } from 'framer-motion';
import { MasonryGrid } from '../components/ui/image-testimonial-grid';
import { X, Camera, Eye, MapPin, Layers, Tag } from 'lucide-react';

export function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activePhoto, setActivePhoto] = useState(null);
  const [columns, setColumns] = useState(4);

  React.useEffect(() => {
    const getColumns = (width) => {
      if (width < 640) return 1;    // sm
      if (width < 1024) return 2;   // lg
      if (width < 1280) return 3;   // xl
      return 4;                     // 2xl and up
    };

    const handleResize = () => {
      setColumns(getColumns(window.innerWidth));
    };

    handleResize(); // Set initial columns on mount

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Extract unique applications
  const categories = ['All', ...new Set(gallery.map(item => item.application))];
  
  const filteredGallery = filter === 'All' 
    ? gallery 
    : gallery.filter(item => item.application === filter);

  return (
    <div className="bg-industrial-50 min-h-screen pb-16">
      {/* Gallery Header Removed per request */}
      <div className="container mx-auto px-4 md:px-6 pt-[120px]">

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all text-sm ${
                filter === cat 
                  ? 'bg-industrial-900 text-white shadow-md' 
                  : 'bg-white text-industrial-600 hover:bg-industrial-100 border border-industrial-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {filteredGallery.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredGallery.map((item) => {
              const photoCount = item.images ? item.images.length : 8;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  onClick={() => setSelectedProject(item)}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-industrial-200 group cursor-pointer hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-[4/3] bg-industrial-100 relative overflow-hidden flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-500" 
                      onError={(e) => {
                        if (item.images && item.images[0]) {
                          const fallback = typeof item.images[0] === 'string' ? item.images[0] : item.images[0].url;
                          e.currentTarget.src = fallback;
                        }
                      }}
                    />
                    
                    {/* Photos Count Badge */}
                    <div className="absolute top-3 right-3 z-10 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                      <Camera size={13} className="text-accent-400" />
                      <span>{photoCount} Project Views</span>
                    </div>

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-colors duration-300 z-10 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center text-white shadow-lg">
                          <Eye size={24} />
                        </div>
                        <span className="text-white font-bold tracking-wider uppercase text-sm shadow-black drop-shadow-md">
                          View Project Applications
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-accent-600 uppercase tracking-wider">
                        {item.application}
                      </span>
                      <span className="text-xs text-industrial-400 flex items-center gap-1">
                        <Layers size={13} />
                        {photoCount} product installations
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-industrial-900 mb-1 group-hover:text-accent-600 transition-colors">
                      {item.title}
                    </h3>
                    {item.location && (
                      <p className="text-industrial-500 text-sm flex items-center gap-1 mt-1">
                        <MapPin size={14} className="text-industrial-400" />
                        {item.location}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <EmptyState 
            title="No Projects Found"
            message={`We couldn't find any projects in the ${filter} category.`}
            action={
              <button 
                onClick={() => setFilter('All')}
                className="text-accent-600 font-bold hover:underline"
              >
                View All Projects
              </button>
            }
          />
        )}
      </div>

      {/* Modal for MasonryGrid */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-md overflow-y-auto"
          >
            {/* Modal Controls */}
            <div className="sticky top-0 right-0 p-4 md:p-6 flex justify-between items-center z-[60] bg-gradient-to-b from-black/90 via-black/70 to-transparent">
              <div className="text-left">
                <span className="text-xs uppercase font-bold tracking-widest text-accent-400">
                  {selectedProject.application} Applications
                </span>
                <h3 className="text-white font-semibold text-lg line-clamp-1">{selectedProject.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="text-white hover:text-accent-400 transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2.5 backdrop-blur-sm"
              >
                <X size={26} />
              </button>
            </div>
            
            <div className="w-full max-w-7xl mx-auto px-4 pb-20 pt-2 flex flex-col items-center relative">
              <div className="text-center mb-10 max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
                  {selectedProject.title}
                </h2>
                {selectedProject.location && (
                  <p className="text-industrial-300 text-base md:text-lg flex items-center justify-center gap-1.5 mb-3">
                    <MapPin size={18} className="text-accent-400" />
                    {selectedProject.location}
                  </p>
                )}
                {selectedProject.description && (
                  <p className="text-industrial-300/80 text-sm md:text-base leading-relaxed">
                    {selectedProject.description}
                  </p>
                )}
              </div>

              {/* Masonry Image Gallery */}
              <div className="w-full">
                <MasonryGrid columns={columns} gap={4}>
                  {(selectedProject.images || []).map((imgItem, index) => {
                    const imgSrc = typeof imgItem === 'string' ? imgItem : imgItem.url;
                    const pinterestSrc = typeof imgItem === 'object' ? imgItem.pinterestUrl : null;
                    const caption = typeof imgItem === 'object' && imgItem.title ? imgItem.title : `Installation ${index + 1}`;
                    const productTag = typeof imgItem === 'object' ? imgItem.productTag : null;

                    return (
                      <div 
                        key={index} 
                        onClick={() => setActivePhoto({ src: imgSrc, caption, pinterestSrc, productTag })}
                        className="relative rounded-2xl overflow-hidden group transition-all duration-300 ease-in-out hover:scale-[1.02] cursor-pointer shadow-md bg-neutral-900 border border-white/5"
                      >
                        <img
                          src={imgSrc}
                          alt={caption}
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          className="w-full h-auto object-cover block"
                          onError={(e) => {
                            if (pinterestSrc && e.currentTarget.src !== pinterestSrc) {
                              e.currentTarget.src = pinterestSrc;
                            } else {
                              e.currentTarget.src = 'https://placehold.co/800x600/1e293b/ffffff?text=Roofing+Gallery+View';
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4" />
                        <div className="absolute inset-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between pointer-events-none">
                          <div className="flex justify-between items-start">
                            {productTag ? (
                              <span className="font-semibold text-xs tracking-wide uppercase px-2.5 py-1 rounded bg-accent-500 text-white backdrop-blur-sm shadow flex items-center gap-1">
                                <Tag size={12} />
                                {productTag}
                              </span>
                            ) : (
                              <span className="font-semibold text-xs tracking-wider uppercase px-2.5 py-1 rounded bg-accent-500/90 text-white backdrop-blur-sm shadow">
                                Photo #{index + 1}
                              </span>
                            )}
                            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                              <Eye size={16} />
                            </div>
                          </div>
                          <div>
                            <p className="font-semibold text-sm drop-shadow-md text-white line-clamp-2">{caption}</p>
                            <p className="text-xs text-white/70 drop-shadow mt-0.5">{selectedProject.title}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </MasonryGrid>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal for Full View */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4 cursor-zoom-out"
          >
            <button 
              onClick={() => setActivePhoto(null)}
              className="absolute top-6 right-6 text-white hover:text-accent-400 bg-white/10 p-3 rounded-full z-10"
              aria-label="Close photo preview"
            >
              <X size={28} />
            </button>
            <div 
              className="max-w-5xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activePhoto.src}
                alt={activePhoto.caption}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[80vh] rounded-lg object-contain shadow-2xl"
                onError={(e) => {
                  if (activePhoto.pinterestSrc && e.currentTarget.src !== activePhoto.pinterestSrc) {
                    e.currentTarget.src = activePhoto.pinterestSrc;
                  }
                }}
              />
              <div className="flex flex-col items-center mt-4">
                {activePhoto.productTag && (
                  <span className="text-xs font-bold uppercase tracking-wider text-accent-400 bg-white/10 px-3 py-1 rounded-full mb-1 flex items-center gap-1.5">
                    <Tag size={13} />
                    {activePhoto.productTag}
                  </span>
                )}
                <p className="text-white text-center font-medium text-base md:text-lg">
                  {activePhoto.caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
