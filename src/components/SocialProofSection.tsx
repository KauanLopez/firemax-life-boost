import React from 'react';
import { Card } from '@/components/ui/card';
import trustBadges from '@/assets/trust-badges.png';

const SocialProofSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      age: 52,
      text: "Aos 52 anos, sentia que minha energia estava baixa. Com o FireMax, me sinto mais disposto e confiante no dia a dia!",
      avatar: "👨‍💼"
    },
    {
      name: "Maria Santos",
      age: 48,
      text: "Comprei para meu marido e ele ficou muito satisfeito. Mais energia para trabalhar e aproveitar os momentos em família.",
      avatar: "👩‍⚕️"
    },
    {
      name: "Roberto Oliveira",
      age: 55,
      text: "Natural e seguro. FireMax me ajudou a ter mais disposição e bem-estar. Recomendo para quem busca mais vitalidade!",
      avatar: "👨‍🔧"
    }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-section-title text-center mb-12 text-gold">
          Mais de 15.000 Homens Confiam no FireMax
        </h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-muted border-fire-orange/20 hover:border-fire-orange/40 transition-all">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{testimonial.avatar}</span>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.age} anos</p>
                </div>
              </div>
              <p className="text-foreground leading-relaxed">"{testimonial.text}"</p>
              <div className="mt-4 flex text-fire-gold">
                {'★'.repeat(5)}
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-6 text-foreground">Certificações e Garantias</h3>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <img 
              src={trustBadges} 
              alt="Certificações ANVISA e Ministério da Saúde" 
              className="max-w-xs h-auto opacity-90 hover:opacity-100 transition-opacity"
            />
            <div className="gold-gradient text-black px-6 py-3 rounded-full font-bold text-lg">
              🛡️ GARANTIA 90 DIAS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;