import React from "react";
import { Tag, Building, Ruler } from "lucide-react";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";

export const ProductCard = React.forwardRef(({ product, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "group w-full overflow-hidden rounded-xl border border-industrial-200 bg-white shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:border-accent-500 hover:-translate-y-1.5",
        className
      )}
      {...props}
    >
      <div className="flex flex-col h-full">
        {/* Image Section */}
        <div className="overflow-hidden aspect-[4/3] bg-industrial-50 relative flex items-center justify-center">
          <img
            src={product.image || `https://picsum.photos/seed/${product.id}/600/600`}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-5 flex flex-col flex-grow">
          <div className="min-h-0 sm:min-h-[50px] flex flex-col items-start gap-0.5 mb-1.5 sm:mb-2">
            {product.brand && (
              <div className="text-[11px] sm:text-xs font-bold tracking-wider text-accent-600 uppercase">
                {product.brand}
              </div>
            )}
            <h3
              className="text-base sm:text-lg font-semibold tracking-tight text-industrial-900 leading-snug w-full"
              title={product.name}
            >
              {product.name}
            </h3>
          </div>

          <div className="flex flex-col gap-1.5 text-sm text-industrial-500 mb-2.5">
            <div className="flex flex-col gap-1.5 w-full">
              <div className="flex items-center gap-1.5 truncate">
                <Tag className="h-4 w-4 shrink-0 text-accent-500" />
                <span className="truncate text-xs font-medium">{product.category} {product.subcategory ? ` > ${product.subcategory}` : ''}</span>
              </div>
              
              {/* Available Sizes Badge - Viewable at Main */}
              {product.availableSizes && product.availableSizes.length > 0 && (
                <div className="mt-1 flex items-center gap-1.5 text-xs text-industrial-700 bg-industrial-50 rounded-md px-2 py-1 border border-industrial-200/80">
                  <Ruler className="h-3.5 w-3.5 text-accent-600 shrink-0" />
                  <span className="truncate font-medium">
                    Sizes: <strong className="font-semibold text-industrial-900">{product.availableSizes.slice(0, 3).join(', ')}</strong>
                    {product.availableSizes.length > 3 && (
                      <span className="text-accent-700 font-semibold ml-1">+{product.availableSizes.length - 3} more</span>
                    )}
                  </span>
                </div>
              )}

              <div className="text-xs text-industrial-500 mt-1 font-medium italic">
                * Enquire for price & sizes
              </div>
            </div>
          </div>
          
          <div className="flex gap-2 w-full mt-auto pt-2">
            <Link 
              to={`/product/${product.id}`}
              className="flex-1 text-center py-2 sm:py-2.5 px-2 bg-industrial-50 hover:bg-industrial-100 text-industrial-900 rounded-md font-bold transition-colors text-xs sm:text-sm"
            >
              View Details
            </Link>
            <a 
              href={`https://wa.me/919842874256?text=${encodeURIComponent(`Hello A.V.G. Arunagiri Nadar Sons, I am interested in:\nProduct: ${product.name}\nCategory: ${product.category}\n\nPlease provide availability and details. Thank you.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 sm:py-2.5 px-2 bg-[#0f172a] hover:bg-industrial-900 text-white rounded-md font-bold transition-colors text-xs sm:text-sm"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = "ProductCard";
