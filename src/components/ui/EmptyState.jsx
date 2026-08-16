import React from 'react';
import { FileSearch } from 'lucide-react';
import { cn } from '../../lib/utils';

export function EmptyState({ 
  title = "No results found", 
  message = "Try adjusting your search or filters to find what you're looking for.",
  action,
  className
}) {
  return (
    <div className={cn("flex flex-col items-center justify-center p-12 text-center border border-dashed border-industrial-200 rounded-lg bg-industrial-50", className)}>
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
        <FileSearch size={32} className="text-industrial-400" />
      </div>
      <h3 className="text-lg font-bold text-industrial-900 mb-2">{title}</h3>
      <p className="text-industrial-500 max-w-sm mb-6">{message}</p>
      {action && (
        <div>{action}</div>
      )}
    </div>
  );
}
