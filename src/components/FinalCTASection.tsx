import React from 'react';
import { FireMaxButton } from './FireMaxButton';

const FinalCTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with fire gradient */}
      <div className="absolute inset-0 fire-gradient opacity-90" />
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          
          {/* Main headline */}
          <h2 className="text-hero text-white mb-6 high-contrast fire-animation">
            Invista no Seu Bem-Estar.
            <br />
            <span className="text-fire-gold">
              Experimente FireMax Hoje Mesmo!
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed high-contrast">
            Milhares de homens já escolheram FireMax para auxiliar em sua energia e vitalidade. 
            <br className="hidden md:block" />
            <strong className="text-fire-gold">Seja o próximo a experimentar!</strong>
          </p>

          {/* Benefits reminder */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 text-white">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="text-3xl mb-2">⚡</div>
              <p className="font-bold">Energia e Vitalidade</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="text-3xl mb-2">🛡️</div>
              <p className="font-bold">Política de Satisfação</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="text-3xl mb-2">🌿</div>
              <p className="font-bold">Fórmula Natural</p>
            </div>
          </div>

          {/* Urgency */}
            <div className="bg-fire-orange/90 backdrop-blur-sm p-6 rounded-xl border-2 border-fire-orange mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                🎁 OFERTA ESPECIAL DISPONÍVEL!
              </h3>
              <p className="text-white/90 text-lg">
                Aproveite nossa promoção especial com frete grátis. 
                <br />
                Experimente FireMax e invista no seu bem-estar.
              </p>
            </div>

            {/* Main CTA */}
            <div className="space-y-6">
              <FireMaxButton 
                variant="gold" 
                size="xl"
                className="text-2xl px-16 py-8 pulse-fire font-black"
              >
                💎 QUERO EXPERIMENTAR O FIREMAX
              </FireMaxButton>

              {/* Secondary benefits */}
              <div className="flex justify-center items-center gap-6 flex-wrap text-white/80 text-sm">
                <span>✅ Entrega rápida e discreta</span>
                <span>✅ Pagamento 100% seguro</span>
                <span>✅ Suporte 24/7</span>
              </div>

              {/* Final urgency message */}
              <p className="text-lg text-fire-gold font-bold">
                👆 Clique agora e invista no seu bem-estar com segurança total!
              </p>
            </div>

            {/* Trust elements */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-white/70 text-sm mb-4">
                Milhares de homens já confiaram no FireMax
              </p>
              <div className="flex justify-center gap-4 text-fire-gold text-2xl">
                {'★'.repeat(5)}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;