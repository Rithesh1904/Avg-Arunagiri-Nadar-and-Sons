import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { gallery } from '../data/gallery';
import { EmptyState } from '../components/ui/EmptyState';
import { motion, AnimatePresence } from 'framer-motion';
import { MasonryGrid } from '../components/ui/image-testimonial-grid';
import { X } from 'lucide-react';
export function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
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
            {filteredGallery.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedProject(item)}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-industrial-200 group cursor-pointer"
              >
                <div className="aspect-[4/3] bg-industrial-100 relative overflow-hidden flex items-center justify-center">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 z-10 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center text-white shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                      </div>
                      <span className="text-white font-bold tracking-wider uppercase text-sm shadow-black drop-shadow-md">View Project</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-accent-600 uppercase tracking-wider mb-2">
                    {item.application}
                  </div>
                  <h3 className="text-xl font-bold text-industrial-900 mb-1">{item.title}</h3>
                  {item.location && (
                    <p className="text-industrial-500 text-sm">{item.location}</p>
                  )}
                </div>
              </motion.div>
            ))}
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
            <div className="sticky top-0 right-0 p-6 flex justify-end z-[60] bg-gradient-to-b from-black/80 to-transparent">
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-white hover:text-accent-500 transition-colors bg-black/50 rounded-full p-2"
              >
                <X size={32} />
              </button>
            </div>
            
            <div className="w-full max-w-7xl mx-auto px-4 pb-20 pt-4 flex flex-col items-center relative">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{selectedProject.title}</h2>
                <p className="text-industrial-300 text-lg md:text-xl">{selectedProject.location}</p>
              </div>

              <div className="w-full">
                <MasonryGrid columns={columns} gap={4}>
                  {[
                    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&h=1200&q=80',
                    'https://images.unsplash.com/photo-1605292356183-a77d0a9c9d1d?w=900&auto=format&fit=crop&q=60',
                    'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?auto=format&fit=crop&w=800&h=1000&q=80',
                    'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?w=900&auto=format&fit=crop&q=60',
                    'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=900&auto=format&fit=crop&q=60',
                    'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=900&auto=format&fit=crop&q=60',
                    'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=900&auto=format&fit=crop&q=60',
                    'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&h=1200&q=80'
                  ].map((imgUrl, index) => (
                    <div key={index} className="relative rounded-2xl overflow-hidden group transition-transform duration-300 ease-in-out hover:scale-[1.02]">
                      <img
                        src={imgUrl}
                        alt={`Project view ${index + 1}`}
                        className="w-full h-auto object-cover"
                        onError={(e) => {
                          e.currentTarget.src = 'https://placehold.co/800x600/1a1a1a/ffffff?text=Image';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-semibold text-sm drop-shadow-md">View {index + 1}</span>
                      </div>
                    </div>
                  ))}
                </MasonryGrid>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
