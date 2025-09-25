import React, { useState, useEffect } from 'react';
import { FireMaxButton } from './FireMaxButton';

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 32
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset to 24 hours when it reaches 0
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToPrice = () => {
    const pricingSection = document.querySelector('#pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-background border-b-2 border-fire-orange shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Message */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-fire-gold font-bold text-sm md:text-base leading-tight">
              🚨 <span className="text-fire-orange">Atenção:</span> comprando hoje você garante{' '}
              <span className="text-fire-yellow bg-fire-red/20 px-2 py-1 rounded">FRETE GRÁTIS!</span>{' '}
              Promoção válida por tempo limitado.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center gap-2">
            <span className="text-fire-gold font-bold text-sm">⏰</span>
            <div className="flex gap-1">
              <div className="bg-fire-red text-white px-2 py-1 rounded font-bold text-sm min-w-[2.5rem] text-center">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <span className="text-fire-orange font-bold">:</span>
              <div className="bg-fire-red text-white px-2 py-1 rounded font-bold text-sm min-w-[2.5rem] text-center">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <span className="text-fire-orange font-bold">:</span>
              <div className="bg-fire-red text-white px-2 py-1 rounded font-bold text-sm min-w-[2.5rem] text-center">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <FireMaxButton 
              variant="fire" 
              size="default"
              onClick={scrollToPrice}
              className="text-sm font-bold px-4 py-2 whitespace-nowrap"
            >
              COMPRAR AGORA
            </FireMaxButton>
          </div>
        </div>
        
        {/* Mobile-only timer labels */}
        <div className="md:hidden flex justify-center gap-1 mt-2 text-xs text-muted-foreground">
          <span className="w-10 text-center">HRS</span>
          <span className="w-2"></span>
          <span className="w-10 text-center">MIN</span>
          <span className="w-2"></span>
          <span className="w-10 text-center">SEG</span>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;