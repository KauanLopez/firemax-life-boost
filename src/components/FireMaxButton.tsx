import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FireMaxButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'fire' | 'gold' | 'outline';
  size?: 'default' | 'lg' | 'xl';
  children: React.ReactNode;
}

const FireMaxButton = React.forwardRef<HTMLButtonElement, FireMaxButtonProps>(
  ({ className, variant = 'fire', size = 'default', children, ...props }, ref) => {
    const variants = {
      fire: 'cta-fire text-white font-bold border-0 shadow-lg',
      gold: 'gold-gradient text-black font-bold border-0 shadow-lg hover:scale-105 transition-all',
      outline: 'border-2 border-fire-orange text-fire-orange bg-transparent hover:bg-fire-orange hover:text-white font-bold transition-all'
    };

    const sizes = {
      default: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
      xl: 'px-12 py-6 text-xl'
    };

    return (
      <button
        ref={ref}
        className={cn(
          'rounded-lg transition-all duration-300',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

FireMaxButton.displayName = 'FireMaxButton';

export { FireMaxButton };