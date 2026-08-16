import React from "react";
import { motion } from "framer-motion";
import { Tag, Building } from "lucide-react";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";

// Animation variants for Framer Motion
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const ProductCard = React.forwardRef(({ product, className, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(
        "group w-full overflow-hidden rounded-xl border border-industrial-200 bg-white shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:border-accent-500",
        className
      )}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.03, y: -5 }}
      {...props}
    >
      <div className="flex flex-col h-full">
        {/* Image Section */}
        <div className="overflow-hidden aspect-[4/3] bg-industrial-50 relative flex items-center justify-center">
          <img
            src={product.image || `https://picsum.photos/seed/${product.id}/600/600`}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>

        {/* Content Section */}
        <div className="space-y-3 p-5 flex flex-col flex-grow">
          <div className="flex flex-col items-start justify-between gap-1 flex-grow">
            {product.brand && (
              <motion.div
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xs font-bold tracking-wider text-accent-600 uppercase mb-1"
              >
                {product.brand}
              </motion.div>
            )}
            <motion.h3
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ transitionDelay: '0.1s' }}
              className="text-lg font-semibold tracking-tight text-industrial-900 leading-tight w-full"
              title={product.name}
            >
              {product.name}
            </motion.h3>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-industrial-500 pb-2">
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ transitionDelay: '0.2s' }}
              className="flex flex-col gap-1.5 w-full"
            >
              <div className="flex items-center gap-1.5 truncate">
                <Tag className="h-4 w-4 shrink-0" />
                <span className="truncate">{product.category} {product.subcategory ? ` > ${product.subcategory}` : ''}</span>
              </div>
              {product.price && (
                <div className="font-bold text-black text-lg mt-1">
                  {product.price}
                </div>
              )}
            </motion.div>
          </div>
          
          <div className="flex gap-2 w-full mt-auto pt-2">
            <Link 
              to={`/product/${product.id}`}
              className="flex-1 text-center py-2.5 bg-industrial-50 hover:bg-industrial-100 text-industrial-900 rounded-md font-bold transition-colors text-sm"
            >
              View Details
            </Link>
            <a 
              href={`https://wa.me/919842874256?text=${encodeURIComponent(`Hello A.V.G. Arunagiri Nadar Sons, I am interested in:\nProduct: ${product.name}\nCategory: ${product.category}\n\nPlease provide the best price and availability. Thank you.`)}`}
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
  );
});

ProductCard.displayName = "ProductCard";
