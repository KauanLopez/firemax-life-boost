import React from 'react';
import { FireMaxButton } from './FireMaxButton';
import heroBackground from '@/assets/fire-hero-bg.jpg';
import productImage from '@/assets/firemax-product.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with fire effects */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-background/70" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        {/* Product Image */}
        <div className="mb-8 flex justify-center">
          <img 
            src={productImage} 
            alt="FireMax - Produto Premium" 
            className="max-w-md w-full h-auto pulse-fire rounded-xl premium-shadow"
          />
        </div>

        {/* Main Title */}
        <h1 className="text-hero text-gold mb-6 fire-animation high-contrast">
          FireMax – 10x Mais Potente <br />
          <span className="text-fire">para Sua Vida</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-foreground high-contrast font-medium">
          A revolução natural que vai transformar sua energia, 
          confiança e disposição em apenas 30 dias
        </p>

        {/* CTA Button */}
        <FireMaxButton 
          variant="fire" 
          size="xl"
          className="mb-6 animate-pulse"
        >
          🔥 COMPRAR AGORA
        </FireMaxButton>

        {/* Trust indicators */}
        <div className="text-sm text-muted-foreground mt-4">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            <span>✅ Fórmula Natural</span>
            <span>✅ Garantia 90 dias</span>
            <span>✅ Aprovado pela ANVISA</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;