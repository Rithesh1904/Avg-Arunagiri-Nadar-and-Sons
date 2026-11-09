import React from 'react';
import { cn } from '../../lib/utils';
import './ScrollStack.css';

export const ScrollStackItem = ({ 
  children, 
  itemClassName = '',
  index = 0,
  total = 1
}) => {
  return (
    <div 
      className={cn("scroll-stack-card-wrapper", itemClassName)}
      style={{
        // Responsive sticky top offset staggered by card index
        top: `calc(var(--stack-top-base, 70px) + ${index} * var(--stack-step, 20px))`,
        zIndex: index + 1,
        // Margin bottom provides comfortable scroll distance before next card overtakes
        marginBottom: index === total - 1 ? '1.5rem' : 'var(--stack-margin, 90px)'
      }}
    >
      <div className="scroll-stack-card group relative">
        {children}
      </div>
    </div>
  );
};

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 70,
  useWindowScroll = true,
  ...props
}) => {
  const childrenArray = React.Children.toArray(children);
  const total = childrenArray.length;

  return (
    <div className={cn("scroll-stack-scroller w-full relative", className)}>
      <div className="scroll-stack-inner w-full relative">
        {childrenArray.map((child, index) => {
          if (!React.isValidElement(child)) return child;
          return React.cloneElement(child, {
            index,
            total,
            key: child.key || index
          });
        })}
      </div>
    </div>
  );
};

export default ScrollStack;
