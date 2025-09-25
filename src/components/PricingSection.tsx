import React from 'react';
import { Card } from '@/components/ui/card';
import { FireMaxButton } from './FireMaxButton';

const PricingSection = () => {
  const packages = [
    {
      title: "Teste FireMax",
      subtitle: "1 Frasco",
      duration: "30 dias",
      originalPrice: "R$ 297,00",
      price: "R$ 197,00",
      installments: "Parcelamento a consultar na compra",
      savings: null,
      highlight: false,
      features: [
        "1 Frasco do FireMax",
        "30 dias de tratamento",
        "Garantia de 90 dias"
      ]
    },
    {
      title: "Mais Popular",
      subtitle: "3 Frascos",
      duration: "90 dias",
      originalPrice: "R$ 591,00",
      price: "R$ 297,00",
      installments: "Parcelamento a consultar na compra",
      savings: "Economize R$ 394",
      highlight: true,
      features: [
        "3 Frascos do FireMax",
        "90 dias de tratamento completo",
        "Garantia de 90 dias",
        "Suporte VIP por WhatsApp",
      ]
    },
    {
      title: "Máximo Resultado",
      subtitle: "5 Frascos",
      duration: "150 dias",
      originalPrice: "R$ 985,00",
      price: "R$ 397,00",
      installments: "Parcelamento a consultar na compra",
      savings: "Economize R$ 688",
      highlight: false,
      features: [
        "5 Frascos do FireMax",
        "150 dias de tratamento",
        "Garantia estendida 120 dias",
        "Suporte VIP prioritário",
        "Consulta nutricional gratuita"
      ]
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section-title mb-6 text-fire">
            Escolha Seu Pacote FireMax
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Escolha o pacote ideal para você
          </p>
          <div className="inline-block bg-fire-orange/20 px-6 py-3 rounded-lg border-2 border-fire-orange">
            <p className="text-fire-orange font-bold">
              🎁 Ofertas especiais disponíveis por tempo limitado
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative p-8 ${
                pkg.highlight 
                  ? 'bg-fire-orange/10 border-2 border-fire-orange transform scale-105 z-10' 
                  : 'bg-card border-border'
              } transition-all hover:scale-105`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="fire-gradient px-4 py-2 rounded-full text-white font-bold text-sm">
                    MAIS VENDIDO
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2 text-gold">{pkg.title}</h3>
                <p className="text-lg text-foreground">{pkg.subtitle}</p>
                <p className="text-sm text-muted-foreground">{pkg.duration}</p>
              </div>

              {pkg.savings && (
                <div className="text-center mb-4">
                  <span className="bg-fire-red text-white px-3 py-1 rounded-full text-sm font-bold">
                    {pkg.savings}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <p className="text-sm text-muted-foreground line-through">
                  De {pkg.originalPrice}
                </p>
                <p className="text-3xl font-bold text-fire-gold mb-1">
                  {pkg.price}
                </p>
                <p className="text-sm text-muted-foreground">
                  {pkg.installments}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-foreground">
                    <span className="text-fire-orange mr-2">✅</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <FireMaxButton 
                variant={pkg.highlight ? "fire" : "gold"} 
                size="lg" 
                className="w-full"
              >
                COMPRAR AGORA
              </FireMaxButton>
            </Card>
          ))}
        </div>

        {/* Urgency Timer */}
        <div className="text-center">
          <Card className="inline-block p-6 bg-fire-orange/10 border-2 border-fire-orange">
            <h3 className="text-xl font-bold mb-4 text-fire-orange">
              ⏰ Oferta especial disponível ainda hoje:
            </h3>
            <div className="flex justify-center gap-4 text-center">
              <div className="bg-fire-orange text-white px-3 py-2 rounded font-bold">
                <div className="text-xl">23</div>
                <div className="text-xs">HORAS</div>
              </div>
              <div className="bg-fire-orange text-white px-3 py-2 rounded font-bold">
                <div className="text-xl">47</div>
                <div className="text-xs">MINUTOS</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
