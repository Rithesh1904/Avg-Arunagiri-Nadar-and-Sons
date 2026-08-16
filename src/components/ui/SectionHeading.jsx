import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export function SectionHeading({ title, subtitle, className, center = false }) {
  return (
    <div className={cn("mb-12", center && "text-center", className)}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-extrabold text-industrial-950 mb-4 tracking-tight"
      >
        {title}
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "80px" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={cn("h-1.5 bg-accent-500 mb-6 rounded-full", center && "mx-auto")}
      />

      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn(
            "text-industrial-600 max-w-3xl text-lg md:text-xl font-medium leading-relaxed",
            center && "mx-auto"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
