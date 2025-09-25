import React from 'react';
import { Card } from '@/components/ui/card';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "⚡",
      title: "Mais Energia e Disposição",
      description: "Pode ajudar você a se sentir mais revitalizado ao longo do dia, com mais energia natural."
    },
    {
      icon: "💪",
      title: "Auxilia na Confiança",
      description: "Contribui para que você se sinta mais confiante e bem consigo mesmo."
    },
    {
      icon: "🌿",
      title: "Fórmula Natural e Segura",
      description: "Ingredientes naturais selecionados, formulado seguindo boas práticas de fabricação."
    },
    {
      icon: "🎯",
      title: "Pode Trazer Benefícios",
      description: "Suplementação que pode auxiliar no bem-estar e vitalidade masculina."
    },
    {
      icon: "🧠",
      title: "Contribui para o Foco",
      description: "Pode ajudar na concentração e clareza mental para suas atividades diárias."
    },
    {
      icon: "❤️",
      title: "Bem-estar Geral",
      description: "Pode contribuir para o seu bem-estar físico e emocional no dia a dia."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section-title mb-6 text-fire">
            Por Que Milhares de Homens Escolheram FireMax?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra os benefícios que podem contribuir para sua energia e bem-estar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:border-fire-orange/50 transition-all group hover:scale-105">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform fire-animation">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gold">
                {benefit.title}
              </h3>
              <p className="text-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-lg mb-6 text-muted-foreground">
            Invista no seu bem-estar com FireMax!
          </p>
          <div className="inline-block px-8 py-4 bg-fire-orange/20 rounded-lg border-2 border-fire-orange">
            <p className="text-fire-orange font-bold text-lg">
              🎁 Oferta especial disponível por tempo limitado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;