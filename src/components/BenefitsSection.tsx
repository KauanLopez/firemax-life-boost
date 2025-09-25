import React from 'react';
import { Card } from '@/components/ui/card';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "⚡",
      title: "Mais Energia e Disposição",
      description: "Sinta-se revitalizado desde o primeiro dia. Energia que dura o dia todo, naturalmente."
    },
    {
      icon: "💪",
      title: "Confiança Renovada",
      description: "Recupere sua autoestima e confiança. Seja o homem que você sempre foi."
    },
    {
      icon: "🌿",
      title: "Fórmula Natural e Segura",
      description: "Ingredientes 100% naturais, sem efeitos colaterais. Aprovado pelos órgãos competentes."
    },
    {
      icon: "🚀",
      title: "Resultados Rápidos",
      description: "Primeiros resultados em 7 dias. Transformação completa em 30 dias."
    },
    {
      icon: "🧠",
      title: "Melhora do Foco Mental",
      description: "Concentração aprimorada e clareza mental para todas as suas atividades."
    },
    {
      icon: "❤️",
      title: "Relacionamentos Renovados",
      description: "Melhore sua intimidade e fortaleça seus relacionamentos pessoais."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section-title mb-6 text-fire">
            Por Que Mais de 15 Mil Homens Escolheram FireMax?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra os benefícios que estão transformando a vida de homens em todo o Brasil
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
            Não espere mais para transformar sua vida!
          </p>
          <div className="inline-block px-8 py-4 bg-fire-red/20 rounded-lg border-2 border-fire-red">
            <p className="text-fire-red font-bold text-lg">
              🔥 OFERTA LIMITADA: Apenas hoje com 50% OFF
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;