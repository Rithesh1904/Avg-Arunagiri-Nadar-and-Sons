import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export function SectionHeading({ title, subtitle, className, center = false }) {
  return (
    <div className={cn("mb-6 sm:mb-10 md:mb-12", center && "text-center", className)}>
      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-industrial-950 mb-2 sm:mb-4 tracking-tight"
      >
        {title}
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "80px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={cn("h-1 sm:h-1.5 bg-accent-500 mb-3 sm:mb-6 rounded-full", center && "mx-auto")}
      />

      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={cn(
            "text-industrial-600 max-w-3xl text-sm sm:text-base md:text-xl font-medium leading-relaxed",
            center && "mx-auto"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
