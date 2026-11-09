import * as React from 'react';
import { cn } from '../../lib/utils';

const MasonryGrid = React.forwardRef(
  ({ className, columns = 3, gap = 4, children, ...props }, ref) => {
    // Dynamically create the style object for column layout
    const style = {
      columnCount: columns,
      columnGap: `${gap * 0.25}rem`, // Converts gap unit to rem
    };

    return (
      <div ref={ref} style={style} className={cn('w-full', className)} {...props}>
        {React.Children.map(children, (child) => (
          <div className="mb-4 break-inside-avoid transition-all duration-300">
            {child}
          </div>
        ))}
      </div>
    );
  }
);

MasonryGrid.displayName = 'MasonryGrid';

export { MasonryGrid };
